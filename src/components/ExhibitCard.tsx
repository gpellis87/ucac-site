import Image from "next/image";
import Link from "next/link";
import { Exhibit, statusLabel } from "@/data/exhibits";

const statusStyle: Record<string, string> = {
  "now-on-view": "border-navy bg-navy text-white shadow-[0_10px_20px_rgba(12,44,92,0.28)]",
  "opening-soon": "border-[#f1dfbf] bg-[#f4e8d3] text-[#201914] shadow-[0_10px_20px_rgba(0,0,0,0.18)]",
  "call-for-artists": "border-[#6f8cb5] bg-[#3e5474] text-white shadow-[0_10px_20px_rgba(0,0,0,0.24)]",
};

export default function ExhibitCard({ exhibit, muted = false }: { exhibit: Exhibit; muted?: boolean }) {
  return (
    <Link
      href={`/exhibits/${exhibit.slug}`}
      className={`group block overflow-hidden border transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.35)] ${
        muted
          ? "border-parchment/10 bg-parchment/[0.035] hover:border-parchment/30"
          : "border-parchment/20 bg-parchment/[0.045] hover:border-navy/70"
      }`}
    >
      <div className={`relative overflow-hidden ${muted ? "h-44" : "h-56"}`}>
        {exhibit.imageUrl ? (
          // Decorative — the exhibit title is already announced via the heading
          // below, within the same link, so a repeated alt would double-announce it.
          <Image
            src={exhibit.imageUrl}
            alt=""
            fill
            className={`object-cover transition duration-700 group-hover:scale-105 ${muted ? "opacity-60 group-hover:opacity-80" : ""}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(12,44,92,0.25),transparent_60%),linear-gradient(135deg,#1a1612,#2b241d)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        {muted ? (
          <div className="absolute left-4 top-4 border border-white/35 bg-[#2b241d]/90 px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm">
            Past Exhibition
          </div>
        ) : (
          <div
            className={`absolute left-4 top-4 border px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm ${statusStyle[exhibit.status]}`}
          >
            {statusLabel[exhibit.status]}
          </div>
        )}
      </div>
      <div className={`space-y-2 ${muted ? "p-4" : "p-5 space-y-3"}`}>
        <h3 className={`display text-parchment leading-tight ${muted ? "text-lg" : "text-2xl"}`}>{exhibit.title}</h3>
        {!muted && (
          <p className="text-xs uppercase tracking-[0.14em] text-parchment/60">
            {exhibit.location} · {exhibit.address.split(",")[1]?.trim() ?? exhibit.address}
          </p>
        )}
        <p className={`line-clamp-2 text-parchment/60 ${muted ? "text-xs" : "text-sm text-parchment/75"}`}>{exhibit.description}</p>
        <p className={`pt-1 text-[0.75rem] uppercase tracking-[0.16em] transition group-hover:tracking-[0.2em] ${muted ? "text-parchment/60 group-hover:text-parchment/60" : "text-navy"}`}>
          View Exhibition
        </p>
      </div>
    </Link>
  );
}
