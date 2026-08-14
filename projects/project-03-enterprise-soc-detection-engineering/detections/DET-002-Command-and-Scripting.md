# DET-002 — PowerShell Spawning Windows Command Shell

## Detection Metadata
- **Detection ID**: DET-002
- **Title**: PowerShell Spawning `cmd.exe` Execution Chain
- **Severity**: Medium
- **Telemetry Source**: Sysmon Operational Log
- **Sysmon Event ID**: Event ID 1 (Process Creation)
- **MITRE ATT&CK Mapping**: T1059.003 (Command and Scripting Interpreter: Windows Command Shell)
- **Validation Status**: Telemetry Validated

---

## Detection Objective
Identify process lineage where PowerShell invokes `cmd.exe` to execute system discovery commands such as `whoami`.

---

## Telemetry & Evidence (Sysmon Event ID 1)
- **Parent Image**: `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`
- **Parent Command Line**: `powershell.exe`
- **Image**: `C:\Windows\System32\cmd.exe`
- **Command Line**: `cmd.exe /c whoami`
- **Parent Process ID / Process ID**: Lineage verified

---

## Sigma Detection Rule (`DET-002-Command-and-Scripting.yml`)

```yaml
title: PowerShell Spawning Windows Command Shell
id: det-002-powershell-spawns-cmd
status: experimental
description: Detects powershell.exe spawning cmd.exe process chain
logsource:
    category: process_creation
    product: windows
detection:
    selection:
        ParentImage|endswith: '\powershell.exe'
        Image|endswith: '\cmd.exe'
    condition: selection
falsepositives:
    - Administrative batch scripts executed via PowerShell wrappers
level: medium
```

---

## False Positive Analysis & Tuning
- **False Positive Potential**: Administrative scripts calling legacy batch files.
- **Tuning Consideration**: Evaluate the process tree and command-line parameters (`/c whoami`, `net user`, `ipconfig`) to distinguish reconnaissance from normal script execution.
