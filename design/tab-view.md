```description
Learn how to design and use a Tab View to switch page content, suitable for multi-state pages such as store order lists, invoice reimbursements, etc. It supports custom styles and sub-Tab View design, allowing for easy and quick addition and modification of tabs.
```
```keywords
Tab View Design, Application Scenarios, Multi-State Pages, Store Mini Program, Order List, Custom Tab View, Sub-Tab View, Page Content Display
```
# Tab View
The Tab View is generally used for scenarios where page content is split by type, allowing for left-right swiping/clicking on subtitles to switch content.
## Application Scenarios
Pages with multiple states, such as the complete order list in a store mini program (Pending Payment, Pending Shipment, Pending Receipt, Completed, After-Sales) or invoice reimbursement-related (To Be Completed, In Progress, Rejected, Approved).

<img src="https://docs.functorz.com/static/image/1673506195469-acb8daa7-39f3-41e3-adba-272b1085d3fc.jpeg" width="300">

## Tab View Design
The Tab View has a default style, as shown in the image below. Blue text on a white background with an underline indicates the selected style, while black text on a white background without an underline indicates the unselected style.

<img src="https://docs.functorz.com/static/image/1697010349114-9bc848eb-07bf-4837-a9de-15274fc0d3f7.png" width="400">

### Custom Styles
Users can also choose to customize styles to edit the selected/unselected styles of the corresponding Tab View (similar to Select View).
For example: Unselected is gray text color + font size 12, selected is orange text color + font size 14, with a selected underline.

<img src="https://docs.functorz.com/static/image/1673506549425-48bff82c-23eb-4209-be6a-52a1bf129e12.png" width="100%">

### Sub-Tab View Design
Double-click to enter the sub-Tab View, where you can configure background color and other style content for a specific sub-Tab View, or drag in other components for content Display, etc.

<img src="https://docs.functorz.com/static/image/1697011855710-907fd35c-efcf-4a2e-b3ec-793bc8c4550b.png" width="100%">

## Tab View Content
### Default Tab View Index
**Default Tab View Index:** When entering this page, which tab does the developer expect the user to see first?
**Index:** Unlike the traditional counting method starting from 1, computer sequence sorting starts from 0. If you want to see the first tab, you should fill in 0 here, and so on, 0, 1, 2, 3.

<img src="https://docs.functorz.com/static/image/1697011404795-a3622827-42e2-4a79-8847-41bda17b30e8.png" width="100%">

### Add/Modify Tabs
Click the "+" sign next to "Tabs" to add a new tab. Hover over a tab content to modify/delete/Navigation that tab.

<img src="https://docs.functorz.com/static/image/1697011748183-10e2db32-1c08-4556-a262-2a43cbaf23dc.png" width="100%">

## Common Issues
My Tab View is arranged vertically, and the Tab View cannot meet my needs.
Answer: You can choose to use the Select View + Conditional View method to achieve this, refer to [【Select View】](https://docs.functorz.com/app_construction_and_maintenance/ui_and_interaction_design/design_elements/component_configuration_description/selection_view/selection_view.html) combined with [【Conditional View】](https://docs.functorz.com/app_construction_and_maintenance/ui_and_interaction_design/design_elements/component_configuration_description/conditional_container/conditional_container.html)
​