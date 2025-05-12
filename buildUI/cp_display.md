---
description: >-
  Introduction to the usage scenarios and configuration methods of Text Component, Button Component, Image Component, Video Component, and Rich Text Component.
---

# System Components - Display

This category includes the following components: Text, Button, Image, Video, Rich Text, HTML.

## Text

Used to display content such as text, numbers, dates, and times.

### Text Source:

* **Static Input**: Manually enter static data.
* **Data Binding**: Bind data of the Text type.

### Text Style Settings:

You can set the font, size, line height, weight, letter spacing, color, etc. If the text is too long and exceeds the component's width, causing incomplete display, you can enable the "Multiline" configuration to allow automatic line wrapping.

## Button

Used to trigger a specific action (only supports click events), such as adding data, navigating to a page, etc.

> Only text can be displayed on the button. If you need a button with an icon, you can use the View component or Image component to achieve this.

## Image

### Image Source:

* **Local Upload**: Upload from the local computer. Supported formats: jpg, png, webp, gif. The width or height of the image cannot exceed 30,000 px, and the total pixels cannot exceed 250 million px (the calculation method for gif animations is width * height * number of frames; for other non-dynamic images, it is width * height). **Size cannot exceed 20 MB**.
* **Data Binding**: Dynamically bind data of the Image type.
* **Link**: Directly display images using a link, generally used to display images from external systems.

### Image Settings:

* **Auto Compression**: Downloading images consumes Data Outflow. Enabling this configuration will reduce Data Outflow consumption.
* **Display Mode**: There are two options: "Full Image" and "Fill Space".
  * Full Image: Display the complete image within the component. The image will be scaled proportionally, and the area outside the image will show the background color.
  * Fill Space: The image fills the entire component, and the part exceeding the component will be cropped.

### Image Actions:

The Image component is equipped with a "Fullscreen Image" behavior, supporting functions such as zooming, downloading, forwarding images, and recognizing QR Codes. For details, please see [Component Management](../actions/component-management.md).

## Video

### Video Source:

* **Local Upload Video**: Upload from the local computer.
* **Data Binding**: Dynamically bind data of the Video type.
* **Link**: Directly play videos using a link, including video live streaming addresses (including HLS video streams, etc.).

### Video Settings:

* **Loop**: Default is off, meaning the video will automatically loop playback after it starts playing.
* **Autoplay**: Default is off, meaning the video will automatically play when entering the page where the video is located.
* **Playback Control, Mute Button**: Default is on, meaning it shows the functions of video playback start/pause, volume control, playback speed control, picture-in-picture, and fullscreen.

### Video Playback Control:

You can configure behaviors triggered "when playback starts" in the behavior settings, or add video control behaviors in the "onClick" of other components. For details, please see [Component Management](../actions/component-management.md).

## Rich Text

### Rich Text Data Source:

* **Static Data**: Manually input in the right sidebar.
* **Dynamic Data Binding**: Bind data of the Text type.

## HTML

This component supports referencing an external website via iframe or directly writing HTML code to display custom content.

If using the iframe method, you only need to fill in the URL of the referenced page. If you want to add custom HTML code, please note the following points:

* **`<script>` tags are not supported**, scripts cannot be run, so this component is usually only used for writing HTML structure and CSS styles.
* Supports binding data within the Project, allowing dynamic content display.
* Complete HTML page code is not needed, only necessary code snippets are required (see the example below).

Next, we will use custom HTML code to achieve a "text marquee effect". The complete code is as follows, showing only simple structure and style, and referencing data within the Project, achieving dynamic content and text color.

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