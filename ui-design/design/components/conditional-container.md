---
description: >-
  Master the art of using Momen's Conditional Containers to display content on
  your website based on specific conditions dynamically.
---

# Conditional Container

### Introduction

Welcome to the Momen tutorial on utilizing Conditional Containers. In this guide, we will explore the practical applications of Conditional Containers to display different content under various conditions, enhancing the user experience on your website. Whether you're new to web development or have some experience, we'll break down this feature into manageable steps.

### Usage Scenario

Conditional Containers serve the purpose of displaying different content based on specific conditions. These conditions can encompass various elements, including data, user interfaces, or different functional entrances with varying permissions, all within the same interface. Here are some common scenarios where you can leverage this component:

* Different Views on the Same Page: You can showcase different views on a single webpage based on conditions. For instance, the page's display can vary for users who are logged in and those who aren't.
* View Switching with Buttons: Conditional Containers allow you to change the displayed content on the same page by clicking a button. For example, clicking the "Send CAPTCHA" button can switch the display to a CAPTCHA Countdown.
* Combining with Select View: You can use Conditional Containers to create an effect similar to a tab bar or expand a catalog subset based on user selections.

### Add Subcontainers in Conditional Containers

In conditional containers, you can add/modify/delete conditional sub-containers to display different content under different conditions.

For example, when creating a login screen, there are three conditions based on users identities: "visitor", "user", and "admin", so in order to display different interface content under different conditions, we need to add three more sub-containers to the content of the conditional container.

<figure><img src="../../../.gitbook/assets/conditional_containers/conditional_container1.jpeg"><figcaption></figcaption></figure>

💡Tips:&#x20;

Conditional containers have a default condition, "loading". When the page data is still loading, the conditional containers will show that it's loading. This condition can not be deleted, you can not set the conditions to it either. It is recommended not to make any changes to it!

After adding the container, you can click "Focus Mode" to enter the conditional sub-container, where you can see four sub-containers. You can click on the sub-container to configure the display conditions of the sub-container, and drag other components and build the corresponding business logic

<figure><img src="../../../.gitbook/assets/conditional_containers/conditional-containers2.gif"><figcaption></figcaption></figure>


#### Conditional Judgment Order Logic

The order in which sub-container views are evaluated follows the red arrow, from left to right, or according to the order of adding sub-containers from top to bottom. When a condition is met, the Container displays the content below that condition. If no conditions are met, the result of the last matching condition is shown.

<figure><img src="../../../.gitbook/assets/conditional_containers/conditional-containers3.jpeg"><figcaption></figcaption></figure>


💡Tips:

1. The order of the conditions can be changed by dragging and dropping the condition name from the optional condition in the content bar of the conditional container (red box in the figure below).
2. when all conditions are always or the same, the conditional container displays the topmost condition view (not logged in as shown below)
3. when all conditions are not set, the condition is always by default, then you can switch the view of the current conditional subcontainer through the \[Switch View Condition] behavior.


#### Rerun Conditions on Remote Data Update

In some cases, remote data can be used as conditions for Conditional Containers. As remote data changes, the conditions may need to be recalculated in real-time. Momen provides a \[Remote Condition on Remote Data Update] mode to handle such situations.

<figure><img src="../../../.gitbook/assets/93a2a1b8-5d42-4e5f-9045-6d8da07bceb8.png" alt=""><figcaption></figcaption></figure>

💡Tips: The update of remote data depends on the request type. In query-type requests, remote data is fetched or updated when the page loads or refreshes, while in subscription-type requests, data is updated when backend data changes (not applicable to media and file types).


### Conditional Container Design

It is worth noting that conditional containers can only adjust the width and height of the parent container, the width and height of the child container is determined by the width and height of the parent container.

If you want the height of the parent container to change according to the height of the child container, you can set the height mode of the parent container to \[Adapt to Content], for example, the height occupied by all the components in the child container one is 100, and the height occupied by all the components in the child container two is 200, and the height of the parent container will change according to the height of the child container when the conditions change.\


### Utilization

#### Different Conditions, Different Display View

1. When user rights differ, the displayed page content can also differ. For instance, when user rights are "hr," the condition can be set to "user type=hr," and specific components are placed in that condition view.

<figure><img src="../../../.gitbook/assets/54847f4e-234d-4344-a6b4-3e4344a15778.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/f166d24a-7334-48f4-8e74-bb66e54a6ea3 (1).png" alt="Sub-container condition setting"><figcaption></figcaption></figure>

2. When the user's login status varies, the display view can change. For instance, when a user is not logged in, the condition can be set to the "Register," while for logged-in users, it's set to "Update"

<figure><img src="../../../.gitbook/assets/f8ec8586-17b7-44a8-a339-4a29a70ea4a3.gif" alt="The display view showcase."><figcaption></figcaption></figure>

💡Tips:&#x20;

For non-logged-in users, configure the one-click authorization button to complete the login, refreshing the user data or switching the view to the logged-in state.\


#### Click the Button to Switch the View Display

💡Tips:

This approach is suitable for Conditional Containers with a condition set to "always." By configuring a button to switch the view condition, you can achieve the effect of changing the view display by clicking the button.\


1. In a login scenario, where the user enters a password, the text input box can be placed in a Conditional Container. By clicking show/hide buttons, you can switch the password display mode.

<figure><img src="../../../.gitbook/assets/af8b9b8d-6e67-4012-b3dc-7db17d2e53d4.gif" alt=""><figcaption></figcaption></figure>

2. On an e-commerce webpage, you can use Conditional Containers to switch between the state of having an item in the shopping cart and not having one, allowing for different views.

<figure><img src="../../../.gitbook/assets/8c896263-8b28-44c2-92ac-b61359a5b103.gif" alt=""><figcaption></figcaption></figure>

💡Tips:&#x20;

Similar to this need to determine in advance conditional containers to pre-display the view of the situation, as shown in the figure below, need to first determine whether the user's shopping cart has been added to the current purchase of goods, conditional containers need to set the status of the condition can not be placed in "always" otherwise when the user's shopping cart has been added to the current purchase of goods, but also still will be the first to display the situation of the un-added.\


#### Combining Selection View

1. Conditional Containers can display different views based on the selection, similar to a tab bar. While they can't be scrolled, you can find specific configuration methods in the \[Help Center] documentation on Conditional Containers and Selection of Views.

<figure><img src="../../../.gitbook/assets/a41a1fe2-2bbc-428d-9d74-4440c7f62b93.gif" alt="Actual Page Showcase"><figcaption></figcaption></figure>

2. In a shopping webpage, you can display parent categories first, and after clicking a category, you can expand sub-categories. This allows users to view products under those sub-categories, and the specific configuration is described in the \[Help Center] documentation on Conditional Container Sets Selection View (Expanding Sub-directories).

<figure><img src="../../../.gitbook/assets/7521052c-2e87-44c2-a679-d7fcb3979c1b.gif" alt=""><figcaption></figcaption></figure>

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
