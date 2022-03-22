---
sidebar_position: 4
title: Java
---

# AppDefender for Java

## Prerequisites

1. a license key.  [Get one](../how-to-get-a-license-key) if you don't have one already.
1. update your project configuration file for your build system to include the [AppDefender Java package](https://search.maven.org/artifact/com.extrinsec/appdefender). Sample Maven pom.xml file shown below:
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

## Configure AppDefender

1. import and enable AppDefender, e.g.
   ```java
   import com.extrinsec.AppDefender;

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