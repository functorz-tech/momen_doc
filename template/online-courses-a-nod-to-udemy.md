---
description: >-
  Learn how to use Momen's online course template to build your online course website.
---

# Online Courses: A Nod to Udemy

## Introduction

Momen's online course template enables you to build a website for knowledge sharing, content management, and monetization. This guide explains the template's core logic and provides step-by-step instructions for creating your own online course website.

## I. Basic Project Operation Logic

**Homepage:**  
The landing page for users, showcasing your website’s value, popular courses, and testimonials. You can add additional content sections as needed.

![Homepage example 1](../.gitbook/assets/0%20(17).png)
![Homepage example 2](../.gitbook/assets/1%20(17).png)
![Homepage example 3](../.gitbook/assets/2%20(14).png)

**Course:**  
Displays all available courses. Users can purchase courses by clicking **Buy Now**. Payment is handled via built-in Stripe integration—no additional plugins required.

![Course list example 1](../.gitbook/assets/3%20(9).png)
![Course list example 2](../.gitbook/assets/4%20(9).png)

**My Learning:**  
A user center page where users can update their personal information and view purchased courses.

![My Learning page example](../.gitbook/assets/5%20(5).png)

## II. How to Create Your Online Course Website

### Understanding the Data Model

![Data model overview](../.gitbook/assets/6%20(5).png)

- **User:** Stores all user information. Only admins have access.
- **Course:** Stores course information. Has one-to-many relationships with related tables, allowing other tables to reference course data.

![Course data table example](../.gitbook/assets/7%20(3).png)

- **Order:** Stores order information, referencing both **User** and **Course** tables.

### Database Management

The database allows you to browse and manage all data, including courses, orders, and users.  
For more details, see [Database Operation](https://docs.momen.app/data/database/database-operation).

![Database management example 1](../.gitbook/assets/8%20(2).png)
![Database management example 2](../.gitbook/assets/9%20(1).png)

To learn how to manipulate data and bind it to the frontend, refer to:  
- [Data Retrieval and Display](https://docs.momen.app/data/data-overview/data-retrieval-and-display)  
- [Data Input and Modification](https://docs.momen.app/data/data-overview/data-input-and-modification)

## III. Website Preview

Click the **Preview** button to generate a preview link.

After previewing, you can return to the editor to make further changes.

If everything is correct and error-free, click **Publish** to launch your website.

![Preview and publish example](../.gitbook/assets/10%20(1).png)

## About Momen

[Momen](https://momen.app/?channel=docs) is a no-code web app builder that lets you create fully customizable web apps, marketplaces, social networks, AI tools, enterprise SaaS platforms, and more. Iterate and refine your projects in real time for a smooth, streamlined creation process. Momen also offers powerful API integration, making it easy to connect your app to any service. Bring your ideas to life and launch products faster than ever with Momen.
