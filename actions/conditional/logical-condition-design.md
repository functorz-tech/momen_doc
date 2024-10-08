---
description: >-
  A responsive app always involves various conditional logic. Learn how to
  design logical conditions in this tutorial.
---

# Logical Condition Design

### Introduction

Conditional logic plays a vital role in computer software's decision-making. In this tutorial, you'll delve into the definition of conditional logic and how it works. Tips on configuring conditional logic in Momen will also be provided in this article.

\
We are making different choices every day. Those decisions need to be based on some conditions for judgment. For example: if it rains tomorrow, I will not go out. The ability to make conditional judgments is the reason why computer software is able to accomplish a variety of complex and diverse operations.

### Definition of conditional logic

**If** conditions are met, you can do something

**If** conditions are not met, do something else or nothing at all.\


### Differences Between Humans and Computers When Making Conditional Logics

The logic of human beings in judging things is very different from that of computer software. Humans rely mainly on subjective intention to make judgments, while computers rely on a figurative text or data to compare and contrast, one is one, two is two.

For example, if it's 3:00 PM, I need to reply to an email.&#x20;

For computers, to complete the time judgment, they need to get the current time, and then compare this time with "3:00 pm". If equal, then they'll reply to the e-mail.&#x20;

As humans, we already possess information about times and thus, are able to make a judgment by directly looking at it; however, for computers to reach the same effect, they will need to reference a compared group or have it claimed beforehand, this is the difference between human beings and computers to do judgment.\


### What Can Conditional Logic Do?

Read the data specified in the database according to the conditions: Filtering Condition&#x20;

Triggering different actions based on conditions: Conditional Actions Design&#x20;

Using or displaying different data (typically individual data) in a component based on conditions: Conditional Data Design&#x20;

Displaying different screens on the same page based on conditions: Design of Conditional Containers

### Types of Conditional Logics

#### Single-Conditional Logic

**Definition:** Only one condition is set. When the condition is true, a certain content will be displayed or a certain action will be performed.

For example, a condition is added to the conditional action. If the condition is established, a certain action will be triggered, otherwise, nothing will be done.\


#### The "Always" Case

**Definition:** In the design of conditional logic, if there are only two results, one is valid, and the other one is not valid, then the two conditions are in a "mutually exclusive" relationship. In the configuration of the conditions, you only need to configure one of the conditions, the other condition is configured as "always".

For example: when designing the judgemental condition of whether the input box has been filled, there are only two kinds of results. One is it has been filled in, the other is not. Then when configuring the conditions, you only need to judge whether "input box data" is \[empty], i.e., not filled out, and the other condition is configured as "always".

{% hint style="warning" %}
The judgment order of conditions is from top to bottom (conditional action, conditional data), or from left to right (conditional container), and the condition configured as "always" needs to be the last condition!
{% endhint %}

#### The "Never" Case

**Definition:** When "Never" is set, it means that this condition is always not true.\


### Comparative Conditional Logic

**Definition:** This type of condition is usually to compare the size of the result of a data. It defines regular comparison operators such as greater than, equal to, less than, etc. to compare the data. As shown in the following image, when configuring the comparative condition in Momen, the first to choose is the required comparison operator, then the type of data to be compared. Converted to arithmetic, the expression of this condition is presented as: remote data/profile/credits >= 1000.

<figure><img src="../../.gitbook/assets/1 (69).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Tips:&#x20;

Only the same type of data can be compared. For example, integers and integers can be compared, but integers and text can not be compared
{% endhint %}

#### Special Comparison Operators

| Operators      | Definition                                | Role/ Using Scenario                                                                |
| -------------- | ----------------------------------------- | ----------------------------------------------------------------------------------- |
| Null           | The data is empty, i.e. there is no data  | Determine that there is no data in the input box                                    |
| Not null       | The data is not empty, i.e. there is data | Determine that there is data in the input box                                       |
| Included       | Certain data exist in a collection        | Typically used as a filter to determine whether or not data exists in a collection. |
| Not included   | Data does not exist in a collection       | Typically used as a filter to determine if data does not exist in a collection.     |
| Similar to     | Some data is similar to certain data      | Generally used as a filter to filter data, often used to do fuzzy search            |
| Not similar to | Some data is not similar to certain data  | Typically used as a filter to filter data                                           |

#### Operating System Type Judgment (only in the conditional container)

The main function is to check which of the following systems the device that opens the app is. If it is the corresponding system, the condition is true:

* iOS
* Android

### Multiconditional Logic

#### Logical Conditional Logic

