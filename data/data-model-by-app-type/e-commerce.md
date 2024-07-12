---
description: This doc introduces a typical data model design example for e-commerce apps.
---

# E-commerce

Whether selling products or services, e-commerce applications contain both public and private data. For instance, product information must be public so users can search for and add items to their carts. However, a user's shopping history should remain private, accessible only to the individual user and the merchant. To manage this, we will configure access permissions for the data tables, ensuring that data visibility and manipulation are properly controlled.

## Common E-commerce App Data Model Design

The typical data model for e-commerce applications involves four key tables: Users, Products, Shopping Carts, and Orders. For enhanced interaction, additional tables might include Favorites, Reviews, and a table for storing delivery addresses.

### **User Table**

In e-commerce, users are categorized as either buyers—who purchase products or services—or administrators—who manage product listings.

* **Membership Roles**: If your app includes a membership system, differentiate between regular and premium members.
* **Administrative Roles**: For actions like product deletion or removal from listings, roles can be limited to super administrators only.

#### **Common Fields**

* **ID**: Integer. Built-in default field; serves as a unique identifier for users within the app.
* **Updated\_at**: Timestamp. Built-in default field; records the time a user registers.
* **Created\_at**: Timestamp. Built-in default field; records the last time the user uses the app.
* **Name**: Basic text field.
* **Phone Number**: Basic text field.
* **Role**: User/Administrator, etc., defined by your app logic.
* **Shopping Cart**: This is a relational field created by establishing a one-to-many relationship between the user table and the shopping cart table, allowing indexing of this user's shopping cart data.
* **Orders**: This is a relational field created by establishing a one-to-many relationship between the user table and the order table, allowing indexing of this user's order data.
* **Favorites**: This is a relational field created by establishing a one-to-many relationship between the user table and the product table, allowing indexing of this user's favorite products.
* **Reviews**: This is a relational field created by establishing a one-to-many relationship between the user table and reviews, allowing indexing of this user's evaluations of different orders.
* **Other possible configured fields**: Gender, Age, Membership, etc.

<figure><img src="../../.gitbook/assets/截屏2024-06-25 10.58.08.png" alt=""><figcaption></figcaption></figure>

#### **Permission Configuration**

Personal data, including shopping cart contents and order history, is generally considered private. Settings must ensure that only the user and administrators have the ability to view or modify this information. Below is a standard configuration for user table permissions, incorporating row-level security:

* **View all fields**: Yes
* **Modify Name**: Yes
* **Modify Phone Number**: Yes
* **Role**: No, this should be set by system rules or administrators.
* **Shopping Cart**: Yes

And so on, users can only edit their personalized information. While the administrator can view all user information and set a user's, etc.

<figure><img src="../../.gitbook/assets/截屏2024-07-12 16.23.52.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/截屏2024-07-12 16.26.22.png" alt=""><figcaption></figcaption></figure>

### **Product Table**

All product information that users see should be stored in a product table. Information that is not convenient for users to see, such as the product's cost price and profit margin, is also stored in the same table and managed. We only need to set the appropriate viewing permissions for the corresponding roles.

#### **Common Fields**

* **Name**: Text
* **Picture**: Image
* **Price**: Unlimited precision decimal type
* **Description**: Text type
* **Stock**: Integer type
* **Cost Price**: Infinite precision decimal type
* **Profit Margin**: Infinite precision decimal type
* **Product Category ID**: Integer. This is a relational field created by establishing a one-to-many relationship between the product category table and the product table, allowing indexing of the type of product this product belongs to.
* **Status**: Text, such as in stock, out of stock

<figure><img src="../../.gitbook/assets/截屏2024-06-25 13.57.34.png" alt=""><figcaption></figcaption></figure>

#### **Permission Configuration**

Users should only be able to view the data in the product table. Administrators can upload and modify all product information.

<figure><img src="../../.gitbook/assets/截屏2024-06-25 14.04.24.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/截屏2024-06-25 14.05.15.png" alt=""><figcaption></figcaption></figure>

### **Shopping Cart Table**

When users browse products, they can add products to the shopping cart. Typically, the shopping cart table establishes a one-to-many relationship with the user table, because one user can add multiple shopping data to the shopping cart table. Similarly, the shopping cart table also establishes a one-to-many relationship with the product table, because multiple different users will purchase the same product and will appear multiple times in the shopping cart table.

<figure><img src="../../.gitbook/assets/截屏2024-06-25 14.09.59.png" alt=""><figcaption></figcaption></figure>

#### **Common Fields**

* **Buyer ID/User ID**: Integer. This is a relational field created by establishing a one-to-many relationship between the user table and the shopping cart table, allowing indexing of this user's basic information.
* **Product ID**: Integer. This is a relational field created by establishing a one-to-many relationship between the product table and the shopping cart table, allowing indexing of this product's basic information.
*   **Product Quantity**: Integer], records the quantity of this product added.

    <figure><img src="../../.gitbook/assets/截屏2024-06-25 14.13.23.png" alt=""><figcaption></figcaption></figure>

#### **Permission Configuration**

Like the user table, the data in the shopping cart table is very private and can only be viewed and modified by the user themselves and administrators. So, we can set in permission management that only the user themselves and administrators can modify and view the user's shopping cart data.

### **Order Table**

The order table is used to record the order information of user's purchasing, generally including who the buyer is, which products were bought, the payment status, delivery status and other important content. Since an order may contain multiple products, a separate order detail table is usually established, and the order table and the order detail table will establish a one-to-many relationship to record which products are contained in this order.

#### **Common Fields**

* **Buyer ID**: Integer. This is a relational field created by establishing a one-to-many relationship between the user table and the order table, allowing indexing of this user's basic information.
* **Products Included in the Order**: Object type, this is a relational field created by establishing a one-to-many relationship between the order table and the order detail table, allowing indexing of which products are included in this order.
* **Payment Method**: Text, such as Stripe, Paypal, etc.
* **Payment Status**: Text, such as payment successful/payment failed, etc.
* **Order Status**: Text type, such as stocking up/shipped/delivering/cancel order, etc.
* **Recipient Name**: Text
* **Recipient Contact Information**: Text
* **Recipient Detailed Address**: Text
* **Total Order Price**: Infinite precision decimal type
* **Discount Price**: Infinite precision decimal type
* **Use of Coupon**: Boolean type

#### **Order Table Permission Configuration**

Order data is relatively private, so it needs to be set so that only the order owner and administrators can view or modify order information. Before placing an order, users can choose the payment method and recipient information. After the order is successfully placed, users can no longer modify the payment method, so extra attention is needed when configuring permissions.

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

### **References**

* Read [Login Design ](https://docs.momen.app/tutorial/how-to-design-your-login-page)to understand the data sources of the user table.
* In [Permission Management](https://docs.momen.app/advanced-functionality/permission-management), you can learn how to configure your web's permission.

### **About Momen​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
