---
description: >-
  Momen provides developers with a one-stop solution. Through this tutorial, you will gain an in-depth understanding of how to efficiently perform data interactions and build powerful applications.
---

# Data Sources

Data is the foundation of all applications. To effectively address diverse data requirements across various scenarios, Momen applications seamlessly integrate with multiple data sources, encompassing databases, external APIs, and environmental data.

## Data Model and Database

Momen provides a powerful relational database that is flexible and offers excellent performance. See details: [Data Model and Database](https://docs.momen.com/data/data_model.html)

## API

External data sources are typically accessed via APIs. See details: [API](https://docs.momen.com/data/api.html)

## Environmental Data

This refers to data provided by the environment in which the program is running, mainly including the following categories:

* Null Types: Null, Empty Text, Empty Array.

* Time Types: Current time, date, and datetime.

* User Types: Logged in user data (automatically retrieved from the database, can be re-fetched using the "Refresh Login User Data" action), login status (boolean), user agent (browser/operating system information).

## Contextual Data

Mainly includes the following two types:

Action Result Data: Many action operations generate result data, which can be referenced by subsequent actions. For example, after calling the database "add data" action, the result of the addition will be returned; after calling an API action, the interface will return response data.

List Item Data: When a List View or Select View is bound to a data source, each list item has its corresponding data. This data can be used in various operations of the list item, such as displaying content, responding to user interactions, etc.

## Input Components

Momen provides various input components that can be used as data sources, including: Input, Data Selector, Image Picker, and Select View, etc. Please refer to the documentation of the relevant components for details.