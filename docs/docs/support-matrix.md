---
sidebar_position: 4.2
---

# Support Matrix

AppDefender currently only supports Linux based systems running on x86_64 and arm64 architectures, which covers the vast majority of the cloud serverless deployment environments.  Most of the language runtimes are also supported.  If you have needs beyond what are listed below, please contact us and we are happy to discuss.

## AppDefender for Cloud Functions

| Cloud | Runtime | OS | x86_64 | arm64 | Note |
|---|---|---|:---:|:---:|:---:|
| AWS Lambda | nodejs12 | Linux | x | x | Deprecating |
| |nodejs14|Linux|x|x||
| |nodejs16|Linux|x|x||
| |nodejs18|Linux|x|x||
| |python3.8|Linux|x|x||
| |python3.9|Linux|x|x||
| |ruby2.7|Linux|x|x||
| |.NET Core3.1|Linux|x|x|Deprecating|
| |.NET6|Linux|x|x||
| |java8|Linux|x|x| java8.al2 only|
| |java11|Linux|x|x||
| GCF| nodejs10 | Linux | x | | |
| |nodejs12|Linux|x|||
| |nodejs14|Linux|x|||
| |nodejs16|Linux|x|||
| |nodejs18|Linux|x|||
| |python3.7|Linux|x|||
| |python3.8|Linux|x|||
| |python3.9|Linux|x|||
| |python3.10|Linux|x|||
| |ruby2.6|Linux|x|||
| |ruby2.7|Linux|x|||
| |ruby3.0|Linux|x|||
| |java11|Linux|x|||
| |java17|Linux|x|||
| |.NET6|Linux|x|||
| |.NET Core3.1|Linux|x|||
| Azure Functions | nodejs14 | Linux | x | | Azure Functions Runtime 4.x |
| |nodejs16|Linux|x|||
| |nodejs18|Linux|x|||
| |python3.7|Linux|x|||
| |python3.8|Linux|x|||
| |python3.9|Linux|x|||
| |python3.10|Linux|x|||
| |.NET6|Linux|x|||
| |java8|Linux|x|||
| |java11|Linux|x|||
| |java17|Linux|x|||
| Zoho Catalyst |nodejs14|Linux|x|||
| |nodejs16|Linux|x|||
| |java8|Linux|x|||
| DigitalOcean Functions|nodejs14|Linux|x|||
| |nodejs18|Linux|x|||
| |python3.9|Linux|x|||

## AppDefender for Containers

This is in preview.  Contact us for more information.

Supported operating systems: Ubuntu (18, 20, 22), Alpine (3.x), Amazon Linux (1, 2, 2022)

Supported runtimes: nodejs (10, 12, 14, 16, 18), python (3.7, 3.8, 3.9, 3.10), ruby (2.6, 2.7, 3.0), java (8, 11, 17), .NET (Core3.1, 6)

Supported architectures: x86_64, arm64