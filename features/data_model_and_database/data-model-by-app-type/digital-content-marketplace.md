---
description: >-
  This doc introduces a typical data model design example for digital content
  marketplace.
---

# Digital Content Marketplace

### **Common** Digital Content Marketplace **Data Model Design**

A digital content marketplace where users can purchase or subscribe to various forms of digital content such as articles, images, videos, audio files, software, and courses. This type of application typically incorporates several data tables, including Users, Resources, Purchase Records, and Subscription Records, to facilitate the management of transactions and access permissions.

#### **Users Table**&#x20;

The user is the fundamental entity in a resource sharing application, generally categorized as either regular users, who purchase and subscribe to resources, or administrators, who are responsible for uploading and managing resources.

**Common Fields**

* **ID**: An integer type, auto-incremented and unique, serving as the unique identifier for each user.
* **Created\_at**: A timestamp type, recording the time when the user registered.
* **Updated\_at**: A timestamp type, noting when the user's information was last updated.
* **Name**: Text type.
* **Phone Number**: Text type.
* **Role**: Text type, distinguishing between regular users and administrators.
* **My Purchases**: A relational field established by a one-to-many relationship with the Purchase Records table, allowing users to access their purchase history.
* **My Subscriptions**: A relational field created by a one-to-many relationship with the Subscription Records table, enabling users to view their subscriptions.

**Permission Settings**

* User data is private and should be visible only to the user themselves and to administrators. Users can view and edit their name and phone number but cannot change their role. Administrators can view all user information and assign roles.

#### **Resource Types Table**&#x20;

This table manages the categorization of various resources within the app, such as articles, videos, images, audio files, software, and courses, facilitating quick and targeted searches by users.

**Common Fields**

* **ID**: An integer type, auto-incremented and unique.
* **Name**: Text type; describes the type of resource, such as "Video," "Article," etc.
* **Description**: Text type; provides a detailed description of the resource type to help users and administrators understand the scope and utility of the resources.

**Permission Settings**

* Information about resource types should be accessible to all users to allow for efficient filtering and browsing within the app. Administrators have the authority to add, edit, and delete resource types to respond to market demands and updates in app content.

#### **Resources Table**&#x20;

This table stores all information about the resources available for purchase or subscription within the app.

**Common Fields**

* **ID**: An integer type, auto-incremented and unique.
* **Created\_at**: A timestamp type, recording when the resource was uploaded.
* **Updated\_at**: A timestamp type, noting the last update to the resource.
* **Name**: Text type.
* **Type ID**: An integer relational field linking the resource to its category through a many-to-one relationship with the Resource Types table.
* **Description**: Text type.
* **Price**: An unlimited precision decimal type.
* **File**: File type, storing the resource file itself.

**Permission Settings**

* Most information in the Resources table, such as name, description, and price, needs to be publicly accessible for user browsing. However, access to the actual resource files should be restricted to users who have purchased or subscribed. Administrators also have the permissions to upload, modify, and delete resource information.

#### **Purchase Records Table**&#x20;

This table records the details of individual resources purchased by users.

**Common Fields**

* **ID**: An integer type, auto-incremented and unique.
* **User ID**: A relational field linking the record to the user via a one-to-many relationship with the Users table.
* **Resource ID**: A relational field linking the record to the resource via a one-to-many relationship with the Resources table.
* **Purchase Time**: A timestamp type, recording the time of purchase.
* **Price**: An unlimited precision decimal type, recording the price at the time of purchase.

**Permission Settings**

* Purchase records are private and visible only to the user who made the purchase and to administrators, ensuring the confidentiality of transaction details.

#### **Subscription Records Table**&#x20;

This table records the details of long-term subscriptions to resources by users, such as subscribing to a series of courses or periodically updated magazines.

**Common Fields**

* **ID**: An integer type, auto-incremented and unique.
* **User ID**: A relational field linking the record to the user via a one-to-many relationship with the Users table.
* **Resource ID**: A relational field linking the record to the resource via a one-to-many relationship with the Resources table.
* **Start Time**: A timestamp type, recording when the subscription began.
* **End Time**: A timestamp type, noting when the subscription ends.
* **Price**: An unlimited precision decimal type, recording the total price of the subscription.

**Permission Settings**

* Subscription records are private and visible only to the subscribing user and administrators, protecting the details and privacy of the user's subscriptions.

### **Summary**&#x20;

In building the data model for a digital content marketplace, managing the relationships and permissions across users, resources, purchase records, and subscription records is crucial. This not only helps protect user privacy but also ensures proper management and access to resources. Each table is designed to align with the app's business logic and user needs, while relational fields link the data across tables to form a comprehensive, multi-layered data structure.



### **References**

* Read [Login Design ](https://docs.momen.app/tutorial/how-to-design-your-login-page)to understand the data sources of the user table.
* In [Permission Management](https://docs.momen.app/advanced-functionality/permission-management), you can learn how to configure your web's permission.

### **About Momen​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
