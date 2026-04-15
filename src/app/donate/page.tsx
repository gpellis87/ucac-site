import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate | Union County Community Arts Council",
  description:
    "Support the arts in Union County. Your donation helps fund programs, exhibitions, and the arts council's new home at 300 North Hayne Street.",
};

const DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/donate-to-the-union-county-community-arts-council";

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
        <div className="section-pad relative py-20">
          <div className="mx-auto max-w-[1500px]">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Support the Arts</p>
            <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
              Donate
            </h1>
            <p className="mt-5 max-w-2xl text-base text-parchment/70 leading-relaxed md:text-lg">
              Your generosity helps fund exhibitions, programming, student outreach, and our new home at 300 North Hayne Street. Every gift makes a difference.
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="section-pad py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">

            {/* Left: impact copy */}
            <div className="space-y-6 text-base leading-relaxed text-parchment/75">
              <p>
                The Union County Community Arts Council has been a welcoming home for artists,
                students, and the broader community for over 35 years. We&apos;re proud that our
                programs reach more than 140,000 residents each year — and we&apos;re just getting started.
              </p>
              <p>
                As we move into our new home at 300 North Hayne Street, we&apos;re expanding what&apos;s
                possible: more studio space, expanded programming, a professional gallery, and
                a curated shop. Your donation helps make that happen.
              </p>
              <p>
                All donations are processed securely through Zeffy, a nonprofit fundraising
                platform with zero platform fees — meaning 100% of your gift goes directly
                to the arts council.
              </p>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-terracotta px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.18em] text-parchment transition hover:bg-terracotta/85"
              >
                <Heart size={14} /> Donate Now
              </a>
            </div>

            {/* Right: QR code */}
            <div className="flex flex-col items-center border border-parchment/15 bg-black/30 p-8 text-center">
              <p className="mb-4 text-[0.68rem] uppercase tracking-[0.22em] text-parchment/50">Scan to Donate</p>
              <a href={DONATE_URL} target="_blank" rel="noreferrer" className="inline-block transition hover:opacity-75">
                <Image
                  src="/qr-donate.png"
                  alt="Scan to donate to the Union County Community Arts Council"
                  width={200}
                  height={200}
                />
              </a>
              <p className="mt-4 text-xs text-parchment/35">Scan with your phone camera</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
