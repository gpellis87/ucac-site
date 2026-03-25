import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center section-pad py-24">
      <div className="mx-auto w-full max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
          Union County Community Arts Council
        </p>

        <h1 className="editorial-title mt-4 text-6xl md:text-8xl">
          A New Home<br />Is Coming
        </h1>

        <p className="mt-6 text-lg text-parchment/70 max-w-lg mx-auto">
          We&rsquo;re reworking our website to better serve our community.
          In the meantime, don&rsquo;t hesitate to reach out.
        </p>

        <div className="mt-10">
          <a href="mailto:info@unionarts.org" className="accent-btn">
            Get in Touch
          </a>
        </div>

        <div className="mt-12 border border-parchment/20 bg-black/25 p-8 text-left space-y-4">
          <h2 className="display text-2xl text-parchment">Contact Us</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-parchment/75">
            <a
              href="tel:+17042832784"
              className="flex items-center gap-3 hover:text-parchment transition-colors"
            >
              <Phone size={16} className="shrink-0 text-terracotta" />
              (704) 283-2784
            </a>
            <a
              href="mailto:info@unionarts.org"
              className="flex items-center gap-3 hover:text-parchment transition-colors"
            >
              <Mail size={16} className="shrink-0 text-terracotta" />
              info@unionarts.org
            </a>
            <p className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-terracotta" />
              327 S Hayne St, Monroe, NC 28112
            </p>
            <p className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-terracotta" />
              Mon–Fri, 8:30 AM – 4:30 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
