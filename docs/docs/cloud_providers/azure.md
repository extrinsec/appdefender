---
sidebar_position: 3
title: Azure Functions
---

# AppDefender for Azure Functions

## Prerequisites

1. a license key.  [Get one](../how-to-get-a-license-key) if you don't have one already.
1. information about your Azure function:
   1. [Azure Functions runtime](https://learn.microsoft.com/en-us/azure/azure-functions/functions-versions), e.g. `C# .NET 6.0`
   1. AppDefender is supported on runtime version 4.x for Linux only in languages C#, Javascript, Java and Python. Reference our [support Matrix](../support-matrix.md) for more details.
1. permission to deploy a new version of your function with AppDefender enabled

## Configure AppDefender

### Install and import library

How you include the AppDefender packages depends on the development and deployment environments you use.  Typically you would install the AppDefender dependency locally first, but remote or CI/CD options are also supported.  Sample installation steps are shown below. Make sure to replace the version numbers below with the latest.

#### Node.js

1. install the [AppDefender npm package](https://www.npmjs.com/package/@extrinsec/appdefender), which updates the `package.json` file.  See [Azure documentation](https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-node#dependency-management) for more details.
   ```json title="package.json"
   {
      "main": "index.js",
      "dependencies": {
         ...
         "@extrinsec/appdefender": "latest"
      }
   }
   ```
1. import AppDefender in your function entry point script/scriptFile, e.g.
   ```js title="index.js"
   const appdefender = require('@extrinsec/appdefender');
   ```

#### Python

1. install the [AppDefender Python package](https://pypi.org/project/appdefender/), which updates the `requirements.txt` file.  See [Azure documentation](https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-python?tabs=asgi%2Capplication-level&pivots=python-mode-configuration#package-management) for more details.
   ```text title="requirements.txt"
   appdefender
   ```
1. import AppDefender in your function entry point script/scriptFile, e.g.
   ```python title="main.py"
   import appdefender
   ```

#### Java

1. update your project configuration file for your build system to include the [AppDefender Java package](https://search.maven.org/artifact/com.extrinsec/appdefender).  See [Azure documentation](https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-java?tabs=bash%2Cconsumption#third-party-libraries) for more details.  Sample Maven pom.xml file shown below:
   ```xml title="pom.xml"
      <dependencies>
         <dependency>
            <groupId>com.extrinsec</groupId>
            <artifactId>appdefender</artifactId>
            <version>0.4.1</version>
         </dependency>
      ...
      <dependencies>
   ```
1. import and enable AppDefender in your function @FunctionName's entryPoint method, e.g.
   ```java title="MyFunction.java"
   import com.extrinsec.AppDefender;

   // enable appdefender in the entryPoint method
   AppDefender.enable();
   ```

#### C#

1. update your project configuration file to include the [AppDefender Nuget package](https://www.nuget.org/packages/AppDefender).  See [Azure documentation](https://learn.microsoft.com/en-us/azure/azure-functions/functions-dotnet-class-library) for more details.
   ```xml title="MyProject.csproj"
   <Project Sdk="Microsoft.NET.Sdk">
      ...
      <ItemGroup>
         <PackageReference Include="AppDefender" Version="0.4.1">
            <IncludeAssets>all</IncludeAssets>
         </PackageReference>
      </ItemGroup>
   </Project>
   ```
1. import and enable AppDefender in your function entry point (decorated with `FunctionName` attribute), e.g.
   ```csharp title="MyFunction.cs"
   using AppDefenderSDK;

   // enable appdefender in the handler function
   AppDefender.enable();
   ```


### Set environment variables

import SetEnvVars from '../_set_env_vars.md'

1. <SetEnvVars name='SetEnvVars'/>

## Configure Policy Groups

import ConfigurePolicy from '../_configure_policy.md'

<ConfigurePolicy name='ConfigurePolicy'/>

## View Your Functions and Events

import ViewEvents from '../_view_events.md'

<ViewEvents name='ViewEvents'/>
