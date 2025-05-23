---
description: >-
  After clicking on the component configured for this action, you can download a
  file from the web database to the computer, which was previously requested
  from the web database.
---

# File Management

**File-related actions include:**

- Upload file
- Download file/image/bitmap

## Upload File

### Introduction

The **Upload File** action allows users to select and upload files from their device. Supported file types include PDF, Word, Excel, and audio files.

### Scenario

For example, in a recruitment project, you can add a button to the page and configure it with the upload action, allowing applicants to upload their resumes.

### How to Configure

1. **Add a Page Variable**  
   Add a page variable of type "file" to the page. This variable will store the uploaded file.

2. **Add the Upload File Action**  
   Add the **Upload File** action to the component and assign the uploaded file to the page variable created in step 1.

| ![Add file variable](../.gitbook/assets/1%20(13).png) | ![Assign uploaded file](../.gitbook/assets/2%20(9).png) |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |

### Notes

1. Only one file can be uploaded at a time. Uploading another file will overwrite the previous one.
2. File preview is not supported.
3. If there are multiple page variables, rename them for clarity.
4. Since there is no system notification for a successful upload, it is recommended to add a **Show Toast** action under "Action on Success" to notify the user. Alternatively, use a **Conditional Container** to display a success message.

---

## Download File/Image/Bitmap

### Introduction

The **Download File** action allows users to download a file stored in the database to their local device.

### How to Configure

1. **Identify a Data Source**  
   Set up a data source on the page that requests the data table containing the file. Limit the result to one record and adjust filter conditions as needed.

   ![File data source](../.gitbook/assets/image%20(7)%20(1).png)

2. **Add the Download Action**  
   - Add the **Download File** action to the component (usually a button), and bind the file data from the page data.
   - For **Download Bitmap**, after converting a view component to a bitmap using the "View to Bitmap" action, the result data will be generated automatically. Add the **Download Bitmap** action under "on Success" and bind the result data.
