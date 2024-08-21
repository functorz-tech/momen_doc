---
description: >-
  Learn how to trigger specific actions in Momen's no-code platform based on
  various conditions.
---

# Conditional Actions Design

### Introduction

In this tutorial, you'll explore how actions are triggered based on different conditions. 


When implementing certain business logic, we may need to instruct the software to perform different actions based on conditions. In Momen, this can be achieved by configuring conditional actions.

**For example:** In an event registration, users need to input their name and contact information. When they click the registration button without entering information, a prompt appears, asking them to enter their name or contact information. 

**The configuration of conditional actions:** In the example mentioned above, we typically add two conditional actions to the registration button. The first one is named "Incomplete Registration Information," and its conditions are configured to check if the customer's name input field is empty or if the contact phone input field is empty. When these conditions are met, the action is configured to display a prompt saying "Please complete the registration information." The second one is named "Information Complete," and its condition is set as "Always." In this case, if the previous condition is not met, it indicates that the information is complete, and in the second condition, the registration-related behavior is configured.

<figure><img src="../.gitbook/assets/conditional_actions/ca1.gif"><figcaption></figcaption></figure>


Tips:&#x20;

You can add multiple judgment conditions by clicking the "+" in \[Conditional] action interface. Each condition can be configured with corresponding actions when it is met. The conditional judgment follows a top-to-bottom order. When the preceding condition is met, the associated action triggers. If not, subsequent conditions come into play.

\
If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz.) for assistance.\


### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
