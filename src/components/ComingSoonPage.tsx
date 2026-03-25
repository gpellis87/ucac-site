import { Mail, Phone, MapPin } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0d0c0b] text-parchment flex flex-col">

      {/* — Background layers — */}
      {/* Warm painterly wash */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 15% 20%, rgba(192,84,42,0.18) 0%, transparent 60%)," +
            "radial-gradient(ellipse 70% 60% at 85% 75%, rgba(139,90,43,0.14) 0%, transparent 55%)," +
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(30,18,8,0.6) 0%, transparent 100%)",
        }}
      />

      {/* Abstract ink-stroke shapes */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 800"
      >
        <ellipse cx="200" cy="150" rx="340" ry="180" fill="#c0542a" transform="rotate(-18 200 150)" />
        <ellipse cx="1050" cy="650" rx="280" ry="140" fill="#8b5a2b" transform="rotate(12 1050 650)" />
        <ellipse cx="950" cy="120" rx="200" ry="90" fill="#c0542a" transform="rotate(-30 950 120)" />
        <ellipse cx="120" cy="680" rx="260" ry="110" fill="#8b5a2b" transform="rotate(8 120 680)" />
        <line x1="0" y1="400" x2="1200" y2="390" stroke="#c0542a" strokeWidth="0.6" />
        <line x1="600" y1="0" x2="610" y2="800" stroke="#8b5a2b" strokeWidth="0.6" />
      </svg>

      {/* Grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 0.7px, transparent 0.7px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* — Content — */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">

        {/* Wordmark */}
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-parchment/50">
          Union County Community Arts Council
        </p>

        {/* Decorative rule */}
        <div className="mt-6 flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-terracotta/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-terracotta/60" />
          <div className="flex-1 h-px bg-terracotta/40" />
        </div>

        {/* Headline */}
        <h1
          className="mt-6 leading-[0.9] tracking-tight text-parchment"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(3.5rem, 12vw, 9rem)",
          }}
        >
          Something<br />
          <span className="text-terracotta">Beautiful</span><br />
          Is Coming
        </h1>

        {/* Subtext */}
        <p className="mt-8 max-w-md text-base text-parchment/55 leading-relaxed">
          We&rsquo;re reimagining our home on the web. Our doors remain open &mdash;
          reach out anytime and we&rsquo;ll be happy to connect.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="mailto:info@unionarts.org"
            className="inline-flex items-center justify-center border border-terracotta bg-terracotta px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-parchment transition duration-300 hover:-translate-y-[1px] hover:brightness-110 hover:shadow-[0_12px_28px_rgba(192,84,42,0.38)]"
          >
            Get in Touch
          </a>
        </div>

        {/* Divider */}
        <div className="mt-16 flex items-center gap-4 w-full max-w-sm">
          <div className="flex-1 h-px bg-parchment/15" />
          <p className="text-[0.6rem] uppercase tracking-[0.25em] text-parchment/30">Contact</p>
          <div className="flex-1 h-px bg-parchment/15" />
        </div>

        {/* Contact details */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-3 text-sm text-parchment/60">
          <a
            href="tel:+17042832784"
            className="flex items-center gap-2.5 transition-colors hover:text-parchment"
          >
            <Phone size={13} className="shrink-0 text-terracotta/70" />
            (704) 283-2784
          </a>
          <a
            href="mailto:info@unionarts.org"
            className="flex items-center gap-2.5 transition-colors hover:text-parchment"
          >
            <Mail size={13} className="shrink-0 text-terracotta/70" />
            info@unionarts.org
          </a>
          <p className="flex items-center gap-2.5">
            <MapPin size={13} className="shrink-0 text-terracotta/70" />
            327 S Hayne St, Monroe, NC
          </p>
        </div>

        <p className="mt-3 text-xs text-parchment/30">Mon–Fri &nbsp;8:30 AM – 4:30 PM</p>
      </div>

      {/* Footer strip */}
      <div className="relative z-10 border-t border-parchment/10 px-6 py-5 text-center">
        <p className="text-[0.62rem] uppercase tracking-[0.2em] text-parchment/25">
          &copy; {new Date().getFullYear()} Union County Community Arts Council &mdash; 501(c)(3) Nonprofit
        </p>
      </div>
    </div>
  );
}
