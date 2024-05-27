---
description: >-
  This article will guide you on how to integrate Notion API with your Momen
  project.
---

# Notion

### Introduction

Before starting, please make sure you have read and get yourself familiar with [API Fundamentals](https://docs.momen.app/data/api/api-fundamentals). In this doc, we'll show you how to connect Notion's API in Momen. By doing this, your app can access external data from Notion.\


### Steps

1. #### Creating an Integration

Creating an integration is a fundamental step for accessing Notion's data. This integration uses a token for all interactions with Notion, ensuring secure authentication.

<div>

<figure><img src="../../../.gitbook/assets/1 (35).png" alt="Create integrations in Notion"><figcaption></figcaption></figure>

 

<figure><img src="../../../.gitbook/assets/2 (30).png" alt="Create integrations in Notion"><figcaption></figcaption></figure>

</div>

Start by clicking "create new integration," complete the required details, and select your workspace. You'll then receive a token, which you must keep safe.

<figure><img src="../../../.gitbook/assets/3 (23).png" alt=""><figcaption></figcaption></figure>

Next, define the API's access permissions on the Capabilities page.

<figure><img src="../../../.gitbook/assets/4 (20).png" alt="Define API permission in Notion"><figcaption></figcaption></figure>

2. #### Choosing the Right API

Notion primarily organizes content into blocks, each with its type.

<figure><img src="../../../.gitbook/assets/5 (16).png" alt="Block in Notion"><figcaption></figcaption></figure>

For this scenario, we're focused on extracting all textual content from the Momen 101 page. Thus, we'll use the "[get block text](https://developers.notion.com/docs/working-with-page-content#reading-blocks-from-a-page)" API to fetch text from all the blocks.

#### 3.  API Testing with Postman

Set up your test in Postman with the URL: https://API.notion.com/v1/blocks/{page\_id}/children &#x20;

The configuration should be the same as in the image

A 200 status code indicates a successful API call.

<figure><img src="../../../.gitbook/assets/6 (15).png" alt="Test API in postman"><figcaption></figcaption></figure>

4. #### API Testing with Momen

Having confirmed the API's functionality in Postman, the next step is to implement it in Momen with similar settings.

Create an API entry and switch to Debug mode.

<figure><img src="../../../.gitbook/assets/7 (11).png" alt="Test api in momen"><figcaption></figcaption></figure>

Input the previously used URL and Header.

<figure><img src="../../../.gitbook/assets/8 (9).png" alt="Configrue API in momen"><figcaption></figcaption></figure>

Hit Send. Momen will memorize the response structure for future use, allowing you to save the configuration directly.

<figure><img src="../../../.gitbook/assets/9 (8).png" alt="Save the configuration in Momen"><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/10 (7).png" alt="API configuration in Momen"><figcaption></figcaption></figure>

Then, adjust any necessary path parameters. If a segment of the URL serves as a parameter, access the API's Edit mode to specify this parameter and assign it a relevant name before exiting Edit mode.

<figure><img src="../../../.gitbook/assets/11 (6).png" alt="Parameters setting in momen"><figcaption></figcaption></figure>

5. #### Implementing the API

Finally, you're ready to deploy the API wherever needed, enhancing your application with data fetched from Notion.

<figure><img src="../../../.gitbook/assets/12 (6).png" alt="Implementing API in Momen"><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/13 (5).png" alt="Implementing API in Momen"><figcaption></figcaption></figure>

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

#### **About Momen**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
