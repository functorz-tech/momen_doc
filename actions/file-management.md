---
description: >-
  After clicking on the component configured for this action, you can download a file from the web database to the computer, which was previously requested from the web database.
---

# File Management

File -related action includes:
1. Upload file
2. Download file/images/bitmap

## 1. Upload file
### Introduction
When triggering the "upload file" action, users can select files in the system folder to upload, supporting PDF, Word, Excel and audio files.

### Scenario
For recruitment-related projects, a button is placed on the page to configure the file upload action, allowing applicants to upload their resumes.

### Action configuration guide
**1. Add a page variable**   
The first step is to add a page variable with the type of file to the page itself so that you can assign the uploaded file to that page variable.

**2. Add action**   
Add the \[Upload File] action to the component and assign the uploaded file to the page variable set in step 1.

<table data-header-hidden><thead><tr><th width="364"></th><th></th></tr></thead><tbody><tr><td><img src="../.gitbook/assets/1 (13).png" alt="" data-size="original"></td><td><img src="../.gitbook/assets/2 (9).png" alt="" data-size="original"></td></tr></tbody></table>


### Notes
1. This action only supports uploading one file. If you upload another file, it will overwrite the previous file.
2. This action does not support the preview of a file. 
3. If there is more than one page variable on the page, it is recommended to rename it so that you can clearly find the one to which you need to assign.
4. Since there is no system notification when a file is uploaded successfully, it is common to add a \[Show Toast] action under action on success section to remind the user that the file has been uploaded successfully. Of course, you can also use the \[Conditional Container] to display different styles to remind users of the successful upload.


## 2. Download files/images/bitmap

### Introduction
Click to trigger the file that is saved in the database to the folder of the computer

### Action configuration guide   
**1. Identify a data source to request files/images**
If you want to download a file by clicking on the download button, you will need to identify a data source on the page that requests access to a data table containing the file data. Set the limit to one record and adjust the filter conditions to meet your specific business needs.

![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=NTZlNTA4YTAyYTVkOTFiMTBjNDM0MGQzODk1ODNmYjBfRlhuVUpNVlF5NXRUS29iMFZ0NDI0NVJ5T1Q2T0tVUEtfVG9rZW46UktQUGJqWHdTb3Fxc1N4a2x5MWN3YWRhbnhkXzE3MTUzMTM4NzU6MTcxNTMxNzQ3NV9WNA) ![](<../.gitbook/assets/image (7) (1).png>)

**2. Add action**
- Add the "download file" action to the component(usually a button), then bind the file data through in-page data.
- For download bitmap action, when a view component is converted to a bitmap through "View to Bitmap" action, it will automatically generate a result data. You can then add the "download bitmap" action under action on success section and bind the result data.
