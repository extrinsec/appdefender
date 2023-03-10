---
sidebar_position: 3
---

# How AppDefender Works

AppDefender monitors certain well defined interactions between your application and its runtime environment, and uses rule based policies to protect against unexpected behaviors.  All you need to do is set two environment variables and import the library during application initialization for the following supported languages: Node/Javascript, Python, Ruby, .Net, and Java.  There are no other changes needed for the rest of your code; no function wrapping and no monkey-patching.  You get the most protection with the least performance impact.

If you use AWS Lambda, then the setup is even simpler: just include our Lambda layer and set three environment variables. There is no change to your code at all; our layer can be added to your existing Lambdas in 5 minutes and without the need to deploy any code changes.

AppDefender generates logs on actions taken, and these can be viewed or collected with any supported services like AWS CloudWatch, GCP Cloud Logging, Azure Monitor, SIEMs, and Datadog.  AppDefender also offers real time event streaming to our centralized data store, so you can search, filter, and sort all of your security events in our web application.
