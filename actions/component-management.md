---
description: >-
  This section explains how to configure various component actions in Momen, including setting input values, list scrolling, full-screen images, and conditional view switching.
---

# Component Management

Momen supports a variety of component actions to enhance interactivity and user experience. Below is a concise overview of each action type and its configuration.

---

## Input – Set/Reset Value

Set or clear the value of an input component.  
**Typical uses:** Autofill search boxes, pre-fill user data, or clear fields after submission.

- Add the **Set Input Value** action to a component.
- Select the target input and specify a static value or bind data.
- Only input fields on the current page are supported. Rename fields for clarity if needed.

---

## List Actions

- **Scroll List:** Add the **Scroll List** action to a button to move to the previous or next item.
- **List Load More:** Add the **List Load More** action to a button or scroll event to load more data.
- **Scroll to Bottom:** Add the **Scroll to Bottom** action to a button to jump to the end of a list.

> Tip: Rename list components for easier configuration when multiple lists exist.

---

## Image – Fullscreen

Enlarge an image to full screen when clicked.

- Add the **Full-Screen Image** action directly to an image component.

---

## Video – Play, Pause, Stop

Control video playback (play, pause, stop).

- Add the action to a button or control.
- Select the video URL from a data source.
- Ensure the data source contains the video field.

---

## Animation – Lottie

Play, pause, or stop a Lottie animation.

- Add the action to a component.
- Select the target Lottie animation and specify the desired control.

---

## Conditional Container – Switch View

Switch between sub-views in a conditional container based on user actions.  
**Common scenarios:** Verification code timers, password visibility toggles, cart status changes.

- Ensure the page has a conditional container with multiple sub-views.
- Add the **Switch View** action to a component, specifying the target container and sub-view.
- If a button inside a sub-container triggers a switch but the new view doesn't meet the condition, the switch won't occur. External triggers override the condition temporarily.

