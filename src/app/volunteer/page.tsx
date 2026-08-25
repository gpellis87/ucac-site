import type { Metadata } from "next";
import Link from "next/link";
import { HandHeart } from "lucide-react";
import VolunteerExplorer from "@/components/VolunteerExplorer";
import { SectionReveal } from "@/components/SectionReveal";
import { getVolunteerOpportunities } from "@/lib/volunteer-api";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Sign up for upcoming volunteer opportunities at the Union County Community Arts Council.",
  robots: { index: false, follow: false },
};

export default async function VolunteerPage() {
  const opportunities = await getVolunteerOpportunities();

  return (
    <div className="pb-24">
      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">UCCAC · Monroe, NC</p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            Volunteer
          </h1>
          <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed">
            Sign up for a specific upcoming shift below. Looking for a broader way to get
            involved instead?{" "}
            <Link href="/support#volunteer" className="text-navy underline underline-offset-4 transition hover:text-parchment">
              Share your general volunteer interest
            </Link>{" "}
            and we&apos;ll reach out as opportunities come up.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-navy/60 via-navy/20 to-transparent" />
        </div>
      </SectionReveal>

      <div className="section-pad">
        <div className="mx-auto max-w-[1500px]">
          <div className="theme-panel mb-10 flex flex-col gap-3 border p-5 sm:flex-row sm:items-start sm:gap-4">
            <HandHeart className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
            <p className="text-sm leading-relaxed text-parchment/75">
              Each shift has a limited number of spots. Sign up with your name and email below —
              you&apos;ll get a confirmation email with a link you can use to cancel anytime if your
              plans change, freeing your spot up for someone else.
            </p>
          </div>

          {opportunities.length > 0 ? (
            <VolunteerExplorer opportunities={opportunities} />
          ) : (
            <p className="py-20 text-center text-parchment/60">
              No volunteer opportunities are currently listed. Check back soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
