"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/artists", label: "Artists" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-parchment/15 bg-charcoal/92 backdrop-blur-xl shadow-[0_8px_28px_rgba(0,0,0,0.28)]">
        <div className="section-pad mx-auto flex h-20 max-w-[1500px] items-center justify-between">
          <Link href="/" className="group">
            <div className="display text-[1.9rem] tracking-tight text-parchment transition-colors group-hover:text-terracotta">
              UCCAC
            </div>
            <div className="text-[0.58rem] uppercase tracking-[0.22em] text-parchment/85">
              Union County Community Arts Council
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline text-sm uppercase tracking-[0.14em] ${
                  pathname === link.href ? "text-terracotta" : "text-parchment/95"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open menu"
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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[70] bg-charcoal"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,84,42,0.22),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(103,115,136,0.3),transparent_45%)]" />
            <div className="relative flex h-full flex-col justify-between p-8">
              <div className="flex justify-end">
                <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="border border-parchment/30 p-2 text-parchment">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * index }}
                  >
                    <Link
                      href={link.href}
                      className="display text-4xl text-parchment"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <p className="text-sm text-parchment/70">Rooted in community. Driven by art.</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
