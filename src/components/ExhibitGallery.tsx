"use client";

import { useState } from "react";
import Image from "next/image";
import { toEmbedUrl } from "@/lib/videoEmbed";

const PAGE_SIZE = 12;

interface GalleryImage {
  url: string;
  filename: string;
}

interface Props {
  images: GalleryImage[];
  additionalVideoPaths?: string[];
  additionalVideoUrls?: string[];
  exhibitTitle: string;
}

function parseFilename(filename: string): { title: string; artist: string | null } {
  const base = filename.replace(/\.[^.]+$/, "");
  const byIdx = base.lastIndexOf(" by ");
  if (byIdx === -1) return { title: base, artist: null };
  return { title: base.slice(0, byIdx).trim(), artist: base.slice(byIdx + 4).trim() };
}

function PortraitVideo({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ paddingTop: "177.78%" }}>
      <video
        controls
        playsInline
        preload="metadata"
        aria-label={label}
        className="absolute inset-0 h-full w-full object-contain"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

function EmbedVideo({ url, label }: { url: string; label: string }) {
  const embedSrc = toEmbedUrl(url);
  if (!embedSrc) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="flex items-center justify-center bg-black/40 aspect-video text-xs text-terracotta underline">
        Watch video →
      </a>
    );
  }
  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ paddingTop: "56.25%" }}>
      <iframe
        src={embedSrc}
        title={label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

export default function ExhibitGallery({ images, additionalVideoPaths, additionalVideoUrls, exhibitTitle }: Props) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const hasUploadedVideos = additionalVideoPaths && additionalVideoPaths.length > 0;
  const hasEmbedVideos = additionalVideoUrls && additionalVideoUrls.length > 0;
  const hasVideos = hasUploadedVideos || hasEmbedVideos;

  return (
    <>
      {/* Additional videos — embed URLs (16:9) then uploaded portrait videos */}
      {hasVideos && (
        <div className="mb-8">
          <p className="mb-3 text-[0.62rem] uppercase tracking-[0.2em] text-parchment/40">
            Exhibition Videos
          </p>
          {hasEmbedVideos && (
            <div className={`mb-4 ${additionalVideoUrls!.length === 1 ? "max-w-2xl" : "grid gap-4 grid-cols-1 sm:grid-cols-2"}`}>
              {additionalVideoUrls!.map((url, i) => (
                <EmbedVideo
                  key={`embed-${i}`}
                  url={url}
                  label={`${exhibitTitle} video ${i + 1}`}
                />
              ))}
            </div>
          )}
          {hasUploadedVideos && (
            <div
              className={
                additionalVideoPaths!.length === 1
                  ? "max-w-[280px]"
                  : "grid gap-3 grid-cols-2 max-w-lg"
              }
            >
              {additionalVideoPaths!.map((src, i) => (
                <PortraitVideo
                  key={`vid-${i}`}
                  src={src}
                  label={`${exhibitTitle} video ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Photo grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
