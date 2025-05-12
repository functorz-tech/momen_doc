---
description: Add and config components in Momen
---

# Components

Components are the building blocks of a page. When selected, you can configure them in detail using the “Design,” “Data,” and “Action” tabs in the right sidebar.\
This document focuses on the "Design" tab, while the configurations for "Data" and "Action" are discussed at the end.

## Add Components

Click the "Add Component" button in the left sidebar to open the component list. You can also quickly access this list using the shortcut key **(⌥ C丨Alt C)**.

Currently, the Editor provides three types of component resources:

1. System Components
2. Custom Components
3. Code Components

![](../.gitbook/assets/design/left_side_bar_comp_type.png)

You can add components in three ways:

1. Select the target container and double-click the component to add it.
2. Drag the desired component into the target container.

    ![](../.gitbook/assets/design/double_click_add_comp.gif) ![](..//.gitbook/assets/design/drag_add_comp.gif)
3. Use the following shortcuts to add frequently used components to a page or container-type component:

    **Text** — **T**

    **Button** — **B**

    **Image** — **I**

    **View** — **F**

### Component Management

Right-click a component to access the management menu with these options:

1. **Copy**: Copy the component (**⌘ C丨Ctrl C**).
2. **Cut**: Cut the component (**⌘ X丨Ctrl X**).
3. **Paste**: Place the copied or cut component into the target container (**⌘ V丨Ctrl V**).
4. **Duplicate**: Create a copy of the component at the same level (**⌘ D丨Ctrl D**).
5. **Select**: Use the selected component as a reference to select other content on the same page.
6. **Move**: Change the component's hierarchical position.
7. **Rename**: Modify the component name (shortcut **⌘ R丨Ctrl R**).
8. **Save as "Custom Component"**: Save the selected component to the "Custom Component" list (**⇧ ⌘ K**丨**Shift Ctrl K**).
9. **Create View**: Wrap the selected content into a View (**⌘ G**丨**Ctrl G**).
10. **Delete**: Remove the component.

![](../.gitbook/assets/design/left_side_bar_comp_right_click.png)

## Configure Component - Title and ID

**Title**: The title in the right sidebar defaults to the component/page name. Hover over the title to rename it.

**Copy ID**: Each page and component has a unique ID. Use the "Copy ID" option in the right sidebar to share component information for locating and debugging purposes.

![](../.gitbook/assets/design/right_side_bar_name_id.png)

## Configure Component - Design

![](../.gitbook/assets/design/right_side_bar_overview.png)

### Alignment and Distribution

> Components with a "relative" layout mode adhere to their parent’s layout rules and are not affected during alignment and distribution.

Alignment options help arrange components on a page. Effects vary depending on whether a single component or multiple components are selected.

**Select Single**: Align the component relative to its parent container or page.

**Select Multiple**: Align components relative to each other.

![](../.gitbook/assets/design/right_side_bar_alignment.png)

1. Align Left
2. Align Center Horizontally
3. Align Right
4. Align Top
5. Align Center Vertically
6. Align Bottom
7. Distribute Horizontally (requires multiple selections): Outer components remain fixed while inner components are evenly distributed horizontally.
8. Distribute Vertically (requires multiple selections): Top and bottom components remain fixed while inner components are evenly distributed vertically.

### Custom Configuration

The first section under "Design" provides configurations unique to the selected component, labeled accordingly. For instance, selecting a List component displays settings such as headers or carousels that are specific to Lists.

![](../.gitbook/assets/design/right_side_bar_section_custom.png)

Most configuration items in the image apply only to the List component, such as headers, carousels, etc. These configurations do not have general formatting properties and are thus considered "Custom Configuration."

### Position

This section configures the component's position on the page. For detailed guidance, refer to [Layout and Position](../design/layout_and_position.md).

![](../.gitbook/assets/design/right_side_bar_section_position.png)

### Size

**Width & Height**

Choose from different calculation methods to define the component's size:

![](../.gitbook/assets/design/right_side_bar_section_size.png)

1. **PX**: Fixed size.
2. **%**: Percentage of the parent container’s size.
3. **Fraction (fr)**: Proportional allocation of remaining space in CSS Grid layouts.

    > Depends on the parent's layout direction (e.g., vertical for height, horizontal for width).

    ![](../.gitbook/assets/design/right_side_bar_width_fr.png)
4. **Fit**: Automatically adjusts size based on internal content.

For percentage or fraction-based dimensions, you can specify minimum and maximum constraints:

![](../.gitbook/assets/design/right_side_bar_size_constraints.png) ![](../.gitbook/assets/design/right_side_bar_size_constraints_added.png) ![](../.gitbook/assets/design/right_side_bar_size_constraints_remove.png)

**Margin & Padding**

Margin: Adjusts the space between a component and its surroundings.

![](../.gitbook/assets/design/right_side_bar_margin.png) ![](../.gitbook/assets/design/right_side_bar_margin_intro.png)

Padding: Adjusts the space between the component's content and its edges.

![](../.gitbook/assets/design/right_side_bar_padding.png) ![](../.gitbook/assets/design/right_side_bar_padding_intro.png)

By default, margins can be configured simultaneously for all sides. To configure individual sides, click the style icon.

![](../.gitbook/assets/design/right_side_bar_padding_all_icon.png) ![](../.gitbook/assets/design/right_side_bar_padding_all.png)

### Layout

> Applies only to container-type components and pages.

Configures the arrangement of components inside a container or page. For more details, see [Layout and Position](../design/layout_and_position.md).

![](../.gitbook/assets/design/right_side_bar_layout.png)

### Style

Configures component styles and visual effects.

![](../.gitbook/assets/design/right_side_bar_style.png)

1. **Opacity**: Adjust transparency.
2. **Border Radius**: Set corner curvature.
3. **Cursor Style**: Change pointer style on hover.
4. **Background Color**: Set background color.
5. **Background Image**: Use local or remote images.
6. **Border**: Configure border color and thickness.
7. **Shadow**: Add shadow effects.
   1. X (Horizontal Offset): The position of the shadow in the horizontal direction.
   2. Y (Vertical Offset): The position of the shadow in the vertical direction.
   3. Blur: Control the degree of shadow blur.
   4. Spread: Control the size of the shadow (expand or contract).
8. **Background Blur**: Apply blur effects to the background.

### Animation

Add animations triggered by specific user interactions.

![](../.gitbook/assets/design/right_side_bar_animation.png)

There are currently four trigger methods for animations.

1. **On Hover**: Triggered when hovered over.
2. **On Click**: Triggered when clicked.
3. **On Scroll to Component**: Triggered when scrolled into view.
4. **On Scroll**: Dynamically triggered based on scroll position.

### Text

If the selected component contains text, configure text properties in this section.

![](../.gitbook/assets/design/right_side_bar_text.png)

## Configure Component - Data

Configure the data source for components. Supported for List, Select Views, Table, etc. For details, see [Data](../data/overview.md).

## Configure Component - Action

Define actions triggered by user interactions or events like clicks, refreshes, or List scroll events.\
For details, see [Action Configuration](../actions/overview.md).
