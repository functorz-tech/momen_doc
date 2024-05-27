---
description: >-
  Learn how to control web content based on user login status with our no-code
  tutorial on logical data and logged-in status.
---

# Logical Data｜ Is Logged In

### Introduction

To create a web page that caters to a user's login status, it's crucial to understand the logical data involved, and this tutorial will guide you through the process. This part is only used on the web to determine if a user is logged in.

Make sure you are familiar with the following two tutorials before reading this section:

[Website Login Page Design](../../tutorial/how-to-design-your-login-page.md)

Logical Condition Design

### Data Definition

1. The data type of "is logged in" is Boolean, true means logged-in, and false means not logged-in.
2. To exit the "is logged in": configure the "User Login -> Logout" behavior on the Logout button.

### Usage Examples

Learn how to use "is logged in" with an example from Momen.We expect the user to see a differentiated entrance to the personal center as "Visitor" and "Logged-in", and only logged-in users will be able to access the personal center.

Unlogged in user style

<figure><img src="../../.gitbook/assets/1 (66).png" alt="Unlogged-in user style."><figcaption></figcaption></figure>

Logged in user Style

<figure><img src="../../.gitbook/assets/2 (56).png" alt="Logged-in user style."><figcaption></figcaption></figure>

#### **Realization Method**

1. Conditional container style configuration

<figure><img src="../../.gitbook/assets/3 (53).png" alt="Conditional container style configuration."><figcaption></figcaption></figure>

2. Use "is logged in" as a condition in the contents of the "logged-in" and "not logged-in" conditional sub-containers.

<figure><img src="../../.gitbook/assets/4 (49).png" alt="Use &#x22;is logged in&#x22; as a conditional judgment."><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/5 (40).png" alt="Use &#x22;is logged in&#x22; as a conditional judgment."><figcaption></figcaption></figure>

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
