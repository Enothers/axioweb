"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    text: "Le référencement sur Google a tout changé. Nous sommes passés de la 4e page aux premiers résultats en quelques mois.",
    author: "Jean-Pierre V.",
    job: "Restaurateur • Tournus",
  },
  {
    text: "Avant, notre site ne donnait pas confiance. Aujourd'hui il est devenu notre meilleur commercial.",
    author: "Karim B.",
    job: "Coach sportif • Mâcon",
  },
  {
    text: "Nos clients nous complimentent régulièrement sur notre nouveau site. Le résultat est au-delà de nos attentes.",
    author: "Nathalie B.",
    job: "Esthéticienne • Chalon",
  },
];

export default function Reviews() {
  return (
    <section className="relative pt-28 pb-6">
      <Container>

        <div className="relative overflow-hidden rounded-[34px] border border-neutral-200 bg-white px-6 lg:px-14 py-10 lg:py-14 shadow-sm">

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

          <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 blur-3xl" />

          <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_360px]">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600">

                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                Ce qui différencie AxioWeb

              </div>

              <h2 className="mt-7 text-5xl font-black leading-tight">
                Vous vous
                <br />
                reconnaissez ?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-500">
                Vous n'êtes pas seul à rencontrer ces difficultés.
                C'est exactement ce que nous entendons de nos clients
                avant de travailler ensemble.
              </p>

              <div className="mt-10">
                <Button>
                  Démarrer un projet
                  <ArrowRight size={18} />
                </Button>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7, delay: .15 }}
              className="relative h-[420px] overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div className="marquee">

                {reviews.concat(reviews).map((review, index) => (
                  <ReviewCard
                    key={index}
                    {...review}
                  />
                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </Container>
    </section>
  );
}