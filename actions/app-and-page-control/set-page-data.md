---
description: >-
  Set Page Data: Typically added during page loading, upon successful mutation,
  or within a component, triggering this action will assign values to
  pre-defined page data.
---

# App & Page Control ｜ Set Page Data

### **Introduction**

Performs assignment operations for the page data defined on the page.

Before reading this, please familiarize yourself with Page Data.

### **Configuration Guide**

**Setting up Page Data for Saving Single Data**

**Creating Page Data**

As shown in the following figure, you can create page data on a page.

<figure><img src="../../.gitbook/assets/0 (22).png" alt="Creating page data with momen"><figcaption></figcaption></figure>

**Assigning Values to Page Data via the \[Set Page Data] Action**

The \[Set Page Data] action is triggered by clicking on the action as shown in the following image: Action on Click - App & Page Control - Set Page Data.

<figure><img src="../../.gitbook/assets/1 (22).png" alt="Assign value via the Set Page Data action"><figcaption></figcaption></figure>

### **Assigning Values to Page Data through Other Actions**

Many actions in Momen require the page data to be assigned a value after the data is obtained, as shown in the following figure, take "Upload File" as an example. After setting the page data of the type "File", the action of uploading a file will be triggered by clicking the button, and the uploaded file will be assigned to the page data to be saved. The uploaded file is then assigned to the page data to be saved.

| <img src="../../.gitbook/assets/2 (18).png" alt="Page data" data-size="original"> | <img src="../../.gitbook/assets/3 (13).png" alt="Page data" data-size="original"> |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |

### **Setting up Page Data that Holds Multiple Data**

Before you read this section, learn about \[Arrays and Handling of Processing].

#### **Set Page Data**

The following figure shows how to set page data: When setting page data for a page, activate "IsList" mode and enable duplicates based on your specific business needs. Utilizing "IsList" for page data is akin to initializing an empty array.

<figure><img src="../../.gitbook/assets/4 (13).png" alt="Set Page data"><figcaption></figcaption></figure>

Through the \[Set Page Data] action, you can incorporate multiple data entries into page data by adjusting the action to \[Append]. However, each invocation of the action allows the addition of only one data entry at a time.

<figure><img src="../../.gitbook/assets/5 (8).png" alt="Set Page data and incorporate multiple data entires"><figcaption></figcaption></figure>

💡Tips:

Assuming that when setting the value of the page data, the insertion is an array (array), then the page data at this time is equivalent to the time in the array saved in an array, rather than inserting the data in this array one by one to the page data.

### **Removing Data from Page Data**

Enabling the "Unique" option allows you to utilize the \[Remove] function within \[Set Page Data]. During a \[Remove] operation, the value to be removed is compared with the values in the page data. If a match is found, the corresponding value in the page data is deleted.

<figure><img src="../../.gitbook/assets/6 (8).png" alt="Remove data from page data"><figcaption></figcaption></figure>

### **About Momen​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
