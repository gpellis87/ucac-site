"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";

const sponsors = [
  { name: "Atrium Health",           file: "atrium-health.png"    },
  { name: "Duke Energy",             file: "duke-energy.png"      },
  { name: "Huntington Bank",         file: "huntington-bank.png"  },
  { name: "Union Power Cooperative", file: "union-power.jpg"      },
  { name: "City of Monroe",          file: "city-of-monroe.jpg"   },
  { name: "Union County",            file: "union-county.png"     },
  { name: "Wingate University",      file: "wingate.png"          },
  { name: "Lawrence",                file: "lawrence.png"         },
  { name: "Hinson Electric",         file: "hinson-electric.webp" },
];

export default function SponsorsStrip() {
  return (
    <SectionReveal className="section-pad bg-[#f5f0eb] py-14">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-8 text-center text-[0.68rem] uppercase tracking-[0.22em] text-charcoal/40">
          Supported By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {sponsors.map(({ name, file }) => (
            <div key={name} className="flex h-14 w-32 items-center justify-center">
              <Image
                src={`/sponsors/${file}`}
                alt={name}
                width={160}
                height={64}
                className="h-full w-full object-contain grayscale transition duration-300 hover:grayscale-0"
                unoptimized={file.endsWith(".webp")}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
