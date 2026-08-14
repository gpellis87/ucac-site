"use client";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell min-h-screen bg-[color:var(--bg)] text-parchment">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition focus:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Skip to main content
      </a>
      <SiteNav />
      <main id="main-content" className="pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}
