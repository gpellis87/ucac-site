import Link from "next/link";
import { Facebook } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-parchment/20 bg-[#121212] py-16 text-parchment">
      <div className="section-pad mx-auto grid max-w-[1500px] gap-10 md:grid-cols-3">
        <div>
          <p className="display text-4xl">UCCAC</p>
          <p className="mt-3 max-w-xs text-sm text-parchment/75">
            Union County Community Arts Council champions creative expression through education, exhibitions, and community projects.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61574355290119"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="mt-4 inline-flex items-center gap-2 border border-parchment/30 px-3 py-2 text-xs uppercase tracking-[0.14em] transition hover:border-terracotta hover:text-terracotta"
          >
            <Facebook size={14} /> Facebook
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-parchment/70">Quick Links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/" className="text-parchment/80 transition hover:text-parchment">Home</Link>
            <Link href="/exhibits" className="text-parchment/80 transition hover:text-parchment">Exhibitions</Link>
            <Link href="/artists" className="text-parchment/80 transition hover:text-parchment">Artists</Link>
            <Link href="/contact" className="text-parchment/80 transition hover:text-parchment">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-parchment/70">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-parchment/85">
            <p>300 North Hayne Street, Monroe, NC 28111</p>
            <p>(704) 283-2784</p>
            <p>events@unionarts.org</p>
            <p>Mon–Fri: 8:30 AM – 4:30 PM</p>
            <p>Sat–Sun: Closed</p>
          </div>
        </div>
      </div>
      <div className="section-pad mx-auto mt-12 max-w-[1500px] border-t border-parchment/20 pt-6 text-xs text-parchment/60">
        <p>Union County Community Arts Council is a 501(c)(3) nonprofit organization.</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Union County Community Arts Council. All rights reserved.</p>
      </div>
    </footer>
  );
}
