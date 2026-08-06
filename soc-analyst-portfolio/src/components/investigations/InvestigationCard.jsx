import { Link } from 'react-router-dom'

export default function InvestigationCard({ investigation }) {
  return (
    <article className="group rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)] transition hover:-translate-y-1 hover:border-[var(--color-accent)]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">{investigation.caseNumber}</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{investigation.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-secondary-text)]">{investigation.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-success)]">{investigation.type}</span>
          <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-secondary-text)]">{investigation.status}</span>
        </div>
      </div>

      <div className={`mt-6 grid gap-3 grid-cols-2 ${investigation.verdict ? 'sm:grid-cols-4' : 'sm:grid-cols-3'}`}>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Event IDs</p>
          <p className="mt-2 text-sm text-white">{investigation.eventIds.join(', ')}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Tools</p>
          <p className="mt-2 text-sm text-white">{investigation.tools.join(', ')}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Status</p>
          <p className="mt-2 text-sm text-white">{investigation.status}</p>
        </div>
        {investigation.verdict && (
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Verdict</p>
            <p className="mt-2 text-sm text-white">{investigation.verdict}</p>
          </div>
        )}
      </div>

      <Link
        to={`/investigations/${investigation.slug}`}
        className="mt-6 inline-flex items-center rounded-[1rem] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--color-accent-strong)]"
      >
        View Investigation
      </Link>
    </article>
  )
}
