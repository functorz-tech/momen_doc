---
description: >-
  Implement complex logic by adding, deleting, modifying, querying
  data, writing JS code blocks, calling APIs, and conditional branching.
---

# Actionflow

## Introduction

Actionflow is a tool provided by Momen for customizaing stream-based operations and configuring various trigger mechanisms. It allows users to create custom workflows, similar to other workflow automation tools. Each actionflow is assigned a unique ID, which can be used to search and view its execution logs.

A complete actionflow consists of two main parts: Triggers and Action Nodes. Momen supports several action node types, including database operations, AI execution, API calls, permission management, and custom code execution. Triggers can be configured through page click events, database changes, scheduled timers, or webhooks.

- Free project can create one actionflow.
- Basic and above project can create unlimited actionflows.

## Use case   
Actionflows are ideal for executing complex data processing and business logic, such as:   
- E-commerce Loyalty Program: Automatically upgrade users to "Gold Member" when their total purchase exceeds $10,000.
- Order Reminders: Send notifications every 24 hours for unpaid orders.
- Payment Processing: After receiving a successful payment notification, execute post-payment processes like updating inventory and notifying the user.

## How to Use   
**1. Create & Configure Action Nodes:** Set up actionflow nodes according to your business logic, including branching for conditional processing.   
**2. Configure Triggers** Select the appropriate trigger type to initiate the actionflow.   
**3. Set Permissions:** Define which user roles can execute the actionflow.   
**4. Invoke Actionflow:** Trigger it via frontend interactions or configured triggers.

## Actionflow Configuration guide

### 1. Creating an Actionflow
Click "Create" to add a new actionflow. Configure it by adding and arranging action nodes, including branching for conditional logic. You can define input parameters to accept external data and output parameters to return the results of the actionflow.
- Execution Mode: Actionflows can be executed in synchronous or asynchronous mode. For AI-related flows, asynchronous execution is required.
- Flow Variables: Declare variables within the flow to store intermediate results, especially for use in conditional branches.

### 2. Action Nodes
Add action nodes by clicking the "+" icon. Momen supports the following types:
- Database Operations: Query, insert, update, or delete records in a specific table.
- Third-Party API Calls: Execute pre-configured APIs, and bind their responses to output parameters for further use.
- AI Execution: Run an AI model configured in Momen’s AI module.
- Set Global Variable: Assign values to global variables.
- Permission Management: Grant or revoke user roles.
- Conditional Branch: Add decision-making logic, where branches are evaluated from left to right. Use variables to store and output branch results.
- Custom Code Execution: Execute custom code blocks (refer to the specific documentation for more details).

### 3. Triggers
Momen supports four types of triggers:
- Scheduled Trigger: Set up periodic execution using a timer. For complex schedules, use Cron expressions.
- [Database Change Trigger](db-trigger.md): Automatically trigger the actionflow when specific changes occur in a table.
- Webhook Trigger: Use webhooks to trigger the flow. This option is suitable for users with coding skills and requires configuring the callback request body format.
- Frontend Trigger: Add a "Request – Actionflow" action to a component or page interaction, allowing users to trigger the flow by clicking a button or onPageLoad.

## Log Management
Actionflow execution logs can be viewed in "Project Details > Run Logs." Use the unique actionflow ID to search specific logs for troubleshooting.

## Note  
- Automation execution requires purchasing additional execution numbers. Momen provides a limited number of free executions depending on the project version. Once exhausted, users need to purchase more numbers of invocation via "Personal Center > Project > Management > Automation Execution Credits."
- Ensure that all action nodes are properly configured, saved, and published before setting up triggers.
- Actionflows do not enforce strict type checking, so variables of different types can be assigned without errors (e.g., assigning a string to an integer variable).
- Before deleting a node, ensure that any downstream node using its output is updated or removed.
- Formula support in actionflows is currently limited.
