import type { Metadata } from "next";
import ArtistGrid from "@/components/ArtistGrid";
import { getArtists } from "@/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Artists | Union County Community Arts Council",
  description:
    "Meet the artists of Union County — painters, mixed-media creators, and fiber artists connected through the Union County Community Arts Council in Monroe, NC.",
};

export default async function ArtistsPage() {
  const artists = await getArtists();
  return (
    <div className="pb-24">
      {/* Page header */}
      <div className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Creative Community</p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            Artist Directory
          </h1>
          <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed">
            Spotlighting the painters, sculptors, and makers connected through the Union County Community Arts Council.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
        </div>
      </div>

      {/* Grid + search */}
      <div className="section-pad">
        <div className="mx-auto max-w-[1500px]">
          <ArtistGrid artists={artists} />

          {/* CTA */}
          <div className="mt-14 flex items-center justify-between gap-4 border border-parchment/15 bg-parchment/[0.045] p-6">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-terracotta">Are You an Artist?</p>
              <p className="mt-1 text-sm text-parchment/70">
                UCCAC members can request to be listed in this directory.
              </p>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfazpN8YRzXETiEocM1i6XWDKprhwR9OnYLmz9PsNz8w5LJyQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 border border-terracotta px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.18em] text-terracotta transition hover:bg-terracotta hover:text-parchment"
            >
              Get Listed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
