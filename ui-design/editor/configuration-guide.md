---
description: >-
  Learn how to easily configure your webpage options, including HTML title and
  path, with detailed instructions.
---

# Configuration Guide

### Introduction

In this article, you'll learn how to configure your webpage options like HTML title and path.

### Configure Your Web Page

After selecting a webpage or page element, each configuration option in the right sidebar is explained as shown in the image below:

<figure><img src="../../.gitbook/assets/1 (50).png" alt="Configuration setting in a no-code tool"><figcaption></figcaption></figure>

The results of setting the **HTML path** and **HTML title** are shown in the image below:

<figure><img src="../../.gitbook/assets/2 (44).png" alt="Result of the configuration set in a no-code tool ​"><figcaption></figcaption></figure>

### Tips

After setting a webpage as the \[Initial screen], the webpage path is hidden by default when accessed through a link. For example, if \[marketing] is set as the homepage path, the webpage link may appear as follows: https://8397kvn2w82q51.villa.momen.app/

We can not only access the webpage through the link shown above, but also through the following link: https://8397kvn2w82q51.villa.momen.app/marketing\


### Data and Action Loading Order of Pages

When a new page is opened, the various contents configured on the page will be loaded in a certain order. Understanding the loading order of these data can help us to correctly trigger the action and use the data.The loading order is as follows:

* If the page is configured with links, it receives link data from other pages first.
* If the page is configured with pages, it creates a page with an empty value and waits for the value to be assigned.
* If the page is configured with a "page loading" action, then it will start executing that action.
* If the page is configured with remote data, then it will start reading the contents of the remote data (the order in which the remote data on the component and the remote data on the page are loaded is not sequential at the moment).
* Finally, the local data of each component or the default value is displayed.



### Lifecycle

**Definition:** The period from the time you load a page to load its content until the time you close and deallocate the page is called the page's lifecycle.During the lifecycle of a page, as shown in the image below, you can configure the action you expect when the page is loaded (page loading action), and you can configure the behavior you expect when the page is closed (page deallocate action).

<figure><img src="../../.gitbook/assets/3 (43).png" alt="Interaction configuration in a no-code tool" width="274"><figcaption></figcaption></figure>

**Common "page loaded" configurations**

Here are two common ways configurations for "page loaded":

* A pop-up advertisement with countdown timer when loading the page. You can configure the countdown timer and display pop-up action to control and display the advertisement during the lifecycle of "page loaded".
* Set the initial value for the page data to be used on the current one when loading the page. You can configure the \[Set Page Data] action when the page is loaded in the lifecycle.

### Scheduled Job

**Definition**: Triggers a behavior based on a certain time interval, and will not stop until it is manually paused or the page is closed

**Trigger interval:** In milliseconds, the configured behavior will be triggered once after each "trigger interval".

**Trigger immediately**: When the configuration is turned on, the timer task will be started automatically when the page is accessed.

<figure><img src="../../.gitbook/assets/4 (40).png" alt="Scheduled job in a no-code tool" width="272"><figcaption></figcaption></figure>

**Manually start/pause a scheduled job on a page:** As shown in the following image, you can start or pause a timed task by adding the "Scheduled Job Control" behavior to a component.

<figure><img src="../../.gitbook/assets/5 (32).png" alt="Scheduled job control in a no-code tool" width="347"><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/6 (31).png" alt="Scheduled job control in a no-code tool" width="254"><figcaption></figcaption></figure>

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.\


### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
