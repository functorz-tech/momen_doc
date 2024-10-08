---
description: >-
  Learning how to use Momen to have a quick start by following each step in this
  article.
---

# How to Build a CMS (MVP version) in Hours?

### Introduction

We"ll walk you through the process of building your own blog web app without writing a single line of code. You will learn:

1. What is the basic process of using Momen to build web apps
2. How to use different components
3. How to bind actions

Some of the core pages included in this MVP(minimum viable product) version blog are:

1. Upload post page: Where users create a new post

<figure><img src="../.gitbook/assets/1 (9).PNG" alt=""><figcaption></figcaption></figure>

2. Show post page: Showcasing all posts with a list

<figure><img src="../.gitbook/assets/2 (10).PNG" alt=""><figcaption></figcaption></figure>

### How to Build a Blog Upload Page

We begin by creating a blank page and naming it "Upload Post".

<figure><img src="../.gitbook/assets/3 (42).png" alt=""><figcaption></figcaption></figure>

Once users go to this page, they can create a new post, including title, cover image, and content. So there will be using components such as "Text", "Button", "Image Picker", "Input", etc...Too much? Don't worry, we will briefly introduce the basic functions of these components in the next 30 minutes of the tutorial.&#x20;

As we said above, there are three main features on this page:

* Add a title
* Add a cover image
* Add content
* Add the upload button

#### Step 1: Add a Title

1. Drag the "Text" component onto the Post page, change the content to "Title", and change the Alignment to left.
2. Drag the "Text Input" onto the Post page, and rename it to "Title Input".

<figure><img src="../.gitbook/assets/4 (39).png" alt=""><figcaption></figcaption></figure>

#### Step 2: Add a Cover Image

1. Drag a new **"Text"** component onto page, change the content to "Cover Image".
2. Drag the **"Image Picker**" onto the Post page, and rename it to "Cover Image Picker".

<figure><img src="../.gitbook/assets/5 (30).png" alt=""><figcaption></figcaption></figure>

#### Step 3: Add Content

1. Drag a new "Text" component onto page, change the content to "Content".
2. Drag a new "Text Input" component onto page, rename it to "Content Input", change the Width to 700, the Height to 240, and check "Multi-line".

<figure><img src="../.gitbook/assets/6 (30).png" alt=""><figcaption></figcaption></figure>

#### Step 4: Add the "Upload" button

Drag the "Button" component onto the page and change the content to "Upload"

<figure><img src="../.gitbook/assets/7 (22).png" alt=""><figcaption></figcaption></figure>

### How to Configure Database

Once the user clicks the "Upload" button, the title, cover image, and content that the user entered should be uploaded to the database. How can we achieve this?

#### Step 1: Create a Data Model

First, we create a data model to define the areas in the database where this data will be stored. 1. Click on "Add Model" and enter "Post" as the name.

<figure><img src="../.gitbook/assets/8.gif" alt=""><figcaption></figcaption></figure>

2. Add columns:

* Title (Text)
* Cover Image (Image)
* Content (Text)

<figure><img src="../.gitbook/assets/9.gif" alt=""><figcaption></figcaption></figure>

Now, we have created a table called "Post" with three columns named "Title," "Cover Image," and "Content" to store the corresponding data.

#### Step 2: Bind to Data

Next, we need to go back to the Upload button on the Post page. Once the user clicks the button, the data from the "Title Input", "Content Input" and "Cover Image Picker" will be uploaded to the Post table we just created. This logic is implemented by binding the interaction to the "Upload" button.&#x20;

Select the button, click on Interaction, Add **Action-Request-Mutation-Insert Post.**

<figure><img src="../.gitbook/assets/10 (18).png" alt=""><figcaption></figcaption></figure>

In the Parameters section, find the three columns we just created and bind them to the data.

* Select inputs-Title input for Title
* Select inputs-Cover Image Picker for Cover Image
* Select inputs-Content input for Content

<figure><img src="../.gitbook/assets/11 (15).png" alt=""><figcaption></figcaption></figure>

Once this action is successfully executed, we can show a toast on the page saying "Upload successful". On success, add action-view-show toast, and input "Upload successful".

<figure><img src="../.gitbook/assets/12 (14).png" alt=""><figcaption></figcaption></figure>

It's time to check out our work! Click on **Preview** on the top right, wait for it to load, and open the URL. You should see your "Upload Post" page, where you can enter title, cover image, and content, and click on "Upload".

<figure><img src="../.gitbook/assets/13 (15).png" alt=""><figcaption></figcaption></figure>

When you see the toast saying "Upload successful", you can go to the backend"s Post table to check if the data has been successfully added. The backend is where we store the data for our application.



### Show Post Page

Now, we want to display the data we just added to the database on the website, so that all users who visit the website can see it. Therefore, we need to create a new "Show Posts" page and set it as the homepage by right-clicking on the page.

<figure><img src="../.gitbook/assets/14 (9).png" alt=""><figcaption></figcaption></figure>

Then, drag a **"List"** component onto this page and name it "Post List".

<figure><img src="../.gitbook/assets/15 (9).png" alt=""><figcaption></figcaption></figure>

Next, we need to display the data from the Post table in this Post List.

* Select Post as the Data Sheet for Post List.

<figure><img src="../.gitbook/assets/16 (7).png" alt=""><figcaption></figcaption></figure>

In the left sidebar, select the blank container under Post List.

<figure><img src="../.gitbook/assets/17 (6).png" alt=""><figcaption></figcaption></figure>

Drag a text component into the Cell View of the blank container. Bind the data to the content by selecting **Item data - xxPostxx - item - title.**

<figure><img src="../.gitbook/assets/18 (2).png" alt=""><figcaption></figcaption></figure>

This will display all the titles from the post table on the Post List. Now, let"s see the effect. Actually, in addition to the preview, we can also use **live preview** to quickly check and validate the success of our work: click on **"live preview"**. If you"re confused about the purpose of live preview and preview, don"t worry, we"ll understand them slowly later.

Seeing the data created on the "Upload Post" page displayed on the Post List indicates that we have successfully learned the most important basic operations!&#x20;

Next, let"s display the cover image and content in the Post List. Go back to the blank container in the Post List through the left sidebar and drag an image component to the Cell View.

* Select the image and choose Data Binding in the content section,
* Bind the data to **Item data - xxPostxx - item - Cover Image**. Similarly,
* Add a **"Text"** component and bind it to Content.

<figure><img src="../.gitbook/assets/19 (3).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/20 (3).png" alt=""><figcaption></figcaption></figure>

At this point, you can preview in real-time and check whether the Post List displays all the content that was just bound. You can not upload new content to the "Upload Post" page in real-time preview.

\
Therefore, we need to add logic to the page to jump to other pages. Go back to the Show Posts page layer and add a button with the content "Go to Upload." Select the button"s Interaction, Add **Action-Router-Go to-Upload Post**. Similarly, add a button in the Upload Post page layer with the content "Go back," and add **Action-Router-Go back** in Interaction.

<figure><img src="../.gitbook/assets/21 (4).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/22 (2).png" alt="A no-code tool editor showing how to build a blog web app"><figcaption></figcaption></figure>

Seeing the data created on the "Upload Post" page displayed on the Post List indicates that we have successfully learned the most important basic operations!

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.\
