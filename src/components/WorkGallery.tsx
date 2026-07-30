"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { sanityImg } from "@/sanity/image";

interface Props {
  images: string[];
  artistName: string;
}

export default function WorkGallery({ images, artistName }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );

  const open = (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setActiveIndex(i);
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    if (activeIndex !== null) {
      closeButtonRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={(e) => open(i, e)}
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
            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${artistName} — work ${activeIndex + 1} of ${images.length}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          <button
            ref={closeButtonRef}
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
