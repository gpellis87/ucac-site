# Volunteer Opportunities — Google Sheet + Apps Script setup

This is the manual setup needed to power `/volunteer` on the site. None of
this is deployed automatically — Google Sheets and Apps Script live outside
this repo, so these are steps to do by hand in your Google account.

## 1. Create the Sheet

Create a new Google Sheet with two tabs, named exactly as below (Apps Script
looks them up by name).

**Tab "Opportunities"** — header row, then one row per shift:

| Opportunity | Date | Time | Location | Spots Available | Status |
|---|---|---|---|---|---|
| Gallery Attendant | 9/5/2026 | 10:00 AM – 2:00 PM | UCCAC Gallery | 3 | Open |

- **Status** should be one of `Open`, `Full`, `Closed`, `Cancelled` (a
  dropdown via Data > Data validation is recommended, but not required).
- Only rows with Status `Open` **and** Spots Available > 0 show up on the
  site — the script enforces this, not just the coordinator remembering to
  toggle it.
- Spots Available is a live counter: signups decrement it automatically,
  cancellations increment it back. You can hand-edit it too if needed.

**Tab "Signups"** — header row, left empty otherwise; the script writes to
this automatically. Don't edit these columns by hand except to review/export:

| Timestamp | Opportunity | Date | Name | Email | Cancel Token | Status | Cancelled At | Opportunity Row Ref |
|---|---|---|---|---|---|---|---|---|

## 2. Add the script

From inside the Sheet: **Extensions → Apps Script**. Delete whatever's in
the default `Code.gs`, paste in the full contents of
[`Code.gs`](./Code.gs) from this folder.

Before deploying, edit these two lines near the top of the pasted script:

```js
const SITE_CANCEL_URL = "https://unionarts.org/api/volunteer/cancel";
const COORDINATOR_EMAIL = "info@unionarts.org"; // set to the real inbox that should be BCC'd on signups
```

## 3. Deploy as a Web App

**Deploy → New deployment**:
- Type: **Web app**
- Execute as: **Me**
- Who has access: **Anyone** (this has to be "Anyone," not "Anyone with a
  Google account" — the site calls it as an unauthenticated server, not a
  signed-in user)

Click Deploy. The first time, Google will walk you through an authorization
screen (the script needs permission to read/write the Sheet and send email)
— approve it. Copy the resulting URL, which ends in `/exec`.

## 4. Wire it into the site

Add the URL you just copied as an environment variable named
`VOLUNTEER_APPS_SCRIPT_URL`:

- In `.env.local` (for local testing) — see `.env.example` in the repo root
  for the exact variable name and a comment.
- In Vercel's project settings → Environment Variables (for the live site),
  for both Production and Preview — then trigger a redeploy so it picks it
  up.

## Updating the script later

**A plain Save in the Apps Script editor does NOT update the live URL.**
After any code change: **Deploy → Manage deployments → (pencil/edit icon on
the existing deployment) → New version → Deploy**.
