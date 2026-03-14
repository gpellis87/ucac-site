import type { Metadata } from "next";
import Image from "next/image";
import { Palette, School, Landmark, HandHeart, Sparkles, Users2 } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { boardMembers } from "@/data/boardMembers";
import { sponsors } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story, mission, funding model, leadership, and partners behind Union County Arts Council.",
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
  "1996 - Founded by local artists and educators.",
  "2001 - First downtown mural collaboration launched.",
  "2008 - Youth Arts Program expanded to county schools.",
  "2014 - Artist micro-grant initiative established.",
  "2020 - Community arts response fund created.",
  "2025 - 3,000+ annual participants across UCAC programs.",
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
                Union County Arts Council began as a volunteer-led effort to protect creative spaces and champion local artists. What started as small pop-up exhibitions evolved into a trusted nonprofit cultural institution with programming that reaches all ages.
              </p>
              <p className="text-parchment/80">
                Over time, our mission expanded from showcasing art to creating access. Today, UCAC supports youth workshops, artist grants, community exhibitions, and cross-sector projects that keep arts visible in public life.
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
                We design each program around inclusion, collaboration, and local voice. UCAC&apos;s role is not only to present art, but to build long-term civic infrastructure where creativity can thrive.
              </p>
              <p className="text-parchment/80">
                Through partnerships with schools, businesses, artists, and volunteers, we continue to grow a cultural ecosystem that reflects Union County&apos;s identity and future.
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
                <p className="mt-3 display text-2xl">{label}</p>
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
              UCAC operates through a diversified nonprofit model: individual donations, grants, sponsorships, memberships, and event revenue.
            </p>
            <ul className="mt-5 space-y-2 text-sm uppercase tracking-[0.12em] text-parchment/75">
              <li>38% Individual Donations</li>
              <li>24% Foundation & Government Grants</li>
              <li>18% Corporate Sponsors</li>
              <li>12% Membership Dues</li>
              <li>8% Program & Event Revenue</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 rounded-full border border-parchment/20 bg-[conic-gradient(#c0542a_0_38%,#c9a84c_38%_62%,#677388_62%_80%,#2a3240_80%_92%,#f5f0eb_92%_100%)]">
              <div className="absolute inset-8 rounded-full bg-charcoal" />
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="display text-4xl md:text-5xl">Board of Directors</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {boardMembers.map((member) => (
              <div key={member.id} className="border border-parchment/20 bg-black/20 p-4">
                <div className="relative h-56 overflow-hidden">
                  <Image src={member.imageUrl} alt={member.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
                </div>
                <p className="mt-3 display text-2xl">{member.name}</p>
                <p className="text-sm text-parchment/70">{member.title}</p>
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
