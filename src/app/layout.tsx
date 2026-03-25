import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

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
        <ClientLayout>{children}</ClientLayout>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="b4c7d938-9742-46c0-8e09-f0f092e89196"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
