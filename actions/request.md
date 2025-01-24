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
It is used to perform the adding, updating and deleting records of the database.
1. Insert: Add data to the database.
   1. Single insert
   2. List Mutation
2. Update: Update the data in the database that meets the filtering criteria.
3. Delete: Deletes data in the database that meets the filter criteria.

### Note

1. **List mutation** <br>
When you choose to add data, you can enable the "List Mutation" for batch adding. It needs to identify a data source with multiple data.

2. **On conflict** <br>
When "Add" or "update" data, you can configure actions when data conflict.<br>
If a data filed has been constrained to unique, you can configure whether you want to keep updating the conflict data (by setting the constraint action type to Update) or takes no action (by setting the constraint action type to None).

3. **On success/failure** <br>
On success/failure refers to the actions triggered after an action (namely data mutation action) is/not successfully executed. It plays a crucial role in real-world applications. Typically, after modifying table data, you can configure Show Toast, Refresh, or Redirect actions to notify users of the operation. Additionally, you can chain subsequent actions, such as another data mutation or set conditional branches to execute corresponding actions, depending on the specific scenario.

4. **Results data** <br>
Upon successful execution, result data is generated, which contains the newly added or updated record, including its ID and other details.

## 2. Batch mutation

### Introduction
Batch mutation is used to create a transaction consisting of multiple database operations.

### Note
1. Transaction Rollback: If any operation within the transaction fails, the entire transaction will be rolled back. For example, if three operations are configured and the third one fails, all preceding operations will be undone.
2. This action is suitable for scenarios requiring strict data integrity during complex modification processes.

## 3. [Actionflow](./actionflow/basics.md)

### Introduction
Executes a pre-configured actionflow to implement a sequence of actions or complex logics and events.

### Note
Result Data: If the actionflow has defined output parameters, the output will be available as result data for further use. For example, if the actionflow generates a random number between 0 and 100, and you want to use this number, first define an integer-type Page Variable on the page. Then, on success, add a Set Page Variable action to assign the output parameter to that page variable.