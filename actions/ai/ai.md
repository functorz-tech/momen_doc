---
description: >-
  Based on LLMs, leveraging RAG and tool invocation, you can create customized
  business AI apps and agents.
---

# AI

## Introduction

Optimize your business efficiency with Momen's AI capabilities. Learn about custom AI interfaces, knowledge base integration, and output configurations. Explore the potential of Momen AI in various scenarios in this tutorial.

## Function Description

Momen AI is a robust feature integrated within the Momen editor, designed to facilitate custom AI request setups. Its streamlined interface demystifies AI configurations, enabling you to create personalized AI applications without coding.

## Core Features

* Supports a variety of large models, including "GPT 4o mini" and "GPT 4o". Momen will integrate more models in the future.
* Accommodates multiple input types, such as text and images.
* Connects to various knowledge base sources, including the Momen database, third-party APIs, and local files.
* Offers a selection of tools for invocation, including action flows, APIs, and other pre-configured AI requests.
* Provides outputs in JSON format and supports streaming outputs.

AI applications have a wide range of use cases. Here are some common scenarios:

* Intelligent Customer Service (AI Q&A):
  * Insurance, law firms, tools, e-commerce AI Q&A assistants/intelligent customer service.
  * Provide AI with specialized knowledge within an industry, such as uploading Momen's docs for AI to answer questions related to Momen's operations.
* Marketing (AI Content Creation):
  * Sales/consultation script generation based on user information and sales/consultation materials.
  * Copywriting for platforms like Instagram, X, and TikTok and scriptwriting for videos, movies, etc.

## Model Support

You can use the large models provided by Momen or integrate your own model services.

### Using Models Provided by Momen

Currently, GPT 4o and GPT 4o mini are the two large models available. When using them, AI Points are deducted proportionally based on the number of tokens consumed by the large model (distinguishing between input and output).

In most cases, GPT 4o consumes more tokens than GPT 4o mini. **However, when processing images, mini's token consumption is about 33 times that of 4o**, making their consumption equivalent when converted to Points. You can use the Point calculator to estimate the consumption for images or text.

When AI Points are insufficient, data vectorization, vector sorting, and Agent invocation cannot proceed normally. After recharging, it takes a few minutes to generate vectors that were not previously generated. You can also view the consumption records of Points in the Project Detail.

Additionally, at the beginning of each month, the system will gift **100,000** AI Points, which will be cleared at the end of the month.

### Bring Your Own Model

If you have opened model services on other platforms or deployed large models yourself, you can integrate them into Momen. **This feature is only available for paid Projects**.

Currently supported large models include gpt-4o, gpt-4o-mini and DeepSeek-R1:

| Manufacturer | Model       | Model Capabilities                      |
| ------------ | ----------- | --------------------------------------- |
| OpenAI       | GPT-4o      | Streaming, Multiple modal, Tool calling |
|              | GPT-4o-mini | Streaming, Multiple modal, Tool calling |
| DeepSeek     | DeepSeek-R1 | Streaming, Reasoning content            |

When creating a large model, you need to fill in:

**Basic Information**

1. Name: The name of the large model configuration, which must be unique.
2. Type: Confirm the type of large model, reasoning or word embedding.
3. Platform: Supports official OpenAI and also supports self-hosted (DeepSeek only).
4. Model: The large model.

**Platform Information**

If integrating with official platforms, fill in:

1. API Key: The authorization key for each platform. Obtain it directly from the platform.

**Self-hosted Large Model Service Information**

If it is a self-hosted large model service, fill in:

1. Server URL: The access address of the large model service.
2. Custom authentication header: The key name of the authentication method, such as "api-key" in "api-key: xxxxxxxxxxx".
3. Custom authentication value: The key value of the authentication method, such as "xxxxxxxxxxx" in "api-key: xxxxxxxxxxx".
4. Model Value of Input Parameter: The model value, such as "DeepSeek-R1".

After filling in the above information, click "Verify". The system will attempt to send a request using this information. If the request is successful, the verification is passed. Save the configuration and deploy the backend, and the large model can be used.

## Configuration Instructions

The left side is the configuration interface, the right side is the debugging interface.

![AI configuration interface](../../.gitbook/assets/screenshot_20240723_133439.png)

### 1. General Configuration

