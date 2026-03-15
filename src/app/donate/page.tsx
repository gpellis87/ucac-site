import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { DONATE_PORTAL_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Donate to Union County Community Arts Council via the official contribution portal.",
};

export default function DonatePage() {
  redirect(DONATE_PORTAL_URL);
}
