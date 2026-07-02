"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface Props {
  dark?: boolean;
  title: string;
  text: string;
}

export default function ComparisonItem({
  dark = false,
  title,
  text,
}: Props) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="flex gap-4"
    >
      <div
        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
          dark
            ? "bg-emerald-400/15"
            : "bg-red-500/10"
        }`}
      >
        {dark ? (
          <Check
            size={14}
            className="text-emerald-400"
            strokeWidth={2.5}
          />
        ) : (
          <X
            size={14}
            className="text-red-500"
            strokeWidth={2.5}
          />
        )}
      </div>

      <div>

        <h3
          className={`mb-1 text-[17px] font-bold ${
            dark
              ? "text-white"
              : "text-neutral-900"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-[15px] leading-7 ${
            dark
              ? "text-white/60"
              : "text-neutral-500"
          }`}
        >
          {text}
        </p>

      </div>
    </motion.div>
  );
}