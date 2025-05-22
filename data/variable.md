---
description: >-
  Learn how to use variables in Momen, including the definition, assignment, and
  referencing methods of global variables and page variables. Through
  illustrated examples, clearly explain the scope and u
---

# Variable

In many scenarios, data is not used directly but is stored in a variable for reuse. Variables are divided into "global variables" and "page variables" based on their scope. The use of variables involves three steps: definition, assignment, and reference.

## Global Variables

Global variables can be referenced by all pages and are typically used to store global configuration information.

1. **Definition**

Open "Settings" → "Global" → "Add Global Variable". Choose a variable name, select a type, and optionally set a default value to define a global variable.

![Define global variable in settings](../.gitbook/assets/data/data_variable_global_define.png)

2. **Assignment**

Assign values using "Set Global Data", which can be done in global settings or on a page.

![Set global data in global settings](../.gitbook/assets/data/data_variable_global_assign0.png)  
![Set global data on a page](../.gitbook/assets/data/data_variable_global_assign2.png)

3. **Reference**

Global variables can be referenced by all pages.

![Reference global variable in page](../.gitbook/assets/data/data_variable_global_reffer.png)

## Page Variables

Page variables can be referenced by all components and actions within a page and are used to store data related to that page.

1. **Definition**

Enter the page, open "Data", and click "Add Page Variable". Choose a variable name, select a type, and optionally set a default value.

![Define page variable in page data settings](../.gitbook/assets/data/data_variable_page_define.png)

2. **Assignment**

Assign values using "Set Page Data".

![Set page data action](../.gitbook/assets/data/data_variable_page_assign.png)

3. **Reference**

Page variables can be referenced by all components and actions within the page.

![Reference page variable in component or action](../.gitbook/assets/data/data_variable_page_reffer.png)
