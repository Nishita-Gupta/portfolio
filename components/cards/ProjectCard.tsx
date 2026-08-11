"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";

export function ProjectCard({ expanded }: { expanded: boolean }) {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  if (!expanded) {
    return (
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-accent)]">
            Projects
          </p>

          <div className="mt-3 space-y-3">
            {projects.map((p) => (
              <div key={p.id}>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[color:var(--color-ink)]">
                  {p.name}
                </h3>

                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
                  {p.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs font-medium text-[color:var(--color-accent)]">
          Click to explore →
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-accent)]">
          Projects · {active.year}
        </p>

        <div className="flex gap-1.5 rounded-full border border-[color:var(--color-border)] p-1">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveId(p.id);
              }}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
                p.id === activeId
                  ? "bg-[color:var(--color-ink)] text-white"
                  : "text-[color:var(--color-ink-muted)] hover:text-[color:var(--color-ink)]"
              )}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold text-[color:var(--color-ink)] sm:text-5xl">
        {active.name}
      </h3>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--color-ink-muted)] sm:text-lg">
        {active.tagline}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={active.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="group inline-flex items-center gap-2 rounded-[var(--radius-control)] bg-[color:var(--color-ink)] px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          View on GitHub

          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {active.live && (
          <a
            href={active.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="group inline-flex items-center gap-2 rounded-[var(--radius-control)] border border-[color:var(--color-border-strong)] px-5 py-2.5 text-sm font-medium text-[color:var(--color-ink)] transition-colors duration-300 hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
          >
            Live Demo

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}

        <div className="flex flex-wrap gap-1.5">
          {active.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[color:var(--color-border)] px-3 py-1.5 font-mono text-[11px] text-[color:var(--color-ink-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-muted)]">
            Problem
          </p>

          <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--color-ink)]">
            {active.problem}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-muted)]">
            Solution
          </p>

          <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--color-ink)]">
            {active.solution}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-muted)]">
          Features
        </p>

        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {active.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-2.5 text-sm leading-relaxed text-[color:var(--color-ink)]"
            >
              <Check className="mt-0.5 h-4 w-4 flex-none text-[color:var(--color-accent)]" />

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}