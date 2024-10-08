---
description: >-
  Explore data input and modification with Momen for efficient database
  management. Our comprehensive guide covers all methods with detailed
  explanations.
---

# Data Input and Modification

_Before reading this article, it is recommended to familiarize yourself with_ [_Data Retrieval and Display_](data-retrieval-and-display.md)_._

### Preconditions for Input and Modifying

#### Where to Input the Data

Inputting and modifying operations are essentially performed on the data tables where the data is stored. Therefore, before inputting or modifying, you must have already created the corresponding data tables.

#### Sources of Data for Writing

The content input from text boxes, images, or videos selected and uploaded from a gallery, files uploaded from the desktop (including audio, PDF, Word files, etc.), all these inputs or uploads can be written into the database.

### How to Obtain the Data to Input in Momen

#### Using Input/Selection Components to Get the Data

As shown in the figure below, you can obtain the necessary data to input by using components such as【Text Input】,【Switch】,【Image Picker】,【Video Picker】,【Select View】,etc., for inputing, selecting, and uploading.

<figure><img src="../../.gitbook/assets/1 (62).png" alt="Components in a no-code tool"><figcaption></figcaption></figure>

#### Locating Data for Input, Selection, and Upload

To perform an input operation, you can find this data by clicking on the【+】sign and selecting the【Input】.

<figure><img src="../../.gitbook/assets/2 (54).png" alt="Data Input in a no-code tool"><figcaption></figcaption></figure>

**Renaming Components During Data Inputting:**

In many pages, you may encounter multiple input/selection components, leading to multiple selectable component names when choosing the data to input.

For example, there might be input box components for customer names and contact phone numbers on a page. These components, if not renamed, might be called【Text Input 1】,【Text Input 2】, making it difficult to quickly and accurately identify which one is for retrieving the customer's name. Therefore, renaming components is essential.

**Standard Naming Convention: Content\_Component Type**

For instance, the default name for the【Text Input】component is【Text Input】.If this component is meant to gather the user's name, it is recommended to change the component's name to【Customer Name\_Text Input】. As demonstrated in the video above, this naming convention will allow you to accurately retrieve the corresponding data when selecting the input box data to input.

**Method to Rename Components:**

Select the component you wish to rename, find【Component Name】at the top of the right sidebar, and double-click the component name to modify it directly.

<figure><img src="../../.gitbook/assets/3 (10).gif" alt="Method to rename components In a no-code tool"><figcaption></figcaption></figure>

### Inputs

**Definition:** The so-called input operation refers to the process of adding one or more pieces of data to a database.

The following common actions are examples of input operations:

* **Posting Content:** input on social media, tweeting, sending a WeChat message to a friend, recording a to-do in an app, organizing an event, making an event reservation, all involve input data to a specific database.
* **Purchasing Products:** Adding items to a shopping cart, successful product purchases, placing an order for delivery, and adding a new shipping address are all examples of data input operations.
* **Interactions such as Bookmarking, Liking, Commenting, and Replying**: These are also considered input operations.

#### Operation Methods in Momen

In Momen, operations are generally triggered by clicking or other successful actions. The input operation is typically implemented by configuring the component's action to【Request | Mutation】.

As shown in the diagram, the【Mutation - Update New】action is configured for the confirm button. In this behavior, the corresponding data column is bound to the content obtained from the【Input Box】,【Current User Data】, etc. When the confirm button is clicked, the input operation is triggered, saving the obtained data to the database.

<figure><img src="../../.gitbook/assets/4 (7).gif" alt="Operation methods in a no-code tool"><figcaption></figcaption></figure>

Content That Can Be Written:

<figure><img src="../../.gitbook/assets/5 (39).png" alt="Operations content in a no-code tool" width="254"><figcaption></figcaption></figure>

{% hint style="info" %}


**Tips:**

* Linked Data: This can only be chosen for input content after it has been added to the page.
* In-page Data: This can only be chosen for input content after it has been added to the page.
* Inputs: This option is available for input content only after input/select-type components have been added to the page.
* Result Data: This can only be chosen for input content after the input/update operation has been successfully executed.
{% endhint %}

For detailed explanations and applications of the above data, please refer to the【Data Specialization】section.\


### Modification

The actions of updating and deleting data can collectively be referred to as modification operations.

#### Update

**Definition:** An update refers to the alteration of existing data within a data table.

The following common actions are examples of update operations:

* **Updating Personal Information:** Changing a profile picture, username, phone number, shipping address, password, etc. This involves altering existing data within the data table to new data, and such an operation is called an update.
* **Updating Consumption Records:** After using a credit card, credit card points may increase or decrease. This alteration to existing points data is also considered an update.

