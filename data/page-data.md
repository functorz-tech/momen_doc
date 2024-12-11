---
description: >-
  Master efficient page data management and enhance data processing capabilities
  in Momen.
---

# Page Data

### **Introduction**

Discover how "Page Data" in Momen revolutionizes temporary data management, enabling efficient data handling and enhancing user experiences.

### **The Concept of Page Data**

Page data represents information temporarily obtained or set on the current page.

💡Tips:

It's a variable similar to those used in basic programming. However, it's important to note that the value of page data is undefined, not null. To use page data directly for calculations or content manipulation, you must set its initial value by adding the page data behavior to the page's \[Life Cycle] - \[Page Loading].

### **Why Use Page Data**

Temporary data generated/set on the page that needs to be used further.

The following scenarios generally require the use of page data:

1. Setting Shipping Addresses: When selecting a location on a page, such as a map, you can use page data to record the specific administrative address of the location.
2. Navigation: Similar to the above scenario, you can use map data to determine a destination and set page data to record it, enabling navigation functionality.
3. Total Cart Amount: When calculating the total cost of goods on a page, page data can save the temporary settlement amount for further processing.
4. Uploading Files: Temporary data, like files, can be saved in page data and later transferred to a data table.

### **Prerequisites for Using Page Data**

1. Create page data on the page, providing a location to store the data in the future.
2. Define the type of the page data:
   1. If the page data is used to save a temporary geographic location, the page data type needs to be set to "Geographic Location".
   2. If the page data is used to save the settlement amount, the page data type should be set to "Infinite Exact Decimal".
3. Specify whether the page data is single or multiple data.

### **How to Use Page Data in Momen?**

As shown in the following figure, add page data on the page, name the page data (currently only in English), select the corresponding data type, and choose whether to fill in the default value according to business needs. Currently, the default value only supports four basic data types: String, Integer, Float, and Boolean.&#x20;

<img src="https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MmIxNmVmYzU5MmFhZjRjNGI1OWQ2ZjMxOGM5NTQzN2ZfZVNYWldEUEFsTHdTVlFvd2V4TWJ4Y1ZVNmJCZ3FYOWZfVG9rZW46Q0JoQWIxSU13b241bUx4OGhZbmNUV204bkllXzE3MTE1MzM3MTU6MTcxMTUzNzMxNV9WNA" alt="The type of page data." data-size="original"><img src="https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MTY1YjU5MGQ5MWVlNzUyOWE5MDRhZDUzN2U2YjA2M2RfZ2t2RThwRENaaWZ3NHN3U0RJZjdXQ2l3MUp0SWxIYWRfVG9rZW46TVBPbGJqUlhRb3ZCem54WjdxaWNuM3dpbmhiXzE3MTE1MzM3MTU6MTcxMTUzNzMxNV9WNA" alt="The type of page data." data-size="original">![Save multiple data or arrays with IsList enabled.](<../../.gitbook/assets/1280X1280 (4) (1).1.png>) &#x20;

After opening "IsList," you can save multiple data (arrays) within page data.

![](<../../.gitbook/assets/3 (61).png>)

💡Tips:

After \[Page Data] is created on a page, you can assign a value to \[Page Data] when needed by using the \[Set Value | Set Page Data] behavior. Then the page data can be used for judgment, writing, and other operations.



### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
