"use client";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AccessibilityWidget from "@/components/AccessibilityWidget";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell min-h-screen bg-[color:var(--bg)] text-parchment">
      <SiteNav />
      <main className="pt-20">{children}</main>
      <AccessibilityWidget />
      <SiteFooter />
    </div>
  );
}
