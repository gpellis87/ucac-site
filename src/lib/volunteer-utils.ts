import { VolunteerOpportunity } from "@/data/volunteer";

export const volunteerStatusStyle: Record<VolunteerOpportunity["status"], string> = {
  open: "border-navy bg-navy text-white shadow-[0_10px_20px_rgba(12,44,92,0.28)]",
  full: "border-parchment/25 bg-[#2b241d]/90 text-parchment/70",
};

export function isVolunteerFull(opportunity: Pick<VolunteerOpportunity, "status" | "spotsAvailable">): boolean {
  return opportunity.status === "full" || opportunity.spotsAvailable <= 0;
}

export function spotsLabel(spotsAvailable: number): string {
  return spotsAvailable === 1 ? "1 spot left" : `${spotsAvailable} spots left`;
}
