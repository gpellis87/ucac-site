"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, ChevronDown } from "lucide-react";
import ExhibitCard from "@/components/ExhibitCard";
import { exhibits } from "@/data/exhibits";

export default function ComingSoonPage() {
  return (
    <div className="bg-[#0d0c0b] text-parchment flex flex-col">

      {/* Hero section — intentionally not full-height so exhibitions are visible */}
      <div className="relative min-h-[80vh] overflow-hidden flex flex-col">

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

      {/* Gradient overlays — same as homepage hero */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,0,0,0.82),rgba(0,0,0,0.38)_44%,rgba(0,0,0,0.72))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(192,84,42,0.34),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(103,115,136,0.24),transparent_42%)]" />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 0.7px, transparent 0.7px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex border border-terracotta/40 bg-black/45 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-parchment/95"
        >
          Union County Community Arts Council
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.75 }}
          className="editorial-title mt-5 max-w-3xl text-[clamp(3.5rem,11vw,8rem)] [text-shadow:0_10px_28px_rgba(0,0,0,0.42)]"
        >
          Something<br />
          <span className="text-terracotta">Beautiful</span><br />
          Is Coming
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 max-w-md text-base text-parchment/80 leading-relaxed md:text-lg"
        >
          We&rsquo;re reimagining our home on the web. Our doors remain open &mdash;
          reach out anytime and we&rsquo;d love to connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-10"
        >
          <a
            href="mailto:events@unionarts.org"
            className="accent-btn"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-sm text-parchment/60"
        >
          <a href="tel:+17042832784" className="flex items-center gap-2 transition-colors hover:text-parchment">
            <Phone size={13} className="shrink-0 text-terracotta/70" />
            (704) 283-2784
          </a>
          <a href="mailto:events@unionarts.org" className="flex items-center gap-2 transition-colors hover:text-parchment">
            <Mail size={13} className="shrink-0 text-terracotta/70" />
            events@unionarts.org
          </a>
          <p className="flex items-center gap-2">
            <MapPin size={13} className="shrink-0 text-terracotta/70" />
            300 North Hayne Street, Monroe, NC 28111
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-2 text-xs text-parchment/35"
        >
          Mon–Fri &nbsp;8:30 AM – 4:30 PM
        </motion.p>
      </div>

      {/* Scroll invitation strip */}
      <motion.a
        href="#exhibitions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="relative z-10 flex w-full items-center justify-between border-t border-terracotta/30 bg-black/50 px-5 py-4 backdrop-blur-sm transition hover:bg-terracotta/15 md:px-10 lg:px-16 xl:px-24 group"
      >
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
          <span className="text-[0.7rem] uppercase tracking-[0.2em] text-parchment/80">
            3 Exhibitions Now On View &amp; Upcoming
          </span>
        </div>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-terracotta" />
        </motion.div>
      </motion.a>

      </div>{/* end hero section */}

      {/* Exhibits section */}
      <section id="exhibitions" className="bg-[#111110] px-5 py-16 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-2 flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-terracotta">On View Now &amp; Upcoming</p>
              <h2 className="display mt-2 text-4xl text-parchment md:text-5xl">Current Exhibitions</h2>
            </div>
          </div>
          <div className="mt-2 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent mb-10" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {exhibits.map((exhibit) => (
              <ExhibitCard key={exhibit.id} exhibit={exhibit} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <a
              href="https://www.facebook.com/profile.php?id=61574355290119"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-parchment/25 px-4 py-2 text-xs uppercase tracking-[0.14em] text-parchment/60 transition hover:border-terracotta hover:text-parchment"
            >
              <Facebook size={13} className="text-terracotta" />
              Follow Us on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Site footer */}
      <div className="border-t border-parchment/10 bg-[#0d0c0b] px-6 py-5 text-center">
        <p className="text-[0.62rem] uppercase tracking-[0.2em] text-parchment/30">
          &copy; {new Date().getFullYear()} Union County Community Arts Council &mdash; 501(c)(3) Nonprofit
        </p>
      </div>
    </div>
  );
}
