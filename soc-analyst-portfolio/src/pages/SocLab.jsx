import { Link } from 'react-router-dom'
import { Container } from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import LabArchitecture from '../components/lab/LabArchitecture.jsx'
import LabComponents from '../components/lab/LabComponents.jsx'
import TelemetrySources from '../components/lab/TelemetrySources.jsx'
import LabWorkflow from '../components/lab/LabWorkflow.jsx'
import LabSkills from '../components/lab/LabSkills.jsx'
import LabEvidence from '../components/lab/LabEvidence.jsx'
import LabExpansion from '../components/lab/LabExpansion.jsx'
import { labData } from '../data/labData.js'

export default function SocLab() {
  return (
    <main className="space-y-20 py-12 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow={labData.header.eyebrow}
          heading={labData.header.heading}
          description={labData.header.description}
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <span className="inline-flex rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950">
              {labData.header.badge}
            </span>
            <div className="mt-8 space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">{labData.purpose.title}</p>
              <p className="text-base leading-8 text-[var(--color-secondary-text)]">
                {labData.purpose.paragraphs[0]}
              </p>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Lab workflow</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {labData.purpose.workflow.map((step) => (
                    <div key={step} className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-sm text-[var(--color-text)]">
                      <p className="font-semibold text-white">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Guiding principle</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Focused on practical SOC learning, not enterprise claims</h2>
            <p className="mt-6 text-base leading-8 text-[var(--color-secondary-text)]">
              This home lab is built for personal SOC development using a controlled Windows endpoint, open-source monitoring tools, and safe test scenarios. It is intended to show capability with security telemetry and analysis, not to represent any live production network where I do not have operational access.
            </p>
          </div>
        </div>
      </Container>

      <Container className="space-y-16">
        <LabArchitecture />
        <LabComponents />
        <TelemetrySources />
        <LabWorkflow />
        <LabSkills />
        <LabEvidence />
        <section className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Investigations</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Translate lab telemetry into analyst investigation practice</h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-secondary-text)]">
            Review the investigations section to connect lab evidence with structured analysis, event narrative, and SOC documentation practice. The lab environment has supported:
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-base leading-7 text-[var(--color-secondary-text)]">
            <li><strong>CASE-001:</strong> Windows Failed Authentication Detection</li>
            <li><strong>CASE-002:</strong> PowerShell Process Investigation</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/investigations"
              className="inline-flex items-center justify-center rounded-[1rem] bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              View Investigations
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              View Project
            </Link>
          </div>
        </section>
        <LabExpansion />
      </Container>
    </main>
  )
}
