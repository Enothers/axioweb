"use client";

import { motion } from "framer-motion";

import {
  Code2,
  Search,
  ShoppingBag,
  Smartphone,
  Zap,
  Headphones,
} from "lucide-react";

import Container from "@/components/ui/container";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Code2,
    title: "Création de site internet",
    description:
      "Des sites vitrines modernes, rapides et conçus pour transformer vos visiteurs en clients.",
  },
  {
    icon: Search,
    title: "Référencement Google",
    description:
      "Soyez visible lorsque vos futurs clients recherchent vos services près de chez eux.",
  },
  {
    icon: ShoppingBag,
    title: "Boutique en ligne",
    description:
      "Vendez vos produits avec une boutique élégante, sécurisée et simple à gérer.",
  },
  {
    icon: Zap,
    title: "Performance maximale",
    description:
      "Des temps de chargement ultra rapides pour améliorer votre référencement.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description:
      "Une expérience parfaite sur ordinateur, tablette et smartphone, sans compromis.",
  },
  {
    icon: Headphones,
    title: "Support & accompagnement",
    description:
      "Nous restons disponibles après la mise en ligne pour vous accompagner dans la durée.",
  },
];

export default function Services() {
  return (
    <section className="py-0">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[.18em] text-neutral-600">
            • Nos services
          </span>

          <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-black leading-none">
            Un site qui
            <br />
            travaille pour vous.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-500">
            Que vous soyez artisan, commerçant ou entreprise,
            chaque fonctionnalité est pensée pour développer votre activité.
          </p>

        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}

        </div>

      </Container>

    </section>
  );
}