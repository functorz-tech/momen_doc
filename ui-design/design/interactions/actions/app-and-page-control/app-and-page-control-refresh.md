---
description: Use the refresh action in Momen to optimize the web app's data consistency.
---

# App & Page Control｜Refresh

### **Introduction**

In this tutorial, dive into the important aspects of maintaining data consistency and accuracy in your App by exploring the "Refresh" action to realize the full potential of the Refresh feature in Momen.

### **Refresh**

#### **Action Brief**

When the refresh action is triggered, the software will re-request the latest data from the database.

#### **Configuration Guide**

Usually, after performing actions that \[Mutation] (such as adding, updating, or deleting), it's essential to consider whether these actions will impact the display of data or condition checks on other pages. If there is an impact, configure the corresponding refresh actions upon the success of these behaviors.

You can find the refresh actions in the "App & Page Control" section. Simply choose the object you want to refresh in the refresh action settings.

* If you select an object named after a page, it implies refreshing that specific page. Refreshing the page essentially triggers all remote data configured on the page to make new requests to the database, fetching the latest data to be displayed or used in condition checks.
* If you choose a list-type component within the page, it effectively prompts the component to request the latest remote data for display.

![](<../../../../../.gitbook/assets/0 (11).png>)

### **Refresh Cell**

#### **Action Brief**

After triggering the refresh cell action, it independently sends a request to the database for the specified item in the list to retrieve the latest data for display or condition checks. This action is limited to use within the container view of the list. Utilizing this action judiciously can enhance the overall user interaction experience and reduce data retrieval time to a certain extent.

#### **Configuration Guide**

Typically, you configure this action upon the successful execution of a Mutation within the component of a list item. You can find the "Refresh Cell" action under "Component Control - List" for configuration. In this action, choose the specific list you want to refresh (which is usually the current list), and for the index, it is common to select "In-component Data - List - Index."

![](<../../../../../.gitbook/assets/1 (11).png>)

### **Refresh Login User Data**

#### **Action Brief**

This action involves refreshing the data associated with the current user, specifically refreshing the data within the default account table for individuals actively using the software. Normally, "login user data" is loaded only when the user enters the application and is not updated in real-time. After modifying the login user's data, it is necessary to manually configure this action to refresh and ensure the utilization or display of the most recent data.

#### **Configuration Guide**

Typically, you should configure this action upon the successful modification of data in the default account table. In the "User Action" section, you can locate the "Refresh Login User Data" action for configuration. This ensures that the data associated with the current user is updated after any successful changes, allowing for the use or display of the latest information.

![](<../../../../../.gitbook/assets/2 (7).png>)

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.​​​

### **About Momen​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
