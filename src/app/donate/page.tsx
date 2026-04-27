import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate | Union County Community Arts Council",
  description:
    "Support the arts in Union County. Your donation helps fund programs, exhibitions, and arts education for students and teachers across Union County.",
};

const GENERAL_DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/donate-to-the-union-county-community-arts-council";

const BARBARA_FAULK_URL =
  "https://www.zeffy.com/en-US/donation-form/barbara-faulk-educators-grant";

export default function DonatePage() {
  return (
    <div className="pb-24">

      {/* Breadcrumb */}
      <div className="section-pad border-b border-parchment/10 py-3">
        <div className="mx-auto max-w-[1500px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-parchment/50 transition hover:text-parchment"
          >
            <ArrowLeft size={13} />
            Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(192,84,42,0.18),transparent_55%)]" />
        <div className="section-pad relative py-16">
          <div className="mx-auto max-w-[1500px]">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Support the Arts</p>
            <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
              Donate
            </h1>
            <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed">
              Choose how you&apos;d like to support the arts in Union County. Every gift — large or small — makes a real difference.
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Giving options */}
      <div className="section-pad py-12">
        <div className="mx-auto max-w-[1500px]">
          <p className="mb-8 text-[0.68rem] uppercase tracking-[0.2em] text-parchment/40">Ways to Give</p>
          <div className="grid gap-6 lg:grid-cols-2">

            {/* Card 1: General Support */}
            <div className="flex flex-col border border-parchment/20 bg-black/20 p-8 md:p-10">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-parchment/45">General Support</p>
              <h2 className="display mt-3 text-3xl text-parchment">Support the Arts Council</h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-parchment/65">
                Your tax-deductible gift directly funds exhibitions, youth programs, community events,
                and our new home at 300 North Hayne Street. Processed through Zeffy — 100% of every
                dollar goes directly to the arts council.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href={GENERAL_DONATE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-terracotta px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-parchment transition hover:bg-terracotta/85"
                >
                  <Heart size={13} /> Donate Now
                </a>
                <div className="flex items-center gap-3">
                  <a href={GENERAL_DONATE_URL} target="_blank" rel="noreferrer" className="transition hover:opacity-75">
                    <Image src="/qr-donate.png" alt="Scan to donate to UCCAC" width={64} height={64} />
                  </a>
                  <p className="text-[0.62rem] uppercase tracking-[0.14em] text-parchment/30 leading-snug">
                    Or scan<br />to donate
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Barbara Faulk Educators Grant */}
            <div className="relative flex flex-col overflow-hidden border border-terracotta/35 bg-black/20 p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,84,42,0.1),transparent_60%)]" />
              <div className="relative flex flex-1 flex-col">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-terracotta">Named Grant</p>
                <h2 className="display mt-3 text-3xl text-parchment">
                  Barbara Faulk<br />Educators Grant
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-parchment/65">
                  Honoring 35 years of leadership and a lifelong passion for arts in education. This
                  grant supports classroom teachers and arts programs serving students across Union County.
                </p>
                <div className="mt-8">
                  <a
                    href={BARBARA_FAULK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-terracotta px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-parchment transition hover:bg-terracotta/85"
                  >
                    <Heart size={13} /> Give to This Grant
                  </a>
                  <p className="mt-3 text-[0.62rem] text-parchment/35">Read Barbara&apos;s story below.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Barbara Faulk tribute */}
      <div className="section-pad py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 h-px bg-gradient-to-r from-transparent via-parchment/15 to-transparent" />
          <div className="grid gap-0 lg:grid-cols-[3px_1fr]">
            <div className="hidden lg:block bg-terracotta/50 rounded-full" />
            <div className="lg:pl-12">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">A Celebration</p>
              <h2 className="editorial-title mt-3 text-4xl leading-tight md:text-5xl">Barbara Faulk</h2>
              <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-parchment/70">
                <p>
                  I would like to take a moment to celebrate Barbara Faulk. Barbara was with the Arts
                  Council for 35 years and served as Executive Director from 1991 until she retired in
                  2022. She was a force of nature, a champion of the arts, passionate about building
                  this community.
                </p>
                <p>
                  She was like the salt and butter on the baked potato — full of flavor, turning
                  something ordinary into something extraordinary. She understood that children are our
                  future. Barbara had a passion for arts in education, for supporting classroom teachers,
                  and for serving the under-served. Through her passion, support, and serving heart she
                  made Union County a wonderful place to live and grow up.
                </p>
                <p>
                  For her legacy to be remembered for generations to come, I am proud to announce that
                  we are honoring Barbara Faulk by creating the{" "}
                  <strong className="text-parchment">Barbara Faulk Educators Grant</strong>{" "}
                  — so that her energy and love of life will continue always.
                </p>
              </div>
              <a
                href={BARBARA_FAULK_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 border border-terracotta px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-terracotta transition hover:bg-terracotta hover:text-parchment"
              >
                <Heart size={13} /> Give to This Grant
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
