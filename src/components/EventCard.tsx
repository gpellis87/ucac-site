import Image from "next/image";
import Link from "next/link";
import { UccacEvent } from "@/data/events";
import { formatEventDate } from "@/lib/event-utils";

export default function EventCard({ event }: { event: UccacEvent }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group block overflow-hidden border border-parchment/20 bg-parchment/[0.045] transition duration-300 hover:-translate-y-1.5 hover:border-terracotta/70 hover:shadow-[0_16px_34px_rgba(0,0,0,0.28)]"
    >
      <div className="relative h-64 overflow-hidden">
        {/* Decorative — the event title is already announced via the heading below,
            within the same link, so a repeated alt would double-announce it. */}
        <Image
          src={event.imageUrl}
          alt=""
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="theme-chip absolute left-4 top-4 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-terracotta">
          {event.category}
        </div>
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.14em] text-parchment/70">
          {formatEventDate(event.date)} · {event.location}
        </p>
        <h3 className="display text-2xl text-parchment">{event.title}</h3>
        <p className="line-clamp-2 text-sm text-parchment/75">{event.description}</p>
        <p className="pt-1 text-[0.68rem] uppercase tracking-[0.16em] text-terracotta transition group-hover:tracking-[0.2em]">
          View Event
        </p>
      </div>
    </Link>
  );
}
