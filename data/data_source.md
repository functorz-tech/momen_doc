```description
The Momen platform provides developers with a one-stop solution. Through this tutorial, you will gain an in-depth understanding of how to efficiently perform data interactions and build powerful applications.
```
```keywords
Momen Development, Data Interaction, Database Development, Data Source Definition, Data Writing, Data Mutation, Data Settings, Data Validation
```
# Data Sources

Data is the core of applications. To meet the data needs of different scenarios, Momen applications support multiple data source integrations, including databases, external APIs, and environmental data.

## Data Model and Database

Momen provides a powerful relational database that is flexible and offers excellent performance. See details: [Database](https://docs.functorz.com/data/datamodel.html)

## API

When external data sources are needed, APIs are typically used. See details: [API](https://docs.functorz.com/data/api.html)

## Environmental Data

This refers to data provided by the environment in which the program is running, mainly including the following categories:

* Null Types: Null, Empty Text, Empty Array.

* Time Types: Current time, date, and datetime.

* User Types: Logged in user data (automatically retrieved from the database, can be re-fetched using the "Refresh Login User Data" action), login status (boolean), user agent (browser/operating system information).

## Contextual Data

Mainly includes the following two types:

Action Result Data: Many action operations generate result data, which can be referenced by subsequent actions. For example, after calling the database "add data" action, the result of the addition will be returned; after calling an API action, the interface will return response data.

List Item Data: When a List View or Select View is bound to a data source, each list item has its corresponding data. This data can be used in various operations of the list item, such as displaying content, responding to user interactions, etc.

## Components

Momen provides various input components that can be used as data sources, including: Input, Data Selector, Image Picker, and Select View, etc. Please refer to the documentation of the relevant components for details.