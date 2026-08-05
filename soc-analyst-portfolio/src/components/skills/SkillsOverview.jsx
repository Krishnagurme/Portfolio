import { skillsData } from '../../data/skills.js'
import { Badge } from '../ui/Badge.jsx'

export default function SkillsOverview() {
  return (
    <section className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Skills summary</p>
          <h3 className="mt-3 text-3xl font-semibold text-white">Practical SOC skill coverage</h3>
          <p className="mt-4 text-base leading-7 text-[var(--color-secondary-text)]">
            Skills developed through structured learning and hands-on cybersecurity lab practice, organized around common SOC Analyst responsibilities.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {skillsData.summary.map((item) => (
            <div key={item} className="rounded-3xl bg-[var(--color-bg)] p-4 text-sm text-[var(--color-secondary-text)]">
              <p className="font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Badge variant="success">LAB PRACTICE</Badge>
        <Badge variant="info">WORKING KNOWLEDGE</Badge>
        <Badge variant="warning">CURRENTLY LEARNING</Badge>
      </div>
    </section>
  )
}
