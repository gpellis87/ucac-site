export type ExhibitStatus = "now-on-view" | "opening-soon" | "call-for-artists";

export interface Exhibit {
  id: number;
  slug: string;
  title: string;
  status: ExhibitStatus;
  description: string;
  details: string[];
  location: string;
  address: string;
  galleryHours: string;
  receptionDate?: string;
  receptionTime?: string;
  submissionDeadline?: string;
  submissionUrl?: string;
  /** Replace with a real image URL when gallery photos are available */
  imageUrl: string;
  /** Path relative to /public, e.g. "/flyers/spring-art-show-2026.pdf" */
  flyerPath?: string;
  /** Path relative to /public for a teaser/promo video */
  videoPath?: string;
  tags: string[];
  presentedBy: string[];
  callToAction?: { label: string; href: string };
}

export const exhibits: Exhibit[] = [
  {
    id: 1,
    slug: "spring-art-show-2026",
    title: "2026 Spring Art Show",
    status: "now-on-view",
    description:
      "Spring artwork from artists across Union and surrounding counties is currently hanging in the UCCAC gallery. Come experience a vibrant collection celebrating the season through paint, mixed media, and more.",
    details: [
      "Works from regional artists in Union and surrounding counties.",
      "Opening reception: Friday, April 10 from 5:30–9:00 PM — connect with artists, enjoy refreshments and live music.",
      "Part of the Art Walk weekend in Downtown Monroe.",
    ],
    location: "UCCAC Gallery",
    address: "300 North Hayne Street, Monroe, NC 28111",
    galleryHours: "Mon–Thu 10am–4pm · Selected Sat 10am–2pm",
    receptionDate: "2026-04-10",
    receptionTime: "5:30 PM – 9:00 PM",
    // TODO: Replace with actual gallery photo once available
    imageUrl:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=1600&q=80",
    flyerPath: "/flyers/spring-art-show-2026.pdf",
    videoPath: "/videos/spring-art-show-2026.mov",
    tags: ["Painting", "Mixed Media", "Regional Artists", "Reception"],
    presentedBy: [
      "Union County Community Arts Council",
      "North Carolina Arts Council",
    ],
  },
  {
    id: 2,
    slug: "student-artist-showcase-2026",
    title: "2026 Union County Student Artist Showcase",
    status: "opening-soon",
    description:
      "Celebrating the finest young artistic talent from Union County Public Schools. Finalist student artists from across the county will have their work displayed at the UCCAC gallery.",
    details: [
      "Selected finalist students from Union County Public Schools.",
      "Drop-in celebration: Sunday, May 3 from 2:00–4:00 PM — all are welcome.",
      "Presented in partnership with Union County Public Schools, Union Power Cooperative, and the Union County Community Foundation.",
    ],
    location: "UCCAC Gallery",
    address: "300 North Hayne Street, Monroe, NC 28111",
    galleryHours: "Mon–Thu 10am–4pm · Selected Sat 10am–2pm",
    receptionDate: "2026-05-03",
    receptionTime: "2:00 PM – 4:00 PM (Drop-In)",
    // TODO: Replace with actual student artwork photo once available
    imageUrl:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=80",
    flyerPath: "/flyers/student-artist-showcase-2026.pdf",
    tags: ["Youth", "Student Art", "Education", "Drop-In"],
    presentedBy: [
      "Union County Community Arts Council",
      "North Carolina Arts Council",
      "Union County Community Foundation",
      "Union Power Cooperative",
      "Union County Public Schools",
    ],
  },
  {
    id: 3,
    slug: "veterans-spouses-arts-exhibition-2026",
    title: "2026 Veterans & Spouses Arts Exhibition",
    status: "call-for-artists",
    description:
      "The Second Annual Veterans & Spouses Arts Exhibition honors the creative voices of those who served. Open exclusively to military veterans and their spouses, this exhibition embraces the belief that through the creative process, healing can take place.",
    details: [
      "Open to military veterans and spouses 18 years of age or older.",
      "Artists may submit up to two (2) pieces — fine art, decorative, functional, or hand crafted.",
      "Submitted artwork must be the original work of a singular artist.",
      "Submissions due Friday, May 26. Enter via the Google Form linked below.",
    ],
    location: "UCCAC Gallery",
    address: "300 North Hayne Street, Monroe, NC 28111",
    galleryHours: "Mon–Thu 10am–4pm · Selected Sat 10am–2pm",
    submissionDeadline: "2026-05-26",
    submissionUrl: "https://bit.ly/veteransentryform",
    // TODO: Replace with actual exhibition photo once available
    imageUrl:
      "https://images.unsplash.com/photo-1447433819943-74a20887a81e?auto=format&fit=crop&w=1600&q=80",
    flyerPath: "/flyers/veterans-spouses-exhibition-2026.pdf",
    tags: ["Veterans", "Military Spouses", "Call for Artists", "Second Annual"],
    presentedBy: [
      "Union County Community Arts Council",
      "North Carolina Arts Council",
      "The Rubino Veterans Art Center",
    ],
    callToAction: {
      label: "Submit Your Work",
      href: "https://bit.ly/veteransentryform",
    },
  },
];

export const statusLabel: Record<ExhibitStatus, string> = {
  "now-on-view": "Now On View",
  "opening-soon": "Opening Soon",
  "call-for-artists": "Call for Artists",
};
