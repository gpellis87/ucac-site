import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import WorkshopsExplorer from "@/components/WorkshopsExplorer";
import { SectionReveal } from "@/components/SectionReveal";
import { getWorkshops } from "@/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Classes & Workshops",
  description:
    "Browse upcoming classes and workshops at the Union County Community Arts Council — pottery, painting, and more for all skill levels.",
  robots: { index: false, follow: false },
};

export default async function WorkshopsPage() {
  const workshops = await getWorkshops();

  return (
    <div className="pb-24">
      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-terracotta">UCCAC Studio · Monroe, NC</p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            Classes &amp; Workshops
          </h1>
          <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed">
            Hands-on classes taught by local artists, right here at the Arts Council. New sessions are added
            throughout the year — browse what&apos;s coming up and reserve your spot below.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
        </div>
      </SectionReveal>

      <div className="section-pad">
        <div className="mx-auto max-w-[1500px]">
          <div className="theme-panel mb-10 flex flex-col gap-3 border p-5 sm:flex-row sm:items-start sm:gap-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" />
            <p className="text-sm leading-relaxed text-parchment/75">
              Registration and payment for all classes is handled securely through{" "}
              <span className="text-parchment">Zeffy</span>, a platform built for nonprofits that charges the
              Arts Council no processing or platform fees — so 100% of your class fee supports local artists and
              community programming. At checkout, Zeffy will separately offer you the option to leave a tip to
              support their free platform for nonprofits; that&apos;s optional and separate from your class fee.
            </p>
          </div>

          {workshops.length > 0 ? (
            <WorkshopsExplorer workshops={workshops} />
          ) : (
            <p className="py-20 text-center text-parchment/60">No classes are currently listed. Check back soon.</p>
          )}
        </div>
      </div>
    </div>
  );
}
