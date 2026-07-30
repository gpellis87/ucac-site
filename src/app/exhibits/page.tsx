import type { Metadata } from "next";
import ExhibitCard from "@/components/ExhibitCard";
import { getExhibits, getArchivedExhibits } from "@/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Exhibitions | Union County Community Arts Council",
  description:
    "Current and upcoming exhibitions at the UCCAC Gallery in Monroe, NC — painting, mixed media, student art, and more.",
};

export default async function ExhibitsPage() {
  const [exhibits, archived] = await Promise.all([getExhibits(), getArchivedExhibits()]);

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
          <h2 className="sr-only">Current Exhibitions</h2>
          {exhibits.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {exhibits.map((exhibit) => (
                <ExhibitCard key={exhibit.id} exhibit={exhibit} />
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-parchment/60">No exhibitions are currently listed.</p>
          )}
        </div>
      </div>

      {archived.length > 0 && (
        <div className="section-pad mt-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-8 h-px w-full bg-gradient-to-r from-parchment/20 via-parchment/10 to-transparent" />
            <h2 className="text-[0.68rem] uppercase tracking-[0.22em] text-parchment/60">Past Exhibitions</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {archived.map((exhibit) => (
                <ExhibitCard key={exhibit.id} exhibit={exhibit} muted />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
