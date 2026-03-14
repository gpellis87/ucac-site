export interface Sponsor {
  name: string;
  tier: "Platinum" | "Gold" | "Silver" | "Bronze";
}

export const sponsors: Sponsor[] = [
  { name: "Monroe Creative Bank", tier: "Platinum" },
  { name: "Carolina Textile Works", tier: "Gold" },
  { name: "Union Health Partners", tier: "Gold" },
  { name: "Piedmont Architectural Group", tier: "Silver" },
  { name: "Benton Family Foundation", tier: "Silver" },
  { name: "Main Street Coffee Collective", tier: "Bronze" },
];
