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

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="inline-flex items-center rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        to={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center rounded-[1rem] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      >
        View Project Details
      </Link>
    </article>
  )
}