**Large Model:** Select the version of the large model to complete your AI tasks. The version you choose can influence the results.

- More sophisticated models will use more AI Points.
- Currently, only GPT 4o supports processing images.

**AI Personality:** This refers to 'temperature' in configuration, which ranges from 0-1. A lower value yields more rational and accurate results, and a higher value yields more creative responses.

**Maximum Rounds:** This is the maximum number of interactions you can have with the AI during debugging. Sending a command to the AI and receiving a response without invoking any tools counts as one round. If you send a command and the AI calls an API tool before responding, that counts as two rounds.

**Maximum Token per Round:** This is the maximum number of words that can be sent to the AI and received from the AI in each round.

{% hint style="info" %}
**Note:** When multi-turn conversations are enabled, each new round includes the context from previous rounds. This will result in an increasing number of words per round, consuming more points. Therefore, you need to set a word limit per round based on your business needs to avoid exceeding the model's processing capacity while efficiently using points.
{% endhint %}

### 2. Input Configuration

Input Parameter Configuration: Set up the single or multiple parameters required when making an AI request. These parameters are typically linked directly to \[Predefined Prompts] for usage, and may also be used as filtering conditions for the \[Knowledge Base-Database].

![Input parameter configuration](../../.gitbook/assets/screenshot_20240723_134104.png)

### 3. Preset Prompts

**Prompts:** Prompts serve to inform AI of its role, provide reference material, and specify task constraints.

**Advanced Prompts Guide**

