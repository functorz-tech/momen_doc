---
description: >-
  Explore Custom Domain with Momen: A Step-by-Step Guide to Adding CNAME
  Records.
---

# Custom Domain

### Introduction

A custom domain is a personalized web address that you can use to access your website or web application. Unlike generic URLs provided by website builders or hosting platforms, a custom domain allows you to have a unique and branded web address that reflects your brand, business, or personal identity.

One of the most exciting features of Momen is the ability to use custom domains, allowing you to personalize your web applications and give them a unique online identity. In this article, we will take you through a step-by-step guide on how to add CNAME records to your custom domain.

### How to Add a CNAME Record

1. If the domain name you purchased is [godaddy.com](http://godaddy.com) and you want your Momen website to be [www.godaddy.com](http://www.godaddy.com), you need to input [www.letsnoco.com](http://www.letsnoco.com).
2. If the domain name you purchased is [letsnoco.com](http://letsnoco.com), and you want the website in Momen to be [godaddy.com](http://godaddy.com), you need to input [www.letsnoco.com](http://www.letsnoco.com).

#### Take Godaddy as an Example

To begin with, you need to add a CNAME record first and let's take Godaddy as an example.

Add a CNAME (alias) record to use a domain prefix, such as _blog_ to point your domain to another domain name, or URL, when your domain is using [GoDaddy nameservers](https://sg.godaddy.com/help/edit-my-domain-nameservers-664). To add a domain prefix that points to an **IP address**, [add a subdomain](https://sg.godaddy.com/help/add-a-subdomain-4080) instead. The most common **CNAME** is _www_, with the **@** symbol entered for the **Value** field. This will make [_www.mycoolnewbusiness.com_](http://www.mycoolnewbusiness.com) load to the same webpage as the root domain, [_mycoolnewbusiness.com_](http://mycoolnewbusiness.com).

1. Sign in to your GoDaddy [Domain Portfolio](https://dcc.godaddy.com/control/portfolio). (Need help logging in? [Find your username or password](https://sg.godaddy.com/help/i-cant-sign-in-to-my-godaddy-account-19319).)
2. Select the button on the right side bar:

<figure><img src="../.gitbook/assets/1280X1280 (2).png" alt=""><figcaption></figcaption></figure>

3. Select **Domain Edit Options** next to your domain and then select **Edit DNS**. You may need to scroll down to see the **Edit DNS** option.

<figure><img src="../.gitbook/assets/1280X1280 (1) (1).png" alt=""><figcaption></figcaption></figure>

4. Select **Add** to add a new record.

<figure><img src="../.gitbook/assets/1280X1280 (2) (1).png" alt=""><figcaption></figcaption></figure>

5. Select **CNAME** from the **Type** menu options.
6. Enter the details for your new CNAME record:

* **Name**: The host name or prefix the CNAME record will be set to. You can include a period (.) but not as the first or last character. Consecutive periods (...) are not allowed, and the host cannot exceed 63 characters or be the @ symbol. You can't use a host that's already assigned to an existing A record, TXT record or MX record.
* **Value**: The URL you are setting as the destination for the host. Type **@** to point directly to your root domain name.
* **TTL**: How long the server should cache information. The default setting is 1 hour.

\
Following are some examples:

Example 1: ai.avatar.simplelife.today

step 1:

Name： ai.avatar.simplelife.today

Type： CNAME

Value：delegated-domain.momen.app

step 2:

Name： \_acme-challenge.ai.avatar.simplelife.today

Type： CNAME

Value：delegated-domain.momen.app

Example 2: simplelife.today

step 1:

Name: @.simplelife.today

Type： CNAME

Value：delegated-domain.momen.app

Step 2:Name: \_acme-challenge.simplelife.today

Type： CNAME

Value：delegated-domain.momen.app\


Select **Add Record** to save your new CNAME record.

Most DNS updates take effect within an hour, but could take up to 48 hours to update globally.\


### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
