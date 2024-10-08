# Send Verification Code

### **Introduction**

Click to send a verification code to an email address.

Generally, this behavior is used in the scenarios of registration, login, reservation confirmation, etc., and it is usually used together with the \[Verify Code] action. You can directly use the registration and log in under the user action to verify; see \[Web Login Design] for details.

### **Configuration Guide**

Send Verification Code - Send Verification Code action in the interaction of the component, select Email the sending method in the action, and bind or write the email address to be sent directly in the input box.

<table data-header-hidden><thead><tr><th width="335"></th><th></th></tr></thead><tbody><tr><td><img src="../.gitbook/assets/0 (10).png" alt="" data-size="original"></td><td><img src="../.gitbook/assets/1 (10).png" alt="" data-size="original"></td></tr></tbody></table>

Tips:

1. The Email is usually obtained through the \[Text Input] component; you can click the "+" sign to configure it through the "Input Box Data".
2. Generally, the \[Show Modal] action is configured when sending successfully/failed to indicate whether the Verification Code is sent successfully or not.
3. \[Send Verification Code] action can only be triggered once within 1 minute, repeated clicks will report an error.



### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
