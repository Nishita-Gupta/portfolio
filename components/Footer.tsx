import { profile } from "@/lib/data";
import { CellLabel } from "@/components/CellLabel";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-[color:var(--color-border)] pt-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          
          <p className="text-sm text-[color:var(--color-ink-muted)]">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[color:var(--color-ink-muted)]">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors duration-200 hover:text-[color:var(--color-accent)]"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[color:var(--color-accent)]"
          >
            {profile.githubHandle}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[color:var(--color-accent)]"
          >
            {profile.linkedinHandle}
          </a>
        </div>
      </div>
    </footer>
  );
}
