---
sidebar_position: 1
---

# Installation

## Prerequisites

1. a license key.  [Get one](../how-to-get-a-license-key) if you don't have one already.
1. information about your Zoho Catalyst function:
   1. [Catalyst Functions runtime](https://catalyst.zoho.com/help/functions.html), e.g. `Nodejs 16`
   1. AppDefender is supported on Catalyst Functions Node.js and Java runtimes.  Reference our [support Matrix](../support-matrix.md) for more details.
1. permission to deploy a new version of your function with AppDefender enabled

## Configure AppDefender

### Install and import library

Select the language runtime and install the AppDefender package as a dependency in your Catalyst function. Make sure to replace the version numbers below with the latest.

#### Node.js

1. install the [AppDefender npm package](https://www.npmjs.com/package/@extrinsec/appdefender), which updates the `package.json` file.  Include the node_modules directory in your deployment.
   ```json title="package.json"
   {
      "main": "index.js",
      "dependencies": {
         ...
         "@extrinsec/appdefender": "latest"
      }
   }
   ```
1. import AppDefender in your execution main script, e.g.
   ```js title="index.js"
   const appdefender = require('@extrinsec/appdefender');
   ```

#### Java

1. download the [AppDefender Java package](https://search.maven.org/artifact/com.extrinsec/appdefender), and include the jar files in the `lib` directory of your function project.
   ```console
   $ mvn -DgroupId=com.extrinsec -Ddest=./lib/appdefender-0.3.1.jar -DartifactId=appdefender -Dversion=0.3.1 dependency:get
   ```
1. import and enable AppDefender in the execution main method (specified in `catalyst-config.json`), e.g.
   ```java title="MyFunction.java"
   import com.extrinsec.AppDefender;

   // enable appdefender in the handler function
   AppDefender.enable();
   ```

### Set environment variables

import SetEnvVars from '../_set_env_vars.md'

<SetEnvVars name='SetEnvVars'/>

### Invoke function

* Invoke your function and seee AppDefender in action in your logs
## Configure Policy Groups

import ConfigurePolicy from '../_configure_policy.md'

<ConfigurePolicy name='ConfigurePolicy'/>

## View Your Functions and Events

import ViewEvents from '../_view_events.md'

<ViewEvents name='ViewEvents'/>
