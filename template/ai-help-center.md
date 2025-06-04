---
description: >-
  Learn how to use Momen's AI help center template to build your startup's help
  center page.
---

# AI Help Center

## Introduction

The AI Help Center template helps you build a custom support page for your startup. This template efficiently manages your product resources like FAQs and documentation while delivering precise answers to your users by utilizing AI.

---

## I. Basic Project Logic

**Help Center**: When users input a question related to your product, the AI retrieves information from your business data and generates answers based on it.

![Help Center interface](../.gitbook/assets/1%20(30).png)

![AI response example](../.gitbook/assets/2%20(26).png)

**Resources**: This section organizes all your product resources in one place, ensuring users can easily find the information they need without navigating to multiple locations.

![Resources section](../.gitbook/assets/3%20(18).png)

**Contact Us**: Add your team's contact information here to provide additional support to your users.

![Contact Us section](../.gitbook/assets/4%20(16).png)

In the **Context** section, you can configure your AI's data source. Momen AI allows you to upload local files, use data from your Momen database, or call third-party APIs to retrieve data for your AI.

![Context configuration](../.gitbook/assets/5%20(11).png)

---

## II. How to Create Your AI Apps

### Step 1: AI Configuration

First, access the AI integration interface from the top bar of the Momen editor.

![AI integration interface](../.gitbook/assets/6%20(10).png)

**Basic Configuration**:  
- Change the name and description of your AI.  
- Choose the model based on your needs. Currently, Momen supports GPT 3.5 and GPT 4.  
  - **GPT 3.5**: Suitable for text-based input.  
  - **GPT 4**: Supports image processing and generates more accurate answers but consumes more [tokens](https://docs.momen.app/ai/app-token-consumption).

**Input Configurations**:  
- Configure single or multiple parameters for the AI interface.  
- Input parameters can be referenced in predefined prompts or used as filtering conditions for your app.

![Input configuration](../.gitbook/assets/7%20(6).png)

**Predefined Prompts**:  
- Directly input instructions as your prompt source or reference input parameters.  
- For more details, refer to our guide on [AI Configuration](https://docs.momen.app/ai/ai-configuration), which explains how to write effective prompts.  
- In this template, we used a combination of direct input and parameters as the sources.

![Predefined prompts](../.gitbook/assets/8%20(4).png)

**Contexts**:  
- Context serves as the data source for your AI.  
- Momen supports three ways to integrate your data:  
  1. Select data tables stored in the Momen database.  
  2. Upload local files.  
  3. Call APIs to fetch external data.  

In this template, the Momen AI knowledge base uses data stored in the Momen database, where Momen docs are maintained.

![Context data source](../.gitbook/assets/9%20(3).png)

**Debug and Preview**:  
- Before requesting AI, debug and test to ensure it generates the desired answers.  
- For example, input a question related to Momen to verify if the AI provides accurate responses.

![Debug and preview](../.gitbook/assets/10%20(2).png)

---

### Step 2: Action Configuration and AI Request

To make your AI functional in the desired location:  
1. Bind your data from the backend to your UI.  
2. Configure the **"Request AI"** action.  

In this template, the **"Request AI"** action is configured on the input box.

![Request AI action](../.gitbook/assets/11%20(1).png)

Additionally, configure the navigation action in the **Resources** section to direct users to the relevant resource page.

![Navigation action](../.gitbook/assets/12%20(1).png)

You can also customize the UI to make your AI help center more tailored to your brand.

---

### Step 3: Website Preview

After completing all configurations:  
1. Click **"Preview"** in the upper-right corner to generate a preview link.  
2. Verify that everything works as expected.  
3. Once satisfied, publish your project to make it publicly accessible.

![Website preview QR code](../.gitbook/assets/13.png)

---

## About Momen

[Momen](https://momen.app/?channel=docs) is a no-code web app builder that lets you create fully customizable web apps, marketplaces, social networks, AI tools, enterprise SaaS platforms, and more. Iterate and refine your projects in real time for a smooth, streamlined creation process. Momen also offers powerful API integration, making it easy to connect your app to any service. Bring your ideas to life and launch products faster than ever with Momen.
