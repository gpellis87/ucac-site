export type Grant = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  body: string[];
  applyUrl?: string;
  zeffyUrl: string;
  active: boolean;
};

export const grants: Grant[] = [
  {
    slug: "barbara-faulk-educators-grant",
    eyebrow: "Named Grant",
    title: "Barbara Faulk Educators Grant",
    description:
      "Honoring 35 years of leadership and a lifelong passion for arts in education. This grant supports classroom teachers and programs serving students across Union County.",
    body: [
      "I would like to take a moment to celebrate Barbara Faulk. Barbara was with the Arts Council for 35 years and served as Executive Director from 1991 until she retired in 2022. She was a force of nature, a champion of the arts, passionate about building this community.",
      "She was like the salt and butter on the baked potato — full of flavor, turning something ordinary into something extraordinary. She understood that children are our future. Barbara had a passion for arts in education, for supporting classroom teachers, and for serving the under-served. Through her passion, support, and serving heart she made Union County a wonderful place to live and grow up.",
      "For her legacy to be remembered for generations to come, we are proud to honor Barbara Faulk by offering the Barbara Faulk Educators Grant — so that her energy and love of life will continue always.",
    ],
    applyUrl: "https://docs.google.com/forms/d/16b09a9F-4dKztDUGXEIiXIxwutQ6qLRoz3MC9VjCVjw/preview",
    zeffyUrl: "https://www.zeffy.com/en-US/donation-form/barbara-faulk-educators-grant",
    active: true,
  },
];

export function getActiveGrants(): Grant[] {
  return grants.filter((grant) => grant.active);
}

export function getGrantBySlug(slug: string): Grant | undefined {
  return grants.find((grant) => grant.slug === slug);
}
