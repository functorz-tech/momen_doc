---
description: >-
  Learn how to use Momen's calendar component to elevate your management and
  event planning apps.
---

# Calendar

### **Introduction**

Calendar is a crucial component in apps that involves management, booking system and event planning. You'll learn the usage of calendar component, including scenarios, design and configurations.

### **Application Scenarios**

* **Schedule Management:** In personal and enterprise management software, calendars are used to schedule and track meetings, tasks, and events. Users can view upcoming events and deadlines through the calendar.
* **Appointment and Booking Systems:** In appointment systems within industries such as healthcare, beauty, and dining, calendars are used to schedule customer appointments. This helps in managing customer visit times and resource allocation.
* **Holiday and Special Event Marking:** Many applications use calendars to mark public holidays, cultural events, or personal significant days (such as birthdays, anniversaries, etc.).

These are just some scenarios of calendar applications; in reality, calendars play a crucial role in almost any field that requires time management and event planning.



### **Calendar Component Design**

**Dark Mode**: By default, it is turned off. When activated, the background color of the calendar changes to black, and the date is displayed in white.

<figure><img src="../../../.gitbook/assets/0 (32).png" alt="Calendar component in a no-code tool"><figcaption></figcaption></figure>

**Display Today**: By default, it is turned on. The calendar will display the current month and date.

<figure><img src="../../../.gitbook/assets/1 (13).gif" alt="Calendar component in a no-code tool"><figcaption></figcaption></figure>

### **Calendar Component Content**

Selected Date: It supports data binding only and is optional.

| <img src="../../../.gitbook/assets/2 (60).png" alt="How the calendar component works in Momen, a no-code tool" data-size="original"> | <img src="../../../.gitbook/assets/3 (57).png" alt="How the calendar component works in Momen, a no-code tool" data-size="original"> |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |

Tips:

When the selected date is not in the format of date/timestamp type, the calendar will not display the selected date.

### **Output Configuration**

The calendar component is not an input-type component. If you want to retrieve the selected date through the calendar component, you need to combine the interactive operations of the calendar component with the page data. Assign the selected result to the page data, and then reference the page data when adding or modifying data. Refer to the calendar component operation example below for guidance.

### **Calendar Component Interaction**

**Click date event:** the behavior that is executed when you click on a date in the calendar.

**Example of operation:** Retrieve the clicked date.

<figure><img src="../../../.gitbook/assets/4 (8).gif" alt="Calendar component interaction in momen, a no-code tool"><figcaption></figcaption></figure>

1. Set the page data "day" type as the date.

<figure><img src="../../../.gitbook/assets/5 (43).png" alt="Configuration of calendar component in momen"><figcaption></figcaption></figure>

2. Drag the calendar component into the page, then in the component's interaction, under the "On data clicked actions," configure the action to "Set Page Data" with the value being the clicked date from the result data. At this point, you need to click on this value to choose the display format for the selected date result, such as "Date": 2023/12/12, "Month Day": 12/12, "Date Time": 2023/12/12 14:00, etc.

<figure><img src="../../../.gitbook/assets/6 (40).png" alt="Configuration of calendar component in momen"><figcaption></figcaption></figure>

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
