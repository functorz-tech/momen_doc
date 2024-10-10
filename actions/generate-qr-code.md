---
description: >-
  Generate QR Code: After clicking on the component configured for this action,
  you can generate a QR code. The QR code can be plain text or include
  parameters, and you can also set a background image.
---

# QR Code｜Generate QR Code

### **Introduction**

Before reading this, it is recommended to familiarize yourself with the Show Modal.

### **Action Brief**

Momen's Generate QR Code action can generate a plain text QR code or a QR code carrying parameters and can be merged with a background image to achieve the effect of sharing poster generation.

### **Operation Guide**

1. In the page where the QR code is to be generated, create the page data with the data type of image (QR code belongs to image).

![](<../.gitbook/assets/0 (12).png>)

2. Add the action of generating a QR code to the component (usually a button), the data in the QR code can be of two types: \[Is Plain Text] and \[Parameters].

* If the data is of \[Is Plain Text] type, turn on the \[Is Plain Text] button and enter the content directly into the input box.
* If the data is not of \[Is Plain Text] type, you can click Add Parameter (can be more than one) to define the name and type of the data, and input or bind the corresponding data content.

| <img src="../.gitbook/assets/1 (12).png" alt="" data-size="original"> | <img src="../.gitbook/assets/2 (8).png" alt="" data-size="original"> |
| --------------------------------------------------------------------- | -------------------------------------------------------------------- |

💡 Tips:

The data of plain text QR code can be set as text, URL, image, file and video.

* When the data is text, the text content will be displayed directly after scanning the QR code.
* When the data is a URL (starting with https), scanning the QR code will directly jump to the corresponding web page.
* When the data is an image URL, scanning the QR code will directly display the image.
* When the data is a document (word, ppt, pdf, etc.), scanning the QR code will directly display the corresponding document content, which can be browsed.
* When the data is the URL of a video (MP4, etc.), scanning the QR code will directly display the corresponding video, which can be played.

After setting up the QR code data, you need to assign this data to the page data created in the first step.

![](<../.gitbook/assets/3 (6).png>)

3. Turning off plain text mode

After setting the parameters for the QR code, the result is a JSON object.\
For example, if you configured an "integer" type 'seat\_id' parameter and a "text" type 'web\_link' parameter, the actual data seen after scanning the code would be {"seat\_id":20,"web\_link":"https://momen.app/"}.

<figure><img src="../.gitbook/assets/Screenshot 2024-05-09 at 16.08.32.png" alt=""><figcaption></figcaption></figure>

The QR codes generated with plain text mode disabled are generally used in the following scenarios:

* Restaurant ordering: The parameters in the QR code are linked to the ID of a table in the database, so when the user scans the code to place an order, the application can know which table the order is for and deliver the food to the corresponding table.
* Equipment inspection: The parameters in the QR code are linked to the ID of a device in the database, so when the user scans the code to record the inspection, the application can know which device the inspection record is for and add the new record to that device's history.

You can also set the background image by turning on the \[Has Background Image] button and clicking on the \[Select Image] to upload it.

💡 Tips:

The size and relative position here refer to the QR code image, not the background image, the background image will fill the display image component.

As shown in the figure below, the relative position is the upper left corner, if you want to achieve the poster effect, you can adjust the relative position and size here.

![](<../.gitbook/assets/4 (6).png>)

**Binding page data using image component**

Generally, when we successfully generate a QR code, we will add the \[Show Modal] action to display the QR code by adding an image component to the custom mode, and the data bound to the image component is the page data set in the first step.

| <img src="../.gitbook/assets/5 (2).png" alt="" data-size="original"> | <img src="../.gitbook/assets/6 (2).png" alt="" data-size="original"> |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- |

💡 Tip:

This action does not provide the function of scanning QR code, only the function of generating QR code.

### **About Momen​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
