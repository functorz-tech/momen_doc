---
description: >-
  Utilize Momen's API feature to effortlessly connect external data sources and applications. This article provides a detailed explanation of the API configuration process, including selecting the operation type, setting the request format (automatic parsing recommended), and how to use the API as a data source in components like lists and pages, or for data modification in actions. The example of retrieving data from Mingdao Cloud is used for illustration.
---

# API
An API is a bridge between different applications; when an application needs to connect with external data, it is often achieved through an API.

Before starting configuration in Momen, ensure you understand the basic components of an API: Method, Domain, Path, Headers, Query Parameters, and Body. For detailed information about APIs, please refer to online resources.

Next, we will use the example of "retrieving data from Mingdao Cloud" to introduce the complete configuration process.

## Add API

Open the "API" at the top left of the Editor and "Add Configuration."

<img src="../.gitbook/assets/data/data_api0.png">

## Edit API

### 1. Select "Operation Type"

This step determines whether the API is used as a data source or an action:

* Query: Use the API as a **data source** for components (List, Page, etc.)

* Mutation: Use the API as an **action**

In this example, the API is directly used as a data source for a list, so "Query" is selected.

<img src="../.gitbook/assets/data/data_api1.png">

### 2. Set the Request Format

In this step, you need to determine the format of the API request and response. Momen provides two configuration methods:

* Automatically parse the format by successfully sending a request (recommended)

* Manually configure all content by the developer

#### Automatically Parse the Format

First, open debug.

<img src="../.gitbook/assets/data/data_api2.png">

Then, complete the request method, domain, path, body, etc., and click "Send."

<img src="../.gitbook/assets/data/data_api3.png">

After a successful send, click "Advanced" to confirm whether the format is correct.

<img src="../.gitbook/assets/data/data_api4.png">

Confirm the "Request Parameters" and "Response Parameters" in sequence. If you are updating the API configuration, there will be both new and old configurations, requiring a merge operation.

<img src="../.gitbook/assets/data/data_api5.png">

Once everything is confirmed, you will have the request and response format of the API, and you can proceed to use it.

<img src="../.gitbook/assets/data/data_api6.png">

## Use API

* Use as a Data Source

In the data source of List, Select View, and Page, you can select a data source type API.

<img src="../.gitbook/assets/data/data_api7.png">

During configuration, you need to specify which field in the API response is of list type and the required input parameters.

<img src="../.gitbook/assets/data/data_api8.png">

* Use as an Action

If you have configured a "Mutation" type API, you can find it under the "Request" category in the action list under "API."

<img src="../.gitbook/assets/data/data_api9.png">