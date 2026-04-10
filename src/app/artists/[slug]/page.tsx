import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Globe, Instagram, Mail, MapPin } from "lucide-react";
import { artists } from "@/data/artists";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const artist = artists.find((a) => a.slug === params.slug);
  if (!artist) return { title: "Artist Not Found" };
  return {
    title: `${artist.firstName} ${artist.lastName} | Union County Community Arts Council`,
    description: artist.bio ?? `${artist.medium} artist from Union County, NC.`,
  };
}

export default function ArtistPage({ params }: Props) {
  const artist = artists.find((a) => a.slug === params.slug);
  if (!artist) notFound();

  const displayName = `${artist.firstName} ${artist.lastName}`;

  return (
    <div className="bg-[#0d0c0b] text-parchment flex flex-col min-h-screen">

      {/* Sticky back bar */}
      <header className="sticky top-0 z-50 border-b border-parchment/10 bg-[#0d0c0b]/92 backdrop-blur-xl px-5 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto flex h-14 max-w-[1500px] items-center">
          <Link
            href="/artists"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-parchment/55 transition hover:text-parchment"
          >
            <ArrowLeft size={13} />
            All Artists
          </Link>
        </div>
      </header>

      <main className="flex-1 px-5 py-14 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1500px]">

          {/* Artist header */}
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16 items-start">

            {/* Portrait */}
            <div className="relative h-64 w-64 shrink-0 overflow-hidden border border-parchment/15 lg:h-80 lg:w-80">
              <Image
                src={artist.portraitUrl}
                alt={displayName}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 256px, 320px"
              />
            </div>

            {/* Name + details */}
            <div className="flex flex-col justify-center">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">{artist.medium}</p>
              <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl">
                {displayName}
              </h1>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-parchment/45">
                <MapPin size={11} className="text-terracotta/60" />
                {artist.city}, {artist.state}
              </p>

              {artist.bio && (
                <div className="mt-6 max-w-2xl space-y-4">
                  {artist.bio.split("\n\n").map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-parchment/80 md:text-lg">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-4">
                {artist.website && (
                  <a
                    href={artist.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-parchment/25 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-parchment/70 transition hover:border-terracotta hover:text-parchment"
                  >
                    <Globe size={12} className="text-terracotta" />
                    Website
                  </a>
                )}
                {artist.instagram && (
                  <a
                    href={`https://instagram.com/${artist.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-parchment/25 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-parchment/70 transition hover:border-terracotta hover:text-parchment"
                  >
                    <Instagram size={12} className="text-terracotta" />
                    @{artist.instagram}
                  </a>
                )}
                <a
                  href={`mailto:${artist.email}`}
                  className="inline-flex items-center gap-2 border border-parchment/25 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-parchment/70 transition hover:border-terracotta hover:text-parchment"
                >
                  <Mail size={12} className="text-terracotta" />
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Work gallery */}
          {artist.workImages.length > 0 && (
            <div className="mt-16">
              <div className="mb-8 h-px w-full bg-gradient-to-r from-terracotta/30 via-parchment/10 to-transparent" />
              <p className="mb-6 text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Selected Work</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {artist.workImages.map((src, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden border border-parchment/10 bg-[#111]">
                    <Image
                      src={src}
                      alt={`${displayName} — work ${i + 1}`}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

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
