"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative py-16 lg:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.01 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[42px]"
        >
          {/* Aurora Background */}

          <div
            className="absolute inset-0 aurora-bg"
            style={{
              background: `
              radial-gradient(circle at 15% 20%, rgba(99,102,241,.9), transparent 30%),
              radial-gradient(circle at 85% 15%, rgba(236,72,153,.75), transparent 35%),
              radial-gradient(circle at 75% 80%, rgba(59,130,246,.65), transparent 40%),
              radial-gradient(circle at 25% 85%, rgba(139,92,246,.55), transparent 40%),
              linear-gradient(135deg,#1e1b4b 0%,#4338ca 25%,#7c3aed 55%,#db2777 100%)
            `,
            }}
          />

          {/* Aurora Lights */}

          <motion.div
            animate={{
              x: [-120, 120, -120],
              y: [-60, 80, -60],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-0 h-[700px] w-[700px] rounded-full bg-violet-400/20 blur-[150px]"
          />

          <motion.div
            animate={{
              x: [90, -60, 90],
              y: [50, -40, 50],
              scale: [1.15, 1, 1.15],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-10 h-[620px] w-[620px] rounded-full bg-pink-400/20 blur-[150px]"
          />

          <motion.div
            animate={{
              x: [-30, 40, -30],
              y: [40, -30, 40],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-150px] right-10 h-[520px] w-[520px] rounded-full bg-sky-400/20 blur-[150px]"
          />

          {/* Glow */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.14),transparent_65%)]" />

          {/* Grain */}

          <div className="absolute inset-0 opacity-40 mix-blend-soft-light pointer-events-none">
            <svg className="absolute inset-0 h-full w-full">
              <filter id="cta-grain">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency=".68"
                  numOctaves="4"
                  seed="12"
                  stitchTiles="stitch"
                />
                <feColorMatrix
                  type="saturate"
                  values="0"
                />
              </filter>

              <rect
                width="100%"
                height="100%"
                filter="url(#cta-grain)"
              />
            </svg>
          </div>

          {/* Floating particles */}

          {[...Array(18)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-white/25"
              style={{
                left: `${6 + i * 5}%`,
                top: `${15 + (i % 5) * 16}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.15, 0.7, 0.15],
              }}
              transition={{
                duration: 4 + i * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Content */}

          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-8 py-16 lg:py-28 text-center">

                        <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-white/80">
                Prêt à démarrer ?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: .1,
              }}
              className="mt-8 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.05em] text-white md:text-7xl xl:text-5xl sm:text-6xl lg:text-8xl"
            >
              Donnons vie à
              <br />

              <span className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                votre prochain projet.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: .2,
              }}
              className="mt-8 max-w-2xl text-lg leading-9 text-white/70 md:text-xl"
            >
              Que vous souhaitiez créer un site vitrine,
              une plateforme métier, une boutique en ligne
              ou moderniser votre présence digitale,
              nous sommes là pour vous accompagner.

              <br />
              <br />

              Ensemble, créons une expérience qui fera la différence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: .3,
              }}
              className="mt-14"
            >

              <Button
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  bg-white
                  px-8
                  py-6
                  text-neutral-900
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:shadow-[0_20px_60px_rgba(255,255,255,.35)]
                "
              >

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/70
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative flex items-center gap-3">
                  Démarrer mon projet

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>

              </Button>

            </motion.div>

                        {/* Bottom glow */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white/10 via-white/5 to-transparent" />

            {/* Border light */}

            <div className="pointer-events-none absolute inset-0 rounded-[42px] border border-white/10" />

            {/* Vignette */}

            <div className="pointer-events-none absolute inset-0 rounded-[42px] shadow-[inset_0_1px_0_rgba(255,255,255,.18),inset_0_-80px_120px_rgba(0,0,0,.15)]" />

          </div>

        </motion.div>

      </Container>
    </section>
  );
}