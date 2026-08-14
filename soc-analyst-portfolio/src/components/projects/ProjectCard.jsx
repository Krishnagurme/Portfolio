import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:border-[var(--color-accent)]">
      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">{project.type}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        <p className="text-sm leading-7 text-[var(--color-secondary-text)]">{project.summary}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Status</p>
            <p className="mt-2 text-sm text-white">{project.status}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Focus</p>
            <p className="mt-2 text-sm text-white">{project.focus}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center rounded-[1rem] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
        >
          View Project Details
        </Link>

        {project.links && project.links.map((link) => (
          link.to.startsWith('http') ? (
            <a
              key={link.to}
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)] hover:border-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              <svg className="h-4 w-4 fill-current text-[var(--color-accent)]" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>{link.label}</span>
            </a>
          ) : (
            <Link
              key={link.to}
              to={link.to}
              className="inline-flex items-center rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              {link.label}
            </Link>
          )
        ))}
      </div>
    </article>
  )
}
