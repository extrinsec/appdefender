---
sidebar_position: 2
---

# Why Use AppDefender

Serverless function and containers have revolutionize cloud deployment with speed, ease of maintenance and cost benefits.  But at the same time, this convenience sometimes carries risks.  The runtimes and the common dependency on many open source libraries can make it hard to know exactly what's happening. Not updating the packages exposes you to newly discovered vulnerabilities, but updating could also pull in fresh hacks. Wouldn't be great to limit your application executions to exactly what you or your developers had implemented, nothing more, nothing less?  _No pinging unknown servers; no leaking secret environment variables or credentials; no joining of botnets; no file access to your source code; no spawning backdoor processes; no wasted time hunting for hacks in log files; much easier time getting SOC 2 certification._  If these scenarios keep you awake at night, then you need **real time application protection**.

## Potential Attack Scenarios AppDefender Prevents

1. Attacker manipulates broadened application inputs (e.g. storage event changes, emails, DB updates, code modifications, etc.) to inject untrusted code to scan local files and send data/secrets to remote locations.
   - _AppDefender_ Protections:
     1. no unauthorized child processes: can't run system commands to inspect/attack application environment
     2. no unauthorized outbound network requests: can't ship data or secrets to external hosts
     3. no local file modifications: can't change application behavior to be malicious

2. An innocent external library upgrade introduces new zero-day attacks
   - _AppDefender_ Protections:
     1. prevents unauthorized child processes
     2. prevents unauthorized outbound network requests
     3. prevents local file modifications

3. Broken authentication allows attacker to access a stale or forgotten server to gain access to internal resources
   - _AppDefender_ Protections:
     1. no unauthorized child processes: can't run system commands to inspect/attack application and internal network
     2. no unauthorized network access to internal resources
     3. no local file modifications: can't change application behavior to be malicious

4. Attacker gains access to the application and tries to steal sensitive data, e.g. application secrets, source code and infrastucture details
   - _AppDefender_ Protections:
     1. no unauthorized outbound network requests: can't export sensitive data even if able to access

5. Attacker takes advantage of an over-privileged application to gain unauthorized access to resources
   - _AppDefender_ Protections:
     1. no unauthorized outbound network requests: can't export sensitive data even with access

6. Insufficient application logging and monitoring give attacker more time and opportunities to exploit weaknesses
   - _AppDefender_ Protections:
     1. no unauthorized child processes: can't run system commands to inspect/attack application and internal network
     2. no unauthorized network access: can't send exploits to unauthorized external hosts
     3. no local file modifications: can't change application behavior to be malicious