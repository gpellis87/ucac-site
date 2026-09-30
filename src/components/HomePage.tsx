"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Facebook, Instagram, ChevronDown, Heart } from "lucide-react";

import { SectionReveal } from "@/components/SectionReveal";
import ExhibitCard from "@/components/ExhibitCard";
import SponsorsStrip from "@/components/SponsorsStrip";
import ClassesCarousel from "@/components/ClassesCarousel";
import type { Exhibit } from "@/data/exhibits";
import type { Workshop } from "@/data/workshops";
import type { Announcement } from "@/sanity/queries";
import { sanityImg } from "@/sanity/image";

function AnnouncementCta({ cta }: { cta: { label: string; url: string } }) {
  const isExternal = cta.url.startsWith("http");
  const cls = "ghost-btn text-center text-[0.75rem] py-2 px-4";
  return isExternal ? (
    <a href={cta.url} target="_blank" rel="noreferrer" className={cls}>
      {cta.label}
    </a>
  ) : (
    <Link href={cta.url} className={cls}>
      {cta.label}
    </Link>
  );
}

// On mobile the hero's content (headline + the "New Location" panel, which
// stacks below it instead of beside it) runs taller than one screen, so the
// bounce chevron pinned to the hero's own bottom edge sits below the fold --
// useless as a "there's more below" hint since you'd have to scroll to see
// it. This floats independently of the hero's height, fades out once
// scrolled past it, and jumps straight to the Classes section on tap.
function MobileScrollHint() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setVisible(window.scrollY < 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // RouteTransition animates `filter: blur(...)` on every page's content,
  // and even resolved to blur(0px) that establishes a new containing block
  // for `position: fixed` descendants -- so a fixed element declared inside
  // the page tree ends up positioned relative to that wrapper instead of
  // the viewport. Portal straight to <body> to sidestep it entirely.
  if (!mounted) return null;

  return createPortal(
    <div
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="fixed inset-x-0 bottom-5 z-40 flex justify-center md:hidden"
    >
      <motion.button
        type="button"
        aria-label="Scroll down for more"
        onClick={() => document.getElementById("classes")?.scrollIntoView({ behavior: "smooth" })}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-parchment/25 bg-[rgb(var(--theme-overlay)_/_0.55)] backdrop-blur-sm"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex"
        >
          <ChevronDown size={18} className="text-parchment" />
        </motion.span>
      </motion.button>
    </div>,
    document.body
  );
}

