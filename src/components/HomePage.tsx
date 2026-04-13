"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Facebook, ChevronDown } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import ExhibitCard from "@/components/ExhibitCard";
import SponsorsStrip from "@/components/SponsorsStrip";
import type { Exhibit } from "@/data/exhibits";
import { sanityImg } from "@/sanity/image";

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

export default function HomePage({ exhibits, recentlyClosed }: { exhibits: Exhibit[]; recentlyClosed: Exhibit | null }) {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="section-pad relative flex min-h-[600px] max-h-[860px] h-[90vh] items-center overflow-hidden py-20">

        {/* Background image */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0.75 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=2000&q=80"
            alt="Abstract art installation in gallery lighting"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,0,0,0.86),rgba(0,0,0,0.32)_50%,rgba(0,0,0,0.72))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(192,84,42,0.38),transparent_36%),radial-gradient(circle_at_84%_18%,rgba(103,115,136,0.22),transparent_42%)]" />

        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 0.7px, transparent 0.7px)",
            backgroundSize: "3px 3px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1500px]">

          {/* Editorial rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="mb-6 h-px w-24 bg-terracotta"
          />

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="editorial-title max-w-4xl text-[clamp(4rem,10vw,8.5rem)] leading-[0.9] text-parchment [text-shadow:0_10px_32px_rgba(0,0,0,0.45)]"
          >
            Art lives<br />
            <span className="text-terracotta">here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.7 }}
            className="mt-7 max-w-lg text-base text-parchment/85 leading-relaxed md:text-lg"
          >
            Making a positive impact through the arts by serving students, supporting artists, and expanding cultural access across Union County.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.66, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/exhibits" className="accent-btn">View Exhibitions</Link>
            <Link href="/contact" className="ghost-btn">Get in Touch</Link>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="absolute bottom-0 inset-x-0 border-t border-parchment/15 bg-black/40 backdrop-blur-sm"
        >
          <div className="section-pad mx-auto flex w-full max-w-[1500px] items-center justify-between gap-4 py-3">
            <a href="#exhibitions" className="group flex items-center gap-3 shrink-0 transition hover:opacity-80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
              </span>
              <span className="text-[0.68rem] uppercase tracking-[0.2em] text-parchment/70 group-hover:text-parchment/90 transition">
                {exhibits.length} Exhibitions On View &amp; Upcoming
              </span>
            </a>

            <Link
              href="/new-home"
              className="group hidden md:flex items-center gap-3 border-l border-parchment/15 pl-4 transition hover:opacity-100"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
              </span>
              <span className="text-[0.68rem] uppercase tracking-[0.2em] text-terracotta/80 group-hover:text-terracotta transition">
                Announcement &mdash; We&rsquo;re Moving
              </span>
            </Link>

            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="shrink-0"
            >
              <ChevronDown size={15} className="text-terracotta/60" />
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* ── Moving Announcement ──────────────────────────────────────── */}
      <SectionReveal className="section-pad bg-[#100f0e] py-14 border-b border-parchment/10">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative overflow-hidden border border-terracotta/25 bg-black/40 p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(192,84,42,0.15),transparent_60%)]" />
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Announcement</p>
                <h2 className="display mt-2 text-3xl text-parchment md:text-4xl">We&rsquo;re Moving to a New Home</h2>
                <p className="mt-3 max-w-lg text-sm text-parchment/65 leading-relaxed">
                  A new space at 300 North Hayne Street — more room for exhibitions, programs, and the community we serve. Follow the journey as it unfolds.
                </p>
              </div>
              <Link
                href="/new-home"
                className="shrink-0 accent-btn self-start md:self-auto"
              >
                Read the Announcement
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ── Current Exhibitions ───────────────────────────────────────── */}
      <SectionReveal id="exhibitions" className="section-pad py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-2 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-terracotta">On View Now &amp; Upcoming</p>
              <h2 className="display mt-2 text-4xl text-parchment md:text-5xl">Current Exhibitions</h2>
            </div>
            <Link href="/exhibits" className="link-underline hidden text-sm uppercase tracking-[0.15em] md:block">
              View all
            </Link>
          </div>
          <div className="mt-3 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent mb-10" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {exhibits.map((exhibit) => (
              <ExhibitCard key={exhibit.id} exhibit={exhibit} />
            ))}
          </div>
          <div className="mt-10 md:hidden text-center">
            <Link href="/exhibits" className="ghost-btn px-5 py-2.5 text-xs">View All Exhibitions</Link>
          </div>
        </div>
      </SectionReveal>

      {/* ── Recently Closed ──────────────────────────────────────────── */}
      {recentlyClosed && (
        <SectionReveal className="section-pad pb-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-6 flex items-center gap-4">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-parchment/35">Recently Closed</p>
              <div className="h-px flex-1 bg-parchment/10" />
            </div>
            <Link
              href={`/exhibits/${recentlyClosed.slug}`}
              className="group flex flex-col overflow-hidden border border-parchment/10 bg-black/20 transition duration-300 hover:border-parchment/25 sm:flex-row"
            >
              <div className="relative h-52 shrink-0 overflow-hidden sm:h-auto sm:w-72">
                <Image
                  src={sanityImg(recentlyClosed.imageUrl, { w: 600, h: 400, fit: "crop" })}
                  alt={recentlyClosed.title}
                  fill
                  className="object-cover opacity-55 transition duration-700 group-hover:opacity-70 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 288px"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 p-7">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-parchment/30">Past Exhibition</p>
                <h3 className="display text-2xl text-parchment/75 leading-tight group-hover:text-parchment/90 transition md:text-3xl">
                  {recentlyClosed.title}
                </h3>
                <p className="line-clamp-2 max-w-xl text-sm text-parchment/45 leading-relaxed">
                  {recentlyClosed.description}
                </p>
                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-parchment/30 transition group-hover:text-parchment/55 group-hover:tracking-[0.2em]">
                  View Exhibition
                </p>
              </div>
            </Link>
          </div>
        </SectionReveal>
      )}

      {/* ── Mission strip ────────────────────────────────────────────── */}
      <SectionReveal className="section-pad bg-[#111110] py-14">
        <div className="mx-auto max-w-[1500px] border-y border-parchment/15 py-10">
          <p className="display text-center text-2xl leading-snug text-parchment/90 md:text-[2rem]">
            We champion art as civic infrastructure — for imagination, equity, and collective joy.
          </p>
        </div>
      </SectionReveal>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <SectionReveal>
        <div className="bg-[#111110] section-pad py-16">
          <div className="mx-auto max-w-[1500px]">
            <p className="mb-10 text-[0.68rem] uppercase tracking-[0.22em] text-parchment/35">Our Impact</p>
            <div className="grid gap-px bg-parchment/10 md:grid-cols-2 xl:grid-cols-4">
              {[
                { value: 42000,  label: "Students Served" },
                { value: 140000, label: "Residents Reached" },
                { value: 175000, label: "Awarded Annually", prefix: "$" },
                { value: 1980,   label: "Founded", raw: true },
              ].map(({ value, label, prefix, raw }) => (
                <div key={label} className="bg-[#111110] p-8">
                  <p className="display text-5xl text-terracotta">
                    <Counter target={value} prefix={prefix ?? ""} raw={raw} />
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-parchment/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ── Connect CTA ──────────────────────────────────────────────── */}
      <SectionReveal className="section-pad py-20">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative overflow-hidden border border-parchment/15 bg-black/40 p-10 text-center md:p-16">
            {/* Subtle terracotta glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,84,42,0.12),transparent_65%)]" />
            <div className="relative z-10">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Connect</p>
              <h2 className="display mt-2 text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mx-auto mt-4 max-w-md text-parchment/60 text-sm leading-relaxed">
                We&rsquo;d love to connect — reach out about exhibitions, programming, or anything else.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="accent-btn">Contact Us</Link>
                <a
                  href="https://www.facebook.com/profile.php?id=61574355290119"
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-btn inline-flex items-center gap-2"
                >
                  <Facebook size={14} /> Follow on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ── Sponsors ─────────────────────────────────────────────────── */}
      <SponsorsStrip />

    </div>
  );
}
