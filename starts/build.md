---
description: >-
  When developing applications on the Momen platform, it is essential to plan the application building unit process carefully to ensure that each unit and the entire Project function correctly. The platform supports the development, debugging, and publishing of both mini-programs and web pages, enhancing team collaboration and application management efficiency.

keywords: >-
  Momen application development, application building unit, mini-program development, web development, Project management, testing and debugging, publish application, collaborative development
---


# Application Development on Momen
When developing applications, we recommend that you carefully plan the application building process by designing it into individual units. Each unit includes the construction of certain pages or features within the application. Upon completing a page or a specific feature on a page, it is necessary to test whether the page design meets expectations and whether the page functions operate correctly. After completing the design and construction of a unit, it is also necessary to test the accuracy of the entire unit's design.
Once each unit has been successfully built and tested, a final operational test of the entire Project is required. At this point, you can also invite clients or team members to participate in the testing experience, providing feedback on usage or issues to further refine the application.

## Create an Application
Currently, Momen applications are divided into two types: [mini-programs] and [web pages]. You can create a blank Project and start building from scratch, or you can choose a template to modify or use directly based on the template.

<img src="https://docs.functorz.com/static/image/1708673004929-239f93f6-d340-465a-9dd5-c2f9eda010bd.png" width="100%">

> **Tips:** Templates inherently have many data dependencies and pre-designed business logic. It is recommended to modify and use them after acquiring a certain level of Momen knowledge.

**When creating a Project, you can directly choose a more advanced version to start development**

<img src="https://docs.functorz.com/static/image/1708928882515-42ad6d62-3e21-453e-b141-d4f083a3cf24.png" width="100%">

**You can build both [mini-program] and [web page] applications within a single Project, and they can share the same [Database]**
After entering the Project, click on the Project name at the top of the Editor interface to switch between the [mini-program] and [web page] clients.

<img src="https://docs.functorz.com/static/image/1684227875204-0d8a668e-0d7b-4a12-b62a-1febc1ed1df1.png" width=200px>

## Collaborative Development
You can share the Project with your peers to collaborate or provide them with creative inspiration.

<img src="https://docs.functorz.com/static/image/1708673214611-077b01db-770f-4fa3-893d-ac4088fd431c.png" width="100%">

## Debugging Applications
### Prepare Test Data
Test data is essential when building applications.
For example, for the "Create New Course" unit we split above, we first need to design and create the corresponding **Data model** in Momen. After completing the corresponding page construction and interaction binding in Momen, we need to test the functionality of that unit. At this point, it is necessary to prepare relevant data such as the name of the course collection and cover images in advance to test the functionality.
If the data of your designed application is not uploaded through the front-end page construction, you can also add data directly in Momen's **Database**.
### Intelligent Validation
Through [Intelligent Validation], you can verify whether your configuration is incorrect to ensure the correctness of your Project.

<img src="https://docs.functorz.com/static/image/1684229602400-4ab07b5a-1b36-4c14-bd2d-390a297cc7dc.png" width="100%">

### Mirror & Pre-Publish
After completing the unit division, the next step is to implement the construction one by one. During the construction process, we hope to be able to view the actual results of the construction at any time. Momen provides two preview methods: "Mirror" and "Pre-Publish."

**1. Mirror**     
Click the [Mirror] button in the upper right corner of Momen's Editor to view your construction results in real-time within the Editor, including the page design display and interaction, allowing for timely correction and optimization.      

**2. Pre-Publish:**     
Click the [Publish] button in the upper right corner of Momen's Editor to perform a pre-publish and obtain the application's test address.

- For mini-programs, you can download the code package and debug it in the WeChat Developer Tools, or you can directly use your phone to scan the code and experience and test the corresponding application on a real device.
- For the web version, you can directly click the pre-publish link or scan the code to access your website.
  
## Publish Application
Once your Project is completed, you can click the [Publish] button to publish your application online. After going online, your mini-program Project can be searched and used in WeChat, and the web Project can be browsed via a URL.     

**Mini-Program:**    
Before publishing, it needs to be submitted to WeChat for review, and it can only be published after passing the review.
<img src="https://docs.functorz.com/static/image/1684230084260-83201759-9d28-47fb-923f-2ba03f485e5a.png" width="100%">

**Web:**    
The [Published] Project can also customize its own domain name.

<img src="https://docs.functorz.com/static/image/1684229986385-5faf7d24-d6dd-44c1-8a0d-af0ea0fc9cd9.png" width="100%">

## Manage Application
On the User center page, you can view the details of the application's Computing resources usage, perform version upgrades, or purchase Computing resources. Pro Plan applications can also add [Multi-Clients](../deployment_scale/multiple-frontends.md).

<img src="https://docs.functorz.com/static/image/1708673442237-5f70c860-6961-4c78-b1c1-383242345a9e.png" width="100%">
```