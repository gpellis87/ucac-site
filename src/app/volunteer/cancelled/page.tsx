import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Sign-Up Cancelled",
  robots: { index: false, follow: false },
};

export default function VolunteerCancelledPage({
  searchParams,
}: {
  searchParams: { status?: string; message?: string };
}) {
  const success = searchParams.status !== "error";

  return (
    <div className="pb-24">
      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">Volunteer</p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            {success ? "Sign-Up Cancelled" : "Something Went Wrong"}
          </h1>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-navy/60 via-navy/20 to-transparent" />
        </div>
      </SectionReveal>

      <div className="section-pad">
        <div className="mx-auto max-w-[1500px]">
          <div className="theme-panel max-w-2xl border p-6">
            <p className="text-sm leading-relaxed text-parchment/75">
              {success
                ? "Your spot has been freed up for someone else. Thank you for letting us know."
                : searchParams.message || "We couldn't process that cancellation link."}
            </p>
            <Link
              href="/volunteer"
              className="mt-6 inline-flex border border-parchment/20 px-4 py-3 text-xs uppercase tracking-[0.16em] text-parchment/80 transition hover:border-navy hover:text-navy"
            >
              Back to Volunteer Opportunities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
