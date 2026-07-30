import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, CalendarDays, Users, Mail, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import { statusLabel } from "@/data/exhibits";
import { getExhibitBySlug, getExhibitSlugs } from "@/sanity/queries";
import { toEmbedUrl } from "@/lib/videoEmbed";
import ExhibitGallery from "@/components/ExhibitGallery";

const FlyerViewer = dynamic(() => import("@/components/FlyerViewer"), { ssr: false });

export const revalidate = 60;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = await getExhibitSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const exhibit = await getExhibitBySlug(params.slug);
  if (!exhibit) return { title: "Exhibit Not Found" };
  return {
    title: `${exhibit.title} | Union County Community Arts Council`,
    description: exhibit.description,
  };
}

const statusColors: Record<string, string> = {
  "now-on-view":
    "border border-terracotta bg-terracotta text-white shadow-[0_10px_20px_rgba(192,84,42,0.28)]",
  "opening-soon":
    "border border-[#f1dfbf] bg-[#f4e8d3] text-[#201914] shadow-[0_10px_20px_rgba(0,0,0,0.18)]",
  "call-for-artists":
    "border border-[#6f8cb5] bg-[#3e5474] text-white shadow-[0_10px_20px_rgba(0,0,0,0.24)]",
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-[0.75rem] uppercase tracking-[0.22em] text-terracotta">{children}</p>;
}

function Divider() {
  return <div className="my-12 h-px w-full bg-gradient-to-r from-terracotta/30 via-parchment/10 to-transparent" />;
}

