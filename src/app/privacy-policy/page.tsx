import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Union County Community Arts Council website, including analytics, local preferences, third-party services, and external donation links.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "This website is primarily informational. We may receive basic technical information that browsers and hosting providers normally process, such as device, browser, approximate location, referral, and page activity data.",
      "If you contact Union County Community Arts Council directly by phone, email, social media, or through another linked service, the information you choose to provide is handled through that channel.",
    ],
  },
  {
    title: "How Information Is Used",
    body: [
      "Information is used to keep the website working, understand general site activity, respond to community inquiries, and help visitors find exhibitions, events, artists, membership information, and donation resources.",
    ],
  },
  {
    title: "Analytics",
    body: [
      "The website uses Umami analytics to understand broad visitor activity, such as which pages are viewed and how visitors move through the site. This helps maintain and improve the website without adding unnecessary tracking to the visitor experience.",
    ],
  },
  {
    title: "Cookies and Local Storage",
    body: [
      "The site may use browser localStorage to remember display preferences, such as the selected light or dark theme. Some embedded or linked third-party services may use their own cookies or storage according to their own policies.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "The website may connect to third-party services including Google Fonts, Google Maps, Facebook, Sanity-hosted content, Umami analytics, and external donation or membership platforms. These services may process data according to their own privacy practices.",
      "Donation and membership transactions are handled by external platforms. Please review the privacy and payment terms shown by those providers before submitting payment information.",
    ],
  },
  {
    title: "How Information Is Shared",
    body: [
      "Union County Community Arts Council does not sell website visitor information. Information may be shared only as needed to operate the website, respond to requests, use connected service providers, comply with legal obligations, or protect the organization and its visitors.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You can disable cookies or clear localStorage through your browser settings. You may also contact the relevant third-party service directly for questions about information submitted through that service.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-24">
      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">
            Website Privacy
          </p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-parchment/70">
            Union County Community Arts Council keeps this policy straightforward:
            the website collects only what is needed to operate, understand basic
            site activity, and connect visitors with arts programs and resources.
          </p>
          <p className="mt-3 text-sm text-parchment/60">Last updated May 27, 2026</p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad">
        <article className="mx-auto max-w-4xl space-y-9 text-parchment/78">
          {sections.map((section) => (
            <section key={section.title} className="border border-parchment/15 bg-parchment/[0.045] p-7">
              <h2 className="display text-3xl text-parchment">{section.title}</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed md:text-base">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <h2 className="display text-3xl text-parchment">Website Contact</h2>
            <p className="mt-4 text-sm leading-relaxed md:text-base">
              For privacy questions about this website, please reach out to Ellis
              Local at{" "}
              <a
                href="https://ellislocal.com"
                target="_blank"
                rel="noreferrer"
                className="text-terracotta underline underline-offset-4 transition hover:text-parchment"
              >
                ellislocal.com
              </a>
              .
            </p>
          </section>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex border border-parchment/20 px-4 py-3 text-xs uppercase tracking-[0.16em] text-parchment/80 transition hover:border-terracotta hover:text-terracotta"
            >
              Back to Home
            </Link>
          </div>
        </article>
      </SectionReveal>
    </div>
  );
}
