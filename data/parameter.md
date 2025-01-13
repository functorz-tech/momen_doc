```description
Learn how to use parameters in Momen, including the differences and application scenarios of path parameters and query parameters, and how to configure input parameters in actions to achieve data transfer between different components and pages.
```
```keywords
Parameter, Query Parameter, Path Parameter, URL Parameter, URL Path, Page Navigation, Data Transfer
```

# Parameters
An application consists of different parts, which involves data transfer between these parts. For example, between pages, components, and action flows. In Momen, data transfer is achieved through parameters.

# Path Parameters and Query Parameters: Data Transfer Between Pages

Both path parameters and query parameters are used for data transfer through the URL of a page, but they belong to different parts of the URL.

For example, we access a blog post on the Momen official website through the following URL:

https://www.functorz.com/blog_article/blog/thousand-flowers-zion?utm_campain=xxxxxx

This can be broken down into different parts:

* https://www.functorz.com: The protocol and domain of the website

* /blog_article: The path of the blog page

* /blog/zion-feature-zion-ai: **Path parameter,** in this example, the value of the path parameter 'blog' is 'zion-feature-zion-ai'

* ?utm_campain=xxxxxx: **Query parameter,** in this example, the value of the query parameter 'utm_campain' is 'xxxxxxx'

As can be seen, **path parameters directly change the URL of the page, while query parameters only change the parameters of the webpage.**

## Application Scenarios

* Query Parameters

Query parameters are generally used for parameter transfer.

* Path Parameters

Pages with SEO requirements use path parameters (see: [SEO](https://functorz.feishu.cn/wiki/AV9GwpmDGidh7Nk6KTScEulWnEg)). In the example above, if the value of 'blog' is passed using query parameters, crawlers will recognize all blog posts as a single page, making them unsearchable in search engines and reducing the website's SEO performance. However, with path parameters, each article is recognized as a separate page by crawlers, making them searchable.

## Specific Configuration

The configuration and usage of both types of data are the same; they need to be declared first, then assigned, and can also be referenced. The following example uses the blog section of the Momen official website to explain the specific usage process.

### Data Declaration

Both types of parameters are added to the page receiving the data. For example, in the blog page:
* Define the path parameter 'blog' as a filter condition for remote data to obtain blog articles. This parameter is required.
* Define multiple query parameters to pass user information. These parameters can be empty.

<img src="../assets/images/data_param0.png">

### Assignment

Assign values to them in the action that navigates to the page. For example, on the search results page, in the action that navigates to the blog page, assign the searched blog id to the path parameter 'blog'.

<img src="../assets/images/data_param1.png">

### Reference

Path parameters and query parameters on the page can be referenced within the current page, usually for configuring filter conditions. For example, on the blog page, use the path parameter 'blog' as a filter to obtain blog articles in remote data.

<img src="../assets/images/data_param2.png">

# Action Input: Data Transfer in Actions

Multiple actions require input parameter configuration, such as Actionflow, AI actions, etc. Similar to variables, the use of action input is divided into three steps: declaration, reference, and assignment.

1. Declaration: Declare within the action configuration

2. Reference: Can be referenced within the action configuration

<img src="../assets/images/data_param3.png">

* Assignment: Assign values when calling the action

<img src="../assets/images/data_param4.png" width="30%">
```