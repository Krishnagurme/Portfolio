export default function EventTimeline({ steps }) {
  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Activity Flow</p>
        <div className="mt-6 space-y-4">
          {steps.map((step, index) => (
            <div key={step} className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)] text-sm font-semibold text-slate-950">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold text-white">{step}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="pl-12 text-sm text-[var(--color-secondary-text)]">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
