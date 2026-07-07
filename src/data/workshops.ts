export type RegistrationStatus = "open" | "waitlist" | "sold-out" | "coming-soon";

export interface Workshop {
  id: string;
  slug: string;
  title: string;
  instructor: string | null;
  category: string | null;
  skillLevel: string | null;
  startDate: string;
  scheduleText: string;
  location: string | null;
  price: number;
  registrationStatus: RegistrationStatus;
  zeffyUrl: string | null;
  imageUrl: string | null;
  description: string | null;
}

export const registrationStatusLabel: Record<RegistrationStatus, string> = {
  open: "Register",
  waitlist: "Join the Waitlist",
  "sold-out": "Sold Out",
  "coming-soon": "Coming Soon",
};
