---
description: >-
  Learn how to work with constant data in Momen. Understand time, date, and
  timestamp data types and discover when to use them.
---

# Constant Data | Time Data

### Introduction

In this tutorial, we will help you to learn about Constant Data and Time Data. Whether you're a beginner or an experienced user, this tutorial provides a straightforward guide to help you master these data types.

Time-related data processing in Momen encompasses three data types: time, date, and timestamp. It's essential to grasp these data types when working with time-related operations.

| Time Data Type                | Judgement | Calculation |
| ----------------------------- | --------- | ----------- |
| Current Time (Time)           | ✅         | ❌           |
| Current Data (Date)           | ✅         | ❌           |
| Current Time Date (Timestamp） | ✅         | ✅           |

{% hint style="info" %}
💡Tips:

The number of milliseconds stored behind the timestamp is from 0:0 on January 1, 1970, to a certain point in time. It is recommended to use timestamps as much as possible because **a well-defined point in time records the most complete information.**
{% endhint %}

### When to Use

Time data should be used in constant data when it is necessary to make conditional judgments or perform data insertion operations based on the current time. If a fixed time is to be processed, such as a comparison with February 22, 2022, the time should be stored in the backend for remote data calls, not as time data.\


### Usage

#### Current Time, Date

This refers to the time at the moment. For example, "14:03". It changes instantly with system time changes.Refers to today's date, like "November 11, 2023." It updates with system date changes.

#### Current Time Date

Configure it to obtain a time point based on a specific time interval from the current time (e.g., seven days ago at 00:00; one year from now).

<figure><img src="../../.gitbook/assets/1 (68).png" alt="Usage example of setting up the current time date." width="563"><figcaption></figcaption></figure>

* Area 1: Expresses the relative relationship with the current time, such as how many hours later or months ago.
* Area 2: Describes area 1 in terms of "number". This must be set to 0 if it is to indicate "Today".
* Area 3: Details the current relationship with time. If left blank, it signifies the current point in time. Fill in a specific number to store as the corresponding value.

{% hint style="info" %}
💡Tips:

1. After selecting the format, the data type of the current time and date changes from timestamp to text. Ensure you use the default format for conditional judgment and storage.
2. Avoid using "month" as the calculation range due to varying days in each month.
{% endhint %}

### Use Case

1. A user subscribes to a two-year membership, and their expiration time is recorded upon successful recharge.

<figure><img src="../../.gitbook/assets/2 (57).png" alt="Example of recording membership expiration time." width="308"><figcaption></figcaption></figure>

2. Pickup is scheduled for 2:00 p.m. the next day.

<figure><img src="../../.gitbook/assets/3 (54).png" alt="Example of scheduling a pickup time." width="306"><figcaption></figcaption></figure>

3. The registration button closes 10 minutes before the event starts: event start time < current time + 10 minutes.

<figure><img src="../../.gitbook/assets/4 (50).png" alt="Example of setting a Timestamp." width="305"><figcaption></figcaption></figure>

**Formatting Time Types**

<figure><img src="../../.gitbook/assets/3 (15).png" alt="Formatting time types."><figcaption></figcaption></figure>

**Formatting Date Types**

<figure><img src="../../.gitbook/assets/4 (15).png" alt="Formatting date types."><figcaption></figcaption></figure>

**Formatting Timestamp Types**

<figure><img src="../../.gitbook/assets/5 (10).png" alt="Formatting timestamp types."><figcaption></figcaption></figure>

\
\
If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
