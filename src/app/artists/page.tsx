import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { localArtists } from "@/data/localArtists";

export const metadata: Metadata = {
  title: "Local Artists",
  description:
    "Explore Union County local artists across painting, photography, fiber arts, ceramics, and public art. Directory data is currently mock for prototype use.",
};

export default function ArtistsPage() {
  return (
    <div className="pb-24">
      <SectionReveal className="section-pad relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(192,84,42,0.25),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(103,115,136,0.3),transparent_45%)]" />
        <div className="relative mx-auto max-w-[1500px]">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta">Creative Community</p>
          <h1 className="editorial-title mt-4 max-w-4xl text-5xl md:text-8xl">Local Artist Directory</h1>
          <p className="mt-5 max-w-2xl text-parchment/80">
            A curated directory spotlighting artists working across Union County. These listings are prototype mock entries and can be replaced with a live submission and approval workflow later.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 border border-parchment/20 bg-black/30 p-5">
          <p className="text-sm text-parchment/78">
            Are you a local artist? We can add a formal submission form in the next phase.
          </p>
          <Link href="/contact" className="accent-btn px-4 py-2 text-xs">
            Submit Interest
          </Link>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-10">
        <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-2 xl:grid-cols-3">
          {localArtists.map((artist) => (
            <article key={artist.id} className="panel-dark p-5 transition hover:border-terracotta/45">
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-terracotta">{artist.specialty}</p>
              <h2 className="mt-3 display text-3xl">{artist.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-parchment/65">{artist.city}</p>
              <p className="mt-4 text-sm leading-relaxed text-parchment/82">{artist.bio}</p>
              <div className="mt-5 space-y-1 text-xs text-parchment/75">
                <p>Email: {artist.email}</p>
                <p>Website: {artist.website}</p>
                <p>Social: {artist.social}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
