"use client";

import { User, Sparkles } from "lucide-react";
import ComparisonItem from "./ComparisonItem";

interface Item {
  title: string;
  text: string;
}

interface Props {
  dark?: boolean;
  title: string;
  items: Item[];
}

export default function ComparisonCard({
  dark = false,
  title,
  items,
}: Props) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-[30px] p-8 ${
        dark
          ? "bg-neutral-950"
          : "border border-neutral-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,.06)]"
      }`}
    >
      {/* Halo violet */}
      {dark && (
        <>
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 85% 15%, rgba(124,58,237,.35), transparent), radial-gradient(50% 40% at 10% 90%, rgba(37,99,235,.18), transparent)",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />
        </>
      )}

      {/* léger reflet */}
      {!dark && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/80 to-transparent" />
      )}

      <div className="relative">

        <div className="mb-8 flex items-center gap-3">

          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              dark
                ? "bg-white/10"
                : "bg-neutral-100"
            }`}
          >
            {dark ? (
              <Sparkles
                size={17}
                className="text-white"
              />
            ) : (
              <User
                size={17}
                className="text-neutral-500"
              />
            )}
          </div>

          <span
            className={`text-xs font-bold uppercase tracking-[.16em] ${
              dark
                ? "text-white/70"
                : "text-neutral-500"
            }`}
          >
            {title}
          </span>

        </div>

        <div className="space-y-7">

          {items.map((item, index) => (
            <ComparisonItem
              key={index}
              dark={dark}
              {...item}
            />
          ))}

        </div>

      </div>

    </div>
  );
}