import type { Metadata } from "next";
import ExhibitCard from "@/components/ExhibitCard";
import { getExhibits } from "@/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Exhibitions | Union County Community Arts Council",
  description:
    "Current and upcoming exhibitions at the UCCAC Gallery in Monroe, NC — painting, mixed media, student art, and more.",
};

export default async function ExhibitsPage() {
  const exhibits = await getExhibits();

  return (
    <div className="pb-24">
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

      <div className="section-pad">
        <div className="mx-auto max-w-[1500px]">
          {exhibits.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {exhibits.map((exhibit) => (
                <ExhibitCard key={exhibit.id} exhibit={exhibit} />
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-parchment/40">No exhibitions are currently listed.</p>
          )}
        </div>
      </div>
    </div>
  );
}
