# Code Component

## Introduction

Enhance your applications by adding custom-built React components. These components can enable dynamic forms with live validation, data-driven charts, advanced animations, transitions, interactive maps, and data visualizations, expanding the range of interactive functionality. Check out the showcase of data visualization [here](https://dev.to/momen\_hq/interop-between-code-and-no-code-using-code-components-to-add-echart-in-your-project-4ifp).

## **Prerequisites**&#x20;

Before you begin, ensure you meet the following prerequisites:

* Working knowledge of Momen
* Basic front-end development experience
* Familiarity with TypeScript&#x20;
* Ability to develop customized React components

For users new to React, consider exploring resources such as [React official docs](https://react.dev/learn).

## **Getting Started**&#x20;

To begin, install Momen globally for local development. This setup provides the command alias `zvm` for simplified access to platform commands.

```bash
# Install globally
npm i -g momen-cli
```

To confirm that Momen is installed correctly, run `zvm --version`.

### **Platform Login**&#x20;

Use the following command to sign in from your project’s working directory. Replace `username` and `password` with your actual credentials.

```bash
# Sign in with your username and password
momen signin username password
```

### **Project Creation**&#x20;

Run the command below to create a new project.

```bash
# Create a new project
momen create project_name
```

This command generates a template project and registers it as a new code component project within Momen. While multiple components can be added, note that the initial setup doesn’t publish a version yet, so further steps are required to release it.


### Editing Code

To start developing custom components, navigate to your project directory and install dependencies:

```bash
# Navigate to the project directory and install dependencies
cd project_name
npm install
```

A typical code component library project has the following structure:

<figure><img src="../.gitbook/assets/截屏2024-10-31 19.06.58.png" alt=""><figcaption></figcaption></figure>

*   In this step, you’ll define and set up custom components in your project. Each custom component requires a dedicated folder under `src/components` with the following files:

    * **`index.ts`:** for exporting the component
    * **`[ComponentName].tsx`:** for component logic

    Each component file must export four interfaces for property types:

    * **`[ComponentName]PropData`:** Defines data types received from the host project (supported types: string, number, boolean)
    * **`[ComponentName]StateData`:** Declares component states exposed to the host, with type State from the `zvm-code-context` package
    * **`[ComponentName]Event`:** Declares internal events with properties typed as `EventHandler` from `zvm-code-context`
    * **`[ComponentName]Prop`:** Combines the above three interfaces as `propData`, `propState`, and `event`

    <figure><img src="../.gitbook/assets/截屏2024-10-31 19.10.11.png" alt=""><figcaption></figcaption></figure>

    Expose newly created components in `src/components/index.ts`.&#x20;

<figure><img src="../.gitbook/assets/截屏2024-10-31 19.11.35.png" alt=""><figcaption></figcaption></figure>

Refer to the template’s example code for guidance. Follow the conventions strictly for proper component and declaration recognition.

### Publishing the Project

To publish your project, update the version field in `package.json` to align with npm versioning guidelines. For example, follow the semantic versioning format like `1.0.0`.

Then, run the following command within the project directory:

```bash
# Publish the project
momen publish
```

After publishing, the new code component library will be available for configuration in any project on  Momen.



### **Importing Code Components**&#x20;

To add your custom code component to a no-code project:

1. Click the icon on the left sidebar.
2. Select your newly published component project in the pop-up window.

<figure><img src="../.gitbook/assets/截屏2024-10-31 19.15.31.png" alt=""><figcaption></figcaption></figure>

Once added, the component will appear at the bottom of the left sidebar.

<figure><img src="../.gitbook/assets/截屏2024-10-31 19.16.40.png" alt=""><figcaption></figcaption></figure>

### **Database Synchronization**&#x20;

After configuring or modifying a component, sync the database or preview to ensure it functions at runtime. To do this, click the **database sync icon** (located in the upper left of the interface).

<figure><img src="../.gitbook/assets/截屏2024-10-31 19.18.04.png" alt="" width="297"><figcaption></figcaption></figure>

### **Configuring Component Properties**&#x20;

Properties are parsed according to their declared types, so it’s essential to follow naming conventions and structure precisely to ensure compatibility with Momen.

<figure><img src="../.gitbook/assets/截屏2024-10-31 19.19.18.png" alt=""><figcaption></figcaption></figure>




## About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
