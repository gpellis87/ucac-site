/**
 * UCCAC Volunteer Opportunities -- Google Apps Script Web App
 *
 * Bound to the "Volunteer Opportunities" Google Sheet. Paste this whole file
 * into Extensions > Apps Script from inside that Sheet, replace the two
 * placeholder constants below, then Deploy > New deployment > Web app,
 * Execute as "Me", Who has access "Anyone". Copy the resulting /exec URL
 * into the site's VOLUNTEER_APPS_SCRIPT_URL environment variable.
 *
 * IMPORTANT: after editing this script, a plain Save does NOT update the
 * live /exec URL. Use Deploy > Manage deployments > Edit > New version.
 *
 * Expects two tabs on this spreadsheet, each with a header row:
 *
 *   "Opportunities"  A:Opportunity  B:Date  C:Time  D:Location
 *                    E:Spots Available  F:Status (Open/Full/Closed/Cancelled)
 *
 *   "Signups"        A:Timestamp  B:Opportunity  C:Date  D:Name  E:Email
 *                    F:Cancel Token  G:Status (Active/Cancelled)
 *                    H:Cancelled At  I:Opportunity Row Ref
 *
 * A row's identity is its Sheet row number (there's no separate ID column,
 * to keep the Opportunities tab at exactly 6 columns) -- doPost re-checks
 * the Opportunity+Date on that row still matches what the visitor loaded
 * before writing, so an insert/delete of rows above it between page load
 * and submit fails safely instead of writing to the wrong row.
 */

const OPPORTUNITIES_SHEET = "Opportunities";
const SIGNUPS_SHEET = "Signups";
const TIMEZONE = "America/New_York";

// TODO before deploying: point this at the live site's cancel endpoint, and
// set the volunteer coordinator's real email (they're BCC'd on every
// confirmation so they see new signups without keeping the Sheet open).
const SITE_CANCEL_URL = "https://unionarts.org/api/volunteer/cancel";
const COORDINATOR_EMAIL = "alicia@unionarts.org";

function doGet(e) {
  const action = ((e && e.parameter && e.parameter.action) || "list").toLowerCase();
  if (action === "cancel") {
    return cancelSignup_(e.parameter.token);
  }
  return listOpportunities_();
}

function doPost(e) {
  const action = ((e && e.parameter && e.parameter.action) || "").toLowerCase();
  if (action === "signup") {
    return submitSignup_(e.parameter);
  }
  return jsonOutput_({ ok: false, error: "Unknown action." });
}

// ---- List ------------------------------------------------------------

function listOpportunities_() {
  const sheet = getSheet_(OPPORTUNITIES_SHEET);
  if (!sheet) return jsonOutput_({ error: "Opportunities sheet not found." });

  const data = sheet.getDataRange().getValues();
  const rows = [];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const opportunity = row[0];
    if (!opportunity) continue;

    const spotsAvailable = Number(row[4]) || 0;
    const status = String(row[5] || "").trim().toLowerCase();

    // Closed/Cancelled rows are excluded entirely -- those are the
    // coordinator's "not for public consumption" states. Open-but-0-spots
    // and Full both stay in the list, though: the site renders those as a
    // disabled "Full" card (matching how sold-out classes are shown),
    // rather than making the opportunity silently vanish.
    if (status !== "open" && status !== "full") continue;

    rows.push({
      id: i + 1, // Sheet row number, 1-indexed with header as row 1
      opportunity: opportunity,
      date: formatDate_(row[1]),
      time: row[2],
      location: row[3],
      spotsAvailable: spotsAvailable,
      status: status === "open" && spotsAvailable > 0 ? "open" : "full",
    });
  }

  return jsonOutput_(rows);
}

// ---- Signup ------------------------------------------------------------

function submitSignup_(params) {
  const opportunityRow = Number(params.opportunityId);
  const opportunityTitle = String(params.opportunity || "").trim();
  const date = String(params.date || "").trim();
  const name = String(params.name || "").trim();
  const email = String(params.email || "").trim().toLowerCase();

  if (!opportunityRow || !opportunityTitle || !date || !name || !email) {
    return jsonOutput_({ ok: false, error: "Missing required fields." });
  }

  const oppSheet = getSheet_(OPPORTUNITIES_SHEET);
  if (!oppSheet) return jsonOutput_({ ok: false, error: "Opportunities sheet not found." });

  const lock = LockService.getScriptLock();
  let result;
  try {
    lock.waitLock(10000);
  } catch (err) {
    return jsonOutput_({ ok: false, error: "The system is busy right now -- please try again in a moment." });
  }

  let time = "";
  let location = "";

  try {
    const values = oppSheet.getRange(opportunityRow, 1, 1, 6).getValues()[0];
    const currentTitle = values[0];
    const currentDate = formatDate_(values[1]);
    const currentSpots = Number(values[4]) || 0;
    const currentStatus = String(values[5] || "").trim().toLowerCase();
    time = values[2];
    location = values[3];

    if (currentTitle !== opportunityTitle || currentDate !== date) {
      // The row this visitor loaded no longer matches -- most likely the
      // coordinator inserted/deleted rows above it. Fail safe rather than
      // write to whatever now happens to be at this row number.
      result = { ok: false, error: "This opportunity has changed. Please refresh the page and try again." };
    } else if (currentStatus !== "open" || currentSpots <= 0) {
      result = { ok: false, error: "Sorry, this opportunity is no longer available." };
    } else if (isDuplicateSignup_(opportunityRow, email)) {
      result = { ok: false, error: "You're already signed up for this opportunity." };
    } else {
      const newSpots = currentSpots - 1;
      oppSheet.getRange(opportunityRow, 5).setValue(newSpots);
      if (newSpots <= 0) {
        oppSheet.getRange(opportunityRow, 6).setValue("Full");
      }

      const token = Utilities.getUuid();
      appendSignup_(opportunityRow, opportunityTitle, date, name, email, token);
      result = { ok: true, opportunity: opportunityTitle, cancelToken: token };
    }
  } finally {
    // Release before sending mail -- MailApp is slow and doesn't need to
    // hold the shared lock.
    lock.releaseLock();
  }

  if (result.ok) {
    sendConfirmationEmail_(opportunityTitle, date, time, location, name, email, result.cancelToken);
  }

  return jsonOutput_(result);
}

