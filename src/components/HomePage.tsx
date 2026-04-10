"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Facebook } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import ExhibitCard from "@/components/ExhibitCard";
import { exhibits } from "@/data/exhibits";

function Counter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let frame = 0;
    const duration = 900;
    const step = () => {
      frame += 16;
      const progress = Math.min(frame / duration, 1);
      setCount(Math.round(target * progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="section-pad relative flex min-h-[88vh] items-center overflow-hidden py-20">
        <motion.div
          initial={{ scale: 1.08, opacity: 0.75 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
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
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,0,0,0.82),rgba(0,0,0,0.36)_44%,rgba(0,0,0,0.70))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(192,84,42,0.34),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(103,115,136,0.24),transparent_42%)]" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex border border-terracotta/40 bg-black/45 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-parchment/95"
          >
            Union County Community Arts Council
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.75 }}
            className="editorial-title mt-5 max-w-4xl text-6xl text-parchment md:text-8xl xl:text-9xl [text-shadow:0_10px_28px_rgba(0,0,0,0.42)]"
          >
            Art lives<br />here.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 max-w-xl text-base text-parchment/90 leading-relaxed md:text-lg"
          >
            Making a positive impact through the arts by serving students, supporting artists, and expanding cultural access across Union County.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/exhibits" className="accent-btn">View Exhibitions</Link>
            <Link href="/contact" className="ghost-btn">Get in Touch</Link>
          </motion.div>
        </div>
      </section>

      {/* ── Mission strip ────────────────────────────────────────────── */}
      <SectionReveal className="section-pad py-10">
        <div className="mx-auto max-w-[1500px] border-y border-parchment/20 py-8">
          <p className="display text-center text-2xl leading-tight md:text-4xl">
            We champion art as civic infrastructure for imagination, equity, and collective joy.
          </p>
        </div>
      </SectionReveal>

      {/* ── Current Exhibitions ───────────────────────────────────────── */}
      <SectionReveal className="section-pad py-16">
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
          <div className="mt-2 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent mb-10" />
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

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <SectionReveal className="section-pad py-16">
        <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="border border-parchment/20 p-6">
            <p className="display text-5xl text-terracotta"><Counter target={42000} /></p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-parchment/70">Students Served</p>
          </div>
          <div className="border border-parchment/20 p-6">
            <p className="display text-5xl text-terracotta"><Counter target={140000} /></p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-parchment/70">Residents Reached</p>
          </div>
          <div className="border border-parchment/20 p-6">
            <p className="display text-5xl text-terracotta"><Counter target={175000} prefix="$" /></p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-parchment/70">Awarded Annually</p>
          </div>
          <div className="border border-parchment/20 p-6">
            <p className="display text-5xl text-terracotta"><Counter target={1980} /></p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-parchment/70">Founded</p>
          </div>
        </div>
      </SectionReveal>

      {/* ── Connect CTA ──────────────────────────────────────────────── */}
      <SectionReveal className="section-pad pb-24">
        <div className="mx-auto max-w-[1500px] border border-parchment/20 bg-black/30 p-10 text-center md:p-14">
          <h2 className="display text-4xl md:text-5xl">Connect With Us</h2>
          <p className="mx-auto mt-4 max-w-xl text-parchment/75">
            Located in downtown Monroe, NC. Stop by, give us a call, or follow us on Facebook to stay up to date on exhibitions and events.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
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
      </SectionReveal>
    </div>
  );
}
