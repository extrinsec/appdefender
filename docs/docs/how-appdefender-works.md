---
sidebar_position: 3
---

# How AppDefender Works

AppDefender monitors certain well defined interactions between your function and the runtime, and uses rule based policies to protect against unexpected behaviors.  All you need to do is to define the rules as an environment variable and then import the library during initialization, using any of the languages we support (Node/Javascript, Python, Ruby, .Net and Java).  There are no other changes needed for the rest of your code, no function wrapping and no monkey-patching.  You get the most protection with the least performance impact.

If you use AWS Lambda, the setup is even simpler: just include our Lambda layer and set the environment variables.  There is no change to your code at all.  You can even add the layer to your existing Lambdas, without needing a new code deployment.

AppDefender generates logs on actions taken, and these can be viewed or collected with any supported services like CloudWatch, Cloud Logging, or Datadog.  AppDefender also offers real time event streaming, so you can view all the actions centrally in our web application.