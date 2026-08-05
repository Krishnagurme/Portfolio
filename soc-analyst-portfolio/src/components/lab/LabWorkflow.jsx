import { labData } from '../../data/labData.js'

export default function LabWorkflow() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Investigation workflow</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">How lab events move through the SOC workflow</h2>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
          <div className="space-y-5">
            {labData.purpose.workflow.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-secondary-text)]">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{step}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Event example</p>
          <div className="mt-4 space-y-5 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-6 text-sm leading-7 text-[var(--color-secondary-text)]">
            <div>
              <h3 className="text-xl font-semibold text-white">{labData.eventExample.title}</h3>
              <p className="mt-3">{labData.eventExample.details.purpose}</p>
            </div>
            <div className="grid gap-3">
              <div className="grid gap-1 rounded-[1.5rem] bg-[var(--color-surface-elevated)] p-4">
                <span className="text-xs uppercase tracking-[0.28em] text-[var(--color-secondary-text)]">Event ID</span>
                <p className="font-semibold text-white">{labData.eventExample.details.eventId}</p>
              </div>
              <div className="grid gap-1 rounded-[1.5rem] bg-[var(--color-surface-elevated)] p-4">
                <span className="text-xs uppercase tracking-[0.28em] text-[var(--color-secondary-text)]">Source</span>
                <p className="font-semibold text-white">{labData.eventExample.details.source}</p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-surface-elevated)] p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-secondary-text)]">Observed path</p>
                <div className="mt-3 space-y-2">
                  {labData.eventExample.steps.map((item) => (
                    <p key={item} className="text-sm text-[var(--color-text)]">• {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
