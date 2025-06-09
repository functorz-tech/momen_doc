---
description: >-
  This doc will help you understand Momen's basic functions and get you started quickly.
---

# Welcome to Momen

Momen is a no-code development tool with complete capabilities for software building, deployment, and subsequent operations. The Momen Help Documentation helps you quickly get started and begin building applications. It is an important reference in your learning journey.

## Getting Started Video

Watch the 5-minute video to quickly get started with Momen. [👉 Build an App from Data to Logic to UI Design](https://www.youtube.com/watch?v=73-cLQWTWMk&t=33s&ab_channel=Momen)

## Momen Product Worldview

We divide application development into three parts: building, publishing, and maintenance. Core application building is divided into UI building, data processing, and action configuration. After completing all the building, you can proceed to application publishing. Once online, you can view data and resource consumption, and then manage and maintain the application.

> If you have no coding experience, we recommend following the tutorial order. If you are a software engineer or familiar with other no-code development tools, you can read the brief version of the documentation below and start building directly.

## Application Building

Let's start with application building.

### Building UI

1. **Three Positioning Methods**  
   When building pages, using positioning methods effectively helps create better layouts. Momen supports three positioning methods: relative, absolute, and fixed.
   - Use relative positioning to arrange all components in order within their parent container, with positions determined relative to siblings or the parent.
   - Adjust the parent container's style (such as a page or View component) to set layout direction, arrangement, and spacing. Enable "wrap" on the parent container to allow child components to wrap when reaching the layout boundary.
   - Use absolute positioning to fix a component's position relative to its parent, unaffected by siblings. For example, add an identity badge on a user card, set its position to "absolute," and specify the distance from the parent container's border.
   - Use fixed positioning to keep a component fixed relative to the page, such as a navigation bar always at the top, visible during scrolling.

2. **Conditional View**  
   To display different UIs in different scenarios, use the Conditional View component. Drag in a Conditional View, add cases, set conditions, and build the UI for each case. For example, show a login button when not logged in, and show user info after login.

### Processing Data

1. **Relationship Tables**  
   After learning advanced UI configuration, move to data interaction. In the basic tutorial, you learned to create a data model and generate tables. In real scenarios, tables are often related, such as schools and students, or accounts and published content. You can create one-to-one or one-to-many associations between tables. For example, a one-to-many association between the user table and the post table allows you to find all posts by a user or the publisher of a post.

2. **Using API to Obtain External Data**  
   Besides database data, Momen supports obtaining external data via API. Create an API, set the request method according to the external interface, and after configuration, select the API as the data source for components that need it.

3. **Data Usage**  
   List components and Select View can directly use tables or APIs as data sources for dynamic display. Other components that need to display database data must declare remote data on the page first. After filtering, components can bind to remote data via "In-component data - remote data." Remote data declared on the page is accessible to all components on that page.  
   When fetching server data, you can sort, filter, and deduplicate to save requests and improve performance. In practice, you may need different filters for different scenarios. For example, in a post list, clicking "follow" shows related posts, clicking "discover" shows all posts. Use conditional filtering to set rules for each case.

4. **Conditional Data and Formula**  
   Momen's data binding supports displaying different data under different conditions and formula processing, including math, string, and date/time operations. For example, on a personal homepage, if the user hasn't filled in a profile, show a default prompt; otherwise, show the user's profile.

### Configuring Actions

After introducing data sources and usage, let's discuss data writing, which is handled by Actions. Data writing uses the built-in "Request - Mutation" Action. Bind this Action to a component to write data from the page to the database.

1. **Custom Actions via API**  
   Momen provides over 100 built-in Actions, such as executing AI, payment, sharing, navigation, and various operations on pages or components. For more advanced needs, you can customize Actions via the API function, then execute the API using the "Request - Call API" Action.

2. **Actionflow**  
   In real scenarios, you may need complex workflows for data operations, permissions, etc. Use Actionflow, which integrates multiple node types: database CRUD, third-party API calls, code blocks, AI execution, etc. Like configuring Actions for frontend events, Actionflow supports conditional branches for complex logic.  
   Actionflow can be triggered by button clicks or automatically via three triggers: Schedule, Database Changes, and Webhook.

3. **AI Action, Login Action, Payment Action**
   - **AI Action:** Before using AI Action, configure M-AI. Each M-AI is an independent AI tool supporting LLM selection, prompt configuration, database context, tool invocation, and output format. After configuring and debugging M-AI, use AI Action to call it on the frontend or in Actionflow.
   - **Login Action:** Similar to AI Action, Login Action requires prior login configuration (Settings - Login). Momen supports multiple login methods: Username, Email, Phone Number, and SSO for professional users. After configuration, add Login Action to components to design the login system.
   - **Payment Action:** Payment Action is available for Pro Plan users. Momen has built-in Stripe Payment Action. Use it on frontend components to enable payment, refund, and other operations. For details, search "Payment."

## Publishing and Maintenance

After building your application, proceed to publishing and maintenance.

1. **Permission Configuration**  
   Before publishing, configure permissions to control access and operations for different user roles on tables, APIs, and Actionflows. Use the permission management function: open Settings - Permission Configuration, create roles, and set permissions for each. Momen supports row-level permission control.

2. **Custom Domain**  
   After completing UI, data, Action building, and permission configuration, click "Publish." Momen provides a free domain. To enhance brand credibility and SEO, configure a custom domain (available for Basic Plan and above).

3. **Computing Resource Management**  
   As your app runs, user numbers and server resource consumption will increase, especially during high concurrency and data outflow. Monitor resource usage in real time on the Project Detail panel. Momen provides resources for each version. When resources are low, you'll receive email and in-app reminders. Upgrade your plan, purchase resource packages, or single-tenant servers to maintain normal operation.

## 🥳 [Start Building Now ➡️](https://momen.app)