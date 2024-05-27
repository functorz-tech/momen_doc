---
description: >-
  Learn about data modeling and its role in software development. This guide
  explains data tables, their relationships, and the use of statistical tables.
---

# Data Model Fundamental

{% hint style="warning" %}
Data modeling refers to the framework established by one or multiple tables interconnected by reference relationships. Before developing software applications, designing an effective data model can significantly improve development efficiency!
{% endhint %}

### Introduction

In this guide, we explore the fundamental principles of data modeling and its crucial role in software development. We'll cover the structure of data tables, the intricacies of their relationships, and the considerations in designing statistical tables. A comprehensive understanding of these concepts allows developers to optimize the performance and structure of their software applications.

### Why Design a Data Model?

During software development, it's essential to determine the data types the software will handle, which tables they should be stored in, the data fields (or columns) within each table, and whether there's any referencing relationship between tables. This is where data modeling comes into play, as it helps clarify the tables, their columns, and the relationships between them. Once a data model is established, it essentially defines the structure for data storage.\


### What is a Data Table?

A data table is a structured format where data types for each field are specified, and every data row strictly adheres to the field order and type. Further, data tables typically contain a static, non-descriptive field assigned to uniquely identify each data record. This field is known as the primary key. In most tables, this primary key field is named "id," represented by an auto-incrementing integer.

**Example Table A:**

| Id | Name  | Classroom | Subject | Grade (out of 100) |
| -- | ----- | --------- | ------- | ------------------ |
| 1  | Kevin | 1         | English | 98                 |
| 2  | Kevin | 1         | History | 78                 |
| 3  | Kevin | 1         | Math    | 85                 |
| 4  | Bob   | 2         | English | 88                 |
| 5  | Bob   | 2         | History | 77                 |
| 6  | Bob   | 2         | Math    | 100                |
| 7  | Ella  | 1         | English | 30                 |
| 8  | Ella  | 1         | History | 30                 |
| 9  | Ella  | 1         | Math    | 30                 |

Consider a table with the following fields: id, Name, Class, Subject, and Score. Here, the "id" serves as the primary key, while "Name," "Class," and "Subject" are text fields, and "Score" is a numeric field. For the nine data records in this table, each entry strictly follows the order and type of these fields. For instance, the "Score" field shouldn't contain text values like "Failed."

### Distinguishing "Bad" Data Tables

Understanding that data tables frequently face analytical requirements, let's discern what characterizes a "bad" data table.

**Example Table B:**

| ID | Name  | Class | English Score | History Score | Math Score |
| -- | ----- | ----- | ------------- | ------------- | ---------- |
| 1  | Kevin | 1     | 98            | 78            | 85         |
| 2  | Bob   | 2     | 88            | 77            | 100        |
| 3  | Ella  | 1     | 30            | 30            | 30         |

While Table B holds the same amount of information as Table A, why is it deemed "bad"? Typically, we expect that once a data table is designed, there should be minimal changes to its structural fields. Table B lacks scalability, meaning that the cost of maintaining and upgrading the table in the face of new requirements will be higher.

For instance, if we introduce a new subject, "Physics," to our curriculum, Table A would simply require an additional entry under the subject field. In contrast, Table B would necessitate a new column for the entire table.

In abstract terms: given a consistent amount of non-redundant information, a data table's design should maximize the number of data entries, not columns.\


### Why Split Data Tables and Establish Data Relationships?

Having established that Table B is flawed, it's essential to note that Table A isn't perfect either. Consider the following scenarios:

* If a student transfers classes, their class data in Table A becomes incorrect and would need an update.
* If a subject is renamed (e.g., "English" to "Language"), records in Table A would need correction.
* Trying to determine the number of students in each class from Table A may be inaccurate. Some students might have missed an exam, others might have dropped out or joined after the exam.

In essence, even with a student field, Table A's scalability remains problematic, unable to capture the evolving details of students and subjects accurately.

