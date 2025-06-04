---
description: >-
  After clicking on the component configured for this action, it
  enables user registration and login functionality using username, email or phone number.
---

# User Authentication and Account Actions

**Supported user actions:**
1. Refresh Login User Data
2. Send Verification Code
3. Register Account
4. User Login
5. Bind Contact Information
6. Unbind Contact Information
7. Reset Password
8. Logout
9. Deregister Account

This guide details the purpose and configuration of each user-related action to help you deliver a seamless and secure authentication experience.

## 1. Refresh Login User Data

**Purpose:**  
Ensures the latest user data is reflected in the application after significant changes (e.g., binding/unbinding, password reset, or profile updates). This maintains data consistency between the client and server. Without refreshing, users may see outdated information until they reload or re-login.

**How to Configure:**  
Add a button and bind the "Refresh Login User Data" action, or trigger it after relevant events (such as binding/unbinding or resetting a password).

## 2. Send Verification Code

**Purpose:**  
For sensitive operations (registration, login, password reset, binding/unbinding), the app sends a one-time code to the user's email or phone to verify ownership and enhance security.

**How to Configure:**  
Add a button and input component. Configure a "Send Verification Code" action (typically on the button). In the "Send to" field, bind the input value (phone or email) to which the code will be sent.

## 3. Register Account

**Purpose:**  
Allows users to create an account by providing information such as username, email, phone, and password. Registration may include verification for authenticity. Momen supports registration via username, phone, or email.

**How to Configure:**  
Add input components and a button. Configure a registration action for the button. Bind the input values (username, phone, email, verification code, password) to the action.

**Note:**  
Upon successful registration, Momen stores credentials in a secure, developer-invisible table and creates a user record in the default account table ("current user data"). The record ID is linked to registration data. It is recommended to configure a "Show Toast" action to notify users of registration success or failure.

## 4. User Login

**Purpose:**  
Allows registered users to access their accounts using username/password or other supported methods (email, phone, verification code). Momen supports username login, phone verification login, phone & password login, and email login.

**How to Configure:**  
Add input components and a button. Configure a login action for the button. Bind the input values (username, phone, email, verification code, password) to the action.

**Note:**  
It is recommended to configure a "Show Prompt" action for login success/failure, or a navigation action to redirect users after login.

## 5. Bind Contact Information

**Purpose:**  
Enables users to add a phone number or email to their account for enhanced security and easier recovery. After binding, the contact info is updated in the user's account record.

**How to Configure:**  
Add input components and a button. Configure a binding action. Bind the email/phone and verification code fields to the action.

**Note:**  
When requesting a verification code for binding, set the code type to "Bind account".

## 6. Unbind Contact Information

**Purpose:**  
Allows users to remove a previously bound phone number or email, typically when changing contact info. After unbinding, the contact info is cleared from the user's account record.

**How to Configure:**  
Add a button and input for the verification code. Configure an unbinding action and bind the code field.

**Note:**  
When requesting a verification code for unbinding, set the code type to "Unbind account".

## 7. Reset Password

**Purpose:**  
Allows users to reset a forgotten password using their registered phone or email. This process requires identity verification via code before setting a new password.

**How to Configure:**  
Add input components (phone/email, new password, verification code) and a button. Configure a password reset action and bind the fields.

## 8. Logout

**Purpose:**  
Ends the current user session and logs the user out. Closing the browser does not log out the user; this action ensures privacy and security.

**How to Configure:**  
Add a logout button. Optionally, combine with actions to refresh user data, recalculate data, or update the UI. Logout only affects the session and does not modify database records.

## 9. Deregister Account

**Purpose:**  
Allows users to permanently delete their account and all associated data. This irreversible action requires confirmation and may involve multiple steps for security. Momen supports account deletion via verification code or password.

**How to Configure:**  
Add input components (verification code or password) and a button. Configure an account deletion action and bind the fields. For code-based deletion, choose the appropriate sending method (SMS or email).

**Note:**  
When requesting a verification code for deregistration, set the code type to "Deregistration".