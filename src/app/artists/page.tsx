import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ArtistCard from "@/components/ArtistCard";
import { artists } from "@/data/artists";

export const metadata: Metadata = {
  title: "Artists | Union County Community Arts Council",
  description:
    "Meet the artists of Union County. A directory of painters, mixed-media creators, and fiber artists connected through the Union County Community Arts Council in Monroe, NC.",
};

export default function ArtistsPage() {
  return (
    <div className="bg-[#0d0c0b] text-parchment flex flex-col min-h-screen">

      {/* Sticky back bar */}
      <header className="sticky top-0 z-50 border-b border-parchment/10 bg-[#0d0c0b]/92 backdrop-blur-xl px-5 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto flex h-14 max-w-[1500px] items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-parchment/55 transition hover:text-parchment"
          >
            <ArrowLeft size={13} />
            Back
          </Link>
        </div>
      </header>

      {/* Page header */}
      <div className="px-5 py-16 md:px-10 lg:px-16 xl:px-24">
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

      {/* Grid */}
      <main className="flex-1 px-5 pb-20 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-14 flex items-center justify-between gap-4 border border-parchment/15 bg-black/30 p-6">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-terracotta">Are You an Artist?</p>
              <p className="mt-1 text-sm text-parchment/70">
                UCCAC members can request to be listed in this directory.
              </p>
            </div>
            <a
              href="mailto:events@unionarts.org"
              className="shrink-0 border border-terracotta px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.18em] text-terracotta transition hover:bg-terracotta hover:text-parchment"
            >
              Get Listed
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <div className="border-t border-parchment/10 px-6 py-5 text-center">
        <p className="text-[0.62rem] uppercase tracking-[0.2em] text-parchment/25">
          &copy; {new Date().getFullYear()} Union County Community Arts Council &mdash; 501(c)(3) Nonprofit
        </p>
      </div>

    </div>
  );
}
