---
description: >-
  From HTTP and REST fundamentals to documentation reading and debugging, gain
  essential insights for seamless software integration.
---

# API Fundamentals

### Introduction

Welcome to the API chapter! This tutorial will introduce you to the Application Programming Interface (API). From understanding HTTP and REST to navigating documentation and debugging, you'll begin a comprehensive API experience.

{% hint style="info" %}
Note

API is a general-purpose topic in software development, and there are numerous tutorials available online. This is a basic introduction to get you started. If you require more in-depth information, you can explore additional tutorials on the internet.
{% endhint %}

### What is API

API, which stands for Application Programming Interface, is a crucial tool defined by software developers following specific interface rules, typically relying on HTTP and REST protocols. It acts as a bridge between various software applications, enabling seamless data interaction between them. For instance, consider a weather bureau's software that holds daily weather data. The weather app on your cell phone communicates with the weather bureau through an API, fetching and presenting the latest weather data on your device.

### Recommended Third-Party API Collections

A plethora of API resources is available, catering to diverse business needs. You can explore APIs that suit your requirements from these recommended API hubs:

* Rapid：[https://rapidapi.com/](https://rapidapi.com/)
* API List：[https://apilist.fun/](https://apilist.fun/)

### How to Read API Interface Documentation

APIs typically come with interface documentation, which developers should thoroughly review. These documents generally comprise the following sections, guiding developers in understanding the API and using it effectively. Before utilizing an API, it's crucial to read the interface documentation carefully and configure it according to the specified requirements.

{% hint style="info" %}
Tips:

APIs often require registration with the API provider's developer account to access the API (application, app secret, etc.) and determine the allowed number of calls.
{% endhint %}

<figure><img src="../../.gitbook/assets/1 (1).PNG" alt="How to read API interface documentation."><figcaption></figcaption></figure>

#### Interface Description

This section provides a brief overview of the interface's purpose and functionality. It succinctly explains the logic behind the interface, such as whether it's used for sending messages or checking the weather.

#### Request Methods

APIs commonly support two primary request methods: GET and POST, explained as follows:

* GET: Used to query data from third-party software.
* POST: Used for querying, modifying, or deleting data from the third-party software.

#### Interface Address

The interface address is essentially a URL that typically begins with HTTP or HTTPS. When you make API calls, you send your requests and parameters to this URL, which then returns the relevant results.

#### Request Parameters

Common request parameters include path parameters (PATH/Params), request headers (Header parameters), and request body (Body parameters). These parameters are typically required when sending user requests to third-party software. They include details like "identification information" and "requested content," enabling the third-party software to respond accordingly.\


* PATH/Params

<figure><img src="../../.gitbook/assets/2 (40).png" alt="Path parameters (PATH/Params)"><figcaption></figcaption></figure>

* Header parameter:

<figure><img src="../../.gitbook/assets/3 (33).png" alt="Request headers (Header parameters)"><figcaption></figcaption></figure>

* Request body (Body parameter): A common request body is a JSON object, such as the contents of the pair {} below

<figure><img src="../../.gitbook/assets/4 (31).png" alt="Request body (Body parameters)"><figcaption></figcaption></figure>

#### Response Content

Response content refers to the data returned by the third-party software in response to a request. Understanding the content structure is essential to extract specific data from the response. JSON is a common format for response content.

<figure><img src="../../.gitbook/assets/5 (24).png" alt="Chat completions response format."><figcaption></figcaption></figure>

#### Response Status Codes

Response status codes indicate the outcome of a request. While the common responses are outlined below, many third-party APIs define their own status codes and provide explanations for each.\
HTTP Status Codes are three-digit codes returned by servers to inform the client about the status of their request. They are grouped into five classes:

1. 1xx (Informational)

* 100 Continue: The server has received the request headers, and the client should proceed to send the request body.
* 101 Switching Protocols: The requester has asked the server to switch protocols.

2. 2xx (Successful)

Indicates that the client’s request was successfully received, understood, and accepted.

* 200 OK: Standard response for successful HTTP requests.
* 201 Created: The request has been fulfilled and has resulted in one or more new resources being created.
* 204 No Content: The server has successfully fulfilled the request, and there is no additional content to send in the response payload body.

3. 3xx (Redirection)

Indicates that further action needs to be taken by the user agent to fulfill the request.

* 300 Multiple Choices: There are multiple options that the client may follow.
* 301 Moved Permanently: The URL of the requested resource has been changed permanently.
* 302 Found: The requested resource resides temporarily under a different URL.

4. 4xx (Client Error)

Represents errors that the client seems to have made.

* 400 Bad Request: The server cannot or will not process the request due to something perceived to be a client error.
* 401 Unauthorized: The request lacks valid authentication credentials for the target resource.
* 403 Forbidden: The server understood the request, but it refuses to authorize it.
* 404 Not Found: The requested resource could not be found but may be available again in the future.
* 429 Too Many Requests: The user has sent too many requests in a given amount of time ("rate limiting").

5. 5xx (Server Error)

Indicates that the server failed to fulfill an apparently valid request.

* 500 Internal Server Error: A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
* 502 Bad Gateway: The server was acting as a gateway or proxy and received an invalid response from the upstream server.
* 503 Service Unavailable: The server is currently unavailable (because it is overloaded or down for maintenance).
* 504 Gateway Timeout: The server was acting as a gateway or proxy and did not receive a timely response from the upstream server or some other auxiliary server it needed to access.

These status codes are defined by the HTTP protocol and are standardized, but there are also custom status codes that can be used by different web services. Always refer to the documentation of the specific API or web service you are working with for the most accurate information on response status codes.

### How to Debug API

Debugging an API involves conducting a test call before actual usage to ensure that the API call method and the returned content align with your expectations.

#### Debugging Tool Postman

API providers often offer their own debugging tools. For instance, Rapid's API Supermarket includes its debugging tool within the interface documentation.

"We recommend using the Postman debugging tool for API testing. Click this link: [Postman | Download Postman App](https://www.postman.com/downloads/) to go to the official Postman download page. Choose the appropriate version (operating system and 32-bit/64-bit) and install. In Postman, follow the instructions in the API documentation to select the 'Request Method', copy and paste the 'Request URL', input the 'Request Parameters', and click the 'Send' button to make the request. You can then see the 'Response Content' below.

If the returned content meets your expectations, congratulations on a successful debug. You can proceed with debugging configurations in Momen and complete your development requirements.

If the debugging fails, please read the API documentation carefully. Check for any configuration errors, reconfigure, or consult the API provider."

<figure><img src="../../.gitbook/assets/6 (24).png" alt="Debugging Tool Postman"><figcaption></figcaption></figure>



### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
