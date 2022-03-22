---
sidebar_position: 5
title: C#
---

# AppDefender for C#

## Prerequisites

1. a license key.  [Get one](../how-to-get-a-license-key) if you don't have one already.
1. update your project configuration file to include the [AppDefender Nuget package](https://www.nuget.org/packages/AppDefender).
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

## Configure AppDefender

1. import and enable AppDefender in the handler method of your function entry point class, e.g.
   ```csharp title="MyFunction.cs"
   using AppDefenderSDK;

   // enable appdefender in the handler function
   AppDefender.enable();
   ```

import SetEnvVars from '../_set_env_vars.md'

2. <SetEnvVars name='SetEnvVars'/>

3. Add the environment variable `ES_APP_NAME=<your unique application name>` if running inside a container


## Configure Policy Groups

import ConfigurePolicy from '../_configure_policy.md'

<ConfigurePolicy name='ConfigurePolicy'/>

## Best Practices

1. know your application's access patterns by running AppDefender in observe mode initially.  Then use a custom policy group with the minimum permissions