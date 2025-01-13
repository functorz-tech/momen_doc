# Formula Data

### **Introduction**

After configuring formulaic data, remember to click on the blank space of the formulaic data window to save the content.

### **Data Definition**

In Momen, formulaic data can perform various operations on data:

Mathematical operations: Perform arithmetic operations on numbers, supporting common addition, subtraction, multiplication, division, and modulo.

Data counting: Count the length of certain data (e.g., the length of a string) or the number of elements in an array.

Data format conversion: Convert the case of data, round numbers, etc.

Data or array retrieval: Extract and concatenate portions of text (strings), retrieve specific data from an array.

### **Mathematical Operations**

Momen supports basic mathematical operations on integers and decimals. Before performing operations, ensure that the operands are either integers or decimals.

Arithmetic Operators: +, -, \* (multiplication), / (division), % (modulo, as shown in the diagram below).

![](<../../.gitbook/assets/0 (52).png>)

As shown in the following figure, in the content of the component that needs to display the results of the calculation or in other scenarios that require mathematical operations. You can click on the \[+] next to the data box to find the formula data to perform the calculation, and the results of the calculations can be displayed directly or for further use.

![](<../../.gitbook/assets/1 (89).png>)

Tips:

Text has a feature called "index," where indexing starts from 0 and goes from left to right. We can use the "SUBSTRING" method to specify and extract a part of the text from a start position (substring start) to an end position (substring end), where the start position cannot be greater than the end position.

| Text String | M | O | M | E | N |
| ----------- | - | - | - | - | - |
| Index       | 0 | 1 | 2 | 3 | 4 |

Substring "MO" Index Range: 0 - 2

Substring "MEN" Index Range: 2 - 5

![Click to view the full image](<../../.gitbook/assets/2 (72).png>)

### **Numerical Processing Methods**

Zion supports basic mathematical operations for integers and decimals. Before performing any operations, ensure that the operands are either integer or decimal types.

![Click to view the full image](<../../.gitbook/assets/3 (68).png>)

### **Complex Mathematical Operations**

For example, calculating: \\(\frac\{{967756341 \\% 86400000\}}\{{3600000\}} = 4\\) (result kept as an integer).

In normal mathematical operation rules, you first calculate within the parentheses and then perform division, keeping the result as an integer. However, in the configuration within Momen, as shown in the video, you first define the calculation to keep the result as an integer. Later, the data that needs to be kept as an integer is calculated through division. So, you define a division operation using formulaic data. In this division, the dividend is the result obtained through a modulo operation, so you define a modulo operation to perform the calculation. This nested approach allows for complex arithmetic operations.

![](<../../.gitbook/assets/4 (10).gif>)

### **Array Handling Methods**

![Click to view the full image](<../../.gitbook/assets/5 (51).png>)

### **Time Handling Methods**

![Click to view the full image](<../../.gitbook/assets/6 (46).png>)

### **JSON Handling Method**

![](<../../.gitbook/assets/7 (36).png>)



### **About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
