import { Card } from '../ui/Card.jsx'
import { Badge } from '../ui/Badge.jsx'
import { aboutData } from '../../data/aboutData.js'

export default function CareerFocus() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
      <Card hoverable>
        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">Career focus</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Target role and direction</h3>
          </div>
          <div className="space-y-3 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm uppercase tracking-[0.25em] text-[var(--color-secondary-text)]">Target Role</span>
              <Badge variant="success">{aboutData.careerFocus.targetRole}</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm uppercase tracking-[0.25em] text-[var(--color-secondary-text)]">Primary Direction</span>
              <Badge variant="info">{aboutData.careerFocus.primaryDirection}</Badge>
            </div>
          </div>
        </div>
      </Card>

      <Card hoverable>
        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">Focus areas</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Where I am developing my SOC skills</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutData.careerFocus.areas.map((area) => (
              <div key={area} className="rounded-3xl bg-[var(--color-surface-elevated)] p-4">
                <p className="font-semibold text-white">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  )
}
