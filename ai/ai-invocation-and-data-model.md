---
description: Learn about Momen AI invocation and data model in this doc.
---

# AI Invocation and Data Model

### Momen **AI Data Model**&#x20;

Momen AI provides users with four data tables as shown below to record data generated during dialogues with AI. Developers can directly use these four tables for AI application data display and interaction.

<figure><img src="../.gitbook/assets/截屏2024-07-23 14.48.32.png" alt=""><figcaption></figcaption></figure>



#### Conversation

Used to record data from a particular session. In the AI configuration interface, debugging, and invoking the \[Start Conversation] below, a new data entry is automatically added to the table.&#x20;

**Field Explanation:**

* Account ID: Integer type, a relational field produced by a one-to-many relationship between the account table and the conversation table, used to record which user initiated this session.
* Input: At the start of the session, the related content of this AI configuration is saved in this field, i.e., AI prompts, knowledge base configuration, tool configuration, output configuration.
* Status: Records the status of this session. The default six statuses allow for setting business logic according to the dialogue state:&#x20;
  * CREATED: The initial state when created.&#x20;
  * IN PROGRESS: Waiting for AI's reply after being sent.&#x20;
  * STREAMING: AI is in the process of streaming output.&#x20;
  * COMPLETED: AI has completed replying.&#x20;
  * FAILED: Various failure states.&#x20;
  * CANCELED: Status after stopping the reply.

**Message**&#x20;

Used to record message logs under a particular session, but not the specific message content.&#x20;

**Field Explanation:**

* Account ID: Integer, a relational field produced by a one-to-many relationship between the account table and the message table, used to record which user the message belongs to.
* Role: Text, defaults to the following three roles, recording who the sender of the message is:&#x20;
  * &#x20;system: When triggering \[Start Session], the prompts (including user-entered input parameters), results returned by the knowledge base, and results from tool invocation are sent to AI, and this message is recorded under the role of system.&#x20;
  * assistant: Results returned by AI are recorded under the role of assistant.&#x20;
  * user: When clicking to continue the conversation, the content entered by the user from the input box and sent to AI is recorded under the role of user.
* Conversation ID: Integer type, a relational field produced by a one-to-many relationship between the session table and the message table, used to record which session this message belongs to.&#x20;

{% hint style="info" %}
In a single-round dialogue, only the roles of system and assistant appear in the message table.&#x20;

In multi-round dialogues, the first message triggered by \[Start Conversation] is sent by system, and assistant returns results based on system's content.&#x20;

In \[Continue Conversation], messages are sent as the user, and assistant continues to process all previous messages and returns results.
{% endhint %}



#### **Message Content**&#x20;

Used to record specific message content. Since the content sent to AI might include both images and text, Momen AI saves images and text separately in the message content table and automatically associates them with a particular message.&#x20;

**Field Explanation:**

* Type: Text type, defaults to the following three types, recording the type of this data: text, image, JSON
* Text: Text type, if the message is a text, it is saved in this field.
* Image: Image type, if the message is an image, it is saved in this field.
* JSON: JSON type, if the message is a JSON, it is saved in this field.
* Message ID: Integer type, a relational field produced by a one-to-many relationship between the message table and the message content table, used to record which specific message content belongs to which message.

#### **Tool Usage Record**

Used to record the usage of tools during AI operation. Since AI might call multiple tools when processing a particular message, Momen AI saves a record of each tool's usage in this table and automatically associates it with a particular message.&#x20;

**Field Explanation:**

* Name: Text type, records the name of the tool.
* Call ID: Text type, records the tool call ID.
* Type: Text type, defaults to the following four types, recording the type of the tool:&#x20;
  * ACTION\_FLOW: Behavior flow.&#x20;
  * TPA: Third-party API.&#x20;
  * Momen AI: Other AI.&#x20;
  * OBTAIN\_MORE\_INFORMATION: Obtain more information.
* Request: JSON type, the request made when invoking the tool.
* Response: JSON type, the result returned when the tool is called.
* Message ID: Integer type, a relational field produced by a 1(one-to-many) relationship between the tool usage record table and the message table, used to record which message this tool usage record belongs to.

### **AI Action Invocation Explanation**&#x20;

