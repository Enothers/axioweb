"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CircleCheck,
  Clock3,
  MessageSquare,
} from "lucide-react";

const events = [
  {
    icon: CircleCheck,
    color: "emerald",
    title: "Maquettes validées",
    time: "Il y a 2h",
  },
  {
    icon: MessageSquare,
    color: "violet",
    title: "Nouveau message reçu",
    time: "Il y a 5h",
  },
  {
    icon: Clock3,
    color: "amber",
    title: "Livraison prévue demain",
    time: "Hier",
  },
];

export default function TimelineCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7, delay: .16 }}
      className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />

      <div className="relative">

        <h3 className="text-[18px] font-bold">
          Suivi en temps réel
        </h3>

        <p className="mt-2 text-[14px] leading-6 text-neutral-500">
          Chaque étape de votre projet vous est communiquée
          instantanément.
        </p>

        <button className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-violet-700 transition hover:gap-2">
          En savoir plus
          <ArrowUpRight size={13} />
        </button>

        <div className="mt-6 space-y-3">

          {events.map((event, index) => {
            const Icon = event.icon;

            const colors = {
              emerald:
                "bg-emerald-50 text-emerald-600",
              violet:
                "bg-violet-50 text-violet-600",
              amber:
                "bg-amber-50 text-amber-600",
            };

            return (
              <motion.div
                key={event.title}
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .12,
                }}
                className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3"
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    colors[event.color as keyof typeof colors]
                  }`}
                >
                  <Icon size={14} />
                </div>

                <span className="flex-1 text-[13px] font-medium">
                  {event.title}
                </span>

                <span className="text-[11px] text-neutral-400">
                  {event.time}
                </span>
              </motion.div>
            );
          })}

        </div>

      </div>
    </motion.div>
  );
}