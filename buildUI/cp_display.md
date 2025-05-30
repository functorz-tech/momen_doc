---
description: >-
  Introduction to the usage scenarios and configuration methods of Text Component, Button Component, Image Component, Video Component, and Rich Text Component.
---

# System Components - Display

This category includes the following components: Text, Button, Image, Video, Rich Text, and HTML.

## Text

Used to display content such as text, numbers, dates, and times.

### Text Source

- **Static Input:** Manually enter static data.
- **Data Binding:** Bind data of the Text type.

### Text Style Settings

You can set the font, size, line height, weight, letter spacing, color, and more. If the text is too long and exceeds the component's width, enable the "Multiline" option to allow automatic line wrapping.

## Button

Used to trigger a specific action (supports only click events), such as adding data or navigating to a page.

> Only text can be displayed on the button. If you need a button with an icon, use the View or Image component to achieve this.

## Image

### Image Source

- **Local Upload:** Upload from your computer. Supported formats: jpg, png, webp, gif. The width or height cannot exceed 30,000 px, and total pixels cannot exceed 250 million px (for GIFs: width × height × frames; for others: width × height). **File size cannot exceed 20 MB.**
- **Data Binding:** Dynamically bind data of the Image type.
- **Link:** Display images using a URL, typically for images from external systems.

### Image Settings

- **Auto Compression:** Downloading images consumes Data Outflow. Enabling this reduces Data Outflow consumption.
- **Display Mode:** Two options:
  - **Full Image:** Displays the complete image within the component, scaled proportionally. The area outside the image shows the background color.
  - **Fill Space:** The image fills the entire component, cropping any part that exceeds the component's bounds.

### Image Actions

The Image component supports a "Fullscreen Image" behavior, enabling zoom, download, image forwarding, and QR code recognition. For details, see [Component Management](../actions/component-management.md).

## Video

### Video Source

- **Local Upload:** Upload video files from your computer.
- **Data Binding:** Dynamically bind data of the Video type.
- **Link:** Play videos using a URL, including live streaming addresses (e.g., HLS streams).

### Video Settings

- **Loop:** Default is off. When enabled, the video will loop automatically.
- **Autoplay:** Default is off. When enabled, the video will play automatically when the page loads.
- **Playback Controls & Mute Button:** Default is on. Shows controls for play/pause, volume, playback speed, picture-in-picture, and fullscreen.

### Video Playback Control

You can configure behaviors triggered "when playback starts" in the behavior settings, or add video control behaviors to the "onClick" event of other components. For details, see [Component Management](../actions/component-management.md).

## Rich Text

### Rich Text Data Source

- **Static Data:** Manually input in the right sidebar.
- **Dynamic Data Binding:** Bind data of the Text type.

## HTML

This component supports referencing an external website via iframe or directly writing HTML code to display custom content.

If using the iframe method, fill in the URL of the referenced page. If adding custom HTML code, note:

- **`<script>` tags are not supported**; scripts cannot run. This component is mainly for HTML structure and CSS styles.
- Supports binding data within the project for dynamic content display.
- You do not need to write a complete HTML page—only the necessary code snippets (see example below).

**Example: Custom HTML Marquee Effect**

The following code creates a text marquee effect, referencing project data for dynamic content and text color.

```html
<div class="marquee">
  <div>
    <span>{{Data Source/slogan/content}}</span>
    <span>{{Data Source/slogan/content}}</span>
  </div>
</div>

<style>
.marquee {
  height: 25px;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.marquee div {
  display: block;
  width: 200%;
  height: 30px;
  position: absolute;
  overflow: hidden;

  animation: marquee 5s linear infinite;
}

.marquee span {
  font-size: 24px;
  color: {{Data Source/slogan/color}};
  line-height: 24px;
  font-weight: 500;
  float: left;
  width: 50%;
}
@keyframes marquee {
  0% { left: 0; }
  100% { left: -100%; }
}
</style>
```