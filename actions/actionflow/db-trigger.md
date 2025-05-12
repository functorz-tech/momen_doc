---
description: >-
  This feature triggers Actionflows when data changes (insert, update, or
  delete), enhancing automation within the project.
---

# Database Trigger

## Introduction

This feature triggers Actionflows when data changes (insert, update, or delete), enhancing automation within the project.

Common use cases include:

* Automatically upgrading to VIP when a user's payment exceeds a specified amount
* Automatically sending a notification when an order is completed
* Automatically generating an operation record when user points change, for easier tracking

## Action Configuration Guide

Here’s how to set it up using an example: When a user’s payment exceeds $1000, the system will automatically upgrade them to VIP.

1. **Add Actionflow**
   * Set the input parameter `account_id`.
   * Add a "Get Payment mount" node to calculate the total payment for the user.
   * Add an "Update account" node to update the user to "VIP."

<figure><img src="../../.gitbook/assets/截屏2024-11-06 12.30.44.png" alt="add actionflow"><figcaption></figcaption></figure>

2. **Add Trigger**

On the actionflow right-sider, under trigger section, add a trigger of database change. It can only be added after the Actionflow is saved.

<figure><img src="../../.gitbook/assets/AgdIHZO4bG.png" alt="add trigger"><figcaption></figcaption></figure>

3. **Select Operation Type and Data Table**\
   There are 4 types of supported operations:

<figure><img src="../../.gitbook/assets/20241106-135707.png" alt="Select Operation Type and Data Table"><figcaption></figcaption></figure>

* On Data Insert
* On Data Update
* On Data Delete
* On Data Insert or Update

4. **Set Conditions and Actionflow Parameters**

Triggers allow access to both the previous and updated data values. Under Configure Conditions for Updated Data section, you can choose either data after update or data before update to design your trigger logic.

<figure><img src="../../.gitbook/assets/截屏2024-11-06 12.33.29.png" alt="Set Conditions and Actionflow Parameters"><figcaption></figcaption></figure>

## View Trigger History

View the history of triggers in the log system.

## Quota and Purchase Limits

Automated actionflows (triggered by scheduled tasks or database changes) have usage limits:

* **Free Tier** (resets monthly):
  * Free plan: 1000 executions/month
  * Basic plan: 10000 executions/month
  * Pro plan: 50000 executions/month
* **Paid Option** (valid indefinitely):
  * Cost: 10000 executions for $ 10&;

## Notes

1. **Cyclic Trigger Prevention**

The system ensures that each trigger in a chain is only triggered once. For example, in the sequence:\
Trigger A → Actionflow A → Trigger B → Actionflow B → Trigger A, the second Trigger A will not be triggered because it has already been executed.

2. **Avoid Concurrent Modifications to the Same Data**

Simultaneous updates from multiple Actionflows to the same data may cause deadlock.

3. **Data Imports May Trigger Multiple Events**

If an "On data insert" trigger is set on a table and data is imported, each imported record will trigger the flow separately.
