import { ChevronDown, Database, Laptop2, Monitor, ShieldCheck, Server } from 'lucide-react'

const stages = [
  { label: 'Windows Endpoint', icon: Monitor },
  { label: 'Sysmon', icon: Laptop2 },
  { label: 'Wazuh Agent', icon: Server },
  { label: 'SIEM', icon: Database },
  { label: 'Detection', icon: ShieldCheck },
]

export default function TelemetryPanel() {
  return (
    <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">SECURITY TELEMETRY</p>
          <p className="mt-2 text-lg font-semibold text-white">Lab telemetry pipeline</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface-elevated)] px-3 py-2 text-[0.75rem] uppercase tracking-[0.3em] text-[var(--color-success)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-success)]" />
          LAB ACTIVE
        </span>
      </div>

      <div className="space-y-5">
        {stages.map((stage, index) => {
          const Icon = stage.icon
          return (
            <div key={stage.label} className="space-y-3">
              <div className="flex items-center gap-3 rounded-3xl bg-[var(--color-surface-elevated)] px-4 py-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-white">{stage.label}</p>
              </div>
              {index < stages.length - 1 && (
                <div className="flex justify-center text-[var(--color-secondary-text)]">
                  <ChevronDown className="h-5 w-5" aria-hidden="true" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-7 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
        <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[var(--color-secondary-text)]">LAB EVENT</p>
        <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
          <div className="rounded-3xl bg-[var(--color-surface-elevated)] p-4">
            <p className="text-[var(--color-secondary-text)]">Event ID</p>
            <p className="mt-2 font-mono text-white">4625</p>
          </div>
          <div className="rounded-3xl bg-[var(--color-surface-elevated)] p-4">
            <p className="text-[var(--color-secondary-text)]">Source</p>
            <p className="mt-2 font-mono text-white">Windows Security</p>
          </div>
          <div className="rounded-3xl bg-[var(--color-surface-elevated)] p-4">
            <p className="text-[var(--color-secondary-text)]">Category</p>
            <p className="mt-2 font-mono text-white">Failed Authentication</p>
          </div>
          <div className="rounded-3xl bg-[var(--color-surface-elevated)] p-4">
            <p className="text-[var(--color-secondary-text)]">SIEM</p>
            <p className="mt-2 font-mono text-white">Wazuh</p>
          </div>
        </div>
      </div>
    </div>
  )
}
