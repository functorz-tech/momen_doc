# Canvas & Component Management

## Hierarchical Structure
Both pages and container components support adding components within them. You can view the nesting relationships between components in the component tree on the left sidebar.

![](../assets/images/select_and_display_.png)

> Currently, cross-level dragging to change the nesting hierarchy of components is not supported, but you can achieve this by using the cut + paste method.

Components at the same level have a display order, with later added components overlaying earlier ones. When you want to control the display order of components at the same level, you can directly drag the components in the left sidebar or control them through the "Move" option in the right-click menu. Here are some related shortcuts:

**Bring to Front**: <font color="#2EA120">**]**</font>

**Send to Back**: <font color="#2EA120">**[**</font>

**Move Up One Layer**: <font color="#2EA120">**⌘ ] | Ctrl ]**</font>

**Move Down One Layer**: <font color="#2EA120">**⌘ [ | Ctrl [**</font>

**Move Up**: <font color="#2EA120">**↑**</font>

**Move Right**: <font color="#2EA120">**→**</font>

**Move Down**: <font color="#2EA120">**↓**</font>

**Move Left**: <font color="#2EA120">**←**</font>

## Selection

### Single Selection

**Interaction**

You can directly click with the pointer to select the component you want, or hold <font color="#2EA120">**⌘ | Ctrl**</font> to click and select the parent component.

Once you have selected a component, you can quickly switch to the object you want to select using shortcuts:

**Select Parent**: <font color="#2EA120">**Shift ⏎**</font>

**Select Child**: <font color="#2EA120">**⏎**</font>

**Select All Siblings**: <font color="#2EA120">**⌘ A | Ctrl A**</font>

**Select Previous Component**: <font color="#2EA120">**Shift Tab**</font>

**Select Next Component**: <font color="#2EA120">**Tab**</font>

### Multi-Selection

**Interaction**

After selecting a component, you can hold <font color="#2EA120">**Shift**</font> to add other components you want to multi-select on the page one by one. Alternatively, in the left sidebar, hold <font color="#2EA120">**⌘ | Ctrl**</font> to select components to achieve the same effect.
<video width="100%" controls>
  <source src="https://docs.functorz.com/static/video/20241213-163517.mp4">
</video>

If you want to batch select components, you can use the pointer to draw a selection box on the canvas, or in the left sidebar, hold <font color="#2EA120">**Shift**</font> to directly select all components between two components.
<video width="100%" controls>
  <source src="https://docs.functorz.com/static/video/20241213-163526.mp4">
</video>

After multi-selecting, you can modify their shared properties in the right sidebar.

**Grouping**

If you want to quickly add a view to the selected components, you can choose "Create View" from the right-click menu or use the shortcut **⌘ G | Ctrl G**.

![](../assets/images/select_and_display_-1.png)