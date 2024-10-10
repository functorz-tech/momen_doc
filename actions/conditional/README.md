---
description: >-
  Conditional Action: Add conditional branches in interaction and configure
  other actions within each branch.
---

# Conditional

### **Introduction**

Before reading this, it is recommended to familiarize yourself with the [Logical Condition Design](logical-condition-design.md).

### **Application Scenarios**

When executing interactive actions, it may be necessary to execute different actions according to the user's own situation or different input data.

Example : When browsing products on the home page, click the buy button to purchase a certain product, the prerequisite for being able to purchase the product is that the user is logged in. If the user is not logged in, it is necessary to jump to the login page for the user to log in, and if the user is already logged in, then you can directly purchase the product.

### **Coufiguration Guide**

Integrate conditional actions within component interactions. Upon creation, two initial sub-conditions are provided. Modify sub-condition names and set criteria for evaluation. Define consequent actions for when conditions are met.

Evaluate conditions sequentially from top to bottom. Execute actions for satisfied conditions; proceed to next if unsatisfied. Default to a final empty condition for unsatisfied scenarios.

Ensure a minimum of one sub-condition is configured. Tailor actions such as navigation, data modification, or alerts based on business logic.

| <img src="../../.gitbook/assets/0 (3).jpeg" alt="" data-size="original"> | <img src="../../.gitbook/assets/1 (90).png" alt="" data-size="original"> |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |

### **Configuration Outcome**

As demonstrated in the video below, when no customer name is entered and the registration button is clicked, a prompt appears "Please check the term." Conversely, once all registration information is filled out and the button is clicked, the user is redirected to a new page. The configuration principle is to determine whether the input field contains content to decide between displaying a prompt or navigating to a new page.

![](<../../.gitbook/assets/2 (12).gif>)



### **About Momen​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
