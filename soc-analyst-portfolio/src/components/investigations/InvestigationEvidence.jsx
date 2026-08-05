export default function InvestigationEvidence({ evidence }) {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Evidence</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {evidence.map((item) => (
          <article key={item.id} className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-[var(--color-secondary-text)]">{item.source}</p>
            </div>
            {item.image ? (
              <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)]">
                <img src={item.image} alt={item.alt} className="h-52 w-full object-cover" />
              </div>
            ) : (
              <div className="flex min-h-[12rem] flex-col justify-center rounded-3xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] p-5 text-center text-sm text-[var(--color-secondary-text)]">
                <p className="font-semibold text-white">Evidence pending</p>
                <p className="mt-2">{item.title}</p>
                <p className="mt-3">Evidence documentation is in progress.</p>
              </div>
            )}
            <p className="mt-4 text-sm leading-6 text-[var(--color-secondary-text)]">{item.description}</p>
            {item.caption && <p className="mt-3 text-xs italic text-[var(--color-secondary-text)]">{item.caption}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}
