---
description: >-
  Learn how to use Momen's AI help center template to build your startup's help
  center page.
---

# AI Help Center

### Introduction

AI Help Center can help you to build a custom support page for your startup. Our template not only manages your product resources like FAQs, docs efficiently, but also delivers precise answers to your users by utilizing AI.

### I. Basic Project Logic

\[Help Center]: When your user inputs a question related to your product, the AI will retrieve information from your business data, generating answers based on it.

<figure><img src="../.gitbook/assets/1 (30).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/2 (26).png" alt="an AI template in a no-code tool"><figcaption></figcaption></figure>

\[Resources]: This section manages all of your product resources. With all of them in one place, your users won't have to navigate to different places.

<figure><img src="../.gitbook/assets/3 (18).png" alt="an AI template of a no-code tool"><figcaption></figcaption></figure>

\[Contact Us]: Put your team's contact here to give your users support.

<figure><img src="../.gitbook/assets/4 (16).png" alt="an AI template of a no-code tool"><figcaption></figcaption></figure>

\
In the context section, you can choose your AI's data source. This is the best part about Momen AI, because it allows you to upload local files, use data from your Momen database, or call third-party APIs to retrieve data for your AI.

<figure><img src="../.gitbook/assets/5 (11).png" alt="the configuration of an ai template of a no-code tool"><figcaption></figcaption></figure>



### II. How to Create Your AI Apps

#### Step 1: AI Configuration

First of all, enter the AI integration interface from the top bar of the Momen editor.

<figure><img src="../.gitbook/assets/6 (10).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

**Basic configuration**: Change the name and descriptions of your AI. Choose the model based on your needs. Currently, we support GPT 3.5 and 4. GPT 3.5 would be suitable if your input is text. GPT 4 supports image processing and generates more accurate answers. However, it'll cost more [tokens](https://docs.momen.app/ai/app-token-consumption).

**Input configurations**: Configure single or multiple parameters to the AI interface. Input parameters will be referenced in the predefined prompts or used as filtering conditions for your app.

<figure><img src="../.gitbook/assets/7 (6).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

**Predefined Prompts:** You can directly input instructions as your prompt source, or refer to the input parameters. For more information about that, please check our doc [AI Configuration](https://docs.momen.app/ai/ai-configuration) where you can find how to write a good prompt.In our template, we used direct input+ parameters as the sources.

<figure><img src="../.gitbook/assets/8 (4).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>



**Contexts:** Context serves as the data source for your AI. This is where you can integrate your business data with AI. Currently, we support three ways to integrate your data. You can select data tables that you stored in Momen database, or upload local files, or call APIs to fetch external data. In Momen AI knowledge base, our data comes from our Momen database, where we store Momen docs in it.

<figure><img src="../.gitbook/assets/9 (3).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

\
**Debug and preview:** Before requesting AI, you can debug and test to see if it generates the answer in the desired way. In this case, input question relates to Momen to see if AI generates accurate answers.\


<figure><img src="../.gitbook/assets/10 (2).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

#### Step 2: Action configuration and AI request

To make your AI take effect in the expected place, you need to bind your data from the backend to your UI, and make sure you configure the "request AI" action.In this case, we configured "request AI" action on input box.

<figure><img src="../.gitbook/assets/11 (1).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

Also, remember to configure the navigation action in the resource section. So that your user can be directed to the relevant resource page.

<figure><img src="../.gitbook/assets/12 (1).png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

And you can modify the UI to make your AI knowledge base more customized.\


#### Step 3: Website Preview

When you finish all the configurations, click Preview on the up-right corner to generate the link. If everything goes well, you can publish your project to the public.

<figure><img src="../.gitbook/assets/13.png" alt="An AI template in a no-code tool"><figcaption></figcaption></figure>

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
