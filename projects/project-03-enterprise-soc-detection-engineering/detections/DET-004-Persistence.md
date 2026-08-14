# DET-004 — Registry Run Key Persistence

## Detection Metadata
- **Detection ID**: DET-004
- **Title**: Registry Run Key Value Set Detection
- **Severity**: Medium
- **Telemetry Source**: Sysmon Operational Log
- **Sysmon Event ID**: Event ID 13 (Registry Event - Value Set)
- **MITRE ATT&CK Mapping**: T1547.001 (Boot or Logon Autostart Execution: Registry Run Keys / Startup Folder)
- **Validation Status**: Telemetry Validated

---

## Detection Objective
Detect modifications to Windows Registry Run keys (`HKCU\Software\Microsoft\Windows\CurrentVersion\Run`) used for maintaining persistence across user logons.

---

## Telemetry & Evidence (Sysmon Event ID 13)
- **Event ID**: 13 (Registry Event - Value Set)
- **Target Object**: `HKCU\Software\Microsoft\Windows\CurrentVersion\Run\SOC-Project3-Test`
- **Details**: `notepad.exe`
- **Image**: `powershell.exe` (Modifying process)

![Persistence Detection](../screenshots/persistence_detection.png)

---

## Sigma Detection Rule (`DET-004-Persistence.yml`)

```yaml
title: Registry Run Key Persistence Modification
id: det-004-registry-run-key
status: experimental
description: Detects creation or modification of Registry Run keys
logsource:
    category: registry_set
    product: windows
detection:
    selection:
        TargetObject|contains:
            - '\Software\Microsoft\Windows\CurrentVersion\Run\'
            - '\Software\Microsoft\Windows\CurrentVersion\RunOnce\'
    condition: selection
falsepositives:
    - Legitimate software installers registering auto-start entries (e.g. Edge, OneDrive)
level: medium
```

---

## False Positive Analysis & Tuning
- **False Positive Potential**: Legitimate desktop applications (e.g., Microsoft Edge, OneDrive) configuring startup entries upon installation or update.
- **Tuning Consideration**: Filter trusted modifying binaries signed by Microsoft, while auditing un-signed binaries, scripts (`cmd.exe /c`, `powershell.exe`), or files in temporary user directories (`%TEMP%`, `%APPDATA%`).
