---
description: >-
  Learn how to use Momen canvas to build app
---
# Canvas operations

## Hierarchical Structure
Pages Pages and container components support nesting other components. The component tree in the left sidebar displays these nesting relationships.

![](../.gitbook/assets/design/select_and_display_.png)

> Currently, Cross-level dragging to adjust nesting is unavailable; use the cut-and-paste method instead.

Components at the same level follow a display order: newer components overlay older ones. To control the display order, drag components in the left sidebar or use the "Move" option in the right-click menu. You can also use the following shortcuts:

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

Click a component directly to select it, or hold <font color="#2EA120">**⌘ | Ctrl**</font> to select its parent component. After selecting, you can use shortcuts to switch selection:

**Select Parent**: <font color="#2EA120">**Shift ⏎**</font>

**Select Child**: <font color="#2EA120">**⏎**</font>

**Select All Siblings**: <font color="#2EA120">**⌘ A | Ctrl A**</font>

**Select Previous Component**: <font color="#2EA120">**Shift Tab**</font>

**Select Next Component**: <font color="#2EA120">**Tab**</font>

### Multi-Selection

**Interaction**

To multi-select components on a page, hold <font color="#2EA120">**Shift**</font> and click each component. Alternatively, in the left sidebar, hold <font color="#2EA120">**⌘ | Ctrl**</font> and click components to achieve the same effect.
<img src="../.gitbook/assets/design/multi-select_1.gif" style="width: 100%; max-width: 100%;" />

For batch selection, use the pointer to draw a selection box on the canvas, or in the left sidebar, hold <font color="#2EA120">**Shift**</font> to select all components between two.
<img src="../.gitbook/assets/design/multi-select_2.gif" style="width: 100%; max-width: 100%;" />

After multi-selecting, shared properties can be modified in the right sidebar.

**Grouping**

Group selected components into a view using the "Create View" option in the right-click menu or the shortcut <font color="#2EA120">**⌘ G | Ctrl G**</font>.

![](../.gitbook/assets/design/select_and_display_-1.png)