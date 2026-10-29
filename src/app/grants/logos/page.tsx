import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { grantLogos } from "@/data/grantLogos";

export const metadata: Metadata = {
  title: "Grant Recipient Logos",
  description:
    "Download the Union County Community Arts Council logos that grant recipients are required to use on advertising and literature.",
};

export default function GrantLogosPage() {
  return (
    <div className="pb-24">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(12,44,92,0.18),transparent_55%)]" />
        <div className="section-pad relative py-16">
          <div className="mx-auto max-w-[1500px]">
            <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">Grants Program</p>
            <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
              Grant Recipient Logos
            </h1>
            <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed">
              Grant recipients are expected to display these logos on all advertisements and
              literature related to their funded project.
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-navy/60 via-navy/20 to-transparent" />
          </div>
        </div>
      </div>

      <div className="section-pad py-12">
        <div className="mx-auto max-w-[1500px]">
          {grantLogos.length === 0 ? (
            <p className="text-sm text-parchment/60">Logo downloads are coming soon.</p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {grantLogos.map((logo) => (
                <li
                  key={logo.file}
                  className="flex flex-col border border-navy/35 bg-parchment/[0.04] p-6"
                >
                  <div className="flex aspect-[4/3] items-center justify-center bg-white p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/grant-logos/${logo.file}`}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold">{logo.name}</h2>
                  <p className="mt-1 text-sm text-parchment/70">{logo.description}</p>
                  <a
                    href={`/grant-logos/${logo.file}`}
                    download
                    className="mt-5 inline-flex items-center gap-2 self-start border border-navy/50 px-5 py-2.5 text-[0.75rem] uppercase tracking-[0.18em] text-parchment transition hover:border-navy hover:bg-navy/10"
                  >
                    <Download size={13} /> Download {logo.format}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-parchment/55">
            Need a different file format or have questions about logo placement? Email{" "}
            <a href="mailto:info@unionarts.org" className="text-navy hover:underline">
              info@unionarts.org
            </a>
            . <Link href="/grants" className="text-navy hover:underline">Back to Grants</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
