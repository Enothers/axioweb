"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import FAQItem from "./FAQItem";

const faq = [
  {
    question: "Et si je ne suis pas satisfait du résultat ?",
    answer:
      "Nous travaillons avec vous tout au long du projet. Des ajustements sont réalisés jusqu'à ce que le résultat corresponde à vos attentes.",
  },
  {
    question: "Combien de temps pour avoir mon site en ligne ?",
    answer:
      "Selon la complexité du projet, un site vitrine est généralement livré entre une et trois semaines.",
  },
  {
    question: "Le site m'appartient vraiment ?",
    answer:
      "Oui. Vous êtes propriétaire du site, de votre nom de domaine et de vos contenus. Aucun verrouillage.",
  },
  {
    question: "Quelle différence avec un freelance ou un site fait soi-même ?",
    answer:
      "Nous concevons un site sur mesure, rapide, optimisé pour Google et pensé pour convertir vos visiteurs en clients.",
  },
  {
    question: "Y a-t-il des frais cachés ?",
    answer:
      "Non. Tout est expliqué avant le début du projet. Aucun coût surprise.",
  },
  {
    question: "Puis-je demander des modifications après la livraison ?",
    answer:
      "Bien sûr. Nous proposons un accompagnement après la mise en ligne afin de faire évoluer votre site si nécessaire.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28">
      <Container>

        <div className="grid gap-16 lg:grid-cols-[360px_1fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-600">

              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />

              Questions fréquentes

            </div>

            <h2 className="mt-6 text-5xl font-black leading-tight">
              On répond à vos questions
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-500">
              Vous ne trouvez pas la réponse à votre question ?
              Contactez-nous directement, nous répondons
              sous 2h en journée ouvrée.
            </p>

            <div className="mt-10">

              <Button>
                Démarrer un projet
                <ArrowRight size={18} />
              </Button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="space-y-4"
          >

            {faq.map((item, index) => (
              <FAQItem
                key={item.question}
                {...item}
                open={open === index}
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
              />
            ))}

          </motion.div>

        </div>

      </Container>
    </section>
  );
}