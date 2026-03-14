import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Union County Arts Council for events, volunteer opportunities, donations, and partnership inquiries.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
