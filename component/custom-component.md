---
description: >-
  Code Components: Based on Vite and related ecosystems, developers can create any new components according to their needs.
---

# Code Component

### Introduction

An introduction to the usage of code components to develop a counting component from scratch.

### **Prerequisites**

**Some basic knowledge of Git / Frontend / React and Web is required.**

### **Detailed Configuration Steps**

1. Custom projects need to be hosted on the developer's GitHub public repository. Momen provides a template project that users can directly fork and develop according to their needs (be careful not to clone the template project directly). The template project is located at [https://github.com/oychao/zvm-custom-comp-template.](https://github.com/oychao/zvm-custom-comp-template)

<figure><img src="../.gitbook/assets/截屏2024-02-23 17.48.12.png" alt=""><figcaption></figcaption></figure>

2. After cloning the project, the project under your own repository will be cloned locally. The custom template project is a react project based on Vite and related ecosystems, where developers can create any new component they want. But in order to work with Momen, it must meet certain specifications.

```Plain
git clone https://github.com/%your account%/zvm-custom-comp-template
```

3. After retrieving the project, add the Count component under src/components/ as follows.

<figure><img src="../.gitbook/assets/截屏2024-02-23 17.48.41.png" alt=""><figcaption></figcaption></figure>

4. Components must be exported in the default of src/components/index.ts, which is the entry point for exposing components, so be careful to export in the default object.

<figure><img src="../.gitbook/assets/截屏2024-02-23 17.48.30.png" alt=""><figcaption></figcaption></figure>

5. In addition to this you need to configure the information about the exposed components in config.json. This step is to access to the information about the component in the Momen editor.
   1. CustomComponentItems is the place where individual components are configured, the key and name should be the same as the custom component name, imagePath is the relative path to the preview image, and description is the description of the component.
   2. Version is the version information, every time you release a version, you need to update a version, just follow the npm general specification.

<figure><img src="../.gitbook/assets/截屏2024-02-23 17.48.41 (1).png" alt=""><figcaption></figcaption></figure>

6. App.tsx is used for local debugging of components, developers can run npm run dev locally to debug components. Note that the debugging here does not affect the runtime of the Momen project, and based on the configuration above, the only custom components that are really exposed are the config.json and the Count under src/components/index.ts.
7. Once development is complete, commit the code to a GitHub repository (requires a master branch, master / main).
8. Click GitHub icon in the upper right corner of the User Center, configure the repository's display name and url, and click Import.

<figure><img src="../.gitbook/assets/8 (6).png" alt=""><figcaption></figcaption></figure>

9. At this point, the first new repository and version are built.

<figure><img src="../.gitbook/assets/9 (5).png" alt=""><figcaption></figcaption></figure>

10. After this, select the component that needs to be published, you can see the name of the component you just configured, the preview image, and the description information.
11. The status of a successful release is as follows.

<figure><img src="../.gitbook/assets/10 (4).png" alt=""><figcaption></figcaption></figure>

12. When users need to release a new version after adding, updating, or deleting components in their own repository, update the component information and version name in src/components/index.ts and config.json, and then click the + in the left list of the repository.
13. Next, click on the GitHub icon in the upper right corner of the left column and select the version that was just released, at this point the list of optional components will have more components that were just released.

<figure><img src="../.gitbook/assets/11 (3).png" alt=""><figcaption></figcaption></figure>

14. Note that you must click Preview to see the effectn of the custom component.

<figure><img src="../.gitbook/assets/12 (3).png" alt=""><figcaption></figcaption></figure>

15. You can then view it in Mirror and Preview.

<figure><img src="../.gitbook/assets/13 (2).png" alt=""><figcaption></figcaption></figure>

### **Data Interaction with Host Project**

Custom components currently support two ways of interacting with the host project.Refer to the project address [https://github.com/oychao/zvm-custom-comp-working.](https://github.com/oychao/zvm-custom-comp-working)

#### **Global Data**

Global data declared in the project can be read and written directly by the custom component.

1. Configure global data in the project.

<figure><img src="../.gitbook/assets/截屏2024-02-23 18.12.16.png" alt=""><figcaption></figcaption></figure>

2. You can read it directly in the custom component (here the Display is a sample custom component, you can see that you can already read the value of the global data in its properties).

<figure><img src="../.gitbook/assets/截屏2024-02-23 18.13.17.png" alt=""><figcaption></figcaption></figure>

#### **Declaring Parameters**

1. A custom component can implement the data binding configuration for the right column by configuring parameters in config.json. The following is the configuration of config.json and the implementation of the Display component in the sample project.

<figure><img src="../.gitbook/assets/截屏2024-02-23 18.14.14.png" alt=""><figcaption></figcaption></figure>

2. Currently supported attribute type declarations include TEXT, FLOAT8, INTEGER, BOOLEAN, OBJECT, ARRAY, and IMAGE.



To see how a custom component works in Momen, please refer to our [AI landing page](https://momen.app/ai). The guide of embedding an Iframe in Momen is here: [How to Embed a Momen Project into Your Website.](../tutorial/how-to-embed-an-iframe-component-into-your-momen-project.md)

\


### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
