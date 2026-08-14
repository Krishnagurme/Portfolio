export const homeData = {
  tagline: 'Blue Team • Security Monitoring • Detection Engineering • Threat Hunting',
  description:
    'Building hands-on defensive security experience through enterprise-style SOC labs focused on Windows endpoint telemetry, Wazuh SIEM monitoring, log analysis, Sysmon Event IDs, Sigma rules, and structured case investigations.',
  coreFocus: [
    {
      title: 'Detection Engineering',
      description: 'Engineering behavioral detection rules with Wazuh SIEM, Sigma signatures, and MITRE ATT&CK technique mapping.',
      badges: ['Sigma Rules', 'Wazuh SIEM', 'MITRE ATT&CK'],
      icon: 'Shield',
    },
    {
      title: 'SIEM & Security Monitoring',
      description: 'Working with centralized security telemetry, log ingestion, alert triage, and false-positive reduction.',
      badges: ['Wazuh SIEM', 'Log Analysis', 'Alert Triage'],
      icon: 'Monitor',
    },
    {
      title: 'Endpoint Telemetry & Sysmon',
      description: 'Analyzing Windows Event Logs and Sysmon process creation, network, registry, and memory access events.',
      badges: ['Sysmon ID 1,3,10,13', 'Windows Security Logs'],
      icon: 'Laptop2',
    },
    {
      title: 'Threat Hunting & Traffic Analysis',
      description: 'Formulating hypothesis-driven threat hunts and inspecting TCP/HTTP network connections in Wireshark.',
      badges: ['Wireshark', 'DQL & PowerShell Queries'],
      icon: 'Search',
    },
  ],
  proofCards: [
    {
      id: 'project-01',
      title: 'SOC Home Lab — Detection Engineering & Incident Response (Project 01)',
      description:
        'Built a hands-on Windows 11 SOC environment instrumented with Sysmon forwarding telemetry through a Wazuh Agent to a centralized Wazuh Manager and Dashboard for continuous monitoring and investigation.',
      badges: ['Wazuh Agent', 'Sysmon', 'Windows 11', 'Detection Pipeline', '✅ Completed'],
      ctaText: 'Explore Project 01',
      to: '/projects/soc-home-lab',
    },
    {
      id: 'project-02',
      title: 'SOC Incident Investigation & Threat Hunting (Project 02)',
      description:
        'Investigated 6 structured SOC cases including Brute-Force Authentication (4625 -> 4624), Suspicious PowerShell, Outbound TCP Port 8080, Credential Manager Enumeration (cmdkey /list), Scheduled Task Persistence (svchost.exe parent), and Full Attack Chain correlation.',
      badges: ['Wazuh SIEM', 'Sysmon', 'Wireshark', 'Case Reports', 'Master Timeline', '✅ Completed'],
      ctaText: 'Explore Project 02',
      to: '/projects/project-02-incident-investigation',
    },
    {
      id: 'project-03',
      title: 'Enterprise SOC Detection & Incident Response Lab (Project 03)',
      description:
        'Engineered six behavioral SOC detections using Wazuh SIEM and Sysmon (Event IDs 1, 3, 10, 13) covering PowerShell bypass, process trees, registry autostart persistence, LSASS access, and network signals. Authored vendor-neutral Sigma rules and performed false-positive tuning.',
      badges: ['Wazuh', 'Sysmon', 'Sigma Rules', 'MITRE ATT&CK', 'Threat Hunting', '✅ Completed'],
      ctaText: 'Explore Project 03',
      to: '/projects/project-03-enterprise-soc-detection-engineering',
    },
  ],
}
