"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail, MdBusiness } from "react-icons/md";

import Container from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="relative mt-28 border-t border-neutral-200 bg-white">

      {/* Ligne dégradée */}

      <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <Container>

        <div className="grid gap-16 py-20 grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-black tracking-[-0.04em]">
              Axio<span className="text-blue-600">Web</span>
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-neutral-500">
              Nous créons des sites internet modernes,
              performants et optimisés pour transformer
              vos visiteurs en clients.
            </p>

            <div className="mt-8 space-y-5">

              <a
                href="mailto:contact@axioweb.eu"
                className="group flex items-center gap-3 text-neutral-600 transition hover:text-blue-600"
              >

                <MdEmail
                  size={21}
                  className="text-blue-600 transition-transform duration-300 group-hover:scale-110"
                />

                contact@axioweb.eu

              </a>

              <a
                href="tel:+33385000000"
                className="group flex items-center gap-3 text-neutral-600 transition hover:text-blue-600"
              >

                <FaPhoneAlt
                  size={16}
                  className="text-blue-600 transition-transform duration-300 group-hover:rotate-12"
                />

                +33 3 85 00 00 00

              </a>

              <div className="flex items-center gap-3 text-neutral-600">

                <FaMapMarkerAlt
                  size={18}
                  className="text-blue-600"
                />

                Tournus, Saône-et-Loire

              </div>

            </div>

          </div>

                    {/* Navigation */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-900">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {[
                ["Accueil", "/"],
                ["Services", "/services"],
                ["Réalisations", "/realisations"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (

                <Link
                  key={label}
                  href={href}
                  className="group flex items-center justify-between text-neutral-500 transition hover:text-black"
                >

                  {label}

                  <ArrowUpRight
                    size={15}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />

                </Link>

              ))}

            </div>

          </div>

          {/* Société */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-900">
              Société
            </h3>

            <div className="mt-6 space-y-6">

              <div className="flex gap-3">

                <MdBusiness
                  size={22}
                  className="mt-0.5 text-blue-600"
                />

                <div>

                  <p className="font-semibold">
                    Micro-entreprise
                  </p>

                  <p className="mt-1 text-sm text-neutral-500">
                    SIRET : En cours d'attribution
                  </p>

                </div>

              </div>

              <p className="text-sm leading-7 text-neutral-500">
                Création de sites internet,
                référencement naturel (SEO),
                maintenance,
                hébergement,
                développement sur mesure
                et accompagnement digital.
              </p>

            </div>

          </div>

          {/* Réseaux */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-900">
              Suivez-nous
            </h3>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50"
              >

                <FaLinkedin
                  size={20}
                  className="text-neutral-700 transition group-hover:text-[#0A66C2]"
                />

              </a>

              <a
                href="#"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:bg-neutral-100"
              >

                <FaGithub
                  size={20}
                  className="text-neutral-700 transition group-hover:rotate-12"
                />

              </a>

            </div>

          </div>

        </div>

                {/* Barre du bas */}

        <div className="flex flex-col items-center justify-between gap-6 border-t border-neutral-200 py-8 text-sm text-neutral-500 md:flex-row">

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">

            <p>
              © {new Date().getFullYear()} AxioWeb. Tous droits réservés.
            </p>

            <span className="hidden h-1 w-1 rounded-full bg-neutral-300 md:block" />

            <p>
              Conçu avec ❤️ en France.
            </p>

          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">

            <Link
              href="/mentions-legales"
              className="transition duration-300 hover:text-black"
            >
              Mentions légales
            </Link>

            <Link
              href="/politique-confidentialite"
              className="transition duration-300 hover:text-black"
            >
              Politique de confidentialité
            </Link>

            <Link
              href="/cgv"
              className="transition duration-300 hover:text-black"
            >
              Conditions Générales
            </Link>

          </div>

        </div>

      </Container>

    </footer>
  );
}