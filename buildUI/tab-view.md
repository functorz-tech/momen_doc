---
description: >-
  Tab View: Generally used for splitting page content by type, allowing for
  horizontal swiping or clicking on subheadings to switch between content.
---

# Component - Tab View

The Tab View is generally used to split the page content according to type. You can swipe left/right or click on the sub-title to switch the content, providing a smoother interaction experience.

## Usage Scenario

Pages with multiple status displays, such as the full list of orders in a mall (Pending Payment, Pending Shipment, Pending Receipt, Completed, Post-Sale) or invoice reimbursement-related statuses (Pending Perfection, In Progress, Dismissed, Approved).

## Configuration Instructions

### Design

There is a default style for the Tab View, as shown in the image below. The blue text with a white background and underline represents the selected style, while the black text with a white background and no underline represents the unselected style.

#### Custom Style

Users can also choose a custom style to edit the selected/unselected style of the corresponding Tab View (similar to the Select View). For example: unchecked is gray text color + 12 font size, checked is orange text color + 14 font size with a selected underline.

#### Sub-Tab Design

Double-click to enter the sub-tab view. You can individually configure the background color and other style content for a sub-tab view, drag and drop other components to display the content, and so on.

### Data

#### Default Tab View Index

Default Tab View Index: When entering the page, the developer expects the user to see a specific tab first. Index: Unlike the traditional way of counting from 1, the computer's serial number order starts from 0. If you expect to see the first tab, then this should be set to 0, and so on (0, 1, 2, 3).

#### Add/Modify Tabs

Click the "+" sign next to "Tabs" to add new tabs, and hover over the content of a tab to modify/delete/jump to that tab.

## Common Issues

Q: My Tab View is arranged vertically, and the Tab View cannot meet my needs.  
A: You can choose to use the Select View + Conditional View method to achieve this. Refer to [Select View](select-view.md) combined with [Conditional View](conditional-view.md).
