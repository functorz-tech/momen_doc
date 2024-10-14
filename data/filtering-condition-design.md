---
description: >-
  Explore data filtering with Momen. Learn how to set filtering conditions,
  handle special cases, and filter data for text components.
---

# Filtering Condition Design

Before reading this, it is recommended that you familiarize yourself with the [Data Retrieval and Display](data-overview/data-retrieval-and-display.md)&#x20;

### Introduction

When requesting specific data, you need to add filtering conditions to filter the data that meets the needs. This article explains the principle of some special filtering situations.

### How to Set Filtering Conditions in Momen

The prerequisite for setting the filter condition is to read the remote data. In Momen, there are two components that can retrieve the remote data (database data): the "Page" itself and the "List Component".

**For example:** the class register stores the personal information of all classmates. If we need to retrieve the information of all male students, we need to set "gender is equal to male" as a filtering condition.

**Configuration method of the above case:** add a list component in the page, then switch the data source to remote data in its content. Select the data table as "Class Table", click "Filter" next to the "+" button to add filtering conditions, select the "Class Table" in the \[Gender] field, select the "Equal to" comparison operator, and then enter the comparative data "Male" in the input box.

<figure><img src="../.gitbook/assets/1 (11).gif" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Tips:

By default, the filter condition in the remote data is "and". In other words, when there are multiple conditions, they are juxtaposed.For more details, please refer to [Logical Condition Design](broken-reference)
{% endhint %}

### Special Filtering Types

#### Filtering on Null

When a filtering condition is selected to be equal to a null value (either directly equal to logical data that are null or equal to a null parameter), Momen ignores the filter condition instead of filtering out the null data. There are separate judgment conditions for null or non-null.

This is both an obstacle and an asset that can be utilized for complex filtering.

#### Actual Meaning of "Name is Not Equal to A"

{X!=A} does not include the case where X is null, i.e., in Momen, "not equal to A" actually means "not null and not equal to A", and {X=A}+{X!=A}+{X is null} equals the whole set. In other words, the "not equal to" filter will have a non-null judgment attached to it by default, so be sure to watch out for null fields when doing such filters.

### Filtering of One to Multiple Relational Tables

It means that in a 1-table list, filtering is done based on entries in tables with more than one relationship. Even in a 1-table list, filtering can still be done on the basis of the entries in multiple tables it contains. Suppose the class table forms a 1:N relationship with the student table. How to filter the class list for "Classes with students named John"? Request the class table with the filter set to:

<figure><img src="../.gitbook/assets/2 (58).png" alt="" width="371"><figcaption></figcaption></figure>

How to filter out the list of classes for "classes with students"?

<figure><img src="../.gitbook/assets/3 (55).png" alt="" width="372"><figcaption></figcaption></figure>

To filter out the list of classes with "no students", some modification is needed.

<figure><img src="../.gitbook/assets/4 (55).png" alt=""><figcaption></figcaption></figure>

Adding "not" can make the filter conditions into its complement. The reason why it can not simply use "student.id is null" to determine involves the project in the graphql settings, which will not to expanded in detail.&#x20;

To filter out the classes listed as "classes without students called John", then:

<figure><img src="../.gitbook/assets/5 (41).png" alt="" width="373"><figcaption></figcaption></figure>

The reason why you can't simply use "student. name ! = John" is because in the previous section, {X ! = A} does not include the case where X is null, i.e., in Momen, "not equal to A" actually means "not null and not equal to A". If we use "student. name ! = John" would result in the actual filter being "Classes that do not contain John and contain at least one student".\


#### Secondary Filtering of Data

Scenario: you want to know whether someone likes a product on the product detail page. After establishing one-to-multiple relationships with the account table and product table, there will be an account ID and a product ID in the product like table

Method 1:

Configure the remote data for the page to request the product table, with the filtering condition that the account ID is equal to the current user ID. When the product ID is equal to the remote data, the limit will be canceled. In the "not liked" conditional container, you can use the "quantity of likes" from the previous data request to check if there are zero likes, indicating there's no record of likes. A grey button will be displayed.

<figure><img src="../.gitbook/assets/6 (38).png" alt="" width="563"><figcaption></figcaption></figure>

Method 2:

* Configure remote data for the page and request data from the product table. Set the filtering condition to the product's ID and limit the request to one record, indicating a unique product.
* In the conditional container for "not liked," configure a condition that checks if the quantity of likes for this product in the likes table equals 0. This step requests the total number of likes for this product from all users.
* Since we want to compare the number of likes specifically from the current user for this product, we need to apply a secondary filter to the results obtained in the previous step. Click on the configuration for this product's data in the likes table from the previous step, and add a condition that checks if the account ID in the likes table equals the current user's ID.
* If you obtain data in this step, it means the user has already liked the product. If the quantity is 0, it means there are no like records, and you can display the "like" button in gray.

<figure><img src="../.gitbook/assets/7 (30).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Tips:

By clicking on the data of the text component for filtering, its filtering conditions can only be the fields of the data table associated with the table from which the remote data is being requested. That is, in the above example, the filtering conditions can only be the fields of the likes table instead of the fields of the product table.
{% endhint %}

### Default Sorting

In the absence of any sorting field, the id field will be sorted in descending order by default.\




### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
