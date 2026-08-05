export const labData = {
  header: {
    eyebrow: 'SOC HOME LAB',
    heading: 'Security Monitoring Environment',
    description:
      'A controlled home-lab environment built to practice endpoint telemetry collection, SIEM monitoring, Windows security-event analysis, and defensive security workflows.',
    badge: 'HOME LAB',
  },
  purpose: {
    title: 'WHY I BUILT THIS LAB',
    paragraphs: [
      'The purpose of this environment is to connect cybersecurity concepts with observable telemetry. Controlled activity is generated inside the lab, collected from the Windows endpoint, forwarded into Wazuh, and reviewed from a SOC analyst perspective.',
    ],
    workflow: ['Generate', 'Collect', 'Centralize', 'Detect', 'Analyze', 'Document'],
  },
  architecture: {
    nodes: [
      {
        title: 'KALI LINUX',
        subtitle: 'Controlled Test System',
        description: 'Used to generate controlled security activity inside the lab environment.',
        status: 'LAB COMPONENT',
      },
      {
        title: 'WINDOWS 11',
        subtitle: 'Monitored Endpoint',
        description: 'Windows endpoint generating operating-system and security telemetry.',
        status: 'CONFIGURED',
      },
      {
        title: 'WINDOWS SECURITY LOG',
        subtitle: 'Native Security Telemetry',
        description: 'Provides authentication and security audit events from Windows.',
        status: 'TELEMETRY SOURCE',
      },
      {
        title: 'SYSMON',
        subtitle: 'Enhanced Endpoint Telemetry',
        description: 'Provides additional visibility into Windows system activity.',
        status: 'TELEMETRY SOURCE',
      },
      {
        title: 'WAZUH AGENT',
        subtitle: 'Telemetry Collection',
        description: 'Collects and forwards endpoint security telemetry to the Wazuh monitoring environment.',
        status: 'CONFIGURED',
      },
      {
        title: 'WAZUH MANAGER',
        subtitle: 'Centralized Security Monitoring',
        description: 'Processes and analyzes security data received from monitored systems.',
        status: 'CONFIGURED',
      },
      {
        title: 'WAZUH DASHBOARD',
        subtitle: 'Analyst Visibility',
        description: 'Provides centralized visibility into security events and alerts.',
        status: 'CONFIGURED',
      },
      {
        title: 'ANALYST REVIEW',
        subtitle: 'Detection & Analysis',
        description: 'Security events are reviewed and documented from a SOC analyst perspective.',
        status: 'LAB PRACTICE',
      },
    ],
  },
  telemetrySources: [
    {
      title: 'WINDOWS SECURITY EVENT LOGS',
      description: 'Provides native Windows security auditing information such as authentication events.',
      example: '4625 — Failed Logon',
    },
    {
      title: 'SYSMON',
      description: 'Provides enhanced endpoint telemetry useful for understanding system activity such as process creation and network connections.',
      example: 'Process creation, network connection, file activity',
    },
  ],
  eventExample: {
    label: 'LAB EXAMPLE',
    title: 'FAILED AUTHENTICATION',
    steps: [
      'Incorrect password',
      'Windows generates Event ID 4625',
      'Windows Security Event Log',
      'Wazuh Agent',
      'Wazuh Manager',
      'Wazuh Dashboard',
      'Analyst Visibility',
    ],
    details: {
      eventId: '4625',
      name: 'An account failed to log on',
      source: 'Windows Security',
      purpose: 'Indicates a failed Windows authentication attempt.',
    },
  },
  components: [
    {
      name: 'Windows 11',
      role: 'Monitored Endpoint',
      description: 'Endpoint system generating Windows event and telemetry data.',
      status: 'CONFIGURED',
    },
    {
      name: 'Sysmon',
      role: 'Enhanced Telemetry',
      description: 'Captures detailed Windows system activity for richer event data.',
      status: 'CONFIGURED',
    },
    {
      name: 'Wazuh Agent',
      role: 'Telemetry Collection',
      description: 'Forwards collected Windows telemetry to the Wazuh monitoring environment.',
      status: 'CONFIGURED',
    },
    {
      name: 'Wazuh Manager',
      role: 'Central Processing',
      description: 'Processes and analyzes security telemetry from monitored endpoints.',
      status: 'CONFIGURED',
    },
    {
      name: 'Wazuh Dashboard',
      role: 'Analyst Visibility',
      description: 'Displays security events and alert context for review.',
      status: 'CONFIGURED',
    },
    {
      name: 'Kali Linux',
      role: 'Controlled Test System',
      description: 'Generates controlled activity against the Windows endpoint for lab scenarios.',
      status: 'CONFIGURED',
    },
  ],
  skillsPracticed: [
    'SIEM Monitoring',
    'Windows Event Analysis',
    'Log Collection',
    'Sysmon Telemetry',
    'Alert Analysis Fundamentals',
    'Security Event Analysis',
    'Authentication Event Analysis',
    'Endpoint Visibility',
    'Detection Fundamentals',
    'Security Documentation',
  ],
  evidence: [
    {
      id: 'event-viewer-4625',
      title: 'Windows Event Viewer — Event ID 4625',
      source: 'Windows Security',
      image: null,
      alt: 'Placeholder for Windows Event Viewer screenshot showing Event ID 4625.',
      description: 'Add a sanitized screenshot of the failed authentication event from Windows Security Event Viewer.',
      caption: null,
    },
    {
      id: 'wazuh-dashboard',
      title: 'Wazuh Dashboard Screenshot',
      source: 'Wazuh UI',
      image: null,
      alt: 'Placeholder for Wazuh Dashboard screenshot showing event visibility.',
      description: 'Add a sanitized screenshot of the Wazuh Dashboard used for event review.',
      caption: null,
    },
    {
      id: 'sysmon-events',
      title: 'Sysmon Event View',
      source: 'Sysmon Logs',
      image: null,
      alt: 'Placeholder for Sysmon event data screenshot.',
      description: 'Add a sanitized screenshot showing Sysmon telemetry log entries.',
      caption: null,
    },
  ],
  plannedExpansion: [
    {
      title: 'Windows Server / Active Directory',
      description: 'Planned expansion to practice domain authentication and identity-focused security monitoring.',
    },
    {
      title: 'Additional Windows Endpoint',
      description: 'Planned expansion for multi-endpoint telemetry collection and correlation.',
    },
    {
      title: 'Additional Detection Scenarios',
      description: 'Planned future scenarios for broader alert and incident review practice.',
    },
  ],
}
