"use client";

import { motion } from "framer-motion";
import { ArrowRight, Pencil } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiSupabase,
} from "react-icons/si";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

const cards = [
  {
    title: "Next.js 15",
    icon: SiNextdotjs,
    dark: true,
  },
  {
    title: "React",
    icon: SiReact,
    dark: false,
    color: "#61DAFB",
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    dark: false,
    color: "#3178C6",
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    dark: true,
    color: "#38BDF8",
  },
];

export default function TechStack() {
  return (
    <section className="relative -mt-0 pb-0">
      <Container>
        <div className="relative overflow-hidden rounded-[34px] border border-neutral-200 bg-white px-6 lg:px-14 py-10 lg:py-14 shadow-sm">

          {/* Fond */}

          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0,0,0,.15) 1px, transparent 1.5px)",
                backgroundSize: "18px 18px",
              }}
            />
          </div>

          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 blur-3xl" />

          <div className="relative grid items-center gap-20 lg:grid-cols-[1fr_420px]">

            {/* Partie gauche */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="max-w-xl text-5xl font-black leading-tight">
                Votre site, construit avec les meilleures technologies.
              </h2>

              <div className="mt-5 space-y-8">

                {/* Stack */}

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white">

                    <div className="flex items-center -space-x-2">
                      <SiNextdotjs size={18} />
                      <SiReact size={18} color="#61DAFB" />
                      <SiTypescript size={18} color="#3178C6" />
                    </div>

                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      Stack moderne & performante
                    </h3>

                    <p className="mt-1 leading-7 text-neutral-500">
                      Next.js 15, React, TypeScript : le meilleur du web actuel.
                    </p>

                  </div>

                </div>

                {/* Design */}

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white">
                    <Pencil size={20} />
                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      Design 100 % sur mesure
                    </h3>

                    <p className="mt-1 leading-7 text-neutral-500">
                      Tailwind CSS + animations Framer Motion, aucun template,
                      aucun compromis.
                    </p>

                  </div>

                </div>

                {/* Hébergement */}

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white">

                    <div className="flex items-center -space-x-2">
                      <SiVercel size={18} />
                      <SiSupabase size={18} color="#3ECF8E" />
                    </div>

                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      Hébergement & données
                    </h3>

                    <p className="mt-1 leading-7 text-neutral-500">
                      Vercel + Supabase : rapide, sécurisé, haute disponibilité.
                    </p>

                  </div>

                </div>

              </div>

              <p className="mt-10 max-w-xl text-lg leading-8 text-neutral-500">
                Chaque technologie est choisie pour une raison : performance,
                maintenabilité, évolutivité. Votre site est propre, rapide et
                facile à faire évoluer.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Button>
                  Nos services
                  <ArrowRight size={18} />
                </Button>

                <Button variant="ghost">
                  Documentation
                </Button>

              </div>

            </motion.div>

            {/* Cartes */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-5"
            >

              {cards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="group overflow-hidden rounded-[26px] border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div
                      className="relative flex h-40 items-center justify-center"
                      style={{
                        backgroundImage: `
                          linear-gradient(#e7e7e7 1px, transparent 1px),
                          linear-gradient(90deg,#e7e7e7 1px, transparent 1px)
                        `,
                        backgroundSize: "48px 48px",
                      }}
                    >
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 ${
                          card.dark
                            ? "bg-black"
                            : "border border-neutral-200 bg-white"
                        }`}
                      >
                        <Icon
                          size={28}
                          color={card.color}
                        />
                      </div>
                    </div>

                    <div className="border-t border-neutral-200 px-6 py-5">

                      <h4 className="text-lg font-bold">
                        {card.title}
                      </h4>

                    </div>

                  </div>
                );
              })}

            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
}