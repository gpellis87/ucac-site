import Image from "next/image";
import { Workshop, registrationStatusLabel } from "@/data/workshops";

const statusStyle: Record<string, string> = {
  open: "border-terracotta bg-terracotta text-white shadow-[0_10px_20px_rgba(192,84,42,0.28)]",
  waitlist: "border-[#f1dfbf] bg-[#f4e8d3] text-[#201914] shadow-[0_10px_20px_rgba(0,0,0,0.18)]",
  "sold-out": "border-parchment/25 bg-[#2b241d]/90 text-parchment/70",
  "coming-soon": "border-[#6f8cb5] bg-[#3e5474] text-white shadow-[0_10px_20px_rgba(0,0,0,0.24)]",
};

export default function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const disabled = workshop.registrationStatus === "sold-out" || workshop.registrationStatus === "coming-soon" || !workshop.zeffyUrl;
  const priceLabel = workshop.price === 0 ? "Free" : `$${workshop.price.toLocaleString()}`;

  const Wrapper = disabled ? "div" : "a";
  const wrapperProps = disabled
    ? {}
    : { href: workshop.zeffyUrl ?? undefined, target: "_blank", rel: "noopener noreferrer" };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block overflow-hidden border border-parchment/20 bg-parchment/[0.045] transition duration-300 ${
        disabled ? "opacity-80" : "hover:-translate-y-1.5 hover:border-terracotta/70 hover:shadow-[0_16px_34px_rgba(0,0,0,0.28)] cursor-pointer"
      }`}
    >
      <div className="relative h-56 overflow-hidden">
        {workshop.imageUrl ? (
          <Image
            src={workshop.imageUrl}
            alt={workshop.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(192,84,42,0.25),transparent_60%),linear-gradient(135deg,#1a1612,#2b241d)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        {workshop.category && (
          <div className="theme-chip absolute left-4 top-4 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-terracotta">
            {workshop.category}
          </div>
        )}
        <div
          className={`absolute right-4 top-4 border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm ${statusStyle[workshop.registrationStatus]}`}
        >
          {registrationStatusLabel[workshop.registrationStatus]}
        </div>
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.14em] text-parchment/70">{workshop.scheduleText}</p>
        <h3 className="display text-2xl text-parchment leading-tight">{workshop.title}</h3>
        <p className="text-sm text-parchment/75">
          {workshop.instructor ? `with ${workshop.instructor}` : ""}
          {workshop.instructor && workshop.skillLevel ? " · " : ""}
          {workshop.skillLevel ?? ""}
        </p>
        {workshop.description && (
          <p className="line-clamp-2 text-sm text-parchment/60">{workshop.description}</p>
        )}
        <div className="flex items-center justify-between pt-1">
          <span className="text-lg text-parchment">{priceLabel}</span>
          <span
            className={`text-[0.68rem] uppercase tracking-[0.16em] transition group-hover:tracking-[0.2em] ${
              disabled ? "text-parchment/40" : "text-terracotta"
            }`}
          >
            {registrationStatusLabel[workshop.registrationStatus]}
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
