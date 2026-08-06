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

  const activitySteps = investigation.id === 'case-001' ? [
    'Incorrect Password Entered',
    'Windows Authentication Fails',
    'Event ID 4625 Generated',
    'Windows Security Event Log',
    'Wazuh Agent',
    'Wazuh Manager',
    'Wazuh Dashboard',
    'Analyst Visibility',
  ] : [
    'PowerShell Alert',
    'Identify Affected Host / User',
    'Locate Sysmon Event ID 1',
    'Identify Correct powershell.exe',
    'Analyze User',
    'Analyze Command Line',
    'Analyze Parent Process',
    'Correlate Timestamp',
    'Review Available Context',
    'Determine Verdict',
    'Benign True Positive',
    'Close Alert'
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
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">{investigation.eventIds.join(', ')}</span>
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
              {investigation.id === 'case-001'
                ? "This lab case documents a controlled failed-authentication event generated on a Windows 11 endpoint. The objective was to verify that Windows recorded the failed logon and that the resulting security telemetry became visible through the Wazuh monitoring pipeline."
                : investigation.summary}
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

          {investigation.triageApproach && (
            <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-semibold text-white">Triage Approach</h2>
              <div className="mt-6 rounded-[1.5rem] bg-[var(--color-bg)] p-6 text-center border border-[var(--color-border)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Framework Used</p>
                <p className="mt-3 text-lg font-bold font-mono text-white tracking-wider">
                  {investigation.triageApproach.framework}
                </p>
              </div>
              <p className="mt-6 text-base leading-8 text-[var(--color-secondary-text)]">
                {investigation.triageApproach.description}
              </p>
            </article>
          )}

          {investigation.noiseIdentification && (
            <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-semibold text-white">{investigation.noiseIdentification.title}</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
                {investigation.noiseIdentification.description}
              </p>
              <div className="mt-6 space-y-4 rounded-[1.5rem] bg-[var(--color-bg)] p-5 font-mono text-xs border border-[var(--color-border)] text-left">
                <div>
                  <span className="text-[var(--color-secondary-text)] font-semibold">Image:</span>
                  <p className="mt-1 text-white break-all">{investigation.noiseIdentification.details.image}</p>
                </div>
                <div className="mt-3">
                  <span className="text-[var(--color-secondary-text)] font-semibold">User:</span>
                  <p className="mt-1 text-white break-all">{investigation.noiseIdentification.details.user}</p>
                </div>
                <div className="mt-3">
                  <span className="text-[var(--color-secondary-text)] font-semibold">CurrentDirectory:</span>
                  <p className="mt-1 text-white break-all">{investigation.noiseIdentification.details.currentDirectory}</p>
                </div>
                <div className="mt-3">
                  <span className="text-[var(--color-secondary-text)] font-semibold">CommandLine:</span>
                  <pre className="mt-1 text-white whitespace-pre-wrap break-all bg-[var(--color-surface-elevated)] p-3 rounded-xl border border-[var(--color-border)]">{investigation.noiseIdentification.details.commandLine}</pre>
                </div>
              </div>
              <p className="mt-6 text-base leading-8 text-[var(--color-secondary-text)]">
                {investigation.noiseIdentification.exclusionReason}
              </p>
            </article>
          )}

          {investigation.targetEvent && (
            <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-semibold text-white">Target Event Details</h2>
              <p className="mt-4 text-sm text-[var(--color-secondary-text)]">Sysmon Event ID 1 — Target Process Creation Metadata</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {Object.entries(investigation.targetEvent).map(([key, val]) => (
                  <div key={key} className="rounded-[1.5rem] bg-[var(--color-bg)] p-5 border border-[var(--color-border)]">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </p>
                    <p className="mt-2 text-sm font-semibold font-mono text-white break-all">{val}</p>
                  </div>
                ))}
              </div>
            </article>
          )}

          {investigation.processAnalysis && (
            <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-semibold text-white">Process Analysis</h2>
              <div className="mt-6 space-y-6">
                {Object.entries(investigation.processAnalysis).map(([key, section]) => (
                  <div key={key} className="rounded-[1.5rem] bg-[var(--color-bg)] p-6 border border-[var(--color-border)] space-y-3">
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                    {section.relationship && (
                      <div className="inline-flex flex-col items-center justify-center bg-[var(--color-surface-elevated)] p-4 rounded-xl border border-[var(--color-border)] font-mono text-xs text-white">
                        <span className="text-[var(--color-accent)] font-semibold mb-2">Process Tree</span>
                        <pre className="text-center whitespace-pre">{section.relationship}</pre>
                      </div>
                    )}
                    {section.executable && (
                      <p className="font-mono text-xs text-white break-all bg-[var(--color-surface-elevated)] px-3 py-2 rounded-lg border border-[var(--color-border)]">{section.executable}</p>
                    )}
                    {section.account && (
                      <p className="font-mono text-xs text-white break-all bg-[var(--color-surface-elevated)] px-3 py-2 rounded-lg border border-[var(--color-border)]">{section.account}</p>
                    )}
                    {section.command && (
                      <p className="font-mono text-xs text-white break-all bg-[var(--color-surface-elevated)] px-3 py-2 rounded-lg border border-[var(--color-border)]">{section.command}</p>
                    )}
                    {section.level && (
                      <p className="font-mono text-xs text-white break-all bg-[var(--color-surface-elevated)] px-3 py-2 rounded-lg border border-[var(--color-border)]">{section.level}</p>
                    )}
                    <p className="text-sm leading-7 text-[var(--color-secondary-text)]">{section.description}</p>
                  </div>
                ))}
              </div>
            </article>
          )}

          {investigation.timestampCorrelation && (
            <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-semibold text-white">Timestamp Correlation</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5 border border-[var(--color-border)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Sysmon UTC</p>
                  <p className="mt-2 text-base font-semibold font-mono text-white">
                    {investigation.timestampCorrelation.utcTime}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5 border border-[var(--color-border)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Timezone Conversion</p>
                  <p className="mt-2 text-base font-semibold font-mono text-white">
                    {investigation.timestampCorrelation.timezoneRelationship}
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-[1.5rem] bg-[var(--color-bg)] p-6 text-center border border-[var(--color-border)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Time conversion flow</p>
                <pre className="mt-3 text-lg font-bold font-mono text-white tracking-wider whitespace-pre">{investigation.timestampCorrelation.flow}</pre>
              </div>
              <p className="mt-6 text-base leading-8 text-[var(--color-secondary-text)]">
                {investigation.timestampCorrelation.description}
              </p>
            </article>
          )}

          <EventTimeline steps={activitySteps} />

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Event Information</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Event ID</p>
                <p className="mt-2 text-lg font-semibold font-mono text-white">
                  {investigation.id === 'case-001' ? '4625' : investigation.eventIds.join(', ')}
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Event Name</p>
                <p className="mt-2 text-lg font-semibold font-mono text-white">
                  {investigation.id === 'case-001' ? 'An account failed to log on' : investigation.eventName}
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Source</p>
                <p className="mt-2 text-lg font-semibold font-mono text-white">
                  {investigation.id === 'case-001' ? 'Windows Security' : investigation.eventSource}
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Category</p>
                <p className="mt-2 text-lg font-semibold font-mono text-white">
                  {investigation.id === 'case-001' ? 'Authentication' : investigation.eventCategory}
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[var(--color-bg)] p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Environment</p>
                <p className="mt-2 text-lg font-semibold font-mono text-white">{investigation.environment}</p>
              </div>
            </div>
          </article>

          {investigation.id === 'case-001' ? (
            <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-semibold text-white">Event ID 4625 Explanation</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
                Windows Security Event ID 4625 is generated when a logon attempt fails. A failed login alone does not establish malicious intent; context and patterns matter.
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
                Repeated or contextually unusual failed logons can be useful authentication telemetry during security monitoring, but a single failed authentication is not enough to conclude suspicious behavior.
              </p>
            </article>
          ) : (
            <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-semibold text-white">Sysmon Event ID 1 Explanation</h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
                Sysmon Event ID 1 provides detailed information about process creation events. It is a critical telemetry source for tracking what programs run on an endpoint, who executed them, and how they were invoked (command lines and parent processes).
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
                In this case, an alert was triggered due to powershell.exe execution. Analyzing this process creation event is necessary to determine if the activity is authorized administrative tasks or potential malicious execution.
              </p>
            </article>
          )}

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
              {investigation.id === 'case-001'
                ? 'Windows Endpoint → Windows Security Event Log → Wazuh Agent → Wazuh Manager → Wazuh Dashboard → Analyst Review'
                : 'Windows Endpoint → Sysmon Logs → Wazuh Agent → Wazuh Manager → Wazuh Dashboard → Analyst Review'}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-secondary-text)]">
              {investigation.id === 'case-001'
                ? 'The endpoint generates Windows security events, the Wazuh agent forwards them to the manager, and the dashboard makes the event visible for centralized analyst review.'
                : 'The endpoint generates Sysmon process-creation logs, the Wazuh agent forwards them to the manager, and the Wazuh Dashboard surfaces the event to trigger the analyst alert review workflow.'}
            </p>
          </article>

          <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
            <h2 className="text-2xl font-semibold text-white">Detection & Visibility</h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
              {investigation.id === 'case-001'
                ? 'The failed-authentication event was generated on the Windows endpoint and became visible through the Wazuh monitoring pipeline. Event visibility is not the same as confirmed malicious activity.'
                : 'The PowerShell process-creation event was generated on the WIN11-CLIENT endpoint and forwarded to Wazuh. The Wazuh dashboard flagged this process execution under a Medium severity rule.'}
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--color-secondary-text)]">
              {investigation.id === 'case-001'
                ? 'This case verifies the monitoring pipeline, not that a real attack occurred.'
                : 'This investigation demonstrates using SIEM alert visibility to pivot into Sysmon endpoint logs to isolate and evaluate the actual command line context.'}
            </p>
          </article>

          {investigation.verdictDetails && (
            <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)] border-l-4 border-l-[var(--color-success)]">
              <h2 className="text-2xl font-semibold text-white">Verdict Details</h2>
              <div className="mt-4 inline-flex rounded-full bg-[var(--color-success)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950">
                {investigation.verdictDetails.verdict}
              </div>
              <p className="mt-6 text-base leading-8 text-[var(--color-secondary-text)]">
                {investigation.verdictDetails.description}
              </p>
            </article>
          )}

          {investigation.resolutionDetails && (
            <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-semibold text-white">Resolution</h2>
              <div className="mt-4 inline-flex rounded-full bg-[var(--color-success)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950">
                {investigation.resolutionDetails.resolution}
              </div>
              <p className="mt-6 text-base leading-8 text-[var(--color-secondary-text)]">
                {investigation.resolutionDetails.description}
              </p>
              {investigation.resolutionDetails.label && (
                <div className="mt-6 rounded-[1.5rem] bg-[var(--color-bg)] p-5 border border-dashed border-[var(--color-border)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] font-semibold">
                    {investigation.resolutionDetails.label}
                  </p>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-[var(--color-secondary-text)]">
                    <li>Suspicious child processes</li>
                    <li>Network connections</li>
                    <li>File creation</li>
                    <li>Persistence</li>
                    <li>Encoded PowerShell</li>
                    <li>Unusual parent processes</li>
                    <li>Privilege escalation</li>
                  </ul>
                </div>
              )}
            </article>
          )}

          {investigation.mitreAttack && (
            <article className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_18px_35px_rgba(0,0,0,0.15)]">
              <h2 className="text-2xl font-semibold text-white">MITRE ATT&CK Context</h2>
              <div className="mt-6 rounded-[1.5rem] bg-[var(--color-bg)] p-5 border border-[var(--color-border)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Technique Mapping</p>
                <p className="mt-2 text-lg font-mono font-semibold text-white">{investigation.mitreAttack.technique} — {investigation.mitreAttack.name}</p>
              </div>
              <p className="mt-6 text-base leading-8 text-[var(--color-secondary-text)]">
                {investigation.mitreAttack.description}
              </p>
            </article>
          )}

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
              {investigation.verdict && (
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Verdict</p>
                  <p className="mt-2 text-base text-white">{investigation.verdict}</p>
                </div>
              )}
              {investigation.resolution && (
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Resolution</p>
                  <p className="mt-2 text-base text-white">{investigation.resolution}</p>
                </div>
              )}
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
