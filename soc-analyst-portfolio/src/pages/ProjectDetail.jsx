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
                  <Link
                    key={link.to}
                    to={link.to}
                    className="inline-flex items-center rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                  >
                    {link.label}
                  </Link>
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
