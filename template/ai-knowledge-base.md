---
description: >-
  Learn how to use Momen's AI knowledge base template to build your first AI app
  in this doc.
---

# AI Knowledge Base

### Introduction

Momen's AI feature enables users to build AI apps based on their own business data. Our AI knowledge base is built with Momen AI. This doc will help you understand the basic logic of AI knowledge base template as well as how to create your AI apps with this template.

### I. Basic Project Logic

\[UI]: This is the interface of the AI knowledge template. When a user asks a question in the input box and hits send, the AI will retrieve information from the data source and generate an answer based on that.p.s. The AI knowledge base will only generate the answer to a question. It does not support long conversations at the moment.

<figure><img src="../.gitbook/assets/截屏2024-02-26 12.19.41.png" alt="UI of an AI app in a no-code tool"><figcaption></figcaption></figure>

\[AI Configuration]: This is the section where you can configure your AI by inputting predefined prompts such as the task role, task detail, and constraints. This will provide clear instructions to your AI and enable it to function according to your preferences.In the context section, you can choose your AI's data source. This is the best part about Momen AI, because it allows you to upload local files, use data from your Momen database, or call third-party APIs to retrieve data for your AI.

<figure><img src="../.gitbook/assets/截屏2024-02-26 13.14.46.png" alt="AI configuration in a no-code tool"><figcaption></figcaption></figure>

### II. How to Create Your AI Apps

#### Step 1: AI Configuration

First of all, enter the AI integration interface from the top bar of the Momen editor.

<figure><img src="../.gitbook/assets/截屏2024-02-26 13.50.22.png" alt="AI configuration in a no-code tool"><figcaption></figcaption></figure>

**Basic configuration**:&#x20;

Choose the model based on your needs. Currently, we support GPT 3.5 and 4. GPT 3.5 would be suitable if your input is text. GPT 4 supports image processing and generates more accurate answers. However, it'll cost more [tokens](https://docs.momen.app/ai/app-token-consumption).

**Input configurations**:&#x20;

Configure single or multiple parameters to the AI interface. Input parameters will be referenced in the predefined prompts or used as filtering conditions for your app.

<figure><img src="../.gitbook/assets/截屏2024-02-26 14.10.25.png" alt="configure input for your AI app in a no-code tool"><figcaption></figcaption></figure>

**Predefined Prompts:**

You can directly input instructions as your prompt source, or refer to the input parameters. For more information about that, please check our doc [AI Configuration](https://docs.momen.app/ai/ai-configuration) where you can find how to write a good prompt.

In our template, we used direct input+ parameters as the sources.

<figure><img src="../.gitbook/assets/截屏2024-02-26 14.50.07.png" alt="write your prompt for your ai app"><figcaption></figcaption></figure>

**Contexts:**

Context serves as the data source for your AI. This is where you can integrate your business data with AI. Currently, we support three ways to integrate your data. You can select data tables that you stored in Momen database, or upload local files, or call APIs to fetch external data. In Momen AI knowledge base, our data comes from our Momen database, where we store Momen docs in it.

<figure><img src="../.gitbook/assets/截屏2024-02-26 15.04.42.png" alt="the context of an ai app in a no-code tool"><figcaption></figcaption></figure>

If you are interested in fetching external data via API as your AI data source, please check our step-by-step guide about how to configure APIs in Momen: [Notion](https://docs.momen.app/data/api/integrations/notion), [Airtable](https://docs.momen.app/data/api/integrations/airtable), [Google Sheet](https://docs.momen.app/data/api/integrations/google-sheet)

**Debug and preview:**

Before requesting AI, you can debug and test on the right panel to see if it generates the answer in the desired way. In this case, input question relates to Momen to see if AI generates accurate answers.\


#### Step 2: Action configuration and AI request

To make your AI take effect in the expected place, you need to bind your data from the backend to your UI, and make sure you configure the "request AI" action on your button.In this case, we configured "request AI" action on "Send" button.

You can check the detailed action configuration by clicking on send button and hitting interaction.

<figure><img src="../.gitbook/assets/截屏2024-02-26 15.32.47.png" alt="the interaction configuration in a no-code tool"><figcaption></figcaption></figure>

And you can modify the UI to make your AI knowledge base more customized.\


#### Step 3: Website Preview

When you finish all the configurations, click Preview on the up-right corner to generate the link. If everything goes well, you can publish your project to the public.

{% hint style="info" %}
If you accessed the template through the preview link, all content is read-only. To obtain and edit this template, please upgrade your project.
{% endhint %}



You can embed your AI knowledge base on your current website. To see how to embed it, please refer to [How to Embed an Iframe Component into Your Momen Project](https://docs.momen.app/tutorial/how-to-embed-an-iframe-component-into-your-momen-project).

\
If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz.) for assistance.\


### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
