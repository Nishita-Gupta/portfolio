import { Download } from "lucide-react";
import { profile, experience, certifications } from "@/lib/data";

export function ResumeCard({ expanded }: { expanded: boolean }) {
  if (!expanded) {
    return (
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[color:var(--color-ink)]">
            Resume
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
            Education, experience and certifications in one PDF.
          </p>
        </div>
        <a
          href={profile.resumeFile}
          download
          onClick={(e) => e.stopPropagation()}
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-[var(--radius-control)] border border-[color:var(--color-border-strong)] bg-[color:var(--color-surface)] px-4 py-2 text-sm font-medium text-[color:var(--color-ink)] transition-colors duration-200 hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
        >
          Download
          <Download className="h-3.5 w-3.5" />
        </a>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[color:var(--color-ink)] sm:text-4xl">
        Resume
      </h3>
      <p className="mt-3 max-w-md text-sm text-[color:var(--color-ink-muted)]">
        A quick summary of my experience, or the full PDF below.
      </p>

      <a
        href={profile.resumeFile}
        download
        onClick={(e) => e.stopPropagation()}
        className="group mt-6 inline-flex items-center gap-2.5 rounded-[var(--radius-control)] bg-[color:var(--color-ink)] px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
      >
        Download Resume (PDF)
        <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      </a>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-muted)]">
            Experience
          </p>
          <div className="mt-3">
            <p className="text-sm font-medium text-[color:var(--color-ink)]">
              {experience.title} · {experience.company}
            </p>
            <p className="mt-1 text-xs text-[color:var(--color-ink-muted)]">
              {experience.period}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-muted)]">
              {experience.detail}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-muted)]">
            Certifications
          </p>
          <div className="mt-3 space-y-4">
            {certifications.map((cert) => (
              <div key={cert.name}>
                <p className="text-sm font-medium text-[color:var(--color-ink)]">
                  {cert.name}
                </p>
                <p className="mt-1 text-xs text-[color:var(--color-ink-muted)]">
                  {cert.issuer} · {cert.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
