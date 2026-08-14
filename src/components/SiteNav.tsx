"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/lib/useReducedMotion";

// The logo already links home (see the <Link href="/"> below), so a
// separate "Home" entry here would be a redundant adjacent link to the
// same destination for keyboard/screen reader users.
const links = [
  { href: "/exhibits",    label: "Exhibitions" },
  { href: "/artists",     label: "Artists" },
  { href: "/support",     label: "Support" },
  { href: "/grants",      label: "Grants" },
  { href: "/contact",     label: "Contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Move focus into the drawer on open, and back to the toggle on close.
  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [open]);

  // Trap focus inside the drawer while it's open, and close on Escape.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const reduceMotion = useReducedMotion();

  return (
    <>
      <header className="theme-nav fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
        <div className="section-pad mx-auto flex h-20 max-w-[1500px] items-center justify-between">
          <Link href="/" className="group flex items-center gap-2 sm:gap-3">
            <Image
              src="/uccac-wordmark.png"
              alt="UCCAC"
              width={700}
              height={332}
              priority
              className="h-8 w-auto shrink-0 transition-opacity group-hover:opacity-80 sm:h-11"
            />
            <span aria-hidden="true" className="h-7 w-px shrink-0 bg-navy/25 sm:h-10" />
            {/* The colored "Arts" letters mirror the logo file's own per-letter treatment --
                brand/logotype text is WCAG-exempt from the contrast minimum that applies to
                body text, and sizing it up from sm: keeps it close to the "large text" bar
                anyway. Shrunk (not hidden) below sm so the org name stays on-screen on phones
                too, not just announced to screen readers. */}
            <span className="font-logo whitespace-nowrap text-[0.48rem] font-semibold uppercase leading-[1.25] tracking-[0.06em] text-navy sm:text-[0.8rem] sm:leading-[1.3] sm:tracking-[0.14em]">
              Union County
              <br />
              Community
              <br />
              <span>
                <span className="text-olive">A</span>
                <span className="text-orange">r</span>
                <span className="text-teal">t</span>
                <span className="text-purple">s</span> Council
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline text-sm uppercase tracking-[0.14em] ${
                  isActive(link.href) ? "text-navy" : "text-parchment/95"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden border border-parchment/30 p-2 text-parchment"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.aside
            ref={drawerRef}
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduceMotion ? { x: 0 } : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduceMotion ? { x: 0 } : { x: "100%" }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: "easeOut" }}
            className="theme-drawer fixed inset-0 z-[70]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(12,44,92,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(245,240,235,0.07),transparent_45%)]" />
            <div className="relative flex h-full flex-col justify-between p-8">
              <div className="flex justify-end">
                <button ref={closeButtonRef} type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="border border-parchment/30 p-2 text-parchment">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.06 * index }}
                  >
                    <Link
                      href={link.href}
                      className={`display text-4xl ${isActive(link.href) ? "text-navy" : "text-parchment"}`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="space-y-4">
                <p className="text-sm text-parchment/70">Rooted in community. Driven by art.</p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
