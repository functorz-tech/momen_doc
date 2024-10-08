---
description: Learn about the fundamentals of data model design principles.
---

# Data Model Design

### Introduction

This article offers a foundational overview of data model design principles for generic software development. It is recommended to revisit this content multiple times to comprehend its essence, as a well-structured data model can significantly enhance your development efficiency!



### Design Steps

<figure><img src="../../.gitbook/assets/md 1.png" alt="Designing steps of data modeling"><figcaption></figcaption></figure>

#### Identify Entities

Before initiating the data model design, you should have already articulated a list of business requirements and either high-fidelity or low-fidelity visual representations of the final application.&#x20;

In this tutorial, let's consider an e-commerce template as an example, assuming that the business requirements have been sorted and the page designs are ready.

In numerous real-world scenarios, conceptual data models or preliminary sketches are employed to further clarify product functionality and requirements with stakeholders. This typically occurs in tandem with other design stages.

<figure><img src="../../.gitbook/assets/md 2.jpeg" alt="Identify the entities according to requirements"><figcaption></figcaption></figure>

* High-fidelity illustration
* Derive entities that require information analysis based on the business requirements.

Start by listing the primary entities. Then, from the perspective of the user's operational workflow within the application, identify other tangible or abstract entities. This method is paramount for refining your data model.

Remember, you're not expected to identify all entities in this step. The design of a data model is iterative and might undergo modifications based on design requirements.



#### Determine Key Attributes

After identifying the entities, swiftly ascertain key attributes for them. For projects with straightforward entities, this step might sometimes be overlooked and merged with the refinement of attributes.&#x20;

Importantly, consider how naming these entities in the data model can make them more distinguishable.

Here are some immediate attributes that can be associated with the entities identified in step 1:

* User: Username
* Product: Product Name, Price
* Shopping Cart: Product, Quantity
* Purchase Product: Product, Quantity
* Order: User, Purchased Products, Total Price
* Address: User, Address Details
* Media Library: Product, Images
* Category: Category Name, Level
* Banner: Category, Cover Image

At this stage, the listed attributes don't need to be precise or exhaustive. The aim is to gain clarity about potential relationships between these entities and how to design them more aptly.

#### Creating a Sketch

To represent the relationships and data transfer methods between entities, we can employ UML (Unified Modeling Language) diagrams. Additionally, the key attributes listed in the previous step can be incorporated into these entities. However, if you're more traditional, you can even use paper to draft the final logical data model.

<figure><img src="../../.gitbook/assets/md 3.png" alt="The composition of a UML diagram"><figcaption></figcaption></figure>

#### Utilizing UML

Utilizing UML to draw data models is not obligatory. Yet, given the robust collaborative capabilities of "Lark" and its built-in UML diagram creation/editing tools, we often use Lark's UML tools for our data model schematics.Drawing with UML from the outset is advantageous because:

* The end result will be a logical data model that can be implemented on Momen.
* The designed data model can be readily shared with all project stakeholders.\


#### Drawing Steps in Lark

1. Create a new folder or insert the UML diagram in an existing project.

<figure><img src="../../.gitbook/assets/md 4.png" alt="Create folder in Lark"><figcaption></figcaption></figure>

2. Choose the table in the "Class diagram" on the left. Drag it to the canvas to add the data model. It'll function as a data table.

<figure><img src="../../.gitbook/assets/md 5.png" alt="Choose the data table in Lark"><figcaption></figcaption></figure>

3. The header "Class" corresponds to the table name. "Filed" corresponds to field name. "Type" corresponds to field type.

<figure><img src="../../.gitbook/assets/md 6.png" alt="Design the data table in UML"><figcaption></figcaption></figure>

Take "account" as an example. We could change the header to "account".&#x20;

Normally, we name the first field as "ID". The field type is "bigserial" (self-growing large integer). Change the "field" to the key attribute "username". The type can be left blank for now. Then continue to add the remaining data table.

<figure><img src="../../.gitbook/assets/md 7.png" alt="Name the data tables in UML"><figcaption></figcaption></figure>

Next, we establish relationships between entities. Based on the key attributes we've determined, we can identify that some data tables reference information from other data tables. At this point, we need to consider two questions:

1. What type of relationship exists between them? Is it a 1:1, 1:N, or M:N relationship?
2. Which entity is the referenced side, and which one is the referencing side?

