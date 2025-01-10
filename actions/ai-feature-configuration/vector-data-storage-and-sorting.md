---
description: >-
  Discover vector data in Momen AI. Learn how to use it to achieve similarity
  search in your project.
---

# Vector Data Storage and Sorting

### Introduction

The similarity calculation of large models involves finding more similar data within massive unstructured data. To achieve this, a vector database is essential for storing information about each object. If your project requires a "similarity search," save data as vector data.

### How to Save Vector Data

After entering the editor, click the "Data Model" button to open the data model design interface. Create a data table, add fields (type: text), and enable the "Vector Storage" switch when adding a column. When data is added, the information in this field will automatically be saved as vector data.

<figure><img src="../../.gitbook/assets/1 (43).png" alt="Enable the vector storage in a no-code tool"><figcaption></figcaption></figure>

{% hint style="danger" %}
Note:

* Currently, Momen only supports storing text data as vector data.
* Enabling this feature will consume database resources.
{% endhint %}

### How to Use Vector Sorting

**The basic principle of vector sorting:**&#x53;ort from small to large based on the vector distance between the "sorting object" and the "comparison object." The closer the distance, the higher the similarity, and it will be placed at the front.

**Momen provides two vector distance calculation methods:**

COSINE and EUCLIDEAN.

**The vector sorting feature can only be used in the \[List] component:**

* Bind a data table with a vector field to the \[List] component.
* In the \[List] component's "sort", select the field transformed into vector data, then choose the "vector" sorting mode.
* Select the vector distance calculation method.
* Bind the value of the "comparison object."

<figure><img src="../../.gitbook/assets/2 (37).png" alt="" width="306"><figcaption></figcaption></figure>

### Application Example - Semantic Search

**Basic description of the case:**

The case database includes specific meanings of Internet slang. In this case, the Internet slang uploaded to the database will be transformed into vector data. The entered content in the search box will also be converted into vector data. After clicking the search button, the \[List] component will return results based on vector distance comparison and sorted results.

**Reference link for Internet slang:** [\[Internet Slang Collection\]](https://www.ruf.rice.edu/~kemmer/Words04/usage/slang_internet.html)

**Case Effect:**

<figure><img src="../../.gitbook/assets/4 (3).gif" alt="The case of semantic search"><figcaption></figcaption></figure>



### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
