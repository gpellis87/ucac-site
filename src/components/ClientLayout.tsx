"use client";

import { usePathname } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isComingSoon = pathname === "/";

  if (isComingSoon) {
    return <>{children}</>;
  }

  return (
    <div className="page-shell min-h-screen bg-charcoal text-parchment">
      <SiteNav />
      <main className="pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}
