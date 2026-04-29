"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Copy, CalendarPlus, Share2, X } from "lucide-react";
import { UccacEvent, events } from "@/data/events";
import EventCard from "@/components/EventCard";
import { buildGoogleCalendarLink, formatEventDate } from "@/lib/event-utils";

export default function EventDetailClient({ event }: { event: UccacEvent }) {
  const [showRsvp, setShowRsvp] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copyStatus, setCopyStatus] = useState("Copy link");

  const related = useMemo(
    () => events.filter((item) => item.slug !== event.slug).slice(0, 3),
    [event.slug],
  );

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://uccac.example.org";
  const pageUrl = `${baseUrl}/events/${event.slug}`;
  const smsBody = `Check out this event: ${event.title} on ${formatEventDate(event.date)} at ${event.location}. Learn more: ${pageUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy link"), 1600);
    } catch {
      setCopyStatus("Unable to copy");
    }
  };

  return (
    <div className="pb-24">
      <section className="relative h-[72vh] min-h-[500px] overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--theme-overlay)_/_0.92)] via-[rgb(var(--theme-overlay)_/_0.52)] to-[rgb(var(--theme-overlay)_/_0.08)]" />
        <div className="section-pad absolute inset-x-0 bottom-0 pb-10">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em]">
              <span className="bg-terracotta px-3 py-1 text-parchment">{event.category}</span>
              <span className="theme-chip px-3 py-1 text-parchment">{formatEventDate(event.date)}</span>
              <span className="theme-chip px-3 py-1 text-parchment">{event.time}</span>
              <span className="theme-chip px-3 py-1 text-parchment">{event.location}</span>
            </div>
            <h1 className="editorial-title max-w-4xl text-5xl md:text-7xl">{event.title}</h1>
          </div>
        </div>
      </section>

      <section className="section-pad mt-10">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.6fr_1fr]">
          <article className="space-y-6 text-parchment/85">
            <h2 className="display text-4xl text-parchment">Event Details</h2>
            <p>
              {event.description} This gathering is designed to bring artists, patrons, and neighbors together in a space where conversation and creative exchange can flourish. Guests will experience curated programming, meaningful dialogue, and moments that celebrate the power of local culture.
            </p>
            <p>
                Whether you are attending for inspiration, networking, or to support UCCAC&apos;s mission, this event offers multiple ways to engage. The evening includes artist perspectives, collaborative opportunities, and clear paths to get involved in future community-centered initiatives.
            </p>
            <p>
              Accessibility accommodations are available upon request, and all attendees are encouraged to contact us in advance with any needs. We are committed to building inclusive events where everyone feels welcome, seen, and valued.
            </p>
          </article>

          <aside className="theme-panel space-y-4 p-6">
            <p><span className="text-parchment/55">Date:</span> {formatEventDate(event.date)}</p>
            <p><span className="text-parchment/55">Time:</span> {event.time}</p>
            <p><span className="text-parchment/55">Location:</span> {event.location}</p>
            <p><span className="text-parchment/55">Address:</span> {event.address}</p>
            <p><span className="text-parchment/55">Organizer:</span> {event.organizer}</p>
            <p><span className="text-parchment/55">Price:</span> {event.ticketPrice}</p>
            <div className="flex flex-wrap gap-2 pt-3">
              {event.tags.map((tag) => (
                <span key={tag} className="border border-parchment/25 px-2 py-1 text-xs uppercase tracking-[0.12em] text-parchment/70">
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad mt-8">
        <div className="mx-auto max-w-[1500px] overflow-hidden border border-parchment/20">
          <iframe
            title={`Map for ${event.location}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(event.address)}&output=embed`}
            width="100%"
            height="350"
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="section-pad sticky bottom-0 z-30 mt-10">
        <div className="theme-panel-strong mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 p-4 backdrop-blur-xl">
          <button type="button" onClick={() => setShowRsvp(true)} className="accent-btn px-5 py-2 text-xs">
            RSVP
          </button>
          <div className="flex flex-wrap gap-2">
            <a
              href={buildGoogleCalendarLink(event, baseUrl)}
              target="_blank"
              rel="noreferrer"
              className="ghost-btn px-4 py-2 text-xs"
            >
              <CalendarPlus size={14} className="mr-2" /> Google
            </a>
            <a href={`/api/events/${event.slug}/ics`} className="ghost-btn px-4 py-2 text-xs">
              Apple (.ics)
            </a>
            <a href={`/api/events/${event.slug}/ics`} className="ghost-btn px-4 py-2 text-xs">
              Outlook
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={handleCopy} className="ghost-btn px-4 py-2 text-xs">
              <Copy size={14} className="mr-2" /> {copyStatus}
            </button>
            <a href={`sms:?&body=${encodeURIComponent(smsBody)}`} className="ghost-btn px-4 py-2 text-xs">
              <Share2 size={14} className="mr-2" /> SMS
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noreferrer" className="ghost-btn px-4 py-2 text-xs">
              Facebook
            </a>
            <a href={`https://www.instagram.com/?url=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noreferrer" className="ghost-btn px-4 py-2 text-xs">
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad mt-16">
        <div className="mx-auto max-w-[1500px]">
          <h2 className="display text-4xl">Related Events</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <EventCard key={item.id} event={item} />
            ))}
          </div>
        </div>
      </section>

      {showRsvp && (
        <div className="theme-modal fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div className="theme-panel-strong w-full max-w-md p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="display text-3xl">RSVP</h3>
              <button type="button" onClick={() => setShowRsvp(false)} aria-label="Close RSVP modal">
                <X size={20} />
              </button>
            </div>
            {submitted ? (
              <div className="border border-terracotta/45 bg-terracotta/10 p-4 text-sm text-parchment">
                Thanks! Your RSVP has been received. We sent a confirmation to your email.
              </div>
            ) : (
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input required aria-label="Name" placeholder="Name" className="theme-input w-full px-3 py-2 text-sm focus:border-terracotta focus:outline-none" />
                <input required type="email" aria-label="Email" placeholder="Email" className="theme-input w-full px-3 py-2 text-sm focus:border-terracotta focus:outline-none" />
                <input required type="number" min={1} defaultValue={1} aria-label="Number of Guests" placeholder="Number of Guests" className="theme-input w-full px-3 py-2 text-sm focus:border-terracotta focus:outline-none" />
                <button type="submit" className="accent-btn w-full">
                  Submit RSVP
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
