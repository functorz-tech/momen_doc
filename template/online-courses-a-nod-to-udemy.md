---
description: >-
  Learn how to use Momen's online course template to build your online course
  website.
---

# Online Courses, a nod to Udemy

### **Introduction**

Introducing Momen's online course template. With this template, you can build your own website for knowledge sharing, content management and monetization. This doc will introduce the basic logic of this template and how you can build your own website with it.

### **I. Basic Project Operation Logic**

\[Homepage]: The initial page that your users will see. It showcases the value, popular courses and testimonials of the website. You can also add sections of other content.

![](<../.gitbook/assets/0 (17).png>)

![](<../.gitbook/assets/1 (17).png>)

![](<../.gitbook/assets/2 (14).png>)

\[Course]: A page that displays all listed courses. Users can proceed to purchase by clicking 'Buy Now'. The payment functionality is enabled through our built-in Stripe integration, without the need for additional plugins.

![](<../.gitbook/assets/3 (9).png>)

![](<../.gitbook/assets/4 (9).png>)

\[My Learning]: This is the user center page where the user can modify their personal information and see their purchased course.

![](<../.gitbook/assets/5 (5).png>)

### **II. Learn How to Create your Online Course Website**

#### **Understanding the Data Model**

![](<../.gitbook/assets/6 (5).png>)

\[User] This data table stores all of your users' information. Only the admin will get access to it.

\[course] This data table stores all the information of courses. It has one-to-many relations with other related tables, meaning that other tables can reference the information in \[course] table.

![](<../.gitbook/assets/7 (3).png>)

\[Order] This table stores the information of orders, relating to \[user] and \[course]. This means it can reference the information in these two tables.

#### **Database Management**

Database is where you can browse and manage all your data. You can manage your courses, orders and your users here. For more information, please refer to [Database Operation](https://docs.momen.app/data/database/database-operation).

![](<../.gitbook/assets/8 (2).png>)

![](<../.gitbook/assets/9 (1).png>)

About how to manipulate data and bind it with the frontend, please refer to [Data Retrieval and Display](https://docs.momen.app/data/data-overview/data-retrieval-and-display) and [Data Input and Modification](https://docs.momen.app/data/data-overview/data-input-and-modification)

## **III. Website Preview**

Click on the "Preview" button, the preview link will be generated.

Once the preview is complete, you can make further changes by returning to the editor.

If everything looks good and you have checked for any errors, click on Publish to publish the website.

![](<../.gitbook/assets/10 (1).png>)

### **About Momen**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process.  Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
