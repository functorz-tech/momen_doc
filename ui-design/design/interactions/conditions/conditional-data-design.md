---
description: >-
  Learn how to trigger specific data displays in Momen's no-code platform based
  on various conditions.
---

# Conditional Data Design

### Introduction

This tutorial will guide you through displaying different content by setting conditional data.\
When you need to display different content for specific data or text under different conditions, you can use "conditional data" to achieve this.

**For example**, if you want to show the membership level description as "Platinum" when a member's points are greater than 1000, "Gold" when points are greater than or equal to 500, and "Silver" otherwise, you can use conditional data.



**Configuration Method 1:**

1. In the database, store user information in a personal information table, which includes a field called "points" to record user points.
2. Configure remote data on the page to request the current user's personal information with a limit of 1.
3. Add a text component to the page's content and click the "+" button to select "conditional data" in its content.
4.  In the conditional data, add three conditional checks:

    * The first condition checks if "points" in the remote data are greater than or equal to 1000. If true, the text component displays "Platinum."
    * The second condition checks if "points" in the remote data are greater than or equal to 500. If true, the text component displays "Gold."
    * The third condition, set to "Always," will be automatically met if the previous two conditions are not met. In this case, the text component displays "Silver."



\


<div>

<figure><img src="../../../../.gitbook/assets/截屏2024-03-22 14.50.43.png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="../../../../.gitbook/assets/截屏2024-03-22 14.51.49.png" alt=""><figcaption></figcaption></figure>

</div>

<figure><img src="../../../../.gitbook/assets/截屏2024-03-22 14.53.16.png" alt=""><figcaption></figcaption></figure>

Tips:

The order of condition configuration is crucial and should strictly follow a top-down sequence. Changing the order may result in different conditions being met, so it's essential to design the condition checks in the correct order.



**Configuration Method 2:**

1. The first condition checks if "points" in the remote data are greater than or equal to 1000. If true, the text component displays "Platinum."
2. The second condition checks if "points" in the remote data are greater than or equal to 500 and less than 1000. If true, the text component displays "Gold."
3. The third condition checks if "points" in the remote data are less than 500. If true, the text component displays "Silver."

\
If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz.) for assistance.\


### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
