---
description: >-
  After clicking on the component configured for this action,
  you can generate a QR code. The QR code can be plain text or include
  parameters, and you can also set a background image.
---

# QR Code

## Introduction   
Momen's Generate QR Code action can generate a plain text QR code or a QR code carrying parameters. The QR code can be merged with a background image.

## Action configuration guide   
**1. Create a page variable**   
In the page where the QR code is to be generated, create a page variable with the data type of image (QR code belongs to image).

**2. Add action**  
Add the action of generating a QR code to the component (usually a button). The data in the QR code can be of two types: \[Is Plain Text] and \[Parameters].  

- If the data is of \[Is Plain Text] type, enable the \[Is Plain Text] and enter the content directly into the input box. The data of plain text QR code can be set as text, URL, image, file, and video. After setting up the QR code data, you need to assign this data to the page variable created in the first step.
    - When the data is text, the text content will be displayed directly after scanning the QR code.
    - When the data is a URL (starting with https), scanning the QR code will directly jump to the corresponding web page.
    - When the data is an image URL, scanning the QR code will directly display the image.
    - When the data is a document (Word, PPT, PDF, etc.), scanning the QR code will directly display the corresponding document content, which can be browsed.
    - When the data is the URL of a video (MP4, etc.), scanning the QR code will directly display the corresponding video, which can be played.

![](<../.gitbook/assets/3 (6).png>)

- If the data is not of \[Is Plain Text] type, you can click on Add Parameter (can be more than one) to bind the corresponding data content. The QR codes generated with plain text mode disabled are generally used in the following scenarios:   
    - Restaurant ordering: The parameters in the QR code are linked to the ID of a table in the database, so when the user scans the code to place an order, the application can know which table the order is for and deliver the food to the corresponding table.   
    - Equipment inspection: The parameters in the QR code are linked to the ID of a device in the database, so when the user scans the code to record the inspection, the application can know which device the inspection record is for and add the new record to that device's history.

| <img src="../.gitbook/assets/1 (12).png" alt="" data-size="original"> | <img src="../.gitbook/assets/2 (8).png" alt="" data-size="original"> |
| --------------------------------------------------------------------- | -------------------------------------------------------------------- |

**3. Add background image**   
1. You can also set the background image by turning on the \[Has Background Image] button and clicking on the \[Select Image] to upload it.
2. When configuring the background image, the size and relative position here refer to the QR code itself, not the background image. The background image will fill the whole image component. You can adjust the relative position and size to see how it fits. For instance, if the size of the image component is 400x400 and the size of the QR code is set to 300 (300x300), then in order to place the QR code in the center within the background image, the x and y should be set to 50. 

**4. Binding page data using image component**   
Generally, when we successfully generate a QR code, we will add the \[Show Modal] action and switch to custom mode. Under custom mode, you can add an image component and bind the previous page variable to the image component to display the QR code.   
<img src="../.gitbook/assets/5 (2).png" alt="" data-size="original">


