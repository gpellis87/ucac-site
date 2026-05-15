"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { sanityImg } from "@/sanity/image";

interface Props {
  images: string[];
  artistName: string;
}

export default function WorkGallery({ images, artistName }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="group relative aspect-square overflow-hidden border border-parchment/10 bg-[rgb(var(--theme-bg-alt)_/_0.65)] cursor-pointer"
            aria-label={`${artistName} — work ${i + 1}, click to view full image`}
          >
            <Image
              src={sanityImg(src, { w: 800, h: 800, fit: "crop" })}
              alt={`${artistName} — work ${i + 1}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/25" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 p-2 text-white/60 transition hover:text-white"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {images.length > 1 && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.22em] text-white/40">
              {activeIndex + 1} / {images.length}
            </p>
          )}

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 p-2 text-white/50 transition hover:text-white"
                aria-label="Previous work"
              >
                <ChevronLeft size={30} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 p-2 text-white/50 transition hover:text-white"
                aria-label="Next work"
              >
                <ChevronRight size={30} />
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={sanityImg(images[activeIndex], { w: 1600 })}
            alt={`${artistName} — work ${activeIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