#### **Delete**

There are two types of deletion:

1. **True Deletion Definition:** This involves completely removing existing data from a database. Once a true deletion operation is executed, that data will no longer exist within the database.
2. **False Deletion Definition:** This means only modifying the status of the data, making it no longer visible or functional, but the data itself remains within the database. \
   **Example:** In a scenario where the product home page displays all products,【unlisted】or【delisted】products are not shown. To achieve this effect, products that are unlisted or delisted are not removed; instead, a【status】such as【live】,【unlisted】, or【delisted】is added to the product data. Only products with a【live】status are displayed on the home page.

The following common actions are examples of delete operations:

* Deleting Order Records
* Removing Items from the Shopping Cart
* Unfollowing, Unliking
* Canceling a Reservation for an Event

{% hint style="info" %}
Tips:&#x20;

During data operations, to prevent accidental【true】deletion, which could lead to irreversible consequences, it is generally recommended to perform a【false】deletion to achieve the effect of deleting data. This method maintains the data within the system while removing its functionality or visibility.
{% endhint %}

#### Modification Operation Methods in Momen

In Momen, modification operations, including updates and deletions, are generally triggered by clicking.

**Updating Data**

As illustrated in the diagram, the 【Mutation - Update】 action is configured for the update button. Within this action, the corresponding data column is bound to the content to be updated. When the confirm button is clicked, the update operation is triggered.

It's important to note that when updating data, you must include a filter condition to specify which piece of data is to be updated; otherwise, all data will be updated.

<figure><img src="../../.gitbook/assets/6 (1).gif" alt="Updating data in a no-code tool"><figcaption></figcaption></figure>

**Deleting Data**

As shown in the diagram, the 【Mutation- Delete 】 action is configured for the delete button. This action requires a default filter condition to specify which piece of data is to be deleted. If no filter condition is selected and the delete button is clicked, all data from the selected table will be deleted!

<figure><img src="../../.gitbook/assets/7 (3).gif" alt="Deteting data in a no-code tool"><figcaption></figcaption></figure>



<figure><img src="../../.gitbook/assets/8 (2).gif" alt="Deteting data in a no-code tool"><figcaption></figcaption></figure>

### Batch Mutatiomn

**Definition:** The operation of inputing or modifying multiple records in one or more data tables simultaneously.The following common actions are all considered bulk modification operations:

* Selecting multiple images for posting when sharing on social media.
* Selecting multiple products for checkout in the shopping cart, thereby generating a single order.
* Selecting multiple options simultaneously for insertion into a data table after a multi-select operation.

#### Momen 's Methods for Bulk Operations

**Inserting Multiple Records into a Table**

Momen generally triggers input operations through clicking. To input multiple records, follow these steps:

1. After configuring the【Mutation - Insert】action, open the "Bulk Modify" mode and choose the data source for bulk writing.
2. Click on the data source, and select the required data fields to map (these could be specific field values within a data record).

<figure><img src="../../.gitbook/assets/9 (26).png" alt="Inserting multiple records in a no-code tool"><figcaption></figcaption></figure>

3. Bind the parameters for bulk insert, with data sourced from the data binding operation by clicking on the settings next to the parameter name. Clicking the【Switch】button will complete the operation to store multiple records into a table.

<figure><img src="../../.gitbook/assets/10 (25).png" alt="Store multiple records into a no-code tool"><figcaption></figcaption></figure>

**Updating/Deleting Multiple Records in a Table**

Momen's update/delete action is essentially a bulk operation. If you configure a filter condition during the【Mutation - Update/Delete】process, all the data that meets those conditions will be updated or deleted.

For example, in the image below, if you configure the action to update/delete hobbies, all hobby data belonging to the current user will be updated or deleted.

<figure><img src="../../.gitbook/assets/11 (20).png" alt="Updating multiple records in a table in a no-code tool"><figcaption></figcaption></figure>

**Input or Modifying Multiple Tables Simultaneously**

In Momen, the simultaneous operation on multiple data tables is referred to as 【Batch Mutation】. You can find it within the action configuration, and add multiple input or modify actions to simultaneously input or modify multiple tables.\


### Concept and Application of Result Data

**Definition of Result Data:** After executing input or update operations, the newly written or updated data is referred to as【result data】.

**Application:** When configuring input or update operations, after successful execution, you can obtain the newly written or updated data through【result data】(including the data's ID and all other field contents). This information can be used for further actions.

<figure><img src="../../.gitbook/assets/12 (1).gif" alt="Updating multiple records in a table in a no-code tool"><figcaption></figcaption></figure>



### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
