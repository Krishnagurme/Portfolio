export const investigations = [
  {
    id: 'case-001',
    caseNumber: 'CASE-001',
    slug: 'windows-failed-authentication',
    title: 'Windows Failed Authentication Detection',
    type: 'Home Lab Investigation',
    status: 'Completed',
    environment: 'SOC Home Lab',
    eventIds: ['4625'],
    tools: ['Windows Event Viewer', 'Wazuh'],
    summary:
      'Controlled failed-authentication activity generated on a Windows endpoint and traced through Windows Security logging into Wazuh.',
    objective:
      'Generate a controlled failed Windows authentication event and verify that the activity is recorded by Windows Security logging and forwarded into the Wazuh monitoring environment.',
    scenario:
      'An incorrect password was intentionally entered on the Windows 11 lab endpoint to generate failed-authentication telemetry.',
    activity:
      'A failed Windows authentication attempt was created on the lab endpoint, producing Event ID 4625 in the Windows Security Event Log and forwarding it through the Wazuh monitoring pipeline for centralized review.',
    telemetry: [
      'Windows Security Event Log',
      'Wazuh Agent',
      'Wazuh Manager',
      'Wazuh Dashboard',
    ],
    importantFields: [
      {
        name: 'Account Name',
        description: 'Identifies the account involved in the failed authentication attempt.',
      },
      {
        name: 'Logon Type',
        description: 'Provides context about the type of Windows logon being attempted.',
      },
      {
        name: 'Workstation Name',
        description: 'Shows the endpoint or system where the authentication was attempted.',
      },
      {
        name: 'Source Network Address',
        description: 'May help identify where a network-based authentication attempt originated.',
      },
      {
        name: 'Failure Reason',
        description: 'Provides additional context about why authentication failed.',
      },
      {
        name: 'Status / Substatus',
        description: 'Shows the failure status codes when available for additional Windows authentication context.',
      },
      {
        name: 'Authentication Package',
        description: 'Identifies the authentication mechanism used by the logon attempt.',
      },
      {
        name: 'Timestamp',
        description: 'Locates the event in time and helps correlate surrounding activity.',
      },
    ],
    observations: [
      'Windows generated Event ID 4625 after the failed authentication attempt.',
      'The event was available in the Windows Security Event Log.',
      'Endpoint security telemetry was forwarded through the Wazuh monitoring pipeline.',
      'The event became visible for centralized review in the lab environment.',
      'A single failed login does not by itself establish malicious activity.',
      'Additional context would be required to determine whether repeated failures represent suspicious behavior.',
    ],
    reasoning: [
      'Repeated failed logons in a short time frame would be more suspicious than a single failed attempt.',
      'Failed attempts against multiple accounts or privileged accounts may warrant deeper review.',
      'Unusual source systems or addresses strengthen the case for further investigation.',
      'Failed authentication followed by a successful logon may indicate credential validation behavior.',
      'Correlating failed logons with other authentication events helps distinguish normal user error from concerning activity.',
    ],
    nextSteps: [
      'Review surrounding authentication events for additional 4625 or 4624 entries.',
      'Check for repeated Event ID 4625 activity from the same account or source.',
      'Look for successful logons after failed attempts to understand the session outcome.',
      'Compare account and source context against expected lab behavior.',
      'Review relevant Sysmon telemetry if applicable.',
      'Correlate related events in the SIEM for broader visibility.',
    ],
    analysisConcept:
      '4625 failed logon events followed by 4624 successful logons can be a useful correlation pattern to investigate, but that sequence is not documented in this case.',
    labOutcome:
      'Monitoring Pipeline Verified — failed-authentication telemetry generated on the Windows endpoint became visible through the configured monitoring workflow.',
    lessonsLearned: [
      'Windows authentication failures generate useful security telemetry.',
      'Event ID 4625 provides visibility into failed logon activity.',
      'Centralized SIEM visibility makes endpoint events easier to review.',
      'Individual events require context before being classified as suspicious.',
      'Event fields and surrounding activity are important during authentication analysis.',
    ],
    evidence: [
      {
        id: 'event-viewer-4625',
        title: 'Windows Event Viewer — Event ID 4625',
        source: 'Windows Security',
        image: null,
        alt: 'Placeholder for Windows Event Viewer screenshot showing Event ID 4625.',
        description: 'Add a sanitized screenshot of the failed authentication event from Windows Event Viewer.',
        caption: null,
      },
      {
        id: 'wazuh-4625',
        title: 'Wazuh — Failed Authentication Visibility',
        source: 'Wazuh Dashboard',
        image: null,
        alt: 'Placeholder for Wazuh screenshot showing failed authentication visibility.',
        description: 'Add a sanitized screenshot of the event visibility in Wazuh.',
        caption: null,
      },
    ],
  },
]