function isDuplicateSignup_(opportunityRow, email) {
  const sheet = getSheet_(SIGNUPS_SHEET);
  if (!sheet) return false;

  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const rowRef = Number(row[8]);
    const rowEmail = String(row[4] || "").trim().toLowerCase();
    const status = String(row[6] || "").trim().toLowerCase();
    if (rowRef === opportunityRow && rowEmail === email && status === "active") {
      return true;
    }
  }
  return false;
}

function appendSignup_(opportunityRow, opportunityTitle, date, name, email, token) {
  const sheet = getSheet_(SIGNUPS_SHEET);
  sheet.appendRow([
    new Date(),        // A Timestamp
    opportunityTitle,  // B Opportunity
    date,               // C Date
    name,               // D Name
    email,              // E Email
    token,              // F Cancel Token
    "Active",           // G Status
    "",                 // H Cancelled At
    opportunityRow,     // I Opportunity Row Ref
  ]);
}

function sendConfirmationEmail_(opportunityTitle, date, time, location, name, email, token) {
  try {
    const cancelUrl = SITE_CANCEL_URL + "?token=" + encodeURIComponent(token);
    const lines = [
      "Hi " + name + ",",
      "",
      "You're signed up to volunteer:",
      "",
      opportunityTitle,
      formatDisplayDate_(date) + (time ? " · " + time + " ET" : ""),
    ];
    if (location) lines.push(location);
    lines.push(
      "",
      "Can't make it? Cancel your spot here:",
      cancelUrl,
      "",
      "Thank you for volunteering with Union County Community Arts Council!"
    );

    MailApp.sendEmail({
      to: email,
      bcc: COORDINATOR_EMAIL,
      subject: "You're signed up: " + opportunityTitle,
      body: lines.join("\n"),
      // MailApp always sends from the Google account that deployed this
      // script (there's no way to change the underlying address without a
      // verified Gmail "Send As" alias, which would mean switching to
      // GmailApp.sendEmail with a `from` option instead). Setting `name`
      // at least replaces the raw account address with a friendly sender
      // name in most email clients' display.
      name: "Union County Community Arts Council",
    });
  } catch (err) {
    // The signup already succeeded and was persisted above -- a mail
    // failure here shouldn't roll that back. Nothing to undo; just swallow.
  }
}

// ---- Cancel ------------------------------------------------------------

function cancelSignup_(token) {
  if (!token) return jsonOutput_({ ok: false, error: "Missing cancellation link." });

  const signupSheet = getSheet_(SIGNUPS_SHEET);
  if (!signupSheet) return jsonOutput_({ ok: false, error: "Signups sheet not found." });

  const lock = LockService.getScriptLock();
  let result;
  try {
    lock.waitLock(10000);
  } catch (err) {
    return jsonOutput_({ ok: false, error: "The system is busy right now -- please try again in a moment." });
  }

  try {
    const data = signupSheet.getDataRange().getValues();
    let foundRow = -1;
    let opportunityRow = null;
    let status = null;

    for (let i = 1; i < data.length; i++) {
      if (String(data[i][5]) === token) {
        foundRow = i + 1;
        opportunityRow = Number(data[i][8]);
        status = String(data[i][6] || "").trim().toLowerCase();
        break;
      }
    }

    if (foundRow === -1) {
      result = { ok: false, error: "That sign-up couldn't be found." };
    } else if (status === "cancelled") {
      // Already cancelled -- clicking the link twice should be a harmless
      // no-op, not an error or a double-increment of spots.
      result = { ok: true };
    } else {
      signupSheet.getRange(foundRow, 7).setValue("Cancelled");
      signupSheet.getRange(foundRow, 8).setValue(new Date());

      const oppSheet = getSheet_(OPPORTUNITIES_SHEET);
      if (oppSheet && opportunityRow) {
        const currentSpots = Number(oppSheet.getRange(opportunityRow, 5).getValue()) || 0;
        oppSheet.getRange(opportunityRow, 5).setValue(currentSpots + 1);
        // Deliberately does NOT flip Status back to "Open" -- that stays a
        // coordinator decision, so a shift someone just backed out of
        // doesn't silently reappear on the public site unreviewed.
      }

      result = { ok: true };
    }
  } finally {
    lock.releaseLock();
  }

  return jsonOutput_(result);
}

// ---- Helpers ------------------------------------------------------------

function getSheet_(name) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
}

function formatDate_(value) {
  if (value instanceof Date) {
    return Utilities.formatDate(value, TIMEZONE, "yyyy-MM-dd");
  }
  return String(value || "");
}

function jsonOutput_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// isoDate is "yyyy-MM-dd" (the same string formatDate_ produces). Building a
// Date from numeric (year, month, day) components -- not parsing the string
// directly -- reads it as local time, avoiding any UTC-midnight surprises.
// Used only for the confirmation email; the site itself formats the ISO
// string it receives independently, the same way.
function formatDisplayDate_(isoDate) {
  const parts = String(isoDate || "").split("-").map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return isoDate;
  const [year, month, day] = parts;
  const dayName = DAY_NAMES[new Date(year, month - 1, day).getDay()];
  return dayName + ", " + MONTH_NAMES[month - 1] + " " + day + ", " + year;
}
