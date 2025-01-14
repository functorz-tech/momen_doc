---
description: >-
 With Momen's built-in relational database, building structured data models is a breeze. It offers a comprehensive suite of features, such as table creation, field customization, relationship management, constraint enforcement, vectorized storage, sorting, and granular permission controls for optimal data security.
---

# Data Models and Databases

Momen provides a powerful relational database that allows you to create well-structured data models with flexible relations between tables.

## Getting Started

Open the "Data" section at the top left of the Editor.

* Data Model: Management of tables, including creating tables, adding columns, establishing relations, etc.

* Database: Management of data

<img src="../.gitbook/assets/data/data_data_model0.png" width="100%"/>
<img src="../.gitbook/assets/data/data_data_model1.png" width="100%"/>

## Table Management

Tables are the core of the data model, where structured data is stored. Managing tables on Momen is very convenient.

### 1. Create a Table

Click "Add" and define the table's properties:

* Name: Cannot use names like "log," "column," "index," etc.

* Description: Description of the table, optional

* Turn on permissions for all roles: Table permission management, when enabled, all roles have the permission to add, delete, modify, and query. For details, see: [Permissions](https://docs.momen.app/release-and-growth/permissions)

> For example, create a "post" table

<img src="../.gitbook/assets/data/data_data_model1_1.png" width="100%"/>

### 2. Add Columns

Each table, when created, has three default columns: id, created_at, and updated_at. These cannot be modified or deleted, and the data is written by the system. The id is a unique identifier for each row of data, acting as a unique "ID card" that does not repeat or change. It is used to locate a specific record of data and to establish relations between tables.

When adding columns, confirm the following properties:

* Column Name: Cannot use words like "column"

* Type: Supports common types such as Text, integer, Image, etc. Momen has a strict type validation system. For example, "Date," "Zoned time," and "Zoned datetime" are all time-related types but cannot be mixed; as the data table is the foundation of the Project, it will affect UI, actions, etc., so the type needs to be carefully determined.

* Required: Indicates whether the data can be empty when adding or modifying data. Generally turned off.

* Unique: Indicates whether this column's data can be repeated, e.g., the username in an Account table cannot be repeated.

* Turn on permissions for all roles: Permission management, when enabled, all roles have the permission to add, delete, modify, and query the column. For details, see: [Permissions](https://docs.momen.app/release-and-growth/permissions)

> In the post table, add title (Text), content (Text), cover (Image), and show_at (Zoned datetime).

<img src="../.gitbook/assets/data/data_data_model2.png" width="100%"/>

### 3. Add Relations

Tables can establish relations through id. As shown below, after the Account table establishes a relation with the post table, a new column is added to the post table to store the id of the Account. It can be seen that both blog posts belong to "Roy"

<img src="../.gitbook/assets/data/data_data_model3.png" width="100%"/>

When establishing relations, consider two main aspects:

1. **Relation Direction**

   Who establishes a relation with whom, as in the example above, the Account establishes a relation with post.

* **Relation Type**

- One-to-many association: A single piece of data in Table A can be associated with **multiple** pieces of data in Table B.

- One-to-one association: A single piece of data in Table A can only be associated with **one** piece of data in Table B.

In the example below, a user can have multiple posts (One-to-many) but only one wallet (One-to-one).

<img src="../.gitbook/assets/data/data_data_model4.png" width="100%"/>

 Add the relation in the starting table (the Account table in this example), and then determine the following properties:

* Target Table: The table to be associated with (the post in this example)

* Relation Type: One-to-one or one-to-many

* Relation Name (in target table): The name of the new column in the associated table (e.g., "Author" in this example)

* Relation Name (in current table): The name of the new column in the starting table (e.g., "Post" in this example)

* Turn on permissions for all roles: Table permission management, when enabled, all roles have the permission to add, delete, modify, and query the table. For details, see: [Permissions](https://docs.momen.app/release-and-growth/permissions)

<img src="../.gitbook/assets/data/data_data_model5.png" width="100%"/>
<img src="../.gitbook/assets/data/data_data_model6.png" width="100%"/>

### 4. Constraint Settings

Currently supports "unique constraint," which can specify that certain columns' data cannot be repeated.

<img src="../.gitbook/assets/data/data_data_model7.png" width="100%"/>

As mentioned earlier, id cannot be repeated, so each table will have a default unique constraint on the id.

<img src="../.gitbook/assets/data/data_data_model8.png" width="100%"/>

Developers can add their own constraints, and when adding, confirm:

1. Constraint Name: Cannot be repeated and cannot use uppercase letters

2. Set of Columns: You can select one or more columns. Selecting one column means the data in this column cannot be repeated; selecting multiple columns means the combination of these columns' data cannot be repeated. **To delete a constraint, you need to remove one of the columns from the set.**

In the image below, a unique constraint is established for the combination of "title" and "author," indicating that the same author cannot use a duplicate title.

<img src="../.gitbook/assets/data/data_data_model9.png" width="100%"/>

### 5. Vector Storage and Sort

Vector storage refers to the operation of vectorizing the data of a column through a large model and storing the vectorized result in the database (invisible to developers).

After vectorization, vector sort can be achieved. Ordinary sorting can only be done according to a single, clear rule, such as numerical size, alphabetical order, etc. It cannot handle vague concepts like "how similar" or "how related." Vector sort, however, converts objects into vectors and calculates the distance between vectors to achieve sorting based on similarity.

For example, by vectorizing the "Content" column in the "post" table, the "Article Recommendation" function can be achieved:

1. Allow users to input the content of the article they want to read

2. Calculate the vector distance between the user's input and the posts, and sort by distance from smallest to largest

3. Select the few articles with the closest distance

Momen currently only supports vector storage for Text types:

<img src="../.gitbook/assets/data/data_data_model10.png" width="100%"/>

After configuring vector storage, vector sort can be configured when retrieving data:

<img src="../.gitbook/assets/data/data_data_model11.png" width="100%"/>

Momen provides two methods for calculating vector distance: COSINE and EUCLIDEAN

* EUCLIDEAN is suitable for scenarios where absolute differences need to be measured, focusing on numerical size and specific physical distance. For example: navigation systems, logistics distribution path optimization; comparing changes in physiological parameters (such as heart rate, blood pressure) over different time periods.

* COSINE is suitable for scenarios where direction similarity needs to be measured, focusing on relative relationships and direction consistency. For example: search engines, text classification, recommendation systems.

### 6. Synchronize Modifications to Online

All modifications to tables and columns will be synchronized online after updating the backend. **If your Project has been published and is in use, modifications to the table may cause some online requests to fail.**

<img src="../.gitbook/assets/data/data_data_model12.png" width="100%"/>

## Permission Management

Data is the most important asset of an application, and permission settings can specify different users' access permissions to data, preventing unauthorized access and data leakage, thereby protecting data assets.

Momen provides a permission management system that combines role-based access control (RBAC) and attribute-based access control (ABAC). While ensuring data security, it also allows for flexible and precise permission control. For details.

## Data Usage

After completing the above operations, the data table can be used as a Data source for other parts:
* As a List Data source
* As a Page Data source, see: [Data Usage](https://docs.momen.app/data/data_usage)

## Data Import
Click on the data model at the top left of the Editor to enter the database, and click the import button


### 1. Select the Data source to import
* Only supports Excel files with UTF-8 encoding (files ending in xls, xlsx), otherwise, there will be garbled text/upload failure. It is recommended to use a newer version of Excel to open and create the content to be imported, and not to use WPS.
* Momen defaults the first row of the Excel table as the header
* In the Excel table, apart from the necessary data columns having data, no data or spaces should be written in other spaces, and there should not be multiple worksheets (such as sheet1, sheet2) in the same Excel table
* Ensure that there is at least one data record in the uploaded data table, otherwise, a format error will be reported.


### 2. Set Table Mapping
Associate the Excel file with the data table created in Momen

### 3. Set Field Mapping
Establish a mapping between the Excel file header and the fields of the data table you want to correspond to. If there are fields you do not want to upload data to, as well as the default creation time and update time, select **[Null]**.

### 4. Set Relation Mapping
For a single unassociated data table, choose to ignore.


### 5. Upload Images, Videos, Files
If there are no media files to upload, you can skip this step. If you need to upload media files.

- When importing images, save the image files in a folder named image and compress the folder into an image.zip archive
- When importing videos, save the video files in a folder named video and compress the folder into a video.zip archive
- When importing Excel, doc, pdf, and **audio** files, save these files in a folder named file and compress the folder into a file.zip archive

**Currently, only single media file imports are supported. For example, when batch importing images, video files cannot be batch imported at the same time. If the data to be imported contains images and videos, it is recommended to store images and videos in different data tables and establish relations before importing them separately.**


### 7. Preview
The final step will preview the uploaded data style
- Reminder: If you see garbled text here, it means your file encoding format is incorrect and needs to be converted to UTF-8 encoding format.

- If the import button is gray, it means your import file is being uploaded, please wait a moment

### 8. Complete Import
**After switching data tables, the latest data will be presented in the data table**
### 9. Common Self-check Methods for Import Failure
When performing data import operations in Momen, if you encounter an import failure prompt, it is because your **import content does not conform to the system's recognition format.**

- Open the console in the browser as follows:
- Mac computer: "option+command+j" or "option+command+c" or "option+command+i"
- Windows computer: "F12" (most can)
- View console, the reason for failure will be thrown here when import fails


Perform an import once, and when it fails, you can see error messages in the console

This is the content of the uploaded Excel file

Check **linenumber**: linenumber does not correspond directly to the data row number, but to the data row number +2, because the system index starts from 0, while the table index starts from 1; also, the first row in the table is the header, resulting in a difference of two rows.

Common error types include:
* Error Type 1: MISMATCHED_DATA_TYPE

  This error means **data type mismatch,** we passed a **Text** type "three hundred dollars" in the price field, while the data type of the price field in the data model is **Infinite precision decimal.**

* Error Type 2: NO_MATCHING_MEDIA

  This error means **no corresponding media file found,** when the file name in the Excel file matches the media file name exactly, it can be successfully uploaded. The folder name must strictly follow the requirements, images - image, videos - video, others - file.

  1. Folder name must be strictly consistent: for example, naming the image folder as images is invalid, as shown in the counterexample in the image above, line 11
  2. The file name and the content in the Excel file must be strictly consistent. If the file name has a suffix, it must also be included in the Excel file, as shown in the counterexample in the image above, line 9
  3. If there are empty data columns in the Excel file, it will also lead to the above error, so empty columns need to be deleted
  4. Suppose the folder name for saving images is "images," and after compressing it, the archive name is "images.zip." Simply changing "images.zip" to "image.zip" will also result in not finding the media file. The folder name should be changed to "image" before compressing
  5. Suppose the image data name in the Excel file is "image/cover1.png," but the actual name of cover1 in the archive is "cover" or the image type is "jpg," then the image data name in the Excel file should be changed to "image/cover.png" or "image/cover1.jpg"

* Error Type 3: **INTERNAL_ERROR**

  In this example, the error occurred because Windows used its built-in compression software to compress image/video and other media files, and the encoding format of the media was not UTF-8, causing Momen to be unable to recognize the content of the media files. To avoid this error, it is generally recommended to use the compression software **Bnadizip** with the following compression configuration


* Error Type 3: **unique_constraint_violation**
  The imported data contains data that violates constraint restrictions. If your table has a one-to-one relation or other manually set constraints, you need to check that the import content of the constrained fields is unique and does not already exist in the backend.

