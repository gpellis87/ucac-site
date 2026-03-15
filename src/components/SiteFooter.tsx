import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { DONATE_PORTAL_URL } from "@/lib/site-config";

const social = [
  { href: "#", label: "Facebook", icon: Facebook },
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "X", icon: Twitter },
  { href: "#", label: "YouTube", icon: Youtube },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-parchment/20 bg-[#121212] py-16 text-parchment">
      <div className="section-pad mx-auto grid max-w-[1500px] gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="display text-4xl">UCCAC</p>
          <p className="mt-3 max-w-xs text-sm text-parchment/75">
            Union County Community Arts Council champions creative expression through education, exhibitions, and community projects.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-parchment/70">Quick Links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/">Home</Link>
            <Link href="/events">Events</Link>
            <Link href="/artists">Artists</Link>
            <Link href="/about">About</Link>
            <a href={DONATE_PORTAL_URL}>Donate</a>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-parchment/70">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-parchment/85">
            <p>327 S Hayne St, Monroe, NC 28112</p>
            <p>(704) 283-2784</p>
            <p>info@unionarts.org</p>
            <p>Mon-Fri: 8:30 AM - 4:30 PM</p>
            <p>Sat-Sun: Closed</p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-parchment/70">Newsletter</p>
          <form className="mt-3 space-y-2">
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full border border-parchment/30 bg-transparent px-3 py-2 text-sm text-parchment placeholder:text-parchment/50 focus:border-terracotta focus:outline-none"
              aria-label="Email address for newsletter"
            />
            <button type="submit" className="accent-btn w-full px-4 py-2 text-xs">
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex gap-3">
            {social.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="border border-parchment/30 p-2 transition hover:border-terracotta hover:text-terracotta"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <a
            href={DONATE_PORTAL_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-xs uppercase tracking-[0.14em] text-terracotta hover:text-parchment"
          >
            Official Donate Portal
          </a>
        </div>
      </div>
      <div className="section-pad mx-auto mt-12 max-w-[1500px] border-t border-parchment/20 pt-6 text-xs text-parchment/60">
        <p>Union County Community Arts Council is a 501(c)(3) nonprofit organization.</p>
        <p className="mt-1">© {new Date().getFullYear()} Union County Community Arts Council. All rights reserved.</p>
      </div>
    </footer>
  );
}