**Definition:** A conditional logic consists of several conditions. These conditions may need to be satisfied at the same time, or one of them, or none of them, the judgment condition is true. The "logical operators" are needed to connect these conditions in accordance with logic. Conventional logical operators are "and", "or", "not".\


**Logical Operator "And"**

**Definition:** "and" means at the same time. When judging the condition \[condition 1 and condition 2], it means that the condition statement is true when condition 1 and condition 2 are true at the same time.

Example:

Condition 1: the membership level is gold.

Condition 2: the consumption amount is greater than or equal to 1000.

When the user's membership level is gold, and the consumption amount is greater than or equal to 1000, then he/she can participate in the promotional activity.

**Add the "and" condition in Momen** (the conditional container and the conditional data are configured in the same way):

For example, if there is a button to participate in an activity on the page, add the \[Condition] action in the \[interaction] of the button, click the "+" sign to add judgment conditions, the default condition is case0, case1. You can click to modify the name of the condition. Click the judgment condition to expand the condition settings, and then click the \[Condition] configuration to add the specific conditions. Click the "+ Condition" button in the interface to add more conditions. The default added condition is "and".

{% embed url="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FNNm75vAys0CMwBUdWsgC%2Fuploads%2FP7d6kGdDevMyIAE0RmxO%2F2.mp4?alt=media&token=e30ffa5f-a55a-45fd-8bd5-b9817f105e5a" %}

**Logical Operator "Or"**

**Definition:** when judging \[condition 1 or condition 2], it means that as long as one of the conditions is established, the whole condition is established.&#x20;

Example:

Condition 1: the membership level is gold.

Condition 2: points greater than or equal to 1,000.

When the user's membership level is gold, or credits are greater than or equal to 1,000, he/she can participate in the promotional activity.

**Add the "or" condition in Momen** (the conditional container and the conditional data are configured in the same way):

For example, if there is a button to participate in an activity on the page, add the \[Conditional] action in the \[interaction] of the button, and click the "+" sign to add conditions, the default condition is case0, case1. You can click to modify the name of the condition. Click the judgment condition to expand the condition settings, and then click the \[Conditional] configuration to add the specific conditions. Click the "+ Condition" button on the interface to add more conditions. Then click on the "and" on the left side of the condition to switch it to "or".

{% embed url="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FNNm75vAys0CMwBUdWsgC%2Fuploads%2FjkSsTMXJJbM09f4uwVmh%2F3.mp4?alt=media&token=301e68cd-db89-4fb1-bf40-c1947369c1ee" %}

**Logical Operator "Not"**

**Definition:** "Not" means "is not / not equal to". In the judgment of \[not Condition 1], it means that the whole condition is true when condition 1 is not true.Example:Condition 1: The membership level is gold.When the user's membership level is not gold, he/she can participate in the promotional activity.

{% hint style="info" %}
Tips:&#x20;

The "not" operator in most cases can be directly completed by other conditions. For example, "not" gold membership can actually be configured as "not equal to" gold membership.
{% endhint %}

#### Nested Conditional Logics

**Definition:** When a certain condition is established, there is a new conditional logic under this condition. It is called the nested conditional logic.

Example: In a test drive booking activity, users need to add registration information. When designing the conditions for clicking the register button, the first condition is to judge if the event is over. If not, then judge whether the registration information is complete. If the information is complete, then the registration will be successful. Otherwise, it will prompt that the information is incomplete. If the activity has already over, it will directly prompt that the activity has ended.

<figure><img src="../../.gitbook/assets/4 (54).png" alt=""><figcaption></figcaption></figure>

Configuring nested conditions in condition action：&#x20;

For example, after configuring a conditional action to a button, add a new conditional action again in its action configuration. This new conditional action is called the inner condition. When the outer condition is established, the inner condition will be judged.

{% embed url="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FNNm75vAys0CMwBUdWsgC%2Fuploads%2FXczbJZgS1ImUBV5Y1tKf%2F5.mp4?alt=media&token=70511730-e900-450e-a57d-e3f333876827" %}

{% hint style="info" %}
Tips:&#x20;

For conditional containers, the configuration of nested conditions is adding a new conditional container to the conditional sub-container.
{% endhint %}

For conditional data, the configuration of nested conditions is not supported now.

**The judgment order of nested conditions**: The judgment of the outer conditions is carried out first. When the previous outer condition is not true, the next outer condition will be judged. When an outer condition is true, the inner layer of the condition will be judged until an inner condition is true. The conditional judgment will be terminated.

\


### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
