import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { profile } from "@/lib/data";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, icon: LinkedinIcon },
];

export function ContactCard({ expanded }: { expanded: boolean }) {
  if (!expanded) {
    return (
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[color:var(--color-ink)]">
            Contact
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
            Open to internships and full-time roles.
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          {links.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-ink-muted)]"
            >
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[color:var(--color-ink)] sm:text-4xl">
        Let&apos;s talk
      </h3>
      <p className="mt-3 max-w-md text-sm text-[color:var(--color-ink-muted)]">
        Open to internship and new-grad software engineering roles. Reach me anywhere below.
      </p>

      <div className="mt-8 divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
        {links.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={(e) => e.stopPropagation()}
            className="group flex items-center justify-between gap-4 py-4 transition-colors duration-200 hover:text-[color:var(--color-accent)]"
          >
            <span className="flex items-center gap-3">
              <Icon className="h-4 w-4 text-[color:var(--color-ink-muted)] transition-colors duration-200 group-hover:text-[color:var(--color-accent)]" />
              <span className="text-sm font-medium text-[color:var(--color-ink-muted)] transition-colors duration-200 group-hover:text-[color:var(--color-accent)]">
                {label}
              </span>
            </span>
            <span className="flex items-center gap-1.5 text-sm text-[color:var(--color-ink)]">
              {value}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
