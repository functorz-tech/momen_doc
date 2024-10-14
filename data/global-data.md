---
description: Explore global data in Momen for enhanced functionality and responsiveness.
---

# Global Data

### **Introduction**

In this tutorial, we'll delve into the concept of global data and its pivotal role in creating more interconnected and efficient applications. Explore how harnessing global data can transform your web apps into highly dynamic and responsive digital solutions, pushing the boundaries of what's possible.

### **The Concept of Global Data**

Unlike temporary Page Data" which is specific to a single page, "Global Data" is a versatile resource that can be accessed and utilized throughout your entire application. For instance, the "Current User Data" obtained after a "Silent Login" is an example of global data. This data can be accessed and employed anywhere within your application and stored globally.

### **How to Use**

#### How to add global data

Global data isn't tied to any specific page; it's designed to be used application-wide. To add global data, click on the Settings button in the upper left corner of the editor.

![](<../../.gitbook/assets/0 (40).png>)

#### **How to Assign Values to Global Data**

Parameters can be assigned to global data using "Set Global Data" within behaviors, on success, and in conditions.

![](<../../.gitbook/assets/1 (79).png>)

💡 Tips:

When you first enter the software, "Global Data" is initialized, meaning it's in an undefined state.

For example, if you set an integer type of Global Data on a web page, it's not initially 0 but undefined. To perform actions like adding +1, you must ensure that there's data present, rather than it being undefined. Additionally, when dealing with text types, entering global data into a web page results in it being undefined, not null. This aspect is often overlooked, and if you intend to have a null value, you can assign one in "Global Settings" or use a logical data type for null values.

#### **How to Access Global Data**

You can directly access "Global Data" from any location where data can be called within your application.

![](<../../.gitbook/assets/2 (66).png>)



### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
