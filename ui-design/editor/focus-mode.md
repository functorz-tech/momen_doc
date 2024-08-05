# Focus Mode

### **Introduction**

In this guide, you'll learn how to effectively use Focus Mode to navigate and manage components within your app's interface.

### **Focus Mode**

Focus Mode refers to a mode where clicking on views, list-type components, conditional containers, and tabs will focus inside the component, allowing for direct interaction within the component itself.

![](<../../.gitbook/assets/0 (6).gif>)

Focus Mode is turned off by default. When Focus Mode is disabled, all components are displayed and interacted with on the same plane, enhancing the convenience of multi-level operations. The operations after disabling Focus Mode are as described below.

### **Adding Components**

Double-click or drag a component from the sidebar to add it.

#### When the target component's layout mode is set to Relative:

After clicking a page or a view component, double-clicking or dragging a component from the sidebar will, by default, add it to the inside of the page or view component at a position defined by the relative layout settings.

For example:

When the page's layout is set to a vertical arrangement with the distribution starting from the top and alignment set to center:

* Double-clicking to add a component will place it in the center of the page, positioned closely to the top of the page.
* If you double-click to add another component after the first, this new component will be placed in the center of the page as well, positioned closely below the previously added component.

![](<../../.gitbook/assets/1 (15).gif>)

When you drag a new component into a page or view with existing components, a placeholder shows where it will fit, automatically shifting the other components to make space.

![](<../../.gitbook/assets/2 (11).gif>)

#### When the target component is set to Absolute layout mode:

After selecting a page or view component, double-clicking on a sidebar component will by default add it to the top-left corner inside the page or view component.

If the component is added by dragging, it can be placed anywhere on the page.

During dragging, the border of the parent component where the component is being placed will turn blue to indicate a hover state.

![](<../../.gitbook/assets/3 (66).png>)

### Changing Component Position in Relative Positioning&#x20;

When dragging a component between other components or between a component and the edge of the page (within 10 pixels above or below the contact point), a separator line appears (matching the length of the contact area with a minimum of 40 pixels). This allows for direct addition or repositioning of the component.

### Selection

Click to directly select any component on the page.

Double-click to select the next layer within the view.

Double-clicking on list-type components, conditional containers, or tabs opens their sub-container views.

![](<../../.gitbook/assets/4 (63).png>)

### Multi-select

If a component with sub-containers was previously selected, double-click on a blank area of the page or the canvas to exit.

Resize handles appear at the corners when a component is selected; dragging these handles adjusts the width and height, changing the original dimensions to fixed pixels.

Through selection: Use a shortcut key plus the mouse to directly modify components inside the view:\
a. Windows: Ctrl + mouse click\
b. Mac: Command + mouse click

Clicking on a blank area of the page selects the page.

### Navigation Path (Breadcrumbs)

![](<../../.gitbook/assets/5 (1).jpeg>)

1. The first level is always the page.
2. Subsequent levels are the components that have been entered in focus mode.
3. Sub-containers are not displayed.
4. The navigation path only indicates hierarchy levels, not selection status.

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.

