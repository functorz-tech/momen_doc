# Actions
Action refers to a series of event sets and is one of the fundamental elements of building software. By properly configuring actions, users can implement app interactions such as page navigation, data operations, and complex interaction or business processes. With APIs and actionflows, users can configure custom actions and complex actionflows to meet various business scenarios.

## Types of actions
### 1. Built-in action
Momen provides 16 categories and over 100 types of built-in actions, covering common interaction needs such as triggering AI on click, payments, sharing, navigation, and operations on pages or components. Common actions include:

- Request: Used for CRUD operations on data tables, invoking pre-configured APIs, and triggering actionflows.
- Navigation: Enables navigation between internal pages or to external URLs.
- AI: Requires prior configuration of AI models via the AI feature. Once configured and tested, AI actions can be triggered on the frontend or in actionflows.
- Login: Allows building user authentication systems by configuring login methods (username/password, email, phone, or SSO) in "Settings > Login Settings" and adding login actions to components.
- Payment: Supports monetized apps by enabling payment features in settings and adding payment actions to components for user transactions, including payments and refunds.

### 2. Custom actions via API
In addition to more than 100 built-in actions, you can also customize actions through the API function. After adding a custom API, you can execute the API in the application with the "Request - API" action.

### 3. Use actionflow to streamline complicated business processes
In complex business scenarios, a series of data operations may be required. At this time, the actionflow is an ideal solution. The actionflow allows users to connect multiple action nodes to form a complete actionflow. It supports a variety of nodes, including adding, deleting, and modifying the database, calling third-party APIs, executing code blocks, and AI operations. Users can also set condition branches to handle different business logic paths. The triggering method of actionflow is diverse. In addition to the button click, it also supports time-triggers such as regular triggers, data changes, and webhooks to facilitate building action automation.

<figcaption><img src="../.gitbook/assets/actions mindmap.png" alt="Momen action mindmap"><figcaption></figcaption>

## To add an action
1. Find a component that needs to be configured and click "Action" to add new actions. 
2. If you need to configure follow-up actions, you can add new actions in the [Actions on success] or [Actions on failure] section.   

## Note  
1. Multiple actions under the same component have no guaranteed execution order. If you want to strictly configure the execution order, please use "success" and configure the subsequent action in the success section of the preceding action.
2. When multiple actions are configured, editing in the right column is difficult. You can open the "Action Editor" and edit in an independent pop-up window.