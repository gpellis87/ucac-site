import { NextResponse } from "next/server";
import { cancelVolunteerSignup } from "@/lib/volunteer-api";

// This is the literal URL embedded in the confirmation email's cancel link,
// so it has to be a plain browser-navigable GET -- it proxies to the Apps
// Script cancel action, then redirects to a styled confirmation page rather
// than returning raw JSON, since a person is looking at this in a browser.
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  const destination = new URL("/volunteer/cancelled", request.url);

  if (!token) {
    destination.searchParams.set("status", "error");
    destination.searchParams.set("message", "Missing cancellation link.");
    return NextResponse.redirect(destination);
  }

  const result = await cancelVolunteerSignup(token);

  if (result.ok) {
    destination.searchParams.set("status", "success");
  } else {
    destination.searchParams.set("status", "error");
    destination.searchParams.set("message", result.error);
  }

  return NextResponse.redirect(destination);
}
