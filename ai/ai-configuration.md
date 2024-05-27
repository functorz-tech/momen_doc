---
description: >-
  Elevate your customer service, supercharge marketing content creation, and
  streamline daily tasks with Momen AI.
---

# AI Configuration

Basic and above versions are required to use AI-related features. Please ensure that you have upgraded to the corresponding version and have sufficient [App Tokens](app-token-consumption.md) before use.

### Introduction

Optimize your business efficiency with Momen's AI capabilities. Learn about custom AI interfaces, knowledge base integration, and output configurations. Explore the potential of Momen AI in various scenarios in this tutorial.\


### Function Description

Based on the AI large model, customize the UI interface of the AI application and configure your exclusive AI business logic.

With Momen AI, you can customize task roles, messages, and constraints, as well as combine Momen database data or uploaded files as task context. You can also customize the output.

#### V 1.0 Core Features

* Customize AI input content, i.e., role, messages, and constraints/prompts, as pre-set content to drive AI.
* Select data from the Momen database as context/input result reference for the AI application.
* Upload content from your knowledge base as context/output result reference for the AI application.
* Customize AI output format to control the form of the results, enabling direct display or control of the application's front-end page or database operations.
* AI debugging.

{% hint style="info" %}
Tips:&#x20;

Momen AI - V 1.0 version currently only supports one-time task interaction. Future AI features to be launched include image processing capabilities, multi-turn conversations, AI calling actionflow and APIs, streaming output, score threshold, etc.
{% endhint %}

### Use Cases

AI applications have a wide range of use cases. Here are some common scenarios:

* Intelligent Customer Service (AI Q\&A):
  * Insurance, law firms, tools, e-commerce AI Q\&A assistants/intelligent customer service.
  * Provide AI with specialized knowledge within an industry, such as uploading Momen's docs for AI to answer questions related to Momen's operations.
* Marketing (AI Content Creation):
  * Sales/consultation script generation based on user information and sales/consultation materials.
  * Copywriting for platforms like Ins, X, and Tiktok and scriptwriting for videos, movies, etc.
* Efficiency Improvement (AI Collaboration):
  * Generation of work daily/weekly reports.
  * Extraction of key information.
  * Document translation.
  * Code generation.
  * Text classification.

### Function Entry

Click on the Momen AI button in the editor's top left corner to enter the AI application interface. Click on Start Creation to add a new AI application interface.

<figure><img src="../.gitbook/assets/1 (42).png" alt="Entry of AI function in a no-code tool"><figcaption></figcaption></figure>

### Configuration Instructions

<figure><img src="../.gitbook/assets/2 (36).png" alt=""><figcaption></figcaption></figure>

#### General Configuration

* AI Interface Name: Define the name of the AI application interface based on business requirements for quick recognition during calls.
* AI Interface Description: Describe the functionality of the interface for collaborators to quickly understand its purpose.
* Basic Configuration: Choose the version of the AI model. The choice of a large model may affect the results. It is recommended to use the advanced version for more accurate results, but this will consume more App Tokens and time.

{% hint style="info" %}
Tips on Large Model Version Selection:

For example, generating a 300-word X post:

* Advanced version large model: Consumes about 600 App Tokens, and takes about 60 seconds.
* Basic version large model: Consumes about 30 App Tokens, and takes about 30 seconds. Quality differences in a generated post may not be significant in this scenario, so it's suggested to test and choose based on expected results.
{% endhint %}

* Input Configuration: Configure parameters to be passed to the AI interface. Generally, input parameters will be provided directly to the preset prompts or used as filtering conditions for the knowledge base.

#### Preset Prompts

**Prompts' Function**

Prompts serve to inform AI of its role, provide reference material, and specify task constraints.

**Advanced Prompts Guide**

