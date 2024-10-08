---
description: >-
  Guide on using conditional containers in Momen. Learn how to set up
  sub-containers based on user interactions or states.
---

# Conditional Containers Design

### Introduction:

On many web pages, the content displayed often depends on certain conditions, like whether a user is logged in or not. This tutorial will guide you through the design of conditional containers in Momen. Specifically, we will focus on the "Conditional Container" component, showing you how to set up and configure different sub-containers based on specific conditions. By the end, you'll know how to show content according to user interactions or states on your webpage.

### How to Add Subcontainers in Conditional Containers

Drag a conditional container to the page. Edit the sub-containers on the top of the right side bar.

<figure><img src="../../ui-design/.gitbook/assets/conditional_containers/conditional_container1.jpeg" alt=""><figcaption></figcaption></figure>

The function of the default \[Loading] sub-container is to process the content displayed when the data is not loaded and returned after entering the page, and generally we do not add any content to the \[Loading] sub-container!

You can click the Focus Mode button above the conditional container to enter the sub-container, and edit the content and conditions in a sub-container individually.

<figure><img src="../../ui-design/.gitbook/assets/conditional_containers/conditional-containers2.gif" alt=""><figcaption></figcaption></figure>

💡Tips: The judgment order of conditional containers is judged from left to right, when the previous condition is true, the content of the corresponding sub-container is directly displayed, and if the previous condition is not true, the judgment of the next condition is entered.



### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
