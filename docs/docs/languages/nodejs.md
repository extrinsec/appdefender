---
sidebar_position: 1
title: Node JS
---

# AppDefender for Node JS

## Prerequisites

1. a license key.  [Get one](../how-to-get-a-license-key) if you don't have one already.
1. install the [AppDefender npm package](https://www.npmjs.com/package/@extrinsec/appdefender) and include in your project (package.json), e.g.
  ```shell
  npm install @extrinsec/appdefender
  ```
  or
  ```shell
  yarn add @extrinsec/appdefender
  ```
1. Note: see the cloud provider specific documentations for more specific details

## Configure AppDefender

1. import AppDefender (inside your entire application for the best protection), e.g.
   ```js
   const appdefender = require('@extrinsec/appdefender');
   ```

import SetEnvVars from '../_set_env_vars.md'

2. <SetEnvVars name='SetEnvVars'/>

3. Add the environment variable `ES_APP_NAME=<your unique application name>` if running inside a container


## Configure Policy Groups

import ConfigurePolicy from '../_configure_policy.md'

<ConfigurePolicy name='ConfigurePolicy'/>

## Best Practices

1. know your application's access patterns by running AppDefender in observe mode initially.  Then use a custom policy group with the minimum permissions
2. if using SSR frameworks, make sure the environment variables are available for the backend runtime