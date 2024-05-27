---
description: Learn how to configure text input components using Set Input Value in Momen.
---

# Component Control | Text Input｜ Set Input Value

### **Introduction**

This tutorial guides you through efficiently configuring text input components for diverse scenarios, from dropdown effects to input transitions between pages. Ideal after familiarizing yourself with [Text Input](https://docs.momen.app/component/text-input) basics, this quick guide enhances your Momen no-code skills.

💡 Tips:

Setting the input value specifically applies to text input components and does not impact other input class components.

### **Application Scenario**

Upon triggering the "Set Input Value" action, the designated input box on the page promptly reflects the configured value. This feature is useful for scenarios such as:

* Choosing an item from a dropdown menu (where the dropdown options go beyond mere text).
* Ensuring that the input entered on the current page is visible in the text input component upon transitioning to the subsequent page.

💡 Tips:

1. For achieving a dropdown box effect where the content is more than just text, it's recommended to use the data selector component for added convenience.
2. Activating the Set Input Value action will overwrite the display and output content of the text input component. In other words, if the text input component already has input content or a default value, triggering this action will make it display the value set in the action, adopting the same style as entered text.

### **Usage**

Prerequisite: A text input component exists on the current page.

1. Configure the input box action at the click time action of the component.

Path: Component Control - Text Input - Set Input Value

<figure><img src="../../../../../.gitbook/assets/0 (30).png" alt="The path of using Set Input value."><figcaption></figcaption></figure>

2. After successful configuration, click on Actions to bring up the \[Actions drop-down box].
   1. Target-Select the text input component
   2. Value-Set the value displayed by the text input component

💡 Tips:

1. Integrate the Set Input Value action into the current page, enabling the selection of text input components solely within the current page.
2. The text input component's type, when set as "Text," allows for an unrestricted value type. However, if the type is designated as "Number," the value is confined to number inputs, encompassing both integers and decimals. In case the value is text, invoking this action will erase the existing input content and will not exhibit the designated value (or a set placeholder).
3. In scenarios with multiple text input components on the page, it's advisable to assign distinctive names to each component for clarity when selecting the target text input component.

<figure><img src="../../../../../.gitbook/assets/1 (28).png" alt="Action drop-down box."><figcaption></figcaption></figure>

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
