---
description: >-
  Add, update, or delete single or multiple records in a data table.
---

# Request

Request actions enable direct operations on the database, including adding, updating, deleting records, and executing pre-defined actionflows. Momen supports three types of request actions: data mutation, batch mutation, and actionflow.

**Request action includes:**
1. Data mutation
2. Batch mutation
3. Actionflow

## 1. Data mutation 

### Introduction
It is used to perform the adding, updating, and deleting of records in the database.
1. Insert: Add data to the database.
   1. Single insert
   2. List Mutation
2. Update: Update the data in the database that meets the filtering criteria.
3. Delete: Delete data in the database that meets the filter criteria.

### Note

1. **List mutation**  
When you choose to add data, you can enable the "List Mutation" for batch adding. It needs to identify a data source with multiple data.

2. **On conflict**  
When adding or updating data, you can configure actions when data conflicts occur.  
If a data field has been constrained to be unique, you can configure whether you want to keep updating the conflicting data (by setting the constraint action type to Update) or take no action (by setting the constraint action type to None).

3. **On success/failure**  
On success/failure refers to the actions triggered after a data mutation action is successfully or unsuccessfully executed. It plays a crucial role in real-world applications. Typically, after modifying table data, you can configure Show Toast, Refresh, or Redirect actions to notify users of the operation. Additionally, you can chain subsequent actions, such as another data mutation or set conditional branches to execute corresponding actions, depending on the specific scenario.

4. **Results data**  
Upon successful execution, result data is generated, which contains the newly added or updated record, including its ID and other details.

## 2. Batch mutation

### Introduction
Batch mutation is used to create a transaction consisting of multiple database operations.

### Note
1. Transaction Rollback: If any operation within the transaction fails, the entire transaction will be rolled back. For example, if three operations are configured and the third one fails, all preceding operations will be undone.
2. This action is suitable for scenarios requiring strict data integrity during complex modification processes.

## 3. [Actionflow](./actionflow/basics.md)

### Introduction
Executes a pre-configured actionflow to implement a sequence of actions or complex logic and events.

### Note
Result Data: If the actionflow has defined output parameters, the output will be available as result data for further use. For example, if the actionflow generates a random number between 0 and 100, and you want to use this number, first define an integer-type Page Variable on the page. Then, on success, add a Set Page Variable action to assign the output parameter to that page variable.