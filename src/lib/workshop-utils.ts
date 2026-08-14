import { RegistrationStatus, Workshop } from "@/data/workshops";

export const registrationStatusStyle: Record<RegistrationStatus, string> = {
  open: "border-navy bg-navy text-white shadow-[0_10px_20px_rgba(23, 63, 115, 0.28)]",
  waitlist: "border-[#f1dfbf] bg-[#f4e8d3] text-[#201914] shadow-[0_10px_20px_rgba(0,0,0,0.18)]",
  "sold-out": "border-parchment/25 bg-[#2b241d]/90 text-parchment/70",
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
