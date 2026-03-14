"use client";

import { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

export default function ContactPageClient() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <div className="pb-20">
      <SectionReveal className="section-pad py-24">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="editorial-title text-5xl md:text-8xl">Contact UCAC</h1>
          <p className="mt-5 max-w-2xl text-parchment/75">
            We would love to hear from you. Reach out about programming, volunteering, media, partnerships, or general questions.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="border border-parchment/20 bg-black/25 p-6 md:p-8">
            <h2 className="display text-4xl">Send a Message</h2>
            {sent ? (
              <p className="mt-5 border border-terracotta/45 bg-terracotta/10 p-4 text-sm">Thanks for contacting us. A member of our team will respond shortly.</p>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = new FormData(e.currentTarget);
                  const nextErrors: Record<string, string> = {};
                  if (!String(form.get("name") || "").trim()) nextErrors.name = "Name is required.";
                  const email = String(form.get("email") || "").trim();
                  if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Valid email required.";
                  if (!String(form.get("subject") || "")) nextErrors.subject = "Please choose a subject.";
                  if (!String(form.get("message") || "").trim()) nextErrors.message = "Message is required.";
                  setErrors(nextErrors);
                  if (Object.keys(nextErrors).length === 0) setSent(true);
                }}
              >
                <div>
                  <input name="name" placeholder="Name" className="w-full border border-parchment/30 bg-transparent px-3 py-2" />
                  {errors.name ? <p className="mt-1 text-xs text-terracotta">{errors.name}</p> : null}
                </div>
                <div>
                  <input name="email" placeholder="Email" className="w-full border border-parchment/30 bg-transparent px-3 py-2" />
                  {errors.email ? <p className="mt-1 text-xs text-terracotta">{errors.email}</p> : null}
                </div>
                <div>
                  <select name="subject" className="w-full border border-parchment/30 bg-charcoal px-3 py-2">
                    <option value="">Subject</option>
                    <option>General Inquiry</option>
                    <option>Events</option>
                    <option>Donations</option>
                    <option>Volunteer</option>
                    <option>Press</option>
                    <option>Other</option>
                  </select>
                  {errors.subject ? <p className="mt-1 text-xs text-terracotta">{errors.subject}</p> : null}
                </div>
                <div>
                  <textarea name="message" rows={5} placeholder="Message" className="w-full border border-parchment/30 bg-transparent px-3 py-2" />
                  {errors.message ? <p className="mt-1 text-xs text-terracotta">{errors.message}</p> : null}
                </div>
                <button type="submit" className="accent-btn w-full">Submit</button>
              </form>
            )}
          </div>

          <div className="space-y-5">
            <div className="border border-parchment/20 p-5">
              <h3 className="display text-3xl">Contact Info</h3>
              <div className="mt-4 space-y-2 text-sm text-parchment/80">
                <p>72 Arts Way, Monroe, NC 28112</p>
                <p>(704) 555-0148</p>
                <p>hello@unioncountyartscouncil.org</p>
                <p>Office Hours: Mon-Fri 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="border border-parchment/20 p-5">
              <h3 className="display text-3xl">Follow Us</h3>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <a href="#" className="border border-parchment/30 p-3 hover:border-terracotta inline-flex items-center gap-2"><Facebook size={15} /> Facebook</a>
                <a href="#" className="border border-parchment/30 p-3 hover:border-terracotta inline-flex items-center gap-2"><Instagram size={15} /> Instagram</a>
                <a href="#" className="border border-parchment/30 p-3 hover:border-terracotta inline-flex items-center gap-2"><Twitter size={15} /> X</a>
                <a href="#" className="border border-parchment/30 p-3 hover:border-terracotta inline-flex items-center gap-2"><Youtube size={15} /> YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad mt-8">
        <div className="mx-auto max-w-[1500px] overflow-hidden border border-parchment/20">
          <iframe
            title="Union County map location"
            src="https://www.google.com/maps?q=Union%20County%2C%20NC&output=embed"
            width="100%"
            height="360"
            loading="lazy"
            className="border-0"
          />
        </div>
      </SectionReveal>
    </div>
  );
}
