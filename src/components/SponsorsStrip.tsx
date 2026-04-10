"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";

const sponsors = [
  { name: "Atrium Health",        file: "atrium-health.png",    dark: true  },
  { name: "Duke Energy",          file: "duke-energy.png",      dark: false },
  { name: "Huntington Bank",      file: "huntington-bank.png",  dark: false },
  { name: "Union Power Cooperative", file: "union-power.jpg",   dark: false },
  { name: "City of Monroe",       file: "city-of-monroe.jpg",   dark: false },
  { name: "Union County",         file: "union-county.png",     dark: true  },
  { name: "Wingate University",   file: "wingate.png",          dark: false },
  { name: "Lawrence",             file: "lawrence.png",         dark: true  },
  { name: "Hinson Electric",      file: "hinson-electric.webp", dark: true  },
];

export default function SponsorsStrip() {
  return (
    <SectionReveal className="section-pad bg-[#111110] py-16">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-8 text-center text-[0.68rem] uppercase tracking-[0.22em] text-parchment/35">
          Supported By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {sponsors.map(({ name, file, dark }) => (
            <div
              key={name}
              className={`flex h-20 w-36 items-center justify-center rounded p-3 ${
                dark ? "bg-[#2a2a2a]" : "bg-white"
              }`}
            >
              <Image
                src={`/sponsors/${file}`}
                alt={name}
                width={160}
                height={80}
                className="h-full w-full object-contain"
                unoptimized={file.endsWith(".webp")}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
