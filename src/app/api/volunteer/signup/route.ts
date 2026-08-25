import { NextResponse } from "next/server";
import { submitVolunteerSignup } from "@/lib/volunteer-api";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  const opportunityId = Number(body.opportunityId);
  const opportunity = String(body.opportunity || "").trim();
  const date = String(body.date || "").trim();
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();

  // Validate server-side too -- the form does the same checks, but this
  // route is the actual trust boundary, not the browser.
  if (!Number.isFinite(opportunityId) || !opportunity || !date) {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }
  if (!name) {
    return NextResponse.json({ ok: false, error: "Name is required." }, { status: 200 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 200 });
  }

  const result = await submitVolunteerSignup({ opportunityId, opportunity, date, name, email });

  // A user-actionable outcome (full, duplicate, missing config) still comes
  // back as a normal 200 -- the caller renders result.error inline in the
  // form rather than treating it as a fetch failure.
  return NextResponse.json(result, { status: 200 });
}
