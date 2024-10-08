# File｜Upload File

### **Introduction**

When triggering the "upload file" action, the Web side can select files from the system folder, supporting common file types such as PDF, Word, Excel, audio files, etc.

### **Action Brief**

Used to upload files within a project.

💡 Tips:

1. This action only supports uploading a file, if you upload a file again, it will overwrite the previous file.
2. This action does not support the preview of a file. For a detailed configuration of viewing a file, please check View File.

### **Operation Guides**

#### **Step 1: Adding Page Data**

Add page data of type.

![](<../../.gitbook/assets/0 (13).png>)

💡 Tips:

If there is more than one page data on the page, it is recommended to rename it so that you can clearly find which one you need to select when selecting the page data.

#### **Step 2. Add Action**

* Add the \[Upload File] action to the component.
* Click the file name to bring up the action drop-down box and configure the corresponding data.

Assign the uploaded file to the page data set in step 1.

<table data-header-hidden><thead><tr><th width="364"></th><th></th></tr></thead><tbody><tr><td><img src="../../.gitbook/assets/1 (13).png" alt="" data-size="original"></td><td><img src="../../.gitbook/assets/2 (9).png" alt="" data-size="original"></td></tr></tbody></table>

💡 Tips:

Since the front end of the page will not change after the file is uploaded successfully, it is common to add a \[Show Toast] action to the \[Upload File] action to remind the user that the file has been uploaded successfully.

Of course, you can also use the \[Conditional Container] to display different styles of uploading and successful uploading to remind users of the successful upload, as shown in the figure above.



### **About Momen​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
