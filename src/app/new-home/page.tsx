import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "A New Home | Union County Community Arts Council",
  description:
    "The Union County Community Arts Council is moving to a new space — more room for exhibitions, programs, and community. Follow the journey.",
};

export default function NewHomePage() {
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
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Announcement</p>
            <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
              A New Home
            </h1>
            <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed md:text-lg">
              The Union County Community Arts Council is moving — and we want you to be part of the journey.
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="section-pad py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_320px]">

            {/* Main copy */}
            <div className="space-y-6 text-base leading-relaxed text-parchment/80 md:text-lg">
              <p>
                After years of building something meaningful in this community, the Union County
                Community Arts Council is stepping into a new space — one that gives us the room
                to grow in the ways we&apos;ve always envisioned.
              </p>
              <p>
                This move is more than logistical. It&apos;s a signal of what&apos;s possible: more
                exhibitions, expanded programming, and a genuine gathering place for the
                creativity Union County has to offer. Our new home will open more doors — for
                artists, students, families, and everyone who believes in the power of the arts
                to connect us.
              </p>
              <p>
                In the coming weeks and months, we&apos;ll bring you along as the space takes shape.
                You&apos;ll see the transformation in real time — the people behind it, the milestones
                along the way, and the moment the doors finally open. Follow us on{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61574355290119"
                  target="_blank"
                  rel="noreferrer"
                  className="text-terracotta hover:underline"
                >
                  Facebook
                </a>{" "}
                for behind-the-scenes updates as the journey unfolds.
              </p>
              <p>
                This is a community moment. Our artists, supporters, and neighbors are all part
                of this story — and we can&apos;t wait to celebrate the opening with you.
              </p>
              <p className="text-parchment/60">
                The best chapter is just beginning.
              </p>
            </div>

            {/* Sidebar: new address */}
            <div className="space-y-5">
              <div className="border border-terracotta/30 bg-black/30 p-7">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta mb-4">Our New Address</p>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-terracotta/60" />
                  <div className="text-sm text-parchment/80 leading-relaxed">
                    <p>300 North Hayne Street</p>
                    <p>Monroe, NC 28112</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=300+North+Hayne+Street+Monroe+NC+28112"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-[0.68rem] uppercase tracking-[0.14em] text-terracotta hover:underline"
                >
                  Get Directions →
                </a>
              </div>

              <div className="border border-parchment/15 bg-black/30 p-7">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-parchment/50 mb-3">Stay Updated</p>
                <p className="text-sm text-parchment/65 leading-relaxed">
                  Follow us on Facebook for behind-the-scenes glimpses, progress updates, and opening announcements.
                </p>
                <a
                  href="https://www.facebook.com/profile.php?id=61574355290119"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block border border-parchment/30 px-4 py-2 text-[0.68rem] uppercase tracking-[0.14em] text-parchment/70 transition hover:border-terracotta hover:text-parchment"
                >
                  Follow on Facebook
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Map */}
      <div className="section-pad pb-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-4 h-px w-full bg-gradient-to-r from-terracotta/30 via-parchment/10 to-transparent" />
          <p className="mb-5 text-[0.68rem] uppercase tracking-[0.22em] text-parchment/40">Find Us</p>
          <div className="overflow-hidden border border-parchment/15 aspect-[16/7]">
            <iframe
              src="https://www.google.com/maps?q=300%20North%20Hayne%20Street%2C%20Monroe%2C%20NC%2028112&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.6) brightness(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="300 North Hayne Street, Monroe, NC"
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-xs text-parchment/35">300 North Hayne Street · Monroe, NC 28112</p>
            <a
              href="https://maps.google.com/?q=300+North+Hayne+Street+Monroe+NC+28112"
              target="_blank"
              rel="noreferrer"
              className="text-[0.68rem] uppercase tracking-[0.14em] text-terracotta hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
