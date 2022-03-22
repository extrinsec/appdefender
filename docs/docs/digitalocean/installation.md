---
sidebar_position: 1
---

# Installation

## Pre-requisites

1. a license key.  [Get one](../how-to-get-a-license-key) if you don't have one already.
1. information about your DigitalOcean function:
   1. [DigitalOcean Functions runtime](https://docs.digitalocean.com/products/functions/reference/runtimes/), e.g. `Nodejs 18`
   1. AppDefender is supported on DigitalOcean Functions Node.js and Python runtimes.  Reference our [support Matrix](../support-matrix.md) for more details.
1. permission to deploy a new version of your function with AppDefender enabled

## Configure AppDefender

### Install and import library

Import AppDefender as a dependency in your function based on your language, so DigitalOcean Functions runtime can download and install it during function deployment. Make sure to replace the version numbers below with the latest.  For local development, install the AppDefender packages from the public repositories for your runtime directly, e.g. `npm install @extrinsec/appdefender`

#### Node.js

1. update your `package.json` file to include the [AppDefender npm package](https://www.npmjs.com/package/@extrinsec/appdefender)
   ```json title="package.json"
   {
      "main": "index.js",
      "dependencies": {
         ...
         "@extrinsec/appdefender": "latest"
      }
   }
   ```
1. import AppDefender in the main entry point for each function, e.g.
   ```js title="index.js"
   const appdefender = require('@extrinsec/appdefender');
   ```

#### Python

1. update your `requirements.txt` file to include the [AppDefender Python package](https://pypi.org/project/appdefender/)
   ```text title="requirements.txt"
   appdefender
   ```
1. import AppDefender in the main entry point for each function, e.g.
   ```python title="main.py"
   import appdefender
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
