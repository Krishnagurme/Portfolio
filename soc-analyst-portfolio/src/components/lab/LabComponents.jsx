import { labData } from '../../data/labData.js'

export default function LabComponents() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Lab Components</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Current components in the home lab</h2>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {labData.components.map((component) => (
          <article key={component.name} className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{component.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--color-secondary-text)]">{component.role}</p>
              </div>
              <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-success)]">
                {component.status}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--color-secondary-text)]">{component.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
