import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Union County Community Arts Council's accessibility statement — the standard we target, what we've done, how we test, and how to report a barrier.",
};

const measures = [
  "Full keyboard navigation, including a “skip to main content” link and a visible focus indicator on every interactive element.",
  "Proper heading structure and landmark regions, so screen reader users can navigate the page by section rather than reading it top to bottom.",
  "Descriptive alternative text on meaningful images; purely decorative images are marked so screen readers skip them instead of announcing redundant text.",
  "Text and background color combinations that meet WCAG's minimum contrast requirements.",
  "Forms with labels properly associated to their fields, and error messages that are announced to assistive technology, not just shown visually.",
  "Support for your browser or operating system's text-resizing, reduced-motion, and high-contrast settings.",
  "A transcript-request option on video content that isn't yet captioned.",
];

const limitations = [
  "Some content is embedded from third-party services — Google Maps, event registration and donation forms hosted by Zeffy, and Google Forms for class and volunteer sign-ups — which we don't control and which may not fully meet the same standard.",
  "Some flyers and event materials are provided as PDFs. If you have trouble accessing one, contact us and we'll provide the information in another format.",
  "Exhibitions, events, and artist profiles are added and updated regularly by our staff. We aim for every new page to meet the same standard, and we welcome reports if something falls short.",
];

export default function AccessibilityPage() {
  return (
    <div className="pb-24">
      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-terracotta">
            Website Accessibility
          </p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            Accessibility Statement
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-parchment/70">
            Union County Community Arts Council is committed to making this website usable by
            everyone, including people who use assistive technology such as screen readers,
            screen magnification, voice recognition software, or keyboard-only navigation.
          </p>
          <p className="mt-3 text-sm text-parchment/60">Last updated July 30, 2026</p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad">
        <article className="mx-auto max-w-4xl space-y-9 text-parchment/78">
          <section className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <h2 className="display text-3xl text-parchment">Our Standard</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed md:text-base">
              <p>
                We have worked to align this website with the Web Content Accessibility
                Guidelines (WCAG) 2.1, Level AA — the technical standard most commonly
                referenced under the Americans with Disabilities Act (ADA) for web accessibility.
              </p>
              <p>
                This is an ongoing goal rather than a one-time achievement: as pages are added or
                updated, we continue to review them against this standard.
              </p>
            </div>
          </section>

          <section className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <h2 className="display text-3xl text-parchment">What We&apos;ve Done</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed md:text-base list-disc pl-5">
              {measures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <h2 className="display text-3xl text-parchment">How We Test</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed md:text-base">
              <p>
                We test this site using axe-core, the accessibility engine behind tools like axe
                DevTools and Google Lighthouse, run against every page and page template on the
                site rather than a sample. We supplement that with manual review: navigating the
                site by keyboard only, checking focus order and visible focus states, and
                verifying screen-reader-relevant markup — headings, labels, roles, and live
                regions — by hand. We also test the site under enlarged text, high-contrast,
                and reduced-motion conditions.
              </p>
              <p>
                This testing is conducted internally as part of our website development process,
                not by a certified third-party accessibility auditor.
              </p>
            </div>
          </section>

          <section className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <h2 className="display text-3xl text-parchment">Known Limitations</h2>
            <p className="mt-4 text-sm leading-relaxed md:text-base">
              No website can guarantee accessibility in every scenario, and we want to be upfront
              about a few things outside our full control:
            </p>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed md:text-base list-disc pl-5">
              {limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <h2 className="display text-3xl text-parchment">Report a Barrier</h2>
            <p className="mt-4 text-sm leading-relaxed md:text-base">
              If you encounter an accessibility barrier on this website, or need information in
              an alternative format, please contact us — we&apos;ll do our best to respond
              promptly and address it.
            </p>
            <div className="mt-4 space-y-1 text-sm leading-relaxed md:text-base">
              <p>
                <a href="mailto:info@unionarts.org" className="text-terracotta underline underline-offset-4 transition hover:text-parchment">
                  info@unionarts.org
                </a>
              </p>
              <p>
                <a href="tel:+17042832784" className="text-terracotta underline underline-offset-4 transition hover:text-parchment">
                  (704) 283-2784
                </a>
              </p>
            </div>
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
