# Threat Hunting Queries & Methodology — Project 03

> **Enterprise SOC Detection & Incident Response Lab**  
> **Target Telemetry**: Sysmon Event IDs 1, 3, 10, 13 & Windows Event Logs  
> **Query Frameworks**: PowerShell `Get-WinEvent` & Wazuh DQL

---

## 1. Threat Hunting Methodology

Threat hunting in this lab follows a structured behavioral cycle:

```text
Hypothesis ──► Telemetry ──► Query ──► Investigation ──► Validation ──► Finding ──► Tuning
```

1. **Hypothesis**: Formulate a threat scenario based on MITRE ATT&CK techniques.
2. **Telemetry**: Identify required Sysmon Event IDs (1, 3, 10, 13).
3. **Query**: Execute targeted PowerShell or Wazuh DQL queries.
4. **Investigation**: Inspect process ancestry, command-line arguments, and user SID context.
5. **Validation**: Separate authorized administrative activity from suspicious behavior.
6. **Finding**: Document genuine security indicators.
7. **Tuning**: Refine SIEM detection rules to reduce noise.

---

## 2. Threat Hunting Query Library

### 2.1 PowerShell Threat Hunting (Sysmon Event ID 1)

**PowerShell Query**:
```powershell
Get-WinEvent -FilterHashtable @{
    LogName='Microsoft-Windows-Sysmon/Operational'
    Id=1
} -MaxEvents 50 |
Where-Object { $_.Message -match 'powershell.exe.*-ExecutionPolicy Bypass' } |
Format-List TimeCreated, Id, Message
```

**Wazuh DQL Query**:
```text
data.win.system.eventID:"1" AND data.win.eventdata.image:"*powershell.exe*" AND data.win.eventdata.commandLine:"*ExecutionPolicy Bypass*"
```

---

### 2.2 Suspicious Process Chain Hunting (`powershell.exe` -> `cmd.exe`)

**PowerShell Query**:
```powershell
Get-WinEvent -FilterHashtable @{
    LogName='Microsoft-Windows-Sysmon/Operational'
    Id=1
} -MaxEvents 50 |
Where-Object { $_.Message -match 'powershell.exe' -and $_.Message -match 'cmd.exe' } |
Format-List TimeCreated, Id, Message
```

**Wazuh DQL Query**:
```text
data.win.system.eventID:"1" AND data.win.eventdata.parentImage:"*powershell.exe*" AND data.win.eventdata.image:"*cmd.exe*"
```

---

### 2.3 Registry Run Key Persistence Hunting (Sysmon Event ID 13)

**PowerShell Query**:
```powershell
Get-WinEvent -FilterHashtable @{
    LogName='Microsoft-Windows-Sysmon/Operational'
    Id=13
} -MaxEvents 50 |
Where-Object { $_.Message -match 'CurrentVersion\\Run' } |
Format-List TimeCreated, Id, Message
```

**Wazuh DQL Query**:
```text
data.win.system.eventID:"13" AND data.win.eventdata.targetObject:"*CurrentVersion\\Run*"
```

---

### 2.4 LSASS Credential Access Hunting (Sysmon Event ID 10)

**PowerShell Query**:
```powershell
Get-WinEvent -FilterHashtable @{
    LogName='Microsoft-Windows-Sysmon/Operational'
    Id=10
} -MaxEvents 50 |
Where-Object { $_.Message -match 'lsass.exe' } |
Format-List TimeCreated, Id, Message
```

**Wazuh DQL Query**:
```text
data.win.system.eventID:"10" AND data.win.eventdata.targetImage:"*lsass.exe*"
```

---

### 2.5 Outbound Network Activity Hunting (Sysmon Event ID 3)

**PowerShell Query**:
```powershell
Get-WinEvent -FilterHashtable @{
    LogName='Microsoft-Windows-Sysmon/Operational'
    Id=3
} -MaxEvents 20 |
Select-Object TimeCreated, Id, Message
```

**Wazuh DQL Query**:
```text
data.win.system.eventID:"3" AND data.win.eventdata.destinationPort:"8080"
```
