import type { Metadata } from "next";
import EventsExplorer from "@/components/EventsExplorer";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore Union County Community Arts Council exhibitions, workshops, fundraisers, and community cultural events.",
};

export default function EventsPage() {
  return (
    <div>
      <SectionReveal className="section-pad relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(12,44,92,0.22),transparent_34%),linear-gradient(180deg,#1a1a1a,rgba(26,26,26,0.5))]" />
        <div className="relative mx-auto max-w-[1500px]">
          <p className="text-xs uppercase tracking-[0.2em] text-navy">Programs & Gatherings</p>
          <h1 className="editorial-title mt-4 max-w-3xl text-5xl md:text-7xl">
            Events designed to bring art into everyday life.
          </h1>
          <p className="mt-6 max-w-2xl text-parchment/75">
            Switch between calendar and card view, browse by category, and discover everything from exhibitions and workshops to fundraisers and volunteer sessions.
          </p>
        </div>
      </SectionReveal>
      <EventsExplorer />
    </div>
  );
}
