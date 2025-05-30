---
description: >-
  Provides the capability to create Custom Components, allowing users to save
  configured components as Custom Components and add them to the left sidebar
  component library. Users can reuse them in multi
---

# Custom Component

## Overview

Custom Components allow you to save configured components for reuse throughout your project. This feature streamlines UI building, especially as application complexity grows, by enabling you to add reusable components to the left sidebar component library.

## Benefits

1. **Reusable Across Pages:** Once saved, a Custom Component can be dragged onto any page within the project.
2. **Collaborative Efficiency:** Project collaborators can use saved Custom Components, improving team productivity.

## Typical Scenarios

Common reusable components include navigation bars, product lists, and user info panels. Build the UI once, save it as a Custom Component, and then drag it from the left sidebar's Custom Component library to use on other pages.

![Custom Component example](../.gitbook/assets/customCP.png)

## How to Use

1. **Create:**  
   Select a component, then save it as a Custom Component via the right-click menu or the shortcut `Cmd+Shift+K`. All content, style, data configuration, and action configuration structures are saved. If there are data dependencies in the configuration, you must delete and reconfigure those items.

   ![Add Custom Component](../.gitbook/assets/addcustomCP.png)

2. **Fill in Information:**  
   In the Custom Component panel, a preview image is generated automatically (you can upload your own). Name the component and add a description. Click save to add it to the left sidebar under Custom Components.

3. **Reuse:**  
   Drag or double-click the saved component from the left sidebar to add it to other pages. If you have many Custom Components, use the description in the upper right to find the one you need.

## Limitations

1. Each project can save up to 1000 Custom Components.
2. Editing the style of a Custom Component after saving is not supported.
3. Custom Components cannot be used across different projects.
