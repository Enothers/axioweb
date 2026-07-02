"use client";

import { Star } from "lucide-react";

interface Props {
  text: string;
  author: string;
  job: string;
}

export default function ReviewCard({
  text,
  author,
  job,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200/70 bg-neutral-50/80 p-4 backdrop-blur-sm">

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative">

        <div className="mb-2 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={13}
              className="fill-amber-400 text-amber-400"
            />
          ))}
        </div>

        <p className="mb-2 text-sm leading-6 text-neutral-800">
          {text}
        </p>

        <p className="text-xs text-neutral-500">
          {author} — {job}
        </p>

      </div>
    </div>
  );
}