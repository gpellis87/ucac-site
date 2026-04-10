import type { Metadata } from "next";
import ExhibitCard from "@/components/ExhibitCard";
import { exhibits } from "@/data/exhibits";

export const metadata: Metadata = {
  title: "Exhibitions | Union County Community Arts Council",
  description:
    "Current and upcoming exhibitions at the UCCAC Gallery in Monroe, NC — painting, mixed media, student art, and more.",
};

export default function ExhibitsPage() {
  return (
    <div className="pb-24">
      {/* Page header */}
      <div className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">UCCAC Gallery · Monroe, NC</p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            Exhibitions
          </h1>
          <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed">
            Works from artists across Union County and the region — on view now and opening soon at 300 North Hayne Street.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
        </div>
      </div>

      {/* Exhibit grid */}
      <div className="section-pad">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {exhibits.map((exhibit) => (
              <ExhibitCard key={exhibit.id} exhibit={exhibit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
