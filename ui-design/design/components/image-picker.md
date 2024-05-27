---
description: Learn about image picker component in Momen.
---

# Image Picker

### Update Details

1. Combined the single and multiple image pickers. The output type is determined by the 'number of images' setting:
   1. For one image, it uses the 'image' type, aligning with the previous single image selector.
   2. For more than one image, it uses the 'array' type, similar to the previous custom multi-image selector.
2. Removed the focus mode and defaulted to a mainstream style. In multi-image mode, each image's width is the total width of the component divided by the number of images per row.
3. Enhanced built-in interaction logic includes adding images with a delete option on the top-left corner of each image and previewing images upon upload.
4. Removed actions for adding and deleting images from the image selector.



### Application Scenarios

Useful for updating user avatars and uploading multiple images simultaneously.



### Image Picker Design

Allows customization of individual image styles including rounded corners, background color, border, and shadow.



### Image Selector Content

Number of images configuration: defaults to 1; settings for more than one trigger multi-image options.

1. Quantity Rules

* One image uses the 'image' type.
* More than one image uses the 'array' type, with a maximum of 99.

2. Multi-image Settings

* Number of columns: images per row.
* Spacing between images: distance between columns.

3. Set default images for adding views, which can be uploaded locally or bound to image data types.
4. Default image values are data-bound and displayed when the component loads (single image as 'image' type, multiple images as 'array' type).



### Image Selector Interactions

1. Interactions

* Loading animation: opt to show an animation during image uploads.
* Actions upon success: configurable actions triggered after uploads are completed.



### Image Picker Output Operations

1. Single Image

* Data model includes an image field.
* Attach insertion action to a button.
* Bind the image field to a single-image component.
* Trigger addition action by clicking the button after previewing and uploading an image.

2. Multiple Images

* Data model includes an image field.
* Attach batch insertion action to a button.
* Bind to an image component configured for more than one image.
* Use the three dots on the right to switch settings.
* Complete batch image insertions by clicking the button after previewing and uploading.

### Note

If real-time preview displays "Image result is undefined", a database deployment or preview is necessary.



If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
