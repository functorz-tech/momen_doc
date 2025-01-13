---
description: >-
    This section explains how to configure various component actions in Momen, including setting input values, horizontal list scrolling, full-screen images, and conditional view switching.
---

# Component Management
**Component management includes：**
1. Input compoents
2. List
3. Image
4. Video
5. Animation
6. Conditional view

## 1. Input – Set/Reset Input Component Value

### Brief
This action sets a specific value to input type of components. Common use cases include:
- Automatically filling a search box with a popular search term when clicked.
- Pre-filling user data, such as username or phone number, from the database.
- Clearing the input field after submitting the content.

### Action configuration guide
Add the Set Input Value action to a component. Choose the target input field and configure the value to be set, either a static value or data retrieved from a identified data source.

### Use cases
- Dropdown Selection: Display the dropdown options when clicks on the input component.
- Cross-Page Search: When linking two pages with search fields, pass the input data from page A to page B and set it as the value in page B’s search input field for a seamless user experience.

### Note
- If there are multiple input fields on a page, rename them for easier identification when configuring actions.
- Only input fields on the current page can be selected.

## 2. List – Scroll list

### Brief
Enables users to scroll a list by clicking buttons to slide into the previous or next item.

### Action configuration guide
Add the Scroll List action to a component (usually a button). Select the target list and set whether the button scrolls to the previous or next item.

## 3. List – List Load More

### Brief
Allows users to load additional data in a list when they reach the end of the current content.

### Action configuration guide
Add the List Load More action to a button or scroll event. Select the target list component where additional data should be loaded.

### Note
Rename list components for quick identification when configuring actions, especially when there are multiple lists on a page.

## 4. List – Scroll to Bottom

### Brief
Scrolls a list straight to the bottom when triggered.

### Configuration Guide
Add the Scroll to Bottom action to a component（usually a button）. Select the list component to be scrolled.

## 5. Image – Fullscreen Image

### Brief
Displays an enlarged full-screen version of an image when clicked.

### Action configuration guide
Add the Full-Screen Image action to an image component’s interaction. When clicked, the image will expand to fill the screen.

### Note
This action is needed to select and add to a image component directly.

## 6. Video – Play, Pause, Stop

### Brief
This action controls video, allowing users to play, pause, or stop media files.

### Action configuration guide
Add the Play, Pause, Stop action to a component (usually a button). Select the target video URL retrieved from a identified remote data.

### Note
On the page, you need to identify a data source and filter out the video type of data field first.

## 7. Animation – Lottie

### Brief
Controls Lottie animations by allowing users to play, pause, or stop an animation. 

### Action configuration Guide
Add the action to a component and select the target lottie component of whether the action should play, pause, stop.

## 8. Conditional Container – Switch View Case

### Brief
Switches the view between different sub-containers based on user interactions. This is useful for scenarios where views need to change dynamically, such as:
- Verification Code: Switch from "Send Code" to "Countdown Timer" after a user clicks the button to send a verification code.
- Password Visibility: Switch between "Show Password" and "Hide Password" views when a user toggles the visibility of a password input field.
- Cart Status: In e-commerce apps, switch between "Add to Cart" and "Update Quantity" views when an item is added to the cart.

### Action configuration Guide
Ensure that the page contains a conditional container with two or more sub-containers. Add the Switch View action to a component, specifying the target conditional container and the sub-container to switch to.

### Note
- If a button inside a conditional sub-container is configured to switch views but the new view doesn’t meet the current condition, the switch won’t occur. The container will continue displaying the view that meets the condition.
- If a button outside the conditional container triggers the switch, the action will override the container’s condition, but upon refreshing the page, the container will revert to displaying the view that meets the condition.

