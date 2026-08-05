import { labData } from '../../data/labData.js'

export default function LabSkills() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">SOC Skills practiced</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Hands-on skills built in the lab</h2>
        </div>
      </div>
      <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
        <p className="text-sm leading-7 text-[var(--color-secondary-text)]">
          These are the core SOC concepts I practice through endpoint telemetry collection, event review, and alert analysis in the home lab.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {labData.skillsPracticed.map((skill) => (
            <span key={skill} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-sm text-[var(--color-text)]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
