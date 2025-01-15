---
description: >-
  Learn how to use parameters in Momen, including path, query and input parameters.
---

An application consists of different parts, which involves data transfer between these parts. For example, between pages, components, and action flows. In Momen, data transfer is achieved through parameters.

# Path and Query Parameters: Data Transfer Between Pages

Both path parameters and query parameters are used for data transfer through the URL of a page, but they belong to different parts of the URL.

For example, we access a blog post on the Momen official website through the following URL:

<https://momen.app/article/content/how-to-build-an-ai-needs-analysis-bot?utm_source=google>

This can be broken down into different parts:

* **https://momen.app**: The protocol and domain of the website

* **/article**: The path of the blog page

* **/content/how-to-build-an-ai-needs-analysis-bot**: **Path parameter,** in this example, the value of the path parameter 'content' is 'how-to-build-an-ai-needs-analysis-bot'

* **?utm_source=google**: **Query parameter,** in this example, the value of the query parameter 'utm_source' is 'google'

As can be seen, **path parameters directly change the URL of the page, while query parameters only change the parameters of the webpage.**

## Application Scenarios

* Query Parameters

Query parameters are generally used for parameter transfer.

* Path Parameters

Pages with SEO requirements use path parameters (see: [SEO](https://docs.momen.app/release-and-growth/seo)). In the example above, if the value of 'blog' is passed using query parameters, crawlers will recognize all blog posts as a single page, making them unsearchable in search engines and reducing the website's SEO performance. However, with path parameters, each article is recognized as a separate page by crawlers, making them searchable.

## Specific Configuration

The configuration and usage of both types of data are the same; they need to be declared first, then assigned, and can also be referenced. The following example uses the blog section of the Momen official website to explain the specific usage process.

### Data Declaration

Both types of parameters are added to the page receiving the data. For example, in the blog page:
* Define the path parameter 'blog' as a filter condition for remote data to obtain blog articles. This parameter is required.
* Define multiple query parameters to pass user information. These parameters can be empty.

![](<../.gitbook/assets/data/data_parameter0.png>)

### Assignment

Assign values to them in the action that navigates to the page. For example, on the search results page, in the action that navigates to the blog page, assign the searched blog id to the path parameter 'blog'.

![](<../.gitbook/assets/data/data_parameter1.png>)

### Reference

Path parameters and query parameters on the page can be referenced within the current page, usually for configuring filter conditions. For example, on the blog page, use the path parameter 'blog' as a filter to obtain blog articles in remote data.

![](<../.gitbook/assets/data/data_parameter2.png>)

# Action Input: Data Transfer in Actions

Multiple actions require input parameter configuration, such as Actionflow, AI actions, etc. Similar to variables, the use of action input is divided into three steps: declaration, reference, and assignment.

1. Declaration: Declare within the action configuration

2. Reference: Can be referenced within the action configuration

![](<../.gitbook/assets/data/data_parameter3.png>)

* Assignment: Assign values when calling the action

![](<../.gitbook/assets/data/data_parameter4.png>)
