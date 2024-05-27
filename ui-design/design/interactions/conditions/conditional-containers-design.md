---
description: >-
  Guide on using conditional containers in Momen. Learn how to set up
  sub-containers based on user interactions or states.
---

# Conditional Containers Design

### Introduction:

On many web pages, the content displayed often depends on certain conditions, like whether a user is logged in or not. This tutorial will guide you through the design of conditional containers in Momen. Specifically, we will focus on the "Conditional Container" component, showing you how to set up and configure different sub-containers based on specific conditions. By the end, you'll know how to show content according to user interactions or states on your webpage.

### Content with Conditional Containers

Within a single webpage, the content displayed may need to vary significantly based on certain conditions. For instance, in the construction of a user profile section, non-logged-in users should only be presented with login-related content. However, once logged in, users should be able to view the entire structure of their profile, inclusive of various information.

In Momen, there is a component known as the 【Conditional Container】. Within this component, sub-containers can be added to reflect different content based on the specified conditions. Subsequently, the specific conditions to be met for content display are set within these sub-containers. Whenever the set conditions are satisfied, the content within the respective sub-container is displayed.

Using the aforementioned scenario as an example, login-related content can be placed within one sub-container of the【Conditional Container】, while the structure and other details of the user profile can be housed in another. The individual conditions—whether the user is logged in or not—are then set for each sub-container. Content from the sub-container whose conditions are met will be displayed.

### How to Add Sub-containers to the Conditional Container?

Drag and drop a Conditional Container onto the webpage. In the sidebar of the Conditional Container, click on the【+】to add a conditional sub-container and rename it as desired.

<figure><img src="../../../../.gitbook/assets/1 (61).png" alt="Drag and drop a conditional container in a no-code tool"><figcaption></figcaption></figure>

The default【Loading】sub-container is designed to display content while data is still being loaded upon entering a page. Typically, we do not add any content inside the【Loading】sub-container.

<figure><img src="../../../../.gitbook/assets/2 (53).png" alt="Drag and drop sub-containers in a no-code tool"><figcaption></figcaption></figure>

You can drag and drop newly added sub-containers to adjust their sequential order.

<figure><img src="../../../../.gitbook/assets/3 (9).gif" alt="Drag and drop sub-containers in a no-code tool"><figcaption></figcaption></figure>

### How to Set Conditional Criteria for Conditional Sub-containers?

Select a particular sub-container and configure the corresponding conditional criteria in its right-hand sidebar.



<figure><img src="../../../../.gitbook/assets/4 (48).png" alt="Set conditional criteria for conditional sub-containers in a no-code tool"><figcaption></figcaption></figure>

{% hint style="info" %}
Tips:&#x20;

The evaluation sequence for conditional containers proceeds from left to right. If a condition is met, the content within the corresponding sub-container is immediately displayed. If the condition is not met, evaluation proceeds to the next condition.
{% endhint %}

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz.) for assistance.\


### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
