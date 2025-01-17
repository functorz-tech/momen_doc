---
description: >-
  The log service improves system observability, allowing developers to quickly
  identify issues and enhance their development efficiency.
---

# Log Service

**Scope:** The log service aims to capture all key information within the system. Currently, the scope of log service ranges from actionflow, database access, ai, api, trigger, gateway, deployment and publishing to GraphQL related records.

**Storage Capacity:** The log service offers varying storage capacities based on the project version, measured in days:

* Free Plan: 1 day
* Basic Plan: 7 days
* Pro Plan: 30 days



## Access Log Service

1. Access the log service from the "Log Service" section on the project details page.

<figure><img src="../.gitbook/assets/log.png" alt=""><figcaption></figcaption></figure>

2. Utilize the following features for convenient log viewing:

* **Log Classification:** Quickly view logs by category.
* **Query Statement Settings:** Define time ranges and levels, and customize query syntax for precise log retrieval.
* **Bar Chart:** Visual representation of log statistics; click the chart to set time ranges.
* **Log Details:** Access detailed information; click on field values to add them to your query.

<figure><img src="../.gitbook/assets/20241031-175313.jpeg" alt=""><figcaption></figcaption></figure>

## Query Syntax

The log service offers efficient query syntax for flexible and rapid log searches.

1. **Keyword Query:** Enter a keyword to find logs containing that term.
   *   Example: To find all requests related to the "account" table:

       ```
       account
       ```
2.  **Field Query:** Specify field values for targeted queries.

    *   Example: To find logs where requestMethod is POST:

        ```
        requestMethod: POST
        ```

    For text fields, wildcards (\*) enable fuzzy searches.

    *   Example: To find logs with traceId including 20241024:

        ```
        traceId: 20241024*
        ```

    Numeric fields can support range queries.

    *   Example: To find logs with responseSize between 5000 and 10000:

        ```
        responseSize: [5000 to 10000]
        ```
3. **Combined Conditional Queries:** Use operators like 'and, or' to create complex queries.
   *   Example: To find all logs related to account with status 200:

       ```
       account and status: 200
       ```
4. **Multi-Level Queries:** For fields that exist at multiple levels, provide the complete path.
   *   Example: To find logs where the field query in requestBody contains mutation:

       ```
       requestBody.query: mutation*
       ```

## Log Classification Overview

#### Actionflow

The Log Service records the running status of each node in the actionflow in detail:

* Each node generates two logs: a log when the node starts and a log when the node ends

* A log is also generated when Context.log() is called within a code block

* Explanation of node log fields

| <div style="width:40px">Field</div> | <div style="width:160px;text-align:left">Description</div>             |
|:------|:-------------------|
| traceId  	| Used for event tracking query                 	|
| nodeType 	| Type of the node                       	|
| nodeName 	| Name of the node                         	|
| version  	| Version of the actionflow                       	|
| input    	| Input of the node, including all referenceable data 	|
| output    | Result of the node's execution	|
| startAt  	| Start time of the node                  	|
| endAt  	| End time of the node                  	|

* Types of nodes in logs

| <div style="width:40px">Node</div> | <div style="width:160px;text-align:left">Type in Logs</div> |
|:-----|:-------------------|
| Input	   | FLOW_START                |
| Query Record | QUERY_RECORD                       	|
| Update Record 	| UPDATE_RECORD                        	|
| Insert Record  | INSERT_RECORD                	|
| Delete Record  | DELETE_RECORD	|
| Code Block   | CUSTUM_CODE	|
| Add Role  | ADD_ROLE_TO_ACCOUNT             	|
| Remove Role  | REMOVE_ROLE_FROM_ACCOUN           	|
| Update Global Variables 	| UPDATE_GLOBAL_VARIABLES         	|
| Branch Start 	| BRANCH_SEPARATION         	|
| Branch End 	| BRANCH_MERGE         	|

#### Database Operations

This category records all operations (add, delete, modify) on the database, including the following:

1. Trigger method (frontend request, actionflow, AI, etc.)

2. Detailed content of the operation

#### AI

Records the complete process of AI conversations, including model type, message details, etc.

#### API

Records details of API requests, including the request Header, Body, etc.

#### Trigger

Records the time, type, and other information of trigger activations.

#### Gateway

A gateway is an intermediate device connecting different networks, responsible for forwarding data to enable smooth communication between different systems. On the Momen platform, the following requests pass through the gateway:
1. Requests sent from the frontend page to the backend;
2. Requests received through Callback;

Therefore, logs in this category include most requests, including database CRUD operations, API, AI, etc. However, due to system limitations, **only outgoing requests can be viewed in the gateway logs, and the results of the requests cannot be viewed**.

<img src="../.gitbook/assets/截屏2024-10-31 18.11.48.png"" width="100%">

#### Deployment and Release

Records details of each backend release, pre-release, and release.

#### GraphQL

The backend API of Momen uses GraphQL query language, and all backend requests can be seen in this category. For more information about GraphQL, you can visit its official website: [GraphQL | A query language for your API](https://graphql.org/)
