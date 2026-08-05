import { ArrowRight, Activity, Monitor, Server, Shield, Terminal } from 'lucide-react'
import { labData } from '../../data/labData.js'

const iconMap = {
  'KALI LINUX': Activity,
  'WINDOWS 11': Monitor,
  'WINDOWS SECURITY LOG': Terminal,
  SYSMON: Server,
  'WAZUH AGENT': Shield,
  'WAZUH MANAGER': Server,
  'WAZUH DASHBOARD': Monitor,
  'ANALYST REVIEW': Activity,
}

export default function LabArchitecture() {
  return (
    <section aria-labelledby="lab-architecture-title" className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Architecture
        </span>
        <p className="text-sm text-[var(--color-secondary-text)]">Cyan arrows show telemetry flow; green labels mark configured lab components.</p>
      </div>
      <div id="lab-architecture-title" className="text-2xl font-semibold text-white">
        LAB ARCHITECTURE
      </div>
      <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
        <div className="grid gap-6 xl:grid-cols-[1.03fr_0.97fr]">
          <div className="grid gap-6">
            {labData.architecture.nodes.slice(0, 4).map((node) => {
              const Icon = iconMap[node.title]
              return (
                <article key={node.title} className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">{node.subtitle}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{node.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[var(--color-secondary-text)]">{node.description}</p>
                  <div className="mt-4 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-success)]">
                    {node.status}
                  </div>
                </article>
              )
            })}
          </div>

          <div className="grid gap-6">
            <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent)]/12 text-[var(--color-accent)]">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary-text)]">Telemetry flow</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">Controlled lab telemetry pipeline</h3>
                </div>
              </div>
              <div className="mt-6 space-y-3 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                  <div className="rounded-3xl bg-[var(--color-surface-elevated)] p-4 text-sm text-[var(--color-text)]">
                    <p className="font-semibold text-white">Kali Linux</p>
                    <p className="mt-1 text-[var(--color-secondary-text)]">Controlled test activity is sent to the Windows endpoint.</p>
                  </div>
                  <div className="flex items-center justify-center text-[var(--color-accent)]">
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                  <div className="rounded-3xl bg-[var(--color-surface-elevated)] p-4 text-sm text-[var(--color-text)]">
                    <p className="font-semibold text-white">Windows Endpoint</p>
                    <p className="mt-1 text-[var(--color-secondary-text)]">Generates Windows Security logs and Sysmon telemetry.</p>
                  </div>
                  <div className="flex items-center justify-center text-[var(--color-accent)]">
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                  <div className="rounded-3xl bg-[var(--color-surface-elevated)] p-4 text-sm text-[var(--color-text)]">
                    <p className="font-semibold text-white">Wazuh Agent</p>
                    <p className="mt-1 text-[var(--color-secondary-text)]">Collects endpoint telemetry and forwards it to Wazuh Manager.</p>
                  </div>
                  <div className="flex items-center justify-center text-[var(--color-accent)]">
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                  <div className="rounded-3xl bg-[var(--color-surface-elevated)] p-4 text-sm text-[var(--color-text)]">
                    <p className="font-semibold text-white">Wazuh Manager</p>
                    <p className="mt-1 text-[var(--color-secondary-text)]">Processes and analyzes the received security telemetry.</p>
                  </div>
                  <div className="flex items-center justify-center text-[var(--color-accent)]">
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="rounded-3xl bg-[var(--color-surface-elevated)] p-4 text-sm text-[var(--color-text)]">
                  <p className="font-semibold text-white">Wazuh Dashboard</p>
                  <p className="mt-1 text-[var(--color-secondary-text)]">Provides centralized visibility into security events and alerts.</p>
                </div>
                <div className="mt-4 rounded-3xl bg-[var(--color-surface-elevated)] p-4 text-sm text-[var(--color-text)]">
                  <p className="font-semibold text-white">Analyst Review</p>
                  <p className="mt-1 text-[var(--color-secondary-text)]">Review and document security events from a SOC perspective.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-bg)] p-5 text-sm text-[var(--color-secondary-text)]">
              <p className="font-semibold text-white">Accessible architecture summary</p>
              <p className="mt-3 leading-7">
                Kali Linux generates controlled activity toward the Windows endpoint. Windows Security logs and Sysmon telemetry are collected by the Wazuh Agent, processed by the Wazuh Manager, displayed in the Wazuh Dashboard, and reviewed by the analyst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
