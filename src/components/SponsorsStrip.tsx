"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";

// Alphabetical order
const sponsors = [
  { name: "Atrium Health",           file: "atrium-health.png",    href: "https://atriumhealth.org/",         imgClass: "mix-blend-multiply" },
  { name: "City of Monroe",          file: "city-of-monroe.jpg",   href: "https://www.monroenc.org/",         imgClass: "mix-blend-multiply" },
  { name: "Duke Energy",             file: "duke-energy.png",      href: "https://www.duke-energy.com/home",  imgClass: "mix-blend-multiply" },
  { name: "Hinson Electric",         file: "hinson-electric.webp", href: "https://hinsonelectricinc.com/",    imgClass: "contrast-[1.6] brightness-[0.65]" },
  { name: "Huntington Bank",         file: "huntington-bank.png",  href: "https://www.huntington.com/",       imgClass: "mix-blend-multiply" },
  { name: "Lawrence Associates",     file: "lawrence.png",         href: "http://lawrencesurveying.com/",     imgClass: "invert" },
  { name: "Union County",            file: "union-county.png",     href: "https://www.unioncountync.gov/",    imgClass: "mix-blend-multiply" },
  { name: "Union Power Cooperative", file: "union-power.jpg",      href: "https://union-power.com/",          imgClass: "mix-blend-multiply" },
  { name: "Wingate University",      file: "wingate.png",          href: "https://www.wingate.edu/",          imgClass: "mix-blend-multiply" },
];

export default function SponsorsStrip() {
  return (
    <SectionReveal className="section-pad bg-[#0d0c0b] py-14">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-8 text-center text-[0.68rem] uppercase tracking-[0.22em] text-parchment/30">
          Supported By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {sponsors.map(({ name, file, href, imgClass }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={name}
              className="flex h-[88px] w-[168px] items-center justify-center rounded-xl bg-[#f8f6f3] p-5 shadow-md transition duration-200 hover:opacity-75"
            >
              <Image
                src={`/sponsors/${file}`}
                alt={name}
                width={160}
                height={64}
                className={`h-full w-full object-contain ${imgClass}`}
                unoptimized={file.endsWith(".webp")}
              />
            </a>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
