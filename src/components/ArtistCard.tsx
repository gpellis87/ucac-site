import Image from "next/image";
import Link from "next/link";
import { Artist } from "@/data/artists";

export default function ArtistCard({ artist }: { artist: Artist }) {
  const displayName = `${artist.firstName} ${artist.lastName}`;

  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="group block overflow-hidden border border-parchment/20 bg-black/30 transition duration-300 hover:-translate-y-1 hover:border-terracotta/70 hover:shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
    >
      {/* Work thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
        <Image
          src={artist.workImages[0]}
          alt={`Work by ${displayName}`}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* Info strip */}
      <div className="flex items-center gap-2.5 p-3">
        {/* Portrait avatar */}
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-parchment/20">
          <Image
            src={artist.portraitUrl}
            alt={displayName}
            fill
            className="object-cover"
            sizes="32px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="display text-sm text-parchment leading-tight truncate">{displayName}</h3>
          <p className="mt-0.5 text-[0.58rem] uppercase tracking-[0.12em] text-terracotta truncate">{artist.medium}</p>
        </div>
      </div>
    </Link>
  );
}
