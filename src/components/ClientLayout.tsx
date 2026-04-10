"use client";

import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell min-h-screen bg-charcoal text-parchment">
      <SiteNav />
      <main className="pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}
