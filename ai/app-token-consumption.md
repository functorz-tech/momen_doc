---
description: Learn about app token consumption and purchase in Momen AI.
---

# App Token Consumption

### Introduction

App tokens are crucial in AI interaction. Learn how to purchase and use app tokens in Momen AI.

{% hint style="info" %}
* App Tokens for each plan are as follows. For premium plans, tokens will be automatically reset at the end of each month:
  * Free plan: 50k App Tokens in total
  * Basic plan: 50k App Tokens per month
  * Pro plan: 50k App Tokens per month
* Insufficient App Tokens may affect online projects (e.g., errors during relevant searches or not generating vectors for new data). When your App Tokens are running low, Momen will provide corresponding prompts.
* After recharging App Tokens, it may take a few minutes to generate vectors for previously unprocessed data.
{% endhint %}

### Token Consumption When Requesting Momen AI

#### Estimate Consumption of Text Input

For example, generating a 300-word X post:Pro version large model: Consumes about 600 App Tokens, and takes about 60 seconds.Basic version large model: Consumes about 30 App Tokens, and takes about 30 seconds.Quality differences in a generated post may not be significant in this scenario, so it's suggested to test and choose based on expected results.

#### Estimate Consumption of Image Input

Token consumption of images is determined by two factors:

* Size
* Precision:
  * If the precision is set to "Simple," each image consumes 85 tokens.
  * If the precision is set to "Fine," the calculation is based on the size of the image, determining how many 512 px squares compose the image. The cost for each square is 170 tokens. The final total cost always increases by an additional 85 tokens.

<figure><img src="../.gitbook/assets/1280X1280.png" alt="The calculation of image input"><figcaption></figcaption></figure>

Here is an example:

For a square image of size 1024 x 1024, in fine mode, it requires 4 squares of 512 px each to represent the image. So, the final token cost is 170 \* 4 + 85 = 765.

### App Token Balance Check and Purchase

To view your App Token balance and purchase more, go to your profile, hover over a project, and click 'Details'.

<figure><img src="../.gitbook/assets/1 (44).png" alt="Project details in a no-code tool"><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/2 (38).png" alt="Purchase resource kit in a no-code tool"><figcaption></figcaption></figure>

Click the 'Purchase Resource Kit' button to purchase additional App Tokens in a new window. The price is $1 for 6,000,000 App Tokens.

<figure><img src="../.gitbook/assets/3 (31).png" alt="App token consumption in a no-code tool"><figcaption></figcaption></figure>

### App Token Consumption

#### Basic Consumption Scenarios

* Saving content as vector data in the database, which occurs when opening vector storage for a field in a data table and adding data to that field, consumes App Tokens.
* Sending content to AI and receiving results from AI consumes App Tokens.

#### Consumption Estimate

{% hint style="info" %}
The consumption of App Tokens is directly related to the number of input and output words.
{% endhint %}

For example, sending a message to AI like 'I want to develop a web page for purchasing products. Please tell me the key steps to develop it will consume approximately 60 App Tokens, with the number of tokens AI returns counted separately."

\
If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.

### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, that allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
