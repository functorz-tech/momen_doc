---
description: Learn how to use Momen's blog template to start your blog in this guide.
---

# Blog

### Introduction

Momen is a no-code development tool that simplifies the process of creating a fully customized blog website. In this guide, we will explore the basic project operation logic and how to create your own blog with Momen.

### I. Basic Project Operation Logic

<figure><img src="../.gitbook/assets/1 (40).png" alt="Homepage of a blog website"><figcaption></figcaption></figure>

**Website Logic**

【Blog】: The homepage of the blog, used for displaying or searching previous articles.&#x20;

【What's New】: Displays the latest articles.

<figure><img src="../.gitbook/assets/2 (34).png" alt="Latest articles in a no-code tool"><figcaption></figcaption></figure>

【All Blog Posts】: Displays all uploaded articles.

<figure><img src="../.gitbook/assets/3 (27).png" alt="Blog page of a no-code website"><figcaption></figcaption></figure>

【Reading Lists】: Articles sorted by topics.

<figure><img src="../.gitbook/assets/4 (23).png" alt="Reading lists of a blog page"><figcaption></figcaption></figure>

### II. How to Create a Blog

#### Step 1: Learn How the Data Model Works

<figure><img src="../.gitbook/assets/5 (18).png" alt="Data model page of blog template in a no-code tool"><figcaption></figcaption></figure>

**【Account】 Data Table**

This data table stores basic user information, such as user ID, username, update time, creation time, and profile image data.

**【Blog】 Data Table**

This table includes several fields related to blog content, such as the article title, subtitle, cover image, and content. Other elements like【is_topic】, 【authors_author】, and 【reading_type】can associate with other database tables in the backend.

<figure><img src="../.gitbook/assets/6 (17).png" alt="Data model page of blog template in a no-code tool"><figcaption></figcaption></figure>

**【Author】 Data Table**

This table contains the author's name, profile picture, and biography.&#x20;

**【Reading Type】 Data Table**

This table provides a comprehensive overview of topics.&#x20;

**【Tag】 Data Table**

This table serves as a tag for articles.

#### Step 2: Data Manipulation in Data Tables

This involves altering the data within the data tables.

<figure><img src="../.gitbook/assets/7 (13).png" alt="Database page of a no-code tool"><figcaption></figcaption></figure>

Enter the【Database】, then click on the corresponding data table to modify the data.

<figure><img src="../.gitbook/assets/8 (12).png" alt="Database page of a no-code tool"><figcaption></figcaption></figure>

**Example**: To add data in the【Post】data table, click【Insert Row】to insert a new row of data into the table.

<figure><img src="../.gitbook/assets/9 (11).png" alt="Insert data in the database"><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/10 (10).png" alt="Add data in data table in a no-code tool" width="375"><figcaption></figcaption></figure>

Now you can create your blog post by filling in the corresponding information. When complete, click 【Create】 to save the entry.

#### Step 3: Manipulating Data Outside of Data Tables

<figure><img src="../.gitbook/assets/11 (9).png" alt="Blog template page in a no-code tool"><figcaption></figcaption></figure>

If you want to change the text, simply click on the text, and the right sidebar will appear. Click on 【Content】 to modify the information of that component. This applies to other scenarios as well. If you want to change the text size or font, click on 【Design】 to make modifications.

#### Step 4: Configuring the Action

<figure><img src="../.gitbook/assets/13 (8).png" alt="Configure actions in a no-code tool" width="304"><figcaption></figcaption></figure>

For example, if you want your users to redirect to other pages by clicking on text/image, click on the text or image where you want to redirect, then click【Interaction】to edit the action. Choose Navigation and the page you want to direct to.&#x20;

<figure><img src="../.gitbook/assets/14 (4).png" alt="Configure actions in a no-code tool"><figcaption></figcaption></figure>

### III. Website Preview

At this point, you have completed 99% of the content. Let's preview your website next.

<figure><img src="../.gitbook/assets/12 (13).png" alt="Preview page in a no-code tool" width="375"><figcaption></figcaption></figure>

Double-click【Preview】in the upper right to begin the preview.

<figure><img src="../.gitbook/assets/13 (14).png" alt="Preview page in a no-code tool" width="361"><figcaption></figcaption></figure>

If everything looks good and you have checked for any errors, click on "Publish" to publish the website. Congratulations! You have now completed the creation of a fully customized blog website!

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder that allows users to build fully customizable web apps, marketplaces, social networks, AI apps, enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions, getting your web app products to market faster than ever before.
