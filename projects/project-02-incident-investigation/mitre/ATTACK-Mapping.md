# MITRE ATT&CK Framework Mapping

> **Project 02**: SOC Incident Investigation & Threat Hunting Lab  
> **Target Endpoint**: `WIN11-CLIENT` (`192.168.56.20`)  
> **SIEM & Instrumentation**: Wazuh SIEM, Sysmon, Windows Event Log, Wireshark

---

## 1. Overview

This document presents the complete **MITRE ATT&CK Framework Mapping** for all observed telemetry, security alerts, and analyst investigations performed in Project 02. 

Every mapped technique is backed strictly by empirical evidence collected from Windows Security Logs, Sysmon Event ID 1 / Event ID 3, Wazuh SIEM alerts, or Wireshark packet captures. No technique is assigned based on assumption or theoretical possibility.

---

## 2. Master ATT&CK Tactic & Technique Matrix

| Tactic | Technique ID | Technique Name | Mapped Case | Observed Evidence & Telemetry Context |
|---|---|---|---|---|
| **Credential Access** | `T1110.001` | [Brute Force: Password Guessing](https://attack.mitre.org/techniques/T1110/001/) | [Case 01](../cases/case-01-brute-force.md) | 5x consecutive failed logon attempts (Windows Event ID 4625) for account `soc-test` followed by 1x successful logon (Event ID 4624) over NTLM/SMB from Kali host `192.168.56.101`. |
| **Execution** | `T1059.001` | [Command and Scripting Interpreter: PowerShell](https://attack.mitre.org/techniques/T1059/001/) | [Case 02](../cases/case-02-powershell.md), [Case 04](../cases/case-04-credential-access.md) | Execution of `powershell.exe` with security-relevant flags (`-ExecutionPolicy Bypass`, `-NoProfile`) writing test strings and launching `cmdkey.exe`. Recorded in Sysmon Event ID 1 and Wazuh SIEM. |
| **Discovery** / **Credential Access** | `T1555.004` | [Credentials from Password Stores: Windows Credential Manager](https://attack.mitre.org/techniques/T1555/004/) | [Case 04](../cases/case-04-credential-access.md) | Command-line execution of `"cmdkey.exe" /list` (PID 532) spawned by `powershell.exe` (PID 4060) under user `WIN11-CLIENT\SOC-WIN11` to enumerate stored Windows Credential Manager credentials. |
| **Persistence** | `T1053.005` | [Scheduled Task/Job: Scheduled Task](https://attack.mitre.org/techniques/T1053/005/) | [Case 05](../cases/case-05-persistence.md) | Creation and registration of scheduled task `SOC-CASE-05-Persistence` configured with logon trigger (`ONLOGON`) executing `cmd.exe /c echo SOC-CASE-05 > C:\SOC-CASE-05.txt`. |
| **Execution** | `T1059.003` | [Command and Scripting Interpreter: Windows Command Shell](https://attack.mitre.org/techniques/T1059/003/) | [Case 05](../cases/case-05-persistence.md) | Invocation of `cmd.exe` by Windows Task Scheduler service parent process `svchost.exe -k netsvcs -p -s Schedule`. Triggered Wazuh Alert Rule ID `92052` (Severity Level 4). |

---

## 3. Deep-Dive Technique Breakdown

### T1110.001 — Brute Force: Password Guessing
- **Tactic**: Credential Access (TA0006)
- **Description**: Adversaries may use password guessing to gain access to valid accounts when password choices are predictable.
- **Observed Evidence**:
  - Event ID 4625 timestamp: `2026-08-13T08:09:18.071Z` (Target: `soc-test`, Source IP: `192.168.56.101`, Logon Type: 3)
  - Event ID 4624 timestamp: `2026-08-13T08:10:35.420Z` (Target: `soc-test`, Source IP: `192.168.56.101`, Logon Type: 3)
- **Analyst Note**: High confidence of password guessing pattern due to rapid sequential failure followed by successful logon.

### T1059.001 — PowerShell
- **Tactic**: Execution (TA0002)
- **Description**: Adversaries may use PowerShell commands or scripts to execute code and commands on Windows hosts.
- **Observed Evidence**:
  - Sysmon Event ID 1 Image: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`
  - Command Line 1: `powershell.exe -NoProfile -ExecutionPolicy Bypass Write-Output 'SOC-CASE-02-SUSPICIOUS-TEST'`
  - Command Line 2: `powershell.exe` spawning `cmdkey.exe /list`
- **Analyst Note**: Execution policy bypass is a key indicator for execution monitoring, though payloads were benign in lab tests.

### T1555.004 — Windows Credential Manager
- **Tactic**: Discovery (TA0007) / Credential Access (TA0006)
- **Description**: Adversaries may acquire credentials from Windows Credential Manager where user secrets and domain passwords are stored.
- **Observed Evidence**:
  - Process: `C:\WINDOWS\system32\cmdkey.exe`
  - Command Line: `"C:\WINDOWS\system32\cmdkey.exe" /list`
  - Process GUID: `{ab0fc8cd-447b-6a7e-4b02-000000002400}`
- **Analyst Note**: Enumeration confirmed; credential theft/disclosure not proven.

### T1053.005 — Scheduled Task
- **Tactic**: Persistence (TA0003)
- **Description**: Adversaries may create scheduled tasks to execute programs at system startup or on a periodic basis.
- **Observed Evidence**:
  - Task Name: `SOC-CASE-05-Persistence`
  - Task Trigger: At logon (`ONLOGON`)
  - Parent Process: `svchost.exe -k netsvcs -p -s Schedule`
- **Analyst Note**: Verified persistence registration and execution lineage in Sysmon and Wazuh Rule 92052.

---

## 4. Defensive Coverage & Detection Recommendations

1. **Rule Mapping Alignment**: Ensure SIEM detection rules tag alerts with MITRE ATT&CK technique IDs (e.g. `T1059.001`, `T1053.005`) for SOC metric tracking and threat coverage heatmaps.
2. **Telemetry Validation**: Ensure Sysmon configuration collects Event ID 1 (Process Creation), Event ID 3 (Network Connection), and Event ID 11 (File Creation) to maintain complete ATT&CK data source coverage.
