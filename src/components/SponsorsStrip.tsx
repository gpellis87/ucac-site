"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";

const sponsors = [
  {
    name: "Atrium Health",
    file: "atrium-health.png",
    dark: false,
    href: "https://atriumhealth.org/",
  },
  {
    name: "Duke Energy",
    file: "duke-energy.png",
    dark: false,
    href: "https://www.duke-energy.com/home",
  },
  {
    name: "Huntington Bank",
    file: "huntington-bank.png",
    dark: false,
    href: "https://www.huntington.com/",
  },
  {
    name: "Union Power Cooperative",
    file: "union-power.jpg",
    dark: false,
    href: "https://union-power.com/",
  },
  {
    name: "City of Monroe",
    file: "city-of-monroe.jpg",
    dark: false,
    href: "https://www.monroenc.org/",
  },
  {
    name: "Union County",
    file: "union-county.png",
    dark: false,
    href: "https://www.unioncountync.gov/",
  },
  {
    name: "Wingate University",
    file: "wingate.png",
    dark: false,
    href: "https://www.wingate.edu/",
  },
  {
    name: "Lawrence Associates",
    file: "lawrence.png",
    dark: true,
    href: "http://lawrencesurveying.com/",
  },
  {
    name: "Hinson Electric",
    file: "hinson-electric.webp",
    dark: true,
    href: "https://hinsonelectricinc.com/",
  },
];

export default function SponsorsStrip() {
  return (
    <SectionReveal className="section-pad bg-[#111110] py-14">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-6 text-center text-[0.68rem] uppercase tracking-[0.22em] text-parchment/35">
          Supported By
        </p>
        <div className="rounded-xl bg-white px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {sponsors.map(({ name, file, dark, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={name}
                className={`flex h-16 w-36 items-center justify-center rounded-lg p-3 transition-opacity hover:opacity-75 ${
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
