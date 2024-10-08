# Request | ActionFlow

Please review [ActionFlow Fundamentals](https://docs.momen.app/actionflow/actionflow-fundamentals) before proceeding with this guide.

### **ActionFlow Overview**

Custom action involves calling an action flow that must be configured beforehand. This flow can then be invoked via buttons or other components/actions.

### **Configuration Guide**

Example: Executing an action via a button click.

Add a Button: Add a button into your interface.

Add an Action: Assign a \[Request/Custom Action] to the button.

Select the Action Flow: If parameters are required, configure them under "Required Parameters".\


![](<../../.gitbook/assets/0 (41).png>)

### **On Success**

Configure additional actions to execute upon the successful completion of this custom action.

### **Result Data**

If output parameters are set, they become accessible post-execution and can be utilized in subsequent actions, found under \[Result Data].

For instance, if the custom action generates a random number between 0-100, to use this number, define an integer \[Page Data] on the page. Upon successful action completion, implement a \[Set Page Data] action where the data assignment follows the path "Result Data/Code Block Name/Output Parameter Name".

| <img src="../../.gitbook/assets/1 (80).png" alt="" data-size="original"> | <img src="../../.gitbook/assets/2 (67).png" alt="" data-size="original"> |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |

### **On Failure**

Configure remedial actions to be executed in the event of a request failure.\
Common issues include:

Errors in configuration

Network issues like fluctuations or interruptions.



### **About Momen​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
