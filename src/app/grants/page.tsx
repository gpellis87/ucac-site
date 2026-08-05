import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileText, Heart } from "lucide-react";
import { getActiveGrants } from "@/data/grants";
import type { Grant } from "@/data/grants";
import { sanityImg } from "@/sanity/image";

export const metadata: Metadata = {
  title: "Grants | Union County Community Arts Council",
  description:
    "Grants from the Union County Community Arts Council, supporting arts education and programs across Union County.",
};

function GrantEntry({ grant }: { grant: Grant }) {
  return (
    <section id={grant.slug} className="scroll-mt-28">
      <div className="relative overflow-hidden border border-terracotta/35 bg-parchment/[0.04] p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,84,42,0.1),transparent_60%),linear-gradient(180deg,rgba(245,240,235,0.035),transparent)]" />
        <div className="relative">
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-terracotta">{grant.eyebrow}</p>
          <h2 className="editorial-title mt-3 text-4xl leading-tight md:text-5xl">{grant.title}</h2>

          {grant.imageUrl && (
            <div className="mt-6 max-w-2xl overflow-hidden border border-parchment/15">
              <Image
                src={sanityImg(grant.imageUrl, { w: 1200 })}
                alt={grant.title}
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
                unoptimized
              />
            </div>
          )}

          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-parchment/72">
            {grant.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {grant.applyUrl && (
              <a
                href={grant.applyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-terracotta/50 px-7 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-parchment transition hover:border-terracotta hover:bg-terracotta/10"
              >
                <FileText size={13} /> Apply for This Grant
              </a>
            )}
            {grant.zeffyUrl && (
              <a
                href={grant.zeffyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-terracotta px-7 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-white transition hover:bg-terracotta/85"
              >
                <Heart size={13} /> Give to This Grant
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GrantsPage() {
  const grants = getActiveGrants();

  return (
    <div className="pb-24">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(192,84,42,0.18),transparent_55%)]" />
        <div className="section-pad relative py-16">
          <div className="mx-auto max-w-[1500px]">
            <p className="text-[0.75rem] uppercase tracking-[0.22em] text-terracotta">Grants Program</p>
            <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
              Grants
            </h1>
            <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed">
              Grants invest directly in arts education and programming across Union County —
              including named grants that honor the people who have shaped the Arts Council.
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Grants list */}
      <div className="section-pad py-12">
        <div className="mx-auto max-w-[1500px]">
          {grants.length === 0 ? (
            <p className="text-parchment/60 text-sm">No grants are open at this time. Check back soon.</p>
          ) : (
            <div className="space-y-6">
              {grants.map((grant) => (
                <GrantEntry key={grant.slug} grant={grant} />
              ))}
            </div>
          )}

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-parchment/55">
            Looking to give a general, tax-deductible gift to the Arts Council instead? Visit our{" "}
            <Link href="/support#donate" className="text-terracotta hover:underline">
              Support page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
