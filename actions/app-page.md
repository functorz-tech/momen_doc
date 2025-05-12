---
description: >-
  Learn how to create and manage page data, configure global data, refresh data, and implement scroll behaviors in Zion’s no-code platform.
---

# App and page management

**Application & page operation includes:**
1. Set page variable
2. Set up global variable
3. Refresh
4. Scroll page to

## 1. Set page data

### Introduction
Allows assigning values to a pre-defined page variable.

### Action configuration guide
1. Create a page variable: Define a page variable on the page to store value (e.g., text, number). If there are multiple values, enable List Mode when creating the page variable to store multiple values as an array.
2. Assign Values: Use the Set Page Data action to assign a value, either a static input or data retrieved from other actions like file uploads.

### Scenarios

#### 1. Assigning Values to Page Variable through Other Actions

Many actions in Momen require the page variable to be assigned a value after the data is obtained, as shown in the following figure. Take "Upload File" as an example. After setting the page variable of the type "File," the action of uploading a file will be triggered by clicking the button, and the uploaded file will be assigned to the page variable.

| <img src="../.gitbook/assets/2 (18).png" alt="Create Page variable" data-size="original"> | <img src="../.gitbook/assets/3 (13).png" alt="Assign page variable" data-size="original"> |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |

#### 2. Setting up a page variable that holds multiple data

The following figure shows how to set a page variable: When setting a page variable for a page, activate "Is List" mode. Utilizing "Is List" for a page variable is akin to initializing an empty array.

<figure><img src="../.gitbook/assets/4 (13).png" alt="Set Page variable"><figcaption></figcaption></figure>

Through the \[Set Page variable] action, you can incorporate multiple data entries into the page variable by adjusting the action to \[Append]. However, each invocation of the action allows adding only one data entry at a time.

<figure><img src="../.gitbook/assets/5 (8).png" alt="Set Page variable and incorporate multiple data entries"><figcaption></figcaption></figure>

#### 3. Removing Data from Page variable

Enabling the "Unique" option allows you to utilize the \[Remove] function within \[Set Page variable]. During a \[Remove] operation, the value to be removed is compared with the values in the page variable. If a match is found, the corresponding value in the page variable is deleted.

<figure><img src="../.gitbook/assets/6 (8).png" alt="Remove data from page variable"><figcaption></figcaption></figure>

## 2. Set global variable

### Brief
Assigns values to a global variable that can be accessed across multiple pages within the app.

### Action configuration guide
In the header, click Setting and under App Global Settings, add a \[Global Variable].

After adding a \[Global Variable], you can set the global variable on any page or component according to the business scenario through the \[Set Global Variable] action. The global variable can be used in all pages and components.

## 3. Refresh

### Brief
Triggers a data refresh by re-fetching the latest data from the database. This ensures that displayed content is up-to-date after actions such as adding, updating, or deleting data.

### Action configuration guide
1. Refresh Page: Add this action to a desired component, and when triggered, it refreshes all data on the page, retrieving the latest information for display or condition checking.
2. Refresh List Item: Refreshes a specific item in a list by re-fetching its latest data.
    - Commonly used after modifying a list item’s data, such as updating a post’s comment count.
    - Configure this action within the list item’s component interaction, binding the list’s index to ensure the correct item is refreshed.
3. Refresh Current User Data: Updates the default account table’s current user data.
    - Since user data isn’t updated in real-time by default, this action ensures that any changes to the user’s profile or account are reflected immediately.

## 4. Scroll page to

### Brief
Scrolls the page to a specific component or position, improving user navigation and interaction.

### Action configuration guide
Add the Scroll Page To action to a component (usually a button). Choose whether to scroll to a specific component or to the top of the page.
- Scroll to Component: Select the target component, and the page will scroll to its position when triggered.
- Scroll to Top: Instantly scrolls the page to the top.