Hence, it's advisable to split data tables to cater to more extensive and in-depth requirements (Another primary purpose of splitting tables is to reduce server stress when accessing data, but we won't delve into that here).

For instance, Table A should ideally be divided into separate tables for Students, Subjects, and Scores. Further segmentation, like a separate table for classes, could be considered. However, given that class structures tend to be more fixed, such an operation may not be necessary.\
**Person Table**

| id | Name  | Class |
| -- | ----- | ----- |
| 1  | Kevin | 1     |
| 2  | Bob   | 2     |
| 3  | Ella  | 1     |

**Subject Table**

| id | Name    |
| -- | ------- |
| 1  | English |
| 2  | History |
| 3  | Math    |

#### Using Relational IDs to Link Tables

In a relational database system, rather than duplicating information across tables, we establish relationships between them. By breaking down complex tables into simpler, interconnected ones, we ensure data consistency, reduce redundancy, and make it easier to manage and query the data.

**Scores Table**

| id | person\_id | subject\_id | Score |
| -- | ---------- | ----------- | ----- |
| 1  | 1          | 1           | 98    |
| 2  | 1          | 2           | 78    |
| 3  | 1          | 3           | 85    |
| 4  | 2          | 1           | 88    |
| 5  | 2          | 2           | 77    |
| 6  | 2          | 3           | 100   |
| 7  | 3          | 1           | 30    |
| 8  | 3          | 2           | 30    |
| 9  | 3          | 3           | 30    |

The \[person\_id] and \[subject\_id] in the \[Score] table act as foreign keys. They reference the primary keys (id fields) from the \[person] and \[subject] tables, respectively.

To find out which student achieved a particular score in a specific subject, you can join the \[Score] table with both the \[person] and \[subject] tables. This would provide the student's name and the subject corresponding to each score.

### Relationships in Data Modeling

#### 1:N (One-to-Many) Relationship

When Table A and Table B establish a 1:1 relationship, a specific record in Table A is exclusively linked to a specific record in Table B. For instance, consider an extensive User Information table. Due to its vast number of columns, managing it becomes cumbersome. To streamline this, based on business requirements, we split it into two tables: Table A \[user] and Table B \[user\_auth]. The \[user] table primarily stores basic user data fields such as UserID, Real Name, Nickname, Avatar, Gender, Position, Education Level, Specialty, and Timestamp of User Creation. Conversely, the \[user\_auth] table is designated for authentication data like UserID, Password, Email, and Phone Number.

A 1:1 relationship essentially segments a larger table into two or more tables when further decomposition of its columns is impractical. This linkage facilitates data querying and management.

#### 1:1 (One-to-One) Relationship

When Table A establishes a 1:N relationship with Table B, Table A is regarded as the parent table of Table B. For instance, in the previous example of a Student table and a Student Performance table, a 1:N relationship is present.

| ID | student\_id | Class | Score |
| -- | ----------- | ----- | ----- |
| 1  | 1           | 1     | 98    |

The essence of forming this relationship involves embedding a column in the child table that captures the ID of the parent table's record. This illustrates which record in the child table corresponds to a record in the parent table. For example, a data entry in the Student Performance table that links to ID=1 in the Student table signifies that these are the scores for _Kevin_.

| ID | Name  | Gender | Class |
| -- | ----- | ------ | ----- |
| 1  | Kevin | male   | 3     |

\
\


#### **Subordinate Perspective**:

Determine if entries in Table B can only belong to a single entry in Table A. If this is the case, then Table A can establish a relationship with Table B. For instance, a student can only be part of one class, but a class can have multiple students, thus a 1:N relationship can be established from the class to the student. Similarly, a single score entry can only belong to one student, but a student can have multiple score records. Therefore, a 1:N relationship can be formed from the student table to the score table.\


#### **Reference Perspective**:

Table N can reference information from Table 1. Think of this relationship as a doorway or a link; through this, Table N can access related information from Table 1. In Momen, such referencing is represented by the side-drawer that appears upon relationship binding. For example, when viewing the student score list and wanting to know the student IDs corresponding to each score:

