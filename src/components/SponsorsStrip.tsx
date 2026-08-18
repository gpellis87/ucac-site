"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";

const govRow = [
  { name: "Union County",                 file: "union-county.png", href: "https://www.unioncountync.gov/", imgClass: "mix-blend-multiply" },
  { name: "Union County Public Schools",  file: "ucps-logo.png",    href: "https://www.ucps.k12.nc.us/",     imgClass: "" },
  { name: "City of Monroe",               file: "city-of-monroe.jpg", href: "https://www.monroenc.org/",     imgClass: "mix-blend-multiply" },
];

const businessRow = [
  { name: "Union Power Cooperative", file: "union-power.png",      href: "https://union-power.com/",         imgClass: "mix-blend-multiply" },
  { name: "Duke Energy",             file: "duke-energy.png",      href: "https://www.duke-energy.com/home", imgClass: "mix-blend-multiply" },
  { name: "Atrium Health",           file: "atrium-health.png",    href: "https://atriumhealth.org/",        imgClass: "mix-blend-multiply" },
  { name: "Huntington Bank",         file: "huntington-bank.png",  href: "https://www.huntington.com/",      imgClass: "mix-blend-multiply" },
  { name: "Hinson Electric",         file: "hinson-electric.webp", href: "https://hinsonelectricinc.com/",   imgClass: "contrast-[1.6] brightness-[0.65]" },
];

const localRow = [
  { name: "Helms Heating & Air",  file: "helms.jpg",     href: "https://www.helmsheating.com/",   imgClass: "mix-blend-multiply" },
  { name: "Lawrence Associates",  file: "lawrence.png",  href: "http://lawrencesurveying.com/",   imgClass: "invert" },
  { name: "Wingate University",   file: "wingate.png",   href: "https://www.wingate.edu/",        imgClass: "mix-blend-multiply" },
];

function LogoRow({
  logos,
  tileClass,
  imgWidth,
  imgHeight,
}: {
  logos: { name: string; file: string; href: string; imgClass: string }[];
  tileClass: string;
  imgWidth: number;
  imgHeight: number;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
      {logos.map(({ name, file, href, imgClass }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          title={name}
          className={`flex items-center justify-center transition duration-200 hover:opacity-70 ${tileClass}`}
        >
          <Image
            src={`/sponsors/${file}`}
            alt={name}
            width={imgWidth}
            height={imgHeight}
            className={`h-full w-full object-contain ${imgClass}`}
            unoptimized={file.endsWith(".webp")}
          />
        </a>
      ))}
    </div>
  );
}

export default function SponsorsStrip() {
  return (
    <SectionReveal className="bg-white section-pad py-14">
      <div className="mx-auto max-w-[1500px] space-y-8">
        <p className="text-center text-[0.75rem] uppercase tracking-[0.22em] text-parchment/60">
          Supported By
        </p>
        <a
          href="https://www.ncarts.org/"
          target="_blank"
          rel="noreferrer"
          title="North Carolina Arts Council"
          className="mx-auto flex h-[92px] w-[220px] items-center justify-center transition duration-200 hover:opacity-75"
        >
          <Image
            src="/sponsors/nc-arts-council.png"
            alt="North Carolina Arts Council"
            width={280}
            height={112}
            className="h-full w-full object-contain"
          />
        </a>
        <LogoRow logos={govRow} tileClass="h-20 w-44" imgWidth={220} imgHeight={80} />
        <LogoRow logos={businessRow} tileClass="h-14 w-32" imgWidth={160} imgHeight={64} />
        <LogoRow logos={localRow} tileClass="h-14 w-32" imgWidth={160} imgHeight={64} />
      </div>
    </SectionReveal>
  );
}
