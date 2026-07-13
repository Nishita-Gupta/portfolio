import { cn } from "@/lib/utils";

export function CellLabel({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "font-mono text-[11px] tracking-wide text-[color:var(--color-ink-muted)]/70 select-none",
        className
      )}
    >
      {id}
    </span>
  );
}
