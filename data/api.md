---
description: >-
  Utilize Momen's API feature to effortlessly connect external data sources and
  applications.
---

# API

An API is a bridge between different applications. When an application needs to connect with external data, it is typically achieved through an API.

Before configuring APIs in Momen, ensure you understand the basic components of an API: Method, Domain, Path, Headers, Query Parameters, and Body. For more details about APIs, refer to online resources.

This guide uses "retrieving data from Airtable" as an example to introduce the complete configuration process.

## Add API

Open the "API" section at the top left of the Editor and click "Add".

![Add API in Momen](../.gitbook/assets/data/data_api0.png)

## Edit API

### 1. Select "Operation Type"

This step determines whether the API is used as a data source or an action:

- **Query:** Use the API as a **data source** for components (List, Page, etc.).
- **Mutation:** Use the API as an **action**.

In this example, the API is used as a data source for a list, so "Query" is selected.

![Select operation type](../.gitbook/assets/data/data_api1.png)

### 2. Set the Request Format

Determine the format of the API request and response. Momen provides two configuration methods:

- Automatically parse the format by successfully sending a request (recommended)
- Manually configure all content

#### Automatically Parse the Format

First, open debug mode.

![Open debug mode](../.gitbook/assets/data/data_api2.png)

Then, complete the request method, domain, path, body, etc., and click "Send".

![Send API request](../.gitbook/assets/data/data_api3.png)

After a successful send, click "Advanced" to confirm whether the format is correct.

![Advanced format confirmation](../.gitbook/assets/data/data_api4.png)

Confirm the "Request Parameters" and "Response Parameters" in sequence. If you are updating the API configuration, both new and old configurations may exist, requiring a merge.

![Request and response parameter confirmation](../.gitbook/assets/data/data_api5.png)

Once confirmed, you will have the request and response format of the API and can proceed to use it.

![API format confirmed](../.gitbook/assets/data/data_api6.png)

### Setting Default Values

After determining the structure of the request and response, you can set default values for certain fields. These fields will not require values when sending requests, simplifying subsequent configurations.

Since default values are stored on the backend, they are secure and suitable for sensitive information, such as `Authorization` in this example.

![Set default values for API fields](../.gitbook/assets/image%20(26).png)


## Use API

### Use as a Data Source

In the data source settings for List, Select View, and Page, you can select an API as the data source.

![Select API as data source](../.gitbook/assets/data/data_api7.png)

During configuration, specify which field in the API response is a list type and the required input parameters. Since `Authorization` has a default value, it does not need to be filled in.

![Configure list field and parameters](../.gitbook/assets/image%20(27).png)


### Use as an Action

If you have configured a "Mutation" type API, you can find it under the "Request" category in the action list under "API".

![Use API as an action](../.gitbook/assets/data/data_api9.png)
