---
description: Explore component controls for conditional container actions in Momen.
---

# Component Control | Conditional Container | Switch View Case

### **Introduction**

In this tutorial on Component Control, we explore the functionality of Conditional Containers with a focus on the \[Switch View Case] action. Before diving in, it's recommended to have a good understanding of Conditional Containers.

### **Action Brief**

💡Tips:

When employing Conditional Containers and aiming to control the sub-container view without relying on sub-container conditions, the \[Switch View Case] action provides an alternative method for sub-container view transitions.

### **Application Scenarios**&#x20;

When the switch view case action is triggered, the page will switch to display the selected conditional container and the selected condition.

Switch View Case is commonly associated with a button, serving as the trigger to switch the view within the conditional container. This action facilitates various scenarios, allowing for dynamic changes in the container's presentation based on specific conditions, such as:

* Password input box hide ⇔ show
* Shopping cart not added ⇔ Add Status

💡 Tips:

1. Switch View Case exclusively influences the view within the conditional container, leaving other components unaffected.
2. When initiating the action for switching the view condition, consider the placement of the button – whether it resides within or outside the subcontainer of the conditional container. If the button is within the subcontainer, the view will only switch if the current conditions are met; otherwise, the conditional view will be displayed first. Conversely, if the button is outside the conditional container, the conditional container isn't governed by the conditional settings. In this case, when transitioning to the conditional container view, the switch will occur even if the conditions aren't met initially. However, the conditional container will prioritize displaying the conditional view upon page refresh. Note that after refreshing the page, the conditional container will maintain the view that satisfies the conditions.

### **Usage**

Prerequisites: Conditional containers exist on the current page, and there are two or more conditions to choose from.

1. Configure the switching view action at the Action on Click button.

Path: Component Control → Conditional Container → Switch View Case → Select condition.

<figure><img src="../../../../../.gitbook/assets/0 (38).png" alt="The path of using Switch View Case."><figcaption></figcaption></figure>

💡 Tips:

* Integrate the Switch View Case action into the current page, ensuring that when selecting conditional containers, only those within the current page are displayed and available for selection.
* In scenarios with multiple conditional containers on the page, it's advisable to assign distinctive names to each component and condition. This facilitates the easy identification of the required conditional container and condition during the selection process.
* If the page houses numerous conditional containers, a direct search for the switch view case action may not display all available conditions due to limited screen space. It is recommended to follow the specified path to select the condition directly and ensure accurate configuration.

2. After successful configuration, click on the action to bring up the \[action drop-down box].
   1. Click on itself to select the component that adds this switch view case action.
   2. Click Conditional Container to select the Conditional Container selected for the switch view case action.
   3. Switching conditions, you can change the condition view selected for switching.

💡 Tips:

Reselecting the Conditional View under Conditional Containers is possible, but reselecting Conditional Containers requires deleting and re-adding the action. This process also entails reselecting both the Conditional Containers and Cases.

<figure><img src="../../../../../.gitbook/assets/1 (77).png" alt="Re-selection of cases."><figcaption></figcaption></figure>

### **Usage Scenarios**

1\. **Password Input Box View Switching**

The password input box used for logging in with the account password is essentially a text input box within a conditional container. By associating the show and hide buttons with the container's view conditions, you can configure the buttons to switch between displaying and hiding the password input, providing a convenient way to switch the visibility of the entered password.

<figure><img src="../../../../../.gitbook/assets/2 (64).png" alt="Password input box view switching."><figcaption></figcaption></figure>

2\. **Shopping Cart View Switching**

In the Shopping App, the process of adding a shopping cart when it's not added and switching to the purchase status when it has been added involves the use of conditional containers. By assigning the button to switch view conditions, you can configure it to toggle between different views, enabling quickly switching between the shopping cart and purchase status with a simple click.

💡 Tips:

In shopping cart view switching, to enhance the user experience, it's common to enable the transition from an unadded state to an added state by clicking the add button. However, the reverse transition, from added to unadded, typically doesn't occur by clicking the add quantity button. Similarly, when toggling between states A and B through a button, the decision to use the switching view condition action should be carefully considered, as this action is not inherently reversible and requires thoughtful planning for optimal user interaction.

<figure><img src="../../../../../.gitbook/assets/3 (62).png" alt="Shopping cart view switching."><figcaption></figcaption></figure>

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
