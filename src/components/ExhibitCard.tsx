import Image from "next/image";
import Link from "next/link";
import { Exhibit, statusLabel } from "@/data/exhibits";

const statusStyle: Record<string, string> = {
  "now-on-view": "border-terracotta bg-terracotta text-parchment",
  "opening-soon": "border-parchment/60 bg-parchment/10 text-parchment",
  "call-for-artists": "border-slate bg-slate/20 text-parchment",
};

export default function ExhibitCard({ exhibit }: { exhibit: Exhibit }) {
  return (
    <Link
      href={`/exhibits/${exhibit.slug}`}
      className="group block overflow-hidden border border-parchment/20 bg-black/30 transition duration-300 hover:-translate-y-1.5 hover:border-terracotta/70 hover:shadow-[0_16px_34px_rgba(0,0,0,0.35)]"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={exhibit.imageUrl}
          alt={exhibit.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div
          className={`absolute left-4 top-4 border px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] ${statusStyle[exhibit.status]}`}
        >
          {statusLabel[exhibit.status]}
        </div>
      </div>
      <div className="space-y-3 p-5">
        <h3 className="display text-2xl text-parchment leading-tight">{exhibit.title}</h3>
        <p className="text-xs uppercase tracking-[0.14em] text-parchment/60">
          {exhibit.location} · {exhibit.address.split(",")[1]?.trim() ?? exhibit.address}
        </p>
        <p className="line-clamp-2 text-sm text-parchment/75">{exhibit.description}</p>
        <p className="pt-1 text-[0.68rem] uppercase tracking-[0.16em] text-terracotta transition group-hover:tracking-[0.2em]">
          Learn More
        </p>
      </div>
    </Link>
  );
}
