import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Check, ExternalLink, HandHeart, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Support | Union County Community Arts Council",
  description:
    "Support the Union County Community Arts Council through donations, membership, and volunteer service.",
};

const GENERAL_DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/donate-to-the-union-county-community-arts-council";

const MEMBERSHIP_URL =
  "https://www.zeffy.com/en-US/ticketing/union-county-community-arts-council-memberships";

const VOLUNTEER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSei5VfePK-_Exik5C2eDHkVPglMEikav8JpRU6aRy4cxcoReg/viewform?pli=1";

const benefits = [
  "Special early bird and member pricing on special events",
  "10% off artwork in our exhibition spaces and hallways",
  "10% off pricing on adult and youth classes and workshops",
  "10% off all space rentals - gallery or learning studio",
  "Rent wall space in the People's Studio to exhibit your work",
  "Monthly Artist Coffee Circle - create, chat, and share ideas",
  "Free annual members showcase artist call (no entry fee)",
  "Reduced entry fees for other artist calls",
  "Reduced commission on all exhibited work",
  "One-on-one consulting with UCCAC staff (by appointment)",
  "Exclusive monthly artist member e-news with regional and nationwide opportunities",
  "Listed in the artist directory on the UCCAC website",
  "Submit work to be promoted through UCCAC's monthly general e-news",
];

const volunteerAreas = [
  "Events",
  "Administrative Support",
  "Art Education Support",
  "Creative Services (Photography, Graphic Design, etc.)",
  "Fundraising & Donor Relations",
  "Grant Research",
  "Social Media Support",
  "Other opportunities",
];

