---
description: >-
  This doc will guide you on how to integrate Google Analytics with your Momen
  project.
---

# Google Analytics

Introduction

Google Analytics is the largest web data analysis tool overseas, capable of helping website owners track visitor action, understand website traffic sources, analyze the effectiveness of marketing campaigns, and more. In this doc, we will demonstrate how to integrate Google Analytics into Momen. This will enable you to track your app's performance.\
There are two approaches that you can integrate GA into your website. We'll focus on tracking code in this doc for its ease of use.\


### Tracking Code

Tracking code is a relatively easy way. It entails adding Google Analytics tracking code to websites or apps for standardized data collection.Via tracking code, you can

#### Basic Integration in Your Google Account

First of all, we need to some basic setting in your Google account.

* Creating an account in [https://analytics.google.com](https://analytics.google.com/). Click create on Admin page.

<figure><img src="../../../.gitbook/assets/截屏2024-03-11 15.24.28.png" alt="Set up your google analytics account"><figcaption></figcaption></figure>

* Configuring data sharing settings to select the data sources to be shared.
* Create a property on the Admin page and set up a data stream by entering the website URL.

<figure><img src="../../../.gitbook/assets/截屏2024-03-11 15.25.53.png" alt="add the data stream"><figcaption></figcaption></figure>

#### Set up Data Collection for Your Momen Projects

* Enter the property column and click data stream for your website.
* Under Google tag, click View tag instructions.

<figure><img src="../../../.gitbook/assets/截屏2024-03-11 15.39.37.png" alt="find google tag in google analytics"><figcaption></figcaption></figure>

* On the Installation instructions page, select Install manually
* On the screen, you’ll see the JavaScript snippet for your account's Google tag. Your Google tag is the entire section of code that appears, beginning with:&#x20;
* `<!-- Google tag (gtag.js) -->` and ending with `</script>`
* Paste the Google tag in your Momen project to complete the setup. Enter the setting in your project and paste it in the script injection setting. Now GA will start to track your webite.

<figure><img src="../../../.gitbook/assets/截屏2024-03-11 15.52.03.png" alt="configure Google analytics script in a no code tool"><figcaption></figcaption></figure>

### API

The API integration offers flexibility by enabling customized data collection and processing to meet specific needs. It also allows for automated data transmission and processing, saving time and effort. This makes it suitable for scenarios requiring customized data collection and processing, as well as situations requiring automated data transmission and processing.To learn more about integrating GA API, you can refer to [API Fundamentals](https://docs.momen.app/data/api/api-fundamentals) and Google Analytics API docs.

Universal Analytics:

https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference&#x20;

Google Analytics 4:&#x20;

https://developers.google.com/analytics/devguides/config/admin/v1/rest\
\
In summary, API integration is suitable for complex scenarios requiring customization and automation, while tracking code integration is ideal for quickly and simply starting to collect standard data. You can choose the appropriate integration method based on specific requirements.

\


#### **About Momen**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
