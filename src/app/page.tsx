import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { getExhibits } from "@/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  description:
    "Union County Community Arts Council supports artists and communities through exhibitions, youth programs, workshops, and cultural events in Monroe, NC.",
};

export default async function Page() {
  const exhibits = await getExhibits();
  return <HomePage exhibits={exhibits} />;
}
