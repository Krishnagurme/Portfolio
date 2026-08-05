import { labData } from '../../data/labData.js'

export default function LabExpansion() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Future lab plans</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Planned homelab maturity steps</h2>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {labData.plannedExpansion.map((item) => (
          <article key={item.title} className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-secondary-text)]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
