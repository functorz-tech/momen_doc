---
description: >-
  After clicking on the component configured for this action, a
  toast message will be displayed on the page to provide users with information
  or feedback.
---

# Toast notification & modal

## 1. Show Toast

### Introduction   
In this tutorial, you will learn how to use Momen's \[Show Toast] action to create dynamic and informative prompts in your web apps.

### Scenarios
After triggering this action, the alert content will be displayed on the page.
* When the submit form action is successfully executed, the prompt "Submit Successfully" is displayed.
* When the login/registration action fails, the prompt "Login/Registration Failed" is displayed.

### Action configuration guide

The Show Toast action is commonly used to signal the successful execution of a mutation. You can find the "Show Toast" action under the Action on Click - Toast\&Modal - Show Toast.

<figure><img src="../../.gitbook/assets/0 (24).png" alt="Sets the path to show toast action."><figcaption></figcaption></figure>

![](<../../.gitbook/assets/1 (23).png>)

### Display Effect

At the interface's top, a text prompt displays the content of the toast, featuring a default style of black text on a white background. The style cannot be customized.

<figure><img src="../../.gitbook/assets/2 (20).png" alt="Display effect showcase of the Show Toast action."><figcaption></figcaption></figure>

## 2. Show modal

### Introduction
In this tutorial, you will discover the versatile functionality of modals in Momen, offering both default and custom modes for seamless interaction. 

### Types of Modal
There are two modes available for displaying modals: default and custom.

1. Default   
    You can configure the title, content, cancel text, confirm text, and the interaction action after confirming.

2. Custom   
    After entering the editing mode, you can drag and drop other components into the blank container to customize the editing.

    Click the modal view in the "Preview" area below, and you can edit the width, height, position, and other properties of the modal window.

    In **Interaction**, you can turn on the "Close on click overlay" button. After checking this option, you can hide the dialog by clicking anywhere in the modal window.

    Newly added components in the modal view can add the Hide Modal action.

### Action configuration guide

#### **Default Mode**
Action on Click > Toast\&Modal > Show Modal > Default > Modify Cancel/Confirm Text

<figure><img src="../../.gitbook/assets/0 (23).png" alt="Sets the path to show the modal in default mode."><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/1.gif" alt="Sample scenario of using show modal action in default mode."><figcaption></figcaption></figure>

#### **Custom Mode**

Action on Click > Toast\&Modal > Show Modal > Custom > Enter Edit Mode

**Step 1.** Add a Show Modal and change the mode to Custom.

<figure><img src="../../.gitbook/assets/2 (19).png" alt="Sets the mode of Show modal action to custom."><figcaption></figcaption></figure>

**Step 2.** Resize the Modal Window

Click to enter the editing modal, and adjust the size and position of the window in the "Preview" interface below.

<figure><img src="../../.gitbook/assets/3 (14).png" alt="Sets the mode of Show modal action to custom."><figcaption></figcaption></figure>

**Step 3.** Build the Modal Content

Build the components of the modal in the Focus View (upper area).

<figure><img src="../../.gitbook/assets/4 (14).png" alt="Build the modal content."><figcaption></figcaption></figure>

**Step 4.** Close Modal View

- Enable the "Click on Close Overlay" in the right component bar of the "modal-view."
  * Effect: The modal window will be closed even when you click the outer area of the modal.

- In the "modal View" screen, add a component (generally a button) to the modal view and add the "Hide Modal" action to that component. 
    - Effect: When the component is clicked, the modal will be closed.

| <img src="../../.gitbook/assets/5 (9).png" alt="Enable the click on close overlay button." data-size="original"> | <img src="../../.gitbook/assets/6 (9).png" alt="Sets the path to modal-view." data-size="original"> |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |

<figure><img src="../../.gitbook/assets/7.gif" alt="Sample scenario of using show modal action in custom mode."><figcaption></figcaption></figure>

### Note
When triggering the modal action within a \[List] component, direct access to the component data is restricted. To overcome this, employ the \[Set Page Variable] action, transferring the component data to a page variable. This process allows subsequent utilization of specific list item data within the modal.
