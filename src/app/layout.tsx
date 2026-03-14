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
    default: "Union County Arts Council",
    template: "%s | Union County Arts Council",
  },
  description:
    "Union County Arts Council is a nonprofit arts organization advancing creative expression through exhibitions, workshops, youth programs, and community cultural events.",
  metadataBase: new URL("https://ucac.example.org"),
  openGraph: {
    title: "Union County Arts Council",
    description: "Rooted in community. Driven by art.",
    type: "website",
    url: "https://ucac.example.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Union County Arts Council",
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
