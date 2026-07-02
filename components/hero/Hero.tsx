"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import DotBackground from "@/components/ui/DotBackground";
import GradientBlur from "@/components/ui/GradientBlur";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20">

    <DotBackground />

    <GradientBlur />

    <Container>

        <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: .8 }}
    className="mx-auto max-w-5xl text-center">

          <div className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-sm">
  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>

  <span className="text-[14px] font-medium text-neutral-700">
    Agence web premium
  </span>

  <div className="h-1 w-1 rounded-full bg-neutral-300"></div>

  <span className="text-[14px] font-medium text-neutral-700">
    Devis sous 48h
  </span>
</div>

          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-none lg:text-8xl">
            Votre site web,
            <br />
            votre meilleur
            <br />
            commercial.
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-base sm:text-lg lg:text-[22px] leading-9 text-neutral-500">
            Des sites ultra rapides, pensés pour convertir vos visiteurs
            en clients.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">

            <Button>
    Démarrer un projet
</Button>

<Button variant="secondary">
    Nos réalisations
</Button>
          </div>

          <div className="mx-auto mt-14 flex flex-col lg:flex-row">

  {/* Planning */}
  <div className="w-1/2 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 backdrop-blur-sm">

    <div className="flex items-center gap-2">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>

      <span className="text-xs font-semibold text-neutral-700">
        Planning ouvert
      </span>
    </div>

    <div className="mt-4">
      <p className="max-w-[220px] text-left text-[11px] leading-5 text-neutral-500">
        Nous sommes ouverts à de nouveaux projets pour les prochaines semaines.
      </p>

      <button className="group mt-4 inline-flex items-center gap-1 text-[11px] font-semibold">
        Prendre contact

        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>

  </div>

  {/* En direct */}
  <div className="w-1/2 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-4 backdrop-blur-sm">

    <div className="flex items-center gap-2">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
      </span>

      <span className="text-xs font-semibold text-neutral-700">
        En direct
      </span>
    </div>

    <div className="mt-4 flex flex-col gap-2">

      <div className="flex items-baseline gap-1.5">
        <span className="shrink-0 text-[11px] font-bold">
          Lucas Renaud Pertet
        </span>

        <span className="truncate text-[11px] text-neutral-500">
          Ajoute des fonctionnalités AxioWeb
        </span>
      </div>

      <div className="flex items-baseline gap-1.5">
        <span className="shrink-0 text-[11px] font-bold">
          Agent IA
        </span>

        <span className="truncate text-[11px] text-neutral-500">
          Génère du contenu pour AxioWeb
        </span>
      </div>

    </div>

  </div>

</div>

<div className="mx-auto mt-10 grid max-w-[760px] grid-cols-4 border-t border-neutral-200 pt-8">

  <div className="text-center">
    <div className="text-[44px] font-black leading-none">10+</div>
    <p className="mt-1 text-[12px] text-neutral-500">Sites lancés</p>
  </div>

  <div className="border-l border-neutral-200 text-center">
    <div className="text-[44px] font-black leading-none">4.9/5</div>
    <p className="mt-1 text-[12px] text-neutral-500">Satisfaction</p>
  </div>

  <div className="border-l border-neutral-200 text-center">
    <div className="text-[44px] font-black leading-none">48h</div>
    <p className="mt-1 text-[12px] text-neutral-500">Délai devis</p>
  </div>

  <div className="border-l border-neutral-200 text-center">
    <div className="text-[44px] font-black leading-none">100%</div>
    <p className="mt-1 text-[12px] text-neutral-500">Clients satisfaits</p>
  </div>


</div>

        </motion.div>

      </Container>

    </section>
  );
}