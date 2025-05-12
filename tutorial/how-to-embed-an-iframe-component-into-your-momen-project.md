---
description: Learn how to embed an iframe into your website.
---

# How to Embed an Iframe Component into Your Momen Project

### Introduction

This document serves as a comprehensive guide for introducing and developing custom components, specifically focusing on creating an iframe-embedded component. For a live demonstration of what you'll be building, visit [https://momen.app/ai](https://momen.app/ai).

<figure><img src="../.gitbook/assets/1 (32).png" alt="an iframe component in a no-code tool"><figcaption></figcaption></figure>

### Prerequisites

Your project needs to be a web-based application utilizing ZVM for rendering. It should be structured as a React project leveraging Vite and its ecosystem. This setup allows developers the flexibility to craft new components tailored to their specific requirements. However, to ensure compatibility with Momen, adherence to particular standards is necessary.

1. It's imperative that your custom project is publicly available on GitHub under your developer account. Momen facilitates this process by offering a template project. You can initiate your development by forking this template from [https://github.com/oychao/zvm-custom-comp-template](https://github.com/oychao/zvm-custom-comp-template). Please avoid directly cloning the template to ensure your project remains unique.

<figure><img src="../.gitbook/assets/2 (27).png" alt="prerequisites for creating iframe"><figcaption></figcaption></figure>

### Configuration Steps

1. Fork and Clone: Begin by forking the project to your repository, then clone it locally with `git clone https://github.com/%youraccount%/zvm-custom-comp-template`.

<figure><img src="../.gitbook/assets/3 (20).png" alt="clone your project"><figcaption></figcaption></figure>

2. Initialize the Project: To start, install dependencies with `npm i` to prevent errors, then launch the project using `npm run dev`. This step ensures the project's functionality locally before its integration into your Momen project.

<figure><img src="../.gitbook/assets/4 (1).gif" alt="initializing the project"><figcaption></figcaption></figure>

3. Modify to Iframe Component: The starter project includes a basic counter component. You'll need to replace or supplement this with an iframe component by adding it under `src/components/`. This demonstrates the embedding of a custom webpage.

```javascript
export function Iframe() {
  return <iframe 
  style={{ width: '100%', height: '100%', border: "0", borderRadius: "30px" }} 
  src="https://0gon984kvrrve.villa.momen.app/"></iframe>;
}
```

Or you can replace the original counter component by adding a new component.

<figure><img src="../.gitbook/assets/5 (13).png" alt="add a new component"><figcaption></figcaption></figure>

4. Export Components: It's crucial to export your components through `src/components/index.ts`. This file serves as the main entry point for component exposure.

<figure><img src="../.gitbook/assets/6 (12).png" alt="export your component"><figcaption></figcaption></figure>

5. Configuration in `config.json`: This configuration file is vital for making your components recognizable in the Momen editor. It involves detailing each component's settings, such as names, preview paths, and descriptions, while adhering to npm versioning standards for updates.

<figure><img src="../.gitbook/assets/7 (8).png" alt="configuration"><figcaption></figcaption></figure>

6. Local Debugging with `App.tsx`: Use this for component testing, which is essential for refining your components without impacting the Zion/Momen project runtime.
7. Commit to GitHub: After development, push your changes to the GitHub repository, targeting the main branch (master/main).
8. Momen Configuration: Link your repository in Momen by configuring the display name and address of your repository. This integration step is crucial for importing your custom components into the Momen platform.

<figure><img src="../.gitbook/assets/8 (6).png" alt=""><figcaption></figcaption></figure>

9. Publication and Version Management: Momen facilitates easy component updates and version management, ensuring your project remains current within the Momen ecosystem.

<figure><img src="../.gitbook/assets/9 (5).png" alt=""><figcaption></figcaption></figure>

10. When releasing a new version, you can modify the components in your repository by adding, updating, or deleting them. Update the component information and version name in `src/components/index.ts` and `config.json`, then click the "+" sign in the left list of the repository.

<figure><img src="../.gitbook/assets/10 (4).png" alt="modify the component"><figcaption></figcaption></figure>

11. Next, navigate to project configuration and click on the GitHub icon located in the upper right corner of the left panel. Then, select the version that was just released and the list of optional components will automatically include the newly released components.

<figure><img src="../.gitbook/assets/11 (3).png" alt="configure your custom component in Momen"><figcaption></figcaption></figure>

12. Make sure to click "Preview" at this point to apply the custom component's configuration at runtime.

<figure><img src="../.gitbook/assets/12 (3).png" alt="preview your project"><figcaption></figcaption></figure>

13. Then you can view your custom components in Mirror or Preview.

<figure><img src="../.gitbook/assets/13 (2).png" alt="view your custom component"><figcaption></figcaption></figure>

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder that allows users to build fully customizable web apps, marketplaces, social networks, AI apps, enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions, getting your web app products to market faster than ever before.
