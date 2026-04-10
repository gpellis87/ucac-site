import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  description:
    "Union County Community Arts Council supports artists and communities through exhibitions, youth programs, workshops, and cultural events in Monroe, NC.",
};

export default function Page() {
  return <HomePage />;
}
