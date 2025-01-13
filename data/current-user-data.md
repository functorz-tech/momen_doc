---
description: Learn when and how to use current user data for various scenarios effectively.
---

# Current User Data

### Introduction

This tutorial will clarify the Current User Data concept and associated data, which will help you discover when and how this data is loaded and explore its best use cases.

### What Are Current User and Current User Data

**Current User:** refers to the person who is accessing your program, not the developer

**Current User Data:** As shown in the following figure, the current user data is actually the data belonging to the "live user" in the "account table" (account table).

<figure><img src="../../.gitbook/assets/1 (64).png" alt="What is current user data."><figcaption></figcaption></figure>

### When Is the Current User Data Loaded and How Is It Refreshed?

Current user data is read only when the program is initially loaded and isn't updated as the user interacts with your program. Consequently, it's best suited for scenarios with fixed data requirements.

As an example, when determining if a user is logged in, using current user data as a condition can lead to discrepancies. You can add the "refresh current user data" action to relevant operations to address this.

### Where Is Momen's Current User Data?

As shown in the figure below, when you click the \[+] sign to add data for a component or action, the data selection window shown in the middle of the Figure will pop up, where you can click "Current User Data" to open the window on the right side of Figure to select specific data.

The red box is the default current user data in the \[account table], which can be used directly; the blue box is the other data table associated with the \[account table], that is, the data in other tables related to the "current user", which can also be referenced through the "current user data". can also be used through the "current user data" reference.

<figure><img src="../../.gitbook/assets/2 (55).png" alt="Where to find current user data in Momen."><figcaption></figcaption></figure>

### When to Use Current User Data

Since the current user data can not be automatically updated, why do we still choose to use it? Because in the process of building a project, there will be a large number of places that have a relationship with the user, if we take on each page by adding remote data, the amount of operations will be relatively large, in words: convenience.

#### Common Usage Scenario 1

Display of user's information (information that the user will not modify on his/her own)

Example: user's membership expiration time, user's annual report.

#### Common Usage Scenario 2

Recording User Actions

Example: A user posts a question in the community, and in the relationship field that records which user posted the question, it is most convenient and secure to use the current user's data.

<figure><img src="../../.gitbook/assets/3 (52).png" alt="Recording user actions."><figcaption></figcaption></figure>



### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
