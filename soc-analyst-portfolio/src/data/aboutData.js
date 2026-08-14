export const aboutData = {
  intro: [
    'I am a Computer Engineering student (CGPA 9.19/10) and Cybersecurity Enthusiast building toward an entry-level SOC Analyst role with a focus on security monitoring, Windows endpoint telemetry, SIEM, network packet analysis, and threat detection.',
    'My hands-on experience spans building enterprise-style SOC labs, engineering custom Wazuh detections, writing Sigma rules, mapping observed behaviors to MITRE ATT&CK, and investigating multi-stage security incidents.',
  ],
  education: {
    degree: 'Bachelor of Engineering in Computer Engineering (CGPA: 9.19/10)',
    institution: 'KJEI Trinity College of Engineering and Research, Pune, India',
    status: '2022 – 2026 (Pursuing)',
    focus: 'Computer Engineering, Security Monitoring, Defensive Cybersecurity, and Endpoint Telemetry Analysis.',
    history: [
      {
        level: 'Bachelor of Engineering (Computer Engineering)',
        institution: 'KJEI Trinity College of Engineering and Research, Pune, India',
        timeline: '2022 – 2026',
        score: 'CGPA: 9.19 / 10',
      },
      {
        level: 'Higher Secondary Certificate (12th)',
        institution: 'Maharashtra Udaygiri College, Udgir, India',
        timeline: '2020 – 2021',
        score: 'Percentage: 85.20%',
      },
      {
        level: 'Secondary School Certificate (10th)',
        institution: 'Lal Bahadur Shastri Mahavidyalaya, Udgir, India',
        timeline: '2018 – 2019',
        score: 'Percentage: 84.60%',
      },
    ],
  },
  careerFocus: {
    targetRole: 'SOC Analyst / Junior SOC Analyst',
    primaryDirection: 'Blue Team / Security Operations & Threat Hunting',
    areas: [
      'Security Monitoring & Alert Triage',
      'SIEM Operations (Wazuh)',
      'Windows Telemetry & Sysmon',
      'Detection Engineering & Sigma',
      'Network Packet Analysis (Wireshark)',
      'MITRE ATT&CK Mapping & Tuning',
    ],
  },
  workflow: [
    { title: 'Telemetry Instrumentation', description: 'Deploy Sysmon and configure Windows Event Log forwarding to centralized SIEM.' },
    { title: 'Attack Simulation', description: 'Generate realistic, controlled attack scenarios (PowerShell, credential access, persistence, network).' },
    { title: 'Alert Triage & Investigation', description: 'Correlate events across Event ID 1, 3, 10, 13, and packet captures to reconstruct incident timelines.' },
    { title: 'Detection Engineering', description: 'Develop custom Wazuh rules and vendor-neutral Sigma detection signatures.' },
    { title: 'False Positive Tuning', description: 'Analyze legitimate vs malicious activity to minimize noise and improve signal fidelity.' },
    { title: 'Documentation & Reporting', description: 'Produce structured SOC incident reports, threat hunting guides, and recruiter-facing documentation.' },
  ],
  practicalMessage:
    'I focus on real, verifiable defensive work: deploying endpoints, instrumenting Sysmon, analyzing process tree lineage, inspecting network packets in Wireshark, and proving detection logic against actual telemetry.',
  cta: {
    lab: '/soc-lab',
    investigations: '/investigations',
  },
}
