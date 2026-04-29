import Image from "next/image";
import Link from "next/link";
import { Exhibit, statusLabel } from "@/data/exhibits";

const statusStyle: Record<string, string> = {
  "now-on-view": "border-terracotta bg-terracotta text-parchment",
  "opening-soon": "border-parchment/60 bg-parchment/10 text-parchment",
  "call-for-artists": "border-slate bg-slate/20 text-parchment",
};

export default function ExhibitCard({ exhibit, muted = false }: { exhibit: Exhibit; muted?: boolean }) {
  return (
    <Link
      href={`/exhibits/${exhibit.slug}`}
      className={`group block overflow-hidden border transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_34px_rgba(0,0,0,0.35)] ${
        muted
          ? "border-parchment/10 bg-black/20 hover:border-parchment/30"
          : "border-parchment/20 bg-black/30 hover:border-terracotta/70"
      }`}
    >
      <div className={`relative overflow-hidden ${muted ? "h-44" : "h-56"}`}>
        <Image
          src={exhibit.imageUrl}
          alt={exhibit.title}
          fill
          className={`object-cover transition duration-700 group-hover:scale-105 ${muted ? "opacity-60 group-hover:opacity-80" : ""}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        {muted ? (
          <div className="absolute left-4 top-4 border border-parchment/25 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-parchment/50">
            Past Exhibition
          </div>
        ) : (
          <div
            className={`absolute left-4 top-4 border px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] ${statusStyle[exhibit.status]}`}
          >
            {statusLabel[exhibit.status]}
          </div>
        )}
      </div>
      <div className={`space-y-2 ${muted ? "p-4" : "p-5 space-y-3"}`}>
        <h3 className={`display text-parchment leading-tight ${muted ? "text-lg" : "text-2xl"}`}>{exhibit.title}</h3>
        {!muted && (
          <p className="text-xs uppercase tracking-[0.14em] text-parchment/70">
            {exhibit.location} · {exhibit.address.split(",")[1]?.trim() ?? exhibit.address}
          </p>
        )}
        <p className={`line-clamp-2 text-parchment/70 ${muted ? "text-xs" : "text-sm text-parchment/83"}`}>{exhibit.description}</p>
        <p className={`pt-1 text-[0.68rem] uppercase tracking-[0.16em] transition group-hover:tracking-[0.2em] ${muted ? "text-parchment/50 group-hover:text-parchment/72" : "text-terracotta"}`}>
          View Exhibition
        </p>
      </div>
    </Link>
  );
}
