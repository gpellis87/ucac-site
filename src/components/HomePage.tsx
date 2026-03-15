"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/SectionReveal";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import { formatEventDate } from "@/lib/event-utils";
import { useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
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
  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const featured = events.slice(0, 4);
  const featuredEvent = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  )[0];

  return (
    <div>
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
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(0,0,0,0.8),rgba(0,0,0,0.34)_44%,rgba(0,0,0,0.68))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(192,84,42,0.34),transparent_34%),radial-gradient(circle_at_84%_18%,rgba(103,115,136,0.24),transparent_42%)]" />
        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex border border-terracotta/40 bg-black/45 px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-parchment/95">
              Union County Community Arts Council
            </p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="editorial-title max-w-4xl text-6xl text-parchment md:text-8xl xl:text-9xl [text-shadow:0_10px_28px_rgba(0,0,0,0.42)]"
          >
            Art lives here.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.75 }}
            className="mt-6 max-w-xl text-base text-parchment/90 md:text-lg"
          >
            Making a positive impact through the arts by serving students, supporting artists, and expanding cultural access across Union County.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/events" className="accent-btn">
              Explore Events
            </Link>
            <Link href="/donate" className="ghost-btn">
              Get Involved
            </Link>
          </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="panel-dark border-parchment/30 bg-charcoal/72 p-7 shadow-[0_20px_42px_rgba(0,0,0,0.35)]">
              <div className="mb-5 h-px w-full bg-gradient-to-r from-terracotta/85 via-terracotta/35 to-transparent" />
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.66rem] uppercase tracking-[0.2em] text-parchment/85">
                  Featured Event
                </p>
                <span className="border border-terracotta/45 bg-terracotta/15 px-2 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-parchment/95">
                  Next Up
                </span>
              </div>
              <p className="mt-4 display text-3xl leading-tight text-parchment [text-shadow:0_8px_20px_rgba(0,0,0,0.3)]">
                {featuredEvent.title}
              </p>
              <p className="mt-4 text-[0.68rem] uppercase tracking-[0.15em] text-terracotta">
                {formatEventDate(featuredEvent.date)} · {featuredEvent.time}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-parchment/75">
                {featuredEvent.location}
              </p>
              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-parchment/86">
                {featuredEvent.description}
              </p>
              <Link href={`/events/${featuredEvent.slug}`} className="accent-btn mt-6 w-full px-4 py-2 text-[0.68rem]">
                View featured event
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionReveal className="section-pad py-10">
        <div className="mx-auto max-w-[1500px] border-y border-parchment/20 py-8">
          <p className="display text-center text-3xl leading-tight md:text-5xl">
            We champion art as civic infrastructure for imagination, equity, and collective joy.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="display text-4xl md:text-6xl">Featured Events</h2>
            <Link href="/events" className="link-underline text-sm uppercase tracking-[0.15em]">
              View all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-16">
        <div className="mx-auto grid max-w-[1500px] items-stretch gap-8 lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=1600&q=80"
              alt="Visitors in a modern art gallery"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center border border-parchment/20 bg-black/20 p-8 md:p-12">
            <p className="display text-3xl leading-tight text-parchment md:text-5xl">
              &ldquo;UCCAC transforms empty spaces into places where community and creativity meet.&rdquo;
            </p>
            <p className="mt-5 max-w-md text-parchment/75">
              For nearly three decades, we have connected artists, students, and neighbors through exhibitions, grants, cultural events, and youth arts access.
            </p>
            <Link href="/about" className="accent-btn mt-8 w-fit">
              Our Story
            </Link>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-16">
          <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="border border-parchment/20 p-6">
            <p className="display text-5xl text-terracotta"><Counter target={42000} /></p>
            <p className="mt-1 uppercase tracking-[0.14em] text-parchment/70">Students Served</p>
          </div>
          <div className="border border-parchment/20 p-6">
            <p className="display text-5xl text-terracotta"><Counter target={140000} /></p>
            <p className="mt-1 uppercase tracking-[0.14em] text-parchment/70">Residents Reached</p>
          </div>
          <div className="border border-parchment/20 p-6">
            <p className="display text-5xl text-terracotta">$<Counter target={175000} /></p>
            <p className="mt-1 uppercase tracking-[0.14em] text-parchment/70">Awarded Annually</p>
          </div>
          <div className="border border-parchment/20 p-6">
            <p className="display text-5xl text-terracotta"><Counter target={1980} /></p>
            <p className="mt-1 uppercase tracking-[0.14em] text-parchment/70">Founded</p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad pb-24">
        <div className="mx-auto max-w-[1500px] border border-parchment/20 bg-black/30 p-10 text-center md:p-14">
          <h2 className="display text-4xl md:text-6xl">Support the Next Creative Chapter</h2>
          <p className="mx-auto mt-4 max-w-xl text-parchment/75">
            Every contribution helps us fund classes, exhibitions, artist grants, and public art that belongs to everyone.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/donate" className="accent-btn">
              Donate
            </Link>
            <Link href="/contact" className="ghost-btn">
              Volunteer
            </Link>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
