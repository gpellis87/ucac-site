export interface Artist {
  id: number;
  slug: string;
  firstName: string;
  lastName: string;
  email: string;
  website?: string;
  instagram?: string;
  medium: string;
  bio?: string;
  portraitUrl: string;
  workImages: string[];
}

function driveUrl(id: string) {
  return `https://lh3.googleusercontent.com/d/${id}`;
}

export const artists: Artist[] = [
  {
    id: 1,
    slug: "manasee-gokhale",
    firstName: "Manasee",
    lastName: "Gokhale",
    email: "manaseegokhale@gmail.com",
    instagram: "looshulove_art",
    medium: "Acrylic on Canvas & Paper",
    portraitUrl: driveUrl("1x_EhE3UBjDQZxIxeepL0HC270K0Zz9kB"),
    workImages: [driveUrl("1c6jqJbsOOhQr5luo2PGqnpFkPNaX_yue")],
  },
  {
    id: 2,
    slug: "susan-bucher",
    firstName: "Susan",
    lastName: "Bucher",
    email: "Sbucher423@gmail.com",
    website: "https://susan-bucher.pixels.com",
    medium: "Oil",
    portraitUrl: driveUrl("1VRFMVKDZEWhd--RLCL9T4XWt0iFsg61L"),
    workImages: [driveUrl("1VqdMYO53EPDHT8wlQu3nEG1rdd2dK1tV")],
  },
  {
    id: 3,
    slug: "terry-ruhs",
    firstName: "Terry",
    lastName: "Ruhs",
    email: "ruhsterry@gmail.com",
    website: "https://nearlyfineart.com",
    medium: "Oil / Acrylic",
    portraitUrl: driveUrl("1k3Zfb9DErxI0VZeh8yGHlb_a2rEf-RnK"),
    workImages: [driveUrl("1zG3ZUq127ngJVb9r6VxQ-CU3k7LtVn7W")],
  },
  {
    id: 4,
    slug: "sue-ruhs",
    firstName: "Sue",
    lastName: "Ruhs",
    email: "sueruhs@gmail.com",
    website: "https://nearlyfineart.com",
    medium: "Fabric Collage",
    portraitUrl: driveUrl("14EoB2TeX3zl-hEqqJc3G2D8zRS_KsoXU"),
    workImages: [driveUrl("15mvFr38SzYlD4ziD3SQEK0k3rhi0X5Fu")],
  },
];
