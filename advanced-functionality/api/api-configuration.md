---
description: >-
  Learn how to configure and use APIs in Momen. Follow our guide to add, debug,
  and leverage APIs effectively in your projects, whether you're querying data
  or making modifications.
---

# API Configuration

Before diving into this article, ensure you're familiar with "API Fundamentals" and can successfully debug APIs in tools like Postman. Momen currently only supports HTTP-based APIs with an 'application/JSON' request format.

### API Configuration Adding Entrance

To start configuring your APIs in Momen, follow these two steps:

1. Click the \[Third-Party API] button in the upper-left corner of the editor to enter the interface for adding APIs.
2. Click \[Add] to name your API and add a new one.

<figure><img src="../../.gitbook/assets/1 (56).png" alt="API Configuration Adding Entrance"><figcaption></figcaption></figure>

### Debugging API Configuration

After adding your API, follow these steps to configure and debug it effectively:

1. Select the operation type for the API, whether it's a query or modification.
2. Click the "Debug" button to configure the API. The debugging process is similar to Postman.

<figure><img src="../../.gitbook/assets/2 (49).png" alt="Debugging API Configuration"><figcaption></figcaption></figure>

### GET Request

Take the Configure Request Weather API interface as an example, interface documentation: [https://rapidapi.com/apininjas/api/weather-by-api-ninjas/](https://rapidapi.com/apininjas/api/weather-by-api-ninjas/)

To invoke this API correctly, you need to first navigate to the pricing page via the interface documentation at: [https://rapidapi.com/apininjas/api/weather-by-api-ninjas/pricing](https://rapidapi.com/apininjas/api/weather-by-api-ninjas/pricing), and then subscribe to the basic edition.

<figure><img src="../../.gitbook/assets/3 (48).png" alt="Navigate to the pricing page to invoke API."><figcaption></figcaption></figure>

When configuring in Momen, choose the request method as GET, copy the request address to the address bar according to the interface document, configure the corresponding parameter name and parameter content in the QUERY/HEADER of the request according to the interface document, and click Send directly after the configuration is completed, you can see the response content.&#x20;

If the content returned by the API is text or numeric data, after successful debugging, directly click \[Save Config].

<figure><img src="../../.gitbook/assets/4 (44).png" alt="Save the configuration after successful debugging."><figcaption></figcaption></figure>

### POST Requests

Currently Momen only supports APIs where the BODY is of JSON type.

Taking the configuration of Chat GPT-4 for implementing the chat interface as an example, here is the API documentation: [https://platform.openai.com/docs/api-reference/chat](https://platform.openai.com/docs/api-reference/chat). If you want to use this interface properly, you need to register and purchase the corresponding account to obtain Authorization.

When configuring in Momen, select the request method as POST, copy the request address to the address bar according to the interface document, configure the corresponding request body in JSON format and other parameters according to the interface document in the BODY/HEADER of the request, and then click Send directly to see the response content.

<figure><img src="../../.gitbook/assets/5 (36).png" alt="View response content after completing the configuration."><figcaption></figcaption></figure>

#### Media Resource Parsing

If your API returns image or media data as a URL string, follow these steps:

1. Click the \[Advanced] button in the upper right corner of the configuration interface to enter advanced settings.

<figure><img src="../../.gitbook/assets/6 (35).png" alt="Quotation marks wrap the String, and the URL String is below it."><figcaption></figcaption></figure>

* Click to the "Configuration-Response Parameters" interface, you can see the right side of the return value is parsed as JSON format, you can convert the return value to TEXT format if it is a single picture/video directly parsed as "URL Media Encode".

<figure><img src="../../.gitbook/assets/7 (26).png" alt="Parsed a single picture/video to &#x22;URL Media Encode&#x22;."><figcaption></figcaption></figure>

* When the request is configured successfully, if the image/media data is a string array object of URL, "image" is a string array object. If you want to use this image in Momen, you need to convert the format of this "image" field to "JSON" string encoding. "field needs to be converted to "JSON" string encoding.
* The image/media data is an array of string types, it is not possible to get the corresponding data through direct configuration, you can realize the data interaction through \[Behavioral Flow Call API].

### Calling the Configured API

#### Calling the Query API

Query: If you select the API operation type as Query, it means that your purpose is to query the API provider for single or multiple data. When the API operation type is Query, you can select/add this API request in the remote data of the page's list class component/content in Momen.

<figure><img src="../../.gitbook/assets/8 (24).png" alt="Configuring the API on the page." width="300"><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/9 (24).png" alt="Configuring the API in List Type Components." width="296"><figcaption></figcaption></figure>

#### Displaying Data from the "Query" API

* Displaying Single Data

Take querying the weather conditions of the day as an example. The data returned by the API contains several fields, such as Tem (real-time temperature), Tem1 (high temperature)

1. Add one/multiple page data to Momen's page, with data type based on the returned data.
2. Add an API request for "third-party API data" to Momen's page, select the corresponding API, and use the \[Set Page Data] behavior to assign the result of the API request (in-page data - remote data - API) to the page data when it succeeds.

* Displaying Multiple Data

If the API returns more than one piece of data, then you need to use the "List" component to configure the API request and display the data. After the configuration is complete, you can directly enter the "List" component and drag in the corresponding components to utilize the data within the component for data binding.

#### Calling the Modify API

Modify: If you select the API operation type as Modify, it means that your purpose is to query or modify the API provider's data through interactive behavior. <mark style="color:red;">An API request can be added to the interaction behavior of a Momen component only if the API operation type is "Modify".</mark>

<figure><img src="../../.gitbook/assets/10 (21).png" alt="Add an API request under the Modify operation type." width="375"><figcaption></figcaption></figure>

* Querying (Reading) Single/Multiple Data

Configure the third-party API to query data through the click-time behavior. In order to display/use the query result on the page, you also need to add the corresponding page data to bind the query result when the API executes successfully.

* Modifying Third-Party Data

Configure the corresponding third-party API in the interaction behavior of the component, and configure the content you need to modify in the API, the operation method is similar to that of “Data Input and Modification".

\
If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
