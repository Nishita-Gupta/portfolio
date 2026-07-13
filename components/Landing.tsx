"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";
import { CellLabel } from "@/components/CellLabel";

export function Landing() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center px-6 sm:px-10">
      <div className="mb-8 flex items-center gap-3">
        
        <span className="h-px w-8 bg-[color:var(--color-border-strong)]" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-sm font-medium tracking-wide text-[color:var(--color-ink-muted)]"
      >
        {profile.role}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 font-[family-name:var(--font-display)] text-[13vw] leading-[0.98] font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-[7vw] lg:text-[5.5rem]"
      >
        Hi, I&apos;m Nishita.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-muted)] sm:text-xl"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10"
      >
        <button
          onClick={scrollToWork}
          className="group inline-flex items-center gap-2.5 rounded-[var(--radius-control)] bg-[color:var(--color-ink)] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
        >
          Know More About Me
          <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="pointer-events-none absolute bottom-10 left-6 hidden items-center gap-2 text-xs text-[color:var(--color-ink-muted)] sm:left-10 sm:flex"
      >
        <span className="font-mono">Scroll</span>
        <span className="h-px w-10 bg-[color:var(--color-border-strong)]" />
      </motion.div>
    </section>
  );
}
