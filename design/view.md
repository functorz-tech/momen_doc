```description
Learn how to use the View component in page layout to achieve overall module layout, horizontal and vertical scrolling, collapse and expand, and Divider Line functionalities to optimize user experience and reduce repetitive configurations.
```
```keywords
View component, page layout, horizontal scrolling, vertical scrolling, collapse and expand, Divider Line, interface design
```

# View
## Application Scenarios
The View component can be used to achieve the following scenarios:

- Group several components into a single View to set specific layouts or styles for the whole
- Enable a specific area in the application to scroll horizontally
- Enable a specific area in the application to scroll vertically
- Change the display height of content upon clicking
- Create a Divider Line

> 💡Tips:
Use the View component appropriately. There is no need to nest a View component outside every component. Overuse of the View component can lead to a large compiled code package when publishing the mini program, resulting in an oversized main package issue.

## Usage Examples
### Creating an Overall Layout with View
In the example below, drag a View component into the page, change its layout direction to horizontal, then drag an Image component inside it to serve as the logo for the website's top navigation, and drag a Text component to form navigation options.

<img src="https://docs.functorz.com/static/image/示例-顶部导航栏.gif">

### Implementing Horizontal Scrolling in a Region with View
Enable the [Horizontal Scrolling] feature of the View component to view content that exceeds the width of the View component by swiping left or right.

<img src="https://docs.functorz.com/static/image/横向滚动.jpeg" width=200>

- Example: The category selection area on the homepage of a shopping app, where there are many categories. To view all categories by horizontally swiping the category area, place the category components inside a View and enable [Horizontal Scrolling] in interactions.

- Example: Displaying a long image. When the image width exceeds the screen width, place the image inside a View and enable [Horizontal Scrolling] in interactions to view the full image by swiping.

| Horizontal Category Display | Horizontal Long Image Display |
| ------------- | ------------- |
| <img src="https://docs.functorz.com/static/image/1672906087493-fbb85290-55b9-4fbb-a267-6b4cdd39dbd4.gif" width="100%"> | <img src="https://docs.functorz.com/static/image/1672906088391-4ba7b732-1865-4c1c-8b2e-403b092b34ec.gif" width="100%"> |

#### Characteristics of Horizontal Display Area in View Component
- The position or width of components that need to be displayed by scrolling within the [View] must exceed the width of the [View] itself, as shown in the right area of the purple button in the image below.
- Only content located to the right of the original width of the View can be displayed by horizontal scrolling. As shown, the purple button can be displayed by swiping right on the View component, but the orange button cannot be displayed by swiping left.

<img src="https://docs.functorz.com/static/image/1672906088445-bdc650c7-0e75-4f6d-b6d2-a7b761534b9d.png" width="100%">

### Implementing Vertical Scrolling in a Region with View
Enable the [Vertical Scrolling] feature of the View component to view content that exceeds the height of the View component by swiping up or down.

<img src="https://docs.functorz.com/static/image/纵向滚动.jpeg" width="200">

- Example: Product reviews and details are on the same page. When scrolling to the review or detail module, you can independently scroll the corresponding area to browse the content.

<img src="https://docs.functorz.com/static/image/1672906089041-567cbdcc-fa20-4207-8dd5-29b34b7ab2d0.gif" width="200">

#### Characteristics of Vertical Display Area in View Component
- The position or height of components that need to be displayed by scrolling within the [View] must exceed the height of the [View] itself, as shown in the lower area of the green button in the image below.
- Only content located below the original height of the View can be displayed by vertical scrolling. As shown, the green button can be displayed by swiping up on the View component, but the gray button cannot be displayed by swiping down.

<img src="https://docs.functorz.com/static/image/1672906089204-b6c1b06f-fa78-49c3-b77b-3ad17f1fff51.png" width="100%">

### Collapse/Expand View - Exclusive to Mini Program
**This feature requires pre-release scanning for testing on a mobile device; preview is not supported.**
**Collapse Mode**

Expand: Set the initial height of the View to be displayed as the expanded height.
- Example: Drag a View with a height of 150 into the page, set it to expand mode, and set the collapse height to 50. After pre-release, the initial display height of this View will be 150.

Collapse: Set the initial height of the View to be displayed as the collapsed height.
- Example: Drag a View with a height of 150 into the page, set it to collapse mode, and set the collapse height to 50. After pre-release, the initial display height of this View will be 50.

**Collapse Height:** Refers to the height after collapsing.

<img src="https://docs.functorz.com/static/image/折叠.jpeg" width="200">

**The collapse or expansion of the View component needs to be controlled with the [Set Collapse Mode] action.**
**Set Collapse Mode:**
Object: Select which View component to collapse or expand.
Collapse Mode: Configured as shown in the image below.

- folded (Collapse): If the original View height is 150, **the View collapse mode is expand**, and the collapse height is 50, **the initial display height of the View is 150**. When **the collapse button action's collapse mode is folded**, clicking the collapse button will **collapse the View component upwards** to a height of 50, hiding content that exceeds the View height after collapsing. **When the expand button's collapse mode is unfolded**, clicking the expand button will return the View height to 150.

| img | img |
| ------------- | ------------- |
| <img src="https://docs.functorz.com/static/image/组件折叠.jpeg" width="100%"> | <img src="https://docs.functorz.com/static/image/折叠行为.jpeg" width="100%"> |

- unfolded (Expand): If the original View height is 150, **the View collapse mode is collapse**, and the collapse height is 50, **the initial display height of the View is 50**. **When the expand button action's collapse mode is unfolded**, clicking the View will **expand the View component downwards** to a height of 150, displaying more content that originally exceeded the View height. **When the collapse button's collapse mode is folded**, clicking the collapse button will return the View height to 150.

### Creating a Divider Line with View

1. Drag a View component into the page, change its background color (usually gray), and place it in the appropriate position.
2. For a horizontal Divider Line, the View's width is usually 355, and the height is 2; for a vertical Divider Line, the View's width is usually 2, and the height is 25. Adjust the width and height as needed to achieve the desired effect.
3. Effect:

| img | img |
| ------------- | ------------- |
| <img src="https://docs.functorz.com/static/image/1672906089279-984b76f0-a1bf-49e0-b24d-8e2a5a6e80d3.png" width="100%"> | <img src="https://docs.functorz.com/static/image/1672906089848-757ae9a3-80e4-407d-ac41-d5310e4554d3.png" width="100%"> |
```