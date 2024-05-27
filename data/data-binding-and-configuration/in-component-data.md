# In Component Data

### **Data Definition**

\[In-Component Data] is a specific data type for "List-type" components. When a page uses "List-type" components, such as \[List] or \[Select View], and binds a remote data source to the \[List] or adds local data to the \[Select View], clicking on the component to enter its internal sub-container for binding data to other components will present the option of \[In-Component Data]

For example, as shown in the table below, if multiple rows of data are stored in a data table, and this data table is bound to a \[List] component, each row of data becomes the \[In-Component Data] after reading the data.

![](<../../.gitbook/assets/0 (5).png>)

After clicking on \[In-Component Data] and selecting the corresponding list-type component, options for "index" and "item" will appear:

* Index

As illustrated in "Arrays and Array Processing," the index represents the sequence of data in the list. The index of the first row of data in the list is 0, the second row is 1, and so on.

* Item

Corresponds to each data item in the data table, which, in the example above, is each row of data. It includes each field of a row and their relationships. Choose an appropriate component to bind and display these data.

### **Configuration Guide**

Taking the List component as an example, after dragging the list component into the page and adding \[Remote Data] to it, enter its sub-container to add other components. When binding data to other components, you can choose \[In-Component Data] then select the item under this list, and proceed to bind the corresponding field content within the item.

![](<../../.gitbook/assets/1 (5).png>)

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
