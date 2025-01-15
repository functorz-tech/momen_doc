---
description: >-
  Learn how the Momen queries and modifies database data through page data sources.
---

# Data Query and Modification

In the [Data Source](https://docs.momen.app/data/data_source) section, the origins of data are introduced in detail. This document will explore how to fully utilize data sources through query and modification (focusing on databases and APIs).

## Data Query
On pages and components, you can query database data or obtain external data through APIs. The following example of a **page data source** explains how to query and use data (for component data sources, please refer to [List](https://docs.momen.app/buildui/component-list), [Select View](https://docs.momen.app/buildui/select-view), and other documents).

### 1. Add Data Source
Open a page, go to "Data," and "Add Data Source."

![](<../.gitbook/assets/data/data_usage0.png>)

### 2. Set Filters
If obtaining data from a database, you need to determine the following:

**Tables** 
You can select all system tables and developer-created tables.

**Request Type**
Two types are available.
* Query: Obtain data once when the page loads (suitable for most scenarios).
* Subscription: Obtain data once when the page loads, and when data in the database meeting the condition changes, it will be automatically pushed to the page (suitable for automatically obtaining the latest chat records and other specific scenarios).

**Data Limit**
Refers to the maximum number of data entries to obtain, ranging from 1 to unlimited.
* **If it is 1, a single record entry is returned.**
* **If it is greater than 1, an array is returned. To retrieve a specific data entry, you can use the GET_ITEM formula (see details: [Formula](https://docs.momen.app/data/formula)).**

**Data Filters**
Multiple filters can be configured.
* Conditional: The condition for filtering; the filter that meets the condition will take effect.
* Filter: Refers to obtaining data that meets the filter condition when extracting data from the database.
* Sort: Choose to sort based on a specific field. If vector storage is enabled for the field, vector sorting can be performed (see details: [Data Model and Database](https://docs.momen.app/data/data_model)).
* Deduplication: Remove duplicate data; multiple deduplication fields can be selected.

![](<../.gitbook/assets/data/data_usage1.png>)

### 3. Use Queried Data
The queried data can be used in the "Page Data" and "Data Source" sections of the data selection menu.

![](<../.gitbook/assets/data/data_usage2.png>)

## Data Modification
The system provides comprehensive operations for data addition, deletion, and modification. Before performing these operations, please carefully check and confirm the filter conditions to avoid unexpected situations (e.g., deleting all data, updating all data to the same entry, etc.).

![](<../.gitbook/assets/data/data_usage3.png>)

![](<../.gitbook/assets/data/data_usage4.png>)
