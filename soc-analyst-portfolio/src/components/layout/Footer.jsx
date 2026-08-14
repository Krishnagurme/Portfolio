import { ExternalLink, Mail } from 'lucide-react'
import { Container } from '../ui/Container.jsx'
import { siteConfig } from '../../data/siteConfig.js'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { label: 'GitHub', icon: ExternalLink, href: siteConfig.github },
    { label: 'LinkedIn', icon: ExternalLink, href: siteConfig.linkedin },
    { label: 'Email', icon: Mail, href: siteConfig.email ? `mailto:${siteConfig.email}` : '' },
  ]

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-10 text-[var(--color-secondary-text)]">
      <Container className="grid gap-8 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[2fr_1fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">{siteConfig.name}</p>
          <p className="text-lg font-semibold text-white">SOC Analyst | Cybersecurity Enthusiast</p>
          <p className="max-w-xl text-sm leading-7 text-[var(--color-secondary-text)]">
            Hands-on defensive security • SOC labs • Detection Engineering • Threat Hunting • Incident Response.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {socialLinks
              .filter((item) => item.href)
              .map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text)] transition hover:bg-[var(--color-surface-elevated)]"
                >
                  <item.icon className="h-4 w-4 text-[var(--color-accent)]" />
                  {item.label}
                </a>
              ))}
          </div>
          <p className="text-xs text-[var(--color-secondary-text)]">
            © {currentYear} {siteConfig.name}. Cybersecurity Portfolio.
          </p>
        </div>
      </Container>
    </footer>
  )
}
