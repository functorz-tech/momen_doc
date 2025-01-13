---
description: >-
  Learn to easily manage static and dynamic data using Momen's no-code platform.
  Get guidance on data addition, retrieval, display, and more in this
  beginner-friendly tutorial.
---

# Data Retrieval and Display

Before you begin, it's recommended to review the Editor Overview.

### Introduction

Every piece of content on the internet, including text, images, videos, and more, is data. In Momen, this data can be either stored locally as \[Static data] or in a remote database as \[Dynamic data].

### How to Add or Save Data

#### Static Data

Data can be written or uploaded through the following methods, and it will be saved locally as \[static data].

* Data entered directly into the editor's input box.

<figure><img src="../../.gitbook/assets/1 (10).gif" alt="Data enter in a no-code tool"><figcaption></figcaption></figure>

* For images, videos, and animation components, directly uploaded files of images, videos, and animations are considered as \[Static data].

<figure><img src="../../.gitbook/assets/2 (7).gif" alt="Static data in a no-code tool"><figcaption></figcaption></figure>

#### Dynamic Data

Data stored in a database is referred to as \[Dynamic data]. With Momen, you can create a data table to organize your data by clicking on the \[Data Model] button. This could be either Momen's built-in database or a third-party one accessed via API.

<figure><img src="../../.gitbook/assets/3 (7).gif" alt="Create model in a no-code tool"><figcaption></figcaption></figure>

{% hint style="info" %}
**Tips:** &#x20;

To create or update a data table, click【Backend Update】in the top right corner of the editor to generate the latest version.
{% endhint %}

Once your data table is ready, click \[Database] on the data model editing interface to find your created table and add or import data there. This data becomes dynamics data.

<figure><img src="../../.gitbook/assets/4 (6).gif" alt="Dynamic data in a no-code tool"><figcaption></figcaption></figure>

#### How to Determine Where Data Needs to Be Stored

* Local: Stores \[Static data] that doesn't change frequently, such as button tooltips, background images, logos.
* Remote: Stores \[Dynamic data] that might change over time, like product prices, user avatars, usernames.

### How to Retrieve Data from the Database

#### Adding \[Dynamic Data] to a Page

Adding \[Dynamic data] to a page means that the page retrieves data from a specific table in the database. \[Dynamic data] can fetch either a single data entry or multiple entries which retrieved on a page only applies to that page and other components within the page.

<figure><img src="../../.gitbook/assets/5 (2).gif" alt="Adding【Dynamic Data】to a page in a no-code tool"><figcaption></figcaption></figure>

* Retrieving a Single Data Entry: By checking the \[Data Limit] option and setting the limit to 1, the page will retrieve a single data entry that meets the criteria when sending a request for \[Dynamic data]. Since it is a single entry, you can access the specific value of each field in the data.

<figure><img src="../../.gitbook/assets/6 (37).png" alt="Retrieving a Single Data Entry in a no-code tool" width="237"><figcaption></figcaption></figure>

* Retrieving Multiple Data Entries: When unchecking the \[Data Limit] option or setting the \[Data Limit] to more than 1, the page can retrieve multiple data entries that meet the criteria when requesting \[Dynamic data]. However, it will not obtain specific field values but only the count of data entries that meet the criteria.

<figure><img src="../../.gitbook/assets/7 (28).png" alt="Retrieving multiple data entries in a no-code tool"><figcaption></figcaption></figure>

#### Adding \[Dynamic Data]to a Component

In addition to allowing the page to initiate requests to retrieve \[Dynamic data], we can also enable components to request \[Dynamic data] which then only applies to that component and other components within it.

Components that can retrieve \[Dynamic data] as data sources include: lists, horizontal lists, selection views, data selection input boxes.

<figure><img src="../../.gitbook/assets/8 (26).png" alt="Adding components  in a no-code tool"><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/9 (25).png" alt="Components that can retrieve【Dynamic data】in a no-code tool."><figcaption></figcaption></figure>

#### How to Retrieve Specific Data

Most of the time, we don't need all the data in a table, but rather filter out specific data. For example: If the data table contains four makeup categories -【lipstick】,【foundation】,【eyeshadow】,【blush】, and you only want to display products in the【lipstick】category, you need to use【category】equals【lipstick】as a filter condition to retrieve all data belonging to the【lipstick】category.&#x20;

By configuring \[filter conditions] in \[Dynamic data], the page or component can retrieve specified single or multiple data entries.

{% hint style="info" %}
**Tips:**&#x20;

