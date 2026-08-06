import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { Badge } from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import ContactMethods from '../components/contact/ContactMethods.jsx'
import { siteConfig } from '../data/siteConfig.js'

function isConfigured(value) {
  return typeof value === 'string' && value.trim() !== '' && !value.includes('YOUR_') && !value.includes('your') && !value.includes('example.com')
}

export default function Contact() {
  const availability = siteConfig.availability || 'Open to Entry-Level SOC Opportunities'

  return (
    <main className="space-y-10 py-10 lg:py-14">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          heading="Let's Connect"
          description="I am currently building practical experience toward Junior SOC Analyst and entry-level security operations opportunities. You can reach me through the professional channels below."
        />
      </Container>

      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="space-y-5">
            <div className="space-y-3">
              <Badge variant="info">{siteConfig.role || 'Junior SOC Analyst'}</Badge>
              <h2 className="text-2xl font-semibold text-white">{availability}</h2>
              <p className="text-base leading-7 text-[var(--color-secondary-text)]">
                My portfolio is focused on practical defensive work, Windows security telemetry, SOC operations, and documented investigations that demonstrate how I learn and communicate.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button as={Link} to="/soc-lab" variant="primary">
                View SOC Lab
              </Button>
              <Button as={Link} to="/investigations" variant="secondary">
                View Case Studies
              </Button>
            </div>
          </Card>

          <Card className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Recruiter focus</p>
            <h3 className="text-xl font-semibold text-white">Quick path to the strongest evidence</h3>
            <ul className="space-y-3 text-sm leading-7 text-[var(--color-secondary-text)]">
              <li>• Review the SOC home lab and investigation workflow.</li>
              <li>• Open the resume for education, skills, and current focus.</li>
              <li>• Use the professional contact links for follow-up.</li>
            </ul>
          </Card>
        </div>
      </Container>

      <Container>
        <ContactMethods />
      </Container>

      <Container>
        <Card className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Resume</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Resume</h3>
            </div>
            <Badge variant="warning">{isConfigured(siteConfig.resume) ? 'Available' : 'Pending'}</Badge>
          </div>
          <p className="text-base leading-7 text-[var(--color-secondary-text)]">
            View my resume for a concise overview of my education, technical skills, projects, and current cybersecurity focus.
          </p>
          {isConfigured(siteConfig.resume) ? (
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)]"
            >
              View Resume
            </a>
          ) : (
            <div className="rounded-[1rem] border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-secondary-text)]">
              Resume will be added before deployment.
            </div>
          )}
        </Card>
      </Container>

      <Container>
        <Card className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Explore my work</p>
          <div className="grid gap-4 md:grid-cols-3">
            <Link to="/soc-lab" className="rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)]">
              <h3 className="text-lg font-semibold text-white">SOC Home Lab</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-secondary-text)]">Review the home lab environment and the defensive workflow it supports.</p>
            </Link>
            <Link to="/investigations/windows-failed-authentication" className="rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)]">
              <h3 className="text-lg font-semibold text-white">CASE-001</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-secondary-text)]">Explore the investigation narrative and evidence trail for the Windows failed authentication case.</p>
            </Link>
            <Link to="/investigations/powershell-process-investigation" className="rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)]">
              <h3 className="text-lg font-semibold text-white">CASE-002</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-secondary-text)]">Explore the process-creation evidence and triage approach for the PowerShell alert case.</p>
            </Link>
          </div>
        </Card>
      </Container>
    </main>
  )
}
