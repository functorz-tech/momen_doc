# Understanding the Momen Editor
The Momen Editor consists of a navigation bar and a core functional area. When a page in the navigation bar is selected, there is a left sidebar, a right sidebar, and a toolbar. The left sidebar is used to [add and manage pages and components](../design/components&pages.md), while the right sidebar is for specific [page and component configuration](../design/components_config.md). You can click the corresponding links for detailed information.

## Navigation Bar—Function Entry and Project Management
![](../assets/images/nav_bar_overview.PNG)

You can switch the canvas content in the navigation bar to enter different functional panels, or open some general project configurations. Below is a detailed introduction to the navigation bar content.

### Return to User Center

You can click the "Momen" logo in the upper left corner to return to the User Center.

<img src="../assets/images/nav_bar_logo.png" style="zoom:100%;" />

### Function Entry

When you enter the Editor, the first tab "Pages" is selected by default. You can click other different tabs to enter different functional configuration panels.

<img src="../assets/images/nav_bar_features.png" style="zoom:100%;" />

### Switch Platform

Each Project supports editing for both "Web" and "Mini Program" platforms, sharing all backend function configurations and data. You can click the dropdown icon to the right of the Project name to switch the platform you are currently editing.

<img src="../assets/images/nav_bar_project_name.png" style="zoom:100%;" />

### View Errors

When configuration errors occur during editing, an error prompt will appear in the navigation bar. Clicking it will pop up specific error information at the bottom of the Editor.

<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/nav_bar_error_collector.png" alt="Image 1" style="flex: 1; height: 200px; object-fit: cover; width: 33.3%;">
    <img src="../assets/images/nav_bar_error_collector_details.png" style="flex: 2; height: 200px; object-fit: cover; width: 66.6%;">
</div>
1. Location: View the path of the error location.
2. Error Information: Specific description of the error.
3. Fix: Click to directly jump to the error location.

### Share and Permissions

> The sharing and collaboration features are only available in the [Basic Plan] and above. Users can visit the ["Official Pricing Page"](https://www.functorz.com/pricing) to purchase.

When you want to share your Project with others or view existing collaborators, you can click the "Share and Permissions" icon in the navigation bar.

<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/nav_bar_share.png" alt="Image 1" style="flex: 1; height: 400px; object-fit: cover; width: 50%;">
    <img src="../assets/images/nav_bar_share_details.png" style="flex: 1; height: 400px; object-fit: cover; width: 50%;">
</div>
**Different roles correspond to different permissions:**

Owner: The person who created the Project, with full permissions for the Project.

Manager: Supports editing and managing Project participants, and also has Project cloning permissions.

Editor: Supports editing the content of the Project.

Viewer: Only supports viewing the content of the Project.

### Mirror

If you want to quickly preview the effects of your Project during editing, you can click the [Mirror] icon in the navigation bar.

<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/nav_bar_mirror.png" alt="Image 1" style="flex: 1; height: 400px; object-fit: cover; width: 50%;">
    <img src="../assets/images/nav_bar_mirror_details.png" style="flex: 2; height: 400px; object-fit: cover; width: 50%;">
</div>

### Update Backend

After you modify the data model, API, Actionflow, or ZAI, remember to click the [Update backend] button in the upper right corner of the Editor to make these changes take effect immediately.

For Projects that are already online, if you only adjust the database, API, Actionflow, or ZAI configuration without modifying the page style or local data, there is no need to click [Preview again] to generate a new application. Just click [Update backend] to quickly complete the backend update operation.

<img src="../assets/images/nav_bar_sync_backend.png" style="zoom:150%;" />

### Project Publish and Preview

#### Web

Once the web application is built, you can deploy the application with one click by clicking the [Publish] button in the upper right corner of the Editor.

Before officially publishing, you need to preview to generate the latest version of the web application. When the preview is successful, the system will generate a QR code and a web link. You can experience and debug the application in a real web environment by scanning the code with your phone or clicking the link.

After confirming that everything is correct, click the [Go to Publish] button to officially launch the application, generating a brand new official version QR code and web link.

<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/nav_bar_publish_web_preview.png" alt="Image 1" style="flex: 1; height: 600px; object-fit: cover; width: 50%;">
    <img src="../assets/images/nav_bar_publish_web_preview_successful.png" style="flex: 1; height: 600px; object-fit: cover; width: 50%;">
</div>

#### **WeChat Mini Program**

Once the Mini Program application is built, you can deploy and publish it with one click by clicking the [Publish] button in the upper right corner of the Editor.

Before publishing the Mini Program, you need to complete the registration and authorization of the Mini Program account. Then, use [Preview again] to package and generate the latest version of the Mini Program application, and use your phone to scan the code to experience and debug on a real device.

After confirming that everything is correct, click the [Submit for WeChat Review] button to submit for review. Once the review is passed, click [Confirm Publish] to officially launch the application.

If the application needs updates and iterations, you need to re-execute [Preview again] and [Submit for WeChat Review] to complete the publishing process.

<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/nav_bar_publish_wechat_preview.png" alt="Image 1" style="flex: 1; height: 600px; object-fit: cover; width: 50%;">
    <img src="../assets/images/nav_bar_publish_wechat_preview_successful.png" style="flex: 1; height: 600px; object-fit: cover; width: 50%;">
</div>

Additionally, in the settings, you can:

1. View your App ID.

2. Manage Project members of the WeChat Mini Program (click "WeChat Mini Program Management Console").

3. Mini Program packaging settings.

4. Download the code package, which downloads the Mini Program code locally.

5. Unbind from the bound Mini Program.

<img src="../assets/images/nav_bar_preview_wechat_settings.png" style="zoom:150%;" />

## Toolbar—Operations and Prompts During Editing
![](../assets/images/tools_bar_overview.png)

The toolbar contains some capabilities you may need during canvas editing and resources that can help you. Below is a detailed introduction to the canvas toolbar.

### Canvas Selection and Movement

The canvas is in edit mode by default (shortcut key <font color="#2EA120">**V**</font>), allowing you to select and edit elements on the canvas. When you want to drag the canvas, you can enter move mode (shortcut key <font color="#2EA120">**H**</font>), where you cannot select elements on the canvas but can move the canvas.

If you just want to move the canvas briefly during editing, you can hold down <font color="#2EA120">**Space**</font> and drag the canvas with the left mouse button.

![](../assets/images/tools_bar_mode.png)

### Shortcuts

There are many shortcuts in the Editor, which you can view by clicking in the toolbar.

![](../assets/images/tools_bar_shortcut.png)

### Help

In the help section, you can view tutorials and documentation, and communicate with us and other developers through the community, group chats, etc.

![](../assets/images/tools_bar_help.png)

### Canvas Zoom

When editing on the canvas, you can freely adjust its zoom ratio. We also provide several commonly used shortcuts:

**Zoom In**: <font color="#2EA120">**⌘ +**</font>

**Zoom Out**: <font color="#2EA120">**⌘ -**</font>

**Zoom to 100%**: <font color="#2EA120">**⌘ 0**</font>

![](../assets/images/tools_bar_zoom.png)