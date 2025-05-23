---
description: Learn how to embed an iframe into your website.
---

# How to Embed an Iframe Component into Your Momen Project

## Introduction

This guide explains how to create and integrate a custom iframe component into your Momen project.  
For a live demo, visit [Momen AI](https://momen.app/ai).

![Iframe component example](../.gitbook/assets/1%20(32).png "Iframe component example")

---

## Prerequisites

- Your project must be a web-based app using ZVM for rendering.
- The project should be structured as a React app with Vite.
- Your custom component project must be public on GitHub.
- Start by forking the [Momen ZVM custom component template](https://github.com/oychao/zvm-custom-comp-template) (do not clone directly).

![Fork template project](../.gitbook/assets/2%20(27).png "Fork template project")

---

## Configuration Steps

1. **Fork and Clone**  
   Fork the template to your GitHub account, then clone it locally:
   ```
   git clone https://github.com/%youraccount%/zvm-custom-comp-template
   ```
   ![Clone your project](../.gitbook/assets/3%20(20).png "Clone your project")

2. **Initialize the Project**  
   Install dependencies and start the project:
   ```
   npm i
   npm run dev
   ```
   ![Initialize the project](../.gitbook/assets/4%20(1).gif "Initialize the project")

3. **Create the Iframe Component**  
   Replace or add a new component under `src/components/`:
   ```javascript
   export function Iframe() {
     return <iframe 
       style={{ width: '100%', height: '100%', border: "0", borderRadius: "30px" }} 
       src="https://0gon984kvrrve.villa.momen.app/"></iframe>;
   }
   ```
   ![Add a new component](../.gitbook/assets/5%20(13).png "Add a new component")

4. **Export Components**  
   Export your components via `src/components/index.ts` (the main entry point).

   ![Export your component](../.gitbook/assets/6%20(12).png "Export your component")

5. **Configure `config.json`**  
   Define your component's settings, preview path, and description. Follow npm versioning standards for updates.

   ![Component configuration](../.gitbook/assets/7%20(8).png "Component configuration")

6. **Local Debugging**  
   Use `App.tsx` for local testing before integrating with Momen.

7. **Commit to GitHub**  
   Push your changes to the main branch of your repository.

8. **Integrate with Momen**  
   In Momen, link your repository and configure the display name and address.

   ![Link repository in Momen](../.gitbook/assets/8%20(6).png "Link repository in Momen")

9. **Publish and Manage Versions**  
   Use Momen's version management to update and maintain your components.

   ![Version management](../.gitbook/assets/9%20(5).png "Version management")

10. **Release a New Version**  
    Update your components and version info in `src/components/index.ts` and `config.json`. Add the new version in Momen.

    ![Modify the component](../.gitbook/assets/10%20(4).png "Modify the component")

11. **Select and Preview the Component**  
    In project configuration, select the released version. The new component will appear in the list of available components.

    ![Configure custom component in Momen](../.gitbook/assets/11%20(3).png "Configure custom component in Momen")

12. **Preview Your Project**  
    Click "Preview" to apply the custom component at runtime.

    ![Preview your project](../.gitbook/assets/12%20(3).png "Preview your project")

13. **View in Mirror or Preview**  
    Access your custom components in Mirror or Preview mode.

    ![View your custom component](../.gitbook/assets/13%20(2).png "View your custom component")

---

## About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder that enables users to create fully customizable web apps, marketplaces, social networks, AI apps, enterprise SaaS, and more. Momen supports real-time iteration, powerful API integration, and rapid product launch.
