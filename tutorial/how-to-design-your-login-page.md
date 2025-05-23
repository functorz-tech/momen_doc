---
description: >-
  Discover why user logins are essential for digital platforms and delve deep
  into the various methods and principles of implementing them on Momen.
---

# How to Design Your Login Page

## Introduction

This tutorial explains the importance of user login for digital platforms and provides practical guidance on implementing login systems in Momen.  
You'll learn about user identity management, engagement, permission control, and best practices for configuring login methods and data logging.

---

## Why Are Logins Necessary?

1. **Manage User Information:**  
   Logins associate user-generated content, comments, and interactions with individual identities, enabling ownership tracking and analytics.
2. **Facilitate User Engagement:**  
   Login methods (e.g., username, email) make it easier to re-engage users.
3. **Implement Permission Management:**  
   User accounts enable the application of different permission rules for various user groups, supporting granular access control.

---

## Common User Roles

- **Guest:** Allows access to certain features without login.
- **Logged-in User:** Defined by the login method (email, username/password, etc.).
- **Member:** Also called "super-user"; criteria can be customized (e.g., registration duration, activity, spending).
- **Administrator:** Project operators with elevated permissions, configurable in Momen.

---

## Login Methods in Momen

Momen supports multiple login methods to suit different scenarios.  
To enable a login method:

1. Go to **Settings** > **Login Settings** in the editor.
2. Activate the desired login method.

![Login Methods in Momen](../.gitbook/assets/1%20(4).1.png "Login Methods in Momen")

After designing the UI for your login method(s), add the corresponding login actions to components.  
For example, add **Username Login** under **Interaction** (ensure the login method is enabled in settings).

![User login action in Momen](../.gitbook/assets/2%20(5).1.png "User login action in Momen")

---

## Data Logging Principles for Registration/Login

**Example: Username Login**

- When enabled, Momen creates a default (hidden) data table for storing usernames and passwords.
- Upon registration, Momen inserts the credentials into this table and creates a record in the default account table ("Current User Data"), linking the two.
- To relate user data to other tables, associate the default account table with your target table.
- After login, use **Current User Data** to track user activity.

> The same principles apply to other registration/login methods.

> **Note:**  
> Each registration/login method creates a new user record. For now, configure only one method to avoid duplicate user entries.  
> For example, if User A registers with both username and phone, two separate user records are created.

---

## Email/Username Login

- Design the registration/login UI, including a button for sending a verification code.
- Configure the button to send a verification code via **Email**.
- Set the verification code type for **Registration** or **Login** (configure separately for each).
- Attach the corresponding registration/login actions to the buttons.
- Bind the email and password input fields to the action.
- Configure success/failure actions or prompts.

![Send Verification, Username Register, Username Login](../.gitbook/assets/6%20(25).png "Send Verification, Username Register, Username Login")

---

## Single Sign-On (SSO)

See: [Single Sign-On Configuration Guide](../actions/sso.md)

---

## About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder that enables users to create fully customizable web apps, marketplaces, social networks, AI apps, enterprise SaaS, and more. Momen supports real-time iteration, powerful API integration, and rapid product launch.
