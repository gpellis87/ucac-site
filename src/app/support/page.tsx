import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ExternalLink, HandHeart, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Support | Union County Community Arts Council",
  description:
    "Support the Union County Community Arts Council through donations, membership, and volunteer service.",
};

const GENERAL_DONATE_URL =
  "https://www.zeffy.com/en-US/donation-form/donate-to-the-union-county-community-arts-council";

const BARBARA_FAULK_URL =
  "https://www.zeffy.com/en-US/donation-form/barbara-faulk-educators-grant";

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
      <div className="section-pad border-b border-parchment/10 py-3">
        <div className="mx-auto max-w-[1500px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-parchment/50 transition hover:text-parchment"
          >
            <ArrowLeft size={13} />
            Home
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(192,84,42,0.18),transparent_55%)]" />
        <div className="section-pad relative py-16 md:py-20">
          <div className="mx-auto max-w-[1500px]">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Support UCCAC</p>
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
            <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
          </div>
        </div>
      </div>

      <div className="section-pad py-12">
        <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-3">
          <a href="#donate" className="group border border-parchment/15 bg-black/20 p-8 transition hover:border-terracotta/40">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-parchment/45">Give</p>
            <div className="mt-4 flex items-center gap-3">
              <Heart size={18} className="text-terracotta" />
              <h2 className="display text-3xl text-parchment">Donate</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-parchment/65">
              Support the Arts Council directly or give to the Barbara Faulk Educators Grant.
            </p>
          </a>
          <a href="#membership" className="group border border-parchment/15 bg-black/20 p-8 transition hover:border-terracotta/40">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-parchment/45">Join</p>
            <div className="mt-4 flex items-center gap-3">
              <Users size={18} className="text-terracotta" />
              <h2 className="display text-3xl text-parchment">Membership</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-parchment/65">
              Become a founding member and enjoy benefits while helping shape UCCAC&apos;s next chapter.
            </p>
          </a>
          <a href="#volunteer" className="group border border-parchment/15 bg-black/20 p-8 transition hover:border-terracotta/40">
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-parchment/45">Serve</p>
            <div className="mt-4 flex items-center gap-3">
              <HandHeart size={18} className="text-terracotta" />
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
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-terracotta">Donate</p>
          <h2 className="display mt-2 text-4xl text-parchment md:text-5xl">Ways to Give</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-parchment/65 md:text-base">
            Every gift helps expand cultural access across Union County. Choose the giving path that
            best matches what you want to support.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col border border-parchment/20 bg-black/20 p-8 md:p-10">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-parchment/45">General Support</p>
              <h3 className="display mt-3 text-3xl text-parchment">Support the Arts Council</h3>
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
                  className="inline-flex items-center gap-2 bg-terracotta px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-parchment transition hover:bg-terracotta/85"
                >
                  <Heart size={13} /> Donate Now
                </a>
                <div className="flex items-center gap-3">
                  <a href={GENERAL_DONATE_URL} target="_blank" rel="noreferrer" className="transition hover:opacity-75">
                    <Image src="/qr-donate.png" alt="Scan to donate to UCCAC" width={64} height={64} />
                  </a>
                  <p className="text-[0.62rem] uppercase leading-snug tracking-[0.14em] text-parchment/30">
                    Or scan
                    <br />
                    to donate
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden border border-terracotta/35 bg-black/20 p-8 md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,84,42,0.1),transparent_60%)]" />
              <div className="relative flex flex-1 flex-col">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-terracotta">Named Grant</p>
                <h3 className="display mt-3 text-3xl text-parchment">
                  Barbara Faulk
                  <br />
                  Educators Grant
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-parchment/65">
                  Honor Barbara Faulk&apos;s legacy and help support classroom teachers and arts programs
                  serving students across Union County.
                </p>
                <div className="mt-8">
                  <a
                    href={BARBARA_FAULK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-terracotta px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-parchment transition hover:bg-terracotta/85"
                  >
                    <Heart size={13} /> Give to This Grant
                  </a>
                  <p className="mt-3 text-[0.62rem] text-parchment/35">Barbara&apos;s story is included below.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-14 mt-14 h-px bg-gradient-to-r from-transparent via-parchment/15 to-transparent" />
          <div className="grid gap-0 lg:grid-cols-[3px_1fr]">
            <div className="hidden rounded-full bg-terracotta/50 lg:block" />
            <div className="lg:pl-12">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">A Celebration</p>
              <h3 className="editorial-title mt-3 text-4xl leading-tight md:text-5xl">Barbara Faulk</h3>
              <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-parchment/70">
                <p>
                  I would like to take a moment to celebrate Barbara Faulk. Barbara was with the Arts
                  Council for 35 years and served as Executive Director from 1991 until she retired in
                  2022. She was a force of nature, a champion of the arts, passionate about building
                  this community.
                </p>
                <p>
                  She was like the salt and butter on the baked potato - full of flavor, turning
                  something ordinary into something extraordinary. She understood that children are our
                  future. Barbara had a passion for arts in education, for supporting classroom teachers,
                  and for serving the underserved.
                </p>
                <p>
                  For her legacy to be remembered for generations to come, we are honoring Barbara Faulk
                  by creating the <strong className="text-parchment">Barbara Faulk Educators Grant</strong>.
                </p>
              </div>
              <a
                href={BARBARA_FAULK_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 border border-terracotta px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-terracotta transition hover:bg-terracotta hover:text-parchment"
              >
                <Heart size={13} /> Give to This Grant
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="section-pad scroll-mt-28 py-12">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Membership</p>
          <h2 className="display mt-2 text-4xl text-parchment md:text-5xl">Become a Member</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-parchment/70">
            Membership is a simple and meaningful way to support the mission while enjoying valuable
            benefits as UCCAC grows into its next chapter.
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_360px]">
            <div>
              <p className="mb-6 text-[0.68rem] uppercase tracking-[0.22em] text-parchment/50">Member Benefits</p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-terracotta/40 bg-terracotta/10">
                      <Check size={11} className="text-terracotta" />
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
              <div className="relative overflow-hidden border border-terracotta/40 bg-black/40 p-8">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,84,42,0.18),transparent_60%)]" />
                <div className="relative z-10">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-terracotta">Limited Time Offer</p>
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-parchment/50">Founding Member</p>
                  <p className="mt-2 editorial-title text-6xl text-parchment">$75</p>
                  <p className="mt-1 text-xs text-parchment/45">per year</p>
                  <div className="mt-5 h-px w-full bg-parchment/10" />
                  <p className="mt-4 text-sm leading-relaxed text-parchment/65">
                    Be among the first to join as we move into our new space. Founding members help shape
                    what UCCAC becomes next.
                  </p>
                  <a
                    href={MEMBERSHIP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block w-full bg-terracotta px-6 py-3 text-center text-[0.72rem] uppercase tracking-[0.18em] text-parchment transition hover:bg-terracotta/85"
                  >
                    Become a Member
                  </a>
                </div>
              </div>

              <div className="border border-parchment/15 bg-black/30 p-7 text-center">
                <p className="mb-4 text-[0.68rem] uppercase tracking-[0.22em] text-parchment/50">Scan to Join</p>
                <a href={MEMBERSHIP_URL} target="_blank" rel="noreferrer" className="inline-block transition hover:opacity-75">
                  <Image src="/qr-membership.png" alt="Scan to become a member" width={160} height={160} className="mx-auto" />
                </a>
                <p className="mt-3 text-xs text-parchment/35">Scan with your phone to sign up</p>
              </div>

              <div className="border border-parchment/15 bg-black/30 p-7">
                <p className="mb-3 text-[0.68rem] uppercase tracking-[0.22em] text-parchment/50">Coming to Our New Space</p>
                <ul className="space-y-2.5 text-sm text-parchment/65">
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 shrink-0 bg-terracotta/50" />
                    Artist studio spaces
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 shrink-0 bg-terracotta/50" />
                    Creative teaching studios
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 shrink-0 bg-terracotta/50" />
                    Exhibition gallery
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-px w-4 shrink-0 bg-terracotta/50" />
                    The Shop
                  </li>
                </ul>
                <Link
                  href="/new-home"
                  className="mt-5 inline-block text-[0.68rem] uppercase tracking-[0.14em] text-terracotta hover:underline"
                >
                  Learn more about our new home -&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="volunteer" className="section-pad scroll-mt-28 py-12">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Volunteer</p>
          <h2 className="display mt-2 text-4xl text-parchment md:text-5xl">Share Your Time and Talents</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_420px]">
            <div className="border border-parchment/15 bg-black/20 p-8 md:p-10">
              <p className="max-w-2xl text-base leading-relaxed text-parchment/70">
                Volunteers help make UCCAC programs stronger and more welcoming. Whether you love
                events, education, behind-the-scenes support, or creative work, we would love to hear
                where you can help.
              </p>
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {volunteerAreas.map((area) => (
                  <div key={area} className="border border-parchment/10 bg-black/20 px-4 py-3 text-sm text-parchment/80">
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden border border-terracotta/35 bg-black/30 p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,84,42,0.12),transparent_60%)]" />
              <div className="relative z-10">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-terracotta">Interest Form</p>
                <h3 className="display mt-3 text-3xl text-parchment">Volunteer with UCCAC</h3>
                <p className="mt-4 text-sm leading-relaxed text-parchment/65">
                  Complete the volunteer interest form and let us know which opportunities appeal to you.
                </p>
                <a
                  href={VOLUNTEER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 bg-terracotta px-7 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-parchment transition hover:bg-terracotta/85"
                >
                  Open Volunteer Form <ExternalLink size={14} />
                </a>
                <p className="mt-4 text-xs leading-relaxed text-parchment/40">
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