function Counter({ target, prefix = "", suffix = "", raw = false }: { target: number; prefix?: string; suffix?: string; raw?: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame = 0;
    const duration = 1100;
    const step = () => {
      frame += 16;
      const progress = Math.min(frame / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return <span>{prefix}{raw ? count : count.toLocaleString()}{suffix}</span>;
}

export default function HomePage({
  exhibits,
  recentlyClosed,
  announcements,
  workshops,
}: {
  exhibits: Exhibit[];
  recentlyClosed: Exhibit | null;
  announcements: Announcement[];
  workshops: Workshop[];
}) {
  return (
    <div>
      {/* ───────────────────────────────────────────────────────────────
          TEMPORARY: Grand-opening split hero (Nov 7 announcement).
          Client asked to match a mockup for the opening: a photo panel
          on the left + a plain white "Welcome to the Community" panel
          on the right, in Montserrat and their brand navy/orange
          (#173F73 / #E86A2A — deliberately not the site's --font-display
          or tailwind navy/orange tokens, since this is scoped to this
          announcement only). Replaces the previous full-bleed hero with
          the "moving to a New Location" side panel; see git history to
          revert once the opening has passed.
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col overflow-hidden bg-white xl:min-h-[620px] xl:flex-row">

        {/* Left: photo panel */}
        <div className="relative flex min-h-[460px] w-full items-end overflow-hidden xl:min-h-0 xl:w-1/2">
          <motion.div
            initial={{ scale: 1.08, opacity: 0.75 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/hero-mural.jpg"
              alt="Mural at the Union County Community Arts Council"
              fill
              priority
              sizes="(max-width: 1279px) 100vw, 50vw"
              className="object-cover object-center brightness-110"
            />
          </motion.div>

          {/* Dark scrim — keeps hero text legible over the photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

          {/* Grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 0.7px, transparent 0.7px)",
              backgroundSize: "3px 3px",
            }}
          />

          <div className="relative z-10 w-full px-6 py-10 sm:px-10 sm:py-12 xl:px-12 xl:py-14">

            {/* Editorial rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="mb-5 h-px w-24 bg-white/70"
            />

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="max-w-xl text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.92] text-white [text-shadow:0_14px_38px_rgba(0,0,0,0.55)]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Art lives<br />here.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.7 }}
              className="mt-6 max-w-md text-sm leading-relaxed text-white/90 [text-shadow:0_4px_18px_rgba(0,0,0,0.35)] md:text-base"
            >
              Making a positive impact through the arts by serving students, supporting artists, and expanding cultural access across Union County.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.6 }}
              className="mt-7 grid grid-cols-2 gap-3 md:flex md:flex-row md:flex-wrap"
            >
              {exhibits.length > 0 ? (
                <Link href="/exhibitions" className="accent-btn col-span-2 ring-1 ring-inset ring-white/50 md:col-auto">View Exhibitions</Link>
              ) : (
                <Link href="/classes" className="accent-btn col-span-2 ring-1 ring-inset ring-white/50 md:col-auto">View Classes</Link>
              )}
              <Link href="/support" className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-white/45 bg-black/30 px-3 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-white transition duration-300 hover:-translate-y-[1px] hover:border-white hover:bg-white hover:text-[#1b1612] md:px-6 md:text-sm md:tracking-[0.14em]">
                <Heart size={13} /> Support
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap border border-white/45 bg-black/30 px-3 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-white transition duration-300 hover:-translate-y-[1px] hover:border-white hover:bg-white hover:text-[#1b1612] md:px-6 md:text-sm md:tracking-[0.14em]">
                Get in Touch
              </Link>
            </motion.div>

          </div>
        </div>

        {/* Right: welcome panel — right-aligned to match the mockup */}
        <div className="relative flex w-full flex-col items-end justify-center bg-white px-6 py-14 text-right sm:px-10 xl:w-1/2 xl:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-logo text-[clamp(3rem,6vw,6rem)] font-bold leading-[1.05] text-[#173F73]"
          >
            Welcome<br />to the<br />Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.7 }}
            className="font-logo mt-6 text-[clamp(1.85rem,3.4vw,2.75rem)] italic text-[#E86A2A]"
          >
            Celebrating Creativity
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-logo mt-6 max-w-full text-[clamp(1.3rem,1.6vw,2rem)] text-[#1a1a1a] md:whitespace-nowrap"
          >
            Our doors open <strong>November&nbsp;7th</strong> and you are invited!
          </motion.p>
        </div>
        {/* ─── END TEMPORARY GRAND-OPENING HERO ─────────────────────────── */}

      </section>

      {/* Mobile-only floating scroll hint -- on mobile the stacked hero
          content can run taller than the viewport, so a plain scroll-hint
          bar pinned to the hero's own bottom edge would sit below the fold.
          On desktop the next section is already visibly peeking into view,
          so no indicator is needed there. */}
      <MobileScrollHint />

      {/* ── Classes ──────────────────────────────────────────────────── */}
      {workshops.length > 0 && (
        <SectionReveal id="classes" className="bg-white section-pad py-8">
          <ClassesCarousel workshops={workshops} />
        </SectionReveal>
      )}

      {/* ── Announcements ────────────────────────────────────────────── */}
      {announcements.length > 0 && (
        <SectionReveal className="theme-band section-pad border-b border-parchment/10 py-8">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">Announcements</p>
              <Link href="/announcements" className="text-[0.75rem] uppercase tracking-[0.16em] text-parchment/60 transition hover:text-parchment/65">
                View all →
              </Link>
            </div>
            <div className={`grid gap-4 ${
              announcements.length === 1 ? "grid-cols-1" :
              announcements.length === 2 ? "md:grid-cols-2" :
              "md:grid-cols-2 lg:grid-cols-3"
            }`}>
              {announcements.map((ann, i) => (
                <div
                  key={ann.slug}
                  className={`relative flex flex-col overflow-hidden border ${
                    i === 0 ? "border-navy/30 bg-parchment/[0.05]" : "border-parchment/15 bg-parchment/[0.035]"
                  }`}
                >
                  {i === 0 && (
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(12,44,92,0.1),transparent_65%)]" />
                  )}
                  {ann.contentImage && (
                    <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-44">
                      {/* Decorative — the announcement title is already announced via the heading below. */}
                      <Image
                        src={sanityImg(ann.contentImage, { w: 1600 })}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="relative flex flex-1 flex-col p-6">
                    {ann.eyebrow && (
                      <p className="mb-2 text-[0.75rem] uppercase tracking-[0.2em] text-navy">
                        {ann.eyebrow}
                      </p>
                    )}
                    <h2 className="display text-xl leading-tight text-parchment">
                      {ann.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-parchment/60">
                      {ann.description}
                    </p>
                    <div className="mt-5 border-t border-parchment/10 pt-4">
                      {(ann.ctaOne || ann.ctaTwo) && (
                        <div className="mb-3 flex flex-wrap gap-2">
                          {ann.ctaOne && <AnnouncementCta cta={ann.ctaOne} />}
                          {ann.ctaTwo && <AnnouncementCta cta={ann.ctaTwo} />}
                        </div>
                      )}
                      <Link
                        href={`/announcements#${ann.slug}`}
                        className="text-[0.75rem] text-parchment/60 transition hover:text-parchment/65"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      )}

      {/* ── Current Exhibitions ───────────────────────────────────────── */}
      <SectionReveal id="exhibitions" className="bg-white section-pad py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-2 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.75rem] uppercase tracking-[0.2em] text-navy">On View Now &amp; Upcoming</p>
              <h2 className="display mt-2 text-4xl text-parchment md:text-5xl">Current Exhibitions</h2>
            </div>
            <Link href="/exhibitions" className="link-underline hidden text-sm uppercase tracking-[0.15em] md:block">
              View all
            </Link>
          </div>
          <div className="mt-3 h-px w-full bg-gradient-to-r from-navy/60 via-navy/20 to-transparent mb-10" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {exhibits.map((exhibit) => (
              <ExhibitCard key={exhibit.id} exhibit={exhibit} />
            ))}
          </div>
          <div className="mt-10 md:hidden text-center">
            <Link href="/exhibitions" className="ghost-btn px-5 py-2.5 text-xs">View All Exhibitions</Link>
          </div>
        </div>
      </SectionReveal>

      {/* ── Recently Closed ──────────────────────────────────────────── */}
      {recentlyClosed && (
        <SectionReveal className="bg-white section-pad pb-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-6 flex items-center gap-4">
              <p className="text-[0.75rem] uppercase tracking-[0.22em] text-parchment/60">Recently Closed</p>
              <div className="h-px flex-1 bg-parchment/10" />
            </div>
            <Link
              href={`/exhibitions/${recentlyClosed.slug}`}
              className="group flex flex-col overflow-hidden border border-parchment/10 bg-parchment/[0.035] transition duration-300 hover:border-parchment/25 sm:flex-row"
            >
              <div className="relative h-52 shrink-0 overflow-hidden sm:h-auto sm:w-72">
                {/* Decorative — the exhibit title is already announced via the heading
                    below, within the same link, so a repeated alt would double-announce it. */}
                <Image
                  src={sanityImg(recentlyClosed.imageUrl, { w: 600, h: 400, fit: "crop" })}
                  alt=""
                  fill
                  className="object-cover opacity-55 transition duration-700 group-hover:opacity-70 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 288px"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 p-7">
                <p className="text-[0.75rem] uppercase tracking-[0.18em] text-navy">Past Exhibition</p>
                <h3 className="display text-2xl text-parchment/85 leading-tight group-hover:text-parchment transition md:text-3xl">
                  {recentlyClosed.title}
                </h3>
                <p className="line-clamp-2 max-w-xl text-sm text-parchment/60 leading-relaxed">
                  {recentlyClosed.description}
                </p>
                <p className="text-[0.75rem] uppercase tracking-[0.16em] text-parchment/60 transition group-hover:text-parchment/55 group-hover:tracking-[0.2em]">
                  View Exhibition
                </p>
              </div>
            </Link>
          </div>
        </SectionReveal>
      )}

      {/* ── Mission strip ────────────────────────────────────────────── */}
      <SectionReveal className="theme-band section-pad py-14">
        <div className="mx-auto max-w-[1500px] border-y border-parchment/15 py-10">
          <p className="display text-center text-2xl leading-snug text-parchment/90 md:text-[2rem]">
            We champion art as civic infrastructure — for imagination, equity, and collective joy.
          </p>
        </div>
      </SectionReveal>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <SectionReveal>
        <div className="theme-band section-pad py-16">
          <div className="mx-auto max-w-[1500px]">
            <p className="mb-10 text-[0.75rem] uppercase tracking-[0.22em] text-parchment/60">Our Impact</p>
            <div className="grid gap-px bg-parchment/10 md:grid-cols-2 xl:grid-cols-4">
              {[
                { value: 42000,  label: "Students Served" },
                { value: 140000, label: "Residents Reached" },
                { value: 175000, label: "Awarded Annually", prefix: "$" },
                { value: 1980,   label: "Founded", raw: true },
              ].map(({ value, label, prefix, raw }) => (
                <div key={label} className="bg-[rgba(245,240,235,0.025)] p-8">
                  <div className="display text-5xl text-navy">
                    <Counter target={value} prefix={prefix ?? ""} raw={raw} />
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-parchment/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ── Sponsors ─────────────────────────────────────────────────── */}
      <SponsorsStrip />

      {/* ── Connect CTA ──────────────────────────────────────────────── */}
      <SectionReveal className="section-pad py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative overflow-hidden border border-parchment/15 bg-parchment/[0.045] p-10 text-center md:p-16">
            {/* Subtle navy glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,44,92,0.12),transparent_65%)]" />
            <div className="relative z-10">
              <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">Connect</p>
              <h2 className="display mt-2 text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mx-auto mt-4 max-w-md text-parchment/60 text-sm leading-relaxed">
                We&rsquo;d love to connect — reach out about exhibitions, programming, or anything else.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="accent-btn">Contact Us</Link>
                <Link href="/support" className="ghost-btn inline-flex items-center gap-2">
                  <Heart size={14} /> Support
                </Link>
                <a
                  href="https://www.facebook.com/profile.php?id=61574355290119"
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-btn inline-flex items-center gap-2"
                >
                  <Facebook size={14} /> Follow on Facebook
                </a>
                <a
                  href="https://www.instagram.com/unioncountycommunityarts/"
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-btn inline-flex items-center gap-2"
                >
                  <Instagram size={14} /> Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

    </div>
  );
}
