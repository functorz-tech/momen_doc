# Configure Components—Design, Data, Behavior
![](../assets/images/right_side_bar_overview.png)

Once a component or page is selected, detailed configuration can be done in the right sidebar. You can configure different aspects of the same component/page by switching between the "Design," "Data," and "Behavior" tabs.

This document primarily introduces the "Design" section. Configuration for Data and Behavior is discussed at the end of this document.

## Title and ID

**Title**: The title in the right sidebar is by default named after the component/page. You can hover over the title to rename it.

**Copy ID**: Each page and component has a unique ID. When you need to provide component information for others to locate it (usually for debugging), you can copy the ID from the right sidebar.

![](../assets/images/right_side_bar_name_id.png)

## Design

### Alignment and Distribution

> Components with a "relative" layout mode still follow the layout rules of their parent and are not affected during alignment and distribution.

Alignment configuration helps you arrange the relationships between components on a page. Different alignment effects occur when you select a single or multiple components.

**Select Single**: Align the component with its parent. The parent can be any container-type component or page.

**Select Multiple**: Align components relative to each other.

![](../assets/images/right_side_bar_alignment.png)

1. Align Left

2. Align Center Horizontally

3. Align Right

4. Align Top

5. Align Center Vertically

6. Align Bottom

7. Distribute Horizontally (requires selecting multiple objects)

   1. The components on the left and right outer sides will maintain their positions, while the middle components are evenly distributed horizontally.

8. Distribute Vertically (requires selecting multiple objects)

   1. The components at the top and bottom will maintain their positions, while the middle components are evenly distributed vertically.

### Custom Configuration

The first section under "Design" displays configurations unique to the selected component, named after the selected component. Here, we use a List as an example.

![](../assets/images/right_side_bar_section_custom.png)

Most configuration items in the image apply only to the List component, such as headers, carousels, etc. These configurations do not have general formatting properties and are thus considered "Custom Configuration."

### Position

This section mainly relates to the position of the component on the page. For more details, see [Position and Layout](https://functorz.feishu.cn/wiki/Q5H2w39CkiAyZyk8AHhc0xILnHB).

![](../assets/images/right_side_bar_section_position.png)

### Size

**Width & Height**

When setting the width and height of a component, you can choose different calculation methods to transform the component into your desired appearance.

![](../assets/images/right_side_bar_section_size.png)

1. **PX**: The component's width/height will always display according to the size you set.

2. **%**: The component's width/height as a percentage relative to its parent (the parent can be the component's upper-level container or the page).

3. **Fraction (fr)**: A unit in CSS Grid layout used to allocate **remaining space** proportionally.

   > This calculation method is affected by the layout direction of the component's parent. If the parent's layout direction is vertical, then "fraction" only applies to height, and vice versa.

   ![](../assets/images/right_side_bar_width_fr.png)
4. **Fit**: The width or height of a container-type component automatically adjusts based on the size of its internal content.

When the calculation method is "%" or "fraction," you can set the maximum and minimum width/height for the component. Here we take width setting as an example:

<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/right_side_bar_size_constraints.png" alt="Image 1" style="flex: 1; height: 300px; object-fit: cover; width: 33.3%;">
    <img src="../assets/images/right_side_bar_size_constraints_added.png" style="flex: 1; height: 300px; object-fit: cover; width: 33.3%;">
    <img src="../assets/images/right_side_bar_size_constraints_remove.png" style="flex: 1; height: 300px; object-fit: cover; width: 33.3%;">
</div>

**Margin & Padding**

Margin is the space between the component and its **external other components**, used to adjust the distance between components.
<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/right_side_bar_margin.png" alt="Image 1" style="flex: 1; height: 400px; object-fit: cover; width: 40%;">
    <img src="../assets/images/right_side_bar_margin_intro.png" style="flex: 1; height: 400px; object-fit: cover; width: 60%;">
</div>
Padding is the space between the component's content and its **own edge**, used to adjust the distance between the content and the component's edge.

<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/right_side_bar_padding.png" alt="Image 1" style="flex: 1; height: 400px; object-fit: cover; width: 40%;">
    <img src="../assets/images/right_side_bar_padding_intro.png" style="flex: 1; height: 400px; object-fit: cover; width: 60%;">
</div>

By default, you can configure the margins for left-right and top-bottom simultaneously. If you want to configure the margin for a specific direction individually, you can click the style icon in the first image below.

<div style="display: flex; justify-content: space-between; align-items: stretch; gap: 10px;">
    <img src="../assets/images/right_side_bar_padding_all_icon.png" alt="Image 1" style="flex: 1; height: 250px; object-fit: cover; width: 50%;">
    <img src="../assets/images/right_side_bar_padding_all.png" style="flex: 1; height: 250px; object-fit: cover; width: 50%;">
</div>

### Layout

> This section only applies to container-type components and pages.

This section's configuration relates to the arrangement rules of components inside the selected page/container-type component. For more details, see [Layout and Position](../design/layout_and_position.md).

![](../assets/images/right_side_bar_layout.png)

### Style

This section's configuration mainly relates to the style and effects of the component.

![](../assets/images/right_side_bar_style.png)

1. **Opacity**: Whether the component's visual representation on the interface can be fully displayed, partially transparent, or completely transparent.

2. **Border Radius**: The curvature of the component's corners.

3. **Cursor Style** (**Web Only**): The change in pointer style when hovering over the component.

4. **Background Color**: The color of the component's background.

5. **Background Image**: The image fill for the component's background, with image sources being either local or remote data.

6. **Border**: Configuration of the component's border color and thickness.

7. **Shadow**: Add shadow effects to the component.

   1. X (Horizontal Offset): The position of the shadow in the horizontal direction.

   2. Y (Vertical Offset): The position of the shadow in the vertical direction.

   3. Blur: Control the degree of shadow blur.

   4. Spread: Control the size of the shadow (expand or contract).

8. **Background Blur**: Add a blur effect to the component's background.

### Animation

Add different trigger animations to the component.

![](../assets/images/right_side_bar_animation.png)

There are currently four trigger methods for animations.

1. **On Hover**: When the pointer hovers over the component.

2. **On Click**: When the pointer clicks the component.

3. **On Scroll to Component**: When the page scrolls to the component, triggering the corresponding animation.

4. **On Scroll**: During the user's scrolling of the page, the component dynamically triggers animations based on the scroll position.

### Text

When the selected component contains text content, you can configure the text within it in the right sidebar.

![](../assets/images/right_side_bar_text.png)

## Data
Configure the data source for this component and page, currently only supported for pages, Lists, Select Views, tables, and other components.

For detailed information, please click [Data](../data/readme.md).

## Behavior
Components: You can configure some behavior events triggered when clicked, content refreshed, or List scrolled.

Pages: You can configure some behavior events triggered when the page loads, unloads, and on a schedule.

For detailed information, please click [Behavior Configuration](../actions/readme.md).