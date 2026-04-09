import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  description:
    "Union County Community Arts Council supports artists and communities through exhibitions, youth programs, workshops, and cultural events in Monroe, NC.",
};

export default function Page() {
  return <ComingSoonPage />;
}