⚠️ It is recommended to read and understand the [Prompt Engineering Guide ](https://www.promptingguide.ai/)to gain insight into prompt specifications and techniques for optimal results. While high-quality prompts may consume more App Tokens and waiting time, they often yield better results.

**Prompt Source Options**

1. Direct Input:
2. Enter prompt words directly in task roles, messages, and constraints. Note that this configuration will make the AI interface only execute fixed tasks.
3. Direct Input + AI Parameter Reference:

If your business involves assisting users in writing content, where task roles or constraints remain fixed and only task messages need user input, you can directly input fixed roles and constraint content in the AI interface. Task details can then be obtained using AI parameters.

**Momen AI Prompt Content**

> To enhance prompt quality, Momen AI has structured the "preset prompts." New users can follow the structure below or reference input parameters to obtain relatively high-quality results.

1. Task Roles:

Define what role AI should play, facilitating better understanding of tasks/questions. For example, "An English teacher helping students master English grammar," "An insurance claims specialist," or "An influencer on Ins"

2. Task Messages:

Define how AI should perform, whether answering questions, writing copies, or extracting information. Specify whether to integrate other context or knowledge base references when executing tasks.

3. Task Constraints:

Specify constraints AI should follow during task execution, such as what to do, what not to do, word count limitations, keywords to include, required style, precision level, and generation of rich text, among others.

<figure><img src="../.gitbook/assets/3 (29).png" alt="Prompt content in an AI function in a no-code tool"><figcaption></figcaption></figure>

{% hint style="info" %}
Example:

Suppose the task is to create an AI assistant for Momen AI development. Users can ask questions related to Momen's usage. The AI assistant relies on the provided knowledge base documentation. If the question is not in the knowledge base, the response should be, "Sorry, I cannot answer your question. Please contact Momen experts for assistance."

* Task Roles: "Assisting users in correctly using a no-code tool called Momen based on knowledge base documentation."
* Task Messages Details: "Your task is to answer user questions based on the provided knowledge base content. The response must include the knowledge base original text and your summary based on the question. Format: \[Knowledge base original text:, Summary:]"
* Task Constraints: "Only answer user questions based on the provided knowledge base content. If there are no relevant answers in the knowledge base, respond with: 'Sorry, I cannot answer your question. Please contact Momen experts for assistance.'"
{% endhint %}

#### Knowledge Base

**Function**

> Results retrieved from the knowledge base along with preset prompts will be sent to AI.

1. **Expand Knowledge Domain:** External knowledge bases provide additional domain-specific knowledge to enhance the model's ability to answer a broader range of questions.
2. **Provide Real-time Information:** External knowledge bases can include the latest data, aiding AI in understanding current events and trends.
3. **More Uses:** Improve answer accuracy, enhance contextual understanding, handle rare domain issues, language translation, cross-cultural understanding, and compensate for knowledge gaps.

{% hint style="info" %}
Example:&#x20;

Case 1: Create an AI assistant for Momen AI development. Users can ask questions related to the development and usage of Momen. To ensure accurate responses, AI needs access to Momen's official documentation.&#x20;

Case 2: Develop an AI assistant for internal company finance processes. Colleagues can pre-ask the AI assistant questions related to financial reimbursements. To ensure precise responses, AI needs access to relevant documentation regarding company financial reimbursements.
{% endhint %}

**Knowledge Base Data Source**

**Database:**

Select single or multiple data tables, fields, related tables/fields stored in Momen. You can also predefine data limits, filtering conditions, sorting, and deduplication operations on selected tables.

<figure><img src="../.gitbook/assets/4 (26).png" alt="Upload knowledge base from database"><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/5 (21).png" alt="Setting the data in knowledge base"><figcaption></figcaption></figure>

**Local Files:**&#x20;

Choose local files to upload to the AI interface.

* Supported formats: Word, PDF, txt, md.
* Total file size not exceeding 50MB.
* Uploaded files are automatically segmented and vectorized by Momen for easy retrieval.
* Specify sending the best-matching segments to the large model; the default is 3 segments.

<figure><img src="../.gitbook/assets/6 (20).png" alt="Upload local file to Momen AI"><figcaption></figcaption></figure>

**Third-Party API**

Momen also supports fetching external data via API. You can choose the configured APIs as your data source.

<figure><img src="../.gitbook/assets/截屏2024-02-23 15.07.10.png" alt="use api as data source "><figcaption></figcaption></figure>

Please check our step-by-step guide about how to configure APIs in Momen: [Notion](../advanced-functionality/api/integrations/notion.md), [Airtable](../advanced-functionality/api/integrations/airtable.md), [Google Sheet](../advanced-functionality/api/integrations/google-sheet.md)

#### Output Configuration

<figure><img src="../.gitbook/assets/7 (16).png" alt="Configure the output in Momen AI"><figcaption></figcaption></figure>

**Default:** AI will output results in the default way if there are no output format restrictions in your task constraints. For example, if the task is to calculate a set of data, the output result might be a number; if it's to write an article, the output result might be a large text.

**Custom**: Output results in JSON format. Define the content to include which fields and specify the meaning of each field. AI will output the results in JSON format, allowing you to read the data like a data table in Momen when calling this AI interface.

**Word Count Limit:** Refers to the App Tokens required for the content sent to AI (preset prompts + a few segments of content retrieved from the knowledge base) + the content returned by AI. Maximum limit: 8000 App Tokens for advanced version large models, 4000 App Tokens for basic version large models.\


#### Debugging and Preview

Before formal configuration, simulate users and input parameters here to debug the AI interface and view the "input" and "output" of this debugging request.

* Make sure the results are as expected before official calls.
* Optimize the configuration based on results

<figure><img src="../.gitbook/assets/8 (15).png" alt="Configure the output in Momen AI"><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/9 (14).png" alt="Debug and preview in Momen AI interface"><figcaption></figcaption></figure>

{% hint style="info" %}


Tips:

* If you haven't referenced the current user data when configuring preset prompts, the "Simulated User ID" does not need to be filled in.
* If you reference current user data when configuring preset prompts, to allow flexible debugging (changing identity, basic information, permissions, etc.), enter the "Simulated User ID" to simulate the corresponding user.
  * The "Simulated User ID" can be copied from the default account table in the database.
  * &#x20; ⚠️ Note: The "Simulated User ID" must exist in the default account table; otherwise, debugging will report an error.
{% endhint %}

### Request AI:

> Currently, AI requests can only be triggered through interactive action.

To receive the results of an AI request, add page data for the page and add an interactive action for the button component. Then, select the configured AI interface and input parameters. Set the page data upon success, and set the value as the content from the result data.

<figure><img src="../.gitbook/assets/10 (14).png" alt="Request AI in a no-code editor"><figcaption></figcaption></figure>

**Streaming Output:** When configuring AI with the "Streaming Output" mode enabled, you will encounter a setting for "Assign streaming output to page data" during the request. In this configuration, you need to choose a preset page data to assign the streaming output. Subsequently, you can bind this page data to a "Text Component." Upon successful AI request, the Text Component will then present the results in a streaming fashion.

<figure><img src="../.gitbook/assets/截屏2024-02-23 15.21.21.png" alt="stream out put in ai configuration in a no-code tool" width="276"><figcaption></figcaption></figure>

Display Loading Animation During Request: This is enabled by default. It shows a loading animation before the AI request results come back.

<figure><img src="../.gitbook/assets/Oct-25-2023 19-28-46.gif" alt=""><figcaption></figcaption></figure>

### App Token Consumption

[App Token Consumption](app-token-consumption.md)

\
If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.

Basic and above versions are required to use AI-related features. Please ensure that you have upgraded to the corresponding version and have sufficient [App Tokens](app-token-consumption.md) before use.



####