<figure><img src="../../.gitbook/assets/1 (60).png" alt=""><figcaption></figcaption></figure>

In scenarios involving complex data models and confusion surrounding relationships, consider the reference perspective: What information does this table require? Which information is already present in other tables? Can this information be accessed through referencing? If so, how can the relationship be established to achieve this?\


#### Special 1:N Relationship: Self-referential Table

A self-referential relationship occurs when a table establishes a one-to-many relationship with itself. This is commonly applied in hierarchical structures. For instance, in e-commerce, a "Category" can be a self-referential table. It uses the "Parent Category" to determine its upper level category. With this single reference field, multiple hierarchical levels can be added.

<figure><img src="../../.gitbook/assets/2 (52).png" alt="" width="375"><figcaption></figcaption></figure>

Other common scenarios include:

1. Organizational employee hierarchy.
2. Gaming quest chains.
3. Pagination for content.

#### Special 1:N Relationship: Dual-reference Table

This structure involves the referenced object creating two relationship fields towards the referencing side. A classic use-case is in a chat data model where the referenced object is the user and the referencing side is the chat message. In the chat message table, the user table's ID is referenced twice - one to represent the sender of the message and another for the recipient.

<figure><img src="../../.gitbook/assets/3 (51).png" alt="" width="563"><figcaption></figcaption></figure>

#### N:N (Many-to-Many) Relationship

At times, two entities may exhibit a many-to-many relationship. Examples include:

* Event Registration (e.g., User table, Event table - where a user can register for multiple events, and an event can have multiple registrants).
* Favorites (e.g., User table, Product table - a user can favorite multiple products, and a product can be favorited by multiple users).
* Likes (e.g., User table, Article table).

In such cases, an intermediary table is created between the two entity tables. Both entity tables then establish a 1:N relationship with this intermediary table to effectively represent the many-to-many relationship between them. For instance, considering event registration:

<figure><img src="../../.gitbook/assets/4 (47).png" alt=""><figcaption></figcaption></figure>

Other typical scenarios include:

1. Event registration.
2. Book favorites.
3. Video likes.
4. Content tags.

### What is a Statistical Table? What are the purposes of Data Tables and Statistical Tables?

A statistical table is generated after aggregating data from the source data table. Unlike a regular data table, statistical tables do not contain primary keys; however, the rest of their recording principles are consistent with those of data tables.

For instance, referring to the score table in the previous section, if one wants to ascertain the total scores of students in each class, a statistical table might look like:

\
**What is a Statistical Table? What are the purposes of Data Tables and Statistical Tables?**

\
A statistical table is generated after aggregating data from the source data table. Unlike a regular data table, statistical tables do not contain primary keys; however, the rest of their recording principles are consistent with those of data tables.

\
For instance, referring to the score table in the previous section, if one wants to ascertain the total scores of students in each class, a statistical table might look like:

| Class   | Name  | Total Score |
| ------- | ----- | ----------- |
| Class 1 | Kevin | 261         |
| Class 1 | Bob   | 90          |
| Class 2 | Ella  | 265         |

Statistical tables distinctly differentiate between grouping fields (indicated in yellow) and aggregated fields (with no background color). Each aggregation field is derived from a single field of the source data table. Common aggregation operations typically include count, sum, average, maximum, and minimum. While data tables provide exhaustive details that may seem overwhelming, deriving specific statistical tables to meet focused requirements is a prevalent practice.

\
For beginners, a common question might arise: "Without any source data table, can I directly create a statistical table upon receiving a data aggregation request?"

\
It is not recommended to bypass the data table. The process of aggregation inherently reduces information granularity. For instance, by merely viewing a total score statistical table, one cannot discern individual subject scores for each student, or even identify the range of subjects. Consequently, should a different statistical requirement arise later, one might find it challenging to accommodate, such as needing the average scores across subjects.

\
**Thus, the standard workflow involves first collecting data to create a data table, and then deriving statistical tables from it.**

\
If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz.) for assistance.\


### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
