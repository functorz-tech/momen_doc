---
description: >-
  Learn about Momen AI invocation and data model in this doc.
---

# AI Data Model
Momen AI provides users with four data tables as shown below to record data generated during dialogues with AI. Developers can directly use these four tables for AI application data display and interaction.

<figure><img src="../../.gitbook/assets/截屏2024-07-23 14.48.32.png" alt=""><figcaption></figcaption></figure>

## 1. Conversation

Used to record data from a particular session. In the AI configuration interface, debugging, and invoking the \[Start Conversation] below, a new data entry is automatically added to the table.&#x20;

**Field Explanation:**

* Account ID: Integer type, a relational field produced by a one-to-many relationship between the account table and the conversation table, used to record which user initiated this session.
* Input: At the start of the session, the related content of this AI configuration is saved in this field, i.e., AI prompts, knowledge base configuration, tool configuration, and output configuration.
* Status: Records the status of this session. The default six statuses allow for setting business logic according to the dialogue state:
  * CREATED: The initial state when created.
  * IN PROGRESS: Waiting for AI's reply after being sent.
  * STREAMING: AI is in the process of streaming output.
  * COMPLETED: AI has completed replying.
  * FAILED: Various failure states.
  * CANCELED: Status after stopping the reply.

## 2. Message

Used to record message logs under a particular session, but not the specific message content.

**Field Explanation:**

* Account ID: Integer, a relational field produced by a one-to-many relationship between the account table and the message table, used to record which user the message belongs to.
* Role: Text, defaults to the following three roles, recording who the sender of the message is:
  * system: When triggering \[Start Session], the prompts (including user-entered input parameters), results returned by the knowledge base, and results from tool invocation are sent to AI, and this message is recorded under the role of system.
  * assistant: Results returned by AI are recorded under the role of assistant.
  * user: When clicking to continue the conversation, the content entered by the user from the input box and sent to AI is recorded under the role of user.
* Conversation ID: Integer type, a relational field produced by a one-to-many relationship between the session table and the message table, used to record which session this message belongs to.

In a single-round dialogue, only the roles of system and assistant appear in the message table.

In multi-round dialogues, the first message triggered by \[Start Conversation] is sent by system, and assistant returns results based on system's content.

In \[Continue Conversation], messages are sent as the user, and assistant continues to process all previous messages and returns results.

## 3. Message Content

Used to record specific message content. Since the content sent to AI might include both images and text, Momen AI saves images and text separately in the message content table and automatically associates them with a particular message.

**Field Explanation:**

* Type: Text type, defaults to the following three types, recording the type of this data: text, image, JSON.
* Text: Text type, if the message is a text, it is saved in this field.
* Image: Image type, if the message is an image, it is saved in this field.
* JSON: JSON type, if the message is a JSON, it is saved in this field.
* Message ID: Integer type, a relational field produced by a one-to-many relationship between the message table and the message content table, used to record which specific message content belongs to which message.

## 4. Tool Usage Record

Used to record the usage of tools during AI operation. Since AI might call multiple tools when processing a particular message, Momen AI saves a record of each tool's usage in this table and automatically associates it with a particular message.

**Field Explanation:**

* Name: Text type, records the name of the tool.
* Call ID: Text type, records the tool call ID.
* Type: Text type, defaults to the following four types, recording the type of the tool:
  * ACTION\_FLOW: Behavior flow.
  * TPA: Third-party API.
  * Momen AI: Other AI.
  * OBTAIN\_MORE\_INFORMATION: Obtain more information.
* Request: JSON type, the request made when invoking the tool.
* Response: JSON type, the result returned when the tool is called.
* Message ID: Integer type, a relational field produced by a one-to-many relationship between the tool usage record table and the message table, used to record which message this tool usage record belongs to.

