import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventDetailClient from "@/components/EventDetailClient";
import { events } from "@/data/events";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = events.find((item) => item.slug === params.slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: event.title,
    description: `${event.title} at ${event.location} on ${event.date}.`,
  };
}

export default function EventDetailPage({ params }: Props) {
  const event = events.find((item) => item.slug === params.slug);
  if (!event) notFound();
  return <EventDetailClient event={event} />;
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}
