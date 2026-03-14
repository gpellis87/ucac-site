import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Union County Arts Council supports artists and communities through exhibitions, youth programs, workshops, and cultural events.",
};

export default function Page() {
  return <HomePage />;
}
