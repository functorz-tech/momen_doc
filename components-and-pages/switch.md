---
description: >-
  Generally used for toggling between two states, controlling permissions,
  agreeing to privacy policies, etc.
---

# Switch

### Introduction

In this section, you will learn how to use the switch component to manage and track the completion status of tasks. This tutorial will break down the usage and customization of the switch component, making it easier for you to implement on your to-do lists and other applications.

### Application Scenarios

The switch component finds its place in scenarios where you need to determine whether a task is completed or not. A prime example is in to-do lists, where it's essential to mark tasks as done.

#### Component Properties

1.  Style Selection

    * Momen provides three types of switch styles for users to choose from.



    <figure><img src="../.gitbook/assets/1 (37).png" alt="Three types of switches in Momen."><figcaption></figcaption></figure>

💡Tips:

While the switch component doesn't offer custom styles, you can still personalize it using the \[Conditional Container] and \[Image] components.



* After selecting the style, you can choose the selected color. For the two styles, you can also configure the deselected color.

<figure><img src="../.gitbook/assets/2 (32).png" alt="Selected color with deselected color."><figcaption></figcaption></figure>

💡Tips:

* The configuration for the deselected color extends to the circle outside the switch, while the selected color configuration affects the inner circle, excluding (√).
* Even after configuring the color, changing the style selection will retain the chosen colors.



2. Content

The switch component uses Boolean values, with the content limited to true or false.

* True represents a checked switch.
* False indicates an unchecked switch.

💡Tips:

<mark style="color:red;">True and false must be in lowercase.</mark>

The text content represents the default state of the switch when the page loads. You can also change the switch's appearance by toggling it and adjusting the output value simultaneously.\


3. Configuration

The switch component falls into the input class category and is configured in the input box class data. The output type of the switch is also Boolean (true/false). When configuring, ensure that the corresponding parameter attributes are Boolean values.

<figure><img src="../.gitbook/assets/3 (25).png" alt="Make sure the input type of the switch is Boolean." width="375"><figcaption></figcaption></figure>

💡Tips:

When using the switch component to configure data, you have the option to directly select the switch data or configure "true" and "false" values, as seen in the official template to-do list.\


### Usage Scenarios

A typical use case for the switch component is in official template to-do lists.

By adding tasks, you'll find that the default state of the switch is "false" (unchecked). Clicking the switch transforms it into "true," signifying task completion.

<figure><img src="../.gitbook/assets/4 (2).gif" alt="Effective demonstration."><figcaption></figcaption></figure>

\


### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
