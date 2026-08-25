import { VolunteerOpportunity, VolunteerStatus } from "@/data/volunteer";

// No "server-only" package guard here (this codebase doesn't use one --
// see src/sanity/client.ts for the same pattern); this module is only ever
// imported from server components and API route handlers, never a "use
// client" component, which keeps VOLUNTEER_APPS_SCRIPT_URL out of the
// client bundle.

// The Apps Script Web App URL can write/decrement live data, so unlike the
// NEXT_PUBLIC_ Sanity vars it must never reach the client bundle -- read it
// only from this server-only module and the two API routes that import it.
function getVolunteerApiUrl(): string | null {
  return process.env.VOLUNTEER_APPS_SCRIPT_URL || null;
}

type RawOpportunity = {
  id: number;
  opportunity: string;
  date: string;
  time: string;
  location: string;
  spotsAvailable: number;
  status: string;
};

function normalizeStatus(status: string, spotsAvailable: number): VolunteerStatus {
  return status.toLowerCase() === "open" && spotsAvailable > 0 ? "open" : "full";
}

// Mirrors the graceful-degradation convention in src/sanity/client.ts --
// missing config or a failed fetch returns an empty list instead of
// throwing, so the page can render its normal empty state rather than crash.
export async function getVolunteerOpportunities(): Promise<VolunteerOpportunity[]> {
  const url = getVolunteerApiUrl();
  if (!url) return [];

  try {
    const res = await fetch(`${url}?action=list`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const rows: RawOpportunity[] = await res.json();
    if (!Array.isArray(rows)) return [];
    return rows.map((row) => ({
      id: row.id,
      opportunity: row.opportunity,
      date: row.date,
      time: row.time,
      location: row.location,
      spotsAvailable: row.spotsAvailable,
      status: normalizeStatus(row.status, row.spotsAvailable),
    }));
  } catch {
    return [];
  }
}

export type SignupResult =
  | { ok: true; opportunity: string; cancelToken: string }
  | { ok: false; error: string };

// Apps Script Web Apps always respond HTTP 200 regardless of outcome, so the
// {ok, error} field on the parsed body -- not the HTTP status -- is the real
// result. This function is the one place that quirk is handled; callers
// (the signup API route) only ever see a clean SignupResult.
export async function submitVolunteerSignup(params: {
  opportunityId: number;
  opportunity: string;
  date: string;
  name: string;
  email: string;
}): Promise<SignupResult> {
  const url = getVolunteerApiUrl();
  if (!url) return { ok: false, error: "Volunteer sign-ups aren't configured yet." };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        action: "signup",
        opportunityId: String(params.opportunityId),
        opportunity: params.opportunity,
        date: params.date,
        name: params.name,
        email: params.email,
      }),
      cache: "no-store",
    });
    if (!res.ok) return { ok: false, error: "Something went wrong reaching the sign-up service." };
    const body = await res.json();
    if (body.ok) return { ok: true, opportunity: body.opportunity, cancelToken: body.cancelToken };
    return { ok: false, error: body.error || "That opportunity is no longer available." };
  } catch {
    return { ok: false, error: "Something went wrong reaching the sign-up service." };
  }
}

export type CancelResult = { ok: true } | { ok: false; error: string };

export async function cancelVolunteerSignup(token: string): Promise<CancelResult> {
  const url = getVolunteerApiUrl();
  if (!url) return { ok: false, error: "Volunteer sign-ups aren't configured yet." };

  try {
    const res = await fetch(`${url}?action=cancel&token=${encodeURIComponent(token)}`, {
      cache: "no-store",
    });
    if (!res.ok) return { ok: false, error: "Something went wrong reaching the sign-up service." };
    const body = await res.json();
    if (body.ok) return { ok: true };
    return { ok: false, error: body.error || "That sign-up couldn't be found." };
  } catch {
    return { ok: false, error: "Something went wrong reaching the sign-up service." };
  }
}
