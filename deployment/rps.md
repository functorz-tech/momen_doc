---
description: >-
  Learn about RPS (Requests per Second) and strategies for managing scenarios
  close to reaching the RPS limit.
---

# RPS

### Introduction

RPS means requests per second. It indicates the capacity of the system to process user demands, with a higher RPS correlating to greater system throughput and increased server resource utilization. To maintain both service stability and a positive user experience, there are usually limits set on the RPS for a software service.



### User Activities Considered as Data Requests

* Conducting any form of data engagement like querying, updating, or eliminating data from a database counts as one request.
* Visiting a web page that incorporates several external data elements counts as a single request. However, if one data fetch depends on the result of another, they are counted as two requests.
* Each interaction with an API is tallied as a single request.
* Activating an action flow is recorded as a single request. It's still counted as one request when the action flow involves several additions, removals, updates, or lookups.
* Initiating a Momen AI request is calculated individually as one request.&#x20;

RPS of an application:  the sum of data engagements initiated by all active users within one second. (Note that data queries currently won't be included in the RPS limit).



### The RPS Limit of Each Project

We implement a peak Requests Per Second (RPS) limit for each project, and the limit varies depending on the plan. Projects that have purchased a single-tenant kit will not have an RPS limit. Below are the peak RPS limits for different plans:

<table><thead><tr><th width="133">Plan</th><th width="110">Free</th><th width="117">Basic</th><th width="93">Pro</th><th>SIngle-Tenant Kit</th></tr></thead><tbody><tr><td>RPS limit</td><td>5</td><td>5</td><td>25</td><td>Unlimited</td></tr></tbody></table>



### What Happens When Reaching RPS Limit

* When reaching a peak limit, users will receive a notification:  "Too many requests".
* If RPS limit is exceeded during a continual requests, the ongoing request will be interrupted.  For instance, if an operation involves 10 sequential data fetches and the limit is hit at the fifth fetch, the operation will be aborted, resulting in a disruption of the current user's online activities.



### How to Prevent Overload

* During application development, design thoughtfully to prevent overload.
  * Implement action flows: set up continuous interaction requests as part of an action flow to sequence actions efficiently.
  * Design features to minimize high RPS activities, such as restricting users to one lottery entry per day to avoid excessive clicking.
* After deploying the application, if RPS limits are exceeded:
  * Visit the project's detail page to review usage peaks.
  * ![](<../../../.gitbook/assets/截屏2024-04-28 15.54.29.png>)
  * Upgrade your project to get more computing resources.
  * Purchase a single-tenant kit with unlimited RPS.



### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
