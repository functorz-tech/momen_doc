---
description: Introduction and usage of all input type components
---

# Component - Input

Includes: Input Box, Number Input, Data Selector, Date & Time Picker, Rich Text Editor, Image Picker, Video Picker and Switch

## Unified Usage Method

### Data Output Capability

All input-type components, once added to a page, can expose their entered content for use elsewhere. This means:

1. Other components (such as text components) can bind to the input component to display its content.
2. When modifying databases or other targets, you can reference the content entered in any input component.

![Select the type of input content.](../.gitbook/assets/7%20(24).png)

### Configurable Special Actions

Input components generally support configuring actions for the following triggers:

- **On Value Change:** Triggered when the input content changes.
- **On Blur:** Triggered when the input loses focus.
- **On Success:** Triggered after successfully uploading an image or video.

## Input Box

Input boxes are used for user input scenarios such as:

- Filling out forms
- Password input
- Number input
- Search input

The default input type is text (String). You can change the type to number (Integer).

> 💡 **Tip:** When the data type is changed to number, the default value is set to 0. If you do not want a default value, create a page variable of number type and set its default value as needed.

### Configuration Instructions

#### Placeholder Text

Displayed when the input box is empty. Placeholder text is not actual data and cannot be data bound; it must be entered directly.

#### Default Value

Displayed as the initial content of the input box. The default value can be data bound.

> 💡 **Tips:**  
> 1. If both a placeholder and a default value are set, the default value is shown first.  
> 2. The default value is assigned when entering the page. If the user enters content, that content is displayed instead. Changing the default value later does not affect the current input.  
> 3. Do not set the input box's own default value as its data source—this causes infinite loop dependencies and errors.

#### Special Configurations

1. **Password:** Input is masked for privacy, typically used for passwords.
2. **Auto Focus:** Automatically focuses the input box and opens the keyboard when the page loads.
3. **Cursor and Keyboard Distance:** Sets the distance between the input box and the keyboard when focused.
4. **Multi-line:** When enabled, text that exceeds the input box width wraps to the next line.

> 💡 **Tip:** If multi-line is enabled and the vertical layout mode is set to fit content, the minimum value setting will not take effect.

### Usage Example

> 💡 **Tip:** When using multiple input boxes, rename them for clarity when referencing their content elsewhere.

1. For user information forms, add input boxes and bind their data to the corresponding fields in add/update actions.
2. For editing existing data, set the current value as the default value in the input box for easy reference and modification.

## Number Input

Similar to the input box, but provides + and - controls for numeric input (output type: number). Common scenarios:

- Adjusting item quantity in shopping carts
- Setting equipment quantity in rental apps

### Configuration Instructions

1. **Maximum:** The highest value allowed. Input above this will be set to the maximum.
2. **Minimum:** The lowest value allowed. Input below this will be set to the minimum.
3. **Step:** The increment/decrement value for + and - controls. Direct input is not affected by step.
4. **Disable Increment/Decrement:** Disables the + and - controls and input; only the default value is shown.
5. **Disable Input Box:** Disables direct input; only the + and - controls can change the value.

## Data Selector

Allows users to select data from a list.

### Configuration Instructions

Most settings are similar to other input components. Key differences:

- **Data Source Selection:** Choose from your own tables or default tables (e.g., provinces/cities). Set a limit, filter, and sort as needed.
- **List Field:** Specify which field's content to display from the data source.
- **Default Value:** Set the default selection, either directly or by binding to remote data.

## Date & Time Picker

Lets users select and input dates or times, exposing the selected value.

### Configuration Instructions

1. **Start/End Time or Date:** Optional, supports data binding. Usually not set.
2. **Time Interval:** Default is 1 minute; options include 5, 10, 15, 30, 60 minutes. Manual input is not supported.
3. **Default Value:** Optional, supports data binding.
4. **Placeholder Text:** Optional; shown when no default value is set.

## Rich Text Editor

Allows users to input rich text content, outputting text data.

![Rich text editor](../.gitbook/assets/0%20(15).png)

## Image Picker

Lets users upload images (single or multiple), commonly used for photos or avatars.

### Configuration Instructions

1. **Maximum Number of Images:** How many images can be uploaded (default: 1).
2. **Number of Columns:** For multiple images, sets how many columns to display.
3. **Image Spacing:** Sets spacing between images and between rows/columns.
4. **Placeholder Image:** The icon shown before uploading; defaults to a standard style.
5. **Default Value:** Images shown before upload; can be single or multiple.

#### Special Instructions

When uploading multiple images to the database, use the **Batch Mutation** action in Data Mutation, bind the Image Picker's result as the data source, and upload the specific image field.

## Video Picker

For uploading videos; usage is the same as Image Picker.

### Configuration Instructions

1. After uploading, clicking the Video Picker again allows re-selection.
2. The default video can be set via data binding.

## Switch

A toggle component for yes/no (boolean) values. Three switch styles are available (not customizable).

### Usage Example

Use the switch to mark a to-do item as completed. When adding a to-do, the switch defaults to false (not completed). When completed, toggle the switch to true.

![Effective demonstration.](../.gitbook/assets/4%20(2).gif)
