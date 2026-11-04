import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail } from "lucide-react";
import {
  getCallForEntryBySlug,
  getCallForEntrySlugs,
  isCallClosed,
  formatCallDate,
} from "@/sanity/queries";
import { sanityImg } from "@/sanity/image";

export const revalidate = 60;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = await getCallForEntrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const call = await getCallForEntryBySlug(params.slug);
  if (!call) return { title: "Call for Entry Not Found" };
  return { title: `${call.title} — Call for Entry`, description: call.summary };
}

function Paragraphs({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {text
        .split(/\n\n+/)
        .filter(Boolean)
        .map((p, i) => (
          <p key={i}>{p}</p>
        ))}
    </div>
  );
}

/** Bold the "Label:" lead-in of a bullet when it has a short one. */
function Bullet({ text }: { text: string }) {
  const i = text.indexOf(":");
  if (i > 0 && i <= 40) {
    return (
      <>
        <strong className="font-semibold text-parchment">{text.slice(0, i + 1)}</strong>
        {text.slice(i + 1)}
      </>
    );
  }
  return <>{text}</>;
}

const primaryBtn =
  "inline-flex items-center gap-2 bg-navy px-7 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-white transition hover:bg-navy/85";
const secondaryBtn =
  "inline-flex items-center gap-2 border border-parchment/30 px-7 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-parchment/80 transition hover:border-parchment hover:text-parchment";

export default async function CallForEntryPage({ params }: Props) {
  const call = await getCallForEntryBySlug(params.slug);
  if (!call) notFound();
  const closed = isCallClosed(call.deadline);

  return (
    <div className="pb-24">
      <div className="section-pad border-b border-parchment/10 py-3">
        <div className="mx-auto max-w-[1500px]">
          <Link
            href="/calls-for-entry"
            className="inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.18em] text-parchment/60 transition hover:text-parchment"
          >
            <ArrowLeft size={13} />
            All Calls for Entry
          </Link>
        </div>
      </div>

      <div className="section-pad pt-10">
        <div className="mx-auto max-w-[1500px]">
          {call.headerImage && (
            <div className="relative aspect-[8/3] w-full overflow-hidden border border-parchment/15">
              <Image
                src={sanityImg(call.headerImage, { w: 1600 })}
                alt={`${call.title} — Call for Entry`}
                fill
                priority
                sizes="(max-width: 1500px) 100vw, 1500px"
                className="object-cover"
              />
            </div>
          )}

          <p className="mt-10 text-[0.75rem] uppercase tracking-[0.22em] text-navy">
            {closed ? "Call for Entry · Closed" : "Call for Entry"}
          </p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            {call.title}
          </h1>
          {call.tagline && <p className="mt-4 text-lg italic text-parchment/70">{call.tagline}</p>}

          <div className="mt-6 flex flex-wrap gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em]">
            <span className="border border-navy bg-navy px-4 py-2 text-white">
              {closed ? "Closed" : "Deadline"}: {formatCallDate(call.deadline)}
              {call.deadlineNote && ` ${call.deadlineNote}`}
            </span>
            {call.exhibitionDates && (
              <span className="border border-parchment/30 px-4 py-2 text-parchment/80">
                Exhibition: {call.exhibitionDates}
              </span>
            )}
          </div>

          {!closed && call.actions.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {call.actions.map((a, i) => (
                <a
                  key={a.url}
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className={i === 0 ? primaryBtn : secondaryBtn}
                >
                  {a.label}
                </a>
              ))}
            </div>
          )}
          {closed && (
            <p className="mt-6 text-sm text-parchment/70">
              Submissions for this call are closed. See{" "}
              <Link href="/calls-for-entry" className="underline underline-offset-2 hover:text-parchment">
                all calls for entry
              </Link>{" "}
              for current opportunities.
            </p>
          )}

          <div className="my-12 h-px w-full bg-gradient-to-r from-navy/30 via-parchment/10 to-transparent" />

          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <div className="space-y-12">
              {call.intro && (
                <section>
                  <h2 className="mb-3 text-[0.75rem] uppercase tracking-[0.22em] text-navy">Prospectus</h2>
                  <Paragraphs text={call.intro} className="max-w-2xl text-base leading-relaxed text-parchment/75" />
                </section>
              )}
              {call.sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="mb-3 text-[0.75rem] uppercase tracking-[0.22em] text-navy">{s.heading}</h2>
                  {s.body && (
                    <Paragraphs text={s.body} className="max-w-2xl text-base leading-relaxed text-parchment/75" />
                  )}
                  {s.bullets.length > 0 && (
                    <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-base leading-relaxed text-parchment/75 marker:text-navy">
                      {s.bullets.map((b) => (
                        <li key={b}>
                          <Bullet text={b} />
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <aside className="space-y-8 self-start lg:sticky lg:top-28">
              {call.keyDates.length > 0 && (
                <div className="border border-parchment/15 bg-parchment/[0.04] p-6">
                  <h2 className="mb-4 text-[0.75rem] uppercase tracking-[0.22em] text-navy">Important Dates</h2>
                  <dl className="space-y-3 text-sm">
                    {call.keyDates.map((d) => (
                      <div key={d.label}>
                        <dt className="text-parchment/60">{d.label}</dt>
                        <dd className="font-semibold text-parchment">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
              {call.awards.length > 0 && (
                <div className="border border-parchment/15 bg-parchment/[0.04] p-6">
                  <h2 className="mb-4 text-[0.75rem] uppercase tracking-[0.22em] text-navy">Awards</h2>
                  <ul className="space-y-3 text-sm">
                    {call.awards.map((a) => (
                      <li key={a.name} className="flex items-baseline justify-between gap-4">
                        <span className="text-parchment/80">{a.name}</span>
                        {a.amount && <span className="font-semibold text-parchment">{a.amount}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {(call.contactName || call.contactEmail) && (
                <div className="border border-parchment/15 bg-parchment/[0.04] p-6">
                  <h2 className="mb-4 text-[0.75rem] uppercase tracking-[0.22em] text-navy">Questions?</h2>
                  {call.contactName && <p className="text-sm font-semibold text-parchment">{call.contactName}</p>}
                  {call.contactEmail && (
                    <a
                      href={`mailto:${call.contactEmail}`}
                      className="mt-1 inline-flex items-center gap-2 text-sm text-parchment/75 underline underline-offset-2 hover:text-parchment"
                    >
                      <Mail size={13} /> {call.contactEmail}
                    </a>
                  )}
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
