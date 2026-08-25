export type VolunteerStatus = "open" | "full";

export interface VolunteerOpportunity {
  id: number;
  opportunity: string;
  date: string;
  time: string;
  location: string;
  spotsAvailable: number;
  status: VolunteerStatus;
}

export const volunteerStatusLabel: Record<VolunteerStatus, string> = {
  open: "Sign Up",
  full: "Full",
};
