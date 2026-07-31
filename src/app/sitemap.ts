import type { MetadataRoute } from "next";
import { events } from "@/data/events";
import { getExhibitSlugs, getArtistSlugs } from "@/sanity/queries";

const BASE_URL = "https://unionarts.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [exhibitSlugs, artistSlugs] = await Promise.all([
    getExhibitSlugs(),
    getArtistSlugs(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                         changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,              changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/exhibits`,           changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/events`,             changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/artists`,            changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/announcements`,      changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/membership`,         changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/donate`,             changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE_URL}/support`,            changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/grants`,             changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`,            changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`,     changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/accessibility`,      changeFrequency: "yearly",  priority: 0.3 },
  ];

  const exhibitRoutes: MetadataRoute.Sitemap = exhibitSlugs.map((slug) => ({
    url: `${BASE_URL}/exhibits/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const artistRoutes: MetadataRoute.Sitemap = artistSlugs.map((slug) => ({
    url: `${BASE_URL}/artists/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const eventRoutes: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${BASE_URL}/events/${event.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...exhibitRoutes, ...artistRoutes, ...eventRoutes];
}
