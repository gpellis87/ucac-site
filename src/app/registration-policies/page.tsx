import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Registration Policies",
  description:
    "Registration, withdrawal, refund, and payment policies for classes and workshops at the Union County Community Arts Council.",
};

const sections = [
  {
    title: "Student Withdrawal Policy",
    body: [
      "If you need to withdraw from a class, please notify us at least 14 days prior to the class start date. With sufficient notice, we can offer a refund minus a $20 processing fee.",
      "If you withdraw less than 14 days before the class begins, your tuition will be forfeited. As a nonprofit with limited resources, we carefully plan classes, purchase supplies, and coordinate staffing based on registration numbers. Last-minute cancellations and transfers make it difficult to allocate resources effectively and can impact the experience for all students, which is why we must enforce these fees.",
      "If your withdrawal is due to extenuating circumstances, you may contact us and we will review your case on an individual basis.",
    ],
  },
  {
    title: "Class Cancellations",
    body: [
      "If it becomes necessary to cancel, combine, or reschedule a class for any reason, all registered participants will be notified by email as soon as possible. Participants will have the option to transfer their registration to another class or receive a full refund. Please note that we are unable to reimburse any non-refundable travel, lodging, or other incidental expenses incurred in connection with the class.",
    ],
  },
  {
    title: "Memberships",
    body: ["Memberships are non-refundable."],
  },
  {
    title: "Payment",
    body: [
      "Full payment is required at the time of registration. Our secure online registration system makes enrolling quick and convenient while protecting your personal and payment information. You can register with confidence knowing your information is handled securely.",
    ],
  },
  {
    title: "Register Online",
    body: [
      "Please choose the Registration option, complete the information form, and pay for classes. If you want to become a member and enjoy a 10% discount on course fees, purchase your membership first to confirm your discount is applied.",
    ],
  },
];

export default function RegistrationPoliciesPage() {
  return (
    <div className="pb-24">
      <SectionReveal className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">
            UCCAC Studio · Monroe, NC
          </p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            Registration Policies
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-parchment/70">
            Please take a moment to carefully review our registration and refund policies. We
            encourage you to register as early as possible to secure your spot in the class. Class
            sizes are limited, and some classes may fill several weeks in advance. Please be aware
            that registration often closes a week or more before the start date to allow time for
            procuring necessary materials and supplies.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-navy/60 via-navy/20 to-transparent" />
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad">
        <article className="mx-auto max-w-4xl space-y-9 text-parchment/78">
          <section className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <h2 className="display text-3xl text-parchment">Contact Information</h2>
            <div className="mt-4 space-y-1 text-sm leading-relaxed md:text-base">
              <p>
                <a
                  href="mailto:info@unionarts.org"
                  className="text-navy underline underline-offset-4 transition hover:text-parchment"
                >
                  info@unionarts.org
                </a>
              </p>
              <p>
                <a
                  href="tel:+17042832784"
                  className="text-navy underline underline-offset-4 transition hover:text-parchment"
                >
                  (704) 283-2784
                </a>
              </p>
            </div>
          </section>

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
            <h2 className="display text-3xl text-parchment">Register in Person</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed md:text-base">
              <p>
                We are available for registration assistance. Email us at{" "}
                <a
                  href="mailto:info@unionarts.org"
                  className="text-navy underline underline-offset-4 transition hover:text-parchment"
                >
                  info@unionarts.org
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+17042832784"
                  className="text-navy underline underline-offset-4 transition hover:text-parchment"
                >
                  (704) 283-2784
                </a>
                .
              </p>
              <p>Registration fees may be paid using a credit card online or in person by check.</p>
            </div>
          </section>

          <div className="pt-2">
            <Link
              href="/workshops"
              className="inline-flex border border-parchment/20 px-4 py-3 text-xs uppercase tracking-[0.16em] text-parchment/80 transition hover:border-navy hover:text-navy"
            >
              Back to Classes &amp; Workshops
            </Link>
          </div>
        </article>
      </SectionReveal>
    </div>
  );
}
