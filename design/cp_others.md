```description
Introduction and usage of some special components in Momen
```
```keywords
Progress Bar, Divider Line, Animation Component, Camera View, WeChat Ads, Map View, WeChat Follow Public Account, Calendar Component, Table Component
```
# System Components - Others
Others include: Progress Bar, Divider Line, Animation, Camera View, WeChat Ads (only for Mini Programs), Map View, WeChat Follow Public Account (only for Mini Programs), Calendar (only for web), Table (only for web)

## Progress Bar
Used to display a progress
### Configuration Instructions
1. Upload Lottie: Complete animation of the progress bar
2. Total Progress: Total frame count of the Lottie file, which can be found by opening the JSON file with a text document tool. Generally, the number after "op" in the first line is the frame count of this file.
3. Step Value: The smallest unit of change each time (frame)
4. Default Progress: The specific position displayed by the progress bar, must be numeric data, cannot be empty

## Map View
Please see: [Map View Component](/components-pages/map-view.md)

## Table (only for web)
Used to display data in a table, common application scenarios include:
1. Backend management systems: Managing user information, orders, product inventory, etc.
2. Reporting functions: Displaying sales data, performance indicators, or other statistical information.

<img src="https://docs.functorz.com/static/image/1713781724230-7c8d7134-69d3-4270-a28a-1d5e3bfce16a.png" width="100%">

### Configuration Instructions
1. Configure Data Source: Select the data table to be displayed in "Data". You can also drag the data columns to adjust the display order, check the data columns to be displayed, and perform data filtering.
<img src="https://docs.functorz.com/static/image/1713782330435-a1ae4178-9ab7-4cba-9154-efe67f581f59.png" width="100%">

>Various data displays and interactions in the Table Component
>- Display
>- Integer, Text, Date, Time, Infinite Precision Decimal types of data are displayed directly in the corresponding text style
>- Image type: Displayed as a thumbnail, can be clicked to view the large image
>- Boolean type: false is displayed as black text on a red background, true is displayed as white text on a green background
>- File type: Opens a new browser tab to display the file content
>- Video type: Opens a new browser tab to display the video content
<img src="https://docs.functorz.com/static/image/1713783830019-eca8bd9b-92b8-4031-a782-b88334f3454d.gif" width="100%">

#### Export Behavior
When a [Table] component is present on the page, you can select the "Export Table" behavior on other components on the page.

<img src="https://docs.functorz.com/static/image/1713844135916-009f2063-1f03-435c-9b58-5f41775ab3b9.png" width="100%">

## Calendar (only for web)
Used to display a calendar, with built-in light and dark color modes.
Show Today: Enabled by default, the calendar will display the current month and date.
<img src="https://docs.functorz.com/static/image/1701949028404-968e68df-7445-4254-b6cb-a360ef1e181d.png" width="100%">

### Configuration Instructions
1. Selected Date: Only supports data binding, not required
2. Behavior - Click Date Event: The behavior executed after clicking a date in the calendar

## Divider Line
Displays a divider line, with options for dashed, solid, and line segment direction.

## Animation
Used to display animations in Lottie format.
>A JSON-based animation data format developed by Airbnb's design team. It allows animations to be easily exported as small files that can be embedded into web pages, mobile apps, or other platforms.
Recommended Lottie animations can be found at: [https://lottiefiles.com/](https://lottiefiles.com/)

The Animation Component provides two interactive operations: "Loop" and "Autoplay":
- Loop: Disabled by default, when enabled, the animation effect will loop.
- Autoplay: Enabled by default, the animation content will automatically play when entering a page with an animation component.

## Camera View (only for Mini Programs)
For scenarios where taking photos is required, such as posting on social media or taking ID photos for verification, the [Camera View] component is needed to assist in completing the photo-taking action.
When the [Camera View] component is added to a page, a prompt will appear as shown below ⬇️ asking whether to allow the use of the phone's camera. Once allowed, the phone's camera will be activated to display the camera's real-time view.
<img src="https://docs.functorz.com/static/image/1675252816115-bf9819fa-ea7a-43f5-976e-bedcb1638653.png" width="300">

### Configuration Instructions
1. Device Position: Using the rear camera/front camera
2. Flashlight:
   - Auto: Determines whether to turn on the flashlight based on the brightness of the light
   - On: Turns on the flashlight after clicking to take a photo (triggered by the photo-taking action in the Mini Program)
   - Off: Keeps the flashlight off
   - Always On: Keeps the flashlight on
3. Resolution: Low/Medium/High
4. Camera Frame Data Size: Small/Medium/Large

### Special Instructions
1. Implementing the photo-taking function
Note that the [Camera View] component only displays the phone's camera view. To implement photo-taking, it needs to be paired with [Camera Actions](/actions/camera.md).

## WeChat Ads (only for Mini Programs)
The ad slot component is used by [Mini Program Traffic Owners]. Using this component is ineffective without enabling the Mini Program Traffic Owner feature. An ad ID needs to be configured.

## WeChat Follow Public Account (only for Mini Programs)
Displays the public account follow component associated with the Mini Program. Clicking this component will guide users to follow the public account linked to the Mini Program.
>This component does not require configuration and will display the public account bound to the Mini Program by default. For binding instructions, please search for publicly available content online.
```