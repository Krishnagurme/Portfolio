
import { Link } from 'react-router-dom'
import { Activity, ShieldCheck } from 'lucide-react'
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
          My portfolio is focused on documenting practical SOC home lab workflows and investigation learning—not only skill lists.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card hoverable>
          <div className="flex items-center gap-3 text-[var(--color-accent)]">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            <p className="text-sm uppercase tracking-[0.3em]">SOC Home Lab</p>
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-white">{homeData.proofCards[0].title}</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--color-secondary-text)]">{homeData.proofCards[0].description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {homeData.proofCards[0].badges.map((badge) => (
              <span key={badge} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs uppercase tracking-[0.28em] text-[var(--color-secondary-text)]">
                {badge}
              </span>
            ))}
          </div>
          <Button as={Link} to={homeData.proofCards[0].to} variant="primary" className="mt-6">
            {homeData.proofCards[0].ctaText}
          </Button>
        </Card>

        <Card hoverable>
          <div className="flex items-center gap-3 text-[var(--color-accent)]">
            <Activity className="h-5 w-5" aria-hidden="true" />
            <p className="text-sm uppercase tracking-[0.3em]">Security Investigations</p>
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-white">{homeData.proofCards[1].title}</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--color-secondary-text)]">{homeData.proofCards[1].description}</p>
          <div className="mt-5 space-y-3 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-sm text-[var(--color-secondary-text)]">
            <div className="flex items-center justify-between gap-4">
              <span className="font-semibold text-white">{homeData.proofCards[1].badgeTag}</span>
              <span className="rounded-full bg-[var(--color-surface-elevated)] px-3 py-1 text-xs uppercase tracking-[0.28em] text-[var(--color-secondary-text)]">Example</span>
            </div>
            <p className="font-mono text-sm text-white">{homeData.proofCards[1].exampleLabel}</p>
            <p className="text-sm text-[var(--color-secondary-text)]">{homeData.proofCards[1].exampleTitle}</p>
            <p className="font-mono text-sm text-white">{homeData.proofCards[1].exampleNote}</p>
          </div>
          <Button as={Link} to={homeData.proofCards[1].to} variant="secondary" className="mt-6">
            {homeData.proofCards[1].ctaText}
          </Button>
        </Card>
      </div>
    </section>
  )
}
