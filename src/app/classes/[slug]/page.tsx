import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, ShieldCheck, User } from "lucide-react";
import { registrationStatusLabel, sessionTypeLabel } from "@/data/workshops";
import { getWorkshopBySlug, getWorkshopSlugs } from "@/sanity/queries";
import { sanityImg } from "@/sanity/image";
import { isRegistrationDisabled, priceLabel, registrationStatusStyle } from "@/lib/workshop-utils";

export const revalidate = 60;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = await getWorkshopSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const workshop = await getWorkshopBySlug(params.slug);
  if (!workshop) return { title: "Class Not Found" };
  return {
    title: workshop.title,
    description: workshop.description ?? workshop.overview ?? undefined,
    robots: { index: false, follow: false },
  };
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-[0.75rem] uppercase tracking-[0.22em] text-navy">{children}</p>;
}

export default async function WorkshopDetailPage({ params }: Props) {
  const workshop = await getWorkshopBySlug(params.slug);
  if (!workshop) notFound();

  const disabled = isRegistrationDisabled(workshop);
  const overviewText = workshop.overview ?? workshop.description;

  return (
    <div className="pb-0">
      <div className="section-pad border-b border-parchment/10 px-5 py-3 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1500px]">
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.18em] text-parchment/60 transition hover:text-parchment"
          >
            <ArrowLeft size={13} />
            All Classes
          </Link>
        </div>
      </div>

      <div className="section-pad pt-10 md:pt-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-wrap gap-2">
            <span
              className={`border px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] ${registrationStatusStyle[workshop.registrationStatus]}`}
            >
              {registrationStatusLabel[workshop.registrationStatus]}
            </span>
          </div>
          <h1 className="editorial-title mt-4 max-w-6xl text-4xl leading-[0.95] md:text-6xl lg:text-7xl">
            {workshop.title}
          </h1>
          {workshop.instructor && (
            <p className="mt-4 text-base text-parchment/85">with {workshop.instructor}</p>
          )}
        </div>
      </div>

      {workshop.imageUrl && (
        <div className="section-pad mt-8 md:mt-10">
          <div className="mx-auto max-w-[1500px]">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={sanityImg(workshop.imageUrl, { w: 1600, h: 900, fit: "crop", hotspot: workshop.imageHotspot })}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 px-5 py-14 md:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
          <article>
            <SectionEyebrow>Overview</SectionEyebrow>
            {overviewText && (
              <p className="whitespace-pre-line text-lg leading-relaxed text-parchment/88 md:text-xl">
                {overviewText}
              </p>
            )}

            {workshop.instructorBio && (
              <div className="mt-12 border-t border-parchment/10 pt-8">
                <p className="mb-3 flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">
                  <User size={11} /> About the Instructor
                </p>
                <p className="text-sm leading-relaxed text-parchment/72">{workshop.instructorBio}</p>
              </div>
            )}

            <div className="mt-12 border-t border-parchment/10 pt-6">
              <div className="flex items-start gap-2.5 text-sm leading-relaxed text-parchment/72">
                <ShieldCheck size={14} className="mt-0.5 shrink-0 text-navy" />
                <p>
                  Registration and payment is handled securely through Zeffy, a platform built for nonprofits
                  that charges the Arts Council no processing or platform fees. Zeffy may separately offer an
                  optional tip to support their platform — that&apos;s not part of your class fee.{" "}
                  See our{" "}
                  <Link href="/registration-policies" className="text-navy underline underline-offset-4 transition hover:text-parchment">
                    Registration Policies
                  </Link>{" "}
                  for withdrawal, refund, and cancellation details.
                </p>
              </div>
            </div>
          </article>

          <aside className="self-start lg:sticky lg:top-24">
            <div className="theme-panel divide-y divide-parchment/10">
              <div className="p-5">
                <p className="mb-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-navy">
                  Schedule
                </p>
                <div className="flex items-start gap-2.5">
                  <CalendarDays size={13} className="mt-0.5 shrink-0 text-navy" />
                  <p className="text-sm font-medium text-parchment">{workshop.scheduleText}</p>
                </div>
              </div>

              <div className="p-5">
                <p className="mb-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-navy">
                  Location
                </p>
                <div className="flex items-start gap-2.5">
                  <MapPin size={13} className="mt-0.5 shrink-0 text-navy" />
                  <p className="text-sm font-medium text-parchment">{workshop.location ?? "UCCAC Studio"}</p>
                </div>
              </div>

              {(workshop.skillLevel || workshop.sessionType) && (
                <div className="p-5">
                  <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-navy">
                    Details
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {workshop.sessionType && (
                      <span className="border border-parchment/15 bg-parchment/[0.06] px-2.5 py-1.5 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-parchment/65">
                        {sessionTypeLabel[workshop.sessionType]}
                      </span>
                    )}
                    {workshop.skillLevel && (
                      <span className="border border-parchment/15 bg-parchment/[0.06] px-2.5 py-1.5 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-parchment/65">
                        {workshop.skillLevel}
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="p-5">
                <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-navy">
                  Class Fee
                </p>
                <div
                  className={`text-2xl text-parchment ${
                    workshop.memberPrice == null && workshop.materialsCost == null ? "mb-4" : ""
                  }`}
                >
                  {priceLabel(workshop.price)}
                </div>
                {workshop.memberPrice != null && (
                  <div className={`text-sm text-parchment/60 ${workshop.materialsCost == null ? "mb-4" : ""}`}>
                    Members {priceLabel(workshop.memberPrice)}
                  </div>
                )}
                {workshop.materialsCost != null && (
                  <div className="mb-4 text-sm text-parchment/60">
                    + {priceLabel(workshop.materialsCost)} materials fee
                  </div>
                )}
                {disabled ? (
                  <span className="block w-full border border-parchment/25 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-parchment/60">
                    {registrationStatusLabel[workshop.registrationStatus]}
                  </span>
                ) : (
                  <a
                    href={workshop.zeffyUrl ?? undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-btn block w-full text-center"
                  >
                    {registrationStatusLabel[workshop.registrationStatus]}
                  </a>
                )}
                <Link
                  href="/registration-policies"
                  className="mt-3 block text-center text-[0.75rem] text-parchment/60 underline underline-offset-4 transition hover:text-parchment"
                >
                  Registration Policies
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
