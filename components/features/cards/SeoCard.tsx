"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const scores = [
  {
    label: "Performance",
    value: 98,
  },
  {
    label: "SEO",
    value: 95,
  },
  {
    label: "Accessibilité",
    value: 92,
  },
  {
    label: "Best Practices",
    value: 100,
  },
];

export default function SeoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7, delay: .08 }}
      className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Halo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />

      <div className="relative">

        <h3 className="text-[18px] font-bold">
          Performance & SEO garantis
        </h3>

        <p className="mt-2 text-[14px] leading-6 text-neutral-500">
          Des performances optimisées dès la conception pour offrir une
          expérience fluide et un référencement durable.
        </p>

        <button className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-violet-700 transition hover:gap-2">
          Voir nos offres
          <ArrowUpRight size={13} />
        </button>

        <div className="mt-6 space-y-4">

          {scores.map((score, index) => (
            <div key={score.label}>

              <div className="mb-1 flex items-center justify-between">

                <span className="text-[11px] text-neutral-500">
                  {score.label}
                </span>

                <span className="text-[11px] font-bold">
                  {score.value}
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-neutral-100">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${score.value}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .9,
                    delay: index * .08,
                  }}
                  className="h-full rounded-full bg-emerald-500"
                />

              </div>

            </div>
          ))}

        </div>

      </div>
    </motion.div>
  );
}