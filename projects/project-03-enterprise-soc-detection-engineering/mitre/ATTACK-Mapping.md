# MITRE ATT&CK Framework Mapping — Project 03

> **Enterprise SOC Detection & Incident Response Lab**  
> **Telemetry Source**: Sysmon (Event IDs 1, 3, 10, 13) & Windows Event Log  
> **SIEM Framework**: Wazuh SIEM & Sigma Detection Logic

---

## 1. Overview

This document defines the **MITRE ATT&CK Mapping** for the detection engineering scenarios developed in Project 03.

Mappings are assigned strictly on empirical evidence gathered from validated Sysmon telemetry and endpoint process events. No technique is assigned based on assumption.

---

## 2. Master ATT&CK Tactic & Technique Coverage

| Detection ID | Detection Scenario | ATT&CK Technique ID | Technique Name | Tactic | Validation Status |
|---|---|---|---|---|---|
| **DET-001** | Suspicious PowerShell Execution | `T1059.001` | [PowerShell](https://attack.mitre.org/techniques/T1059/001/) | Execution | Telemetry Validated |
| **DET-002** | PowerShell Spawning CMD | `T1059.003` | [Windows Command Shell](https://attack.mitre.org/techniques/T1059/003/) | Execution | Telemetry Validated |
| **DET-003** | Suspicious Process Tree | Behavioral | Process Lineage Analysis | Execution | Telemetry Validated |
| **DET-004** | Registry Run Key Persistence | `T1547.001` | [Registry Run Keys / Startup Folder](https://attack.mitre.org/techniques/T1547/001/) | Persistence | Telemetry Validated |
| **DET-005** | LSASS Process Access | `T1003.001` | [LSASS Memory](https://attack.mitre.org/techniques/T1003/001/) | Credential Access | Telemetry Validated |
| **DET-006** | Outbound Network Connection | Context-Dependent | Outbound Connection Investigation | Investigation Signal | Telemetry Validated |

*Note on DET-006*: DET-006 is not assigned a specific C2 technique because observed outbound telemetry alone does not establish malicious command-and-control behavior.

---

## 3. Technique Evidence Breakdown

### T1059.001 — PowerShell (Execution)
- **Observed Telemetry**: Sysmon Event ID 1 (`Image = powershell.exe`, `-ExecutionPolicy Bypass`).
- **Detection Focus**: Flags execution policy overrides used to bypass execution restrictions.

### T1059.003 — Windows Command Shell (Execution)
- **Observed Telemetry**: Sysmon Event ID 1 (`ParentImage = powershell.exe`, `Image = cmd.exe /c whoami`).
- **Detection Focus**: Identifies command shell invocations originating from PowerShell sessions.

### T1547.001 — Registry Run Keys / Startup Folder (Persistence)
- **Observed Telemetry**: Sysmon Event ID 13 (`TargetObject` matching `HKCU\Software\Microsoft\Windows\CurrentVersion\Run\SOC-Project3-Test`).
- **Detection Focus**: Detects auto-start registry key additions configured for logon persistence.

### T1003.001 — LSASS Memory (Credential Access)
- **Observed Telemetry**: Sysmon Event ID 10 (`TargetImage = C:\Windows\System32\lsass.exe`).
- **Detection Focus**: Audits process handles opened against LSASS memory to detect credential harvesting.

---

## 4. Detection Engineering Principles

- **Evidence-Based Mapping**: Techniques are assigned only when observed telemetry provides sufficient evidence.
- **Context Over Single-Field Alerts**: Combining image paths, parent process GUIDs, User SIDs, and command-line arguments prevents false positives.
