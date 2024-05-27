---
description: Learn about Progress Baar component in Momen.
---

# Progress Bar

### **Introduction**

Progress bar, a component that displays the completion of processing tasks in the form of a picture, the size of the remaining amount of unfinished tasks.

### **Application Scenarios**

Feedback and Confirmation: The progress bar provides real-time feedback, showing that a process is in progress, crucial for lengthy operations like file uploads or downloads.

User Experience: It helps users gauge the completion level of a task, reducing uncertainty and anxiety by showing ongoing progress.

Time Estimation: Offers users a rough time estimate, particularly useful when the progress bar advances linearly, helping predict the time required to finish a task.

Increased Engagement: Users feel a sense of accomplishment as they see the progress bar fill, boosting their engagement and satisfaction.

Improving Waiting Experience: Progress bars improve user perception of time compared to static loading icons, enhancing the user experience during wait times.

Indicating Task Complexity: The progress rate may indicate the complexity of the task or volume of data being processed.

### **Progress Bar Design**

Choose from various styles, colors, and display options (percentage or numeric values):

![](<../../../.gitbook/assets/0 (14).png>)

1. Background Colors
2. Progress Bar Colors
3. Progress Format: Options include none, percentage, or numeric display of progress



![](<../../../.gitbook/assets/1 (14).png>)

### **Progress Bar Content**

![](<../../../.gitbook/assets/2 (11).png>)

#### **Set Current Progress**

Define the current progress level, which must be a numerical value and cannot be empty.

#### **Set Total Progress**

Establishes the full scope of the task, displaying the progress as a proportion of the total set value. Numerical input required and cannot be empty. You can manually set this or bind it to remote or page data for dynamic updates.



### **Interaction**

Action when progress changes: the action triggered when the current progress of the progress bar changes.

Example: When the user fills in the basic information (five items in total), the progress bar advances 20% for each item filled in, and when the progress bar changes, it displays the prompt "almost there".

![](<../../../.gitbook/assets/3 (1).gif>)

Prefix: a text input component, a progress bar component, a page data (type is integer).

Click the "Text Input" component, in the "on blur" in the action, configure the action "Set Page Data".

| <img src="../../../.gitbook/assets/4 (7).png" alt="" data-size="original"> | <img src="../../../.gitbook/assets/5 (3).png" alt="" data-size="original"> |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |

Click on the "Progress Bar" component and bind the page data to the current progress.

![](<../../../.gitbook/assets/6 (3).png>)

Click the "Progress Bar" component and configure the "show toast" action in the "On Progress Changes action" section of the action.

![](<../../../.gitbook/assets/7 (1).png>)

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

**About Momen​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
