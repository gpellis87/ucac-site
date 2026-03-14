import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const display = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Union County Community Arts Council",
    template: "%s | Union County Community Arts Council",
  },
  description:
    "Union County Community Arts Council is a nonprofit arts organization advancing creative expression through exhibitions, workshops, youth programs, and community cultural events.",
  metadataBase: new URL("https://uccac.example.org"),
  openGraph: {
    title: "Union County Community Arts Council",
    description: "Rooted in community. Driven by art.",
    type: "website",
    url: "https://uccac.example.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Union County Community Arts Council",
    description: "Rooted in community. Driven by art.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} grain`}>
        <div className="page-shell min-h-screen bg-charcoal text-parchment">
          <SiteNav />
          <main className="pt-20">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
