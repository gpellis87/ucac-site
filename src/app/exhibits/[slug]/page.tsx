import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Clock, CalendarDays, Users } from "lucide-react";
import { exhibits, statusLabel } from "@/data/exhibits";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return exhibits.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const exhibit = exhibits.find((e) => e.slug === params.slug);
  if (!exhibit) return { title: "Exhibit Not Found" };
  return {
    title: `${exhibit.title} | Union County Community Arts Council`,
    description: exhibit.description,
  };
}

const statusStyle: Record<string, string> = {
  "now-on-view": "bg-terracotta text-parchment",
  "opening-soon": "bg-parchment/15 text-parchment border border-parchment/40",
  "call-for-artists": "bg-slate/30 text-parchment border border-parchment/30",
};

export default function ExhibitPage({ params }: Props) {
  const exhibit = exhibits.find((e) => e.slug === params.slug);
  if (!exhibit) notFound();

  return (
    <div className="min-h-screen bg-[#0d0c0b] text-parchment flex flex-col">

      {/* Minimal header */}
      <header className="sticky top-0 z-50 border-b border-parchment/10 bg-[#0d0c0b]/92 backdrop-blur-xl px-5 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-parchment/65 transition hover:text-parchment"
          >
            <ArrowLeft size={14} />
            Back
          </Link>
          <Link href="/" className="display text-xl tracking-tight text-parchment hover:text-terracotta transition-colors">
            UCCAC
          </Link>
        </div>
      </header>

      {/* Hero image */}
      <div className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <Image
          src={exhibit.imageUrl}
          alt={exhibit.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0b] via-[#0d0c0b]/50 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 md:px-10 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-[1500px]">
            <span
              className={`inline-block px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] ${statusStyle[exhibit.status]}`}
            >
              {statusLabel[exhibit.status]}
            </span>
            <h1 className="editorial-title mt-4 max-w-4xl text-4xl md:text-6xl lg:text-7xl">
              {exhibit.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 px-5 py-12 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.6fr_1fr]">

          {/* Left: description + details */}
          <article className="space-y-6">
            <p className="text-base leading-relaxed text-parchment/82 md:text-lg">
              {exhibit.description}
            </p>
            <ul className="space-y-3 border-l border-terracotta/50 pl-5">
              {exhibit.details.map((detail) => (
                <li key={detail} className="text-sm leading-relaxed text-parchment/75">
                  {detail}
                </li>
              ))}
            </ul>

            {exhibit.callToAction && (
              <a
                href={exhibit.callToAction.href}
                target="_blank"
                rel="noreferrer"
                className="accent-btn mt-4 w-fit"
              >
                {exhibit.callToAction.label}
              </a>
            )}

            {exhibit.presentedBy.length > 0 && (
              <div className="pt-4">
                <p className="mb-3 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-parchment/50">
                  <Users size={12} /> Presented By
                </p>
                <div className="flex flex-wrap gap-2">
                  {exhibit.presentedBy.map((org) => (
                    <span
                      key={org}
                      className="border border-parchment/20 px-3 py-1 text-xs text-parchment/70"
                    >
                      {org}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Right: info sidebar */}
          <aside className="space-y-4 border border-parchment/20 bg-black/25 p-6 self-start">
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={15} className="mt-0.5 shrink-0 text-terracotta" />
              <div>
                <p className="text-parchment">{exhibit.location}</p>
                <p className="text-parchment/60">{exhibit.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Clock size={15} className="mt-0.5 shrink-0 text-terracotta" />
              <p className="text-parchment/80">{exhibit.galleryHours}</p>
            </div>

            {exhibit.receptionDate && (
              <div className="flex items-start gap-3 text-sm">
                <CalendarDays size={15} className="mt-0.5 shrink-0 text-terracotta" />
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.14em] text-parchment/50 mb-0.5">
                    {exhibit.status === "opening-soon" ? "Celebration" : "Reception"}
                  </p>
                  <p className="text-parchment">
                    {new Date(exhibit.receptionDate + "T12:00:00").toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  {exhibit.receptionTime && (
                    <p className="text-parchment/65 text-xs mt-0.5">{exhibit.receptionTime}</p>
                  )}
                </div>
              </div>
            )}

            {exhibit.submissionDeadline && (
              <div className="flex items-start gap-3 text-sm">
                <CalendarDays size={15} className="mt-0.5 shrink-0 text-terracotta" />
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.14em] text-parchment/50 mb-0.5">
                    Submissions Due
                  </p>
                  <p className="text-parchment">
                    {new Date(exhibit.submissionDeadline + "T12:00:00").toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            )}

            {exhibit.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {exhibit.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-parchment/20 px-2 py-1 text-[0.65rem] uppercase tracking-[0.12em] text-parchment/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="pt-3 border-t border-parchment/15">
              <p className="text-[0.68rem] uppercase tracking-[0.14em] text-parchment/45 mb-2">Questions?</p>
              <a
                href="mailto:events@unionarts.org"
                className="text-sm text-terracotta hover:underline"
              >
                events@unionarts.org
              </a>
              <p className="mt-1 text-sm text-parchment/55">(704) 283-2784</p>
            </div>
          </aside>
        </div>
      </main>

      {/* Flyer embed */}
      {exhibit.flyerPath && (
        <section className="px-5 pb-16 md:px-10 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="display text-3xl text-parchment">Event Flyer</h2>
              <a
                href={exhibit.flyerPath}
                download
                className="ghost-btn px-4 py-2 text-xs"
              >
                Download Flyer
              </a>
            </div>
            <div className="border border-parchment/20 overflow-hidden bg-black/20">
              <object
                data={exhibit.flyerPath}
                type="application/pdf"
                width="100%"
                className="block min-h-[80vh]"
                aria-label={`${exhibit.title} flyer`}
              >
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center text-parchment/60">
                  <p className="text-sm">Your browser cannot display this PDF inline.</p>
                  <a href={exhibit.flyerPath} download className="accent-btn px-5 py-2 text-xs">
                    Download Flyer
                  </a>
                </div>
              </object>
            </div>
          </div>
        </section>
      )}

      {/* Footer strip */}
      <div className="border-t border-parchment/10 px-6 py-5 text-center mt-8">
        <p className="text-[0.62rem] uppercase tracking-[0.2em] text-parchment/30">
          &copy; {new Date().getFullYear()} Union County Community Arts Council &mdash; 501(c)(3) Nonprofit
        </p>
      </div>
    </div>
  );
}