export default function SupportPage() {
  return (
    <div className="pb-24">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(12,44,92,0.16),transparent_55%),linear-gradient(180deg,rgba(245,240,235,0.05),transparent_60%)]" />
        <div className="section-pad relative py-16 md:py-20">
          <div className="mx-auto max-w-[1500px]">
            <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">Support UCCAC</p>
            <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
              Help sustain
              <br />
              the arts.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-parchment/70 md:text-lg">
              There are many meaningful ways to support the Union County Community Arts Council. Give,
              become a member, or volunteer your time to help exhibitions, arts education, and
              community programming thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#donate" className="accent-btn">
                Explore Ways to Give
              </a>
              <a href="#volunteer" className="ghost-btn">
                Volunteer With Us
              </a>
            </div>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-navy/60 via-navy/20 to-transparent" />
          </div>
        </div>
      </div>

      <div className="section-pad py-12">
        <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-4">
          <a href="#donate" className="group border border-parchment/20 bg-parchment/[0.035] p-8 transition hover:border-navy/40 hover:bg-parchment/[0.055]">
            <p className="text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">Give</p>
            <div className="mt-4 flex items-center gap-3">
              <Heart size={18} className="text-navy" />
              <h2 className="display text-3xl text-parchment">Donate</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-parchment/65">
              Make a general, tax-deductible gift to support the Arts Council directly.
            </p>
          </a>
          <Link href="/grants" className="group border border-parchment/20 bg-parchment/[0.035] p-8 transition hover:border-navy/40 hover:bg-parchment/[0.055]">
            <p className="text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">Honor</p>
            <div className="mt-4 flex items-center gap-3">
              <Award size={18} className="text-navy" />
              <h2 className="display text-3xl text-parchment">Grants</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-parchment/65">
              Give to one of our grants, like the Barbara Faulk Educators Grant.
            </p>
          </Link>
          <a href="#membership" className="group border border-parchment/20 bg-parchment/[0.035] p-8 transition hover:border-navy/40 hover:bg-parchment/[0.055]">
            <p className="text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">Join</p>
            <div className="mt-4 flex items-center gap-3">
              <Users size={18} className="text-navy" />
              <h2 className="display text-3xl text-parchment">Membership</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-parchment/65">
              Become a founding member and enjoy benefits while helping shape UCCAC&apos;s next chapter.
            </p>
          </a>
          <a href="#volunteer" className="group border border-parchment/20 bg-parchment/[0.035] p-8 transition hover:border-navy/40 hover:bg-parchment/[0.055]">
            <p className="text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">Serve</p>
            <div className="mt-4 flex items-center gap-3">
              <HandHeart size={18} className="text-navy" />
              <h2 className="display text-3xl text-parchment">Volunteer</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-parchment/65">
              Share your time and talents in events, education, fundraising, creative services, and more.
            </p>
          </a>
        </div>
      </div>

      <section id="donate" className="section-pad scroll-mt-28 py-12">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.75rem] uppercase tracking-[0.2em] text-navy">Donate</p>
          <h2 className="display mt-2 text-4xl text-parchment md:text-5xl">Ways to Give</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-parchment/65 md:text-base">
            Every gift helps expand cultural access across Union County. Choose the giving path that
            best matches what you want to support.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col border border-parchment/20 bg-parchment/[0.035] p-8 md:p-10">
              <p className="text-[0.75rem] uppercase tracking-[0.22em] text-parchment/60">General Support</p>
              <h3 className="display mt-3 text-3xl text-parchment md:min-h-[4.5rem]">
                Support the Arts Council
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-parchment/65">
                Your tax-deductible gift directly funds exhibitions, youth programs, community events,
                and our new home at 300 North Hayne Street. Processed through Zeffy so every dollar
                goes directly to the Arts Council.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href={GENERAL_DONATE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-navy px-7 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-white transition hover:bg-navy/85"
                >
                  <Heart size={13} /> Donate Now
                </a>
                <div className="flex items-center gap-3">
                  {/* Decorative — meant to be scanned with a phone camera, not clicked;
                      the "Donate Now" button right next to it already covers keyboard/AT users. */}
                  <Image src="/qr-donate.png" alt="" width={64} height={64} />
                  <p className="text-[0.75rem] uppercase leading-snug tracking-[0.14em] text-parchment/60">
                    Or scan
                    <br />
                    to donate
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden border border-navy/35 bg-parchment/[0.04] p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(12,44,92,0.1),transparent_60%),linear-gradient(180deg,rgba(245,240,235,0.035),transparent)]" />
              <div className="relative flex flex-1 flex-col">
                <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">Grants</p>
                <h3 className="display mt-3 text-3xl text-parchment md:min-h-[4.5rem]">
                  Give to a<br />
                  Grant
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-parchment/65">
                  Support one of our grants, like the Barbara Faulk Educators Grant, which funds
                  classroom teachers and arts programs serving students across Union County.
                </p>
                <div className="mt-8">
                  <Link
                    href="/grants"
                    className="inline-flex items-center gap-2 bg-navy px-7 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-white transition hover:bg-navy/85"
                  >
                    <Award size={13} /> View Grants
                  </Link>
                  <p className="mt-3 max-w-sm text-[0.75rem] leading-relaxed text-parchment/60">
                    Explore our grants and give directly on the Grants page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="section-pad scroll-mt-28 py-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 h-px bg-gradient-to-r from-transparent via-parchment/15 to-transparent" />
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">Membership</p>
          <h2 className="display mt-2 text-4xl text-parchment md:text-5xl">Become a Member</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-parchment/70">
            Membership is a simple and meaningful way to support the mission while enjoying valuable
            benefits as UCCAC grows into its next chapter.
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px]">
            <div>
              <p className="mb-6 text-[0.75rem] uppercase tracking-[0.22em] text-parchment/60">Member Benefits</p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-navy/40 bg-navy/10">
                      <Check size={11} className="text-navy" />
                    </span>
                    <span className="text-sm leading-relaxed text-parchment/80">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-parchment/10 pt-8">
                <p className="max-w-xl text-sm leading-relaxed text-parchment/55">
                  Through inclusive programs for all ages and abilities, community outreach, studio
                  opportunities, and engaging exhibitions, UCCAC is dedicated to making arts and culture
                  more accessible across Union County.
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-parchment/55">
                  Come grow with us as we move into our new home at 300 North Hayne Street.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative overflow-hidden border border-navy/40 bg-parchment/[0.045] p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(12,44,92,0.18),transparent_60%),linear-gradient(180deg,rgba(245,240,235,0.03),transparent)]" />
                <div className="relative z-10">
                  <p className="text-[0.75rem] uppercase tracking-[0.2em] text-navy">Limited Time Offer</p>
                  <p className="mt-3 text-[0.75rem] uppercase tracking-[0.18em] text-parchment/60">Founding Member</p>
                  <div className="mt-2 editorial-title text-6xl text-parchment">$75</div>
                  <p className="mt-1 text-xs text-parchment/60">per year</p>
                  <div className="mt-5 h-px w-full bg-parchment/10" />
                  <p className="mt-4 text-sm leading-relaxed text-parchment/65">
                    Be among the first to join as we move into our new space. Founding members help shape
                    what UCCAC becomes next.
                  </p>
                  <a
                    href={MEMBERSHIP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block w-full bg-navy px-6 py-3 text-center text-[0.75rem] uppercase tracking-[0.18em] text-white transition hover:bg-navy/85"
                  >
                    Become a Member
                  </a>
                </div>
              </div>

              <div className="border border-parchment/15 bg-parchment/[0.04] p-7 text-center">
                <p className="mb-4 text-[0.75rem] uppercase tracking-[0.22em] text-parchment/60">Scan to Join</p>
                {/* Decorative — meant to be scanned with a phone camera, not clicked;
                    the "Become a Member" button above already covers keyboard/AT users. */}
                <Image src="/qr-membership.png" alt="" width={160} height={160} className="mx-auto" />
                <p className="mt-3 text-xs text-parchment/60">Scan with your phone to sign up</p>
              </div>

              <div className="border border-parchment/15 bg-parchment/[0.04] p-7">
                <p className="mb-3 text-[0.75rem] uppercase tracking-[0.22em] text-parchment/60">Coming to Our New Space</p>
                <ul className="space-y-2.5 text-sm text-parchment/65">
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 shrink-0 bg-navy/50" />
                    Artist studio spaces
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 shrink-0 bg-navy/50" />
                    Creative teaching studios
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 shrink-0 bg-navy/50" />
                    Exhibition gallery
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 shrink-0 bg-navy/50" />
                    The Shop
                  </li>
                </ul>
                <Link
                  href="/new-home"
                  className="mt-5 inline-block text-[0.75rem] uppercase tracking-[0.14em] text-navy hover:underline"
                >
                  Learn more about our new home -&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="volunteer" className="section-pad scroll-mt-28 py-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 h-px bg-gradient-to-r from-transparent via-parchment/15 to-transparent" />
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">Volunteer</p>
          <h2 className="display mt-2 text-4xl text-parchment md:text-5xl">Share Your Time and Talents</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_420px]">
            <div className="border border-parchment/15 bg-parchment/[0.04] p-8 md:p-10">
              <p className="max-w-2xl text-base leading-relaxed text-parchment/70">
                Volunteers help make UCCAC programs stronger and more welcoming. Whether you love
                events, education, behind-the-scenes support, or creative work, we would love to hear
                where you can help.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-parchment/60">
                Looking for a specific upcoming shift instead of a general interest form?{" "}
                <Link href="/volunteer" className="text-navy underline underline-offset-4 transition hover:text-parchment">
                  See our current volunteer opportunities
                </Link>
                .
              </p>
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {volunteerAreas.map((area) => (
                  <div key={area} className="border border-parchment/10 bg-parchment/[0.03] px-4 py-3 text-sm text-parchment/80">
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden border border-navy/35 bg-parchment/[0.045] p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(12,44,92,0.12),transparent_60%),linear-gradient(180deg,rgba(245,240,235,0.03),transparent)]" />
              <div className="relative z-10">
                <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">Interest Form</p>
                <h3 className="display mt-3 text-3xl text-parchment">Volunteer with UCCAC</h3>
                <p className="mt-4 text-sm leading-relaxed text-parchment/65">
                  Complete the volunteer interest form and let us know which opportunities appeal to you.
                </p>
                <a
                  href={VOLUNTEER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-navy px-7 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-white transition hover:bg-navy/85"
                >
                  Open Volunteer Form <ExternalLink size={14} />
                </a>
                <p className="mt-4 text-xs leading-relaxed text-parchment/60">
                  The form opens in Google Forms and covers events, administrative support, education,
                  fundraising, social media, creative services, grant research, and other opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
