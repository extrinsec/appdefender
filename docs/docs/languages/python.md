---
sidebar_position: 2
title: Python
---

# AppDefender for Python

## Prerequisites

1. a license key.  [Get one](../how-to-get-a-license-key) if you don't have one already.
1. install the [AppDefender Python package](https://pypi.org/project/appdefender/) and include in your project (requirements.txt), e.g.
  ```shell
  python3 -m pip install appdefender
  ```
1. Note: see the cloud provider specific documentations for more specific details

## Configure AppDefender

1. import AppDefender (inside your entire application for the best protection), e.g.
   ```python
   import appdefender
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