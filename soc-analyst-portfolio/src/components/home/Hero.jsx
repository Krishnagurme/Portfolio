import { Link } from 'react-router-dom'
import { FileText, ExternalLink, Shield, Search, Layers } from 'lucide-react'
import { Button } from '../ui/Button.jsx'
import { siteConfig } from '../../data/siteConfig.js'
import TelemetryPanel from './TelemetryPanel.jsx'

export default function Hero() {
  const statusText = siteConfig.availability || 'Open to Entry-Level SOC Opportunities'
  const resumePdfUrl = siteConfig.resume || '/resume/resume.pdf'

  return (
    <section className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:px-8 sm:py-8 lg:px-8 lg:py-8">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        {/* LEFT COLUMN: Main Candidate Messaging */}
        <div className="space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-[var(--color-surface-elevated)] px-3.5 py-1.5 text-xs text-[var(--color-secondary-text)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-success)]" />
            <span>{statusText}</span>
          </div>

          {/* Typography Hierarchy */}
          <div className="space-y-1.5">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-accent)]">
              KRISHNA GURME
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              SOC Analyst <span className="font-normal text-[var(--color-secondary-text)]">|</span> Cybersecurity Enthusiast
            </h1>
            <p className="text-sm font-medium text-[var(--color-secondary-text)] sm:text-base">
              Hands-on Security Operations Center (SOC) analysis, detection engineering, threat hunting, and Windows endpoint telemetry monitoring.
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Blue Team • Security Monitoring • Detection Engineering • Threat Hunting
            </p>
          </div>

          {/* Short Supporting Paragraph */}
          <p className="text-xs sm:text-sm leading-6 text-[var(--color-secondary-text)]">
            Building practical defensive security experience through enterprise-style SOC labs, custom Wazuh rules, Sysmon endpoint telemetry, Sigma signatures, MITRE ATT&CK mapping, and structured case investigations.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <Button as={Link} to="/projects" variant="primary" icon={Layers}>
              Explore All Projects
            </Button>
            <Button as={Link} to="/soc-lab" variant="secondary" icon={Shield}>
              View SOC Lab
            </Button>
            <Button as={Link} to="/investigations" variant="secondary" icon={Search}>
              View Investigations
            </Button>
            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[1rem] border border-[var(--color-border)] bg-transparent px-4 py-2.5 text-xs font-semibold text-white transition duration-200 hover:bg-white/5"
            >
              <FileText className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-[var(--color-secondary-text)]">
            {siteConfig.github && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                <span>GitHub Profile</span>
              </a>
            )}
            {siteConfig.linkedin && (
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                <span>LinkedIn Profile</span>
              </a>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Compact SOC Environment Panel */}
        <div className="lg:pl-2">
          <TelemetryPanel />
        </div>
      </div>
    </section>
  )
}
