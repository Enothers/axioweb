"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";

const messages = [
  {
    author: "Lucas (AxioWeb)",
    avatar: "L",
    text: "Bonjour ! Votre espace de prévisualisation est prêt.",
    left: true,
  },
  {
    author: "Thomas M.",
    avatar: "T",
    text: "Parfait, je valide la page d'accueil 👍",
    left: false,
  },
  {
    author: "Lucas (AxioWeb)",
    avatar: "L",
    text: "Super ! Nous commençons les pages suivantes dès demain.",
    left: true,
  },
];

export default function ChatCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />

      <div className="relative flex h-full flex-col">

        <h3 className="text-[18px] font-bold">
          Chat intégré
        </h3>

        <p className="mt-2 text-[14px] leading-6 text-neutral-500">
          Discutez directement avec votre développeur sans passer
          par les e-mails.
        </p>

        <button className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-violet-700 transition hover:gap-2">
          Découvrir le chat
          <ArrowUpRight size={13} />
        </button>

        <div className="mt-6 flex-1 overflow-hidden rounded-2xl border border-neutral-200">

          {/* Header */}

          <div className="flex items-center gap-2 border-b border-neutral-200 px-4 py-3">

            <div className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-[12px] font-semibold">
              Projet Restaurant Le Bellevue
            </span>

          </div>

          {/* Messages */}

          <div className="space-y-4 p-4">

            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                }}
                className={`flex gap-3 ${
                  message.left ? "" : "flex-row-reverse"
                }`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[10px] font-bold text-violet-700">
                  {message.avatar}
                </div>

                <div
                  className={`flex max-w-[75%] flex-col ${
                    message.left
                      ? "items-start"
                      : "items-end"
                  }`}
                >
                  <span className="mb-1 text-[10px] text-neutral-400">
                    {message.author}
                  </span>

                  <div
                    className={`rounded-2xl px-4 py-3 text-[13px] leading-6 ${
                      message.left
                        ? "rounded-tl-sm bg-neutral-100"
                        : "rounded-tr-sm bg-violet-700 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>

              </motion.div>
            ))}

          </div>

          {/* Input */}

          <div className="border-t border-neutral-200 p-3">

            <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">

              <span className="flex-1 text-[13px] text-neutral-400">
                Écrire un message...
              </span>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-700 text-white">
                <Zap size={14} />
              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}