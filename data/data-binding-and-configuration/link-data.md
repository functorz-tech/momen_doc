---
description: >-
  Use seamless data exchange in Momen with "Link Data" for enhanced
  functionality and user experiences.
---

# Link Data

### **Introduction**

Step into the world of interconnected data exchange with "Link Data" in Momen. This tutorial will empower you to seamlessly transfer information between pages, enhancing your web app's functionality and user experience.

Before reading this, it is recommended to familiarize yourself with [Data Retrieval and Display](https://docs.momen.app/data/data-retrieval-and-display).

### **Concept of Link Data**

Link Data: data passed between pages of different programs

### **Why Use Link Data**

The following scenarios generally require the use of Link Data:

1. **Viewing Data Details:** When you need to pass data from one page (A) to another page (B) to display data details, you can create a \[Link Data] on page B to receive the data from page A.
2. **Product Codes**: In cases where each product is associated with a QR code (page A), scanning the QR code (page B) to view product details requires data transfer. Creating \[Link Data] on the scanning page (B) allows it to receive the data passed by the QR code.

### **Prerequisites for Using Link Data**

1. Identify the Receiving Page: Create Link Data on the page that will receive the data, providing a location to collect Link Data.
2. Specify Data Types: Define the correct data type for the Link Data to ensure proper data transmission.
3. Choose Data Transfer Method: Determine how you'll pass the Link Data:

&#x20;            a. Jumping behavior

&#x20;            b. Code scanning behavior

&#x20;            c. Through sharing behavior

&#x20;            d. Other flexible use cases

### **How to Use Link Data in Momen**

As shown in the following figure: add Link Data to the page (choose the appropriate type to ensure that the Link Data is delivered correctly).

<figure><img src="../../.gitbook/assets/0 (31).png" alt="Choosing the right type for link data."><figcaption></figcaption></figure>

When moving from one page (A) to another (B) using a jump behavior, add the jump behavior to page A. Include parameters in the jump behavior to transmit the data.

<figure><img src="../../.gitbook/assets/1 (29).png" alt="Add parameters to transmit data."><figcaption></figcaption></figure>

💡Tips:

* Use the transmitted data in Page B to determine the content style for display.
* Utilize the passed data as a filter when reading remote data on Page B to access specific information.

When storing data in a database, IDs often serve as unique identifiers for data pieces. Pass the ID data through \[Link Data] for efficient data retrieval.



### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
