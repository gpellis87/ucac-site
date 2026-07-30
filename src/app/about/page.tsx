import type { Metadata } from "next";
import Image from "next/image";
import { Palette, School, Landmark, HandHeart, Sparkles, Users2 } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { boardMembers, exOfficioBoardMembers } from "@/data/boardMembers";
import { sponsors } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story, mission, funding model, leadership, and partners behind Union County Community Arts Council.",
};

const programs = [
  { label: "Arts Education", icon: School },
  { label: "Community Exhibitions", icon: Palette },
  { label: "Public Art Projects", icon: Landmark },
  { label: "Artist Grants", icon: Sparkles },
  { label: "Cultural Events", icon: Users2 },
  { label: "Youth Programs", icon: HandHeart },
];

const milestones = [
  "1980 - Founded by John Ashcraft, Jim Barnett, Koy Dawkins, and Ben Helms.",
  "1981 - First annual Blooming Arts Festival launched in downtown Monroe.",
  "1980s - Early support for community-led orchestra development initiatives.",
  "2000s - Arts in Education programs scaled across county schools.",
  "2025 - 42,000+ students served through Arts in Education programs.",
  "Today - UCCAC continues to cultivate and celebrate arts countywide.",
];

export default function AboutPage() {
  return (
    <div className="pb-24">
      <SectionReveal className="section-pad relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(192,84,42,0.28),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(103,115,136,0.3),transparent_45%)]" />
        <div className="relative mx-auto max-w-[1500px]">
          <h1 className="editorial-title max-w-4xl text-5xl md:text-8xl">
            Rooted in community. Driven by art.
          </h1>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px] space-y-16">
          <div className="grid gap-7 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h2 className="display text-4xl md:text-5xl">Our Story</h2>
              <p className="text-parchment/80">
                Union County Community Arts Council was founded in 1980 by four area business leaders - John Ashcraft, Jim Barnett, Koy Dawkins, and Ben Helms - to enhance quality of life through arts and culture.
              </p>
              <p className="text-parchment/80">
                The council&apos;s roots include downtown Monroe&apos;s Blooming Arts Festival and continued support for major local cultural initiatives. Today, UCCAC serves the people of Union County by leading, cultivating, and promoting the arts as an essential component of community life.
              </p>
            </div>
            <div className="relative min-h-[360px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1500&q=80"
                alt="Community art workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-7 lg:grid-cols-2 lg:items-center">
            <div className="relative min-h-[360px] overflow-hidden lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1500&q=80"
                alt="Outdoor public art audience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 lg:order-2">
              <p className="text-parchment/80">
                Our vision is a Union County that embraces the arts as a fundamental part of an enriched and thriving community. Programs are designed to increase participation, build appreciation, and remove barriers to access.
              </p>
              <p className="text-parchment/80">
                Through partnerships with schools, nonprofits, local government, artists, and volunteers, we provide financial assistance and practical support to organizations and individuals creating arts impact across the county.
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="display text-4xl md:text-5xl">What We Do</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {programs.map(({ label, icon: Icon }) => (
              <div key={label} className="border border-parchment/20 p-5">
                <Icon size={20} className="text-terracotta" />
                <h3 className="mt-3 display text-2xl">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-16">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="display text-4xl md:text-5xl">How We&apos;re Funded</h2>
            <p className="mt-4 text-parchment/80">
              UCCAC operates through a diversified nonprofit model: individual donations, grants, sponsorships, memberships, and event revenue.
            </p>
            <ul className="mt-5 space-y-2 text-sm uppercase tracking-[0.12em] text-parchment/75">
              <li>38% Individual Donations</li>
              <li>24% Foundation & Government Grants</li>
              <li>18% Corporate Sponsors</li>
              <li>12% Membership Dues</li>
              <li>8% Program & Event Revenue</li>
            </ul>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-parchment/78">
              <li>Increase participation, awareness, and appreciation of the arts.</li>
              <li>Serve as a cultural planner and resource agency for Union County.</li>
              <li>Develop programming and services responsive to community needs.</li>
              <li>Provide financial assistance to arts organizations and individual artists.</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 rounded-full border border-parchment/20 bg-[conic-gradient(#c0542a_0_38%,#c9a84c_38%_62%,#677388_62%_80%,#2a3240_80%_92%,#f5f0eb_92%_100%)]">
              <div className="absolute inset-8 rounded-full bg-[color:var(--bg)]" />
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="display text-4xl md:text-5xl">Board of Directors</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {boardMembers.map((member) => (
              <div key={member.id} className="border border-parchment/20 bg-parchment/[0.04] p-4">
                <div className="relative h-56 overflow-hidden">
                  <Image src={member.imageUrl} alt={member.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
                </div>
                <h3 className="mt-3 display text-2xl">{member.name}</h3>
                <p className="text-sm text-parchment/70">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-6">
        <div className="mx-auto max-w-[1500px]">
          <h3 className="display text-3xl">Ex-officio Board Members</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {exOfficioBoardMembers.map((member) => (
              <div key={member.id} className="border border-parchment/20 bg-parchment/[0.04] p-4">
                <h4 className="display text-2xl">{member.name}</h4>
                <p className="mt-1 text-sm text-parchment/75">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="display text-4xl md:text-5xl">Partners & Sponsors</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex items-center justify-between border border-parchment/20 px-4 py-5">
                <span className="display text-2xl">{sponsor.name}</span>
                <span className="text-xs uppercase tracking-[0.14em] text-terracotta">{sponsor.tier}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="display text-4xl md:text-5xl">Milestones</h2>
          <div className="mt-7 space-y-4 border-l border-terracotta/60 pl-6">
            {milestones.map((item) => (
              <div key={item} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-terracotta" />
                <p className="text-parchment/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
