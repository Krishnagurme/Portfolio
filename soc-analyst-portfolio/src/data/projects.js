export const projects = [
  {
    slug: 'soc-home-lab',
    title: 'SOC Home Lab — Detection Engineering, Threat Hunting & Incident Response',
    summary:
      'Built a hands-on Windows SOC environment to practice security monitoring, detection engineering, threat hunting, and incident response.',
    focus: 'Windows host telemetry, detection pipeline validation, and analyst documentation.',
    status: 'Completed',
    type: 'Home Lab Project',
    techStack: 'Wazuh • Sysmon • Windows 11 • Sigma • MITRE ATT&CK',
    timeline: 'Completed — Lab validation, monitoring pipeline, investigator evidence documentation',
    highlights: [
      'Built a Windows SOC monitoring pipeline: Windows 11 → Sysmon → Wazuh Agent → Wazuh Manager → Wazuh Dashboard.',
      'Engineered custom Wazuh detection rules with severity levels, Sigma rule mapping, and MITRE ATT&CK context.',
      'Conducted structured threat hunting across user, process, command-line, PowerShell, authentication, network, and MITRE-based hypotheses.',
      'Executed a full incident response workflow: triage, scoping, evidence collection, containment, eradication, recovery, and lessons learned.',
      'Investigated and documented 10+ SOC cases using structured investigation reports and evidence-based false-positive analysis.',
      'Documented Windows telemetry, Sysmon process-creation events, authentication events, and analyst reasoning across all lab phases.',
    ],
    links: [],
    featured: true,
    sections: [
      {
        title: '01 – Overview',
        content:
          'This cybersecurity home lab was built to practice and validate the full SOC analyst workflow across security monitoring, detection engineering, threat hunting, and incident response.\n\nThe lab environment runs on a Windows 11 endpoint instrumented with Sysmon, forwarding telemetry through a Wazuh Agent to a centralized Wazuh Manager and Dashboard. All phases of the project have been completed with hands-on practical work.\n\nTech Stack: Wazuh • Sysmon • Windows 11 • Sigma • MITRE ATT&CK',
      },
      {
        title: '02 – Architecture',
        content:
          'Deployed Pipeline:\n\nWindows 11 Host → Sysmon (endpoint instrumentation) → Wazuh Agent → Wazuh Manager → Wazuh Dashboard → Analyst Review\n\nComponents:\n• Windows 11 — primary endpoint generating security telemetry\n• Sysmon — process creation, network connections, file events (Event ID 1, 3, 11)\n• Wazuh Agent — collects and forwards endpoint logs\n• Wazuh Manager — receives, processes, and applies detection rules\n• Wazuh Dashboard — centralized SIEM visibility for alert review and investigation',
      },
      {
        title: '03 – Detection Engineering',
        content:
          '✅ Completed\n\nDetection engineering work performed in this lab:\n\n• Authored custom Wazuh detection rules targeting Windows and Sysmon telemetry\n• Configured rule severity levels appropriate to alert priority\n• Developed Sigma rule content aligned with detection logic\n• Applied MITRE ATT&CK framework mapping to detection rules (T1059.001, T1059.003, T1087, T1105, and others)\n• Performed false-positive analysis to distinguish authorized activity from suspicious behavior\n• Applied contextual validation to reduce noise and improve alert fidelity\n• Reviewed detection logic against actual endpoint telemetry to confirm rule accuracy\n\n🚧 Portfolio artifact documentation (screenshots, rule files, GitHub) — in progress',
      },
      {
        title: '04 – Threat Hunting',
        content:
          '✅ Completed\n\nThreat hunting activities performed across the following dimensions:\n\n• User-based hunting — identify anomalous user account activity\n• Process hunting — review process execution patterns for suspicious behavior\n• Parent-process hunting — analyze parent-child process relationships for unexpected chains\n• Command-line hunting — inspect command-line arguments for encoded commands, downloads, or suspicious parameters\n• PowerShell hunting — detect suspicious PowerShell invocations (encoded, download cradles, unusual parents)\n• IOC hunting — pivot on indicators of compromise across endpoint telemetry\n• Authentication / account hunting — review failed logon patterns, unusual accounts, and logon types\n• Network / connection hunting — identify outbound connections, unusual destinations, or unexpected listening ports\n• MITRE ATT&CK-based hunting — apply technique-driven hypotheses to guide telemetry review\n• Hypothesis-driven hunting — formulate structured hypotheses before searching telemetry\n• Process-tree investigation — trace full process ancestry to understand execution context\n• Attack-chain correlation — connect multiple events into a coherent sequence to build investigation context\n\n🚧 Portfolio artifact documentation — in progress',
      },
      {
        title: '05 – Project Investigation Work',
        content:
          '✅ Completed\n\nAs part of the SOC Home Lab project, 10+ structured SOC case investigations were performed using the lab environment.\n\nEach investigation followed a structured analyst workflow:\n• Alert triage and prioritization\n• Affected host and user identification\n• Telemetry collection from Sysmon and Windows Event Logs\n• Process, command-line, and parent-process analysis\n• False-positive analysis and noise exclusion\n• Evidence-based alert disposition\n• Structured investigation documentation\n\nNote: The Security Investigations section of this portfolio presents selected individual case studies from this investigation work. These are documented separately and are not subsections of this project.\n\nView the Security Investigations section for detailed case documentation.',
      },
      {
        title: '06 – Incident Response',
        content:
          '✅ Completed\n\nFull incident response workflow executed in the lab environment:\n\n• Triage — initial review of alerts, prioritization by severity and context\n• Scoping — identifying the affected host, user, and extent of the incident\n• Evidence collection — capturing Sysmon logs, Windows Event Logs, process telemetry, and Wazuh alerts\n• Containment — isolating affected activity and preventing further spread in the lab environment\n• Eradication — identifying and removing the source of the incident\n• Recovery — restoring normal lab operation and verifying the environment\n• Lessons learned — documenting what was found, what was done, and what to improve\n\nIncident response was practiced across multiple lab cases covering authentication events, PowerShell execution, and process-creation telemetry.\n\n🚧 Portfolio artifact documentation — in progress',
      },
      {
        title: '07 – SOC Dashboard',
        content:
          '✅ Completed\n\nWazuh Dashboard was configured and used throughout the project for:\n• Centralized alert visibility across endpoint telemetry\n• Alert triage and investigation pivot\n• Rule hit review and severity assessment\n• Correlation of Sysmon and Windows Security events\n\n🚧 Dashboard screenshots and visual documentation — pending portfolio artifact upload',
      },
      {
        title: '08 – Detection Documentation',
        content:
          '✅ Completed\n\nDocumentation produced across lab phases includes:\n• Structured SOC investigation reports for each case\n• Evidence-based analysis with Sysmon and Windows Event Log data\n• False-positive analysis and exclusion reasoning\n• Alert disposition notes (Benign True Positive, Closed — No Escalation Required, etc.)\n• Detection rule context and MITRE ATT&CK mapping notes\n• Analyst reasoning and investigation conclusions\n\n🚧 GitHub repository with rule files, Sigma content, and report templates — pending public upload',
      },
      {
        title: '09 – GitHub',
        content:
          '🚧 Portfolio Implementation In Progress\n\nThe SOC Home Lab GitHub repository will include:\n• Custom Wazuh detection rules\n• Sigma rule files\n• Lab architecture documentation\n• Investigation report templates\n• Setup and deployment notes\n\nRepository URL will be published once documentation is finalized and sanitized for public sharing.',
      },
      {
        title: '10 – What I Learned',
        content:
          'Key learning outcomes from completing the SOC Home Lab project:\n\n• Windows telemetry collection and Sysmon instrumentation\n• Wazuh SIEM deployment, rule authoring, and alert management\n• Detection engineering — writing rules, mapping MITRE ATT&CK, reducing false positives\n• Threat hunting methodology — hypothesis-driven, technique-driven, and telemetry-driven approaches\n• Process-tree analysis using ProcessGuid, ParentProcessGuid, image paths, and command-line data\n• Authentication event analysis and logon context interpretation\n• Full incident response workflow — triage through lessons learned\n• Structured SOC investigation documentation and evidence-based analyst reasoning\n• Distinguishing benign activity from suspicious behavior using contextual analysis\n• Building analyst habits: question assumptions, review context, document conclusions',
      },
    ],
  },
];
