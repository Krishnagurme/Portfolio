import { Container } from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Badge from '../components/ui/Badge.jsx'
import Button from '../components/ui/Button.jsx'

const focusAreas = [
  'Detection engineering',
  'Incident triage and response',
  'Threat hunting workflows',
  'SOC tooling and data analysis',
]

const roadmap = [
  {
    title: 'Practice investigation workflows',
    detail: 'Turn public incident scenarios into repeatable notes, timelines, and evidence summaries.',
    status: 'In progress',
  },
  {
    title: 'Strengthen defensive analytics',
    detail: 'Build and refine detection ideas around log sources, suspicious behavior, and triage patterns.',
    status: 'In progress',
  },
  {
    title: 'Document lessons clearly',
    detail: 'Use the portfolio as a record of how I learn, evaluate, and communicate technical findings.',
    status: 'Planned',
  },
]

const certifications = [
  {
    name: 'CompTIA Security+',
    provider: 'CompTIA',
    status: 'Planned',
    variant: 'warning',
  },
  {
    name: 'SC-200: Microsoft Security Operations Analyst',
    provider: 'Microsoft',
    status: 'In progress',
    variant: 'info',
  },
  {
    name: 'Blue Team Level 1 (BTL1)',
    provider: 'Security Blue Team',
    status: 'Planned',
    variant: 'warning',
  },
]

export default function Learning() {
  return (
    <main className="space-y-10 py-10 lg:py-14">
      <Container>
        <SectionHeading
          eyebrow="Learning"
          heading="Building a credible blue-team development path"
          description="My learning work is focused on defensible practice, consistent documentation, and steady growth toward SOC and incident response responsibilities."
        />
      </Container>

      <Container>
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Current focus</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Practical skills over theory-only progress</h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-secondary-text)]">
              I am strengthening the habits that matter in security operations: reading evidence carefully, connecting signals to likely outcomes, and documenting investigations in a way that is easy to follow.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Badge key={area} variant="info">
                  {area}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Development approach</p>
            <ul className="mt-5 space-y-4" aria-label="Learning roadmap">
              {roadmap.map((item) => (
                <li key={item.title} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-secondary-text)]">{item.detail}</p>
                    </div>
                    <Badge variant="neutral">{item.status}</Badge>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Container>

      <Container>
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold text-white">Certifications and training</h3>
              <Badge variant="warning">Planned or in progress</Badge>
            </div>
            <ul className="mt-6 space-y-4" aria-label="Certification list">
              {certifications.map((certification) => (
                <li key={certification.name} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                  <div>
                    <p className="font-semibold text-white">{certification.name}</p>
                    <p className="mt-1 text-sm text-[var(--color-secondary-text)]">{certification.provider}</p>
                  </div>
                  <Badge variant={certification.variant}>{certification.status}</Badge>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Career development</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Moving from study into operational readiness</h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-secondary-text)]">
              This page is meant to show progress honestly: the work is active, the next milestones are clear, and the portfolio is being used to demonstrate growth rather than overstate completion.
            </p>
            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                <p className="text-sm font-semibold text-white">Short-term goal</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-secondary-text)]">Strengthen evidence-based investigation writing and build more hands-on SOC lab artifacts.</p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                <p className="text-sm font-semibold text-white">Medium-term goal</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-secondary-text)]">Continue progressing through relevant certifications while keeping the portfolio aligned with real skill development.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="/soc-lab" variant="primary">
                Explore SOC Lab
              </Button>
              <Button as="a" href="/contact" variant="secondary">
                Connect
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
