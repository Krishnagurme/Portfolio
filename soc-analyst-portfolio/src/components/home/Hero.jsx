import { Link } from 'react-router-dom'
import { FileText, ExternalLink, Shield, Search } from 'lucide-react'
import { Button } from '../ui/Button.jsx'
import { Badge } from '../ui/Badge.jsx'
import { siteConfig } from '../../data/siteConfig.js'
import TelemetryPanel from './TelemetryPanel.jsx'

export default function Hero() {
  const statusText = siteConfig.availability || 'Open to Entry-Level SOC Opportunities'
  const name = siteConfig.name || 'Portfolio'

  return (
    <section className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:px-8 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-[var(--color-surface-elevated)] px-4 py-2 text-sm text-[var(--color-secondary-text)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-success)]" />
            {statusText}
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-secondary-text)]">{name}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Junior SOC Analyst</h1>
            <p className="text-base text-[var(--color-secondary-text)] sm:text-lg">{siteConfig.role === 'Junior SOC Analyst' ? 'Entry-level Blue Team candidate focused on practical SOC monitoring and alert analysis.' : siteConfig.role}</p>
            <p className="text-base text-[var(--color-accent)]">Blue Team • Security Monitoring • Threat Detection</p>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-[var(--color-secondary-text)] sm:text-base">
            Building hands-on defensive security experience through SOC labs focused on Windows telemetry, SIEM monitoring, log analysis, Sysmon, and security-event detection.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button as={Link} to="/soc-lab" variant="primary" icon={Shield}>
              View SOC Lab
            </Button>
            <Button as={Link} to="/investigations" variant="secondary" icon={Search}>
              View Investigations
            </Button>
            <Button
              as="a"
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              icon={FileText}
            >
              View Resume
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-secondary-text)]">
            {siteConfig.github ? (
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--color-text)] hover:text-[var(--color-accent)]">
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-[var(--color-secondary-text)]">
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> GitHub pending
              </span>
            )}
            {siteConfig.linkedin ? (
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--color-text)] hover:text-[var(--color-accent)]">
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> LinkedIn
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-[var(--color-secondary-text)]">
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> LinkedIn pending
              </span>
            )}
          </div>
        </div>

        <div className="lg:pt-6">
          <TelemetryPanel />
        </div>
      </div>
    </section>
  )
}
