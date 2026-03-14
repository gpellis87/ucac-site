import { UccacEvent } from "@/data/events";

export function formatEventDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function monthLabel(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function toIcsDateStamp(dateString: string, timeString: string): string {
  const [rawTime, meridiem] = timeString.split(" ");
  const [hourPart, minutePart] = rawTime.split(":");
  let hour = Number(hourPart);
  const minute = Number(minutePart);
  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;

  const base = new Date(dateString);
  base.setHours(hour, minute, 0, 0);

  return base.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function buildGoogleCalendarLink(event: UccacEvent, siteUrl: string): string {
  const start = toIcsDateStamp(event.date, event.time.split(" - ")[0]);
  const end = toIcsDateStamp(event.date, event.time.split(" - ")[1] ?? event.time.split(" - ")[0]);
  const details = `${event.description}\n\nLearn more: ${siteUrl}/events/${event.slug}`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(event.location)}`;
}
