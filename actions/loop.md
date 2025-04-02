---
description: >-
  Using remote variable (with a limit greater than 1) or select view (multiple
  choices) as the data source, retrieve the data from the data source and
  process it one by one.
---

# Loop

## Introduction

This feature enables processing items in an array data source one by one (only remote data and select views are supported as data sources). Ideal for tasks such as updating database entries or calculating total shopping cart values.

## Action configuration guide

Taking calculate the total value of a shopping cart as an example.

1. Add Page Variable\
   Start by adding "Arbitrary Precision Decimal" page variable to the page to temperarily store calculation results, initially set to zero. If this default does not work, set it to zero during the page load.

| <img src="../.gitbook/assets/0 (47).png" alt="" data-size="original"> | <img src="../.gitbook/assets/1 (86).png" alt="" data-size="original"> |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- |

2. Add Data Source On the page, identify a table as a data source so that the page will request the shopping cart data, filtered by the current user ID as the buyer.

![](<../.gitbook/assets/2 (70).png>)

3. Configure Loop Action\
   Upon successful data retrieval, configure a loop action. Use the fetched data to multiply each item's "purchase quantity" by its "price," and add the product to a running total in the page data.

* Example Calculation: Start with the total at 0. If the first cart item's quantity is 2 at a price of 100, the total becomes 200. For the next item with a quantity of 3 and price of 200, the new total becomes 800.
* Further Operations: During the loop, each data item from the remote source can be accessed in "Item Data" for additional processing.

## About Momen​​​​​

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
