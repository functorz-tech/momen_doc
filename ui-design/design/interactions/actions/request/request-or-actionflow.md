---
description: Learn to configure and integrate custom action flows seamlessly in Momon.
---

# Request | Actionflow

### **Introduction**

Learn to configure actionflows and integrate them into buttons or other components. Whether you aim to streamline user interactions or enhance functionality, this guide provides step-by-step instructions.

### **Definition**

Custom Action: It refers to calling an actionflow, after configuring the actionflow, you can call it in a button or other components/action.

### **Basic Configuration**

Example: User clicks a button to execute an action

1. Add a button
2. Add a action to the button \[Request/Custom Action].
3. Select the desired action flow, and if there are inputs, configure the inputs under "Required Parameters".

<figure><img src="../../../../../.gitbook/assets/0 (27).png" alt="Basic configuration of the custom action."><figcaption></figcaption></figure>

### **Actions on Success**

When this custom action request is successful, you can configure other actions to be performed here.

### **Result Data**

After the custom action is executed successfully, if the action has set the output parameter, the content of the output parameter can be referenced in the \[Result Data].

For example: The role of the custom action is to encrypt text using MD5, and the output parameter is the specific ciphertext generated. If you want to use this ciphertext, you need to first define a text type \[Page Data] on the page, and then add the \[Set Page Data] action when the custom action succeeds. The value of the page data will be assigned as follows: "Result Data/Code Block Name/Output Parameter Name".

<figure><img src="../../../../../.gitbook/assets/1 (25).png" alt="Example of using [Page data] after successfully performing a customized action."><figcaption></figcaption></figure>

<figure><img src="../../../../../.gitbook/assets/2 (22).png" alt="Referencing output parameters in [Result Data] after Custom Action execution."><figcaption></figcaption></figure>

### **Action on Failure**

Actions executed when a request fails

1. Misconfiguration in the custom action.
2. Network errors, such as network fluctuations, network outages, etc.

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
