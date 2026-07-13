"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CellLabel } from "@/components/CellLabel";
import { AboutCard } from "@/components/cards/AboutCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SkillsCard } from "@/components/cards/SkillsCard";
import { ResumeCard } from "@/components/cards/ResumeCard";
import { ContactCard } from "@/components/cards/ContactCard";

const cardsConfig = [
  {
    id: "about",
    
    label: "About",
    span: "sm:col-span-2",
    Component: AboutCard,
  },
  {
    id: "project",
    
    label: "Featured Project",
    span: "sm:col-span-2 sm:row-span-2",
    Component: ProjectCard,
  },
  {
    id: "skills",
    
    label: "Skills",
    span: "sm:col-span-1",
    Component: SkillsCard,
  },
  {
    id: "resume",
    
    label: "Resume",
    span: "sm:col-span-1",
    Component: ResumeCard,
  },
  {
    id: "contact",
    
    label: "Contact",
    span: "sm:col-span-2",
    Component: ContactCard,
  },
];

export function BentoGrid() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function onKeyDown(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape") setActiveId(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  const activeCard = cardsConfig.find((c) => c.id === activeId);
  const ActiveContent = activeCard?.Component;

  const handleKey = (e: KeyboardEvent<HTMLDivElement>, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveId(id);
    }
  };

  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
      <div className="mb-10 flex items-center gap-3">
        
        <span className="h-px w-8 bg-[color:var(--color-border-strong)]" />
        <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-muted)]">
          Explore
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[220px]">
        {cardsConfig.map((card) => {
          if (card.id === activeId) return null;
          const Content = card.Component;
          return (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}`}
              layout
              role="button"
              tabIndex={0}
              aria-label={`Open ${card.label} details`}
              onClick={() => setActiveId(card.id)}
              onKeyDown={(e) => handleKey(e, card.id)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{
                layout: { type: "spring", stiffness: 300, damping: 32 },
                default: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              }}
              className={cn(
                "group relative flex cursor-pointer flex-col rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 text-left shadow-[var(--shadow-card)] outline-none transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 sm:p-7",
                card.span
              )}
            >
              
              <Content expanded={false} />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeCard && ActiveContent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--color-ink)]/35 p-4 backdrop-blur-sm sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              layoutId={`card-${activeCard.id}`}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={activeCard.label}
              className="no-scrollbar relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-[var(--shadow-overlay)] sm:p-12"
            >
              <button
                onClick={() => setActiveId(null)}
                aria-label="Close"
                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-ink-muted)] transition-colors duration-200 hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
              >
                <X className="h-4 w-4" />
              </button>
              <ActiveContent expanded={true} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
