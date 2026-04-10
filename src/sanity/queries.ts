import { getClient } from "./client";
import type { Exhibit } from "@/data/exhibits";

const EXHIBIT_FIELDS = `
  "id": _id,
  "slug": slug.current,
  title,
  status,
  description,
  "details": coalesce(details, []),
  "location": coalesce(location, "UCCAC Gallery"),
  "address": coalesce(address, "300 North Hayne Street, Monroe, NC 28111"),
  receptionDate,
  receptionTime,
  submissionDeadline,
  submissionUrl,
  "imageUrl": heroImage.asset->url,
  "flyerPath": flyerFile.asset->url,
  "videoPath": videoUrl,
  "images": images[].asset->url,
  "tags": coalesce(tags, []),
  "presentedBy": coalesce(presentedBy, []),
  callToAction
`;

export async function getExhibits(): Promise<Exhibit[]> {
  const client = getClient();
  if (!client) return [];
  return client.fetch(
    `*[_type == "exhibit" && status != "archived"] | order(_createdAt desc) { ${EXHIBIT_FIELDS} }`
  );
}

export async function getExhibitBySlug(slug: string): Promise<Exhibit | null> {
  const client = getClient();
  if (!client) return null;
  const results = await client.fetch<Exhibit[]>(
    `*[_type == "exhibit" && slug.current == $slug][0..0] { ${EXHIBIT_FIELDS} }`,
    { slug }
  );
  return results[0] ?? null;
}

export async function getExhibitSlugs(): Promise<string[]> {
  const client = getClient();
  if (!client) return [];
  const results = await client.fetch<{ slug: string }[]>(
    `*[_type == "exhibit" && status != "archived"] { "slug": slug.current }`
  );
  return results.map((r) => r.slug);
}
