import Hero from "@/components/hero/Hero";
import Reviews from "@/components/reviews/Reviews";
import Comparison from "@/components/comparison/Comparison";
import Services from "@/components/services/Services";
import Features from "@/components/features/Features";
import TechCard from "@/components/techcard/TechCard";
import Premium from "@/components/Premium/Premium";
import FAQ from "@/components/home/faq/FAQ";
import CTA from "@/components/cta/CTA";
import FOOTER from "@/components/footer/FOOTER";

export default function Home() {
  return (
    <>
    <Hero />
    <Reviews />
    <Comparison />
    <Services />
    <Features />
    <TechCard />
    <Premium />
    <FAQ />
    <CTA />
    <FOOTER />
</>
  );
}