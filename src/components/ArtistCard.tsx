import Image from "next/image";
import Link from "next/link";
import { Artist } from "@/data/artists";
import { sanityImg } from "@/sanity/image";
import ArtistPortraitPlaceholder from "@/components/ArtistPortraitPlaceholder";

export default function ArtistCard({ artist, priority = false }: { artist: Artist; priority?: boolean }) {
  const displayName = `${artist.firstName} ${artist.lastName}`;

  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="group block overflow-hidden border border-parchment/20 bg-parchment/[0.045] transition duration-300 hover:-translate-y-1 hover:border-navy/70 hover:shadow-[0_12px_24px_rgba(0,0,0,0.28)]"
    >
      {/* Work thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[rgb(var(--theme-bg-alt)_/_0.65)]">
        <Image
          src={sanityImg(artist.workImages?.[0], { w: 480, fit: "crop" })}
          alt={`Work by ${displayName}`}
          fill
          priority={priority}
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* Info strip */}
      <div className="flex items-center gap-2.5 p-3">
        {/* Portrait avatar */}
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-parchment/20">
          {artist.portraitUrl ? (
            // Decorative — the artist's name is already announced via the work-thumbnail
            // alt above ("Work by {name}") and the heading below, both within this same link.
            <Image
              src={sanityImg(artist.portraitUrl, { w: 64, h: 64, fit: "crop" })}
              alt=""
              fill
              className="object-cover"
              sizes="32px"
            />
          ) : (
            <ArtistPortraitPlaceholder name={displayName} variant="avatar" />
          )}
        </div>
        <div className="min-w-0">
          <h3 className="display text-sm text-parchment leading-tight truncate">{displayName}</h3>
          <p className="mt-0.5 text-[0.75rem] uppercase tracking-[0.12em] text-navy truncate">{artist.medium}</p>
        </div>
      </div>
    </Link>
  );
}
