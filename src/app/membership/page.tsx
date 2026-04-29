import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

const MEMBERSHIP_URL = "https://www.zeffy.com/en-US/ticketing/union-county-community-arts-council-memberships";

export const metadata: Metadata = {
  title: "Membership | Union County Community Arts Council",
  description:
    "Become a founding member of the Union County Community Arts Council. Support the arts in Monroe, NC and enjoy exclusive member benefits.",
};

const benefits = [
  "Special early bird and member pricing on special events",
  "10% off artwork in our exhibition spaces and hallways",
  "10% off pricing on adult and youth classes and workshops",
  "10% off all space rentals — gallery or learning studio",
  "Rent wall space in the People's Studio to exhibit your work",
  "Monthly Artist Coffee Circle — create, chat, and share ideas",
  "Free annual members showcase artist call (no entry fee)",
  "Reduced entry fees for other artist calls",
  "Reduced commission on all exhibited work",
  "One-on-one consulting with UCCAC staff (by appointment)",
  "Exclusive monthly artist member e-news with regional and nationwide opportunities",
  "Listed in the artist directory on the UCCAC website",
  "Submit work to be promoted through UCCAC's monthly general e-news",
];

export default function MembershipPage() {
  return (
    <div className="pb-24">

      {/* Breadcrumb */}
      <div className="section-pad border-b border-parchment/10 py-3">
        <div className="mx-auto max-w-[1500px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-parchment/62 transition hover:text-parchment"
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
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Join Us</p>
            <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
              Membership
            </h1>
            <p className="mt-5 max-w-2xl text-base text-parchment/78 leading-relaxed md:text-lg">
              For more than 35 years, the Union County Community Arts Council has been a welcoming space where artists and the public connect, explore creativity, and experience art in an approachable way. Membership is a simple and meaningful way to support that mission — and enjoy some wonderful benefits along the way.
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
          </div>
        </div>
      </div>

      <div className="section-pad py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">

            {/* Benefits */}
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-parchment/62 mb-6">Member Benefits</p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-terracotta/40 bg-terracotta/10">
                      <Check size={11} className="text-terracotta" />
                    </span>
                    <span className="text-sm text-parchment/87 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-parchment/10 pt-8">
                <p className="text-sm text-parchment/65 leading-relaxed max-w-xl">
                  Through inclusive programs for all ages and abilities, community outreach, studio opportunities, and engaging exhibitions, the UCCAC is dedicated to breaking down barriers shaped by bias and inequality — ensuring everyone has equal access to arts and culture.
                </p>
                <p className="mt-4 text-sm text-parchment/65 leading-relaxed max-w-xl">
                  Come grow with us as we move into our new home at 300 North Hayne Street.
                </p>
              </div>
            </div>

            {/* Pricing sidebar */}
            <div className="space-y-5">

              {/* Founding member callout */}
              <div className="relative overflow-hidden border border-terracotta/40 bg-black/40 p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,84,42,0.18),transparent_60%)]" />
                <div className="relative z-10">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-terracotta">Limited Time Offer</p>
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-parchment/62">Founding Member</p>
                  <p className="mt-2 editorial-title text-6xl text-parchment">$75</p>
                  <p className="mt-1 text-xs text-parchment/58">per year</p>
                  <div className="mt-5 h-px w-full bg-parchment/10" />
                  <p className="mt-4 text-sm text-parchment/72 leading-relaxed">
                    Be among the first to join as we move into our new space. Founding members help shape what the UCCAC becomes next.
                  </p>
                  <a
                    href={MEMBERSHIP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block w-full bg-terracotta px-6 py-3 text-center text-[0.72rem] uppercase tracking-[0.18em] text-parchment transition hover:bg-terracotta/85"
                  >
                    Become a Member
                  </a>
                </div>
              </div>

              {/* Membership QR */}
              <div className="border border-parchment/15 bg-black/30 p-7 text-center">
                <p className="mb-4 text-[0.68rem] uppercase tracking-[0.22em] text-parchment/62">Scan to Join</p>
                <a href={MEMBERSHIP_URL} target="_blank" rel="noreferrer" className="inline-block transition hover:opacity-75">
                  <Image src="/qr-membership.png" alt="Scan to become a member" width={160} height={160} className="mx-auto" />
                </a>
                <p className="mt-3 text-xs text-parchment/48">Scan with your phone to sign up</p>
              </div>

              {/* What's coming */}
              <div className="border border-parchment/15 bg-black/30 p-7">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-parchment/62 mb-3">Coming to Our New Space</p>
                <ul className="space-y-2.5 text-sm text-parchment/72">
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 bg-terracotta/50 shrink-0" />
                    Artist studio spaces
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 bg-terracotta/50 shrink-0" />
                    Creative teaching studios
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 bg-terracotta/50 shrink-0" />
                    Exhibition gallery
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 bg-terracotta/50 shrink-0" />
                    The Shop
                  </li>
                </ul>
                <Link
                  href="/new-home"
                  className="mt-5 inline-block text-[0.68rem] uppercase tracking-[0.14em] text-terracotta hover:underline"
                >
                  Learn more about our new home →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
