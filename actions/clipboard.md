---
description: >-
   After clicking on the component configured for this action, you can copy the content directly filled in the action or bound to it to the clipboard of the phone.
---

# Set Clipboard

The **Set Clipboard** action allows users to copy specified text—either static or dynamically bound—to their device's clipboard with a single click. This feature streamlines the process of sharing or reusing information within or outside your app.

## How to Use

1. Add the **Set Clipboard** action to a component (such as a button).
2. In the action settings, specify or bind the text you want to copy.
3. (Recommended) Add a **Show Toast** action immediately after to notify users that the content has been copied.

| ![Copy to clipboard example](../.gitbook/assets/2%20(69).png "Copy to clipboard") | ![Clipboard toast feedback](../.gitbook/assets/3%20(11).gif "Clipboard toast feedback") |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |

| ![Set clipboard action config](../.gitbook/assets/0%20(46).png "Set clipboard action configuration") | ![Bind text to clipboard](../.gitbook/assets/1%20(84).png "Bind text to clipboard") |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |

---

## Notes

- Only text-type data is supported.
- The action does not support copying images or files.
- For best user experience, always provide feedback (such as a toast notification) after copying.