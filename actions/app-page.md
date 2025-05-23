---
description: >-
  Learn how to create and manage page data, configure global data, refresh data, and implement scroll behaviors in Zion’s no-code platform.
---

# App and Page Management

Momen provides actions for managing page and global data, refreshing content, and controlling page scroll behavior. This guide summarizes each operation and its configuration.

---

## Set Page Variable

Assign values to a predefined page variable.

**How to configure:**
1. **Create a page variable:**  
   Define a variable on the page to store a value (e.g., text, number). Enable "List Mode" to store multiple values as an array.
2. **Assign values:**  
   Use the **Set Page Data** action to assign a value, either static or from another action (such as file upload).

**Scenarios:**
- Assign a file to a page variable after upload.
- Use "Is List" mode to append multiple entries (one at a time) to a page variable.
- Enable "Unique" to allow removal of specific values from the variable.

| ![Create page variable](../.gitbook/assets/2%20(18).png "Create page variable") | ![Assign page variable](../.gitbook/assets/3%20(13).png "Assign page variable") |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |

![Set page variable as list](../.gitbook/assets/4%20(13).png "Set page variable as list")

![Append multiple data entries](../.gitbook/assets/5%20(8).png "Append multiple data entries")

![Remove data from page variable](../.gitbook/assets/6%20(8).png "Remove data from page variable")

---

## Set Global Variable

Assign values to a global variable accessible across all pages.

**How to configure:**
- In the header, go to Settings > App Global Settings, and add a **Global Variable**.
- Use the **Set Global Variable** action on any page or component as needed.

---

## Refresh

Update data to ensure the latest content is displayed.

**How to configure:**
- **Refresh Page:** Add the action to a component to refresh all page data.
- **Refresh List Item:** Refresh a specific list item after modification by binding the list index.
- **Refresh Current User Data:** Update the current user's data to reflect recent changes.

---

## Scroll Page To

Scroll the page to a specific component or position for better navigation.

**How to configure:**
- Add the **Scroll Page To** action to a component (e.g., a button).
- Choose to scroll to a specific component or to the top of the page.

---