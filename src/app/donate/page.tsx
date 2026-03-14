import type { Metadata } from "next";
import DonatePageClient from "@/components/DonatePageClient";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Union County Arts Council through one-time or monthly giving, sponsorship, and volunteer engagement.",
};

export default function DonatePage() {
  return <DonatePageClient />;
}
