import { Link, useParams, Navigate } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { Container } from '../components/ui/Container.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <Container className="space-y-12 py-6 lg:py-10 text-white">
      <section className="space-y-6">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">{project.type}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{project.title}</h1>
          <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--color-secondary-text)]">
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 uppercase tracking-[0.3em]">{project.status}</span>
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 uppercase tracking-[0.3em]">{project.timeline}</span>
          </div>
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          {project.sections.map((section) => (
            <article key={section.title} className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)] whitespace-pre-line">{section.content}</p>
            </article>
          ))}

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Project highlights</h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-[var(--color-secondary-text)]">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>

          {project.links && project.links.length > 0 && (
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-semibold text-white">Project links</h2>
              <div className="mt-6 grid gap-3">
                {project.links.map((link) => (
                  link.to.startsWith('http') ? (
                    <a
                      key={link.to}
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)] hover:border-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                    >
                      <svg className="h-5 w-5 fill-current text-[var(--color-accent)]" viewBox="0 0 24 24">
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
            </div>
          )}

          <div className="space-y-4 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-[1rem] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              Back to Projects
            </Link>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Project details</p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Goal</p>
                <p className="mt-2 text-base text-white">Validate Windows event capture and analyst evidence in a SOC home lab.</p>
              </div>
              {project.techStack && (
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Tech Stack</p>
                  <p className="mt-2 text-base text-white">{project.techStack}</p>
                </div>
              )}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Project type</p>
                <p className="mt-2 text-base text-white">{project.type}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Status</p>
                <p className="mt-2 text-base text-white">{project.status}</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Why this is honest work</p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-secondary-text)]">This project documents real lab verification and investigation learning instead of fabricated enterprise outcomes.</p>
          </div>
        </aside>
      </section>
    </Container>
  )
}
