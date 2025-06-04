---
description: >-
  Implement complex logic by adding, deleting, modifying, querying data, writing
  JavaScript code blocks, calling APIs, and conditional branching.
---

# Actionflow

## Introduction

Actionflow is Momen's tool for building custom workflows and automations. It helps achieve complex business logic and boosts reusability. Also, because they operate entirely on the server, security is guaranteed.

- Free projects: 1 Actionflow
- Basic and above: Unlimited Actionflows

## Use Cases

Actionflows are ideal for automating complex data processing and business logic, such as:

- **E-commerce Loyalty Program:** Automatically upgrade users to "Gold Member" when their total purchases exceed $10,000.
- **Order Reminders:** Send notifications every 24 hours for unpaid orders.
- **Payment Processing:** After a successful payment, update inventory and notify the user.

## Actionflow Structure

### Attributes

- **ID:** A unique identifier. You can paste it directly into the log service search bar to view its runtime information and errors. See: [Log Service](https://docs.momen.app/release-and-growth/log_service) for details.
- **Version:** Each save creates a new version.  
  - **Preview update:** Takes effect on both the backend and frontend.  
  - **Backend update:** Takes effect only on the backend. If only the backend is updated, the frontend still runs the old version.
- **Execution Method:**  
  - **Synchronous:** Actionflows execute sequentially, with each Actionflow waiting for the previous one to complete before starting.  
  - **Asynchronous:** Actionflows can run independently and concurrently without blocking the main execution thread.
- **Others:**  

| Feature          | Synchronous                     | Asynchronous                    |
|------------------|----------------------------------|----------------------------------|
| **Execution**    | Tasks execute sequentially.     | Tasks can execute concurrently or in parallel. |
| **Blocking**     | The Actionflow blocks and waits for each task to complete before proceeding. | The Actionflow does not block; it can continue with other tasks while a task runs in the background. |
| **Timeout Duration** | Entire flow: 15s (unlimited for paid projects). | Each node: 15s (unlimited for paid projects).  |
| **Error Handling** | All data changes to the database will be rolled back. | Database changes on the error node will be rolled back. |

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

Nodes include database operations, AI execution, permission changes, API calls, code blocks, loops, and conditionals.

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
- Define input parameters and output parameters (for results).
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

- Automation requires purchasing execution credits.
- Ensure all nodes are configured, saved, and published before setting up triggers.
- Formula support in Actionflows is currently limited.
