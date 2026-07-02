"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

const documents = [
  {
    title: "Devis #001 : Site vitrine",
    price: "2 400 €",
    status: "Accepté",
    color: "emerald",
  },
  {
    title: "Facture #001 : Acompte 50%",
    price: "1 200 €",
    status: "Payée",
    color: "emerald",
  },
  {
    title: "Facture #002 : Solde",
    price: "1 200 €",
    status: "En attente",
    color: "amber",
  },
];

export default function BillingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7, delay: .1 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />

      <div className="relative flex h-full flex-col">

        <h3 className="text-[18px] font-bold">
          Facturation simplifiée
        </h3>

        <p className="mt-2 text-[14px] leading-6 text-neutral-500">
          Retrouvez vos devis, factures et paiements dans votre espace
          client.
        </p>

        <button className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-violet-700 transition hover:gap-2">
          Voir les documents
          <ArrowUpRight size={13} />
        </button>

        <div className="mt-6 flex-1 overflow-hidden rounded-2xl border border-neutral-200">

          {/* Header */}

          <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3">

            <FileText
              size={14}
              className="text-neutral-500"
            />

            <span className="text-[12px] font-semibold">
              Documents récents
            </span>

          </div>

          {/* Documents */}

          <div className="divide-y divide-neutral-200">

            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .12,
                }}
                className="flex items-center justify-between px-4 py-4 hover:bg-neutral-50 transition-colors"
              >
                <div>

                  <p className="text-[12px] font-semibold">
                    {doc.title}
                  </p>

                  <p className="mt-1 text-[11px] text-neutral-500">
                    {doc.price}
                  </p>

                </div>

                <span
                  className={`rounded-full border px-2 py-1 text-[10px] font-semibold ${
                    doc.color === "emerald"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-amber-200 bg-amber-50 text-amber-700"
                  }`}
                >
                  {doc.status}
                </span>

              </motion.div>
            ))}

          </div>

          {/* Footer */}

          <div className="border-t border-neutral-200 p-4">

            <div className="mb-3 flex items-end justify-between">

              <div>

                <p className="text-[10px] uppercase tracking-[.18em] text-neutral-400">
                  Total encaissé
                </p>

                <p className="mt-1 text-2xl font-black">
                  2 400 €
                </p>

              </div>

            </div>

            {/* Graph */}

            <svg
              viewBox="0 0 240 60"
              className="h-12 w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="billingGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#6d28d9"
                    stopOpacity=".20"
                  />

                  <stop
                    offset="100%"
                    stopColor="#6d28d9"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <path
                d="M0 52 C40 52 60 40 80 36 C110 32 135 24 160 18 C190 12 210 8 240 4"
                stroke="#6d28d9"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M0 52 C40 52 60 40 80 36 C110 32 135 24 160 18 C190 12 210 8 240 4 L240 60 L0 60 Z"
                fill="url(#billingGradient)"
              />

            </svg>

          </div>

        </div>

      </div>

    </motion.div>
  );
}