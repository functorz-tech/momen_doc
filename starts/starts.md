---
description: >-
  This doc will help you understand Momen's basic functions and get your started
  quickly.
---

# Welcome to Momen
Momen is a no-code development tool with complete capabilities for software building, deployment, and subsequent operations. The Momen Help Documentation aims to help you quickly get started and begin building applications. It is an important reference in your learning journey.

### Getting Started Video
Watch the 5-minute video to quickly get started with Momen. [👉 Build an App from Data to Logic to UI Design](https://www.youtube.com/watch?v=73-cLQWTWMk&t=33s&ab_channel=Momen)


## Momen Product Worldview 
We divide application development into three parts: building, publishing, and maintenance. The core application building is divided into UI building, data processing, and actions configuration. After completing all the building, you can proceed to application publishing. Once online, you can view online data and resource consumption, and then manage and maintain the application.
> It is recommended that those without coding skill study in the order of the tutorial. If you are a software engineer or are familiar with other no-code development tools, you can try reading the brief version of the help documentation below and start building directly.

### Application Building
Let's start with application building.
#### Building UI
1. **Using Three Positioning Methods**
* In page building, using positioning methods reasonably can more effectively build application layouts. Momen supports three positioning methods: relative, absolute, and fixed. If you want all components to be orderly arranged within their parent component, with component positions determined relative to their sibling components or parent component, you can use relative positioning. By adjusting the style of the parent Container (such as a page or View component), you can adjust the layout direction, arrangement method, and spacing size of all child components within it. Open the "wrap" of the parent Container, and the child components will continue to wrap when reaching the bottom in the layout direction.
  
* If you want a component to be fixed in a certain position relative to its parent component, unaffected by other sibling components, you can use absolute positioning. For example, adding an identity badge on a user card, set the position to "absolute," and then fill in the absolute distance relative to the parent Container's border. This way, it will be fixed at that absolute position point of the parent Container.
* If you need to keep a component fixed at a certain position relative to the page, just change the position type to "fixed" and fill in the absolute distance relative to the page once more, achieving position fixation at the page level. For example, a navigation bar always fixed at the top of the page, remaining visible regardless of page scrolling.
2. **Conditional View**   
When designing applications, we often want to Display different UIs based on different situations. At this time, you can use the 'Conditional View' component to achieve this. Drag in a Conditional View, add cases and set corresponding conditions, then build the corresponding UI under each case Container, so you can Display different content under different conditions. For example, Display a login button when not logged in, and Display user information after successful login.


#### Processing Data

1. **Establishing Relationship Tables**     
After learning advanced UI configuration, we come to the data interaction part. In the basic tutorial, we learned how to create a Data model and generate corresponding tables. In real application scenarios, we have many scenarios where tables are related, such as schools and students, Accounts and content published by each Account, etc. At this time, you can establish a One-to-one association or One-to-many association between two tables to achieve data association between tables. In the example, we established a One-to-many association between the user table and the post table, so you can find all the posts published by an Account through a certain Account, or find its publisher through a post.

2. **Using API to Obtain External Data Sources**    
In addition to obtaining data from the Database, Momen also supports obtaining external data through API. Just create an API, set the corresponding Request method according to the external API interface, and after successful configuration, you can directly select the API as the Data source on the component that needs to bind the Data source.

3. **Data Usage**     
List components and Select View can directly select tables or API as Data sources for dynamic data Display or use, while other components that want to Display data from the Database need to declare a remote data on the page first. After data filtering, other components can achieve dynamic data binding through 'In-component data-remote data'. Remote data declared on the page can be called by all components on that page.      
Earlier, we mentioned that when obtaining server-side data, you can sort, filter, and de-duplicate the obtained data to save Request volume and improve application performance. In real applications, we may need to perform different data filtering based on different situations. For example, the same post List, click follow to Display related posts I follow, click discover to Display all posts. At this time, we need to use the conditional filtering function to set corresponding conditions for different cases and configure corresponding filtering rules.

3. **Conditional Data and Formula**   
Momen's Data binding supports configuring different data to be Displayed under different conditions, and also supports formula processing of data, currently supporting multiple types of operations such as mathematics, strings, and date & time. For example, on the personal homepage, the user's personal profile is bound to a Conditional data. When the user has not filled in the profile information, the default Display is "they are lazy, wrote nothing" prompt, and after filling in the information, the content of the personal profile filled in by the user is Displayed.

#### Configuring Actions
After introducing the Data source and data usage, let's talk about data writing, which falls under the category of Actions. This also begins our advanced teaching of Action interaction. Data writing corresponds to our built-in "Request - Mutation" Action. You can bind this Action to a component to achieve writing certain data on the page into the Database.

1. **Using API to Customize Actions**    
Momen has built-in over 100 Actions, such as executing AI, Payment, Share, Navigation, and various operations on pages or components, to meet common needs for Action interaction building. But if you have more expected Actions to configure, you can customize Actions through the API function. Then execute the API through the "Request-Call API" Action. 

1. **Actionflow**      
In real application scenarios, we may need to configure complex workflows to handle a series of data operations, permission operations, etc. At this time, you can use our Actionflow function. It integrates multiple node types, including Database CRUD, third-party API calls, code block nodes, executing AI, etc. Similar to configuring Actions triggered by front-end events, Actionflow also supports configuring conditional branches to handle complex branching logic.       
In terms of use, Actionflow can be triggered not only by button clicks but also supports automatic triggering through three Triggers: Schedule, Database Changes, and Webhook.

1. **AI Action, Login Action, Payment Action**
  -  AI Action: Before using AI Action, you need to use the M-AI function for AI configuration. Each M-AI represents an independent AI tool. M-AI is a powerful AI agent configuration tool that supports LLM selection, prompt configuration, Database context, tool invocation, and output format configuration. After configuring and successfully debugging a M-AI, you can use AI Action to call the M-AI on the front-end page or in Actionflow.

  -  Login Action: Similar to AI Action, Login Action also require prior login configuration (Settings-Login). Momen currently provides multiple login methods, such as Username Login, Email Login, and Phone Number Login, to meet different scenarios. It also provides SSO login for professional users. After completing the login configuration, you can add corresponding Login Action to the corresponding components to design the login system.

  -  Payment Action: Payment Action is a commercial capability for Pro Plan users. Momen has built-in Stripe Payment Action,You can use Payment Action on front-end components to allow your users to complete Payment, refund, and other operations. For specific usage methods, you can search for "Payment" .



### Publishing and Maintenance
After completing application building, proceed to the application publishing and maintenance stage.
1. **Permission Configuration**     
Before publishing, to ensure data security of the application, we need to do a good job of permission configuration to control the access and operation permissions of different identity users to each table, API, and Actionflow when accessing the application. At this time, you need to use the permission management function. Open Settings-Permission Configuration, create roles first, and then configure specific permissions for each role. Momen currently supports "row-level" permission control.

2. **Custom Domain**    
After completing UI, data, Action building, and permission configuration, click "Publish," and Momen will provide a free domain address. However, if you want to enhance your brand credibility and improve search engine ranking, you can configure a Custom domain. This feature is available for Projects with Basic Plan and above.

3. **Computing Resources Management**          
As the application goes online and runs, the number of users and consumed Sever resources will gradually increase, especially during high concurrency and high Data Outflow periods, resource consumption will increase significantly. We can monitor all Computing resources consumption in real-time on the Project Detail computing monitoring panel. Momen provides corresponding Computing resources for each version. When one or more resources are insufficient, we will send  email and in-app message reminders. At this time, you can upgrade the version, purchase Computing resources packages separately, and purchase single-tenant Sever to supplement Computing resources to maintain the normal operation of the application online.
## 🥳[【Start Building Now ➡️】](https://momen.app)