{% hint style="info" %}
It is recommended to read and understand the [Prompt Engineering Guide](https://www.promptingguide.ai/) to gain insight into prompt specifications and techniques for optimal results. While high-quality prompts may consume more AI Points and waiting time, they often yield better results.
{% endhint %}

**Prompt Source Options**

1. **Direct Input:** Enter prompt words directly in task roles, messages, and constraints. Note that this configuration will make the AI only execute fixed tasks.
2. **AI Parameter Reference:** Click the "+" sign next to the input box to reference parameters that are passed when the AI is invoked. This setup is more flexible than direct input, allowing users to define their own task roles, details, and constraints, enabling the request to handle a wider array of tasks.
3. **Direct Input + AI Parameter Reference:** If your business involves assisting users in writing content, where task roles or constraints remain fixed and only task messages need user input, you can directly input fixed roles and constraint content in the AI interface. Task details can then be obtained using AI parameters.
4. **Knowledge Base:** Retrieve data from the Momen database, third-party APIs, or files uploaded locally.

**Momen AI Prompt Content**

> To enhance prompt quality, Momen AI has structured the "preset prompts." New users can follow the structure below or reference input parameters to obtain relatively high-quality results.

1. Task Roles:

Define what role AI should play, facilitating better understanding of tasks/questions. For example, "An English teacher helping students master English grammar," "An insurance claims specialist," or "An influencer on Instagram."

2. Task Details:

Define how AI should perform, whether answering questions, writing copies, or extracting information. Specify whether to integrate other context or knowledge base references when executing tasks.

3. Task Constraints:

Specify constraints AI should follow during task execution, such as what to do, what not to do, word count limitations, keywords to include, required style, precision level, and generation of rich text, among others.

![Prompt content in an AI function in a no-code tool](../../.gitbook/assets/3%20(29).png)

{% hint style="info" %}
Example:

Suppose the task is to create an AI assistant for Momen AI development. Users can ask questions related to Momen's usage. The AI assistant relies on the provided knowledge base documentation. If the question is not in the knowledge base, the response should be, "Sorry, I cannot answer your question. Please contact Momen experts for assistance."

* Task Roles: "Assisting users in correctly using a no-code tool called Momen based on knowledge base documentation."
* Task Messages Details: "Your task is to answer user questions based on the provided knowledge base content. The response must include the knowledge base original text and your summary based on the question. Format: \[Knowledge base original text:, Summary:]"
* Task Constraints: "Only answer user questions based on the provided knowledge base content. If there are no relevant answers in the knowledge base, respond with: 'Sorry, I cannot answer your question. Please contact Momen experts for assistance.'"
{% endhint %}

### 4. Knowledge Base

**Function**

> Results retrieved from the knowledge base along with preset prompts will be sent to AI.

1. **Expand Knowledge Domain:** External knowledge bases provide additional domain-specific knowledge to enhance the model's ability to answer a broader range of questions.
2. **Provide Real-time Information:** External knowledge bases can include the latest data, aiding AI in understanding current events and trends.
3. **More Uses:** Improve answer accuracy, enhance contextual understanding, handle rare domain issues, language translation, cross-cultural understanding, and compensate for knowledge gaps.

{% hint style="info" %}
Example:

Case 1: Create an AI assistant for Momen AI development. Users can ask questions related to the development and usage of Momen. To ensure accurate responses, AI needs access to Momen's official documentation.

Case 2: Develop an AI assistant for internal company finance processes. Colleagues can pre-ask the AI assistant questions related to financial reimbursements. To ensure precise responses, AI needs access to relevant documentation regarding company financial reimbursements.
{% endhint %}

**Knowledge Base Data Source**

Momen AI supports multiple data sources, including databases, APIs, and local files.

**Database:**

Select single or multiple data tables, fields, related tables/fields stored in Momen. You can also predefine data limits, filtering conditions, sorting, and deduplication operations on selected tables.

![Upload knowledge base from database](../../.gitbook/assets/4%20(26).png)

![Setting the data in knowledge base](../../.gitbook/assets/5%20(21).png)

{% hint style="info" %}
**Note:** The data given to the AI will consume points. To manage this, it's best to limit the amount and size of data entries. Set appropriate data limits based on your needs to avoid overloading the model and use points efficiently.
{% endhint %}

**Local Files:**

Upload your local files as AI's knowledge.

* Supported formats: Word, PDF, TXT, Markdown.
* Total file size should not exceed 50MB.

![Upload local file to Momen AI](../../.gitbook/assets/6%20(20).png)

**Third-Party API**

Momen also supports fetching external data via API. You can choose the configured APIs as your data source.

![Use API as data source](../../.gitbook/assets/screenshot_20240223_150710.png)

Please check our step-by-step guide about how to [configure APIs](../../data/api.md) in Momen.

### 5. Tools

**Why does an AI agent need to invoke tools**

In an AI Agent, large language models serve as the agent's brain, tasked with logical thinking and task planning. Yet, these models can't directly interact with the world; they require various tools like API requests or intermediary software to facilitate external interactions, similar to human limbs. These tools allow the AI to perform specific actions such as data retrieval, image generation, or other environmental interactions.

**Types of Tools**

In Momen AI, the AI can invoke pre-configured Actionflows, APIs, and other AI requests within Momen, or open "Obtain Info" to let the AI seek additional context from the user if necessary.

![AI tool invocation](../../.gitbook/assets/screenshot_20240723_135403.png)

**Invoking Actionflows**

Preparation: Familiarize yourself with \[[Actionflow Fundamentals](../action-flow-configuration/action-flow-basics.md)], complete the Actionflow setup, save, and publish it. After choosing a configured Actionflow, click the "Add Description" button to the right of the flow to describe both the Actionflow itself and the input/output parameters, helping the AI understand the flow's purpose and the data involved.

![Invoking Actionflows](../../.gitbook/assets/screenshot_20240723_135708.png)

**Invoking APIs**

Preparation: Learn about \[[API Configuration](../api-configuration/api-configuration.md)], complete API setup and testing, save, and publish the API. After selecting a configured API, click the "Add Description" button on the right side of the API to detail what parameters to send and the expected API returns.

**Invoking AI**

Preparation: Other AI requests have been set up and released in Momen. Similarly to the above tools, after choosing another configured AI, add a description, informing the current AI about the tool's function and the input/output data involved.

### 6. Output Configuration

![Output configuration](../../.gitbook/assets/screenshot_20240723_135953.png)

**Default:** If your task does not specify an output format, the AI will automatically determine the most appropriate output. For instance, it may produce a number when calculating data, or a substantial text block when writing an article.

**Custom:** As depicted below, outputs can be formatted as "JSON" objects. This format allows for the customization of the JSON structure and its field names. Each field can include a description that clarifies its purpose to the AI.

![Custom output configuration](../../.gitbook/assets/screenshot_20240723_140039.png)

**Streaming Output:** AI models display results progressively as they are generated, reducing latency and thereby improving user experience.

**Note:** Streaming output is intended solely for visual display on pages and cannot be integrated into project data flows. It can be used as standard text for further applications, like database storage, only after a successful AI invocation.

### 7. Debugging and Preview

Once you've finalized the AI settings, input parameters can be entered on the right side of the interface for debugging and previewing the AI request.

![Debugging and preview](../../.gitbook/assets/screenshot_20240723_140406.png)

The section below details the entire operation process of the AI. Upon successful execution, you can review the input parameters you provided, how the tools were utilized, and whether the outcomes align with your expectations. If the setup includes multiple dialogue rounds, you can input new parameters here to extend the conversation.

![Operation process details](../../.gitbook/assets/output%20(1)%20(1).png)

## AI Action Configuration Guide

Momen AI provides the following five types of AI actions. You can find AI under the action menu when clicking and then selecting the needed action to configure.

![AI action types](../../.gitbook/assets/screenshot_20240723_152915.png)

### 1. Start Conversation

\[Start Conversation] is generally used to start the first round of a multi-round AI dialogue or to complete a one-time AI dialogue.

It is triggered by clicking, starting a new AI conversation, i.e., adding a new record in the 'Conversation Table', adding a message record with "System" as the role in the message table, and recording which dialogue this message belongs to; adding content records in the message content table, and recording which message this content belongs to.

If a tool is invoked, adding a tool usage record in the tool usage record table, and recording which message this tool usage record belongs to.

**Action Configuration Guide:**

In the action of \[Start Conversation], select the AI to be called. If the AI has input parameters, then bind or directly enter the corresponding input parameters.

**Note:** To accurately bind the session ID in \[Continue Conversation], \[Delete Conversation], \[Stop Response], a page data of integer type (BIGINT) is generally added to the page, named `conversation_id`. Set this page variable when \[Start Conversation] is successful, assigning it as: result data/Start Session/ID.

![Momen AI start conversation](../../.gitbook/assets/screenshot_20240723_153424.png)

### 2. Continue Conversation

When conducting multi-round dialogues, after \[Start Conversation], if you want to continue sending messages to AI and automatically bring up the context, then use \[Continue Conversation] action. \[Continue Conversation] is triggered by clicking, and after triggering, it automatically adds related data to the message table, message content table, and tool usage record table just like \[Start Conversation].

**Action Configuration Guide**\
In the action of \[Continue Conversation], select the same AI as the last \[Start Conversation] call, and bind the Conversation ID generated by \[Start Conversation], simultaneously directly enter or bind the message content.

![Momen AI continue conversation](../../.gitbook/assets/screenshot_20240723_154520.png)

### 3. Delete Conversation

This action deletes a specific conversation, as well as the related messages, message content, and tool call records.

### 4. Stop Response

\[Stop Response] means during the process of \[Start Conversation] or \[Continue Conversation], you can trigger \[Stop Response] to stop the current conversation. After stopping the reply, you can still use \[Continue Conversation] to continue the just-ended multi-round dialogue.

### 5. Provide Tool Info

To be updated...

## Using the Results of Calling AI

### When Default Output

To directly display the results of the AI request, generally add a page variable on the page, then add the needed AI request to the button component's click action, complete the AI request's input parameter configuration, and set the page variable when it is successful, assigning it as content from the result data.

![Directly display AI results](../../.gitbook/assets/screenshot_20240723_155141.png)

### When Custom Output

When configuring AI, if you configured custom output, you will need to set the output fields' types and names (in English, best if it corresponds to the expected output results' meaning). AI will write the corresponding results into the fields by their names.

![Custom output fields configuration](../../.gitbook/assets/screenshot_20240723_140039.png)

When invoking this AI, you can select the needed field content from the AI result data to refer to.

![](<../../.gitbook/assets/screenshot_20240723_155746.png>)

### When Streaming Output

When configuring AI, if 'Streaming Output' mode is turned on, then when invoking AI, there will be a configuration option 'Assign streaming output to page data'. In the configuration, you need to select the page data previously created on the page. Then you can bind this page data to \[Text Component]. When the AI call is successful, the text component will then display the results in a streaming manner.

![Streaming output configuration](../../.gitbook/assets/screenshot_20240723_155955.png)

## AI Point Consumption

[AI Point Consumption](ai-point.md)
