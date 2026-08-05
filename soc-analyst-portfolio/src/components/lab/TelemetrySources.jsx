import { labData } from '../../data/labData.js'

export default function TelemetrySources() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Telemetry Sources</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Telemetry collected in the lab</h2>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {labData.telemetrySources.map((source) => (
          <article key={source.title} className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-secondary-text)]">{source.title}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-secondary-text)]">{source.description}</p>
            <p className="mt-4 rounded-3xl bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)]">
              <span className="font-semibold text-white">Example:</span> {source.example}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
