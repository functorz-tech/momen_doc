---
description: >-
  Tab View: Generally used for splitting page content by type, allowing for
  horizontal swiping or clicking on subheadings to switch between content.
---

# Component - Tab View

The tab view is generally used to split the page content according to the type, you can slide left/right/click on the sub-title to switch the content, and the interaction experience is smoother.

## Usage Scenario

Pages with multiple status displays, such as the full list of orders in the mall (Pending Payment, Pending Shipment, Pending Receipt, Completed, Post-Sale) or invoice reimbursement related (Pending Perfection, In Progress, Dismissed, Approved)

## Configuration Instructions

### Design

There is a default style for the tab view, as shown in the image below; the blue text with white background and underline is the selected style, and the black text with white background and no underline is the unselected style.

#### Custom Style

Users can also choose a custom style to edit the selected/unselected style of the corresponding tab view (similar to the select view).For example: unchecked is gray text color + 12 font size, checked is orange text color +14 font size with selected underline.

#### Sub-Tab Design

Double-click to enter the sub-tab view, you can individually configure the background color and other style content for a sub-tab view, drag and drop other components to display the content, and so on.

### Data

#### Default Tab view Index

Default tab view index: when entering the page, the developer expects the user to see which tab first.Index: different from the traditional way of counting from 1, the computer's serial number order is from 0, if you expect to see the first tab, then this should be filled with 0, and so on, 0, 1, 2, 3

#### Add/Modify Tabs

Click the "+" sign next to "Tabs" to add new tabs, and hover over the content of a tab to modify/delete/jump to that tab.

## Common Issues

Q: My Tab View is arranged vertically, and the Tab View cannot meet my needs. A: You can choose to use the Select View + Conditional View method to achieve this, refer to [【Select View】](select-view.md) combined with [【Conditional View】](conditional-view.md)
