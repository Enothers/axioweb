"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/container";

import ClientSpaceCard from "./cards/ClientSpaceCard";
import SeoCard from "./cards/SeoCard";
import TimelineCard from "./cards/TimelineCard";
import ChatCard from "./cards/ChatCard";
import BillingCard from "./cards/BillingCard";

export default function Features() {
  return (
    <section className="py-28">

      <Container>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >

          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[.18em] text-neutral-600">
            • Fonctionnalités
          </span>

          <h2 className="mt-7 text-3xl sm:text-4xl lg:text-5xl font-black leading-none">
            Tout ce qu'il vous faut.
            <br />
            Rien de superflu.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-xl leading-9 text-neutral-500">
            Votre site ne se limite pas à une belle vitrine.
            Vous disposez d'un véritable espace de travail pour suivre,
            gérer et faire évoluer votre projet.
          </p>

        </motion.div>

        {/* Grid */}

        <div className="grid gap-6 md:grid-cols-3">

          <ClientSpaceCard />

          <SeoCard />

          <TimelineCard />

          <div className="md:col-span-2">
            <ChatCard />
          </div>

          <BillingCard />

        </div>

      </Container>

    </section>
  );
}