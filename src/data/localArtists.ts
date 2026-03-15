export interface LocalArtist {
  id: number;
  name: string;
  specialty: string;
  city: string;
  email: string;
  website: string;
  social: string;
  bio: string;
}

export const localArtists: LocalArtist[] = [
  {
    id: 1,
    name: "Tracy Price",
    specialty: "Contemporary Painting",
    city: "Monroe, NC",
    email: "tracyprice.art@example.com",
    website: "https://example.com/tracy-price",
    social: "@tracypaintsstudio",
    bio: "Layered abstract paintings inspired by Southern landscapes and neighborhood memory.",
  },
  {
    id: 2,
    name: "Lena Martinez",
    specialty: "Ceramics",
    city: "Wingate, NC",
    email: "lena.clay@example.com",
    website: "https://example.com/lena-martinez",
    social: "@lenathrownsclay",
    bio: "Functional and sculptural ceramics rooted in natural textures and local clay traditions.",
  },
  {
    id: 3,
    name: "Micah Robinson",
    specialty: "Photography",
    city: "Indian Trail, NC",
    email: "micahframes@example.com",
    website: "https://example.com/micah-robinson",
    social: "@micahframes",
    bio: "Documentary portrait artist focused on local culture, youth, and creative communities.",
  },
  {
    id: 4,
    name: "Ari Kim",
    specialty: "Public Murals",
    city: "Monroe, NC",
    email: "ari.murals@example.com",
    website: "https://example.com/ari-kim",
    social: "@arikimwalls",
    bio: "Collaborative muralist creating large-scale public artworks with schools and neighborhoods.",
  },
  {
    id: 5,
    name: "Caleb Thompson",
    specialty: "Mixed Media",
    city: "Marshville, NC",
    email: "calebstudio@example.com",
    website: "https://example.com/caleb-thompson",
    social: "@calebmixedmedia",
    bio: "Combines collage, drawing, and found materials to explore identity and place.",
  },
  {
    id: 6,
    name: "Jordan Ellis",
    specialty: "Fiber Arts",
    city: "Monroe, NC",
    email: "jordanfiber@example.com",
    website: "https://example.com/jordan-ellis",
    social: "@threadbyjordan",
    bio: "Textile installations and wearable work celebrating craft, lineage, and color rhythm.",
  },
];
