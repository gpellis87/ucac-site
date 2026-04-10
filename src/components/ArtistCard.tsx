import Image from "next/image";
import Link from "next/link";
import { Artist } from "@/data/artists";

export default function ArtistCard({ artist }: { artist: Artist }) {
  const displayName = `${artist.firstName} ${artist.lastName}`;

  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="group block overflow-hidden border border-parchment/20 bg-black/30 transition duration-300 hover:-translate-y-1.5 hover:border-terracotta/70 hover:shadow-[0_16px_34px_rgba(0,0,0,0.35)]"
    >
      {/* Work thumbnail */}
      <div className="relative aspect-square overflow-hidden bg-[#111]">
        <Image
          src={artist.workImages[0]}
          alt={`Work by ${displayName}`}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </div>

      {/* Info strip */}
      <div className="flex items-center gap-4 p-4">
        {/* Portrait avatar */}
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-parchment/20">
          <Image
            src={artist.portraitUrl}
            alt={displayName}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="display text-xl text-parchment leading-tight truncate">{displayName}</h3>
          <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-terracotta truncate">{artist.medium}</p>
          <p className="mt-0.5 text-[0.6rem] text-parchment/40 truncate">{artist.city}, {artist.state}</p>
        </div>
      </div>
    </Link>
  );
}
