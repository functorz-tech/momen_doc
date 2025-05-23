---
description: Learn how to use Momen's blog template to start your blog in this guide.
---

# Blog Template Guide

## Introduction

Momen is a no-code development platform that streamlines the creation of fully customized blog websites. This guide explains the core project logic and provides step-by-step instructions for building your own blog using Momen.

## 1. Overview of Project Structure

![Blog homepage interface in Momen](../.gitbook/assets/1%20(40).png)

**Website Structure**

- **Blog**: The main homepage, displaying and allowing users to search previous articles.
- **What's New**: Shows the latest published articles.

![Section displaying latest articles](../.gitbook/assets/2%20(34).png)

- **All Blog Posts**: Lists all articles uploaded to the blog.

![All blog posts page](../.gitbook/assets/3%20(27).png)

- **Reading Lists**: Organizes articles by topic for easier navigation.

![Reading lists organized by topic](../.gitbook/assets/4%20(23).png)

## 2. Creating a Blog

### Step 1: Understand the Data Model

![Data model overview in Momen](../.gitbook/assets/5%20(18).png)

- **Account Table**: Stores user information, including user ID, username, timestamps for creation and updates, and profile images.
- **Blog Table**: Contains fields for article title, subtitle, cover image, and content. Fields such as `is_topic`, `authors_author`, and `reading_type` link to other tables for extended functionality.

![Detailed data model for blog content](../.gitbook/assets/6%20(17).png)

- **Author Table**: Holds author names, profile pictures, and biographies.
- **Reading Type Table**: Defines and categorizes topics for articles.
- **Tag Table**: Stores tags for categorizing articles.

### Step 2: Managing Data in Tables

You can add, edit, or delete data directly within the data tables.

![Database management interface](../.gitbook/assets/7%20(13).png)

To modify data:

1. Open the **Database** section.
2. Select the relevant data table.

![Selecting a data table for editing](../.gitbook/assets/8%20(12).png)

**Example:**  
To add a new entry in the **Post** table, click **Insert Row**.

![Inserting a new row in the database](../.gitbook/assets/9%20(11).png)

![Filling in blog post details](../.gitbook/assets/10%20(10).png)

Fill in the required information for your blog post. When finished, click **Create** to save the entry.

### Step 3: Editing Content Outside Data Tables

![Editing content on the blog page](../.gitbook/assets/11%20(9).png)

To edit on-page text or other elements:

1. Click the text or component you want to modify.
2. The right sidebar will appear.
3. Under **Content**, update the displayed information.
4. To change text size or font, switch to the **Design** tab.

### Step 4: Configuring Actions

![Configuring navigation actions](../.gitbook/assets/13%20(8).png)

To set up navigation or other actions:

1. Select the text or image you want to make interactive.
2. Click **Interaction** in the sidebar.
3. Choose the desired action (e.g., **Navigation**) and select the target page.

![Selecting navigation target](../.gitbook/assets/14%20(4).png)

## 3. Previewing and Publishing Your Website

After completing your content and configuration, preview your website:

![Previewing the website in Momen](../.gitbook/assets/12%20(13).png)

Double-click **Preview** in the upper right corner to see your site in action.

![Final preview before publishing](../.gitbook/assets/13%20(14).png)

If everything appears as expected and you have verified all content, click **Publish** to make your website live.

**Congratulations!**  
You have successfully created and published a fully customized blog website using Momen.

---

## About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder that empowers users to create fully customizable web apps, marketplaces, social networks, AI applications, enterprise SaaS solutions, and more. Iterate and refine your projects in real time for a seamless creation process. Momen also offers robust API integration, enabling you to connect your projects to any required service. Bring your ideas to life and launch your web app products faster than ever with Momen.
