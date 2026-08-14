import { useState } from 'react'
import { ArrowDown, Database, Laptop2, ShieldCheck, Server, ChevronDown } from 'lucide-react'

const socComponents = [
  {
    id: 'sysmon',
    name: 'Sysmon',
    desc: 'Windows endpoint telemetry',
    icon: Laptop2,
    details: 'Sysmon Event IDs 1 (Process Creation), 3 (Network), 10 (LSASS Access), 13 (Registry Run Keys).',
  },
  {
    id: 'wazuh-agent',
    name: 'Wazuh Agent',
    desc: 'Endpoint log collection',
    icon: Server,
    details: 'Collects security logs, Sysmon operational events, and system state from monitored endpoints.',
  },
  {
    id: 'siem',
    name: 'SIEM',
    desc: 'Centralized security monitoring',
    icon: Database,
    details: 'Centralized Wazuh Manager & Dashboard for correlation, log storage, and alert visibility.',
  },
  {
    id: 'detection',
    name: 'Detection',
    desc: 'Custom rules + alert analysis',
    icon: ShieldCheck,
    details: 'Custom Wazuh rules, vendor-neutral Sigma signatures, MITRE ATT&CK mapping, and false-positive tuning.',
  },
]

export default function TelemetryPanel() {
  const [selectedId, setSelectedId] = useState(null)

  const toggleDetail = (id) => {
    setSelectedId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
      {/* Compact Header */}
      <div className="mb-4 flex items-center justify-between border-b border-[var(--color-border)] pb-3">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            SOC ENVIRONMENT
          </p>
          <h3 className="text-sm font-semibold text-white">Lab Pipeline Flow</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-success)]/30 bg-[var(--color-success)]/10 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-[var(--color-success)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-success)]" />
          ACTIVE
        </span>
      </div>

      {/* 4-Step Vertical Flow */}
      <div className="space-y-1.5">
        {socComponents.map((item, index) => {
          const Icon = item.icon
          const isSelected = selectedId === item.id

          return (
            <div key={item.id} className="space-y-1.5">
              <button
                type="button"
                onClick={() => toggleDetail(item.id)}
                className={`group flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left transition duration-150 ${
                  isSelected
                    ? 'border-[var(--color-accent)] bg-[var(--color-surface-elevated)]'
                    : 'border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-elevated)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-[var(--color-accent)] transition">
                      {item.name}
                    </h4>
                    <p className="text-[0.725rem] text-[var(--color-secondary-text)]">{item.desc}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-[var(--color-secondary-text)] transition-transform duration-200 ${
                    isSelected ? 'rotate-180 text-[var(--color-accent)]' : ''
                  }`}
                />
              </button>

              {/* Expandable detail if clicked */}
              {isSelected && (
                <div className="rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-surface-elevated)] p-3 text-xs leading-5 text-[var(--color-secondary-text)]">
                  <span className="font-semibold text-white">Focus: </span>
                  {item.details}
                </div>
              )}

              {/* Connector Arrow */}
              {index < socComponents.length - 1 && (
                <div className="flex justify-center py-0.5 text-[var(--color-accent)]/60">
                  <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer Mini Status */}
      <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
        <div className="flex items-center justify-between text-[0.7rem]">
          <span className="text-[var(--color-secondary-text)] font-mono">Telemetry Status:</span>
          <span className="font-mono text-white font-semibold">Validated Log Sources</span>
        </div>
      </div>
    </div>
  )
}
