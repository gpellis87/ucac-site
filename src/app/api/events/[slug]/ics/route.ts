import { NextResponse } from "next/server";
import { events } from "@/data/events";
import { toIcsDateStamp } from "@/lib/event-utils";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const event = events.find((item) => item.slug === params.slug);
  if (!event) return NextResponse.json({ error: "Event not found" }, { status: 404 });

  const [startLabel, endLabel] = event.time.split(" - ");
  const start = toIcsDateStamp(event.date, startLabel);
  const end = toIcsDateStamp(event.date, endLabel ?? startLabel);

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//UCAC//Events//EN",
    "BEGIN:VEVENT",
    `UID:${event.slug}@ucac.example.org`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${event.title}`,
    `LOCATION:${event.address}`,
    `DESCRIPTION:${event.description}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${event.slug}.ics"`,
    },
  });
}
