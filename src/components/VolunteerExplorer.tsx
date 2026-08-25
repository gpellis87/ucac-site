"use client";

import { motion } from "framer-motion";
import VolunteerCard from "@/components/VolunteerCard";
import { VolunteerOpportunity } from "@/data/volunteer";

export default function VolunteerExplorer({ opportunities }: { opportunities: VolunteerOpportunity[] }) {
  return (
    <div>
      <h2 className="sr-only">Browse Volunteer Opportunities</h2>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {opportunities.map((opportunity) => (
          <VolunteerCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </motion.div>
    </div>
  );
}
