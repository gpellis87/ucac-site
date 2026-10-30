"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Clock, CalendarOff, Car } from "lucide-react";

export default function ContactPageClient() {
  return (
    <div className="pb-24">

      {/* Page header */}
      <div className="section-pad py-16">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-navy">Union County Community Arts Council</p>
          <h1 className="editorial-title mt-3 text-5xl leading-[0.93] md:text-7xl lg:text-[5.5rem]">
            Contact Us
          </h1>
          <p className="mt-5 max-w-xl text-base text-parchment/70 leading-relaxed">
            We would love to hear from you. Reach out about exhibitions, programming, volunteering, or general questions.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-navy/60 via-navy/20 to-transparent" />
        </div>
      </div>

      {/* Info grid */}
      <div className="section-pad">
        <div className="mx-auto max-w-[1500px] grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Address */}
          <div className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <div className="mb-4 flex items-center gap-2">
              <MapPin size={14} className="text-navy" />
              <p className="text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">Location</p>
            </div>
            <p className="text-lg font-medium text-parchment">UCCAC Gallery</p>
            <p className="mt-1 text-sm text-parchment/70 leading-relaxed">
              300 N Hayne St<br />
              Monroe, NC 28112<br />
              PO Box 576, Monroe, NC 28111
            </p>
            <a
              href="https://maps.google.com/?q=300+North+Hayne+Street+Monroe+NC+28112"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-[0.75rem] uppercase tracking-[0.14em] text-navy hover:underline"
            >
              Get Directions →
            </a>
          </div>

          {/* Contact details */}
          <div className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <div className="mb-4 flex items-center gap-2">
              <Phone size={14} className="text-navy" />
              <p className="text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">Reach Us</p>
            </div>
            <div className="space-y-3">
              <a href="tel:+17042832784" className="flex items-center gap-3 text-sm text-parchment/80 transition hover:text-parchment">
                <Phone size={13} className="shrink-0 text-navy/60" />
                (704) 283-2784
              </a>
              <a href="mailto:info@unionarts.org" className="flex items-center gap-3 text-sm text-parchment/80 transition hover:text-parchment">
                <Mail size={13} className="shrink-0 text-navy/60" />
                info@unionarts.org
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <div className="mb-4 flex items-center gap-2">
              <Clock size={14} className="text-navy" />
              <p className="text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">Gallery Hours</p>
            </div>
            <div className="space-y-1 text-sm text-parchment/80">
              <p>Tuesday &nbsp; 10:00 AM – 4:00 PM</p>
              <p>Wednesday &nbsp; 10:00 AM – 4:00 PM</p>
              <p>Thursday &nbsp; 10:00 AM – 4:00 PM</p>
              <p>Friday &nbsp; 10:00 AM – 6:00 PM</p>
              <p>Saturday &nbsp; 10:00 AM – 4:00 PM</p>
              <p className="text-parchment/60">Sunday – Monday: Closed</p>
            </div>
          </div>

        </div>
      </div>

      {/* Holiday closures + parking */}
      <div className="section-pad mt-6">
        <div className="mx-auto max-w-[1500px] grid gap-6 md:grid-cols-2">
          <div className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <div className="mb-4 flex items-center gap-2">
              <CalendarOff size={14} className="text-navy" />
              <p className="text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">Holiday Closures</p>
            </div>
            <p className="text-sm leading-relaxed text-parchment/70">
              Artspace will be closed to the public on the following dates:
            </p>
            <ul className="mt-3 space-y-1 text-sm text-parchment/80">
              <li>November 25 – November 28</li>
              <li>December 19 – January 2</li>
            </ul>
          </div>

          <div className="border border-parchment/15 bg-parchment/[0.045] p-7">
            <div className="mb-4 flex items-center gap-2">
              <Car size={14} className="text-navy" />
              <p className="text-[0.75rem] uppercase tracking-[0.2em] text-parchment/60">Parking</p>
            </div>
            <p className="text-sm leading-relaxed text-parchment/70">
              The City of Monroe provides an interactive map to help you find appropriate parking
              near our building at 300 N Hayne St, including accessible parking spaces. The image
              below shows our location.
            </p>
            <a
              href="https://monroencgis.maps.arcgis.com/apps/webappviewer/index.html?id=ef43c76d605b4f5aa7f18995ed932227"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[0.75rem] uppercase tracking-[0.14em] text-navy hover:underline"
            >
              Open interactive parking map
            </a>
            <Image
              src="/parking-map.png"
              alt="Aerial map of downtown Monroe showing UCCAC at 300 N Hayne St, circled in orange, at the corner of N Hayne St and E Franklin St. Pink lines mark nearby street parking and blue wheelchair icons mark accessible parking."
              width={515}
              height={478}
              className="mt-4 h-auto w-full max-w-md border border-parchment/20"
            />
            <p className="mt-2 text-xs text-parchment/60">
              Our building is circled in orange. Pink lines mark street parking; blue icons mark accessible spaces.
            </p>
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
