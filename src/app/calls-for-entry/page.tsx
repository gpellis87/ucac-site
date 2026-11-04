import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCallsForEntry, isCallClosed, formatCallDate } from "@/sanity/queries";
import type { CallForEntry } from "@/sanity/queries";
import { sanityImg } from "@/sanity/image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Calls for Entry",
  description:
    "Open calls for entry from the Union County Community Arts Council — juried exhibitions and opportunities for artists in the Southeast region of North Carolina.",
};

export default async function CallsForEntryPage() {
  const calls = await getCallsForEntry();
  const open = calls.filter((c) => !isCallClosed(c.deadline));
  const closed = calls.filter((c) => isCallClosed(c.deadline)).reverse();

  return (
    <div className="pb-24">
      <div className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">For Artists · UCCAC Gallery</p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            Calls for Entry
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-parchment/70">
            Opportunities to show your work at the UCCAC Gallery. Read the prospectus, check the dates, and submit your entry.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-navy/60 via-navy/20 to-transparent" />
        </div>
      </div>

      <div className="section-pad">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="sr-only">Open Calls for Entry</h2>
          {open.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {open.map((call) => (
                <CallCard key={call.slug} call={call} />
              ))}
            </div>
          ) : (
            <p className="py-12 text-parchment/60">
              There are no open calls for entry right now. Check back soon, or{" "}
              <Link href="/contact" className="underline underline-offset-2 hover:text-parchment">
                contact us
              </Link>{" "}
              with questions.
            </p>
          )}

          {closed.length > 0 && (
            <div className="mt-20">
              <div className="mb-8 h-px w-full bg-gradient-to-r from-parchment/20 via-parchment/10 to-transparent" />
              <h2 className="text-[0.75rem] uppercase tracking-[0.22em] text-parchment/60">Closed Calls</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {closed.map((call) => (
                  <CallCard key={call.slug} call={call} closed />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CallCard({ call, closed }: { call: CallForEntry; closed?: boolean }) {
  return (
    <Link
      href={`/calls-for-entry/${call.slug}`}
      className={`group flex flex-col overflow-hidden border border-parchment/15 bg-parchment/[0.04] transition hover:border-parchment/35 ${closed ? "opacity-70" : ""}`}
    >
      {call.headerImage && (
        <div className="relative aspect-[8/3] w-full overflow-hidden">
          <Image
            src={sanityImg(call.headerImage, { w: 1200 })}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.75rem] uppercase tracking-[0.2em] text-navy">
          {closed ? "Closed" : "Call for Entry"}
        </p>
        <h3 className="display mt-2 text-2xl leading-tight text-parchment">{call.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-parchment/65">{call.summary}</p>
        <p className="mt-4 text-[0.75rem] uppercase tracking-[0.16em] text-parchment/60">
          {closed ? "Deadline was" : "Deadline"}: {formatCallDate(call.deadline)}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.18em] text-parchment/80 transition group-hover:text-parchment">
          View prospectus <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
