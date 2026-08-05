import { ChevronDown } from 'lucide-react'
import { aboutData } from '../../data/aboutData.js'

export default function LearningApproach() {
  return (
    <section className="space-y-6">
      <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Learning approach</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">How I turn learning into practical lab evidence</h3>
          </div>
          <p className="text-base leading-7 text-[var(--color-secondary-text)]">{aboutData.practicalMessage}</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {aboutData.workflow.map((step, index) => (
          <div key={step.title} className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent)]/15 text-[var(--color-accent)] font-semibold">
                {index + 1}
              </div>
              <h4 className="text-lg font-semibold text-white">{step.title}</h4>
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--color-secondary-text)]">{step.description}</p>
            {index < aboutData.workflow.length - 1 && (
              <div className="mt-5 flex items-center justify-end text-[var(--color-secondary-text)]">
                <ChevronDown className="h-5 w-5" aria-hidden="true" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
