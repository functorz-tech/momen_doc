---
description: >-
Introduction and usage of all input type components
```
keywords: >-
Number Input, Date Input, Data Input, Input Box, Password Input, Multi-line Display, Data Type, Default Value, Input Box Interaction, Auto Focus, Input Box Example, Search Input Box
---

# Components - Input
Includes: Input Box, Number Input, Data Selector, Date & Time Picker, Rich Text Editor, Image Picker, Video Picker, Switch
## Unified Usage Method
### Data Output Capability
All input type components, once added to a page, can expose the content entered on the component to the outside. This means:
1. Other components, such as text components, can choose to bind to "Input Box" - "Input Type Component Name" to display the content of that input box.
2. Modifying databases or other locations that need to bind content can also reference the content entered in this input type component.
   <figure><img src="../.gitbook/assets/7 (24).png" alt="Select the type of input content."><figcaption></figcaption></figure>

### Configurable Special actions
Input type components can generally configure actions for the following trigger timings.
- On Value Change: action triggered when the input content changes
- On Blur: action triggered when the cursor is no longer in the input box
- onSuccess: action triggered after successfully uploading an image/video

## Input Box
Input boxes are generally used to provide scenarios where users need to input content. For example:

- Fill/Complete Content
- Password Input Box
- Number Input Box
- Search Input Box

The default type of the input box is text, with input and output types as Text (String).
The input box can be modified to a number type, with input and output types as integer (int).
> 💡 Tips:
When the data type is changed to a number, the default value will automatically be set to 0. If you do not want to set or display a default value, you can add a page data of number type and set the default value to the page data.

### Configuration Instructions
#### Placeholder Text
This refers to the text displayed when the input box has no content entered. It can be empty. Placeholder text is not actual data content.
> 💡 Tips:
Placeholder text cannot be data bound, it can only be directly input.
#### Default Value
This refers to the default content displayed in the input box. The default value can be data bound.


> 💡 Tips:
    1. When both a placeholder and a default value are set for the input box, the default value is displayed first.
    2. The default value is displayed by assigning a value to the input box when entering the page. When there is input content in the input box, it displays the input content, and modifying the default value at this time will not change the input content or display content of the input box.
    3. It is prohibited to select the input box's own default value, as this will lead to infinite loop dependencies, resulting in errors.

#### Some Special Configurations
1. Password: When entering content, the content is displayed in an encrypted state, usually used in account password login systems.

2. Auto Focus: When the input box is set to auto focus, the keyboard will automatically pop up when entering the page where the input box is located, and content can be directly entered.
3. Cursor and Keyboard Distance: Set the distance between the cursor and the keyboard, which is the distance between the keyboard and the input box when focused.
4. Multi-line: When the multi-line button is turned on, if the length of the text entered in the input box exceeds the width of the input box, it will automatically wrap to display the remaining text.
> 💡 Tips:
If the input box is set to multi-line and its vertical layout mode is set to fit content, the minimum value set will not take effect.

### Usage Example
> 💡 Tips:
When there are multiple input boxes on the page, **it is recommended to rename the components**, so that when using the input result content, it is clear which component the content was input through.

1. When users need to fill/complete their information, an input box needs to be placed on the page for users to input their information in the input box, and select the corresponding input box data in the field configuration of the add/update action.

2. When users need to display the original data and want to edit their information, an input box also needs to be placed on the page. However, for user experience, the current information is usually configured in the default value, allowing users to refer to and modify it.


## Number Input
Similar to the input box, the number input component provides users with a + - number operation component, outputting a value of number type. For example, in the following scenarios:
- Adding item quantities in shopping applications
- Adding equipment quantities in rental applications
### Configuration Instructions
1. Maximum: The maximum value the component can input. If the input is greater than the maximum value, the maximum value is displayed.
2. Minimum: The minimum value the component can input. If the input is less than the minimum value, the minimum value is displayed.
3. Step: Refers to the value increased or decreased when clicking the + or - sign. Directly entering a number is not affected by the step value.
4. Disable Increment/Decrement: Refers to the inability to click the + or - sign and input numbers. At this time, the number input component displays the default value and cannot change the displayed number.
5. Disable Input Box: Refers to the inability to directly input/modify numbers, but numbers can be changed by clicking the + or - sign.

## Data Selector
The Data Selector component allows users to input content by selecting data.
### Configuration Instructions
Most configurations are consistent with other input type components. The special point is that this component must configure the data source and corresponding fields that users can select.
#### Data Source Selection
- You can choose your own created option tables or the default province, city, and region tables.
- You can set a "limit" (how many options to request) that meets your needs.
- You can filter, screen, and sort the data source.
#### List Field
It is important to determine the "list field" because remote data has multiple fields, and it is necessary to clarify which field's content is to be displayed.
#### Default Value
The default option, which can be directly input according to the data type specified by the [List Field] or bound to remote data of the corresponding type.

## Date & Time Picker
Similar to the Data Selector, the Date & Time Picker allows users to select and input time or date, and the component exposes time and date formats.
### Configuration Instructions
1. Start Time/Date and End Time/Date: Only supports data binding, both are not required, **generally not set**.
2. Time Interval: The default selection is 1 minute, supporting selections of 5, 10, 15, 30, and 60 minutes, not supporting manual input.
3. Default Value: Not required, databinding.
4. Placeholder Text: Not required, when there is no default value, the content in "Placeholder Text" will be displayed.

## Rich Text Editor
A component that allows users to input rich text content, outputting a text type data.

![rich text editor](<../.gitbook/assets/0 (15).png>)

## Image Picker
A component for users to upload images. You can choose single or multiple images. It is generally used for uploading photos, avatars, etc.

### Configuration Instructions
1. Maximum Number of Images: Refers to how many images need to be selected and uploaded through the Image Picker, default is 1 image.
2. Number of Columns: When the maximum number of images is greater than 1, you can set the number of columns, that is, the uploaded images are displayed according to the number of columns.
3. Image Spacing: Refers to the spacing between images and images, rows and columns when uploading multiple images.
4. Placeholder Image: Refers to the icon style of the uploaded image, the default style is displayed if not uploaded.
5. Default Value: Refers to the content displayed in the Image Picker before uploading images, which can be single or multiple images.

#### Special Instructions
When selecting multiple images and wanting to upload this data to the database, you need to use the [Batch Mutation] action in the Data Mutation action, bind the result selected by the Image Picker in its data source, and then upload the specific image field that needs to be uploaded.

## Video Picker
Used for users to upload videos, the usage is the same as the Image Picker.
### Configuration Instructions
1. After the video is successfully uploaded, clicking the Video Picker component again can reselect the video to upload.
2. The default video displayed by the component can be displayed through data binding.

## Switch
A component that allows users to choose between yes and no, exposing a boolean value (true&false).
Users can choose from three switch styles, which do not support customization.
### Usage Example
Use the switch component as a toggle for whether a to-do item is completed. When adding a to-do item, the default switch component is false, which means not completed. When completed, click the switch button to change it to true.
<figure><img src="../.gitbook/assets/4 (2).gif" alt="Effective demonstration."><figcaption></figcaption></figure>