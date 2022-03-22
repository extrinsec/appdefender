---
sidebar_position: 3
title: Ruby
---

# AppDefender for Ruby

## Prerequisites

1. a license key.  [Get one](../how-to-get-a-license-key) if you don't have one already.
1. install the [AppDefender RubyGem package](https://rubygems.org/gems/appdefender) and include in your project (Gemfile), e.g.
  ```shell
  gem install appdefender
  ```
1. Note: see the cloud provider specific documentations for more specific details

## Configure AppDefender

1. import AppDefender (inside your entire application for the best protection), e.g.
   ```ruby
   require 'appdefender'
   ```

import SetEnvVars from '../_set_env_vars.md'

2. <SetEnvVars name='SetEnvVars'/>

3. Add the environment variable `ES_APP_NAME=<your unique application name>` if running inside a container


## Configure Policy Groups

import ConfigurePolicy from '../_configure_policy.md'

<ConfigurePolicy name='ConfigurePolicy'/>

## Best Practices

1. know your application's access patterns by running AppDefender in observe mode initially.  Then use a custom policy group with the minimum permissions