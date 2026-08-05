import { Monitor, Laptop2, Wifi, Users } from 'lucide-react'
import { Card } from '../ui/Card.jsx'
import { homeData } from '../../data/homeData.js'

const iconMap = {
  Monitor,
  Laptop2,
  Wifi,
  Users,
}

export default function CoreFocus() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Core focus</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">SOC focus areas for entry-level defenders</h2>
        <p className="mt-4 text-base leading-7 text-[var(--color-secondary-text)]">
          Practical security work starts with telemetry, Windows security, network visibility and identity fundamentals.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {homeData.coreFocus.map((focus) => {
          const Icon = iconMap[focus.icon]
          return (
            <Card key={focus.title} hoverable>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{focus.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-secondary-text)]">{focus.description}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {focus.badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-1 text-xs uppercase tracking-[0.28em] text-[var(--color-secondary-text)]">
                    {badge}
                  </span>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
