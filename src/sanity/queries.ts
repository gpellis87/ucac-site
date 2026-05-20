import { getClient } from "./client";
import type { Exhibit } from "@/data/exhibits";
import type { Artist } from "@/data/artists";

export type Announcement = {
  title: string;
  slug: string;
  eyebrow: string | null;
  description: string;
  body: string | null;
  publishedAt: string;
  ctaOne: { label: string; url: string } | null;
  ctaTwo: { label: string; url: string } | null;
  flyerImage: string | null;
  flyerPdf: string | null;
};

const EXHIBIT_FIELDS = `
  "id": _id,
  "slug": slug.current,
  title,
  status,
  description,
  "details": coalesce(details, []),
  "location": coalesce(location, "UCCAC Gallery"),
  "address": coalesce(address, "300 North Hayne Street, Monroe, NC 28112"),
  receptionDate,
  receptionTime,
  submissionDeadline,
  submissionUrl,
  "imageUrl": heroImage.asset->url,
  "flyerPath": flyerFile.asset->url,
  "videoPath": videoUrl,
  "mainVideoPath": coalesce(mainVideo.asset->url, videoUrl),
  "additionalVideoPaths": additionalVideos[defined(asset)].asset->url,
  "images": images[defined(asset)]{ "url": asset->url, "filename": asset->originalFilename },
  "tags": coalesce(tags, []),
  "presentedBy": coalesce(presentedBy, []),
  callToAction,
  "qrCodeUrl": qrCode.asset->url
`;

const STATUS_ORDER: Record<string, number> = {
  "now-on-view": 0,
  "opening-soon": 1,
  "call-for-artists": 2,
  "archived": 3,
};

export async function getExhibits(): Promise<Exhibit[]> {
  const client = getClient();
  if (!client) return [];
  const results = await client.fetch<Exhibit[]>(
    `*[_type == "exhibit" && status != "archived"] { ${EXHIBIT_FIELDS} }`
  );
  return results.sort(
    (a, b) => (STATUS_ORDER[a.status] ?? 9) - (STATUS_ORDER[b.status] ?? 9)
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

export async function getMostRecentArchivedExhibit(): Promise<Exhibit | null> {
  const client = getClient();
  if (!client) return null;
  const results = await client.fetch<Exhibit[]>(
    `*[_type == "exhibit" && status == "archived"] | order(_createdAt desc) [0..0] { ${EXHIBIT_FIELDS} }`
  );
  return results[0] ?? null;
}

export async function getArchivedExhibits(): Promise<Exhibit[]> {
  const client = getClient();
  if (!client) return [];
  return client.fetch<Exhibit[]>(
    `*[_type == "exhibit" && status == "archived"] | order(_createdAt desc) { ${EXHIBIT_FIELDS} }`
  );
}

export async function getExhibitSlugs(): Promise<string[]> {
  const client = getClient();
  if (!client) return [];
  const results = await client.fetch<{ slug: string }[]>(
    `*[_type == "exhibit"] { "slug": slug.current }`
  );
  return results.map((r) => r.slug);
}

// ── Announcement queries ──────────────────────────────────────────────────────

const ANNOUNCEMENT_FILTER = `_type == "announcement" && active == true && (!defined(expiresAt) || expiresAt > $today)`;
const ANNOUNCEMENT_FIELDS = `title, "slug": slug.current, eyebrow, description, body, publishedAt, ctaOne { label, url }, ctaTwo { label, url }, "flyerImage": flyer.asset->url, "flyerPdf": flyerPdf.asset->url`;

export async function getAnnouncements(): Promise<Announcement[]> {
  const client = getClient();
  if (!client) return [];
  const today = new Date().toISOString().split("T")[0];
  return client.fetch<Announcement[]>(
    `*[${ANNOUNCEMENT_FILTER}] | order(publishedAt desc) [0...3] { ${ANNOUNCEMENT_FIELDS} }`,
    { today }
  );
}

export async function getAllAnnouncements(): Promise<Announcement[]> {
  const client = getClient();
  if (!client) return [];
  const today = new Date().toISOString().split("T")[0];
  return client.fetch<Announcement[]>(
    `*[${ANNOUNCEMENT_FILTER}] | order(publishedAt desc) { ${ANNOUNCEMENT_FIELDS} }`,
    { today }
  );
}

// ── Artist queries ────────────────────────────────────────────────────────────

const ARTIST_FIELDS = `
  "id": _id,
  "slug": slug.current,
  firstName,
  lastName,
  medium,
  city,
  state,
  bio,
  email,
  website,
  instagram,
  facebook,
  "portraitUrl": portrait.asset->url,
  "workImages": workImages[].asset->url
`;

export async function getArtists(): Promise<Artist[]> {
  const client = getClient();
  if (!client) return [];
  return client.fetch<Artist[]>(
    `*[_type == "artist"] | order(lastName asc, firstName asc) { ${ARTIST_FIELDS} }`
  );
}

export async function getArtistBySlug(slug: string): Promise<Artist | null> {
  const client = getClient();
  if (!client) return null;
  const results = await client.fetch<Artist[]>(
    `*[_type == "artist" && slug.current == $slug][0..0] { ${ARTIST_FIELDS} }`,
    { slug }
  );
  return results[0] ?? null;
}

export async function getArtistSlugs(): Promise<string[]> {
  const client = getClient();
  if (!client) return [];
  const results = await client.fetch<{ slug: string }[]>(
    `*[_type == "artist"] { "slug": slug.current }`
  );
  return results.map((r) => r.slug);
}
