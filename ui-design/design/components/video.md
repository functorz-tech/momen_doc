# Video

### **Usage Scenarios**

When you need to play video content in your app, you can choose the video component to realize it.

### **Video Component Content**

#### **Local Upload**

When the video source is local upload, you can upload the local video. After uploading successfully, the video will be displayed below the local upload; click on the uploaded video, and you can play the video, view and confirm the content of the video, or re-upload.

#### **Data Binding**

When the video source is data bound, click the + sign to bind the video data requested from the database. The data must be of "Video Type" to add a binding, and only a single video can be bound.

![](<../../../.gitbook/assets/3 (64).png>)

### **Video Component Interactions**

#### **Action at the On Play Start**

You can configure the action of the video when it starts to play, for example, when it starts to play, it records that the user has viewed the video.

#### **Loop**

Off by default means the video will be looped automatically when it starts playing.

#### **Autoplay**

Off by default, means that the video will play automatically when you enter the page where the video is located.

Tips:

When configured on the web, video autoplay is a action that is disabled by most browsers by default, and there may be cases where the video is configured to autoplay, but the video does not autoplay when the user enters the page.

#### **Control & Mute Button**

They are turned on by default and refer to the functions of displaying the video's playback start/pause, volume control, playback speed control, picture-in-picture, and full-screen.

![](<../../../.gitbook/assets/4 (61).png>)

Tips:

full screen function will select horizontal and vertical screen according to the aspect ratio of the video, such as horizontal screen video, it will be played horizontally in full screen, vertical screen video will be played vertically in full screen

when the playback control is not turned on, even if you turn on the mute button, it will not be displayed

You can adjust the sound of the video by adjusting the sound of your phone, the sound of the video itself has only two options: mute and normal.

### **Object Fit**

You can adjust the video component using 3 different object fit options.

![](<../../../.gitbook/assets/5 (48).png>)

i. Contain

The video content will scale the video according to the ratio of the video component, if the video does not match the aspect ratio of the component, the rest of the space of the component will show the background color

ii. Fill

The video content will completely fill the size of the video component

iii. Cover

The video content fills the video component while maintaining its aspect ratio, if the video does not match the component's aspect ratio, the video will be cropped to fit the component.

The following figure shows how the same video will look like with different fill methods

Tips:

The fill method is only the display effect of the video, it will not change the video size.

### **Video Control Action**

You can add video control actions to the action on click of other components, see Media Resources｜Audio/Video for more details.

![](<../../../.gitbook/assets/6 (2).jpeg>)

If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.​​​​

### **About Momen​​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
