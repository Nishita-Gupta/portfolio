import { skills } from "@/lib/data";
import { SkillChip } from "@/components/SkillChip";

export function SkillsCard({ expanded }: { expanded: boolean }) {
  if (!expanded) {
    return (
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[color:var(--color-ink)]">
            Skills
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
            {skills.map((g) => g.category).join(" · ")}
          </p>
        </div>
        <p className="mt-4 text-xs font-medium text-[color:var(--color-accent)]">
          Click to expand →
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[color:var(--color-ink)] sm:text-4xl">
        Skills
      </h3>
      <p className="mt-3 max-w-md text-sm text-[color:var(--color-ink-muted)]">
        Grouped by where I use them most.
      </p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-muted)]">
              {group.category}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillChip key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
