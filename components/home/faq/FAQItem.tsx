"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  open: boolean;
  onClick: () => void;
}

export default function FAQItem({
  question,
  answer,
  open,
  onClick,
}: FAQItemProps) {
  return (
    <motion.div
      layout
      transition={{
        layout: {
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className={`overflow-hidden rounded-[22px] border transition-all duration-300 ${
        open
          ? "border-neutral-300 bg-white shadow-xl shadow-black/5"
          : "border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-lg hover:shadow-black/5"
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-8 py-3 text-left"
      >
        <span className="pr-6 text-[17px] font-semibold text-neutral-900">
          {question}
        </span>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100"
        >
          <ChevronDown
            size={18}
            className="text-neutral-600"
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-7 pr-16">
              <p className="leading-8 text-neutral-500">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}