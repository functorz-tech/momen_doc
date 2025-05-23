---
description: >-
  Learn how to use Momen's AI knowledge base template to build your first AI app
  in this guide.
---

# AI Knowledge Base

## Introduction

Momen's AI feature enables users to build AI apps based on their own business data. The AI knowledge base template is built with Momen AI. This guide will help you understand the basic logic of the AI knowledge base template and how to create your AI apps with this template.

---

## I. Basic Project Logic

**UI**: This is the interface of the AI knowledge base template. When a user asks a question in the input box and hits send, the AI retrieves information from the data source and generates an answer based on that.  
**Note**: The AI knowledge base will only generate answers to questions. It does not support long conversations at the moment.

![UI of an AI app in a no-code tool](../.gitbook/assets/截屏2024-02-26%2012.19.41.png)

**AI Configuration**: This is the section where you can configure your AI by inputting predefined prompts such as the task role, task details, and constraints. This provides clear instructions to your AI and enables it to function according to your preferences.  
In the context section, you can choose your AI's data source. This is one of the best features of Momen AI, as it allows you to upload local files, use data from your Momen database, or call third-party APIs to retrieve data for your AI.

![AI configuration in a no-code tool](../.gitbook/assets/截屏2024-02-26%2013.14.46.png)

---

## II. How to Create Your AI Apps

### Step 1: AI Configuration

First, enter the AI integration interface from the top bar of the Momen editor.

![AI configuration in a no-code tool](../.gitbook/assets/截屏2024-02-26%2013.50.22.png)

**Basic Configuration**:  
- Choose the model based on your needs. Currently, we support GPT 3.5 and GPT 4.  
  - **GPT 3.5**: Suitable for text-based input.  
  - **GPT 4**: Supports image processing and generates more accurate answers but consumes more [tokens](https://docs.momen.app/ai/app-token-consumption).

**Input Configurations**:  
- Configure single or multiple parameters for the AI interface.  
- Input parameters can be referenced in predefined prompts or used as filtering conditions for your app.

![Configure input for your AI app in a no-code tool](../.gitbook/assets/截屏2024-02-26%2014.10.25.png)

**Predefined Prompts**:  
- Directly input instructions as your prompt source or refer to the input parameters.  
- For more information, please check our guide on [AI Configuration](https://docs.momen.app/ai/ai-configuration), which explains how to write effective prompts.  
- In this template, we used a combination of direct input and parameters as the sources.

![Write your prompt for your AI app](../.gitbook/assets/截屏2024-02-26%2014.50.07.png)

**Contexts**:  
- Context serves as the data source for your AI.  
- Momen supports three ways to integrate your data:  
  1. Select data tables stored in the Momen database.  
  2. Upload local files.  
  3. Call APIs to fetch external data.  

In this template, the Momen AI knowledge base uses data stored in the Momen database, where Momen docs are maintained.

![The context of an AI app in a no-code tool](../.gitbook/assets/截屏2024-02-26%2015.04.42.png)

If you are interested in fetching external data via API as your AI data source, please check our step-by-step guides:  
- [Notion](https://docs.momen.app/data/api/integrations/notion)  
- [Airtable](https://docs.momen.app/data/api/integrations/airtable)  
- [Google Sheet](https://docs.momen.app/data/api/integrations/google-sheet)

**Debug and Preview**:  
- Before requesting AI, debug and test on the right panel to ensure it generates the desired answers.  
- For example, input a question related to Momen to verify if the AI provides accurate responses.

---

### Step 2: Action Configuration and AI Request

To make your AI functional in the desired location:  
1. Bind your data from the backend to your UI.  
2. Configure the **"Request AI"** action on your button.  

In this template, the **"Request AI"** action is configured on the **"Send"** button.

![The interaction configuration in a no-code tool](../.gitbook/assets/截屏2024-02-26%2015.32.47.png)

Additionally, you can modify the UI to make your AI knowledge base more customized.

---

### Step 3: Website Preview

After completing all configurations:  
1. Click **"Preview"** in the upper-right corner to generate a preview link.  
2. Verify that everything works as expected.  
3. Once satisfied, publish your project to make it publicly accessible.

{% hint style="info" %}
If you accessed the template through the preview link, all content is read-only. To obtain and edit this template, please upgrade your project.
{% endhint %}

You can embed your AI knowledge base on your current website. To see how to embed it, please refer to [How to Embed an Iframe Component into Your Momen Project](https://docs.momen.app/tutorial/how-to-embed-an-iframe-component-into-your-momen-project).

---

## About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder that allows users to build fully customizable web apps, marketplaces, social networks, AI apps, enterprise SaaS, and much more. With Momen, you can iterate and refine your projects in real-time, ensuring a seamless creation process. Momen also offers powerful API integration capabilities, enabling you to connect your projects to any service you need. Bring your ideas to life and launch remarkable digital solutions faster than ever before.
