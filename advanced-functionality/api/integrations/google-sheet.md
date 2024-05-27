---
description: >-
  This doc will guide you on how to integrate Google Sheet API with your Momen
  project.
---

# Google Sheet

### Introduction

Before starting, please make sure you have read and get yourself familiar with [API Fundamentals](https://docs.momen.app/data/api/api-fundamentals). In this doc, we'll show you how to connect Notion's API in Momen. By doing this, your app can access external data from Google Sheet. \


1. #### Starting a New Project

Go to the [Google Cloud Console](http://console.cloud.google.com/), access the dropdown in the top bar, select "New Project," input necessary details, and move to your project.

<figure><img src="../../../.gitbook/assets/1 (33).png" alt="Create new Google Sheet project"><figcaption></figcaption></figure>

Navigate to "Library."

<figure><img src="../../../.gitbook/assets/2 (28).png" alt="Library in Google Sheet"><figcaption></figcaption></figure>

Locate and activate the Google Sheets API.

<figure><img src="../../../.gitbook/assets/3 (21).png" alt="Enable Google sheet api"><figcaption></figcaption></figure>

2. #### Generating an API Key

Proceed to "Credentials," set up your Credentials, opting for the API key as your authentication method.

<figure><img src="../../../.gitbook/assets/4 (18).png" alt="Generate api keys in google sheet"><figcaption></figcaption></figure>

Apply the Google Sheets API under API restrictions.

<figure><img src="../../../.gitbook/assets/5 (14).png" alt="Apply Google sheet api"><figcaption></figcaption></figure>

3. #### API Testing via Postman

Initiate a Google Sheet tailored for Momen, ensuring to populate it with the desired content. Remember, sharing settings must be public to enable API access.

<figure><img src="../../../.gitbook/assets/6 (13).png" alt="Create a google sheet"><figcaption></figcaption></figure>

Utilize the following API endpoint for data retrieval, with additional details available in the [Google Sheets API](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get) guide:

```Plain
GET https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}
```

Input the necessary parameters into Postman accordingly.

<figure><img src="../../../.gitbook/assets/7 (9).png" alt="Input parameters in postman"><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/8 (7).png" alt="Input parameters in postman"><figcaption></figcaption></figure>

4. #### Momen API Configuration

With the API's functionality confirmed through Postman, the subsequent step involves implementing it within Momen in a manner akin to Postman's setup.

<figure><img src="../../../.gitbook/assets/9 (6).png" alt="Enter the debug mode in Momen"><figcaption></figcaption></figure>

Input the earlier specified URL and parameters.

<figure><img src="../../../.gitbook/assets/10 (5).png" alt="Complete the API integration in Momen"><figcaption></figcaption></figure>

Upon a successful request, Momen will memorize the response. Then hit the "Save Config" to save your API configuration.

5. #### Implementing API

For illustration, imagine integrating data from Google Sheets into the Prompt's Context. This step involves selecting the appropriate API for this purpose.

<figure><img src="../../../.gitbook/assets/11 (4).png" alt="Select API in momen"><figcaption></figcaption></figure>

Specify the needed parameters.

<figure><img src="../../../.gitbook/assets/12 (4).png" alt="Specify the parameters"><figcaption></figcaption></figure>

Choose fields beneficial for the AI to generate responses.

<figure><img src="../../../.gitbook/assets/13 (3).png" alt="Choose the fields in momen"><figcaption></figcaption></figure>

During Preview Input, the desired data will be visible, acting as a segment of the Prompt to enhance the accuracy of AI responses.

\
If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

#### **About Momen**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
