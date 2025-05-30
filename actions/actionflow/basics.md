---
description: >-
  Implement complex logic by adding, deleting, modifying, querying data, writing
  JS code blocks, calling APIs, and conditional branching.
---

# Actionflow

## Introduction

Actionflow is Momen's tool for building custom workflows and automations. It enables you to configure stream-based operations, set up various triggers, and manage complex business logic. Each Actionflow has a unique ID for searching and viewing execution logs.

- Free projects: 1 Actionflow
- Basic and above: Unlimited Actionflows


## Use Cases

Actionflows are ideal for automating complex data processing and business logic, such as:

- **E-commerce Loyalty Program:** Automatically upgrade users to "Gold Member" when their total purchases exceed $10,000.
- **Order Reminders:** Send notifications every 24 hours for unpaid orders.
- **Payment Processing:** After a successful payment, update inventory and notify the user.


## Actionflow Structure

### Attributes

- **ID:** Unique identifier, searchable in logs.
- **Version:** Each save creates a new version.  
  - **Backend update:** Takes effect on backend.  
  - **Preview update:** Takes effect on frontend.  
  - If only the backend is updated, the frontend still runs the old version.
- **Execution Method:**  
  - **Synchronous:** Executes in order, waits for each step to finish.  
  - **Asynchronous:** Runs in parallel, order not guaranteed.
- **Others:**  

  |                               | Synchronous                                                           | Asynchronous                                                                        |
  | ----------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
  | **Execution Order**           | Executes in order                                                     | Order not guaranteed                                                                |
  | **Blocks Other Actionflows**  | Yes                                                                   | No                                                                                  |
  | **Timeout Duration**          | Entire flow: 15s (unlimited for paid)                                 | Each node: 15s (unlimited for paid)                                                 |
  | **Error Handling**            | All data modifications roll back                                      | Data modifications do not roll back                                                 |
  | **Use Cases**                 | Strict order, short duration                                          | Long-running (e.g., AI), high concurrency                                           |

> If an asynchronous Actionflow is triggered by a callback, the call returns a `taskId`. Use the `fz_listen_action_flow_result` subscription to listen for results:
> 
> ```graphql
> subscription listenResult {
>   fz_listen_action_flow_result(taskId: "_____") {
>     output
>     status
>   }
> }
> ```

### Variables

Defined variables are accessible to all nodes and can be assigned using the "Assign Actionflow Variable" node.

### Nodes

Nodes include database operations, AI execution, permission changes, API calls, code blocks, loop, and conditionals.

### Triggers

Trigger types: database change, scheduled, and callback.

---

## How to Use

1. **Create & Configure Nodes:** Add and arrange nodes for your business logic, including conditional branches.
2. **Configure Triggers:** Configure triggers to start the Actionflow.
3. **Set Permissions:** Define which user roles can execute the Actionflow.
4. **Use the Actionflow:** Configure a "Request – Actionflow" action on a component, or use the triggers you have set up to execute the Actionflow.

---

## How to Configure

### 1. Create an Actionflow

- Click "Create" to add a new Actionflow.
- Add and arrange nodes, including conditional branches.
- Define input parameters (for external data) and output parameters (for results).
- Choose execution mode (sync/async). AI flows require async.
- Declare flow variables for intermediate results.

### 2. Action Nodes

Add nodes by clicking "+". Supported types:

- **Database Operations:** Query, insert, update, delete.
- **API Calls:** Execute pre-configured APIs and bind responses.
- **AI Execution:** Run an AI agent configured in Momen.
- **Set Actionflow Variable:** Assign values to Actionflow variables.
- **Permission Management:** Grant or revoke user roles.
- **Conditional Branch:** Add decision logic (branches are evaluated left to right).
- **Custom Code:** Execute code blocks.

### 3. Triggers

Supported triggers:

- **Scheduled:** Set periodic execution (supports Cron).
- **Database Change:** [See details](db-trigger.md).
- **Webhook:** Trigger via webhooks (requires callback body configuration).


## Log Management

View execution logs in **Editor > Logs**.  
Search by Actionflow ID for troubleshooting.

---

## Notes

- Automation requires purchasing execution credits. Free quotas depend on project version; buy more via "Project Details > Automation Execution Credits."
- Ensure all nodes are configured, saved, and published before setting up triggers.
- Actionflows do not enforce strict type checking—variables of different types can be assigned.
- Before deleting a node, update or remove any downstream nodes using its output.
- Formula support in Actionflows is currently limited.
