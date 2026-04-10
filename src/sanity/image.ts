/**
 * Append Sanity image transform params to a CDN URL.
 * Docs: https://www.sanity.io/docs/image-urls
 */
export function sanityImg(
  url: string | null | undefined,
  { w, h, fit = "max" }: { w?: number; h?: number; fit?: "max" | "crop" | "fill" }
): string {
  if (!url) return "";
  const params = new URLSearchParams({ auto: "format" });
  if (w) params.set("w", String(w));
  if (h) params.set("h", String(h));
  params.set("fit", fit);
  return `${url}?${params.toString()}`;
}
