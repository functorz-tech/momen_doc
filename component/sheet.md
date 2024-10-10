---
description: >-
  Table component is useful in showcasing and managing data in your website. 
---
# Table

### **Introduction**

Table component is useful in showcasing and managing data in your website. Learn how to customize and configure the interaction of table component in this doc.

### **Application Scenario**

Common application scenarios:

Back-end management system: Manage user information, orders, product inventory, etc.

Reporting: Display sales data, performance metrics, or other statistical information.

Task or event logs: Track activities in the system, such as user login logs, transaction logs, etc.

User permissions management: Display and edit different users' permissions.

Database/archive management: Store and retrieve documents or other media files.

Data analysis and visualization: Provide filtering, sorting, and further analysis.

![](<../.gitbook/assets/0 (3).png>)

The table component is only designed for pagination interaction, and cannot implement interactions such as importing, clicking to add/modify data currently.

### **Design**

The table component can be found in the 'Other' category in the left sidebar of the editor. The current table component allows setting the row height, font color of the table/header/footer, background color, font size, divider line width, and other standard styles.

![](<../.gitbook/assets/1 (4).png>)

### **Content**

After binding a database table, you can select which data columns to display in the table. You can also drag data columns to adjust the order, modify the data column names and height. Similarly, you can set data filtering or conditions for the Table component to enable search, sort, and other interactive features.

![](<../.gitbook/assets/2 (2).png>)

### **Data Display and Interaction**

#### **Display**

Integer, text, date, time, and arbitrary precision decimal types of data are directly displayed in their corresponding text styles

Image type: Displayed as thumbnails, can be clicked to expand and view the larger image

Boolean type: false is displayed with red background and black text, true is displayed with green background and white text

File type: Opens a new browser tab to display the file contents

Video type: Opens a new browser tab to display video content

#### **Interaction**

Allows dragging a column to adjust the display width of the column

Click on the next page, load the next page's data

Click on the previous page, return to the previous page to display the data from the previous page

![](../.gitbook/assets/3.gif)

#### **Exporting table data**

If you want to add the function of 'Exporting table data', you can add a button component to the page. In its interaction, add the action of 'Export table'.

After clicking the 'Export' button, the browser's download function will automatically be called to download the table data. The exported data format is csv, which can be opened and viewed with Excel. Currently, it is only possible to export data of types: integer, text, date, time, timestamp, arbitrary precision decimal, and boolean values. It cannot export data types such as images, files, and videos.

![](<../.gitbook/assets/4 (2).png>)

### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
