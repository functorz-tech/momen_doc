---
description: >-
  Learn to build Momen applications that retrieve, display, and update data from
  various sources.
---

# Overview

Data is the core asset of an application, which is essentially about managing and processing it. Momen provides flexible and powerful data management and utilization capabilities, with the framework as follows:

![](../.gitbook/assets/data/data_overview.png)

## Data Sources

Momen supports a variety of data sources, including built-in databases, APIs, and more.

* **Data Model and Database**: Momen provides a powerful relational database that is flexible and offers excellent performance. See details: [Data Model and Database](https://docs.momen.app/data/data_model)
* **API**: External data sources are typically accessed via APIs. See details: [API](https://docs.momen.app/data/api)
* **Environmental Data**: This refers to data provided by the environment in which the program is running, mainly including the following categories:
  * Null Types: Null, Empty Text, Empty Array.
  * Time Types: Current time, date, and datetime.
  * User Types: Logged-in user data (automatically retrieved from the database, can be re-fetched using the "Refresh Login User Data" action), login status (boolean), user agent (browser/operating system information).
* **Contextual Data**: Mainly includes the following two types:
  * Action Result Data: Many action operations generate result data, which can be referenced by subsequent actions. For example, after calling the database "add data" action, the result of the addition will be returned; after calling an API action, the interface will return response data.
  * List Item Data: When a List View or Select View is bound to a data source, each list item has its corresponding data. This data can be used in various operations of the list item, such as displaying content, responding to user interactions, etc.
* **Input Components**: Momen provides various input components that can be used as data sources, including: Input, Data Selector, Image Picker, and Select View, etc. Please refer to the documentation of the relevant components for details.

## Data usage

Next, we will illustrate data usage by implementing features like adding articles, displaying content, liking, and message notifications on a blog website.

### Adding Blog Articles

This feature involves the **Database** and **Input Components.**

First, create a "Blog" table in the Data model to store articles, including the following fields:

* show\_at (Publication date)
* title
* sub\_title
* cover\_image
* content
* authors\_author ( Author's account ID)
* like\_count
* ...

<figure><img src="../.gitbook/assets/image (37).png" alt=""><figcaption></figcaption></figure>

Create a blog upload page and add input fields, an Image Picker, a rich text Editor, and a Date & Time Picker to obtain user input for the article title, subtitle, cover, content, and publish date. Add a button component to save the article to the database.\
Bind the action "Insert Blog" to the button. Bind values to each field, and in the "inputs" category of the Data Selector menu, find the components just added.

<figure><img src="../.gitbook/assets/image (39).png" alt=""><figcaption></figcaption></figure>

### Displaying Article List

This feature involves **Database** and **List Item Data**.\
Add a List component to the page, select "Blog" table as the data source, enable Load more, and set the limit to 3. Sort in descending order by show\_at.

<figure><img src="../.gitbook/assets/image (40).png" alt=""><figcaption></figcaption></figure>

Components within list items also need to bind data. The data selection path is: In-component data -> blog\_list (name of the List component) -> item. Item represents the data of each entry, and you can select the corresponding field within it.

<figure><img src="../.gitbook/assets/image (41).png" alt=""><figcaption></figcaption></figure>

### Displaying Article Details

This feature involves **Page Parameter,** **List Item Data**, and **Data Source of page.**\
The process is that when a user clicks on an item in the article list, it navigates to the blog detail page, and the blog's ID is passed through Page parameter. In the data source of the detail page, use this ID as a filter condition to obtain the corresponding article.\
Create a blog detail page and add a page query parameter (see details: [Parameter](https://docs.momen.app/data/parameter)), named "blog\_id". On the list item of the blog list page, add the action "Go To Blog Detail", and set the value of post\_id to the ID of the list item data.\


<figure><img src="../.gitbook/assets/image (42).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (43).png" alt=""><figcaption></figcaption></figure>

Add a data source to the detail page, select "Blog" as the table, set the limit to 1, and the filter condition to "ID equals Query/blog\_id". This achieves data transmission between pages during navigation.

<figure><img src="../.gitbook/assets/image (44).png" alt=""><figcaption></figcaption></figure>

In the detail page, you can add text, images, and other components, bind the values of the page data source, and display the article.\


<figure><img src="../.gitbook/assets/image (45).png" alt=""><figcaption></figcaption></figure>

### Article Liking and Message Notification

This feature involves **List Item Data** and **Action Result Data**.\
The function to be implemented is that users can like articles, and after liking, automatically send a message notification to the author.\
The like\_count field in the blog table represents the number of likes received. Create a notification table to store message notifications, where the message field represents the message content, the sender field represents the sender's account ID, and the receiver field represents the receiver's account ID.

<figure><img src="../.gitbook/assets/image (48).png" alt=""><figcaption></figcaption></figure>

On the page, add a like button in the article list item and bind the action "Update Blog" to increase the like count. When updating, it is necessary to know which article is being updated, and the current item data contains the content of the article being clicked. Therefore, you can add a filter condition: **ID equals list item data's ID**, ensuring that only the current article is updated.

**When performing update or deletion operations, the filter condition must be carefully checked and confirmed, otherwise, all data may be updated to the same or all data may be deleted.**

<figure><img src="../.gitbook/assets/image (46).png" alt=""><figcaption></figcaption></figure>

After successfully liking, a notification needs to be sent to the author, which means adding a piece of data in the Notification table. Therefore, create the action "Insert Notification" onSuccess of "Update Blog". The message content is: The article "${article title}" received new likes, bringing the total to: ${like count}.\
The article title can be obtained from the list item data mentioned earlier. After the "Insert Blog" action is successfully executed, the latest updated data will be returned. Therefore, the latest like count can be obtained through the result data of this action.

<figure><img src="../.gitbook/assets/image (49).png" alt=""><figcaption></figcaption></figure>

### Notes

1. In addition to directly referencing data, variables can be used for data storage and reference. See details: [variable.md](variable.md "mention").
2. There are two types of database data requests available:
   1. &#x20;Query: Retrieve data once when the page loads (suitable for most scenarios)
   2. Subscription: Retrieve data once when the page loads, and automatically push data to the page when the data in the database meeting the condition changes (suitable for specific scenarios like automatically obtaining the latest chat records)
3. Data limit refers to the maximum number of data to be retrieved, ranging from 1 to unlimited.
   1. &#x20;**If it is 1, a single piece of data is returned**
   2. **If it is greater than 1, an array is returned. To retrieve a specific piece of data from it, you can use the GET\_ITEM formula (see details:** [formula.md](formula.md "mention")**).**
4. &#x20;Data filtering can be configured with multiple conditions:
   1. Condition: The condition for filtering, the final condition that meets the criteria will take effect
   2. &#x20;Filter: Refers to extracting data from the database that meets the filter condition
   3. Sort: Choose to sort by a specific field. If vector storage is enabled for the field, vector sorting can be performed (see details: [Database](https://docs.functorz.com/data/datamodel.html))
   4. Distinct: Remove duplicate data, multiple deduplication fields can be selected
