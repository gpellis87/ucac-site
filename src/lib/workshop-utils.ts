import { RegistrationStatus, Workshop } from "@/data/workshops";

export const registrationStatusStyle: Record<RegistrationStatus, string> = {
  open: "border-navy bg-navy text-white shadow-[0_10px_20px_rgba(12,44,92,0.28)]",
  waitlist: "border-[#f1dfbf] bg-[#f4e8d3] text-[#201914] shadow-[0_10px_20px_rgba(0,0,0,0.18)]",
  // Explicit text-white rather than text-parchment/70 -- globals.css force-
  // remaps every text-parchment/* class to dark text site-wide (leftover
  // from the light-theme conversion), which made this unreadable: dark
  // badge background + forced-dark text. text-white isn't covered by that
  // override, so it actually stays white. (Same bug as Volunteer's "Full"
  // badge, same fix -- see src/lib/volunteer-utils.ts.)
  "sold-out": "border-[#5b5b60] bg-[#5b5b60] text-white shadow-[0_10px_20px_rgba(0,0,0,0.24)]",
  "coming-soon": "border-[#6f8cb5] bg-[#3e5474] text-white shadow-[0_10px_20px_rgba(0,0,0,0.24)]",
};

export function isRegistrationDisabled(workshop: Pick<Workshop, "registrationStatus" | "zeffyUrl">): boolean {
  return (
    workshop.registrationStatus === "sold-out" ||
    workshop.registrationStatus === "coming-soon" ||
    !workshop.zeffyUrl
  );
}

export function priceLabel(price: number): string {
  return price === 0 ? "Free" : `$${price.toLocaleString()}`;
}
