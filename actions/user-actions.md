---
description: >-
  After clicking on the component configured for this action, it
  enables user registration and login functionality using username, email or phone number.
---

# User Action

**User actions include:**
1. Refresh login user data
2. Verification code
3. Registration
4. Login
5. Bind
6. Unbind
7. Reset password
8. Logout
9. Deregistration

## Introduction 
User actions are essential interactions in an app, including registration, login, password reset, and more. This doc explains the purpose of each action and provides guidance to configure them for a seamless and secure user experience.

## 1. Refresh login user data

### Brief
This action ensures that the latest user data is reflected in the application after significant changes, such as account binding, unbinding, password reset, or profile updates. It helps maintain data consistency between the client-side interface and the server-side database. Without refreshing, users might continue to see outdated information until they manually reload the page or log out and log back in.

### Action configuration guide
Add a button component and bind the action of "Refresh Login User Data" or trigger the action upon specific events (e.g., after binding/unbinding or resetting a password).

## 2. Verification Code

### Brief
When users perform sensitive operations (e.g., login, registration, password reset, or binding information), the app sends a one-time verification code to the user's email or phone to verify the ownership of the contact method, enhancing account security.

### Action configuration guide
Add a button and an input component to the page. You can add and configure a "Send Verification Code" action (usually on the button). When configuring, under the Send to field, input or bind the value of the input component (phone number or email) to which the verification code will be sent. 

## 3. Registration

### Brief
The process where a user creates a new account by providing basic information such as name, email address, phone number, and password. This process may include email or phone number verification to ensure authenticity. Momen supports three registration methods: username, phone number, and email registration.

### Action configuration guide
Typically, add some input components and a button to the page, and configure a registration action for the button. Bind the values of the input component to the action (for username, phone number, email, verification code, or password) to collect the user's registration information.

### Note
After successful registration, Momen will automatically insert the username/phone number/email & password into a developer-invisible data table and add a user record in the default account table, referred to as "current user data." The ID of this record will be automatically linked to the corresponding registration data. It’s common to configure a “Show Toast” action to notify the user upon successful or failed registration.

## 4. Login

### Brief
Allows registered users to access their accounts using a username and password or other authentication methods (e.g., email, phone number & verification code). Momen supports four login methods: username login, phone number verification login, phone number & password login, email login.

### Action configuration guide
Add a button and some input components to the page, and configure a login-related action. Bind the values of the input boxes (username, phone number, email, verification code, or password) to the action to collect user input for login.

### Note
It’s common to configure a “Show Prompt” action for successful/failed login, or configure a navigation action to redirect the user to the app’s homepage.

## 5. Bind

### Brief
After registering with a username and password, users may want to add a phone number or email address to their account for enhanced security and easier password recovery. Once binding is successful, the corresponding phone number or email will be updated in the user’s record in the default account table.

### Action configuration guide
Add a button and input components on the page, and configure a binding action to the button. Bind the values of email/phone number and verification codes to the action to collect info for binding.

### Note
When requesting a verification code for binding, set the verification code type to “Bind account”.

## 6. Unbind

### Brief
Allows users to remove a previously bound phone number or email from their account, typically when changing contact information or discontinuing its use. After successful unbinding, the corresponding phone number or email in the user’s record will be cleared.

### Action configuration guide
Add a button component on the page, and configure an unbinding action. Bind the input fields (for the verification code) to the action to collect the code received via phone or email.

### Note
When requesting a verification code for unbinding, set the verification code type to “Unbind account”.

## 7. Reset Password

### Brief
Enables users who have forgotten their passwords to reset them using their registered phone number or email. This process typically involves verifying the user’s identity (via verification code) before allowing them to set a new password.

### Action configuration guide
Add a button component on the page, and configure a password reset action. Bind the input fields (for phone number, new password, and verification code) to the action to reset the password.

## 8. Logout

### Brief
Allows users to end their current session and log out of the application. Simply closing the webpage does not automatically log out the user, so this action ensures better privacy and data security.

### Action configuration guide
Typically used for one-click logout, combined with actions to refresh logged-in user data, recalculate data, or switch views accordingly. Logout only affects the current session and does not alter any data in the database.   

## 9. Deregistration

### Brief
Allows users to permanently delete their account and all associated data. Since this action is irreversible, users must confirm their intent and may need to complete multiple steps for security reasons. Momen supports two methods for account deletion: verification code deletion and password deletion.

### Action configuration guide
Add a button component on the page, and configure an account deletion action. Bind the input fields (for verification code or password) to the action to collect the necessary user input. When using verification code deletion, choose the appropriate sending method (SMS or email).

### Note
When requesting a verification code for account deletion, set the verification code type to “Deregistration”.