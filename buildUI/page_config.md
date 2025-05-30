---
description: >-
  Add and config pages in Momen
---

# Add and Configure Pages

A project consists of multiple pages, each configurable for Data, Design, and Action.

- In Momen, a page is the smallest unit for retrieving data from the server. Adding a page data source allows you to fetch data from the database for use by components on the page.
- Each application can designate a page as the home page.
- Each page can configure actions for when the page loads, unloads, or for scheduled tasks.

## Adding Pages

To add a new page, click the "+" icon in the left sidebar.

![Add page button in sidebar](../.gitbook/assets/design/left_side_bar_add_page.png)

### Grouping

To organize pages into groups, click the group icon:

<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../.gitbook/assets/design/left_side_bar_add_folder.png" style="flex: 1; height: 300; object-fit: cover; width: 50%;">
    <img src="../.gitbook/assets/design/left_side_bar_folder_rename.png" style="flex: 1; height: 300; object-fit: cover; width: 50%;">
</div>

### Page Operations

Right-click a page to open the management menu:

1. **Copy:** Duplicate the selected page (including its components).
2. **Rename:** Change the page name (double-clicking the name also allows renaming).
3. **Set as Home Page:** Make this page the default opening page for the app or website.
4. **Add to Group:** Move the page into an existing group.
5. **Delete:** Remove the page and its contents.

![Page right-click menu](../.gitbook/assets/design/left_side_bar_page_right_click.png)

To preview all pages, open the tiled mode (**⌘ P** | **Ctrl P**):

![Tiled mode for pages](../.gitbook/assets/design/left_side_bar_tiled_mode.png)

## Configure Pages - Design

After selecting a page, configure its properties in the "Design" section of the right sidebar:

- **Web page path:** The path appended to the browser address bar.
- **Web page title:** The title shown in the browser tab.
- **SEO settings:** Expand to set the page's TDK (title, description, keywords) and the thumbnail for sharing.
- Other design settings are the same as for components.

![Page title and path configuration](../.gitbook/assets/design/config_page_titleandpath.png)

## Configure Page - Data

### Data Source

A page is the smallest unit for obtaining server data. Add a page data source to fetch data from the database for use by components.  
For example, to display a user's nickname from the account table in a text component, create a page data source for the account table, then bind the text component to "Page data source" → "Name".

### Page Variable

Page variables store temporary data for the page. Other components can update the variable using the "Set Page Variable" action.

### Parameters

Parameters transfer data between pages (see: [Parameters](../data/parameter.md)). There are two types:

1. **Query:** After adding a query parameter, other pages can pass a value when opening this page. For example, a blog details page can use a query parameter to receive which blog to display or to record user channels.
2. **Path:** Similar to query parameters, but changes the page address. Used for pages requiring better SEO.

## Configure Page - Action

### When the Page is Loaded and Unloaded

The period from when the page starts loading to when it is closed is the page's active period. You can configure actions for when the page loads (on open) and when it unloads (on close).

![Page load/unload action configuration](../.gitbook/assets/design/config_page_action.png)

### Scheduled Job

**Definition:**  
Trigger an action at a specific interval, continuing until manually paused or the page is closed.

**Trigger Interval:**  
Set in milliseconds; the action is triggered each time the interval elapses.

**Trigger Immediately:**  
If enabled, the scheduled task starts automatically when entering the page.

![Scheduled job configuration](../.gitbook/assets/design/config_page_scheduledjob.png)

**Manually Start/Pause Scheduled Tasks:**  
Add the "Control Scheduled Task" action to a component to start or pause a scheduled task.

![Scheduled task action list](../.gitbook/assets/design/config_page_actionlist.png)
![Scheduled task action configuration](../.gitbook/assets/design/config_page_action_scheduled.png)

## Loading Order of Data and Actions on the Page

When a new page opens, its contents load in a specific order. Understanding this helps you correctly call actions and use data. The loading order is as follows (from top to bottom):

- If the page has link data, it first receives the data passed from other pages.
- If the page has page variables, empty variables are created, waiting for assignment.
- If the page has a "page loaded" action, it executes next.
- If the page has a data source, it then loads the data.
- Finally, each component displays its local data or default value.