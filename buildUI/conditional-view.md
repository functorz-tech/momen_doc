---
description: >-
  Generally used to show different UI content based on conditional evaluation or
  when toggling condition view.
---

# Component - Conditional View

## Usage Scenario

Conditional view serve the purpose of displaying different content based on specific conditions. These conditions can encompass various elements, including data, user interfaces, or different functional entrances with varying permissions, all within the same interface. Here are some common scenarios where you can leverage this component:

* Different view on the Same Page: You can showcase different view on a single webpage based on conditions. For instance, the page's display can vary for users who are logged in and those who aren't.
* View Switching with Buttons: Conditional view allow you to change the displayed content on the same page by clicking a button. For example, clicking the "Send CAPTCHA" button can switch the display to a CAPTCHA Countdown.
* Combining with Select View: You can use Conditional view to create an effect similar to a tab bar or expand a catalog subset based on user selections.

## Add Subview in Conditional view

In conditional view, you can add/modify/delete conditional sub-view to display different content under different conditions.

For example, when creating a login screen, there are three conditions based on users identities: "visitor", "user", and "admin", so in order to display different interface content under different conditions, we need to add three more sub-view to the content of the conditional view.

<figure><img src="../.gitbook/assets/conditional_view/conditional_view1.jpeg" alt=""><figcaption></figcaption></figure>

💡Tips: Conditional view have a default condition, "loading". When the page data is still loading, the conditional view will show that it's loading. This condition can not be deleted, you can not set the conditions to it either. It is recommended not to make any changes to it!

After adding the view, you can click "Focus Mode" to enter the conditional sub-view, where you can see four sub-view. You can click on the sub-view to configure the display conditions of the sub-view, and drag other components and build the corresponding business logic

<figure><img src="../.gitbook/assets/conditional_view/conditional-view2.gif" alt=""><figcaption></figcaption></figure>

### Conditional Judgment Order Logic

The order in which sub-view view are evaluated follows the red arrow, from left to right, or according to the order of adding sub-view from top to bottom. When a condition is met, the view displays the content below that condition. If no conditions are met, the result of the last matching condition is shown.

<figure><img src="../.gitbook/assets/conditional_view/conditional-view3.jpeg" alt=""><figcaption></figcaption></figure>

💡Tips:

1. The order of the conditions can be changed by dragging and dropping the condition name from the optional condition in the content bar of the conditional view (red box in the figure below).
2. when all conditions are always or the same, the conditional view displays the topmost condition view (not logged in as shown below)
3. when all conditions are not set, the condition is always by default, then you can switch the view of the current conditional subview through the \[Switch View Condition] action.

### Rerun Conditions on Remote Data Update

In some cases, remote data can be used as conditions for Conditional view. As remote data changes, the conditions may need to be recalculated in real-time. Momen provides a \[Remote Condition on Remote Data Update] mode to handle such situations.

<figure><img src="../.gitbook/assets/93a2a1b8-5d42-4e5f-9045-6d8da07bceb8.png" alt=""><figcaption></figcaption></figure>

💡Tips: The update of remote data depends on the request type. In query-type requests, remote data is fetched or updated when the page loads or refreshes, while in subscription-type requests, data is updated when backend data changes (not applicable to media and file types).

### Use cases

#### Different Conditions, Different Display View

1. When user rights differ, the displayed page content can also differ. For instance, when user rights are "hr," the condition can be set to "user type=hr," and specific components are placed in that condition view.

<figure><img src="../.gitbook/assets/54847f4e-234d-4344-a6b4-3e4344a15778.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/f166d24a-7334-48f4-8e74-bb66e54a6ea3 (1).png" alt="Sub-view condition setting"><figcaption></figcaption></figure>

2. When the user's login status varies, the display view can change. For instance, when a user is not logged in, the condition can be set to the "Register," while for logged-in users, it's set to "Update"

<figure><img src="../.gitbook/assets/f8ec8586-17b7-44a8-a339-4a29a70ea4a3.gif" alt="The display view showcase."><figcaption></figcaption></figure>

💡Tips:

For non-logged-in users, configure the one-click authorization button to complete the login, refreshing the user data or switching the view to the logged-in state.\\

#### Click the Button to Switch the View Display

💡Tips:

This approach is suitable for Conditional view with a condition set to "always." By configuring a button to switch the view condition, you can achieve the effect of changing the view display by clicking the button.\\

1. In a login scenario, where the user enters a password, the text input box can be placed in a Conditional view. By clicking show/hide buttons, you can switch the password display mode.

<figure><img src="../.gitbook/assets/af8b9b8d-6e67-4012-b3dc-7db17d2e53d4.gif" alt=""><figcaption></figcaption></figure>

2. On an e-commerce webpage, you can use Conditional view to switch between the state of having an item in the shopping cart and not having one, allowing for different view.

<figure><img src="../.gitbook/assets/8c896263-8b28-44c2-92ac-b61359a5b103.gif" alt=""><figcaption></figcaption></figure>

💡Tips:

Similar to this need to determine in advance conditional view to pre-display the view of the situation, as shown in the figure below, need to first determine whether the user's shopping cart has been added to the current purchase of goods, conditional view need to set the status of the condition can not be placed in "always" otherwise when the user's shopping cart has been added to the current purchase of goods, but also still will be the first to display the situation of the un-added.\\

#### Combining Selection View

1. Conditional view can display different view based on the selection, similar to a tab bar. While they can't be scrolled, you can find specific configuration methods in the \[Help Center] documentation on Conditional view and Selection of view.

<figure><img src="../.gitbook/assets/a41a1fe2-2bbc-428d-9d74-4440c7f62b93.gif" alt="Actual Page Showcase"><figcaption></figcaption></figure>

2. In a shopping webpage, you can display parent categories first, and after clicking a category, you can expand sub-categories. This allows users to view products under those sub-categories, and the specific configuration is described in the \[Help Center] documentation on Conditional view Sets Selection View (Expanding Sub-directories).

<figure><img src="../.gitbook/assets/7521052c-2e87-44c2-a679-d7fcb3979c1b.gif" alt=""><figcaption></figcaption></figure>
