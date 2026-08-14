# Threat Hunting Queries & Commands Guide

> **Project 02**: SOC Incident Investigation & Threat Hunting Lab  
> **Target Telemetry**: Windows Security Event Log, Sysmon Operational Log, Wazuh DQL, Wireshark Display Filters

---

## 1. Overview

This document provides the complete library of **threat hunting queries, PowerShell commands, DQL (Dashboard Query Language) filters, and Wireshark capture rules** used during the SOC incident investigations.

These queries were authored and executed to test specific hypotheses, hunt for un-alerted endpoint activity, and extract indicators of compromise (IOCs).

---

## 2. Authentication Threat Hunting

### 2.1 Failed Logon Hunting (Event ID 4625)

**PowerShell Command**:
```powershell
Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4625} -MaxEvents 20 |
Select-Object TimeCreated, Id, Message
```

**Wazuh DQL Query**:
```text
data.win.system.eventID:"4625"
```

**Investigation Purpose**:
Identify repeated authentication failures. Key fields to extract:
- `TargetUserName` (Account attempted)
- `IpAddress` (Source host IP)
- `IpPort` (Source port)
- `WorkstationName` (Source machine name)
- `LogonType` (Type 3 = Network Logon)
- `SubStatus` (Failure reason code)

---

### 2.2 Successful Logon Correlation (Event ID 4624)

**PowerShell Command**:
```powershell
Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4624} -MaxEvents 20 |
Select-Object TimeCreated, Id, Message
```

**Wazuh DQL Query**:
```text
data.win.system.eventID:"4624"
```

**Investigation Purpose**:
Pivot on timestamps and source IPs (`192.168.56.101`) to check if a series of failed logons (4625) was followed by a successful authentication (4624) for the same user account (`soc-test`).

---

## 3. Endpoint Process & PowerShell Hunting

### 3.1 Sysmon Process Creation (Event ID 1)

**PowerShell Command**:
```powershell
Get-WinEvent -FilterHashtable @{
    LogName='Microsoft-Windows-Sysmon/Operational'
    Id=1
} -MaxEvents 50 |
Format-List TimeCreated, Id, Message
```

**Wazuh DQL Query**:
```text
data.win.system.eventID:"1"
```

**Investigation Purpose**:
Examine process creation events for unusual binaries, integrity levels, or parent-child process chains.

---

### 3.2 Suspicious PowerShell Execution Hunting

**PowerShell Command**:
```powershell
Get-WinEvent -FilterHashtable @{
    LogName='Microsoft-Windows-Sysmon/Operational'
    Id=1
} -MaxEvents 50 |
Where-Object { $_.Message -match 'powershell.exe' } |
Format-List TimeCreated, Id, Message
```

**Wazuh DQL Query**:
```text
data.win.system.eventID:"1" AND data.win.eventdata.image:"*powershell.exe*"
```

**Key Execution Flags to Target**:
- `-ExecutionPolicy Bypass` / `-ep bypass`
- `-NoProfile` / `-nop`
- `-EncodedCommand` / `-enc`
- `Invoke-Expression` / `iex`
- `DownloadString` / `DownloadFile`

---

## 4. Credential Access Hunting

### 4.1 `cmdkey.exe` Credential Store Enumeration Hunting

**Sysmon PowerShell Search**:
```powershell
Get-WinEvent -FilterHashtable @{
    LogName='Microsoft-Windows-Sysmon/Operational'
    Id=1
} -MaxEvents 50 |
Where-Object { $_.Message -match 'cmdkey.exe' } |
Format-List TimeCreated, Id, Message
```

**Wazuh DQL Search**:
```text
data.win.system.eventID:"1" AND data.win.eventdata.commandLine:"*cmdkey*"
```

**Direct Command Verification**:
```cmd
cmdkey /list
```

**Investigation Purpose**:
Detect execution of native utility `cmdkey.exe` with parameter `/list` to locate credential discovery behavior targeting Windows Credential Manager.

---

## 5. Persistence Hunting (Scheduled Tasks)

### 5.1 Task Scheduler Query Inspection

**PowerShell Command**:
```powershell
schtasks.exe /Query /TN "SOC-CASE-05-Persistence" /V /FO LIST
```

**Task Scheduler Operational Log Search**:
```powershell
Get-WinEvent -LogName "Microsoft-Windows-TaskScheduler/Operational" -MaxEvents 50 |
Format-List TimeCreated, Id, Message
```

---

### 5.2 Task Scheduler Spawns (`svchost.exe` Parent Lineage)

**Sysmon PowerShell Search**:
```powershell
Get-WinEvent -FilterHashtable @{
    LogName='Microsoft-Windows-Sysmon/Operational'
    Id=1
} -MaxEvents 50 |
Where-Object { $_.Message -match 'svchost.exe.*Schedule' } |
Format-List TimeCreated, Id, Message
```

**Wazuh DQL Query**:
```text
data.win.system.eventID:"1" AND data.win.eventdata.parentCommandLine:"*Schedule*"
```

**Investigation Purpose**:
Identify child processes (such as `cmd.exe` or `powershell.exe`) spawned by Windows Task Scheduler service (`svchost.exe -k netsvcs -p -s Schedule`).

---

## 6. Network Telemetry Hunting

### 6.1 Sysmon Network Connection Hunting (Event ID 3)

**PowerShell Command**:
```powershell
Get-WinEvent -FilterHashtable @{
    LogName='Microsoft-Windows-Sysmon/Operational'
    Id=3
} -MaxEvents 20 |
Select-Object TimeCreated, Id, Message
```

**Wazuh DQL Query**:
```text
data.win.system.eventID:"3" AND data.win.eventdata.destinationIp:"192.168.56.101"
```

---

### 6.2 Wireshark Packet Analysis Filters

**Display Filter for Port 8080 Test Traffic**:
```text
ip.addr == 192.168.56.101 && tcp.port == 8080
```

**Display Filter for SMB Authentication Traffic**:
```text
ip.addr == 192.168.56.101 && (tcp.port == 445 || tcp.port == 139)
```

**Investigation Purpose**:
Confirm TCP 3-way handshake, inspect HTTP GET requests, and verify payload contents at the packet level.
