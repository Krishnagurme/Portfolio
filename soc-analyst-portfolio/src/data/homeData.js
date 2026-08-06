export const homeData = {
  tagline: 'Blue Team • Security Monitoring • Threat Detection',
  description:
    'Building hands-on defensive security experience through SOC labs focused on Windows telemetry, SIEM monitoring, log analysis, Sysmon, and security-event detection.',
  coreFocus: [
    {
      title: 'SIEM & Monitoring',
      description: 'Working with centralized security telemetry and alert visibility using Wazuh.',
      badges: ['Wazuh', 'Log Analysis'],
      icon: 'Monitor',
    },
    {
      title: 'Windows Security',
      description: 'Analyzing Windows Event Logs and Sysmon telemetry from endpoint sources.',
      badges: ['Event Logs', 'Sysmon'],
      icon: 'Laptop2',
    },
    {
      title: 'Network Analysis',
      description: 'Understanding TCP/IP flows and capturing network activity for security review.',
      badges: ['Wireshark', 'TCP/IP'],
      icon: 'Wifi',
    },
    {
      title: 'Identity & Access',
      description: 'Building knowledge of Active Directory, authentication and authorization basics.',
      badges: ['Active Directory', 'Authentication'],
      icon: 'Users',
    },
  ],
  proofCards: [
    {
      title: 'SOC Home Lab',
      description:
        'Controlled security-monitoring environment for generating, collecting and analyzing endpoint telemetry.',
      badges: ['Windows', 'Sysmon', 'Wazuh', 'Kali Linux'],
      ctaText: 'Explore SOC Lab',
      to: '/soc-lab',
    },
    {
      title: 'Security Investigations',
      description:
        'Documented SOC investigations using Windows security telemetry, Sysmon, and Wazuh.',
      badgeTag: 'Lab Cases',
      exampleLabel: 'CASE-001 & CASE-002',
      exampleTitle: 'Failed Authentication & PowerShell Process Investigation',
      exampleNote: 'Wazuh & Sysmon',
      ctaText: 'View Investigations',
      to: '/investigations',
    },
  ],
}
