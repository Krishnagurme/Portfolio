import { ExternalLink, FileText, Mail, SquareArrowOutUpRight } from 'lucide-react'
import { Badge } from '../ui/Badge.jsx'
import Card from '../ui/Card.jsx'
import { siteConfig } from '../../data/siteConfig.js'

function isConfigured(value) {
  return typeof value === 'string' && value.trim() !== '' && !value.includes('YOUR_') && !value.includes('your') && !value.includes('example.com')
}

function ContactMethods() {
  const methods = [
    {
      title: 'Email',
      value: isConfigured(siteConfig.email) ? siteConfig.email : 'Email will be added before deployment.',
      description: 'Professional contact for recruiter follow-up.',
      href: isConfigured(siteConfig.email) ? `mailto:${siteConfig.email}` : null,
      icon: Mail,
      cta: isConfigured(siteConfig.email) ? 'Send Email' : 'Email Pending',
      variant: isConfigured(siteConfig.email) ? 'info' : 'warning',
      external: false,
    },
    {
      title: 'LinkedIn',
      value: isConfigured(siteConfig.linkedin) ? siteConfig.linkedin : 'LinkedIn profile will be added before deployment.',
      description: 'Professional profile and career background.',
      href: isConfigured(siteConfig.linkedin) ? siteConfig.linkedin : null,
      icon: ExternalLink,
      cta: isConfigured(siteConfig.linkedin) ? 'View LinkedIn' : 'LinkedIn Pending',
      variant: isConfigured(siteConfig.linkedin) ? 'info' : 'warning',
      external: true,
    },
    {
      title: 'GitHub',
      value: isConfigured(siteConfig.github) ? siteConfig.github : 'GitHub profile will be added before deployment.',
      description: 'Projects, code samples, and technical notes.',
      href: isConfigured(siteConfig.github) ? siteConfig.github : null,
      icon: SquareArrowOutUpRight,
      cta: isConfigured(siteConfig.github) ? 'View GitHub' : 'GitHub Pending',
      variant: isConfigured(siteConfig.github) ? 'info' : 'warning',
      external: true,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {methods.map((method) => {
        const Icon = method.icon
        const isReady = Boolean(method.href)

        return (
          <Card key={method.title} className="flex h-full flex-col justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-2.5 text-[var(--color-accent)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                    <p className="text-sm text-[var(--color-secondary-text)]">{method.description}</p>
                  </div>
                </div>
                <Badge variant={method.variant}>{isReady ? 'Ready' : 'Pending'}</Badge>
              </div>

              <p className="overflow-wrap-anywhere text-sm leading-7 text-[var(--color-secondary-text)]">
                {method.value}
              </p>
            </div>

            {isReady ? (
              <a
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)]"
              >
                {method.title === 'Email' ? <Mail className="h-4 w-4" aria-hidden="true" /> : <FileText className="h-4 w-4" aria-hidden="true" />}
                {method.cta}
              </a>
            ) : (
              <div className="rounded-[1rem] border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-center text-sm text-[var(--color-secondary-text)]">
                {method.cta}
              </div>
            )}
          </Card>
        )
      })}
    </div>
  )
}

export default ContactMethods
