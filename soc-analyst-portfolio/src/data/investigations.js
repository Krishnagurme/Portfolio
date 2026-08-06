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
  {
    id: 'case-002',
    caseNumber: 'CASE-002',
    slug: 'powershell-process-investigation',
    title: 'PowerShell Process Investigation',
    type: 'Home Lab Investigation',
    status: 'Closed',
    verdict: 'Benign True Positive',
    resolution: 'Closed — No Escalation Required',
    environment: 'SOC Home Lab',
    eventIds: ['Sysmon Event ID 1'],
    tools: ['Wazuh', 'Sysmon', 'Windows Event Viewer', 'Windows PowerShell'],
    summary:
      'PowerShell execution alert investigated in the SOC Home Lab on host WIN11-CLIENT. Analyzed process-creation telemetry to determine context and rule out malicious activity.',
    objective:
      'Explain that PowerShell execution was observed on WIN11-CLIENT. PowerShell is a legitimate Windows administration tool but can also appear in suspicious activity. The purpose of this investigation was NOT to assume PowerShell was malicious. The investigation focused on: What process executed? Which user executed it? How was PowerShell launched? What command-line information was available? What was the parent process? Did the available evidence indicate malicious behavior?',
    scenario:
      'A PowerShell execution triggered a Suspicious PowerShell Execution alert in Wazuh, prompting an investigation into process telemetry to determine if it was malicious or authorized activity.',
    activity:
      'PowerShell process execution was analyzed using host Sysmon process-creation logs (Event ID 1) forwarded to Wazuh to assess the security context and determine the final alert disposition.',
    telemetry: [
      'Sysmon (Event ID 1)',
      'Wazuh Agent',
      'Wazuh Manager',
      'Wazuh Dashboard',
    ],
    eventName: 'Process Creation',
    eventSource: 'Sysmon',
    eventCategory: 'Process Activity',
    importantFields: [
      {
        name: 'Image (Process Path)',
        description: 'The full file system path of the executed process binary.',
      },
      {
        name: 'User Context',
        description: 'The security context and user account under which the process executed.',
      },
      {
        name: 'Command Line',
        description: 'The exact command-line arguments and parameters passed to the process.',
      },
      {
        name: 'Parent Image',
        description: 'The binary that created the target process, helping identify process relationships.',
      },
      {
        name: 'Integrity Level',
        description: 'Indicates the execution privilege level (e.g., Medium vs. High/System).',
      },
      {
        name: 'Process ID / GUID',
        description: 'Unique identifiers used to pivot and correlate related telemetry events.',
      },
    ],
    observations: [
      'Sysmon Event ID 1 recorded the powershell.exe execution on host WIN11-CLIENT.',
      'The process was initiated under the controlled user context WIN11-CLIENT\\SOC-WIN11.',
      'The parent process was identified as C:\\Windows\\explorer.exe, representing standard interactive launch.',
      'The command line contained no additional arguments, encoded commands, or script paths.',
      'The process executed with a Medium integrity level token rather than an elevated high-integrity token.',
      'A separate SYSTEM-owned powershell.exe execution was identified and verified as Wazuh agent background query activity.',
    ],
    reasoning: [
      'An interactive user launching PowerShell without arguments is common administrative or user activity.',
      'The absence of arguments (encoded commands, downloads, scripts) reduces the likelihood of automated malicious scripts.',
      'The parent-child relationship (explorer.exe -> powershell.exe) is typical for user-initiated terminal sessions.',
      'Running under SOC-WIN11 in a controlled lab matches known authorized user behavior.',
      'Isolating user-space execution from SYSTEM-space Wazuh background telemetry prevents alert noise confusion.',
    ],
    nextSteps: [
      'Confirm the user SOC-WIN11 was actively running the command at the recorded timestamp.',
      'Verify if any child processes were spawned by the powershell.exe instance.',
      'Review network telemetry for any outbound connections from Process ID 9072.',
      'Check filesystem telemetry for file creations or modifications by the process.',
      'Correlate the UTC timestamp with the local time of user activity (UTC + 05:30 = IST).',
    ],
    analysisConcept:
      'Reviewing Sysmon Event ID 1 allows an analyst to evaluate process relationships (parent-child), command-line options, integrity levels, and user contexts to separate benign interactive usage from suspicious process execution.',
    labOutcome:
      'Alert Disposition Verified — The suspicious PowerShell execution alert was successfully investigated and resolved as a Benign True Positive based on host process context.',
    lessonsLearned: [
      'Investigating an alert without assuming it is malicious',
      'Using Sysmon Event ID 1 for process-creation analysis',
      'Identifying the correct event among noisy endpoint telemetry',
      'Analyzing process image',
      'Reviewing command-line information',
      'Understanding Windows user/security context',
      'Analyzing parent-child process relationships',
      'Distinguishing SOC-WIN11 activity from NT AUTHORITY\\SYSTEM activity',
      'Correlating UTC and local timestamps',
      'Using Process ID and Process GUID as investigation pivots',
      'Separating relevant evidence from unrelated events',
      'Making an evidence-based alert disposition',
    ],
    triageApproach: {
      framework: 'WHAT → WHO → WHERE → WHEN/HOW → WHAT HAPPENED NEXT',
      description: 'Multiple PowerShell process-creation events existed in the system telemetry. The target event was isolated using affected host, user, timestamp, process name, command line, and parent process context rather than assuming every powershell.exe event belonged to the alert.',
    },
    noiseIdentification: {
      title: 'Noise Identification',
      description: 'Another PowerShell event was found during the investigation and identified as unrelated background activity.',
      details: {
        image: 'C:\\Windows\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe',
        user: 'NT AUTHORITY\\SYSTEM',
        currentDirectory: 'C:\\Program Files (x86)\\ossec-agent\\',
        commandLine: 'powershell secedit /export /cfg $env:TEMP\\secpol.cfg;\nGet-Content $env:TEMP\\secpol.cfg |\nSelect-String "PasswordHistorySize";\nRemove-Item $env:TEMP\\secpol.cfg',
      },
      exclusionReason: 'This was valid PowerShell telemetry but did NOT match the target activity. Reasons: it executed as NT AUTHORITY\\SYSTEM; target activity was associated with SOC-WIN11; its command line was associated with a security-policy query from the Wazuh agent environment. Therefore it was excluded as unrelated telemetry and not called malicious.',
    },
    targetEvent: {
      computer: 'WIN11-CLIENT',
      image: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
      user: 'WIN11-CLIENT\\SOC-WIN11',
      commandLine: '"C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"',
      parentImage: 'C:\\Windows\\explorer.exe',
      parentUser: 'WIN11-CLIENT\\SOC-WIN11',
      processId: '9072',
      processGuid: '{ab0fc8cd-680f-6a74-1901-000000000e00}',
      integrityLevel: 'Medium',
      utcTime: '2026-08-06 10:55:11.363',
    },
    processAnalysis: {
      process: {
        title: 'Process',
        executable: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
        description: 'Observed Windows PowerShell executable. No reputation analysis was performed.',
      },
      user: {
        title: 'User',
        account: 'WIN11-CLIENT\\SOC-WIN11',
        description: 'Matched the controlled lab user context.',
      },
      parentProcess: {
        title: 'Parent Process',
        parentImage: 'C:\\Windows\\explorer.exe',
        relationship: 'explorer.exe\n↓\npowershell.exe',
        description: 'Consistent with PowerShell being launched interactively through the Windows user environment. No unusual parent-child relationship was identified in the reviewed process-creation telemetry. No deeper process-tree investigation occurred.',
      },
      commandLine: {
        title: 'Command Line',
        command: '"C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"',
        description: 'This particular process-creation event did not show: encoded command, suspicious script path, download command, or other suspicious command-line argument. This does not claim that no malicious activity existed anywhere else on the endpoint; the conclusion is limited to the telemetry reviewed.',
      },
      integrityLevel: {
        title: 'Integrity Level',
        level: 'Medium',
        description: 'The reviewed telemetry did not indicate that this PowerShell instance was launched with a high-integrity elevated token. No further privilege-escalation analysis was performed.',
      },
    },
    timestampCorrelation: {
      utcTime: '2026-08-06 10:55:11.363',
      timezoneRelationship: 'UTC + 05:30 = IST',
      flow: '10:55:11 UTC\n↓\n16:25:11 IST',
      description: 'The converted timestamp was consistent with the controlled PowerShell execution performed during the lab. No additional timestamps were analyzed.',
    },
    findingsSummary: [
      { label: 'Process', value: 'powershell.exe' },
      { label: 'Host', value: 'WIN11-CLIENT' },
      { label: 'User', value: 'SOC-WIN11' },
      { label: 'Parent', value: 'explorer.exe' },
      { label: 'Integrity', value: 'Medium' },
      { label: 'Command Line', value: 'No suspicious arguments observed' },
      { label: 'Execution', value: 'Interactive user context' },
    ],
    verdictDetails: {
      verdict: 'BENIGN TRUE POSITIVE',
      description: 'The PowerShell process genuinely executed, so the underlying activity was real. However, the available evidence showed that the identified PowerShell process was associated with authorized controlled home-lab activity. No evidence was identified in the reviewed process-creation telemetry to indicate malicious execution.',
    },
    resolutionDetails: {
      resolution: 'Closed — No Escalation Required',
      description: 'The investigated PowerShell activity was resolved as authorized lab activity. Future production-SOC considerations could require additional investigation if surrounding telemetry showed things such as: suspicious child processes, network connections, file creation, persistence, encoded PowerShell, unusual parent processes, or privilege escalation.',
      label: 'Additional investigation considerations',
    },
    mitreAttack: {
      technique: 'T1059.001',
      name: 'Command and Scripting Interpreter: PowerShell',
      description: 'This mapping provides investigative context only. It does NOT mean the observed PowerShell execution was malicious.',
    },
    evidence: [
      {
        id: 'sysmon-event-1-powershell',
        title: 'Sysmon Event ID 1 — target PowerShell process',
        source: 'Sysmon Logs',
        image: null,
        alt: 'Placeholder for Sysmon Event ID 1 screenshot showing target powershell.exe process creation.',
        description: 'Sanitized screenshot or log view of Sysmon Event ID 1 for the target PowerShell execution.',
        caption: null,
      },
      {
        id: 'wazuh-powershell-event',
        title: 'Wazuh PowerShell event',
        source: 'Wazuh Dashboard',
        image: null,
        alt: 'Placeholder for Wazuh screenshot showing PowerShell execution alert.',
        description: 'Sanitized screenshot of the corresponding Wazuh alert for suspicious PowerShell execution.',
        caption: null,
      },
      {
        id: 'wazuh-system-powershell',
        title: 'unrelated SYSTEM PowerShell event',
        source: 'Wazuh Dashboard',
        image: null,
        alt: 'Placeholder for Wazuh screenshot showing unrelated SYSTEM PowerShell activity.',
        description: 'Sanitized screenshot showing the unrelated NT AUTHORITY\\SYSTEM PowerShell event excluded as noise.',
        caption: null,
      },
    ],
  },
]

