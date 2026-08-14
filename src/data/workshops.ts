export type RegistrationStatus = "open" | "waitlist" | "sold-out" | "coming-soon";
export type SessionType = "single-session" | "multi-day" | "weekly-series" | "ongoing";

export interface Workshop {
  id: string;
  slug: string;
  title: string;
  instructor: string | null;
  category: string | null;
  skillLevel: string | null;
  startDate: string;
  sessionType: SessionType | null;
  scheduleText: string;
  location: string | null;
  price: number;
  memberPrice: number | null;
  materialsCost: number | null;
  registrationStatus: RegistrationStatus;
  zeffyUrl: string | null;
  imageUrl: string | null;
  description: string | null;
  overview: string | null;
  instructorBio: string | null;
}

export const registrationStatusLabel: Record<RegistrationStatus, string> = {
  open: "Register",
  waitlist: "Join the Waitlist",
  "sold-out": "Sold Out",
  "coming-soon": "Coming Soon",
};

export const sessionTypeLabel: Record<SessionType, string> = {
  "single-session": "Single Session",
  "multi-day": "Multi-Day",
  "weekly-series": "Weekly Series",
  ongoing: "Ongoing / Drop-In",
};
