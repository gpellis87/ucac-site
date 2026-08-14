/**
 * Append Sanity image transform params to a CDN URL.
 * Docs: https://www.sanity.io/docs/image-urls
 */
export type Hotspot = { x: number; y: number } | null | undefined;

export function sanityImg(
  url: string | null | undefined,
  {
    w,
    h,
    fit = "max",
    hotspot,
  }: { w?: number; h?: number; fit?: "max" | "crop" | "fill"; hotspot?: Hotspot }
): string {
  if (!url) return "";
  const params = new URLSearchParams({ auto: "format" });
  if (w) params.set("w", String(w));
  if (h) params.set("h", String(h));
  params.set("fit", fit);
  // Crop around the editor-set focal point instead of Sanity's default center crop.
  if (fit === "crop" && hotspot) {
    params.set("crop", "focalpoint");
    params.set("fp-x", String(hotspot.x));
    params.set("fp-y", String(hotspot.y));
  }
  return `${url}?${params.toString()}`;
}