Filtering is essentially adding conditions to retrieve data. You can learn more about specific condition configurations in [Filtering Condition Design](https://docs.momen.app/ui-design/design/interactions/conditions/filtering-condition-design).
{% endhint %}

### Data Display

Static or dynamic data needs to depend on different components to be displayed on the page. Additionally, the type of data dictates the selection of components. For example: text-type data binds to the【Text】component; image-type data binds to the【Image】component; unmatched data types cannot be bound.

<figure><img src="../../.gitbook/assets/10 (23).png" alt="Example of display on static data in a no-code tool"><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/11 (1).gif" alt="Example of display of dynamic data in a no-code tool"><figcaption></figcaption></figure>

#### Static Data Display

【Static data】typically refers to individual data entries. After direct input or uploading in the right-side component bar, it can be displayed in the Momen editor. For components such as【Select View】and【Tab Bar], their【Static data】is an array object. When using it within these components, you need to bind it directly to its item.

<figure><img src="../../.gitbook/assets/12 (20).png" alt="Static data display in a no-code tool"><figcaption></figcaption></figure>

#### Dynamic Data Display

**Displaying Single Data Entry**

* Request for a Single Data Entry: When retrieving only a single piece of data, you can bind all the fields of this data to the appropriate component for display.
* Request for Multiple Data Entries: When multiple pieces of data are requested, and you are using a【non-list】type component to display the data, only the aggregated data can be shown:
  * count: The number of data entries that meet the criteria.
    * _Example_: If you want to display the number of participants for a specific event in the registration form, you would read multiple entries that meet the criteria. By binding the count to the text component, you can present the number of registrants for that event.
  * avg: The average value of a specific field (integer, infinite precision decimal type) that meets the criteria.
    * _Example_: If you want to display today's average order price, you would read multiple orders from today. By binding the order price's avg to the text component, you can present the average order price for all of today's orders.
  * sum: The total sum of a specific field (integer, infinite precision decimal type) that meets the criteria.
  * max: The maximum value of a specific field (integer, infinite precision decimal type) that meets the criteria.
  * min: The minimum value of a specific field (integer, infinite precision decimal type) that meets the criteria.

<figure><img src="../../.gitbook/assets/13 (2).gif" alt="Dynamic data display in a no-code tool"><figcaption></figcaption></figure>

**Displaying Multiple Data Entries**

When you have retrieved multiple pieces of data and wish to display the detailed content of each entry, you will need to use a list-type component.

After binding the corresponding dyn data to the list-type component, you need to enter the list and add suitable components to the list items. Then, bind the internal data of the components, so that each piece of data is displayed in a consistent style.

<figure><img src="../../.gitbook/assets/14 (1).gif" alt="Displaying multiple data entries in a no-code tool"><figcaption></figcaption></figure>

#### Static and Dynamic Data Display

Static data can be combined with remotely retrieved data.

For example, the name of a product can be displayed on the interface in the following format:【Product Name: xxx】. Here,【Product Name:】represents the fixed data (static data), and【xxx】represents the name of the specific product (dynamic data).

<figure><img src="../../.gitbook/assets/15.gif" alt="Static and dynamic data display in a no-code tool"><figcaption></figcaption></figure>

#### Special Display Cases

* If the data table being read by the list has no data or does not meet the filter criteria, the preview will not show any content in the list.
* Differences in the display of【Static Data】and【Dynamic Data】:
  * 【Static Data】: Once bound, it can be directly displayed in the Momen editor.
  * 【Dynamic Data】: After binding, media data (such as images, videos, files) will not be displayed directly in the Momen editor; for non-media data, the corresponding data name will be displayed.

<figure><img src="../../.gitbook/assets/16 (9).png" alt="Special display cases in a no-code tool"><figcaption></figcaption></figure>

#### Interactive Data Display

When a new data entry has been added on another page, or if you wish to display this data entry after successful addition and redirect to a new page, or when a specific data on the current page has been updated, it is essential to configure the corresponding【Refresh】action to view the latest data.

* Example 1: In the【Event Registration Page】, after registering for an event, you will be redirected to the【My Events Page】. Before this redirection, it's necessary to refresh both the【My Events Page】and the list component used to display the events. This way, the【My Events Page】will show the updated data.
* Example 2: If you find an article you like and click on the【❤️】button, the heart will initially appear gray. To display the heart in red after clicking, you'll need to refresh the current page to reveal the red heart.

### Adjusting Data Style

#### Right Property Panel

Upon selecting a particular component, the right property panel provides the option to navigate to the【Design】 tab. This enables the precise manipulation of the data's visual representation, such as alterations to the text's dimensions or the font's boldness, and the method of image cropping.

<figure><img src="../../.gitbook/assets/17.gif" alt="Right property panel in a no-code tool"><figcaption></figcaption></figure>

#### Modification of Data Format

The following categories of data permit adjustment to【Format】. By single-clicking the specific data, a window containing various format options will present itself. Selection of the requisite format, followed by a click on the save button, will confirm the changes.The data that may be subject to this kind of adjustment include:

* Date
  * Current Date and Time (Timestamp)
  * Present Date
* Time
* Geographical Location\


### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
