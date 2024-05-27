---
description: >-
  Learn data aggregation with Momen, streamlining data calculations for enhanced
  web app functionality.
---

# Aggregate Data (Statistics)

### **Introduction**

Delve into data aggregation in Momen to calculate totals, sums, averages, maxima, and minima. Learn to request remote data, perform shopping cart calculations, and access subordinate data within the bound lists—master data binding and filtering for custom statistics, optimizing your web app development.

### **Application Scenarios and Concepts**

When you need to calculate the "total" of the retrieved data.

When you require a field's sum, average, maximum, or minimum values in the retrieved data, typically integer or infinite precision decimal types.

These outcomes are referred to as Aggregated Data in Momen.

💡Tips:

To perform data statistics, it's essential to request multiple sets of remote data or initiate the request through list components before data can be aggregated.

### **Meaning of the Types of Aggregate Data**

count: returns the total number of data;

sum: the sum of a field of a certain numeric type;

avg: the average value of a field of a certain numeric type;

max: maximum value of a field of a numeric type;

min: the minimum value of a field of a numeric type

### **Scenarios**

#### **Scenario 1. Remote Data When the Limit Is Greater Than 1**

With a limit set greater than 1, you can retrieve aggregated data from the query in the data list.

Example: Calculate the full price of multiple products to get the total amount in the shopping cart.

(This is just an example; the actual operation should be based on your business logic).

Procedure: Add remote data to the page, turn the data limit off, and set the filter conditions.

During component binding, select the corresponding data list in the remote data and look for the aggregated data sum of the related field.

| <img src="../../.gitbook/assets/0 (35).png" alt="Turn the data limit off, and set the filter conditions." data-size="original"> | <img src="../../.gitbook/assets/1 (74).png" alt="Select the corresponding data list in the remote data and look for the aggregated data sum." data-size="original"> |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

#### **Scenario 2. Retrieving Subordinate List Data within a Bound Data List**

Binding a list to a data list and obtaining subordinate information using relational fields.

For example, you can retrieve the number of items in an order on the History Orders page by establishing a 1:N relationship between the Orders list and the Purchased Items list.

Producer: Bind a data source to the list, configure filter conditions, associate data with individual list components, and retrieve aggregated data counts using the relationship field.

<figure><img src="../../.gitbook/assets/2 (62).png" alt="Retrieving Subordinate List Data within a Bound Data List."><figcaption></figcaption></figure>

### **Common Usage Scenarios**

#### **Scenario 1. Direct Binding of Aggregate Data**

Example: aggregated class size

Procedure: Same as the data binding in scenario 1 above.

<figure><img src="../../.gitbook/assets/3 (59).png" alt="Direct Binding of Aggregate Data."><figcaption></figcaption></figure>

#### **Scenario 2. Filtering Aggregate Data**

In the list of the parent list, filter the aggregated data of the subordinate list according to the conditions.

Example: Counting the number of male and female students in each class.

<figure><img src="../../.gitbook/assets/4 (58).png" alt="Filtering Aggregate Data."><figcaption></figcaption></figure>

Procedure: In a 1:N relationship between the class list and the student list, the list is bound to the \[class list]. To count the number of students by gender, a filter for gender-based statistics needs to be added, and the student count is obtained from the 'student' relational field.

<figure><img src="../../.gitbook/assets/5 (45).png" alt="Clicking on the bound aggregated data brings up the Condition Configuration window."><figcaption></figcaption></figure>

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
