---
description: >-
  Utilize Momen's API feature to effortlessly connect external data sources and
  applications.
---

# API

An API is a bridge between different applications; when an application needs to connect with external data, it is often achieved through an API.

Before starting configuration in Momen, ensure you understand the basic components of an API: Method, Domain, Path, Headers, Query Parameters, and Body. For detailed information about APIs, please refer to online resources.

Next, we will use the example of "retrieving data from Airtable" to introduce the complete configuration process.

## Add API

Open the "API" at the top left of the Editor and click "Add".

![](../.gitbook/assets/data/data_api0.png)

## Edit API

### 1. Select "Operation Type"

This step determines whether the API is used as a data source or an action:

* **Query**: Use the API as a **data source** for components (List, Page, etc.).
* **Mutation**: Use the API as an **action**.

In this example, the API is directly used as a data source for a list, so "Query" is selected.

![](../.gitbook/assets/data/data_api1.png)

### 2. Set the Request Format

In this step, you need to determine the format of the API request and response. Momen provides two configuration methods:

* Automatically parse the format by successfully sending a request (recommended).
* Manually configure all content by yourself.

#### Automatically Parse the Format

First, open debug mode.

![](../.gitbook/assets/data/data_api2.png)

Then, complete the request method, domain, path, body, etc., and click "Send."

![](../.gitbook/assets/data/data_api3.png)

After a successful send, click "Advanced" to confirm whether the format is correct.

![](../.gitbook/assets/data/data_api4.png)

Confirm the "Request Parameters" and "Response Parameters" in sequence. If you are updating the API configuration, there will be both new and old configurations, requiring a merge operation.

![](../.gitbook/assets/data/data_api5.png)

Once everything is confirmed, you will have the request and response format of the API, and you can proceed to use it.

![](../.gitbook/assets/data/data_api6.png)

### Setting Default Values

Once the structure of the request and response is determined, you can start setting default values for certain fields. After setting them, these fields no longer need to be assigned values when sending requests, making subsequent request configurations simpler.

At the same time, since the default values are stored on the backend, they are very secure and can also be used to store sensitive information, such as the `Authorization` in this example.

![](../.gitbook/assets/image%20(26).png)

## Use API

### Use as a Data Source

In the data source of List, Select View, and Page, you can select a data source type API.

![](../.gitbook/assets/data/data_api7.png)

During configuration, you need to specify which field in the API response is of list type and the required input parameters. Since the `Authorization` has already been set with a default value, it does not need to be filled in.

![](../.gitbook/assets/image%20(27).png)

### Use as an Action

If you have configured a "Mutation" type API, you can find it under the "Request" category in the action list under "API."

![](../.gitbook/assets/data/data_api9.png)
