---
description: >-
  The "Angry Dietitian" template integrates DeepSeek and GPT-4o to help users
  track their daily diet and receive personalized suggestions based on their
  health goals and body data.
---

# Angry Dietitian

## Introduction

The "Angry Dietitian" template integrates DeepSeek and GPT-4o to help users track their daily diet and receive personalized suggestions based on their health goals and body data.

Here’s a preview of how the template works: [video](https://youtu.be/anLKwgbjb6k)

## Basic Project Operation Logic

### Data

The template consists of 5 core tables, which are default system tables with some additional fields:

- **Account**: This table stores user login information. Six additional fields have been added to store user body data, such as weight, height, and health goals. DeepSeek uses this information to provide personalized suggestions.
- **Message Content**: Stores the content of each message from the AI. In this template, it records the reasoning and output of DeepSeek.
- **Conversation**: Tracks the status of each conversation, including the user, the AI model, input data, conversation status, and any error messages.
- **Tool Usage**: Typically records which tools the AI has invoked. However, this table is not used in this template.
- **Message**: Tracks the token usage for each message in a conversation. You can view how many tokens were used by the user, the AI, or the system.

![Database structure](../.gitbook/assets/Database.png)

### Design

The template features three main pages:

- **Sign up/Sign in**: Users can log in or sign up here. The default login method is by username, but other methods can be configured in the settings.
- **Form**: After signing up, users are directed to this page where they can enter their body data (e.g., weight, height, goals).
- **Roaster**: After filling out the form, users can upload a food photo and press the "Roast" button. GPT-4o analyzes the food, and then DeepSeek (the "Roaster") evaluates the food based on the user's data and health goals.

### AI

This template uses **two AI agents**:

1. **GPT-4o (The Eye)**: Identifies the food in the image, analyzes its type and weight, and outputs the result in a structured JSON format.
2. **DeepSeek (The Roaster)**: Processes the food data provided by GPT-4o and delivers personalized, sometimes harsh, diet suggestions based on the user’s goals.

**Why Two Models?**

GPT-4o is used for image recognition (since DeepSeek cannot process images directly), while DeepSeek provides the "dietitian" analysis once the food data is in text form.

![Agent configuration](../.gitbook/assets/Configure%20the%20Agent.png)

## Configuration Guide

### Data Entry

Users can input their data on the **Form** page. To allow for data modifications, you can add an "Update" button or directly modify the data in the **Account** table. Additional fields (e.g., time zone) can also be added to the **Account** table, and the AI can be configured to consider these fields.

### AI Configuration

- **GPT-4o**: Pre-integrated into Momen, allowing direct selection when building agents.
- **DeepSeek**: ⚠️ You must use your own large model when configuring DeepSeek. While the project preview link demonstrates its functionality, manual integration is required when creating a project from the template. To set it up:
  1. Click **"Add Model"**.
  2. Enter the **URL** of your model service.
  3. Select the **provider**.
  4. Input the **API key** from the developer documentation.

![Bring your own model](../.gitbook/assets/Bring%20your%20own%20model.png)

**Note:** Momen currently supports **OpenAI** and **DeepSeek** models. Additional models will be supported in the future.

### Adjusting Prompts

In this template, DeepSeek acts as a tough, no-nonsense dietitian. You can modify the prompt to adjust the tone and style of the responses to better match your needs.

For a deeper dive into the development of this project, see [live building recap](https://www.youtube.com/live/Voy28dhh0IU?si=8gppAY--G06YM2-o) or our detailed showcase.
