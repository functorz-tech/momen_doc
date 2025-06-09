---
description: >-
  Understand the full lifecycle of the Momen application development platform,
  including product requirement analysis, design, development, deployment, and
  operation.
---

# Software Development Process

Momen is a no-code application development tool. Using Momen for software development also requires following the basic software development process.

## Process Overview

1. **Requirements Analysis:** This is the crucial first step in application development, where you need to clearly outline what you want to achieve before starting.
2. **Build Data Model:** This step can be challenging for users without no-code experience, as it requires some basic knowledge of data models.
3. **Design UI:** Design the interface based on product requirements.
4. **Development:** Use Momen to build the data model, set up the UI, and implement software interactions through action configuration.
5. **Publish Application**
6. **Maintain and Manage Application**

The following sections provide a detailed introduction to each step.

## What is an Application

An application is a software tool designed to solve a specific problem, featuring a user interface that allows users to perform various operations such as data creation, retrieval, update, and deletion. To build an application, you need to outline clear logic based on the problem you want to solve, design appropriate data models, complete UI setup, configure event interactions, and finally publish, launch, and manage the application.

## Requirements Analysis

Requirements analysis involves clarifying the functionalities of your application and determining which content and functionalities are presented on which pages. We recommend using a mind map to organize pages and functionalities, then proceeding to the next step of data model design and page setup based on the organized mind map.

Before you can clearly outline product requirements, consider the following:

### Versioned Design Approach

Whether for a team or an individual, it is challenging to detail all functional requirements of an entire application at once and start implementation. Additionally, with changes in the market and business, requirements may need to change at any time. By planning versions, you can first focus on providing a core set of functionalities and then gradually enhance and expand your application based on your roadmap and actual market or user feedback.

### Clarify Core Functions and Problems

Core functions or problems refer to the core business logic that the application software aims to address, namely what your application is supposed to do. For example, in a personal knowledge payment platform, the core user functions are course content display, course ordering, payment, and course content viewing; for the platform manager, the core functions are course content upload, modification, user order viewing, and sales viewing.

### Refine Core Functions

Once the core functions are determined, the next step is to refine the details of each core function. For example, you can research similar software, review the content of each core function, and then organize them based on your actual needs. Alternatively, you can design your core functions according to your own research findings.

### Plan User Journey

A user journey represents a series of steps or interactions a user takes in your application or website to achieve a specific goal. By planning these journeys, you can ensure users achieve their goals conveniently and efficiently along a predetermined path.

## Build Data Model

After completing the product requirements analysis, you have determined which functionalities your application software needs. Now it is time to start building the data model. When designing a data model, it is generally recommended to use pen and paper or visualization tools for recording and design. We recommend following the design steps below for data model design.

![data modeling](../.gitbook/assets/designdatamodel.png)

### Identify Objects

Before starting to design the data model, you should have outlined the business requirement list and created either a high-fidelity or low-fidelity diagram of the application.

### Determine Key Attributes

After identifying the objects, the next step is to determine key attributes for each. In the previous section refining core functions, you have likely already defined many key attributes. When designing the data model, ensure you accurately name each object and its attributes to clearly distinguish them.

### Add Relationships

Next, establish relationships between objects (i.e., tables) so they can reference each other's data. At this point, consider the following questions:

1. What type of relationship do they have? Is it 1:1, 1:N, or M:N?
2. Which object is the referenced party, and which is the referencing party?

### Build Data Model in Momen

The data model is the core of any application. We recommend designing the data model using a UML diagram and confirming that there will be no significant changes before building your data model in Momen.

## Design User Interface

User interface and interaction design include user interface (UI) and user experience (UX).

**UI** stands for "User Interface." UI refers to the specific interface that users see and interact with when using software, websites, or applications. Key aspects of UI include the visual design and layout of elements such as buttons, text, images, and input fields on the screen. A good UI design should be aesthetically pleasing, intuitive, and clear, enabling users to navigate and interact with your product easily.

**UX** stands for "User Experience." UX has a broader scope, referring to the overall experience users have when using a product. This includes not only the interface itself but also users' feelings, efficiency, and satisfaction while using the product. The goal of UX design is to ensure that the product is not only easy to use but also delivers a pleasant experience throughout.

When designing application software, keep two key points in mind:

- The application software should look aesthetically pleasing and consistent to highlight your features and brand.
- It should be easy to understand and operate. If you are not a professional designer, we suggest referring to design platforms or already launched applications for inspiration.

### Build UI in Momen

Momen offers a proprietary visual editor and multiple components, allowing pixel-level restoration of design drafts and enabling you to design your application with a what-you-see-is-what-you-get approach. For details, see [Build UI](../design/). You can add and move components by dragging them on the left side, and you can design styles, bind data, and add interactions in the right toolbar.

## Configure Interactions to Implement Data CRUD

After completing the data model design and setup, as well as UI design and setup, it's time to configure actions to implement data CRUD operations.

### Build Interactions and Data Operations in Momen

Click on each component or page and check the right configuration bar—behavior section—to configure corresponding actions for them. For a specific list of actions, see [Actions Configuration](../actions/overview.md) and [Data](../data/overview.md).

## Publish Application and Maintenance

Once you have completed all application development and setup, you need to launch your application so it can be accessed and used by users. For publishing applications on Momen, see [Application Deployment](../deployment/publish.md).
