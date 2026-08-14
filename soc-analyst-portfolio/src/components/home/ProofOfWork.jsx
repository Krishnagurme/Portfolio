import { Link } from 'react-router-dom'
import { Activity, ShieldCheck, Layers } from 'lucide-react'
import { Button } from '../ui/Button.jsx'
import { Card } from '../ui/Card.jsx'
import { homeData } from '../../data/homeData.js'

export default function ProofOfWork() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Hands-on work</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Evidence over claims</h2>
        <p className="mt-4 text-base leading-7 text-[var(--color-secondary-text)]">
          My portfolio is focused on documenting practical SOC home lab workflows, detection engineering, threat hunting, and investigation learning.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {homeData.proofCards.map((card, idx) => (
          <Card
            key={card.title}
            hoverable
            className="flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[var(--color-accent)]">
                {idx === 0 ? (
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                ) : idx === 1 ? (
                  <Activity className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Layers className="h-5 w-5" aria-hidden="true" />
                )}
                <p className="text-xs font-bold uppercase tracking-[0.25em]">SOC Project {idx + 1}</p>
              </div>

              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="text-sm leading-7 text-[var(--color-secondary-text)]">{card.description}</p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {card.badges.map((badge) => (
                  <span key={badge} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-secondary-text)]">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button: Identical primary button style for all projects */}
            <Button
              as={Link}
              to={card.to}
              variant="primary"
              className="mt-6 font-semibold"
            >
              {card.ctaText}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
