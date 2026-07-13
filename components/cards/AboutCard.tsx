import { about, education } from "@/lib/data";

export function AboutCard({ expanded }: { expanded: boolean }) {
  if (!expanded) {
    return (
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[color:var(--color-ink)]">
            About
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
            {about.who}
          </p>
        </div>
        <p className="mt-4 text-xs font-medium text-[color:var(--color-ink-muted)]">
          {education.school}
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[color:var(--color-ink)] sm:text-4xl">
        About
      </h3>

      <div className="mt-8 grid gap-8 sm:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6">
          <Field label="Who I am">{about.who}</Field>
          <Field label="What I'm interested in">{about.interest}</Field>
          <Field label="What I'm currently learning">{about.learning}</Field>
          <Field label="Career goal">{about.goal}</Field>
        </div>

        <div className="space-y-6 sm:border-l sm:border-[color:var(--color-border)] sm:pl-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-muted)]">
              Education
            </p>
            <p className="mt-2 text-sm font-medium text-[color:var(--color-ink)]">
              {education.degree}
            </p>
            <p className="text-sm text-[color:var(--color-ink-muted)]">
              {education.school}
            </p>
            <p className="mt-1 text-sm text-[color:var(--color-ink-muted)]">
              {education.period} · {education.detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-muted)]">
        {label}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--color-ink)]">
        {children}
      </p>
    </div>
  );
}
