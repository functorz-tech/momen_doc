---
description: Learn how to manage and showcase diverse data using Momen's List Component.
---

# List

### Introduction

Welcome to the Momen's List Component tutorial. In this section, you will learn how to effortlessly unify and display different data with style. Explore key features and make your data presentation a breeze – no coding required.

### Usage Scenario

The List Component is your go-to solution when you need to unify various data styles for a consistent display.Example: The product list contains product images, product names, prices, and other information in typical use scenarios. The content is different, but the layout and other styles are unified; we can use the \[List] to display data.

* Product Category
* Showroom
* Comments

<figure><img src="../../../.gitbook/assets/1 (57).png" alt="List Usage Examples"><figcaption></figcaption></figure>

### List Content

Local and remote data have already been covered in Data Retrieval and Display, and lists generally request \[Remote Data].

#### How to Bind Remote Data to a List

After selecting the List, click on the content, choose \[Remote] as the data source, and select the data table created in your data model.

<figure><img src="../../../.gitbook/assets/2 (50).png" alt="Bind remote data to a list."><figcaption></figcaption></figure>

1. Number of Items in Page Size

The amount of data that will be displayed at one time.

* Since there is often more than one piece of data, if you wait for the data to be loaded all at once before displaying it, it will cause a horrible user experience so that you can request only a certain amount of data simultaneously. When you slide down to the last one each time, you can get more data using \[Load More].
* Example: set the \[Page Size] to 10, and open the \[Load More] in the interaction, it will display 10 items at one time and load the new 10 items when sliding to the 10th item until all the data is loaded.

{% hint style="info" %}
Tips:

To display only the latest 3 data items, turn off \[Load More] and set \[Page Size] to 3.
{% endhint %}

2. Filter

Filter out data that meets the criteria by setting filter conditions.

* Example: Filter out the students whose gender is male in the student table with the filter condition: gender = 'male', and all the data of students whose gender is male will be displayed.

{% hint style="info" %}
**💡**Important Tips:

* When a condition equals a value that doesn't exist, it returns arbitrary data.
* Example: If you set a filter for id = "link data," and "link data" has no assigned value, it's equivalent to not setting the condition and will return any data.
{% endhint %}

\
Remember to check the \[Unset Filter] box in actual usage scenarios where filter conditions are not needed.

<figure><img src="../../../.gitbook/assets/3 (49).png" alt="Check the unset filter box when in the actual usage scenario." width="250"><figcaption></figcaption></figure>

{% hint style="danger" %}
Error

If there's no filter for the List data, ensure the filter type is set to "no filter condition," or else the List Component will prompt an error.
{% endhint %}

3. Sort and Distinct

* Sort: Choose a field for sorting, and you can set the sort type to ascending or descending. Note that if de-duplication is enabled, the sorting field must be the same.
* Distinct: After selecting the basis field for de-duplication, only one duplicate data item will be displayed under this field.

4. When Request Status Changes

This behavior triggers when the request status changes.

{% hint style="info" %}
Tips:&#x20;

Remember that there are six statuses: Normal, Loading, Error, Success, Information Error, and Business Error. It's typically used to provide user feedback during status changes. Calculate when the request will succeed and the expected duration for success.
{% endhint %}

5. Actions on Success

Actions added here trigger when data in the List is successfully read.

* The success of an action is determined by the normal execution of the reading process, even if no data is read.
* Example, if you set conditions for the name = 'Paul,' and no data matches, it's still considered successful.

{% hint style="info" %}
Tips:&#x20;

Success is crucial, as it ensures that this step has obtained the data or executed the action. Use it to make decisions based on successful data retrieval, such as user account existence checks.
{% endhint %}

#### How to Bind Data to Each Item of a List

After the previous step, double-click on the List component, navigate to "Cell View," and add components. For example, add text components, go to the text component, click on the \[+] sign in its content, select the "In-component data" to find the remote data bound to this list, and then select the item, select the specific data fields to be bound to can be.

<figure><img src="../../../.gitbook/assets/4 (45).png" alt="Bind data to each item of the list."><figcaption></figcaption></figure>

* Index: As shown in Arrays and Array Processing, the index represents the position of data in the list, starting with 0 for the first row.
* Item: Each piece of remote data bound to the list contains various fields. Select the appropriate component to display the corresponding data.

### List Interaction

<figure><img src="../../../.gitbook/assets/5 (37).png" alt="List interaction"><figcaption></figcaption></figure>

