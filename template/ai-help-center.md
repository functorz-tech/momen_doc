---
description: >-
  Learn how to use Momen's AI help center template to build your startup's help
  center page.
---

# AI Help Center

### Introduction

The AI Help Center template helps you build a custom support page for your startup. This template not only manages your product resources like FAQs and documentation efficiently but also delivers precise answers to your users by utilizing AI.

### I. Basic Project Logic

【Help Center】: When your user inputs a question related to your product, the AI retrieves information from your business data and generates answers based on it.

<figure><img src="../.gitbook/assets/1 (30).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/2 (26).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

【Resources】: This section manages all of your product resources. With everything in one place, your users won't have to navigate to different locations.

<figure><img src="../.gitbook/assets/3 (18).png" alt="An AI template of a no-code tool"><figcaption></figcaption></figure>

【Contact Us】: Add your team's contact information here to provide additional support to your users.

<figure><img src="../.gitbook/assets/4 (16).png" alt="An AI template of a no-code tool"><figcaption></figcaption></figure>

In the context section, you can choose your AI's data source. This is one of the best features of Momen AI, as it allows you to upload local files, use data from your Momen database, or call third-party APIs to retrieve data for your AI.

<figure><img src="../.gitbook/assets/5 (11).png" alt="The configuration of an AI template in a no-code tool"><figcaption></figcaption></figure>

### II. How to Create Your AI Apps

#### Step 1: AI Configuration

First, enter the AI integration interface from the top bar of the Momen editor.

<figure><img src="../.gitbook/assets/6 (10).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

**Basic Configuration**:  
Change the name and description of your AI. Choose the model based on your needs. Currently, we support GPT 3.5 and GPT 4. GPT 3.5 is suitable for text-based input, while GPT 4 supports image processing and generates more accurate answers. However, GPT 4 will consume more [tokens](https://docs.momen.app/ai/app-token-consumption).

**Input Configurations**:  
Configure single or multiple parameters for the AI interface. Input parameters can be referenced in predefined prompts or used as filtering conditions for your app.

<figure><img src="../.gitbook/assets/7 (6).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

**Predefined Prompts**:  
You can directly input instructions as your prompt source or refer to the input parameters. For more information, please check our guide on [AI Configuration](https://docs.momen.app/ai/ai-configuration), which explains how to write effective prompts.  
In this template, we used direct input + parameters as the sources.

<figure><img src="../.gitbook/assets/8 (4).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

**Contexts**:  
Context serves as the data source for your AI. This is where you can integrate your business data with AI. Currently, we support three ways to integrate your data:  
- Select data tables stored in the Momen database.  
- Upload local files.  
- Call APIs to fetch external data.  

In the Momen AI knowledge base, our data comes from the Momen database, where we store Momen docs.

<figure><img src="../.gitbook/assets/9 (3).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

**Debug and Preview**:  
Before requesting AI, you can debug and test to see if it generates the desired answers. For example, input a question related to Momen to verify if the AI generates accurate answers.

<figure><img src="../.gitbook/assets/10 (2).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

#### Step 2: Action Configuration and AI Request

To make your AI functional in the desired location, you need to bind your data from the backend to your UI and configure the "Request AI" action.  
In this case, we configured the "Request AI" action on the input box.

<figure><img src="../.gitbook/assets/11 (1).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

Additionally, remember to configure the navigation action in the resource section so that your users can be directed to the relevant resource page.

<figure><img src="../.gitbook/assets/12 (1).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

You can also modify the UI to make your AI help center more customized.

#### Step 3: Website Preview

When you finish all the configurations, click "Preview" in the upper-right corner to generate the link. If everything works as expected, you can publish your project to the public.

<figure><img src="../.gitbook/assets/13.png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder that allows users to build fully customizable web apps, marketplaces, social networks, AI apps, enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions, getting your web app products to market faster than ever before.
