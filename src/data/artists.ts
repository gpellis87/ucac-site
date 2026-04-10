export interface Artist {
  id: number;
  slug: string;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  email: string;
  website?: string;
  instagram?: string;
  medium: string;
  bio?: string;
  portraitUrl: string;
  workImages: string[];
}

export const artists: Artist[] = [
  {
    id: 1,
    slug: "manasee-gokhale",
    firstName: "Manasee",
    lastName: "Gokhale",
    city: "Weddington",
    state: "NC",
    email: "manaseegokhale@gmail.com",
    instagram: "looshulove_art",
    medium: "Acrylic on Canvas & Paper",
    bio: "I am a circumstantial artist. While my path wasn't paved with formal intent, art has always been the quiet undercurrent of my life. I've found myself instinctively drawn to the intersection of design and form—observing how a single piece can redefine a room or shift the weight of an emotion. It is a subtle, persistent presence, woven into the fabric of our daily existence whether we acknowledge it or not. For me, the work is about finally giving a name to those silent influences.\n\nMy inspiration is rooted in the earth. I find a profound, grounding energy in Indian traditional and tribal art—specifically Gond—where every pattern feels like a heartbeat from the past. While my background in formal calligraphy taught me the discipline of the line, it is the ancestral spirit of tribal art that gives those lines soul. To me, art is a bridge between the ancient and the modern, a way to translate the raw beauty of nature into a visual language we can all feel.",
    portraitUrl: "/artists/manasee-gokhale-portrait.jpeg",
    workImages: ["/artists/manasee-gokhale-work.jpeg"],
  },
  {
    id: 2,
    slug: "susan-bucher",
    firstName: "Susan",
    lastName: "Bucher",
    city: "Charlotte",
    state: "NC",
    email: "Sbucher423@gmail.com",
    website: "https://susan-bucher.pixels.com",
    medium: "Oil",
    bio: "I was born in 1959 and raised in San Antonio, TX. I wanted to be an art major in college but, on the advice of my family, decided to become a teacher. After earning a BS in Elementary Education from Southwest Texas State University, I began my career as a kindergarten teacher—incorporating art into the curriculum, on bulletin boards, and in painting backdrops for school plays.\n\nIn 1984 I moved to Albany, NY with my husband and started a family. With the advent of the home computer, I pursued a career as a graphic designer—a job I held for more than 30 years. I retired in 2021 and have begun painting again. I am a self-taught artist who has dabbled in watercolor, acrylic, and oil painting. I concentrate on landscapes of places I have visited in my travels, florals, and the occasional portrait.",
    portraitUrl: "/artists/susan-bucher-portrait.jpeg",
    workImages: ["/artists/susan-bucher-work.jpeg"],
  },
  {
    id: 3,
    slug: "terry-ruhs",
    firstName: "Terry",
    lastName: "Ruhs",
    city: "Waxhaw",
    state: "NC",
    email: "ruhsterry@gmail.com",
    website: "https://nearlyfineart.com",
    medium: "Oil / Acrylic",
    bio: "Former Indiana school teacher turned NC artist. Has belonged to the Mint Hill Arts Council, Waxhaw Arts Council, Matthews Artists Guild, Guild of Charlotte Artists, and the Union County Arts Council.",
    portraitUrl: "/artists/terry-ruhs-portrait.jpg",
    workImages: ["/artists/terry-ruhs-work.jpeg"],
  },
  {
    id: 4,
    slug: "sue-ruhs",
    firstName: "Sue",
    lastName: "Ruhs",
    city: "Waxhaw",
    state: "NC",
    email: "sueruhs@gmail.com",
    website: "https://nearlyfineart.com",
    medium: "Fabric Collage",
    bio: "Retired music teacher from Indiana. I'm currently teaching fabric collage through Matthews Parks and Rec.",
    portraitUrl: "/artists/sue-ruhs-portrait.jpg",
    workImages: ["/artists/sue-ruhs-work.jpg"],
  },
  {
    id: 5,
    slug: "cindy-grano",
    firstName: "Cindy",
    lastName: "Grano",
    city: "Monroe",
    state: "NC",
    email: "Granoart@gmail.com",
    website: "https://www.granoartstudio.com",
    medium: "Oil",
    bio: "I am a self-taught oil painter, endlessly inspired by the beautiful and magical solitude of nature. My work is deeply influenced by the breathtaking natural world around us. Whether it be landscapes or seascapes, I invite viewers to experience quiet moments of peace, mystery, and introspection. At times, I paint intuitively, allowing each piece to evolve and develop gradually on the canvas. This organic process creates authentic, almost dreamlike atmospheric landscapes filled with timeless wonder.",
    portraitUrl: "/artists/cindy-grano-portrait.jpg",
    workImages: ["/artists/cindy-grano-work.jpg"],
  },
];
