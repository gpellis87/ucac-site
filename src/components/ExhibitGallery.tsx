"use client";

import { useState } from "react";
import Image from "next/image";

const PAGE_SIZE = 12;

interface GalleryImage {
  url: string;
  filename: string;
}

interface Props {
  images: GalleryImage[];
  additionalVideoPaths?: string[];
  exhibitTitle: string;
}

function parseFilename(filename: string): { title: string; artist: string | null } {
  const base = filename.replace(/\.[^.]+$/, "");
  const byIdx = base.lastIndexOf(" by ");
  if (byIdx === -1) return { title: base, artist: null };
  return { title: base.slice(0, byIdx).trim(), artist: base.slice(byIdx + 4).trim() };
}

export default function ExhibitGallery({ images, additionalVideoPaths, exhibitTitle }: Props) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {/* Additional videos rendered as gallery cards */}
        {additionalVideoPaths?.map((src, i) => (
          <div key={`vid-${i}`} className="relative aspect-[4/3] overflow-hidden bg-black/60">
            <video
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              aria-label={`${exhibitTitle} video ${i + 1}`}
            >
              <source src={src} type="video/mp4" />
            </video>
          </div>
        ))}

        {/* Photo grid */}
        {visibleImages.map(({ url, filename }, i) => {
          const { title, artist } = parseFilename(filename ?? "");
          return (
            <div key={`img-${i}`} className="group relative aspect-[4/3] overflow-hidden">
              <Image
                src={`${url}?w=600&auto=format&fit=crop`}
                alt={artist ? `${title} by ${artist}` : title || `Photo ${i + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={i < 6 ? "eager" : "lazy"}
              />
              {/* Always visible on mobile, hover reveal on md+ */}
              {(title || artist) && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 py-3 md:translate-y-full md:transition-transform md:duration-300 md:group-hover:translate-y-0">
                  {title && (
                    <p className="text-[0.72rem] font-medium leading-tight text-parchment">{title}</p>
                  )}
                  {artist && (
                    <p className="mt-0.5 text-[0.6rem] tracking-[0.1em] text-parchment/60">{artist}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}

      </div>

      {/* Load more */}
      {hasMore && (
        <div className="mt-8 flex flex-col items-center gap-2">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="ghost-btn px-6 py-2.5 text-xs"
          >
            Load More ({images.length - visibleCount} remaining)
          </button>
          <p className="text-[0.6rem] uppercase tracking-[0.15em] text-parchment/30">
            Showing {visibleImages.length} of {images.length} works
          </p>
        </div>
      )}
    </>
  );
}
