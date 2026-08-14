import { Container } from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Card from '../components/ui/Card.jsx'
import { Badge } from '../components/ui/Badge.jsx'
import { siteConfig } from '../data/siteConfig.js'
import { Printer, Mail, Phone, ExternalLink, Shield, GraduationCap, Wrench, Award, CheckCircle2 } from 'lucide-react'

export default function Resume() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <main className="space-y-10 py-10 lg:py-14 text-white">
      {/* Page Header */}
      <Container className="print:hidden">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeading
            eyebrow="RESUME"
            heading="Professional Resume"
            description="Verified academic credentials, technical skillset, SOC project highlights, certifications, and achievements."
          />
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-[1rem] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--color-accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              <Printer className="h-4 w-4" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-[1rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-surface-elevated)]"
            >
              <Mail className="h-4 w-4 text-[var(--color-accent)]" />
              <span>Contact Krishna</span>
            </a>
          </div>
        </div>
      </Container>

      {/* Main Resume Document Container */}
      <Container>
        <div className="rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.3)] sm:p-10 lg:p-12 print:border-none print:bg-white print:p-0 print:text-slate-950 print:shadow-none">
          
          {/* Resume Header Banner */}
          <header className="border-b border-[var(--color-border)] pb-8 print:border-slate-300 print:pb-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white print:text-3xl print:text-slate-900 sm:text-5xl">
                  KRISHNA GURME
                </h1>
                <p className="mt-2 text-xl font-semibold text-[var(--color-accent)] print:text-slate-700">
                  SOC ANALYST <span className="text-sm font-normal text-[var(--color-secondary-text)] print:text-slate-500">| CYBERSECURITY ENTHUSIAST</span>
                </p>
              </div>
              <div className="space-y-1.5 text-sm text-[var(--color-secondary-text)] print:text-slate-700 md:text-right">
                <p className="flex items-center gap-2 md:justify-end">
                  <Phone className="h-4 w-4 text-[var(--color-accent)] print:hidden" />
                  <span>Phone: <strong className="text-white print:text-slate-900">+91 9689295615</strong></span>
                </p>
                <p className="flex items-center gap-2 md:justify-end">
                  <Mail className="h-4 w-4 text-[var(--color-accent)] print:hidden" />
                  <span>Email: <a href={`mailto:${siteConfig.email}`} className="text-white hover:underline print:text-slate-900">{siteConfig.email}</a></span>
                </p>
                <p className="flex items-center gap-2 md:justify-end">
                  <ExternalLink className="h-4 w-4 text-[var(--color-accent)] print:hidden" />
                  <span>
                    <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:underline print:text-slate-900">LinkedIn</a>
                    {' • '}
                    <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-white hover:underline print:text-slate-900">GitHub</a>
                  </span>
                </p>
              </div>
            </div>
          </header>

          <div className="mt-8 space-y-10 print:mt-6 print:space-y-6">

            {/* Education Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-2 print:border-slate-300">
                <GraduationCap className="h-6 w-6 text-[var(--color-accent)] print:text-slate-800" />
                <h2 className="text-xl font-bold tracking-wider uppercase text-white print:text-slate-900">Education</h2>
              </div>
              <div className="space-y-5">
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 print:border-none print:bg-transparent print:p-0">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row">
                    <h3 className="text-lg font-bold text-white print:text-slate-900">KJEI Trinity College of Engineering and Research, Pune, India</h3>
                    <span className="text-sm font-semibold text-[var(--color-accent)] print:text-slate-700">2022 – 2026</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[var(--color-secondary-text)] print:text-slate-700">
                    Bachelor of Engineering in Computer Engineering — <span className="font-semibold text-white print:text-slate-900">CGPA: 9.19 / 10</span>
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 print:border-none print:bg-transparent print:p-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white print:text-slate-900">Maharashtra Udaygiri College, Udgir</h4>
                      <span className="text-xs text-[var(--color-secondary-text)] print:text-slate-600">2020 – 2021</span>
                    </div>
                    <p className="mt-1 text-xs text-[var(--color-secondary-text)] print:text-slate-700">Higher Secondary Certificate (12th)</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--color-accent)] print:text-slate-900">Percentage: 85.20%</p>
                  </div>

                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 print:border-none print:bg-transparent print:p-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white print:text-slate-900">Lal Bahadur Shastri Mahavidyalaya, Udgir</h4>
                      <span className="text-xs text-[var(--color-secondary-text)] print:text-slate-600">2018 – 2019</span>
                    </div>
                    <p className="mt-1 text-xs text-[var(--color-secondary-text)] print:text-slate-700">Secondary School Certificate (10th)</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--color-accent)] print:text-slate-900">Percentage: 84.60%</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-2 print:border-slate-300">
                <Wrench className="h-6 w-6 text-[var(--color-accent)] print:text-slate-800" />
                <h2 className="text-xl font-bold tracking-wider uppercase text-white print:text-slate-900">Technical Skills</h2>
              </div>
              <div className="grid gap-3 text-sm print:gap-2">
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
                  <span className="font-bold text-white print:text-slate-900">Operating Systems:</span>
                  <span className="text-[var(--color-secondary-text)] print:text-slate-700">Windows 11, Kali Linux, Ubuntu, Windows Event Logs</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
                  <span className="font-bold text-white print:text-slate-900">SIEM & Monitoring:</span>
                  <span className="text-[var(--color-secondary-text)] print:text-slate-700">Wazuh SIEM, Sysmon, Security Monitoring, Log Analysis, Alert Triage</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
                  <span className="font-bold text-white print:text-slate-900">Network & Protocols:</span>
                  <span className="text-[var(--color-secondary-text)] print:text-slate-700">TCP/IP, DNS, DHCP, HTTP/HTTPS, SSH, ICMP, ARP, Network Troubleshooting</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
                  <span className="font-bold text-white print:text-slate-900">Tools & Technologies:</span>
                  <span className="text-[var(--color-secondary-text)] print:text-slate-700">Wireshark, Nmap, Event Viewer, Process Explorer, ProcMon, TCPView, Autoruns, VirusTotal</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
                  <span className="font-bold text-white print:text-slate-900">Security Concepts:</span>
                  <span className="text-[var(--color-secondary-text)] print:text-slate-700">Incident Investigation, Threat Detection, Malware Analysis, MITRE ATT&CK, Incident Response</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
                  <span className="font-bold text-white print:text-slate-900">Programming / Scripting:</span>
                  <span className="text-[var(--color-secondary-text)] print:text-slate-700">PowerShell, Bash, Python (Basic)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
                  <span className="font-bold text-white print:text-slate-900">Other Skills:</span>
                  <span className="text-[var(--color-secondary-text)] print:text-slate-700">Git, GitHub, VirtualBox, Technical Documentation, Security Reporting</span>
                </div>
              </div>
            </section>

            {/* Cybersecurity Projects & Labs */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-2 print:border-slate-300">
                <Shield className="h-6 w-6 text-[var(--color-accent)] print:text-slate-800" />
                <h2 className="text-xl font-bold tracking-wider uppercase text-white print:text-slate-900">Cybersecurity Projects & Labs</h2>
              </div>
              <div className="space-y-6 print:space-y-4">
                
                {/* Project 1 */}
                <div className="space-y-2">
                  <div className="flex flex-col justify-between sm:flex-row">
                    <h3 className="text-lg font-bold text-white print:text-slate-900">
                      Enterprise-Style SOC Detection & Incident Response Lab
                    </h3>
                    <span className="text-sm font-semibold text-[var(--color-accent)] print:text-slate-700">2026 – Present</span>
                  </div>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--color-secondary-text)] print:text-slate-700">
                    <li>Built a hands-on SOC environment using Wazuh SIEM and Sysmon for Windows security monitoring and telemetry collection.</li>
                    <li>Developed and tested custom Wazuh detections with severity classification, MITRE ATT&CK mapping, Sigma rules, and false-positive reduction.</li>
                    <li>Performed alert triage, IOC extraction, log analysis, threat hunting, and documented investigation workflows.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="space-y-2">
                  <div className="flex flex-col justify-between sm:flex-row">
                    <h3 className="text-lg font-bold text-white print:text-slate-900">
                      SOC Incident Investigation & Threat Hunting
                    </h3>
                    <span className="text-sm font-semibold text-[var(--color-accent)] print:text-slate-700">2026 – Present</span>
                  </div>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--color-secondary-text)] print:text-slate-700">
                    <li>Investigated simulated security incidents using Wazuh, Sysmon, Windows Event Logs, process telemetry, and network activity.</li>
                    <li>Performed IOC extraction, timeline reconstruction, process analysis, persistence investigation, and threat hunting to identify suspicious behavior.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="space-y-2">
                  <div className="flex flex-col justify-between sm:flex-row">
                    <h3 className="text-lg font-bold text-white print:text-slate-900">
                      Detection Engineering & Threat Hunting Framework
                    </h3>
                    <span className="text-sm font-semibold text-[var(--color-accent)] print:text-slate-700">2026 – Present</span>
                  </div>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-[var(--color-secondary-text)] print:text-slate-700">
                    <li>Engineered six behavioral SOC detections using Wazuh and Sysmon covering PowerShell, command execution, suspicious processes, persistence, credential access, and network activity.</li>
                    <li>Developed Sigma detection rules and mapped security behaviors to MITRE ATT&CK while validating telemetry across Sysmon Event IDs 1, 3, 10, and 13.</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Certifications */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-2 print:border-slate-300">
                <Award className="h-6 w-6 text-[var(--color-accent)] print:text-slate-800" />
                <h2 className="text-xl font-bold tracking-wider uppercase text-white print:text-slate-900">Certifications</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3.5 print:border-none print:bg-transparent print:p-0">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 print:text-slate-800" />
                  <div>
                    <span className="font-bold text-white print:text-slate-900">Cisco</span>
                    <p className="text-xs text-[var(--color-secondary-text)] print:text-slate-700">Introduction to Cybersecurity</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3.5 print:border-none print:bg-transparent print:p-0">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 print:text-slate-800" />
                  <div>
                    <span className="font-bold text-white print:text-slate-900">IBM</span>
                    <p className="text-xs text-[var(--color-secondary-text)] print:text-slate-700">Cybersecurity Fundamentals</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3.5 print:border-none print:bg-transparent print:p-0">
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)] print:text-slate-800" />
                  <div>
                    <span className="font-bold text-white print:text-slate-900">TryHackMe</span>
                    <p className="text-xs text-[var(--color-secondary-text)] print:text-slate-700">Pursuing</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3.5 print:border-none print:bg-transparent print:p-0">
                  <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)] print:text-slate-800" />
                  <div>
                    <span className="font-bold text-white print:text-slate-900">Fortinet NSE 1</span>
                    <p className="text-xs text-[var(--color-secondary-text)] print:text-slate-700">Pursuing</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-2 print:border-slate-300">
                <CheckCircle2 className="h-6 w-6 text-[var(--color-accent)] print:text-slate-800" />
                <h2 className="text-xl font-bold tracking-wider uppercase text-white print:text-slate-900">Achievements</h2>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--color-secondary-text)] print:text-slate-700">
                <li>Built and documented an enterprise-style SOC Home Lab focused on security monitoring, detection engineering, threat hunting, and incident response.</li>
                <li>Developed and tested custom Wazuh detections with severity classification, MITRE ATT&CK mapping, Sigma rules, and false-positive reduction.</li>
                <li>Created a GitHub-based cybersecurity portfolio documenting practical SOC investigations, detection engineering, and security analysis.</li>
              </ul>
            </section>

          </div>
        </div>
      </Container>
    </main>
  )
}
