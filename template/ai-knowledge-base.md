---
description: >-
  Learn how to use Momen's AI knowledge base template to build your first AI app
  in this guide.
---

# AI Knowledge Base

### Introduction

Momen's AI feature enables users to build AI apps based on their own business data. Our AI knowledge base is built with Momen AI. This guide will help you understand the basic logic of the AI knowledge base template and how to create your AI apps with this template.

### I. Basic Project Logic

【UI】: This is the interface of the AI knowledge base template. When a user asks a question in the input box and hits send, the AI retrieves information from the data source and generates an answer based on that.  
**Note**: The AI knowledge base will only generate answers to questions. It does not support long conversations at the moment.

<figure><img src="../.gitbook/assets/截屏2024-02-26 12.19.41.png" alt="UI of an AI app in a no-code tool"><figcaption></figcaption></figure>

【AI Configuration】: This is the section where you can configure your AI by inputting predefined prompts such as the task role, task details, and constraints. This provides clear instructions to your AI and enables it to function according to your preferences.  
In the context section, you can choose your AI's data source. This is one of the best features of Momen AI, as it allows you to upload local files, use data from your Momen database, or call third-party APIs to retrieve data for your AI.

<figure><img src="../.gitbook/assets/截屏2024-02-26 13.14.46.png" alt="AI configuration in a no-code tool"><figcaption></figcaption></figure>

### II. How to Create Your AI Apps

#### Step 1: AI Configuration

First, enter the AI integration interface from the top bar of the Momen editor.

<figure><img src="../.gitbook/assets/截屏2024-02-26 13.50.22.png" alt="AI configuration in a no-code tool"><figcaption></figcaption></figure>

**Basic Configuration**:  
Choose the model based on your needs. Currently, we support GPT 3.5 and GPT 4. GPT 3.5 is suitable for text-based input, while GPT 4 supports image processing and generates more accurate answers. However, GPT 4 will consume more [tokens](https://docs.momen.app/ai/app-token-consumption).

**Input Configurations**:  
Configure single or multiple parameters for the AI interface. Input parameters can be referenced in predefined prompts or used as filtering conditions for your app.

<figure><img src="../.gitbook/assets/截屏2024-02-26 14.10.25.png" alt="Configure input for your AI app in a no-code tool"><figcaption></figcaption></figure>

**Predefined Prompts**:  
You can directly input instructions as your prompt source or refer to the input parameters. For more information, please check our guide on [AI Configuration](https://docs.momen.app/ai/ai-configuration), which explains how to write effective prompts.  
In this template, we used direct input + parameters as the sources.

<figure><img src="../.gitbook/assets/截屏2024-02-26 14.50.07.png" alt="Write your prompt for your AI app"><figcaption></figcaption></figure>

**Contexts**:  
Context serves as the data source for your AI. This is where you can integrate your business data with AI. Currently, we support three ways to integrate your data:  
- Select data tables stored in the Momen database.  
- Upload local files.  
- Call APIs to fetch external data.  

In the Momen AI knowledge base, our data comes from the Momen database, where we store Momen docs.

<figure><img src="../.gitbook/assets/截屏2024-02-26 15.04.42.png" alt="The context of an AI app in a no-code tool"><figcaption></figcaption></figure>

If you are interested in fetching external data via API as your AI data source, please check our step-by-step guides:  
- [Notion](https://docs.momen.app/data/api/integrations/notion)  
- [Airtable](https://docs.momen.app/data/api/integrations/airtable)  
- [Google Sheet](https://docs.momen.app/data/api/integrations/google-sheet)

**Debug and Preview**:  
Before requesting AI, you can debug and test on the right panel to see if it generates the desired answers. For example, input a question related to Momen to verify if the AI generates accurate answers.

#### Step 2: Action Configuration and AI Request

To make your AI functional in the desired location, you need to bind your data from the backend to your UI and configure the "Request AI" action on your button.  
In this case, we configured the "Request AI" action on the "Send" button.

You can check the detailed action configuration by clicking on the "Send" button and selecting "Interaction."

<figure><img src="../.gitbook/assets/截屏2024-02-26 15.32.47.png" alt="The interaction configuration in a no-code tool"><figcaption></figcaption></figure>

Additionally, you can modify the UI to make your AI knowledge base more customized.

#### Step 3: Website Preview

When you finish all the configurations, click "Preview" in the upper-right corner to generate the link. If everything works as expected, you can publish your project to the public.

{% hint style="info" %}
If you accessed the template through the preview link, all content is read-only. To obtain and edit this template, please upgrade your project.
{% endhint %}

You can embed your AI knowledge base on your current website. To see how to embed it, please refer to [How to Embed an Iframe Component into Your Momen Project](https://docs.momen.app/tutorial/how-to-embed-an-iframe-component-into-your-momen-project).

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder that allows users to build fully customizable web apps, marketplaces, social networks, AI apps, enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions, getting your web app products to market faster than ever before.
