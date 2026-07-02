"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[26px] border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Halo */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-violet-500/5 blur-3xl transition-all duration-500 group-hover:bg-violet-500/10" />

      <div className="relative">

        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
          <Icon size={18} strokeWidth={2} />
        </div>

        <h3 className="text-[21px] font-bold tracking-[-0.02em]">
          {title}
        </h3>

        <p className="mt-3 text-[15px] leading-7 text-neutral-500">
          {description}
        </p>

        <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition group-hover:text-black">
          En savoir plus

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>

      </div>

    </motion.div>
  );
}