---
description: Introduction and usage of some special components in Momen
---

# Component - Others

Others include: Progress Bar, Divider Line, Animation, Camera View, Map, Calendar, Table.

## Progress Bar

Used to display progress.

### Configuration Instructions

1. **Upload Lottie:** Upload a Lottie animation file for the progress bar.
2. **Total Progress:** The total frame count of the Lottie file. You can find this by opening the JSON file in a text editor—look for the value after `"op"` in the first line.
3. **Step Value:** The smallest unit of change (frame) for each update.
4. **Default Progress:** The initial position of the progress bar. Must be a numeric value and cannot be empty.

## Map

See: [Map](map.md).

## Table

Used to display data in a table. Common scenarios include:

1. Backend management systems: Managing user information, orders, product inventory, etc.
2. Reporting: Displaying sales data, performance indicators, or other statistics.

![Table component example](../.gitbook/assets/0%20(3).png)

### Configuration Instructions

1. **Configure Data Source:** Select the data table in the "Data" section. You can drag columns to adjust their order, select which columns to display, and apply filters.
   ![Table data configuration](../.gitbook/assets/2%20(2).png)

> **Table Component Data Display and Interactions:**
>
> - Integer, Text, Date, Time, and Infinite Precision Decimal types are displayed as text.
> - Image type: Displayed as a thumbnail; click to view the full image.
> - Boolean type: `false` is shown as black text on a red background; `true` as white text on a green background.
> - File type: Opens in a new browser tab.
> - Video type: Opens in a new browser tab.
>   ![Table display example](../.gitbook/assets/3.gif)

#### Export Table Data

When a Table component is present, you can use the "Export Table" action on other components.

![Export table action](../.gitbook/assets/4%20(2).png)

## Calendar

Displays a calendar with built-in light and dark modes.  
**Show Today:** Enabled by default; the calendar displays the current month and date.

![Calendar component in a no-code tool](../.gitbook/assets/1%20(13).gif)

### Configuration Instructions

1. **Selected Date:** Supports data binding (optional).
2. **Action - Click Date Event:** The action executed after clicking a date.

## Divider Line

Displays a divider line, with options for dashed, solid, and direction.

## Animation

Displays Lottie-format animations.

> Lottie is a JSON-based animation format developed by Airbnb. It allows animations to be exported as small files that can be embedded in web pages, mobile apps, or other platforms. Find recommended Lottie animations at [lottiefiles.com](https://lottiefiles.com/).

The Animation component provides two interactive options:

- **Loop:** Disabled by default. When enabled, the animation loops.
- **Autoplay:** Enabled by default. The animation plays automatically when the page loads.

## About Momen

[Momen](https://momen.app/?channel=momen-docs) is a no-code web app builder that allows users to build fully customizable web apps, marketplaces, social networks, AI apps, enterprise SaaS, and more. You can iterate and refine your projects in real time for a seamless creation process. Momen offers powerful API integration, enabling you to connect your projects to any service. With Momen, you can bring your ideas to life and launch web app products faster than ever.
