"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, LayoutGrid, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "@/components/EventCard";
import { events, eventCategories, EventCategory } from "@/data/events";
import { eventCategoryBorder, eventCategoryStyle, monthLabel } from "@/lib/event-utils";

type ViewMode = "calendar" | "cards";
type FilterMode = "All" | EventCategory;

function sameDay(dateA: Date, dateB: Date): boolean {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
}

export default function EventsExplorer() {
  const [view, setView] = useState<ViewMode>("calendar");
  const [filter, setFilter] = useState<FilterMode>("All");
  const [currentMonth, setCurrentMonth] = useState(new Date("2026-04-01"));

  const filtered = useMemo(
    () => (filter === "All" ? events : events.filter((event) => event.category === filter)),
    [filter],
  );

  const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const startOffset = monthStart.getDay();
  const totalSlots = Math.ceil((startOffset + monthEnd.getDate()) / 7) * 7;

  const days = Array.from({ length: totalSlots }).map((_, index) => {
    const dayNumber = index - startOffset + 1;
    const current = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), dayNumber);
    const inMonth = dayNumber > 0 && dayNumber <= monthEnd.getDate();
    const dayEvents = filtered.filter((event) => sameDay(new Date(event.date), current));
    return { current, inMonth, dayEvents };
  });

  return (
    <section className="section-pad pb-20">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="sr-only">Browse Events</h2>
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {eventCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={`border px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                  filter === category
                    ? category === "All"
                      ? "border-navy bg-navy text-white"
                      : `border-transparent ${eventCategoryStyle[category]}`
                    : "border-parchment/30 text-parchment/80 hover:border-navy"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setView("calendar")}
              aria-pressed={view === "calendar"}
              className={`inline-flex items-center gap-2 border px-4 py-2 text-xs uppercase tracking-[0.14em] ${
                view === "calendar" ? "border-navy text-navy" : "border-parchment/30 text-parchment/80"
              }`}
            >
              <CalendarDays size={15} /> Calendar
            </button>
            <button
              type="button"
              onClick={() => setView("cards")}
              aria-pressed={view === "cards"}
              className={`inline-flex items-center gap-2 border px-4 py-2 text-xs uppercase tracking-[0.14em] ${
                view === "cards" ? "border-navy text-navy" : "border-parchment/30 text-parchment/80"
              }`}
            >
              <LayoutGrid size={15} /> Card View
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "calendar" ? (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="panel-dark p-5"
            >
              <div className="mb-5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                  className="border border-parchment/30 p-2 transition hover:border-navy hover:bg-navy/10"
                  aria-label="Previous month"
                >
                  <ChevronLeft size={16} />
                </button>
                <h3 className="display text-3xl">
                  {monthLabel(currentMonth)}
                  <span className="sr-only" aria-live="polite">
                    Showing events for {monthLabel(currentMonth)}
                  </span>
                </h3>
                <button
                  type="button"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                  className="border border-parchment/30 p-2 transition hover:border-navy hover:bg-navy/10"
                  aria-label="Next month"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
              <div className="calendar-grid mb-2 gap-2 text-center text-[0.75rem] uppercase tracking-[0.16em] text-parchment/60">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>
              <div className="calendar-grid gap-2">
                {days.map(({ current, inMonth, dayEvents }) => (
                  <div
                    key={current.toISOString()}
                    className={`min-h-[98px] border p-2 transition ${
                      inMonth
                        ? "border-parchment/20 bg-[rgb(var(--theme-surface)_/_0.72)] hover:border-navy/40 hover:bg-[rgb(var(--theme-surface-strong)_/_0.9)]"
                        : "border-parchment/10 bg-[rgb(var(--theme-bg-alt)_/_0.5)] text-parchment/60"
                    }`}
                  >
                    <p className={`text-xs ${dayEvents.length > 0 && inMonth ? "text-navy" : ""}`}>{current.getDate()}</p>
                    <div className="mt-2 space-y-1">
                      {dayEvents.slice(0, 2).map((event) => (
                        <Link
                          key={event.id}
                          href={`/events/${event.slug}`}
                          className={`block truncate border-l-2 pl-2 text-[0.75rem] text-parchment/85 hover:text-navy ${eventCategoryBorder[event.category]}`}
                        >
                          {event.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
