"use client";

import { useState } from "react";
import { VolunteerOpportunity, volunteerStatusLabel } from "@/data/volunteer";
import { isVolunteerFull, spotsLabel, volunteerStatusStyle } from "@/lib/volunteer-utils";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

type Phase = "idle" | "form" | "submitting" | "success" | "error";

export default function VolunteerCard({ opportunity }: { opportunity: VolunteerOpportunity }) {
  const full = isVolunteerFull(opportunity);
  const [phase, setPhase] = useState<Phase>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [cancelToken, setCancelToken] = useState<string | null>(null);

  const nameId = `volunteer-name-${opportunity.id}`;
  const emailId = `volunteer-email-${opportunity.id}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Name is required.";
    if (!EMAIL_RE.test(email)) nextErrors.email = "Enter a valid email address.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setPhase("submitting");
    setFormError(null);

    try {
      const res = await fetch("/api/volunteer/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          opportunityId: opportunity.id,
          opportunity: opportunity.opportunity,
          date: opportunity.date,
          name,
          email,
        }),
      });
      const result = await res.json();
      if (result.ok) {
        setCancelToken(result.cancelToken);
        setPhase("success");
      } else {
        setFormError(result.error || "Something went wrong. Please try again.");
        setPhase("form");
      }
    } catch {
      setFormError("Something went wrong. Please try again.");
      setPhase("form");
    }
  };

  return (
    <div className="group overflow-hidden border border-parchment/20 bg-parchment/[0.045] transition duration-300 hover:-translate-y-1.5 hover:border-navy/70 hover:shadow-[0_16px_34px_rgba(0,0,0,0.28)]">
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.14em] text-parchment/70">
            {opportunity.date} · {opportunity.time}
          </p>
          <span
            className={`shrink-0 border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] ${volunteerStatusStyle[full ? "full" : "open"]}`}
          >
            {full ? volunteerStatusLabel.full : spotsLabel(opportunity.spotsAvailable)}
          </span>
        </div>
        <h3 className="display text-2xl text-parchment leading-tight">{opportunity.opportunity}</h3>
        <p className="text-sm text-parchment/75">{opportunity.location}</p>
      </div>

      <div className="p-5 pt-0">
        {full ? (
          <span className="block w-full border border-parchment/25 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-parchment/60">
            {volunteerStatusLabel.full}
          </span>
        ) : phase === "success" ? (
          <div className="border border-navy/40 bg-navy/10 p-4 text-sm leading-relaxed text-parchment/85">
            <p>You&apos;re signed up. A confirmation email is on its way.</p>
            {cancelToken && (
              <a
                href={`/api/volunteer/cancel?token=${encodeURIComponent(cancelToken)}`}
                className="mt-2 inline-block text-xs uppercase tracking-[0.14em] text-navy underline underline-offset-4 hover:text-parchment"
              >
                Cancel my sign-up
              </a>
            )}
          </div>
        ) : phase === "idle" ? (
          <button
            type="button"
            onClick={() => setPhase("form")}
            className="accent-btn w-full text-center"
          >
            {volunteerStatusLabel.open}
          </button>
        ) : (
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label htmlFor={nameId} className="mb-1 block text-xs uppercase tracking-[0.1em] text-parchment/70">
                Name
              </label>
              <input
                id={nameId}
                name="name"
                placeholder="Name"
                disabled={phase === "submitting"}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${nameId}-error` : undefined}
                className="theme-input w-full px-3 py-2"
              />
              {errors.name && (
                <p id={`${nameId}-error`} role="alert" className="mt-1 text-xs text-navy">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor={emailId} className="mb-1 block text-xs uppercase tracking-[0.1em] text-parchment/70">
                Email
              </label>
              <input
                id={emailId}
                name="email"
                type="email"
                placeholder="Email"
                disabled={phase === "submitting"}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? `${emailId}-error` : undefined}
                className="theme-input w-full px-3 py-2"
              />
              {errors.email && (
                <p id={`${emailId}-error`} role="alert" className="mt-1 text-xs text-navy">
                  {errors.email}
                </p>
              )}
            </div>
            {formError && (
              <p role="alert" className="text-xs text-navy">
                {formError}
              </p>
            )}
            <div className="flex gap-2">
              <button type="submit" disabled={phase === "submitting"} className="accent-btn flex-1 text-center">
                {phase === "submitting" ? "Signing Up…" : "Confirm Sign-Up"}
              </button>
              <button
                type="button"
                onClick={() => setPhase("idle")}
                disabled={phase === "submitting"}
                className="ghost-btn px-4"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
