export const projects = [
  {
    slug: 'soc-home-lab',
    title: 'SOC Home Lab',
    summary:
      'Build and validate security monitoring for a Windows home lab by documenting event telemetry, detection coverage, and analyst workflow practices.',
    focus: 'Windows host telemetry, detection pipeline validation, and analyst documentation.',
    status: 'Ongoing',
    type: 'Home Lab Project',
    timeline: 'Lab validation, monitoring pipeline check, investigator evidence documentation',
    highlights: [
      'Documented Windows event generation and visibility through a centralized SOC pipeline.',
      'Mapped failed authentication telemetry into investigation context without overstating lab activity.',
      'Used home lab evidence to support analyst learning and security monitoring practices.',
    ],
    links: [
      {
        label: 'SOC Lab overview',
        to: '/soc-lab',
      },
      {
        label: 'CASE-001 investigation',
        to: '/investigations/windows-failed-authentication',
      },
    ],
    sections: [
      {
        title: 'Project overview',
        content:
          'This cybersecurity home lab project documents the SOC operations workflow used to validate Windows telemetry, detection pipeline visibility, and analyst evidence without making enterprise production claims.',
      },
      {
        title: 'Why I built it',
        content:
          'I built this project to practice Blue Team monitoring, verify that Windows event telemetry is captured in the lab pipeline, and keep the focus on evidence-driven security operations learning.',
      },
      {
        title: 'Project objectives',
        content:
          'Validate Windows event capture; confirm monitoring pipeline visibility; practice SOC documentation and analyst reasoning in a controlled home lab environment.',
      },
      {
        title: 'Architecture summary',
        content:
          'Windows host telemetry is collected through Sysmon and a Wazuh agent, forwarded to a Wazuh manager, and surfaced in a dashboard for analyst review. The architecture prioritizes visibility and evidence flow over production claims.',
      },
      {
        title: 'Implementation',
        content:
          'Implemented as a practical Blue Team exercise using a Windows host, security event instrumentation, open-source visibility tooling, and analyst-led incident documentation.',
      },
      {
        title: 'Telemetry',
        content:
          'Focused telemetry includes Windows Event ID 4625 failed authentications, host context, and monitoring pipeline enrichment that demonstrates how endpoint events become analyst-visible security data.',
      },
      {
        title: 'Skills developed',
        content:
          'Host telemetry analysis, detection pipeline validation, SOC documentation, evidence-based investigation reasoning, and lab-based security operations practice.',
      },
      {
        title: 'Project outcome',
        content:
          'A documented home lab project that ties a real SOC case study to Windows telemetry validation and analyst learning without overstating the environment as production-ready.',
      },
      {
        title: 'What I learned',
        content:
          'Clear security work is evidence-based, honest about lab scope, and focused on what the data actually supports rather than broad enterprise narratives.',
      },
      {
        title: 'Next steps (PLANNED)',
        content:
          'PLANNED: expand to additional telemetry sources, practice network detection, and deepen alert validation for future lab iterations.',
      },
    ],
  },
]
