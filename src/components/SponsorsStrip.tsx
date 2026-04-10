"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";

const sponsors = [
  { name: "Atrium Health",           file: "atrium-health.png",    dark: false },
  { name: "Duke Energy",             file: "duke-energy.png",      dark: false },
  { name: "Huntington Bank",         file: "huntington-bank.png",  dark: false },
  { name: "Union Power Cooperative", file: "union-power.jpg",      dark: false },
  { name: "City of Monroe",          file: "city-of-monroe.jpg",   dark: false },
  { name: "Union County",            file: "union-county.png",     dark: false },
  { name: "Wingate University",      file: "wingate.png",          dark: false },
  { name: "Lawrence",                file: "lawrence.png",         dark: true  },
  { name: "Hinson Electric",         file: "hinson-electric.webp", dark: true  },
];

export default function SponsorsStrip() {
  return (
    <SectionReveal className="section-pad bg-[#111110] py-14">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-6 text-center text-[0.68rem] uppercase tracking-[0.22em] text-parchment/35">
          Supported By
        </p>
        {/* Single unified white panel */}
        <div className="rounded-xl bg-white px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {sponsors.map(({ name, file, dark }) => (
              <div
                key={name}
                className={`flex h-16 w-36 items-center justify-center rounded-lg p-3 ${
                  dark ? "bg-[#2a2a2a]" : ""
                }`}
              >
                <Image
                  src={`/sponsors/${file}`}
                  alt={name}
                  width={160}
                  height={64}
                  className="h-full w-full object-contain"
                  unoptimized={file.endsWith(".webp")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
