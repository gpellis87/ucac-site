import Image from "next/image";
import Link from "next/link";
import { Workshop, registrationStatusLabel } from "@/data/workshops";
import { sanityImg } from "@/sanity/image";
import { isRegistrationDisabled, priceLabel, registrationStatusStyle } from "@/lib/workshop-utils";

export default function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const disabled = isRegistrationDisabled(workshop);

  return (
    <div className="group overflow-hidden border border-parchment/20 bg-parchment/[0.045] transition duration-300 hover:-translate-y-1.5 hover:border-navy/70 hover:shadow-[0_16px_34px_rgba(0,0,0,0.28)]">
      <Link href={`/classes/${workshop.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          {workshop.imageUrl ? (
            // Decorative — the workshop title is already announced via the heading
            // below, within the same link, so a repeated alt would double-announce it.
            // Requested crop matches the container's aspect-[4/3] exactly, so the
            // hotspot-focused crop Sanity returns is what renders -- no second,
            // unpredictable crop from object-cover fighting a mismatched container ratio.
            <Image
              src={sanityImg(workshop.imageUrl, { w: 800, h: 600, fit: "crop", hotspot: workshop.imageHotspot })}
              alt=""
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(12,44,92,0.25),transparent_60%),linear-gradient(135deg,#1a1612,#2b241d)]" />
          )}
          <div
            className={`absolute right-4 top-4 border px-3 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm ${registrationStatusStyle[workshop.registrationStatus]}`}
          >
            {registrationStatusLabel[workshop.registrationStatus]}
          </div>
        </div>
        <div className="space-y-3 p-5 pb-0">
          <p className="text-xs uppercase tracking-[0.14em] text-parchment/70">{workshop.scheduleText}</p>
          <h3 className="display text-2xl text-parchment leading-tight transition group-hover:text-navy">
            {workshop.title}
          </h3>
          <p className="text-sm text-parchment/75">
            {workshop.instructor ? `with ${workshop.instructor}` : ""}
            {workshop.instructor && workshop.skillLevel ? " · " : ""}
            {workshop.skillLevel ?? ""}
          </p>
          {workshop.description && (
            <p className="line-clamp-2 text-sm text-parchment/60">{workshop.description}</p>
          )}
        </div>
      </Link>
      <div className="flex items-center justify-between p-5 pt-3">
        <div className="flex flex-col">
          <span className="text-lg text-parchment">{priceLabel(workshop.price)}</span>
          {workshop.memberPrice != null && (
            <span className="text-xs text-parchment/60">Members {priceLabel(workshop.memberPrice)}</span>
          )}
          {workshop.materialsCost != null && (
            <span className="text-xs text-parchment/60">+ {priceLabel(workshop.materialsCost)} materials</span>
          )}
        </div>
        {disabled ? (
          <span className="text-[0.75rem] uppercase tracking-[0.16em] text-parchment/60">
            {registrationStatusLabel[workshop.registrationStatus]}
          </span>
        ) : (
          <a
            href={workshop.zeffyUrl ?? undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.75rem] uppercase tracking-[0.16em] text-navy transition hover:tracking-[0.2em]"
          >
            {registrationStatusLabel[workshop.registrationStatus]}
          </a>
        )}
      </div>
    </div>
  );
}
