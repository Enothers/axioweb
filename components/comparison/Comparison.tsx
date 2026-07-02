"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import ComparisonCard from "./ComparisonCard";

const before = [
  {
    title: "Un site qui fait amateur",
    text: "Vos visiteurs partent en quelques secondes, vous perdez en crédibilité face à la concurrence.",
  },
  {
    title: "Invisible sur Google",
    text: "Aucune stratégie SEO, vos clients potentiels trouvent vos concurrents avant vous.",
  },
  {
    title: "Des délais imprécis",
    text: "Vous ne savez jamais réellement quand votre projet sera terminé.",
  },
  {
    title: "Plus personne après la livraison",
    text: "Au moindre bug ou besoin de modification, plus aucun support.",
  },
];

const after = [
  {
    title: "Un design qui inspire confiance",
    text: "Des sites pensés pour convertir vos visiteurs en clients dès leur première visite.",
  },
  {
    title: "Visible sur Google",
    text: "Référencement SEO intégré dès la conception pour attirer des clients durablement.",
  },
  {
    title: "Devis fixe sous 48h",
    text: "Vous savez exactement ce que vous payez et quand votre site sera livré.",
  },
  {
    title: "Support réactif",
    text: "Assistance rapide et accompagnement même après la mise en ligne.",
  },
];

export default function Comparison() {
  return (
    <section className="relative -mt-10 pb-28">

      <Container>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <ComparisonCard
              dark={false}
              title="Sans AxioWeb"
              items={before}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay: .1 }}
          >
            <ComparisonCard
              dark
              title="Avec AxioWeb"
              items={after}
            />
          </motion.div>

        </div>

      </Container>

    </section>
  );
}