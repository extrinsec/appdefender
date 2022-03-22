---
sidebar_position: 4.5
---

# License Key

A valid license key is required to enable AppDefender. There are two types of license keys we provide, depending on whether you have registered an account with us.  If you have an account, then you have a permanent non-expiring license key, regardless of the billing plan you are on.  If you haven't registered, but have instead requested a temporary license key, then you have a key with an expiring date.  We suggest you get permanent key if you find our service valuable.

## Temporary License Key

1. all your need to get a temporary license key is a valid email address
1. visit [Request](https://www.extrinsec.com/try) and submit the form
1. a temporary license key will be emailed to you
1. add the value of this key as an environment variable (`ES_LICENSE_KEY`) to your functions/applications
1. limitations of the temporary license key:
   1. you may use it for up to three functions/applications
   1. the key expires after 30 days, starting the date of issue
   1. you can only use this key with publicly available policy groups, e.g. `observeAll.ability`, with no ability to customize
   1. you cannot view AppDefender events in our dashboard
   1. temporary license keys are meant for you to test drive AppDefender with the least amount of commitment

## Permanent License Key

1. a permanent license key is automatically generated when you register your free account
1. view, or regenerate your license key under the __License Key__ section of the dashboard
   ![License Key](images/license-key-page.png "License Key")
1. add the value of this key as an environment variable (`ES_LICENSE_KEY`) to your functions/applications
1. a permanent license key allows you to customize how to protect your functions/applications, e.g. different configurations (policy groups) for different applications, or prevent certain traffic unique to your situations
1. a permanent license key does not expire, but is still subject to the limitations of your current billing plan


#### Notes

1. AppDefender validates and obtains your plan features and limitations during initial startup.  An invalid or expired license key would cause AppDefender to be disabled and your application to lose protection
1. only admin users can view and regenerate a license Key.
1. key regeneration would invalidate your old license key, and disable AppDefender on any application with that old key.  Make sure to configure the new key asap
1. there is no need to regenerate a license key if you upgrade/downgrade your billing plan