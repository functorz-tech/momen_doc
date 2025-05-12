---
description: >-
  Implement complex logic by adding, deleting, modifying, querying data, writing
  JS code blocks, calling APIs, and conditional branching.
---

# Actionflow

## Introduction

Actionflow is a tool provided by Momen for customizing stream-based operations and configuring various trigger mechanisms. It allows users to create custom workflows, similar to other workflow automation tools. Each Actionflow is assigned a unique ID, which can be used to search and view its execution logs.

* Free projects can create one Actionflow.
* Basic and above projects can create unlimited Actionflows.

## Use Case

Actionflows are ideal for executing complex data processing and business logic, such as:

* E-commerce Loyalty Program: Automatically upgrade users to "Gold Member" when their total purchase exceeds $10,000.
* Order Reminders: Send notifications every 24 hours for unpaid orders.
* Payment Processing: After receiving a successful payment notification, execute post-payment processes like updating inventory and notifying the user.

## Composition of Actionflow

#### Attributes

* **ID**: Each Actionflow has an ID, which can be searched in the log function to query the corresponding logs.
* **Version**: Each time an Actionflow is changed and saved, a new version is generated. **After updating the backend, the version will take effect on the backend; after updating the preview, it will take effect on the frontend** (Therefore, if you only update the backend but not the preview, the frontend will still execute the old version of the Actionflow).
* **Execution Method**: Actionflow supports two execution methods: synchronous and asynchronous (referring to the Actionflow itself, not the nodes). Synchronous execution means the Actionflow executes in order, and each execution must wait for the previous one to complete before starting; asynchronous execution allows each Actionflow to run in parallel. Their pros and cons are compared as follows:

    |                               | Synchronous                                                           | Asynchronous                                                                        |
    | ----------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
    | Execution Order               | Actionflow executes in order                                          | Execution order is not determined                                                   |
    | Blocks Other Actionflows      | Yes                                                                   | No                                                                                  |
    | Timeout Duration              | Entire Actionflow 15 seconds (unlimited for paid projects)            | Each node 15 seconds (unlimited for paid projects)                                  |
    | Handling of Timeout or Errors | All data modifications will roll back                                 | Data modifications will not roll back                                               |
    | Applicable Scenarios          | Scenarios with strict order requirements and short operation duration | Time-consuming operations (e.g., AI sessions), scenarios requiring high concurrency |

    If an asynchronous Actionflow is triggered via a Callback, the call will return the taskId of this asynchronous task, and then use the `fz_listen_action_flow_result` interface to listen for the return result:

    ```graphql
    subscription listenResult {
      fz_listen_action_flow_result(taskId: "_____") {
        output
        status
      }
    }
    ```

#### Variables

Once defined, they can be referenced by all nodes within the Actionflow and can be assigned using the "Assign Actionflow Variable" node.

#### Nodes

Operation nodes currently include multiple types such as database operations, executing AI, permission modification, API calls, and executing code blocks.

#### Trigger Methods

Trigger methods include page click event triggers, database change triggers, scheduled triggers, and Callback triggers.

## How to Use

**1. Create & Configure Action Nodes:** Set up Actionflow nodes according to your business logic, including branching for conditional processing.  
**2. Configure Triggers:** Select the appropriate trigger type to initiate the Actionflow.  
**3. Set Permissions:** Define which user roles can execute the Actionflow.  
**4. Invoke Actionflow:** Trigger it via frontend interactions or configured triggers.

## Actionflow Configuration Guide

### 1. Creating an Actionflow

Click "Create" to add a new Actionflow. Configure it by adding and arranging action nodes, including branching for conditional logic. You can define input parameters to accept external data and output parameters to return the results of the Actionflow.

* Execution Mode: Actionflows can be executed in synchronous or asynchronous mode. For AI-related flows, asynchronous execution is required.
* Flow Variables: Declare variables within the flow to store intermediate results, especially for use in conditional branches.

### 2. Action Nodes

Add action nodes by clicking the "+" icon. Momen supports the following types:

* Database Operations: Query, insert, update, or delete records in a specific table.
* Third-Party API Calls: Execute pre-configured APIs, and bind their responses to output parameters for further use.
* AI Execution: Run an AI model configured in Momen’s AI module.
* Set Global Variable: Assign values to global variables.
* Permission Management: Grant or revoke user roles.
* Conditional Branch: Add decision-making logic, where branches are evaluated from left to right. Use variables to store and output branch results.
* Custom Code Execution: Execute custom code blocks (refer to the specific documentation for more details).

### 3. Triggers

Momen supports four types of triggers:

* Scheduled Trigger: Set up periodic execution using a timer. For complex schedules, use Cron expressions.
* [Database Change Trigger](db-trigger.md): Automatically trigger the Actionflow when specific changes occur in a table.
* Webhook Trigger: Use webhooks to trigger the flow. This option is suitable for users with coding skills and requires configuring the callback request body format.
* Frontend Trigger: Add a "Request – Actionflow" action to a component or page interaction, allowing users to trigger the flow by clicking a button or onPageLoad.

## Log Management

Actionflow execution logs can be viewed in "Project Details > Run Logs." Use the unique Actionflow ID to search specific logs for troubleshooting.

## Note

* Automation execution requires purchasing additional execution numbers. Momen provides a limited number of free executions depending on the project version. Once exhausted, users need to purchase more numbers of invocation via "Personal Center > Project > Management > Automation Execution Credits."
* Ensure that all action nodes are properly configured, saved, and published before setting up triggers.
* Actionflows do not enforce strict type checking, so variables of different types can be assigned without errors (e.g., assigning a string to an integer variable).
* Before deleting a node, ensure that any downstream node using its output is updated or removed.
* Formula support in Actionflows is currently limited.
