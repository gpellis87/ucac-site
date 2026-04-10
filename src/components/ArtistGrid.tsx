"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import ArtistCard from "@/components/ArtistCard";
import { Artist } from "@/data/artists";

export default function ArtistGrid({ artists }: { artists: Artist[] }) {
  const [query, setQuery] = useState("");

  const sorted = useMemo(
    () =>
      [...artists].sort(
        (a, b) =>
          a.lastName.localeCompare(b.lastName) ||
          a.firstName.localeCompare(b.firstName)
      ),
    [artists]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter((a) =>
      `${a.firstName} ${a.lastName}`.toLowerCase().includes(q) ||
      a.medium.toLowerCase().includes(q) ||
      a.city.toLowerCase().includes(q)
    );
  }, [sorted, query]);

  return (
    <>
      {/* Search bar */}
      <div className="mb-8 relative max-w-sm">
        <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-parchment/35 pointer-events-none" />
        <input
          type="text"
          placeholder="Search by name, medium, or city…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-parchment/20 bg-black/30 pl-8 pr-8 py-2 text-sm text-parchment placeholder:text-parchment/30 focus:border-terracotta/60 focus:outline-none"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-parchment/35 hover:text-parchment"
            aria-label="Clear search"
          >
            <X size={13} />
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map((artist, i) => (
            <ArtistCard key={artist.id} artist={artist} priority={i < 5} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-sm text-parchment/40">No artists match &ldquo;{query}&rdquo;</p>
          <button onClick={() => setQuery("")} className="mt-3 text-[0.7rem] uppercase tracking-[0.16em] text-terracotta hover:underline">
            Clear search
          </button>
        </div>
      )}

      {query && filtered.length > 0 && (
        <p className="mt-6 text-[0.65rem] uppercase tracking-[0.16em] text-parchment/30">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}
    </>
  );
}