* Load More: Initiates a new request for more data when you scroll to the bottom. For instance, if the list's page size is 10, sliding to the 10th item triggers a request for items 11 to 20

{% hint style="warning" %}
Note:&#x20;

When "Load More" is enabled, the list's height can only be set to "Fill Parent" or "Fixed Height."
{% endhint %}

### Web-Specific- List Enable Paging

Web lists feature an interactive "Paging Enabled" function. After enabling it, you can set "Autoplay" and "Loop," transforming your list into a vertical rotating picture (banner).

<figure><img src="../../../.gitbook/assets/6 (36).png" alt="Enable paginated lists on the website"><figcaption></figcaption></figure>

The list component on the website needs to be combined with other components (usually buttons) and configured with the \[Load More List Data] behavior to help the list load and display more data.

### List Design

#### Column Number

Control the number of columns displayed in each row. Adjust based on the amount of data and text content.For example, if the number of columns is 1, only one data will be displayed in a row. When displaying products and other information, we usually set the number of columns to 2 so that one line can display more data, which is suitable for cases with relatively less text.

<figure><img src="../../../.gitbook/assets/7 (27).png" alt="Set column number to 1"><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/8 (25).png" alt="Set different column numbers to show more data in one line"><figcaption></figcaption></figure>

{% hint style="info" %}
Tips:&#x20;

You can use \[List] instead of \[Horizontal List] when making navigation pages with many icons. In \[List], when there is more than one column, the content will automatically go to the following row after filling the horizontal space.
{% endhint %}

#### List Header

\[List Header] is often misunderstood. It's positioned at the top of the entire \[List] view and moves along with the list when you slide up. This feature is useful for situations where you want components at the top of the List to move upward.

Example: in the e-commerce template, the table header is used to display the rotating image and the category list, and the list displays the recommended products.

<figure><img src="../../../.gitbook/assets/9 (1).gif" alt="List effects in the E-commerce template"><figcaption></figcaption></figure>

{% hint style="info" %}
Tips:&#x20;

The \[List Header] is not bindable to \[List Item Data], it is just a component at the top of the \[List], which is only available at the top of the \[List], not for every item.
{% endhint %}

#### Horizontal Blank & Vertical Blank

* Horizontal Blank: Controls the space between columns when you have more than one column.
* Vertical Blank: Adjusts the space between rows of data.

#### Style

When setting the style of Border Radius, Background Color, and Border, you need to distinguish whether you are setting the list style or the container style.

* Setting the list style: for the overall style changes

<figure><img src="../../../.gitbook/assets/10 (22).png" alt="Setting the list style"><figcaption></figcaption></figure>

* Setting the container style: for each item in the list

<figure><img src="../../../.gitbook/assets/11 (19).png" alt="Setting the container style"><figcaption></figcaption></figure>

#### Sub-Container

After double-clicking the \[List] component, you can operate on individual sub-containers.

* Layout mode:
  * Sub-containers also have the same list of \[fixed height] \[adapt to the content] \[filled with the parent component] three cases, of which the first and third cases and the \[list] of the same logic, but \[adapt to the content] suitable for use in the list of each item may not be the same as the height of the time. For example, the list will be interspersed with advertisements, or different content types will have different styles.

<figure><img src="../../../.gitbook/assets/12 (19).png" alt="Example of sub-containers"><figcaption></figcaption></figure>

* Resizing
  * You need to click the \[Cell View] in the upper left corner first, you can adjust the height of the item by dragging the border or on the right side \[H]. The width needs to be adjusted for the height of the whole \[List].

{% hint style="info" %}
Tips:

* After double-clicking the \[List] to enter the focus mode, the \[Cell View] on the top edits the style of one item in the \[List], only one item needs to be edited, and the subsequent data will be displayed in the same style, and the area below is the \[Preview Area] of the List.
* When editing the configuration of \[List], there's no need to double-click to exit focus mode; simply click the \[Preview] area below to make changes.
{% endhint %}

### Interactive Behavioral Correlations

Component Operation｜List｜Scroll to

### Usage Example

#### Creating a Grid Navigation Bar

<figure><img src="../../../.gitbook/assets/13 (1).gif" alt="Creating a grid navigation bar"><figcaption></figcaption></figure>

#### Creating Product Categories

<figure><img src="../../../.gitbook/assets/14 (11).png" alt="Creating product categoties"><figcaption></figcaption></figure>

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
