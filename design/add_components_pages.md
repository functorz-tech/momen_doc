# Adding and Managing Components and Pages
![](../assets/images/left_side_bar_overview.png)
The left sidebar is your main panel for adding and managing components and pages. Below is a detailed introduction to the contents of the left sidebar.

## Adding Components

Components are the basic elements that make up a page. Click the "Add Component" button to expand the component list in the left sidebar. You can also quickly summon it using the shortcut key <font color="#2EA120">**(⌥ C丨Alt C)**</font>.

![](../assets/images/left_side_bar_add_comp.png)

Currently, there are three types of component resources in our Editor:

1. System Components

2. Custom Components

3. Code Components

![](../assets/images/left_side_bar_comp_type.png)

You can directly drag the component you want to add into the target Container, or double-click the component after selecting the target Container to add it.
<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="https://docs.functorz.com/static/image/double_click_add_comp.gif" alt="Image 1" style="flex: 1; height: 400px; object-fit: cover; width: 50%;">
    <img src="https://docs.functorz.com/static/image/drag_add_comp.gif" style="flex: 1; height: 400px; object-fit: cover; width: 50%;">
</div>

If you find there are too many components, you can click the search button in the upper right corner to search the list of the currently selected component type.

<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/left_side_bar_comp_search.png" alt="Image 1" style="flex: 1; height: 400px; object-fit: cover; width: 50%;">
    <img src="../assets/images/left_side_bar_comp_search_results.png" style="flex: 1; height: 400px; object-fit: cover; width: 50%;">
</div>

You can also quickly add commonly used components to a page or Container-type components using shortcuts:

**Text** — <font color="#2EA120">**T**</font>

**Button** — <font color="#2EA120">**B**</font>

**Image** — <font color="#2EA120">**I**</font>

**View** — <font color="#2EA120">**F**</font>

## Adding Pages

Click the icon in the image below to add a new page to the Project.

![](../assets/images/left_side_bar_add_page.png)

If you want to add a group to your pages, click the icon in the image below.
<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/left_side_bar_add_folder.png" alt="Image 1" style="flex: 1; height: 300; object-fit: cover; width: 50%;">
    <img src="../assets/images/left_side_bar_folder_rename.png" style="flex: 1; height: 300; object-fit: cover; width: 50%;">
</div>

Once the group is successfully added, you can directly add pages to the group.

![](../assets/images/left_side_bar_folder_add_comp.png)

## Managing Pages and Components

### **Page Operations**

You can right-click on a page to open a menu to manage your selected page. The menu includes the following operations:

1. **Copy**: Copy the selected page (including components on the page).

2. **Rename**: Change the page name (you can also double-click the page name to modify it).

3. **Set as Home Page**: The "Home Page" is the default page that opens when a user accesses the application or website.

4. **Add to Group**: Add the selected page to an existing group.

5. **Delete**: Delete the page and all its contents.

![](../assets/images/left_side_bar_page_right_click.png)

If you want to quickly preview all pages in the Project, you can open the page tiled mode (**⌘ P** 丨**Ctrl P**).

![](../assets/images/left_side_bar_tiled_mode.png)

### Page Grouping

Groups do not have a selected state, but you can perform right-click operations. The menu includes the following operations:

1. **Rename**: Change the group name (you can also double-click the group name to modify it).

2. **Ungroup**: The group disappears, but the pages within the group remain and are not part of any group.

3. **Delete**: Delete the group and the pages within the group.

![](../assets/images/left_side_bar_folder_right_click.png)

### Component Management

The right-click menu for components includes the following operations:

1. **Copy**: Copy the component to the clipboard (<font color="#2EA120">**⌘ C丨Ctrl C**</font>).

2. **Cut**: Cut the component to the clipboard (<font color="#2EA120">**⌘ X丨Ctrl X**</font>).

3. **Paste**: Paste the component from the clipboard to the target component (<font color="#2EA120">**⌘ V丨Ctrl V**</font>).

4. **Duplicate**: Copy the component to the same level (<font color="#2EA120">**⌘ D丨Ctrl D**</font>).

5. **Select**: Use the selected component as a basis to select other content on the same page. For more details, see [Select and Display](../design/select_and_display.md).

6. **Move**: Move the component's hierarchy.

7. **Rename**: Change the component name (you can also double-click the component name to modify it; shortcut <font color="#2EA120">**⌘ R丨Ctrl R**</font>).

8. **Save as "Custom Component"**: Save the selected component to the "Custom Component" list (<font color="#2EA120">**⇧ ⌘ K**丨**Shift Ctrl K**</font>).

9. **Create View**: Create a View to wrap the selected content (<font color="#2EA120">**⌘ G**丨**Ctrl G**</font>).

10. **Delete**: Delete the selected component.

![](../assets/images/left_side_bar_comp_right_click.png)

## Search Content

When there are too many pages and components, you can quickly find and locate the page component you want by searching for the page/component name and ID.

> If you are on the web, the same component will be hit under multiple breakpoints.
<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/left_side_bar_search.png" alt="Image 1" style="flex: 1; height: 400px; object-fit: cover; width: 50%;">
    <img src="../assets/images/left_side_bar_search_results.png" style="flex: 1; height: 400px; object-fit: cover; width: 50%;">
</div>