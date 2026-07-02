"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ClientSpaceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Halo */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />

      <div className="relative">

        <h3 className="text-[18px] font-bold">
          Espace client dédié
        </h3>

        <p className="mt-2 text-[14px] leading-6 text-neutral-500">
          Suivez votre projet, échangez avec nous et retrouvez
          vos devis et factures depuis un seul endroit.
        </p>

        <button className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-violet-700 transition hover:gap-2">
          Découvrir l'espace client
          <ArrowUpRight size={13} />
        </button>

        {/* Card */}

        <div className="mt-5 overflow-hidden rounded-2xl border border-neutral-200">

          {/* Header */}

          <div className="border-b border-neutral-200 p-4">

            <div className="mb-4 flex items-center justify-between">

              <span className="text-[12px] font-bold">
                Restaurant Le Bellevue
              </span>

              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                En cours
              </span>

            </div>

            <div className="mb-2 flex items-center justify-between">

              <span className="text-[11px] text-neutral-500">
                Avancement
              </span>

              <span className="text-[11px] font-bold">
                78%
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-neutral-100">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "78%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-violet-700"
              />

            </div>

          </div>

          {/* Footer */}

          <div className="flex items-center justify-between p-4">

            <div className="flex items-center gap-3">

              <div className="flex -space-x-2">

                {["LB", "SB", "MA"].map((user) => (
                  <div
                    key={user}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-[9px] font-bold text-violet-700"
                  >
                    {user}
                  </div>
                ))}

              </div>

              <span className="text-[11px] text-neutral-500">
                3 membres actifs
              </span>

            </div>

            <button className="rounded-lg bg-violet-700 px-3 py-2 text-[10px] font-semibold text-white transition hover:bg-violet-800">
              Accéder
            </button>

          </div>

        </div>

      </div>

    </motion.div>
  );
}