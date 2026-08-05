import { Link, useParams, Navigate } from 'react-router-dom'
import { investigations } from '../data/investigations.js'
import EventTimeline from '../components/investigations/EventTimeline.jsx'
import InvestigationEvidence from '../components/investigations/InvestigationEvidence.jsx'

export default function InvestigationDetail() {
  const { slug } = useParams()
  const investigation = investigations.find((item) => item.slug === slug)

  if (!investigation) {
    return <Navigate to="/investigations" replace />
  }

  const activitySteps = [
    'Incorrect Password Entered',
    'Windows Authentication Fails',
    'Event ID 4625 Generated',
    'Windows Security Event Log',
    'Wazuh Agent',
    'Wazuh Manager',
    'Wazuh Dashboard',
    'Analyst Visibility',
  ]

  return (
    <main className="space-y-12 py-12 lg:py-16">
      <section className="space-y-6">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">{investigation.caseNumber}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{investigation.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--color-success)]">HOME LAB</span>
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--color-success)]">HOME LAB INVESTIGATION</span>
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">{investigation.status}</span>
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">EVENT ID {investigation.eventIds.join(', ')}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-[var(--color-secondary-text)]">
            <span>{investigation.environment}</span>
            <span>•</span>
            <span>{investigation.tools.join(', ')}</span>
          </div>
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Case Summary</h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
              This lab case documents a controlled failed-authentication event generated on a Windows 11 endpoint. The objective was to verify that Windows recorded the failed logon and that the resulting security telemetry became visible through the Wazuh monitoring pipeline.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Objective</h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">{investigation.objective}</p>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Scenario</h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">{investigation.scenario}</p>
          </article>

          <EventTimeline steps={activitySteps} />

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Event Information</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Event ID</p>
                <p className="mt-2 text-lg font-semibold font-mono text-white">4625</p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Event Name</p>
                <p className="mt-2 text-lg font-semibold font-mono text-white">An account failed to log on</p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Source</p>
                <p className="mt-2 text-lg font-semibold font-mono text-white">Windows Security</p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Category</p>
                <p className="mt-2 text-lg font-semibold font-mono text-white">Authentication</p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Environment</p>
                <p className="mt-2 text-lg font-semibold font-mono text-white">Home Lab</p>
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Event ID 4625 Explanation</h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
              Windows Security Event ID 4625 is generated when a logon attempt fails. A failed login alone does not establish malicious intent; context and patterns matter.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
              Repeated or contextually unusual failed logons can be useful authentication telemetry during security monitoring, but a single failed authentication is not enough to conclude suspicious behavior.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Fields an Analyst Would Review</h2>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Fields an analyst would review</p>
            <div className="mt-6 space-y-4">
              {investigation.importantFields.map((field) => (
                <div key={field.name} className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                  <p className="text-sm font-semibold text-white">{field.name}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-secondary-text)]">{field.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Telemetry Pipeline</h2>
            <div className="mt-6 space-y-4">
              {investigation.telemetry.map((stage) => (
                <div key={stage} className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                  <p className="text-base font-semibold text-white">{stage}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Pipeline flow</p>
            <p className="mt-2 text-base leading-7 text-[var(--color-secondary-text)]">
              Windows Endpoint → Windows Security Event Log → Wazuh Agent → Wazuh Manager → Wazuh Dashboard → Analyst Review
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-secondary-text)]">
              The endpoint generates Windows security events, the Wazuh agent forwards them to the manager, and the dashboard makes the event visible for centralized analyst review.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Detection & Visibility</h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
              The failed-authentication event was generated on the Windows endpoint and became visible through the Wazuh monitoring pipeline. Event visibility is not the same as confirmed malicious activity.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
              This case verifies the monitoring pipeline, not that a real attack occurred.
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Analyst Observations</h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-[var(--color-secondary-text)]">
              {investigation.observations.map((observation) => (
                <li key={observation}>{observation}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Analyst Reasoning</h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">Conditions an analyst could investigate</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-[var(--color-secondary-text)]">
              {investigation.reasoning.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">If This Were Suspicious, What Would I Check Next?</h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-[var(--color-secondary-text)]">
              {investigation.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Analysis Concept</h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">{investigation.analysisConcept}</p>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Lab Outcome</h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">{investigation.labOutcome}</p>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Lessons Learned</h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-[var(--color-secondary-text)]">
              {investigation.lessonsLearned.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
          </article>

          <InvestigationEvidence evidence={investigation.evidence} />

          <div className="space-y-4 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <Link
              to="/investigations"
              className="inline-flex items-center rounded-[1rem] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-surface-elevated)]"
            >
              Back to Investigations
            </Link>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Case Information</p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Case Number</p>
                <p className="mt-2 text-base text-white">{investigation.caseNumber}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Type</p>
                <p className="mt-2 text-base text-white">{investigation.type}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Environment</p>
                <p className="mt-2 text-base text-white">{investigation.environment}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Status</p>
                <p className="mt-2 text-base text-white">{investigation.status}</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Additional note</p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-secondary-text)]">
              This case is a lab exercise and is intentionally described as a home-lab investigation.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-accent)]">Related project</p>
            <Link
              to="/projects/soc-home-lab"
              className="mt-4 inline-flex items-center rounded-[1rem] bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              View SOC Home Lab project
            </Link>
          </div>
        </aside>
      </section>
    </main>
  )
}
