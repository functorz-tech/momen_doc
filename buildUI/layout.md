---
description: >-
  Learn how to config layout and position in Momen
---

# Detailed Tutorial on Layout and Position

## Layout

![Layout and position overview](../.gitbook/assets/design/layout_and_position_overview.png)

Pages and container components have default layout properties. You can adjust layout settings to arrange components with a "relative" position type according to specified rules, achieving your desired layout effect.

### Direction

Specifies the extension direction of the layout.

<div style="display: flex; justify-content: space-between; align-items: center;">
  <img src="../.gitbook/assets/design/layout_and_position_direction.png" alt="Horizontal layout direction" style="max-width: 48%;"/>
  <img src="../.gitbook/assets/design/layout_and_position_direction_view.png" alt="Vertical layout direction" style="max-width: 48%;"/>
</div>

- **Horizontal:** Add, remove, and reorder objects along the X-axis.
- **Vertical:** Add, remove, and reorder objects along the Y-axis.

### Distribution and Alignment

Adjust the distribution of child components within a page or container and align them relative to the parent.

![Distribution and alignment options](../.gitbook/assets/design/layout_and_position_distribution.png)

- **Stack:**  
  ![Stack distribution](../.gitbook/assets/design/layout_and_position_stack.png)

- **Space Between:** Equal spacing between components; the first and last components are flush with the container edges.  
  ![Space between distribution](../.gitbook/assets/design/layout_and_position_spacebetween.png)

- **Space Evenly:** Equal spacing between components and equal margins at both ends of the container.  
  ![Space evenly distribution](../.gitbook/assets/design/layout_and_position_spaceevenly.png)

- **Space Around:** Each component has equal spacing on both sides, making them appear "evenly surrounded." The gaps at the ends are half the size of the gaps between components.  
  ![Space around distribution](../.gitbook/assets/design/layout_and_position_spacearound.png)

### Wrapping

When content width exceeds the available space of the container, content wraps to the next line.

![Layout wrapping example](../.gitbook/assets/design/layout_wrap.gif)

### Gap

Set the spacing between child components within a page or container.

![Gap setting](../.gitbook/assets/design/layout_and_position_gap.png)

### Overflow

![Overflow options](../.gitbook/assets/design/layout_and_position_overflow.png)

1. **Scroll:** When content overflows, a scrollbar appears on the parent, allowing you to scroll to view the overflowed content.
2. **Visible:** Overflowed content remains visible outside the parent.
3. **Hidden:** Overflowed content is hidden and not visible outside the parent.

## Position

### Type

![Position type options](../.gitbook/assets/design/layout_and_position_type.png)

1. **Relative:** Components are arranged in order according to the parent's layout.
2. **Absolute:** Components are positioned at a fixed location relative to their parent (top-left, top-right, bottom-left, bottom-right).
3. **Fixed:** Components are positioned at a fixed location relative to the browser viewport and remain fixed even when the page scrolls.

### Layer

![Layer settings](../.gitbook/assets/design/layout_and_position_layers.png)

- The default layer for all components is "auto," meaning all components are on the same layer.
- You can manually set a component's layer (z-index). Higher values indicate a higher layer; components on higher layers cover those on lower layers.
- Components on the same layer are displayed in the order they are added; later additions cover earlier ones.