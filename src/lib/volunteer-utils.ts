import { VolunteerOpportunity } from "@/data/volunteer";

export const volunteerStatusStyle: Record<VolunteerOpportunity["status"], string> = {
  open: "border-navy bg-navy text-white shadow-[0_10px_20px_rgba(12,44,92,0.28)]",
  // Explicit text-white rather than text-parchment/70 -- globals.css force-
  // remaps every text-parchment/* class to dark text site-wide (leftover
  // from the light-theme conversion), which made this unreadable: dark
  // badge background + forced-dark text. text-white isn't covered by that
  // override, so it actually stays white.
  full: "border-[#5b5b60] bg-[#5b5b60] text-white shadow-[0_10px_20px_rgba(0,0,0,0.24)]",
};

export function isVolunteerFull(opportunity: Pick<VolunteerOpportunity, "status" | "spotsAvailable">): boolean {
  return opportunity.status === "full" || opportunity.spotsAvailable <= 0;
}

export function spotsLabel(spotsAvailable: number): string {
  return spotsAvailable === 1 ? "1 spot left" : `${spotsAvailable} spots left`;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// date is a plain "YYYY-MM-DD" string with no timezone info. Building a Date
// from numeric (year, month, day) components -- not parsing the string
// directly -- reads it as local time, avoiding the same UTC-midnight
// parsing pitfall already fixed once in the Classes page's Month filter.
export function formatVolunteerDate(dateString: string): string {
  const [year, month, day] = dateString.split("-").map(Number);
  const dayName = DAY_NAMES[new Date(year, month - 1, day).getDay()];
  return `${dayName}, ${MONTH_NAMES[month - 1]} ${day}, ${year}`;
}
