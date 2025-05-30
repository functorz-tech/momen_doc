---
description: >-
  Learn how to use Momen to quickly start building a CMS by following each step in this article.
---

# How to Build a CMS (MVP Version) in Hours?

## Introduction

This guide walks you through building a blog web app (CMS MVP) in Momen—no coding required.  
You'll learn the basic process, how to use components, and how to bind actions.

**Core pages in this MVP:**
1. Upload post page: Users create a new post

![Upload post page](../.gitbook/assets/1%20(9).1.png)

2. Show post page: Displays all posts in a list

![Show post page](../.gitbook/assets/2%20(10).1.png)

## How to Build a Blog Upload Page

Start by creating a blank page named "Upload Post".

![Create upload post page](../.gitbook/assets/3%20(42).png)

On this page, users can enter a title, cover image, and content.  
You'll use components like **Text**, **Button**, **Image Picker**, and **Input**.

**Main features:**
- Add a title
- Add a cover image
- Add content
- Add the upload button


### Step 1: Add a Title

1. Drag a **Text** component onto the page, set content to "Title", align left.
2. Drag a **Text Input** onto the page, rename it "Title Input".

![Add title input](../.gitbook/assets/4%20(39).png)

### Step 2: Add a Cover Image

1. Drag a **Text** component onto the page, set content to "Cover Image".
2. Drag an **Image Picker** onto the page, rename it "Cover Image Picker".

![Add cover image picker](../.gitbook/assets/5%20(30).png)
### Step 3: Add Content

1. Drag a **Text** component onto the page, set content to "Content".
2. Drag a **Text Input** onto the page, rename it "Content Input", set width to 700, height to 240, and enable "Multi-line".

![Add content input](../.gitbook/assets/6%20(30).png)

### Step 4: Add the "Upload" Button

Drag a **Button** onto the page and set its content to "Upload".

![Add upload button](../.gitbook/assets/7%20(22).png)

## How to Configure the Database

When the user clicks "Upload", the title, cover image, and content should be saved to the database.

### Step 1: Create a Data Model

Create a data model to define where the data will be stored.

1. Click "Add Model" and name it "Post".

![Create data model](../.gitbook/assets/8.gif)

2. Add columns:
   - Title (Text)
   - Cover Image (Image)
   - Content (Text)

![Add columns](../.gitbook/assets/9.gif)

Now you have a "Post" table with three columns: Title, Cover Image, and Content.


### Step 2: Bind Data

Go back to the Upload button on the Post page.  
Bind the button's interaction to upload the data to the Post table.

- Select the button, go to Interaction, and add **Action-Request-Mutation-Insert Post**.

![Bind upload action](../.gitbook/assets/10%20(18).png)

- In Parameters, bind:
  - Title: inputs-Title input
  - Cover Image: inputs-Cover Image Picker
  - Content: inputs-Content input

![Bind parameters](../.gitbook/assets/11%20(15).png)

- On success, show a toast: add **action-view-show toast** with "Upload successful".

![Show toast on success](../.gitbook/assets/12%20(14).png)


Click **Preview** (top right), wait for it to load, and open the URL.  
You should see your "Upload Post" page, where you can enter a title, cover image, and content, then click "Upload".

![Preview upload post page](../.gitbook/assets/13%20(15).png)

When you see "Upload successful", check the backend's Post table to confirm the data was added.


## Show Post Page

To display posts, create a new "Show Posts" page and set it as the homepage.

![Create show posts page](../.gitbook/assets/14%20(9).png)

- Drag a **List** component onto the page and name it "Post List".

![Add post list](../.gitbook/assets/15%20(9).png)

- Set the Post table as the data source for Post List.

![Set data source](../.gitbook/assets/16%20(7).png)

- In the left sidebar, select the blank container under Post List.

![Select blank container](../.gitbook/assets/17%20(6).png)

- Drag a **Text** component into the Cell View. Bind it to **Item data - Post - item - title**.

![Bind title to list](../.gitbook/assets/18%20(2).png)

Now, all post titles from the Post table will display in the Post List.

---

To display the cover image and content:

- In the blank container, drag an **Image** component. Bind it to **Item data - Post - item - Cover Image**.
- Add a **Text** component and bind it to **Item data - Post - item - Content**.

![Bind cover image](../.gitbook/assets/19%20(3).png)
![Bind content](../.gitbook/assets/20%20(3).png)

Preview in real time to check if the Post List displays all content.

To enable navigation between pages:

- On the Show Posts page, add a button labeled "Go to Upload". Set its interaction to **Action-Router-Go to-Upload Post**.
- On the Upload Post page, add a button labeled "Go back" and set its interaction to **Action-Router-Go back**.

![Add navigation button](../.gitbook/assets/21%20(4).png)
![No-code tool editor showing how to build a blog web app](../.gitbook/assets/22%20(2).png)

---

Seeing the data created on the "Upload Post" page displayed on the Post List means you've mastered the basics!

---

## About Momen

[Momen](https://momen.app/?channel=docs) is a no-code web app builder that lets you create fully customizable web apps, marketplaces, social networks, AI tools, enterprise SaaS platforms, and more. Iterate and refine your projects in real time for a smooth, streamlined creation process. Momen also offers powerful API integration, making it easy to connect your app to any service. Bring your ideas to life and launch products faster than ever with Momen.
