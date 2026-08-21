"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { registrationStatusLabel } from "@/data/workshops";
import type { Workshop } from "@/data/workshops";
import { sanityImg } from "@/sanity/image";
import { priceLabel } from "@/lib/workshop-utils";
import { useReducedMotion } from "@/lib/useReducedMotion";

const MAX_SHOWN = 12;
const AUTO_SCROLL_MS = 3500;

function CompactClassCard({ workshop }: { workshop: Workshop }) {
  return (
    <Link
      href={`/workshops/${workshop.slug}`}
      className="group block overflow-hidden border border-parchment/20 bg-parchment/[0.045] transition duration-300 hover:-translate-y-1 hover:border-navy/70"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {workshop.imageUrl ? (
          <Image
            src={sanityImg(workshop.imageUrl, { w: 480, h: 360, fit: "crop", hotspot: workshop.imageHotspot })}
            alt=""
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="240px"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(12,44,92,0.25),transparent_60%),linear-gradient(135deg,#1a1612,#2b241d)]" />
        )}
      </div>
      <div className="space-y-1.5 p-4">
        <p className="line-clamp-1 text-[0.68rem] uppercase tracking-[0.12em] text-parchment/60">{workshop.scheduleText}</p>
        <h3 className="display h-[2.8rem] text-lg leading-tight text-parchment transition group-hover:text-navy line-clamp-2">
          {workshop.title}
        </h3>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm text-parchment/85">{priceLabel(workshop.price)}</span>
          <span className="text-[0.68rem] uppercase tracking-[0.12em] text-navy">
            {registrationStatusLabel[workshop.registrationStatus]}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ClassesCarousel({ workshops }: { workshops: Workshop[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const shown = workshops.slice(0, MAX_SHOWN);

  const scrollByAmount = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const amount = (card?.offsetWidth ?? 240) + 20;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  useEffect(() => {
    if (reduceMotion || paused || shown.length < 3) return;
    const id = setInterval(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollByAmount(1);
      }
    }, AUTO_SCROLL_MS);
    return () => clearInterval(id);
  }, [reduceMotion, paused, shown.length]);

  if (shown.length === 0) return null;

  return (
    <div className="mx-auto max-w-[1500px]">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">Upcoming Classes</p>
        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="Scroll to previous classes"
              onClick={() => scrollByAmount(-1)}
              className="ghost-btn p-2"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              aria-label="Scroll to next classes"
              onClick={() => scrollByAmount(1)}
              className="ghost-btn p-2"
            >
              <ChevronRight size={15} />
            </button>
          </div>
          <Link
            href="/workshops"
            className="text-[0.75rem] uppercase tracking-[0.16em] text-parchment/60 transition hover:text-parchment/65"
          >
            View all →
          </Link>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {shown.map((workshop) => (
          <div key={workshop.id} data-carousel-card className="w-[62vw] shrink-0 snap-start sm:w-[240px]">
            <CompactClassCard workshop={workshop} />
          </div>
        ))}
      </div>

      <div className="mt-6 text-center md:hidden">
        <Link href="/workshops" className="ghost-btn inline-flex px-5 py-2.5 text-xs">
          View All Classes
        </Link>
      </div>
    </div>
  );
}
