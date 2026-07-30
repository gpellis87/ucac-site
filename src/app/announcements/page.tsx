import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, Download } from "lucide-react";
import { getAllAnnouncements } from "@/sanity/queries";
import type { Announcement } from "@/sanity/queries";
import { sanityImg } from "@/sanity/image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Announcements | Union County Community Arts Council",
  description:
    "News and announcements from the Union County Community Arts Council — grants, programs, events, and updates.",
};

function AnnouncementCta({ cta, primary }: { cta: { label: string; url: string }; primary?: boolean }) {
  const isExternal = cta.url.startsWith("http");
  const cls = primary
    ? "inline-flex items-center gap-2 bg-terracotta px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-parchment transition hover:bg-terracotta/85"
    : "inline-flex items-center gap-2 border border-parchment/30 px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-parchment/80 transition hover:border-parchment hover:text-parchment";
  return isExternal ? (
    <a href={cta.url} target="_blank" rel="noreferrer" className={cls}>
      {primary && <Heart size={13} />} {cta.label}
    </a>
  ) : (
    <Link href={cta.url} className={cls}>
      {cta.label}
    </Link>
  );
}

function AnnouncementEntry({ announcement }: { announcement: Announcement }) {
  const paragraphs = announcement.body
    ? announcement.body.split(/\n\n+/).filter(Boolean)
    : null;

  return (
    <section id={announcement.slug} className="scroll-mt-28">
      <div className="relative overflow-hidden border border-parchment/15 bg-parchment/[0.04] p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(192,84,42,0.08),transparent_60%)]" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {announcement.eyebrow && (
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-terracotta">
                {announcement.eyebrow}
              </p>
            )}
            <span className="text-parchment/60">·</span>
            <time className="text-[0.65rem] uppercase tracking-[0.18em] text-parchment/60">
              {new Date(announcement.publishedAt + "T12:00:00").toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h2 className="editorial-title text-4xl leading-tight md:text-5xl">
            {announcement.title}
          </h2>

          {announcement.contentImage ? (
            <div className="mt-6 max-w-2xl">
              <div className="relative overflow-hidden border border-parchment/15">
                <Image
                  src={sanityImg(announcement.contentImage, { w: 1200 })}
                  alt={announcement.title}
                  width={1200}
                  height={900}
                  className="h-auto w-full object-contain"
                  unoptimized
                />
              </div>
              {paragraphs && (
                <div className="mt-6 space-y-4 text-base leading-relaxed text-parchment/72">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          ) : paragraphs ? (
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-parchment/72">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-parchment/72">
              {announcement.description}
            </p>
          )}

          {(announcement.ctaOne || announcement.ctaTwo) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {announcement.ctaOne && <AnnouncementCta cta={announcement.ctaOne} primary />}
              {announcement.ctaTwo && <AnnouncementCta cta={announcement.ctaTwo} />}
            </div>
          )}

          {announcement.flyerImage && (
            <div className="mt-10">
              <p className="mb-3 text-[0.62rem] uppercase tracking-[0.2em] text-parchment/60">Supplemental Flyer</p>
              <div className="relative w-full max-w-sm overflow-hidden border border-parchment/15">
                <Image
                  src={sanityImg(announcement.flyerImage, { w: 800 })}
                  alt={`Flyer for ${announcement.title}`}
                  width={800}
                  height={1100}
                  className="h-auto w-full object-contain"
                  unoptimized
                />
              </div>
            </div>
          )}

          {announcement.flyerPdf && (
            <div className="mt-6">
              <a
                href={announcement.flyerPdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-parchment/25 px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-parchment/65 transition hover:border-parchment/60 hover:text-parchment"
              >
                <Download size={13} />
                Download Flyer (PDF)
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default async function AnnouncementsPage() {
  const announcements = await getAllAnnouncements();

  return (
    <div className="pb-24">

      {/* Breadcrumb */}
      <div className="section-pad border-b border-parchment/10 py-3">
        <div className="mx-auto max-w-[1500px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-parchment/60 transition hover:text-parchment"
          >
            <ArrowLeft size={13} />
            Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(192,84,42,0.18),transparent_55%)]" />
        <div className="section-pad relative py-16">
          <div className="mx-auto max-w-[1500px]">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">From the Arts Council</p>
            <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
              Announcements
            </h1>
            <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed">
              News, grants, programs, and updates from the Union County Community Arts Council.
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Announcements list */}
      <div className="section-pad py-12">
        <div className="mx-auto max-w-[1500px]">
          {announcements.length === 0 ? (
            <p className="text-parchment/60 text-sm">No announcements at this time. Check back soon.</p>
          ) : (
            <div className="space-y-6">
              {announcements.map((ann) => (
                <AnnouncementEntry key={ann.slug} announcement={ann} />
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
