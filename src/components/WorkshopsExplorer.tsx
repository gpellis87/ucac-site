"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import WorkshopCard from "@/components/WorkshopCard";
import { Workshop } from "@/data/workshops";

const ALL = "All";
type Filter = typeof ALL | string;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// startDate is a plain "YYYY-MM-DD" string. Parsing that with `new Date(...)`
// reads it as UTC midnight, so formatting it back out in a local timezone
// behind UTC (e.g. US Eastern) can roll it back a day -- enough to push a
// December 1st class into the November bucket. Read the components
// directly instead of going through Date/timezone conversion at all.
function monthKey(dateString: string): string {
  return dateString.slice(0, 7);
}

function monthLabel(dateString: string): string {
  const [year, month] = dateString.split("-").map(Number);
  return `${MONTH_NAMES[month - 1]} ${year}`;
}

function FilterDropdown({
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
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="theme-input min-w-[17rem] appearance-none py-2.5 pl-3.5 pr-9 text-xs uppercase tracking-[0.14em] transition hover:border-navy focus-visible:border-navy focus-visible:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {label}: {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-parchment/60"
      />
    </div>
  );
}

export default function WorkshopsExplorer({ workshops }: { workshops: Workshop[] }) {
  const [month, setMonth] = useState<Filter>(ALL);

  const months = useMemo(() => {
    const seen = new Map<string, string>();
    for (const w of workshops) {
      seen.set(monthKey(w.startDate), monthLabel(w.startDate));
    }
    return Array.from(seen.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, label]) => ({ key, label }));
  }, [workshops]);

  const filtered = workshops.filter((w) => {
    if (month !== ALL && monthKey(w.startDate) !== month) return false;
    return true;
  });

  return (
    <div>
      <h2 className="sr-only">Browse Classes &amp; Workshops</h2>
      <div className="theme-panel mb-10 flex flex-wrap gap-3 border p-5">
        {months.length > 0 && (
          <FilterDropdown
            label="Month"
            value={month}
            onChange={setMonth}
            options={[{ value: ALL, label: "All" }, ...months.map((m) => ({ value: m.key, label: m.label }))]}
          />
        )}
      </div>

      {filtered.length > 0 ? (
        <motion.div
          key={month}
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
        <p className="py-20 text-center text-parchment/60">No classes match those filters right now.</p>
      )}
    </div>
  );
}
