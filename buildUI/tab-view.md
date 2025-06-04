---
description: >-
  Tab View: Generally used for splitting page content by type, allowing for
  horizontal swiping or clicking on subheadings to switch between content.
---

# Component - Tab View

The Tab View is used to split page content by type, allowing users to swipe left/right or click on subheadings to switch content for a smoother interaction experience.

## Usage Scenario

Use Tab View for pages with multiple status displays, such as order lists in e-commerce (Pending Payment, Pending Shipment, Pending Receipt, Completed, After-Sale) or invoice reimbursement statuses (Pending Perfection, In Progress, Dismissed, Approved).

## Configuration Instructions

### Design

Tab View provides a default style: blue text with a white background and underline for the selected tab, black text with a white background and no underline for unselected tabs.

#### Custom Style

You can customize the selected/unselected styles (similar to Select View). For example, set unselected tabs to gray text, 12px font; selected tabs to orange text, 14px font, with an underline.

#### Sub-Tab Design

Double-click a tab to enter its sub-tab view. You can configure the background color and other styles for each sub-tab, and drag in other components to display content.

### Data

#### Default Tab View Index

Set the default tab to display when the page loads. Indexing starts from 0 (e.g., 0 for the first tab, 1 for the second, etc.).

#### Add/Modify Tabs

Click the "+" next to "Tabs" to add new tabs. Hover over a tab to modify, delete, or jump to that tab.

## Common Issues

**Q:** My Tab View is arranged vertically, but Tab View cannot meet my needs.  
**A:** Use Select View + Conditional View to achieve vertical tab effects. See [Select View](select-view.md) and [Conditional View](conditional-view.md).
