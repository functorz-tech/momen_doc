---
description: >-
  Learn how to use Momen's portfolio template to build your portfolio and showcase your projects.
---

# Portfolio

## Introduction

Momen's portfolio template helps you quickly build a personal website to showcase your best work. You can easily customize the style to fit your needs.

## I. Basic Project Operation Logic

**Homepage:**  
The landing page of your website. Use it to highlight your experience, work, and projects, and to introduce your abilities. You can add more sections as needed.

![Homepage example 1](../.gitbook/assets/0%20(19).png)
![Homepage example 2](../.gitbook/assets/1%20(19).png)
![Homepage example 3](../.gitbook/assets/2%20(16).png)

**Projects:**  
This page displays a list of all your projects.

![Projects list example](../.gitbook/assets/3%20(11).png)

**Project Details:**  
When users click "View Details" on the projects page, they are taken to a detail page showing the project's content.

![Project details example](../.gitbook/assets/4%20(11).png)

## II. How to Create Your Portfolio Website

### Understanding the Data Model

![Data model overview](../.gitbook/assets/5%20(6).png)

- **Consumer:** Stores your personal information. Related to other tables such as projects, skills, and education.
- **Project:** Stores your project data. Has a one-to-many relationship with project details.
- **Project Detail:** Stores detailed information about each project.

## Database Management

The database allows you to browse and manage all your data, including projects. The data is dynamic and can be updated as needed. Managing content here is more efficient than editing static page content.

For more information, see [Database Operation](https://docs.momen.app/data/database/database-operation).

![Database management example](../.gitbook/assets/6%20(6).png)

To learn how to manipulate data and bind it to the frontend, refer to:  
- [Data Retrieval and Display](https://docs.momen.app/data/data-overview/data-retrieval-and-display)  
- [Data Input and Modification](https://docs.momen.app/data/data-overview/data-input-and-modification)

## III. Website Preview

Click the **Preview** button to generate a preview link.

After previewing, you can return to the editor to make further changes.

When everything is ready and error-free, click **Publish** to launch your website.

![Preview and publish example](../.gitbook/assets/7%20(4).png)

## About Momen

[Momen](https://momen.app/?channel=docs) is a no-code web app builder that lets you create fully customizable web apps, marketplaces, social networks, AI tools, enterprise SaaS platforms, and more. Iterate and refine your projects in real time for a smooth, streamlined creation process. Momen also offers powerful API integration, making it easy to connect your app to any service. Bring your ideas to life and launch products faster than ever with Momen.
