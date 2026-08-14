# Case 06 — Full Attack Chain Investigation & Master Timeline

## Case Metadata
- **Case ID**: CASE-006
- **Status**: Closed — Investigation Completed
- **Date**: 2026-08-13
- **Scope**: Multi-Case Endpoint Correlation & Master Timeline Reconstruction
- **Primary Host**: `WIN11-CLIENT` (`192.168.56.20`)
- **Attacker / Test Host**: Kali Linux (`192.168.56.101`)

---

## Master Incident Timeline

| Timestamp (UTC) | Host | User Context | Observed Telemetry / Event ID | Telemetry Source | Investigation Phase |
|---|---|---|---|---|---|
| **2026-08-13 08:09:18** | `WIN11-CLIENT` | `soc-test` | 5x Failed NTLM network logons (Event ID 4625) from `192.168.56.101` | Windows Security / Wazuh | Authentication Triage |
| **2026-08-13 08:10:35** | `WIN11-CLIENT` | `soc-test` | Successful NTLM network logon (Event ID 4624) from `192.168.56.101` | Windows Security / Wazuh | Initial Access / Auth |
| **2026-08-13 22:26:03** | `WIN11-CLIENT` | `SOC-WIN11` | `"cmdkey.exe" /list` PID 532 launched by `powershell.exe` PID 4060 | Sysmon Event ID 1 | Credential Access |
| **2026-08-13 22:50:00** | `WIN11-CLIENT` | `SOC-WIN11` | Creation of Scheduled Task `SOC-CASE-05-Persistence` (at logon) | Sysmon / Task Scheduler | Persistence Creation |
| **2026-08-13 22:59:01** | `WIN11-CLIENT` | `SOC-WIN11` | `cmd.exe` launched by `svchost.exe` (Task Scheduler service) | Sysmon / Wazuh Rule 92052 | Persistence Execution |
| **Controlled Test Time** | `WIN11-CLIENT` | `SOC-WIN11` | Outbound TCP connection (`192.168.56.20` -> `192.168.56.101:8080`) | Sysmon ID 3 / Wireshark | Network Investigation |

---

## Multi-Stage Telemetry Correlation Diagram

```text
                               CASE 06: FULL HOST CORRELATION
                                             │
                       ┌─────────────────────┴─────────────────────┐
                       ▼                                           ▼
             Authentication Phase                        Endpoint Execution Phase
          (Kali 192.168.56.101)                            (WIN11-CLIENT Host)
                       │                                           │
           ┌───────────┴───────────┐                   ┌───────────┴───────────┐
           ▼                       ▼                   ▼                       ▼
      Event 4625              Event 4624          cmdkey /list           Scheduled Task
    (5x Failed)              (Successful)         (PowerShell)          (svchost.exe parent)
           │                       │                   │                       │
           └───────────┬───────────┘                   └───────────┬───────────┘
                       │                                           │
                       └─────────────────────┬─────────────────────┘
                                             │
                                             ▼
                                  Network Activity (TCP :8080)
                                             │
                                             ▼
                                  Wireshark Packet Analysis
                                             │
                                             ▼
                                 Analyst Synthesis & Verdict
```

---

## Analyst Correlation Analysis

Throughout this project, multiple security-relevant events were captured on `WIN11-CLIENT`:

1. **Authentication Layer**: A network logon brute-force scenario was recorded where 5 failed logons (Event 4625) for account `soc-test` were followed by a successful logon (Event 4624) from Kali Linux (`192.168.56.101`).
2. **Credential Access Layer**: Hours later, Sysmon captured `cmdkey.exe /list` being executed via PowerShell under the `WIN11-CLIENT\SOC-WIN11` account context.
3. **Persistence Layer**: Scheduled task `SOC-CASE-05-Persistence` was registered and executed by `svchost.exe -s Schedule`, triggering Wazuh Rule 92052.
4. **Network Layer**: Outbound TCP traffic over port 8080 was transmitted to `192.168.56.101` and corroborated at the packet level in Wireshark.

### Critical Analyst Assessment: Correlation vs. Attribution
While all events took place on host `WIN11-CLIENT` and involved techniques commonly combined during multi-stage cyber attacks, **strict analyst methodology dictates that host-level co-location does not equal single-attacker attribution**:
- The authentication events occurred under user account `soc-test` at ~08:10 UTC.
- The credential access and persistence events occurred under user account `SOC-WIN11` at ~22:26-22:59 UTC.
- The events were generated as distinct, controlled SOC laboratory training modules.

Therefore, the evidence proves **successful multi-stage telemetry capture and host correlation**, but does *not* support claiming a single external breach caused all observed events.

---

## Master MITRE ATT&CK Framework Summary

```text
┌────────────────────┬────────────────────┬────────────────────┬────────────────────┐
│ Initial Access /   │ Execution          │ Discovery /        │ Persistence        │
│ Credential Access  │                    │ Credential Access  │                    │
├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ T1110.001          │ T1059.001          │ T1555.004          │ T1053.005          │
│ Password Guessing  │ PowerShell         │ Win Cred Manager   │ Scheduled Task     │
│ (Case 01)          │ (Case 02, Case 04) │ (Case 04)          │ (Case 05)          │
└────────────────────┴────────────────────┴────────────────────┴────────────────────┘
```

---

## Verdict & Final Classification

**Classification: Controlled Multi-Stage SOC Laboratory Simulation**

The laboratory project successfully demonstrated complete SOC visibility, evidence collection, process lineage tracing, packet capture, and SIEM correlation across 6 individual investigation cases. No unauthorized real-world compromise occurred.

---

## Overall Response & SOC Recommendations

1. **Implement Unified Correlation Rules**: Create SIEM rules that correlate authentication anomalies (Logon Type 3) with subsequent process execution occurring within a short time window under the same user SID.
2. **Harden Windows Endpoints**:
   - Restrict execution policy overrides via Group Policy (GPO).
   - Audit Windows Task Scheduler for newly registered logon tasks.
   - Restrict `cmdkey.exe` execution to privileged administrative groups.
3. **Continuous Monitoring**: Maintain full Sysmon Event Channel integration with Wazuh SIEM to guarantee process GUID tracking across execution trees.
