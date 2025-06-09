---
description: >-
  Generally used to show different UI content based on conditional evaluation or
  when toggling condition view.
---

# Component - Conditional View

## Overview

Conditional View allows you to display different UI content based on specific conditions. This component is useful for scenarios such as showing different interfaces for users with different permissions, toggling between views with buttons, or creating tab-like navigation. It enables dynamic and context-sensitive UI within a single page.

## Usage Scenarios

- **Different Views on the Same Page:** Show different content for logged-in and non-logged-in users, or for users with different roles.
- **View Switching with Buttons:** Change the displayed content by clicking a button (e.g., switch to a CAPTCHA countdown after clicking "Send CAPTCHA").
- **Combining with Select View:** Create tab bar effects or expand/collapse catalog subsets based on user selection.

## Adding Subviews in Conditional View

You can add, modify, or delete subviews within a Conditional View to display different content under different conditions.

For example, on a login screen, you might have three user identities: "visitor," "user," and "admin." To display different content for each, add three subviews to the Conditional View.

![Conditional View with multiple subviews for different user roles](../.gitbook/assets/conditional_view/conditional_view1.jpeg)

> **Tip:** Conditional View includes a default "loading..." condition, shown while page data is loading. This condition cannot be deleted or assigned custom logic. It is recommended not to modify it.

After adding subviews, click "Focus Mode" to enter the conditional subview editor. Here, you can see all subviews, configure their display conditions, and drag components to build the corresponding UI.

![Editing conditional subviews in Focus Mode](../.gitbook/assets/conditional_view/conditional-view2.gif)

### Conditional Evaluation Order

Subviews are evaluated in order from left to right (or top to bottom, based on the order of addition). The first subview whose condition is met will be displayed. If no conditions are met, the last subview is shown.

![Conditional evaluation order in Conditional View](../.gitbook/assets/conditional_view/conditional-view3.jpeg)

> **Tips:**
> 1. Change the order of conditions by dragging the condition name in the Conditional View content bar.
> 2. If all conditions are set to "always," the topmost subview is displayed.
> 3. If no conditions are set, all subviews default to "always." You can then use the [Switch View Condition] action to toggle between subviews.

### Rerun Conditions on Remote Data Update

If remote data is used as a condition, you may need to recalculate conditions in real time as data changes. Enable the [Remote Condition on Remote Data Update] mode to handle this.

![Remote data update mode for Conditional View](../.gitbook/assets/93a2a1b8-5d42-4e5f-9045-6d8da07bceb8.png)

> **Tip:** The update frequency depends on the request type. Query-type requests update on page load or refresh; subscription-type requests update when backend data changes (not applicable to media/file types).

## Use Cases

### 1. Different Conditions, Different Views

Display different content based on user roles or login status.

- Example: Show a specific view when the user role is "hr" by setting the condition to "user type = hr" and placing relevant components in that subview.

![Conditional View for user role 'hr'](../.gitbook/assets/54847f4e-234d-4344-a6b4-3e4344a15778.png)
![Setting subview condition for user type](../.gitbook/assets/f166d24a-7334-48f4-8e74-bb66e54a6ea3%20(1).png)

- Example: Show a registration view for non-logged-in users and an update view for logged-in users.

![Switching views based on login status](../.gitbook/assets/f8ec8586-17b7-44a8-a339-4a29a70ea4a3.gif)

> **Tip:** For non-logged-in users, configure a one-click authorization button to complete login, refresh user data, or switch to the logged-in view.

### 2. Button-Triggered View Switching

Use a button to switch between subviews, especially when conditions are set to "always."

- Example: In a login form, place the password input in a Conditional View. Clicking show/hide toggles the password display mode.

![Toggle password visibility with Conditional View](../.gitbook/assets/af8b9b8d-6e67-4012-b3dc-7db17d2e53d4.gif)

- Example: On an e-commerce page, use Conditional View to switch between "item in cart" and "item not in cart" states.

![Switching cart states with Conditional View](../.gitbook/assets/8c896263-8b28-44c2-92ac-b61359a5b103.gif)

> **Tip:** Predefine the possible states for Conditional View. For example, check if the user's cart contains the current item and set the condition accordingly. Avoid setting all conditions to "always," or the first subview will always display.

### 3. Combining with Selection View

- Example: Use Conditional View to display different content based on selection, similar to a tab bar.

![Tab bar effect with Conditional View and Selection View](../.gitbook/assets/a41a1fe2-2bbc-428d-9d74-4440c7f62b93.gif)

- Example: On a shopping page, display parent categories first, then expand sub-categories after selection. See the [Help Center] for details on configuring Conditional View with Selection View for expanding subdirectories.

![Expanding sub-categories with Conditional View](../.gitbook/assets/7521052c-2e87-44c2-a679-d7fcb3979c1b.gif)
