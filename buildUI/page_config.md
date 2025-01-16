# Add and configure pages
Page is a page of an application, and each page can be configured for design, data and action.
* In Zion, a page is the smallest unit to get data from the server side. Adding a page data source can get data from the database for use by various components on the page.
* Each application can select a page setting as the home page, which is the home page displayed after the user opens it.
* Each page can configure the action when the page is loaded, the action when the page is unloaded, and the timed task



## Adding Pages

To add a new page to your project, click the icon shown in the image below.

![](../.gitbook/assets/design/left_side_bar_add_page.png)
### Grouping

To create a group for organizing pages, click the group icon as shown below:

<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../.gitbook/assets/design/left_side_bar_add_folder.png" alt="Image 1" style="flex: 1; height: 300; object-fit: cover; width: 50%;">
    <img src="../.gitbook/assets/design/left_side_bar_folder_rename.png" style="flex: 1; height: 300; object-fit: cover; width: 50%;">
</div>   
  
### Page operations
You can right-click the page to open the menu to manage the selected page. The menu contains the following operations:
1. **Copy**: Copy the selected page. (Including the components in the page)  

2. **Rename**: Rename the page. (You can also double-click the page name to rename it)

3. **Set as homepage**: The "homepage" is the page that opens by default when the user opens the app or website.

4. **Add to group**: Add the selected page to an existing group.

5. **Delete**: Delete the page and all its contents.     


If you want to quickly preview all the pages in a project, you can open the page tiling mode <font color="#2EA120">**⌘ P 丨Ctrl P**</font>
![](../.gitbook/assets/design/left_side_bar_tiled_mode.png)

![](../assets/images/left_side_bar_tiled_mode.png)
After creating a group, you can directly add pages to it.

![](../.gitbook/assets/design/left_side_bar_folder_add_comp.png)

## Managing Pages and Components

### Page Operations

Right-click a page to open a management menu with the following options:

1. **Copy**: Copy the selected page (including its components).

2. **Rename**: Change the page name (double-clicking the name also allows renaming).

3. **Set as Home Page**: Designate this page as the default opening page for the application or website.

4. **Add to Group**: Move the selected page into an existing group.

5. **Delete**: Remove the page and its contents.

![](../.gitbook/assets/design/left_side_bar_page_right_click.png)

To preview all pages in the project, open the page tiled mode using (**⌘ P** 丨**Ctrl P**).

![](../.gitbook/assets/design/left_side_bar_tiled_mode.png)

## Configuration Pages - Design

After clicking to select the web page, you can configure whether the page is the initial screen in the "Design" of the attribute bar on the right, configure the web page path, web page title, perform SEO configuration, size, layout, and style configuration of the web page
- Web page path: As shown in the figure below, after entering the web page, the title content displayed in the browser tab bar
- Web page title: As shown in the figure below, after entering the web page, the path spliced after the web page link in the browser address bar
- SEO settings: Click to expand to set the TDK of the web page, namely the title, description, and keywords, and you can also configure the thumbnail image displayed when sharing the web page link
- The rest of the design is the same as the component configuration
  
    <img src="../.gitbook/assets/design/config_page_titleandpath.png" width="100%">

## Configuration Page - Data
1. Page data source (original name - remote data): In Zion, a page is the smallest unit that obtains data from the server side. Adding a page data source can obtain data from the database and is used for referencing by various components within the page. For example, if a text component wants to display the nickname of a certain user in the account table, then a new page data source needs to be created to obtain a certain piece of data in the account table, and then select "Bind" "Page data source" - "Name" on the text component.
2. Page variable (original name - page data): After adding a page variable, other components can change the value of the variable by setting the page variable action. Page variables are generally used for temporarily storing some data on the page.
3. Page input parameters are a way of transferring data between pages (for details, see: [Parameters](../data/parameter.md)). They include two types of input parameters:
    * Query (original name - link data): After adding a query parameter, when other pages open the page, a specific value can be brought in. For example, a blog details page can configure an input parameter as the blog name, which is used to receive which specific blog to open. It can also be used to record user channels.
    * Path (original name - path data): The usage is similar to query parameters, except that it will change the page address, which is usually used on pages that require better SEO performance.

## Configuration Page - Action
### Action when the page is loaded and unloaded
The period from when the page starts loading content to when the page is closed and unloaded is called the page's active period. During the page's active period, you can configure the action you expect when the page is opened (action when the page loads) and when it is closed (action when the page unloads).

<img src="../.gitbook/assets/design/config_page_action.png" width="100%">

>Common "page loaded" configurations
>- When entering a mini program page, a splash screen advertisement with a countdown pops up. You can configure the countdown action when the lifecycle "page is loaded" to control the splash screen advertisement
>- When entering a mini program page, you need to set the page data to be used by the current page. You can configure the action of [setting page data] when the lifecycle "page is loaded" to achieve this

### Scheduled tasks
**Definition:** Trigger a certain action based on a certain time interval, and it will not stop until it is manually paused or the page is closed
**Trigger interval:** In milliseconds, each time the "trigger interval" is passed, the configured action will be triggered once
**Trigger immediately:** After opening this configuration, the timing task will be automatically started when entering the page

<img src="../.gitbook/assets/design/config_page_scheduledjob.png" width="100%">

**Manually start/pause page scheduled tasks:** As shown in the figure below ⬇️, you can add the "control scheduled task" action to a component to start or pause a scheduled task.

| img | img |
| ------------- | ------------- |
| <img src="../.gitbook/assets/design/config_page_actionlist.png" width="400"> | <img src="../.gitbook/assets/design/config_page_action_scheduled.png" width="400"> |

## Loading order of data and action on the page
When a new page is opened, the various contents configured on the page will be loaded in a certain order. Understanding the loading order of these data can help us to correctly call actions and use data. The loading order is as follows **Load in order from top to bottom**.
- If the page is configured with link data, it will first receive the link data passed from other pages
- If the page is configured with page data, an empty page data will be created in the page, waiting for assignment
- If the page is configured with the action of "page loaded", then the action in it will begin to be executed
- If the page data source configured by the page, then the content of the page data source will begin to be read
- Finally, the local data or default value of each component is displayed