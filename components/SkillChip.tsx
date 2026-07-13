export function SkillChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3.5 py-1.5 text-[13px] font-medium text-[color:var(--color-ink)] transition-colors duration-200 hover:border-[color:var(--color-accent)]/40 hover:bg-[color:var(--color-accent-soft)]">
      {label}
    </span>
  );
}
