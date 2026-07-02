"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  HiOutlineChartBar,
  HiOutlineUserGroup,
} from "react-icons/hi";

import { RiRobot2Line } from "react-icons/ri";

import Container from "@/components/ui/container";

const features = [
  {
    title: "Analytics",
    description:
      "Visiteurs, pages vues, carte du monde et monitoring de votre hébergement sur 30 et 90 jours.",
    icon: HiOutlineChartBar,
  },
  {
    title: "Assistant IA",
    description:
      "Gérez le contenu de votre site en langage naturel, sans passer par une interface complexe.",
    icon: RiRobot2Line,
  },
  {
    title: "Gestion d'équipe",
    description:
      "Invitez vos collaborateurs et gérez les accès de votre espace projet.",
    icon: HiOutlineUserGroup,
  },
];

export default function Premium() {
  return (
    <section className="py-28">
      <Container>

        <div className="relative overflow-hidden rounded-[36px] bg-neutral-950 px-8 py-20 md:px-14">

          {/* Halo violet */}

          <div className="absolute inset-0 pointer-events-none">

            <div
              className="absolute inset-0"
              style={{
                background: `
                radial-gradient(circle at 80% 15%, rgba(120,90,255,.28), transparent 35%),
                radial-gradient(circle at 10% 90%, rgba(59,130,246,.15), transparent 35%)
              `,
              }}
            />

          </div>

          <div className="relative mx-auto max-w-3xl">

            {/* Header */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
              className="text-center"
            >

              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-300">

                <Sparkles size={13} />

                Espace Client Premium

              </div>

              <h2 className="mt-6 text-5xl font-black leading-tight text-white">

                Pilotez votre site
                <br />
                depuis un seul endroit.

              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-400">

                Chaque projet livré inclut un espace client.
                Premium ajoute des outils avancés pour suivre,
                analyser et enrichir votre site.

              </p>

            </motion.div>

                        {/* Cartes */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7, delay: .15 }}
              className="mt-16 grid gap-6 md:grid-cols-3"
            >

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: .6,
                      delay: index * .12,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.06]"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet-500/20">

                      <Icon
                        size={22}
                        className="text-violet-300"
                      />

                    </div>

                    <h3 className="mt-6 text-lg font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-neutral-400">
                      {feature.description}
                    </p>

                  </motion.div>
                );
              })}

            </motion.div>

                        {/* Bouton */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .6, delay: .35 }}
              className="mt-14 flex justify-center"
            >

              <a
                href="/premium"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-all duration-300 hover:gap-3 hover:text-violet-200"
              >
                En savoir plus sur le Premium

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </a>

            </motion.div>

          </div>

        </div>

      </Container>
    </section>
  );
}