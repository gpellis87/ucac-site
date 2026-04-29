"use client";

import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";

const suggested = [25, 50, 100, 250];

export default function DonatePageClient() {
  const [amount, setAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [thanks, setThanks] = useState(false);
  const [volunteerDone, setVolunteerDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateDonation = (form: FormData) => {
    const nextErrors: Record<string, string> = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    if (!name) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (amount === "custom" && (!customAmount || Number(customAmount) <= 0)) {
      nextErrors.amount = "Enter a valid custom amount.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  return (
    <div className="pb-24">
      <SectionReveal className="section-pad relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(192,84,42,0.32),transparent_35%),linear-gradient(180deg,#1a1a1a,rgba(26,26,26,0.45))]" />
        <div className="relative mx-auto max-w-[1500px]">
          <h1 className="editorial-title max-w-4xl text-5xl md:text-8xl">Your support keeps art alive.</h1>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-12">
        <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-3">
          <div className="border border-parchment/20 p-5"><p className="display text-5xl text-terracotta">42,000+</p><p className="mt-2 text-parchment/75">Students served through Arts in Education programs.</p></div>
          <div className="border border-parchment/20 p-5"><p className="display text-5xl text-terracotta">140,000+</p><p className="mt-2 text-parchment/75">Residents benefit from community arts programs and services.</p></div>
          <div className="border border-parchment/20 p-5"><p className="display text-5xl text-terracotta">$175,000+</p><p className="mt-2 text-parchment/75">Awarded to artists, schools, and nonprofit organizations.</p></div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad pb-2">
        <div className="mx-auto max-w-[1500px] border border-terracotta/45 bg-terracotta/10 p-5">
          <p className="text-sm text-parchment/88">
            Thank you for supporting the Union County Community Arts Council. Your tax-deductible contribution directly supports and promotes programs and services for arts organizations and individual artists throughout Union County.
          </p>
          <a
            href="https://unionarts.networkforgood.com/projects/176453-support-union-county-community-arts-council"
            target="_blank"
            rel="noreferrer"
            className="accent-btn mt-4 px-5 py-2 text-xs"
          >
            Donate on Official Portal
          </a>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-14">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="theme-panel p-6 md:p-8">
            <h2 className="display text-4xl">Make a Donation</h2>
            {thanks ? (
              <div className="mt-5 border border-terracotta/50 bg-terracotta/10 p-4">
                Thank you for supporting UCCAC. Your contribution helps keep the arts accessible and thriving in Union County.
              </div>
            ) : (
              <form
                className="mt-6 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = new FormData(e.currentTarget);
                  if (validateDonation(form)) setThanks(true);
                }}
              >
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.14em] text-parchment/70">Amount</p>
                  <div className="flex flex-wrap gap-2">
                    {suggested.map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setAmount(value)}
                        className={`border px-4 py-2 text-sm ${amount === value ? "border-terracotta text-terracotta" : "border-parchment/30 text-parchment/80"}`}
                      >
                        ${value}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setAmount("custom")}
                      className={`border px-4 py-2 text-sm ${amount === "custom" ? "border-terracotta text-terracotta" : "border-parchment/30 text-parchment/80"}`}
                    >
                      Custom
                    </button>
                  </div>
                  {amount === "custom" && (
                    <input
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      type="number"
                      min={1}
                      placeholder="Enter custom amount"
                      className="theme-input mt-3 w-full px-3 py-2"
                    />
                  )}
                  {errors.amount ? <p className="mt-1 text-xs text-terracotta">{errors.amount}</p> : null}
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setFrequency("one-time")} className={`border px-4 py-2 text-sm ${frequency === "one-time" ? "border-terracotta" : "border-parchment/30"}`}>
                    One-time
                  </button>
                  <button type="button" onClick={() => setFrequency("monthly")} className={`border px-4 py-2 text-sm ${frequency === "monthly" ? "border-terracotta" : "border-parchment/30"}`}>
                    Monthly
                  </button>
                </div>
                <input name="dedicate" placeholder="Dedicate in honor/memory of (optional)" className="theme-input w-full px-3 py-2" />
                <div>
                  <input name="name" placeholder="Name" className="theme-input w-full px-3 py-2" />
                  {errors.name ? <p className="mt-1 text-xs text-terracotta">{errors.name}</p> : null}
                </div>
                <div>
                  <input name="email" placeholder="Email" className="theme-input w-full px-3 py-2" />
                  {errors.email ? <p className="mt-1 text-xs text-terracotta">{errors.email}</p> : null}
                </div>
                <input name="phone" placeholder="Phone (optional)" className="theme-input w-full px-3 py-2" />
                <button type="submit" className="accent-btn w-full">Donate Now</button>
                <p className="text-xs text-parchment/60">This is a nonprofit 501(c)(3) organization. Donations are tax-deductible.</p>
              </form>
            )}
          </div>
          <div className="space-y-5">
            <h3 className="display text-3xl">Ways to Give</h3>
            {["Online Donation", "Mail a Check", "Planned Giving", "Corporate Matching", "In-Kind Donations", "Volunteer Your Time"].map((item) => (
              <div key={item} className="border border-parchment/20 p-4">{item}</div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="section-pad py-14">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-2">
          <div className="border border-parchment/20 p-6">
            <h3 className="display text-3xl">Volunteer Interest</h3>
            {volunteerDone ? (
              <p className="mt-4 border border-terracotta/40 bg-terracotta/10 p-3 text-sm">Thanks for your interest. Our team will be in touch soon.</p>
            ) : (
              <form
                className="mt-4 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setVolunteerDone(true);
                }}
              >
                <input required placeholder="Name" className="theme-input w-full px-3 py-2" />
                <input required type="email" placeholder="Email" className="theme-input w-full px-3 py-2" />
                <select required className="theme-input w-full px-3 py-2">
                  <option value="">Area of Interest</option>
                  <option>Events</option>
                  <option>Youth Programs</option>
                  <option>Fundraising</option>
                  <option>Marketing</option>
                </select>
                <textarea placeholder="Message" rows={4} className="theme-input w-full px-3 py-2" />
                <button className="ghost-btn w-full" type="submit">Send Interest</button>
              </form>
            )}
          </div>
          <div className="border border-parchment/20 p-6">
            <h3 className="display text-3xl">Sponsorship Tiers</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="border border-parchment/20 p-3"><span className="display text-2xl">Bronze</span> - Event recognition, newsletter mention.</div>
              <div className="border border-parchment/20 p-3"><span className="display text-2xl">Silver</span> - Bronze + logo on program materials.</div>
              <div className="border border-parchment/20 p-3"><span className="display text-2xl">Gold</span> - Silver + VIP invitations and stage acknowledgment.</div>
              <div className="border border-parchment/20 p-3"><span className="display text-2xl">Platinum</span> - Gold + signature partner positioning and campaign features.</div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
