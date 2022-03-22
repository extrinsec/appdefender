---
sidebar_position: 4.2
---

# Support Matrix

AppDefender currently only supports Linux based systems running on x86_64 and arm64 architectures, which covers the vast majority of the cloud serverless deployment environments.  Most of the language runtimes are also supported.  If you have needs beyond what are listed below, then please [contact us](<https://www.extrinsec.com/contact>) and we'll be happy to discuss.

## AppDefender for Cloud Functions

| Cloud | Runtime | OS | x86_64 | arm64 | Note |
|---|---|---|:---:|:---:|:---:|
| AWS Lambda | nodejs12 | Linux | ✅ | ✅ | Deprecating |
| |nodejs14|Linux|✅|✅||
| |nodejs16|Linux|✅|✅||
| |nodejs18|Linux|✅|✅||
| |python3.8|Linux|✅|✅||
| |python3.9|Linux|✅|✅||
| |ruby2.7|Linux|✅|✅||
| |.NET Core3.1|Linux|✅|✅|Deprecating|
| |.NET6|Linux|✅|✅||
| |java8|Linux|✅|✅| java8.al2 only|
| |java11|Linux|✅|✅||
| GCF| nodejs10 | Linux | ✅ | | |
| |nodejs12|Linux|✅|||
| |nodejs14|Linux|✅|||
| |nodejs16|Linux|✅|||
| |nodejs18|Linux|✅|||
| |python3.7|Linux|✅|||
| |python3.8|Linux|✅|||
| |python3.9|Linux|✅|||
| |python3.10|Linux|✅|||
| |ruby2.6|Linux|✅|||
| |ruby2.7|Linux|✅|||
| |ruby3.0|Linux|✅|||
| |java11|Linux|✅|||
| |java17|Linux|✅|||
| |.NET6|Linux|✅|||
| |.NET Core3.1|Linux|✅|||
| Azure Functions | nodejs14 | Linux | ✅ | | Azure Functions Runtime 4.x |
| |nodejs16|Linux|✅|||
| |nodejs18|Linux|✅|||
| |python3.7|Linux|✅|||
| |python3.8|Linux|✅|||
| |python3.9|Linux|✅|||
| |python3.10|Linux|✅|||
| |.NET6|Linux|✅|||
| |java8|Linux|✅|||
| |java11|Linux|✅|||
| |java17|Linux|✅|||
| Zoho Catalyst |nodejs14|Linux|✅|||
| |nodejs16|Linux|✅|||
| |java8|Linux|✅|||
| DigitalOcean Functions|nodejs14|Linux|✅|||
| |nodejs18|Linux|✅|||
| |python3.9|Linux|✅|||

## AppDefender for Containers

Supported operating systems: Ubuntu (18, 20, 22), Alpine (3.x), Amazon Linux (1, 2, 2022)

Supported runtimes: nodejs (10, 12, 14, 16, 18), python (3.7, 3.8, 3.9, 3.10), ruby (2.6, 2.7, 3.0), java (8, 11, 17), .NET (Core3.1, 6)

Supported architectures: x86_64, arm64