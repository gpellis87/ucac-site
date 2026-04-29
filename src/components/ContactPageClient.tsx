"use client";

import { Mail, Phone, MapPin, Clock, Facebook } from "lucide-react";

export default function ContactPageClient() {
  return (
    <div className="pb-24">

      {/* Page header */}
      <div className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">Union County Community Arts Council</p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            Contact Us
          </h1>
          <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed">
            We would love to hear from you. Reach out about exhibitions, programming, volunteering, or general questions.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-terracotta/60 via-terracotta/20 to-transparent" />
        </div>
      </div>

      {/* Info grid */}
      <div className="section-pad">
        <div className="mx-auto max-w-[1500px] grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Address */}
          <div className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <div className="mb-4 flex items-center gap-2">
              <MapPin size={14} className="text-terracotta" />
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-parchment/50">Location</p>
            </div>
            <p className="text-lg font-medium text-parchment">UCCAC Gallery</p>
            <p className="mt-1 text-sm text-parchment/70 leading-relaxed">
              300 North Hayne Street<br />
              Monroe, NC 28112<br />
              PO Box 576
            </p>
            <a
              href="https://maps.google.com/?q=300+North+Hayne+Street+Monroe+NC+28112"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-[0.68rem] uppercase tracking-[0.14em] text-terracotta hover:underline"
            >
              Get Directions →
            </a>
          </div>

          {/* Contact details */}
          <div className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <div className="mb-4 flex items-center gap-2">
              <Phone size={14} className="text-terracotta" />
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-parchment/50">Reach Us</p>
            </div>
            <div className="space-y-3">
              <a href="tel:+17042832784" className="flex items-center gap-3 text-sm text-parchment/80 transition hover:text-parchment">
                <Phone size={13} className="shrink-0 text-terracotta/60" />
                (704) 283-2784
              </a>
              <a href="mailto:info@unionarts.org" className="flex items-center gap-3 text-sm text-parchment/80 transition hover:text-parchment">
                <Mail size={13} className="shrink-0 text-terracotta/60" />
                info@unionarts.org
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574355290119"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-parchment/80 transition hover:text-parchment"
              >
                <Facebook size={13} className="shrink-0 text-terracotta/60" />
                Facebook
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <div className="mb-4 flex items-center gap-2">
              <Clock size={14} className="text-terracotta" />
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-parchment/50">Hours</p>
            </div>
            <div className="space-y-3 text-sm text-parchment/80">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.14em] text-parchment/40 mb-1">Gallery</p>
                <p>Mon – Thu &nbsp; 10:00 AM – 4:00 PM</p>
                <p>Select Saturdays &nbsp; 10:00 AM – 2:00 PM</p>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.14em] text-parchment/40 mb-1">Office</p>
                <p>Mon – Fri &nbsp; 8:00 AM – 4:00 PM</p>
                <p className="text-parchment/50">Sat – Sun: Closed</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Map */}
      <div className="section-pad mt-8">
        <div className="mx-auto max-w-[1500px] overflow-hidden border border-parchment/20">
          <iframe
            title="UCCAC office map location"
            src="https://www.google.com/maps?q=300%20North%20Hayne%20Street%2C%20Monroe%2C%20NC%2028112&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>

    </div>
  );
}
