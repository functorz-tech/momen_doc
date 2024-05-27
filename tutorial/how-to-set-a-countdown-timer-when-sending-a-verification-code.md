# How to Set a Countdown Timer When Sending a Verification Code

### **Introduction**

Implement an effective user verification process on your web application's registration or login page using a mobile verification code.

### **Setting Up Countdown for Verification Code**

On Momen’s registration/login page:

Trigger Verification Code: When users click the "Send Verification Code" button, trigger the action to send out the verification code.

![](<../.gitbook/assets/0 (45).png>)

### **Implementation Steps**

1. Initialize Countdown Data: Add an "Integer" type of page data. Since there is no dedicated countdown component available on the web version, initialize this data to 60 at page load. This sets the starting countdown time to 60 seconds.

| <img src="../.gitbook/assets/1 (83).png" alt="" data-size="original"> | <img src="../.gitbook/assets/2 (68).png" alt="" data-size="original"> |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- |

2. Set Up a Scheduled Job: Configure a scheduled job with a trigger interval of 1000 milliseconds. This setup ensures that once triggered, the job will execute every second, updating the countdown each time.

![](<../.gitbook/assets/3 (65).png>)

3. Configure Send Verification Code Button: Utilize a conditional container for the send verification code button on the page setup:

a. Not Sent State: Inside the "Not Sent" sub-container, place a "Button Component" that displays "Send Verification Code". Set up the action to send the verification code (select the appropriate verification type based on the registration/login workflow). Upon successful sending, display a prompt and switch to the "Sent" sub-container. Simultaneously, begin the scheduled task.

b. Sent State: In the "Sent" sub-container, use a "Text Component" linked to the page data to display the remaining countdown time.

![](<../.gitbook/assets/4 (62).png>)

![](<../.gitbook/assets/5 (49).png>)

![](<../.gitbook/assets/6 (43).png>)

4. Configure Scheduled Task Logic:

a. End of Countdown: When the countdown timer displayed in the page data reaches 0, indicating the end of the countdown, perform the following actions:

<figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

* Stop the scheduled task to prevent further countdown.
* Reset the countdown timer to its initial state.
* Switch the conditional container for the send verification code button back to the "Not Sent" state.

b. If the countdown timer (page data) is greater than 0, this indicates that the countdown is actively running. To update the countdown each second:

Reduce the countdown by 1 using a Formula. This involves subtracting 1 from the current page data value.

Reassign the newly calculated result back to the page data to update the displayed countdown timer.

![](<../.gitbook/assets/7 (33).png>)

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
