"use client";

import { useEffect, useState } from "react";
import { Moon, ArrowRight } from "lucide-react";
import Container from "@/components/ui/container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
  <Container>
    <div
      className={`flex h-[74px] items-center justify-between transition-all duration-500 ${
        scrolled
    ? "mx-auto mt-4 w-full max-w-[820px] rounded-full border border-neutral-200 bg-white/90 px-4 sm:px-6 lg:px-9 shadow-xl backdrop-blur-xl"
    : "mt-4 sm:mt-6 lg:mt-8"
      }`}
    >
        {/* Logo */}
        <div className="flex items-center">
  <span className="text-[20px] font-extrabold tracking-[-0.03em]">
    Axio<span className="text-blue-600">Web</span>
  </span>
</div>

        {/* Menu */}
        <nav className="hidden items-center gap-14 lg:flex">
          <a className="text-[15px] font-medium tracking-wide text-neutral-700 transition hover:text-black">
            EXPLORER
          </a>

          <a className="text-[15px] font-medium tracking-wide text-neutral-700 transition hover:text-black">
            BLOG
          </a>

          <a className="text-[15px] font-medium tracking-wide text-neutral-700 transition hover:text-black">
            ESPACE CLIENT
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-7">
          <Moon
            size={18}
            strokeWidth={1.8}
            className="text-neutral-700"
          />

          <button className="flex h-[50px] items-center gap-2 rounded-full bg-[linear-gradient(90deg,#5423A5_0%,#111_22%,#111_100%)] px-7 text-[15px] font-semibold text-white transition hover:scale-[1.02]">
            Contactez-nous
            <ArrowRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </Container>
  </header>
)
}