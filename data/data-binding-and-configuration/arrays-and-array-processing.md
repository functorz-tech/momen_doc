# Arrays and Array Processing

### **Introduction**

\*While this tutorial is optional, we highly recommend reading it for an enhanced experience.

No-code development in Momen eliminates the need for manual coding, relying on a graphical interface. While basic usage of components doesn't require an in-depth understanding, mastering the underlying data characteristics enhances flexibility in app development. We encourage learning this aspect for optimal application production. If you encounter challenges, feel free to comment or join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### **Common Arrays**

1. \["a", "b", "c"]
2. \[1, 2, 3]
3. \["PaulT", "MikeR", "BrookeM"]
4. \[{"Name": "PaulT", "Age": "18" }

{"Name": "MikeR", "Age": "20" }

{"Name": "BrookeM", "age": "21" }]

The above four cases are all common "**Arrays**", which can be characterized as "**sequential combinations of data of the same type**".

There is no such thing as \[a, 1, "PaulT"], where **every item in the array must be of the same type**.

### **What Arrays Made of**

Arrays are actually made up of 2 parts, which are

1. index
2. item

Where the index is actually the serial number (usually the serial numbers in the table are calculated from 1, but the index of the array is from 0, the 0th item is the first item of the array), the item is the "**corresponding order of the content**"

Take the array \[1,2,3] as an example.

1. index=0, that is, the first item of the array, the corresponding content is 1
2. index=1, the second item of the array, the corresponding content is 2.
3. index=2, which is the third item of the array, corresponds to 3.

Take the following array as an example

\[{"Name": "PaulT", "Age": "18" },

{"Name": "MikeR", "Age": "20" },

{"name": "BrookeM", "age": "21" }]

1. index = 0, which is the first item of the array, corresponding to {"Name: "PaulT", "Age: "18" }

Case 4 is actually a common table of data, the actual data transfer process, the contents of the following table

| **Index** | **Name** | **Age** |
| --------- | -------- | ------- |
| 0         | PaulT    | 18      |
| 1         | MikeR    | 20      |
| 2         | BrookeM  | 21      |

passing them as \[{name: "PaulT", age: "18" }, {name: "MikeR", age: "20" }, {name: "BrookeM", age: "21" }].

### **Application of Arrays in Momen**

1. List-like components displaying arrays
   1. List-like components in Momen
      1. List
      2. Horizontal List
      3. Data Picker
      4. Selected View
2. Removing a value from an array
   1. Array to item conversion
3. Getting a value from an array type field of an api return result
   1. Array to item conversion



### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
