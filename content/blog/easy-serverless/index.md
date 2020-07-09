---
title: Serverless bang for your buck
date: "2020-05-16T23:46:37.121Z"
description: What are the benefits of going serverless? Can you try it?
---

## 1. Auto Scales for you 📈

Serverless functions will auto scale for you. You no longer need to think about how many instances of your application you with need to run or how to handle load balancing.

If you get a surge of inbound traffic, the functions will spin up more function instances automatically to handle the increased load.

![](https://user-images.githubusercontent.com/532272/43603396-afaae7be-9647-11e8-9fb8-725f1023b953.png)

## 2. Pay per execution pricing model 💸

Running code on traditional servers in heroku, digital ocean, AWS, etc all come with an hourly/monthly cost even if the server is sitting around idle with no incoming requests.

In the serverless model, you only pay for the exact amount of time your server side code runs by the millisecond.

This opens up a wide range of use cases and opportunities that have been traditionally burdensome to handle using “normal” servers.

Imagine wanting to setup a cron job to scrape stack overflow once a day for support questions about your open source project. It’s hard to justify paying 7 bucks a month for a server for something like this but in the serverless pay-per-execution landscape this would likely land under the free tier or a couple of cents a month.

## 3. Leverage third party services 🤝

Serverless isn’t just about Functions and FAAS providers (Functions as a service). The notion of something being “serverless” extends to other third party software providers.

For example, it wouldn’t make very much sense for your business to invest in building telecom infrastructure to send text messages to users. Instead, you’d leverage a pay per use SAAS like twilio to handle this for you.

Similarly, rolling your own authentication service with password reset/reminders/2 factor auth etc, is no walk in the park. So leveraging providers like Auth0, AWS cognito, Okta, or Netlify Identity would let you get back to the actual business logic of your application.

## 4. Focus on your business logic 😁

Serverless at its core is an added abstraction layer over things that used to be on the developer (or devOps) teams plate.

Now many of those concerns are shifted over to the third party providers you are using to run functions. Scaling your server side code, load balancing traffic, patching the underlying servers for security vulnerabilities (the list goes on) are now all handled by your FAAS of choice.

This leaves you, the developer, more time to:

focus on your apps core business logic
Spend more time on UX
Adding Easter eggs
dare I say, sipping mai tais on the beach?
The main point being there is less operation stuff to think and/or worry about.

Does serverless mean noOps? Nope. There are still things you will want to keep an eye on and monitor. We will dive into this in a later post.

## 5. Event driven (push based) workflows 🚀

Think push based applications instead of polling.

Serverless tech pushes us into a world where we try to streamline everything we are doing, where we want our program to be as efficient as possible. We are after all being charged by the millisecond of compute, so let’s save some money and code while we are at it.

Things like polling a database for changes or scanning a bucket for new files is a thing of the past.

Infrastructure providers are now exposing events from databases, buckets, webhooks (etc) as a mechanism for triggering your business logic.

[Stolen from](https://user-images.githubusercontent.com/532272/43603396-afaae7be-9647-11e8-9fb8-725f1023b953.png).
