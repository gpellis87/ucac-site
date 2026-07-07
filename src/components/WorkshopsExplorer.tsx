"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import WorkshopCard from "@/components/WorkshopCard";
import { SessionType, Workshop, sessionTypeLabel } from "@/data/workshops";

const ALL = "All";
type Filter = typeof ALL | string;

function monthKey(dateString: string): string {
  const d = new Date(dateString);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function monthLabel(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: Filter; label: string }[];
  value: Filter;
  onChange: (value: Filter) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-[0.62rem] uppercase tracking-[0.18em] text-parchment/50">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`border px-3.5 py-1.5 text-xs uppercase tracking-[0.14em] transition ${
              value === option.value
                ? "border-terracotta bg-terracotta text-parchment"
                : "border-parchment/30 text-parchment/80 hover:border-terracotta"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function WorkshopsExplorer({ workshops }: { workshops: Workshop[] }) {
  const [category, setCategory] = useState<Filter>(ALL);
  const [length, setLength] = useState<Filter>(ALL);
  const [month, setMonth] = useState<Filter>(ALL);

  const categories = useMemo(
    () => Array.from(new Set(workshops.map((w) => w.category).filter((c): c is string => Boolean(c)))),
    [workshops]
  );

  const months = useMemo(() => {
    const seen = new Map<string, string>();
    for (const w of workshops) {
      seen.set(monthKey(w.startDate), monthLabel(w.startDate));
    }
    return Array.from(seen.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, label]) => ({ key, label }));
  }, [workshops]);

  const lengths = useMemo(
    () => Array.from(new Set(workshops.map((w) => w.sessionType).filter((s): s is SessionType => Boolean(s)))),
    [workshops]
  );

  const filtered = workshops.filter((w) => {
    if (category !== ALL && w.category !== category) return false;
    if (length !== ALL && w.sessionType !== length) return false;
    if (month !== ALL && monthKey(w.startDate) !== month) return false;
    return true;
  });

  return (
    <div>
      <div className="theme-panel mb-10 flex flex-col gap-6 border p-5">
        <FilterRow
          label="Medium"
          value={category}
          onChange={setCategory}
          options={[{ value: ALL, label: "All" }, ...categories.map((c) => ({ value: c, label: c }))]}
        />
        {lengths.length > 0 && (
          <FilterRow
            label="Workshop Length"
            value={length}
            onChange={setLength}
            options={[
              { value: ALL, label: "All" },
              ...lengths.map((l) => ({ value: l, label: sessionTypeLabel[l] })),
            ]}
          />
        )}
        {months.length > 0 && (
          <FilterRow
            label="Month"
            value={month}
            onChange={setMonth}
            options={[{ value: ALL, label: "All" }, ...months.map((m) => ({ value: m.key, label: m.label }))]}
          />
        )}
      </div>

      {filtered.length > 0 ? (
        <motion.div
          key={`${category}-${length}-${month}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {filtered.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </motion.div>
      ) : (
        <p className="py-20 text-center text-parchment/40">No classes match those filters right now.</p>
      )}
    </div>
  );
}
