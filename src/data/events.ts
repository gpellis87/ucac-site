export type EventCategory =
  | "Exhibition"
  | "Workshop"
  | "Performance"
  | "Gala"
  | "Community Event";

export interface UcacEvent {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  address: string;
  category: EventCategory;
  imageUrl: string;
  ticketPrice: string;
  organizer: string;
  tags: string[];
}

export const events: UcacEvent[] = [
  {
    id: 1,
    slug: "annual-spring-gala",
    title: "Annual Spring Gala",
    description:
      "An evening of live performance, curated installations, and community giving supporting arts education across Union County.",
    date: "2026-04-18",
    time: "6:30 PM - 10:00 PM",
    location: "Monroe Civic Arts Hall",
    address: "120 Main Street, Monroe, NC 28112",
    category: "Gala",
    imageUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    ticketPrice: "$125",
    organizer: "UCAC Development Committee",
    tags: ["Fundraiser", "Formal", "Live Music"],
  },
  {
    id: 2,
    slug: "youth-art-workshop-series",
    title: "Youth Art Workshop Series",
    description:
      "Hands-on Saturday workshops where students explore painting, collage, and mixed media with local teaching artists.",
    date: "2026-04-12",
    time: "10:00 AM - 1:00 PM",
    location: "UCAC Studio Annex",
    address: "88 Gallery Lane, Monroe, NC 28110",
    category: "Workshop",
    imageUrl:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=80",
    ticketPrice: "Free Event",
    organizer: "UCAC Education Team",
    tags: ["Youth", "Education", "Hands-On"],
  },
  {
    id: 3,
    slug: "local-artist-spotlight-exhibition",
    title: "Local Artist Spotlight Exhibition",
    description:
      "A rotating showcase celebrating contemporary painters and sculptors shaping Union County's visual identity.",
    date: "2026-05-02",
    time: "5:00 PM - 8:00 PM",
    location: "Union Contemporary Gallery",
    address: "14 Franklin Street, Monroe, NC 28112",
    category: "Exhibition",
    imageUrl:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1600&q=80",
    ticketPrice: "Free Event",
    organizer: "UCAC Curatorial Team",
    tags: ["Exhibition", "Opening Night", "Local Artists"],
  },
  {
    id: 4,
    slug: "mural-dedication-ceremony",
    title: "Mural Dedication Ceremony",
    description:
      "Join us as we unveil Union County's newest public mural honoring community resilience and shared stories.",
    date: "2026-05-09",
    time: "4:00 PM - 6:00 PM",
    location: "Downtown Monroe Arts District",
    address: "201 N Hayne Street, Monroe, NC 28112",
    category: "Community Event",
    imageUrl:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1600&q=80",
    ticketPrice: "Free Event",
    organizer: "UCAC Public Art Initiative",
    tags: ["Public Art", "Outdoors", "Community"],
  },
  {
    id: 5,
    slug: "photography-masterclass",
    title: "Photography Masterclass",
    description:
      "An advanced session on visual storytelling, composition, and post-production with award-winning photographers.",
    date: "2026-05-16",
    time: "1:00 PM - 4:00 PM",
    location: "UCAC Learning Loft",
    address: "45 Church Street, Monroe, NC 28112",
    category: "Workshop",
    imageUrl:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1600&q=80",
    ticketPrice: "$45",
    organizer: "UCAC Learning Studio",
    tags: ["Photography", "Masterclass", "Creative Skills"],
  },
  {
    id: 6,
    slug: "community-art-fair",
    title: "Community Art Fair",
    description:
      "A full-day art market with local makers, live demos, and family-friendly activities throughout the district.",
    date: "2026-06-06",
    time: "11:00 AM - 6:00 PM",
    location: "Union Commons Plaza",
    address: "9 Civic Plaza, Monroe, NC 28112",
    category: "Community Event",
    imageUrl:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1600&q=80",
    ticketPrice: "Free Event",
    organizer: "UCAC Community Partnerships",
    tags: ["Family", "Vendors", "Live Demos"],
  },
  {
    id: 7,
    slug: "film-and-fine-arts-night",
    title: "Film & Fine Arts Night",
    description:
      "A curated screening paired with panel discussion and gallery pop-up celebrating independent creators.",
    date: "2026-06-13",
    time: "7:00 PM - 9:30 PM",
    location: "Monroe Art House Theater",
    address: "333 Lancaster Avenue, Monroe, NC 28112",
    category: "Performance",
    imageUrl:
      "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=1600&q=80",
    ticketPrice: "$18",
    organizer: "UCAC Media Arts Circle",
    tags: ["Film", "Panel", "Independent Art"],
  },
  {
    id: 8,
    slug: "board-open-house-volunteer-session",
    title: "Board Open House & Volunteer Info Session",
    description:
      "Meet board members, learn how UCAC operates, and discover volunteer roles that fit your skills and interests.",
    date: "2026-04-28",
    time: "6:00 PM - 7:30 PM",
    location: "UCAC Main Office",
    address: "72 Arts Way, Monroe, NC 28112",
    category: "Community Event",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    ticketPrice: "Free Event",
    organizer: "UCAC Board of Directors",
    tags: ["Volunteer", "Info Session", "Board"],
  },
  {
    id: 9,
    slug: "summer-sculpture-walk-preview",
    title: "Summer Sculpture Walk Preview",
    description:
      "Preview this season's outdoor sculpture installations before the official citywide public launch.",
    date: "2026-06-20",
    time: "5:30 PM - 7:00 PM",
    location: "Heritage Greenway",
    address: "101 Greenway Loop, Monroe, NC 28112",
    category: "Exhibition",
    imageUrl:
      "https://images.unsplash.com/photo-1473447198193-5e26c7ffdc27?auto=format&fit=crop&w=1600&q=80",
    ticketPrice: "Free Event",
    organizer: "UCAC Public Art Initiative",
    tags: ["Sculpture", "Outdoor", "Preview"],
  },
  {
    id: 10,
    slug: "artist-grant-info-night",
    title: "Artist Grant Info Night",
    description:
      "Learn about grant opportunities, application strategy, and review criteria in this practical guidance session.",
    date: "2026-05-22",
    time: "6:30 PM - 8:00 PM",
    location: "Union County Library Auditorium",
    address: "500 N Main Street, Monroe, NC 28112",
    category: "Community Event",
    imageUrl:
      "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?auto=format&fit=crop&w=1600&q=80",
    ticketPrice: "Free Event",
    organizer: "UCAC Grants Team",
    tags: ["Grants", "Artists", "Q&A"],
  },
];

export const eventCategories: Array<"All" | EventCategory> = [
  "All",
  "Exhibition",
  "Workshop",
  "Performance",
  "Gala",
  "Community Event",
];
