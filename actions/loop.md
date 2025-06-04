---
description: >-
  Using a remote variable (with a limit greater than 1) or a select view (multiple
  choices) as the data source, retrieve the data and process each item one by one.
---

# Loop

## Introduction

The **Loop** action allows you to process items in an array data source one by one. Only remote data sources and select views are supported as data sources. This feature is ideal for tasks such as updating database entries or calculating the total value of a shopping cart.

## How to Configure

Below is an example of calculating the total value of a shopping cart:

1. **Add a Page Variable**  
   Add an "Arbitrary Precision Decimal" page variable to temporarily store the calculation result. Set its initial value to zero. If the default does not work, set it to zero during page load.

| ![Add decimal variable](../.gitbook/assets/0%20(47).png) | ![Set variable to zero](../.gitbook/assets/1%20(86).png) |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |

2. **Add a Data Source**  
   On the page, set up a table as a data source so the page can request shopping cart data, filtered by the current user's ID as the buyer.

![Configure data source](../.gitbook/assets/2%20(70).png)

3. **Configure the Loop Action**  
   After successfully retrieving the data, configure a loop action. For each item, multiply its "purchase quantity" by its "price," and add the result to the running total stored in the page variable.

   - **Example Calculation:** Start with the total at 0. If the first cart item's quantity is 2 and price is 100, the total becomes 200. If the next item has a quantity of 3 and price of 200, the new total becomes 800.
   - **Further Operations:** During the loop, each data item from the remote source can be accessed via "Item Data" for additional processing.

---

## About Momen

[Momen](https://momen.app/?channel=docs) is a no-code web app builder that lets you create fully customizable web apps, marketplaces, social networks, AI tools, enterprise SaaS platforms, and more. Iterate and refine your projects in real time for a smooth, streamlined creation process. Momen also offers powerful API integration, making it easy to connect your app to any service. Bring your ideas to life and launch products faster than ever with Momen.