export default async function ExhibitPage({ params }: Props) {
  const exhibit = await getExhibitBySlug(params.slug);
  if (!exhibit) notFound();

  const receptionLabel = exhibit.status === "opening-soon" ? "Celebration" : "Reception";
  const mainEmbedSrc = exhibit.mainVideoUrl ? toEmbedUrl(exhibit.mainVideoUrl) : null;

  return (
    <div className="pb-0">
      <div className="section-pad border-b border-parchment/10 px-5 py-3 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1500px]">
          <Link
            href="/exhibits"
            className="inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.18em] text-parchment/60 transition hover:text-parchment"
          >
            <ArrowLeft size={13} />
            All Exhibitions
          </Link>
        </div>
      </div>

      <div className="relative h-[42vh] max-h-[520px] min-h-[300px] overflow-hidden">
        {exhibit.imageUrl ? (
          <Image
            src={exhibit.imageUrl}
            alt={exhibit.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(192,84,42,0.3),transparent_55%),linear-gradient(135deg,#1a1612,#2b241d_60%,#1a1a2e)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--theme-overlay)_/_0.9)] via-[rgb(var(--theme-overlay)_/_0.58)] to-[rgb(var(--theme-overlay)_/_0.08)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(192,84,42,0.18),transparent_50%)]" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 md:px-10 lg:px-16 xl:px-24">
          <div className="mx-auto max-w-[1500px]">
            <span
              className={`inline-block px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] ${statusColors[exhibit.status]}`}
            >
              {statusLabel[exhibit.status]}
            </span>
            <h1 className="editorial-title on-image mt-3 max-w-4xl text-4xl leading-[0.93] md:text-6xl lg:text-[5.5rem]">
              {exhibit.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-3">
              <div className="border border-white/30 bg-black/45 px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                {exhibit.location}
              </div>
              {exhibit.receptionDate && (
                <div className="border border-white/30 bg-black/45 px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                  {receptionLabel}: {exhibit.receptionDate}
                  {exhibit.receptionTime && ` · ${exhibit.receptionTime}`}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {(exhibit.mainVideoUrl || exhibit.mainVideoPath) && (
        <section className="theme-band">
          <div className="px-5 pt-10 md:px-10 lg:px-16 xl:px-24">
            <div className="mx-auto max-w-[1500px]">
              <SectionEyebrow>Exhibition Preview</SectionEyebrow>
              {mainEmbedSrc ? (
                <div className="relative w-full overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.7)]" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={mainEmbedSrc}
                    title={`${exhibit.title} preview video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              ) : exhibit.mainVideoUrl ? (
                <a href={exhibit.mainVideoUrl} target="_blank" rel="noreferrer" className="text-terracotta underline text-sm">
                  Watch video →
                </a>
              ) : (
                <div>
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full shadow-[0_24px_64px_rgba(0,0,0,0.7)]"
                    aria-label={`${exhibit.title} preview video`}
                  >
                    <source src={exhibit.mainVideoPath} type="video/mp4" />
                    <p className="p-4 text-sm text-parchment/60">
                      Your browser does not support this video.{" "}
                      <a href={exhibit.mainVideoPath} download className="text-terracotta underline">
                        Download it here.
                      </a>
                    </p>
                  </video>
                  <p className="mt-2 text-[0.75rem] leading-snug text-parchment/60">
                    Not yet captioned — <a href="/contact" className="underline underline-offset-2 hover:text-parchment">request a transcript</a>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-parchment/10 px-5 py-5 md:px-10 lg:px-16 xl:px-24">
            <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-1 w-8 bg-terracotta/70" />
                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-parchment/55">
                  Exhibition Details
                </span>
              </div>
              <span className="text-[0.75rem] font-medium uppercase tracking-[0.18em] text-parchment/60">
                {exhibit.location} · Monroe, NC
              </span>
            </div>
          </div>
        </section>
      )}

      <div className="flex-1 px-5 py-14 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
          <article>
            <SectionEyebrow>About This Exhibition</SectionEyebrow>
            <p className="text-lg leading-relaxed text-parchment/88 md:text-xl">{exhibit.description}</p>

            {exhibit.details.length > 0 && (
              <ul className="mt-8 space-y-4 border-l-2 border-terracotta/40 pl-6">
                {exhibit.details.map((detail) => (
                  <li key={detail} className="text-sm leading-relaxed text-parchment/72">
                    {detail}
                  </li>
                ))}
              </ul>
            )}

            {exhibit.callToAction && (
              <div className="mt-10">
                <a
                  href={exhibit.callToAction.href}
                  target="_blank"
                  rel="noreferrer"
                  className="accent-btn"
                >
                  {exhibit.callToAction.label}
                </a>
              </div>
            )}

            {exhibit.presentedBy.length > 0 && (
              <div className="mt-12 border-t border-parchment/10 pt-8">
                <p className="mb-4 flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">
                  <Users size={11} /> Presented By
                </p>
                <div className="flex flex-wrap gap-2">
                  {exhibit.presentedBy.map((org) => (
                    <span key={org} className="border border-parchment/15 px-3 py-1.5 text-xs text-parchment/65">
                      {org}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside className="self-start lg:sticky lg:top-24">
            <div className="theme-panel divide-y divide-parchment/10">
              <div className="p-5">
                <p className="mb-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-terracotta">
                  Location
                </p>
                <div className="flex items-start gap-2.5">
                  <MapPin size={13} className="mt-0.5 shrink-0 text-terracotta" />
                  <div>
                    <p className="text-base font-semibold text-parchment">{exhibit.location}</p>
                    <p className="mt-1 text-sm text-parchment/68">{exhibit.address}</p>
                  </div>
                </div>
              </div>

              {exhibit.receptionDate && (
                <div className="p-5">
                  <p className="mb-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-terracotta">
                    {receptionLabel}
                  </p>
                  <div className="flex items-start gap-2.5">
                    <CalendarDays size={13} className="mt-0.5 shrink-0 text-terracotta" />
                    <div>
                      <p className="text-base font-semibold text-parchment">{exhibit.receptionDate}</p>
                      {exhibit.receptionTime && (
                        <p className="mt-1 text-sm text-parchment/68">{exhibit.receptionTime}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {exhibit.submissionDeadline && (
                <div className="p-5">
                  <p className="mb-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-terracotta">
                    Submissions Due
                  </p>
                  <div className="flex items-start gap-2.5">
                    <CalendarDays size={13} className="mt-0.5 shrink-0 text-terracotta" />
                    <div>
                      <p className="text-base font-semibold text-parchment">{exhibit.submissionDeadline}</p>
                      {exhibit.submissionUrl && exhibit.submissionUrl !== exhibit.callToAction?.href && (
                        <a
                          href={exhibit.submissionUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block text-[0.75rem] uppercase tracking-[0.14em] text-terracotta hover:underline"
                        >
                          Submit Now →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {exhibit.qrCodeUrl && (
                <div className="p-5">
                  <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-terracotta">
                    Scan to Submit
                  </p>
                  <Image
                    src={exhibit.qrCodeUrl}
                    alt="QR code to submit work for this exhibition"
                    width={140}
                    height={140}
                    className="border border-parchment/15"
                  />
                  <p className="mt-2 text-[0.75rem] leading-snug text-parchment/60">
                    Point your phone camera at the code to open the submission form.
                  </p>
                </div>
              )}

              {exhibit.tags.length > 0 && (
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {exhibit.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-parchment/15 bg-parchment/[0.06] px-2.5 py-1.5 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-parchment/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-5">
                <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-terracotta">
                  Questions?
                </p>
                <a
                  href="mailto:info@unionarts.org"
                  className="flex items-center gap-2 text-sm text-parchment/78 transition hover:text-terracotta"
                >
                  <Mail size={12} className="text-terracotta/70" /> info@unionarts.org
                </a>
                <p className="mt-2 flex items-center gap-2 text-sm text-parchment/68">
                  <Phone size={12} className="text-terracotta/70" /> (704) 283-2784
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {((exhibit.additionalVideoPaths && exhibit.additionalVideoPaths.length > 0) ||
        (exhibit.additionalVideoUrls && exhibit.additionalVideoUrls.length > 0) ||
        (exhibit.images && exhibit.images.length > 0)) && (
        <>
          <Divider />
          <section className="px-5 pb-16 md:px-10 lg:px-16 xl:px-24">
            <div className="mx-auto max-w-[1500px]">
              <SectionEyebrow>Gallery</SectionEyebrow>
              <ExhibitGallery
                images={exhibit.images ?? []}
                additionalVideoPaths={exhibit.additionalVideoPaths}
                additionalVideoUrls={exhibit.additionalVideoUrls}
                exhibitTitle={exhibit.title}
              />
            </div>
          </section>
        </>
      )}

      {exhibit.flyerPath && (
        <>
          <Divider />
          <section className="px-5 pb-20 md:px-10 lg:px-16 xl:px-24">
            <div className="mx-auto max-w-[1500px]">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <SectionEyebrow>Official Flyer</SectionEyebrow>
                  <h2 className="display text-3xl text-parchment">Event Details</h2>
                </div>
                <a href={exhibit.flyerPath} download className="ghost-btn px-4 py-2 text-xs">
                  Download
                </a>
              </div>
              <FlyerViewer flyerPath={exhibit.flyerPath} title={exhibit.title} />
            </div>
          </section>
        </>
      )}
    </div>
  );
}
