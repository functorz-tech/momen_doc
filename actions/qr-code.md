---
description: >-
  After clicking on the component configured for this action,
  you can generate a QR code. The QR code can be plain text or include
  parameters, and you can also set a background image.
---

# QR Code

## Introduction

Momen's **Generate QR Code** action enables you to create QR codes containing either plain text or parameterized data. You can also overlay the QR code onto a background image for enhanced presentation.

## How to Configure

### 1. Create a Page Variable

On the page where you want to generate the QR code, create a page variable with the data type set to *image* (since the QR code will be stored as an image).

### 2. Add the Generate QR Code Action

Add the **Generate QR Code** action to a component (typically a button). You can configure the QR code data in two ways: **Plain Text** or **Parameters**.

- **Plain Text Mode**:  
  Enable the *Is Plain Text* option and enter the content directly. The QR code can encode text, URLs, images, files, or videos. After configuring the data, assign the generated QR code image to the page variable created in step 1.
    - If the data is text, scanning the QR code will display the text.
    - If the data is a URL (starting with `https`), scanning will open the corresponding web page.
    - If the data is an image URL, scanning will display the image.
    - If the data is a document (Word, PPT, PDF, etc.), scanning will display the document for viewing.
    - If the data is a video URL (e.g., MP4), scanning will play the video.

![QR code configuration interface.](../.gitbook/assets/3%20(6).png)

- **Parameter Mode**:  
  If *Is Plain Text* is disabled, click **Add Parameter** (multiple parameters are supported) to bind the relevant data. This mode is commonly used for:
    - **Restaurant Ordering**: The QR code encodes a table ID, allowing the application to identify the table when an order is placed.
    - **Equipment Inspection**: The QR code encodes a device ID, enabling the application to associate inspection records with the correct device.

| ![Parameter configuration example: restaurant ordering.](../.gitbook/assets/1%20(12).png) | ![Parameter configuration example: equipment inspection.](../.gitbook/assets/2%20(8).png) |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |

### 3. Add a Background Image

1. Enable the *Has Background Image* option and click **Select Image** to upload a background.
2. When configuring the background image, the size and position settings apply to the QR code itself, not the background. The background image fills the entire image component. Adjust the QR code's size and position for the desired layout.  
   For example, if the image component is 400x400 and the QR code is set to 300x300, set both *x* and *y* to 50 to center the QR code.

### 4. Display the QR Code Using an Image Component

After generating the QR code, add a **Show Modal** action and switch to custom mode. In custom mode, add an image component and bind it to the page variable containing the QR code image to display it.

![Display QR code in modal using image component.](../.gitbook/assets/5%20(2).png)



