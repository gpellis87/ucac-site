"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WorkshopCard from "@/components/WorkshopCard";
import type { Workshop } from "@/data/workshops";

const MAX_SHOWN = 10;

export default function ClassesCarousel({ workshops }: { workshops: Workshop[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const shown = workshops.slice(0, MAX_SHOWN);

  if (shown.length === 0) return null;

  const scrollByAmount = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const amount = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-[1500px]">
      <div className="mb-2 flex items-end justify-between gap-4">
        <div>
          <p className="text-[0.75rem] uppercase tracking-[0.2em] text-navy">Hands-On &amp; Upcoming</p>
          <h2 className="display mt-2 text-4xl text-parchment md:text-5xl">Classes</h2>
        </div>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Scroll to previous classes"
            onClick={() => scrollByAmount(-1)}
            className="ghost-btn p-2.5"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Scroll to next classes"
            onClick={() => scrollByAmount(1)}
            className="ghost-btn p-2.5"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div className="mt-3 mb-10 h-px w-full bg-gradient-to-r from-navy/60 via-navy/20 to-transparent" />

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {shown.map((workshop) => (
          <div key={workshop.id} data-carousel-card className="w-[82vw] shrink-0 snap-start sm:w-[340px]">
            <WorkshopCard workshop={workshop} />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/workshops" className="ghost-btn inline-flex px-5 py-2.5 text-xs">
          View All Classes
        </Link>
      </div>
    </div>
  );
}
