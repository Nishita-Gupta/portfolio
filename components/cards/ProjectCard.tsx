import { ArrowUpRight, Check } from "lucide-react";
import { featuredProject } from "@/lib/data";

export function ProjectCard({ expanded }: { expanded: boolean }) {
  if (!expanded) {
    return (
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-accent)]">
            Featured Project
          </p>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--color-ink)] sm:text-3xl">
            {featuredProject.name}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
            {featuredProject.tagline}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {featuredProject.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-1 font-mono text-[11px] text-[color:var(--color-ink-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-accent)]">
        Featured Project · {featuredProject.year}
      </p>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-[color:var(--color-ink)] sm:text-5xl">
        {featuredProject.name}
      </h3>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--color-ink-muted)] sm:text-lg">
        {featuredProject.tagline}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={featuredProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-[var(--radius-control)] bg-[color:var(--color-ink)] px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          View on GitHub
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <div className="flex flex-wrap gap-1.5">
          {featuredProject.stack.map((tech) => (
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
            {featuredProject.problem}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-muted)]">
            Solution
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--color-ink)]">
            {featuredProject.solution}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-muted)]">
          Features
        </p>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {featuredProject.features.map((feature) => (
            <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-[color:var(--color-ink)]">
              <Check className="mt-0.5 h-4 w-4 flex-none text-[color:var(--color-accent)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