Momen AI provides the following five types of AI invocation behaviors, you can find AI under the action when clicking and then select the needed action to configure.

<figure><img src="../.gitbook/assets/截屏2024-07-23 15.29.15.png" alt=""><figcaption></figcaption></figure>

#### **Start Conversation**&#x20;

\[Start Conversation] is generally used to start the first round of a multi-round AI dialogue or to complete a one-time AI dialogue.&#x20;

It is triggered by clicking, starting a new AI conversation, i.e., adding a new record in the 'Conversation Table', adding a message record with system as the role in the message table, and recording which dialogue this message belongs to; adding content records in the message content table, and recording which message this content belongs to.&#x20;

If a tool is invoked, adding a tool usage record in the tool usage record table, and recording which message this tool usage record belongs to.&#x20;

**Configuration Guide:**&#x20;

In the action of \[Start COnversation], select the AI to be called, if the AI has input parameters, then bind or directly enter the corresponding input parameters.&#x20;

{% hint style="info" %}
Note: To accurately bind the session ID in \[Continue Conversation], \[Delete Conversation], \[Stop Response], a page data of integer type (BIGINT) is generally added to the page, named conversation\_id, set this page data when \[Start Conversation] is successful, assigning it as: result data/Start Session/ID.
{% endhint %}

<figure><img src="../.gitbook/assets/截屏2024-07-23 15.34.24.png" alt=""><figcaption></figcaption></figure>

#### **Continue Conversation**

When conducting multi-round dialogues, after \[Start Conversation], if you want to continue sending messages to AI and automatically bring up the context, then use \[Continue Conversation] action. \[Continue Conversation] is triggered by clicking, and after triggering, it automatically adds related data to the message table, message content table, and tool usage record table just like \[Start Conversation].&#x20;

Configuration Guide: In the action of \[Continue Conversation], select the same AI as the last \[Start Conversation] call, and bind the Conversation ID generated by \[Start Conversation], simultaneously directly enter or bind the message content.

<figure><img src="../.gitbook/assets/截屏2024-07-23 15.45.20.png" alt=""><figcaption></figcaption></figure>

#### **Delete Conversation**&#x20;

It means deleting a certain conversation, as well as the related messages, message content, tool call records.

#### **Stop Response**

\[Stop Response] means during the process of \[Start Conversation] or \[Continue Conversation],  you can trigger \[Stop Response] to stop the current conversation. After stopping the reply, you can still use \[Continue Conversation] to continue the just-ended multi-round dialogue.

**Provide Tool Info**

To be updated...&#x20;

### AI Invocation Result&#x20;

#### Default Output&#x20;

In order to directly display the results of the AI request, generally add page data on the page, then add the needed AI request to the button component's click action, complete the AI request's input parameter configuration, and set the page data when it is successful, assigning it as content from the result data.

<div>

<figure><img src="../.gitbook/assets/截屏2024-07-23 15.51.41.png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../.gitbook/assets/截屏2024-07-23 15.52.32.png" alt=""><figcaption></figcaption></figure>

</div>

**Custom Output**&#x20;

When configuring AI, if you configured custom output, you will need to set the output fields' types and names (in English, best if it corresponds to the expected output results' meaning), AI will write the corresponding results into the fields by their names.

<figure><img src="../.gitbook/assets/截屏2024-07-23 14.00.39.png" alt=""><figcaption></figcaption></figure>

When invoking this AI, you can select the needed field content from the AI result data to refer to.

![](<../.gitbook/assets/截屏2024-07-23 15.57.46.png>)



**Streaming Output**&#x20;

When configuring AI, if 'Streaming Output' mode is turned on, then when invoking AI, there will be a configuration option 'Assign streaming output to page data', in the configuration you need to select the page data previously created on the page. Then you can bind this page data to \[Text Component], when AI call is successful, the text component will then display the results in a streaming manner.

<figure><img src="../.gitbook/assets/截屏2024-07-23 15.59.55.png" alt=""><figcaption></figcaption></figure>

**Request Display Loading Animation**

Default is on, when initiating an AI request, display the following loading animation before the request results return.

<figure><img src="../.gitbook/assets/Oct-25-2023 19-28-46.gif" alt=""><figcaption></figcaption></figure>

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