Let's take a look at the relationship between the 'Address' and 'Account'. The 'Address' references 'Account,' and since one user can have multiple addresses, it's a 1:N relationship where 'Account' is the referencing side.

<figure><img src="../../.gitbook/assets/md 8.png" alt="Establish relationships between entities"><figcaption></figcaption></figure>

"Click on the 'id' field of the referenced entity. Then, click and drag the blue arrow icon that appears next to the field, and drop it onto the relationship field ('account') of the referencing entity. You can adjust their layout by selecting the data tables and dragging them to your preferred position.&#x20;

To modify the path of the relationship line, click on the relationship line itself and drag the blue waypoints. You can also double-click on a non-waypoint location on the relationship line to add a description of the relationship type. Here, we change it to '1:N.' You can also adjust its background color in the right-side editing window to prevent it from being obscured by the relationship line.

<figure><img src="../../.gitbook/assets/md 9.png" alt="Modify relationships between entities"><figcaption></figcaption></figure>

Above are the basic operations for drawing data models in UML diagrams.&#x20;

Next, we'll complete the relationships between other entities. In this step, we do not have to worry about whether there are relationships we didn't take into account. After refining the attributes of the attributes, we will find out the relationship between them more clearly. More importantly, we will design the type of fields in accordance with the functional requirements.

<figure><img src="../../.gitbook/assets/md 10.png" alt="Complete the relationships between entities"><figcaption></figcaption></figure>

Please think about the relationship between "order" and "purchase\_product" above. Which one should be the referenced entity? Is the above diagram right?



### Finding Data Attributes

Add the necessary attributes to each object and refine the fields in the data tables. We can also approach this step from the perspective of user workflow in conjunction with Determine Key Attributes in Design Steps to identify any additional data required for business needs outside the existing entities. Thinking about this question may reveal entities that were overlooked in Step 1.

The decision-making process for this step can be guided by the flowchart:

<figure><img src="../../.gitbook/assets/md 11.png" alt="Flowchart for decision making"><figcaption></figcaption></figure>

Returning to the examples in the e-commerce case:

* Users need to be informed about the status of their orders, so an 'Order Status' field should be added.
* While users only see products that are online, administrators need to keep a record of product statuses and provide timely feedback to users after modifying product statuses. Therefore, an 'Item Status' field should be added.
* We can include data on stores or merchants, but in this case, there is no need for multi-store/merchant management, and administrators do not need users to see this information. Although administrators will keep records of this information, it is unnecessary for the project's data model. Therefore, we do not add any data fields or data tables for merchants or stores.

#### Assigning Attributes

In the previous step, we assigned data to objects and added field types to clarify the business context of the data. This means we can verify whether the fields added to the data table meet business requirements and fulfill app functionalities by backtracking through them. Furthermore, are relational fields in the data table correctly added to the referenced object's data table? The addition of new attributes often enhances our understanding of the proper relationship between data tables.

**Naming Convention for Relational Fields:**&#x20;

Typically, relational fields added to the referencing object are denoted by the name of the referenced object's data table. For 1:N relationships, a plural noun form is often adopted. The field name serves as an indicator that it is a relational field and signifies that this field can repeatedly represent certain data. However, there are instances where custom relational field names are used for a more accurate representation, like a "Category" having a self-referential "Parent Category" field. The type for relational fields should be filled in with the name of the referenced data table. For instance, in the “Media Library”, a more appropriate field name for referencing products would be "products".

Based on the aforementioned steps, refine the creation of your UML diagrams.

#### Verification and Refinement

Finalize and verify the accuracy of the data model. Validation involves not just the creators of the data model but also requires alignment with business stakeholders to ensure the page design and functionalities can be implemented. Check if there are aspects that can be optimized or adjusted. Remember that a data model is a continuously evolving entity. The creation process can deepen our understanding of business logic. Through these steps, we'll obtain an ideal logical data model, ready for the implementation of the physical data model in Momen.

It's worth noting that the design process isn't strictly linear. Often, we cycle through steps, refining continuously to get the final data model. All these iterations are logical and necessary before diving into specific database tools, i.e., before creating the physical data model. Once the data model is finalized and data binding is done in Momen, making alterations to the data model could introduce unnecessary complications.



### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.

