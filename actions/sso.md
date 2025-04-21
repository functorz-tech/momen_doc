---
description: >-
  Learn how to configure Single Sign-On (SSO) in Momen to enhance user experience, improve security, and simplify access management for your applications.
keywords: >-
  Single Sign-On, SSO, authentication, user experience, security, configuration steps, Google login
---

# Single Sign-On (SSO) Configuration Guide

## What is Single Sign-On (SSO)?

**Single Sign-On (SSO)** is an authentication mechanism that allows users to access multiple related systems with a single login. By configuring SSO, new users can register and log in to your website using existing accounts (e.g. Google, Facebook, etc.).

> - Only supports the standard OAuth2 protocol  
> - Available for Pro Plan and above  

## Benefits of Single Sign-On

- **Improved User Experience**: Users only need to log in once to access multiple applications, reducing repetitive login operations.
- **Enhanced Security**: By centralizing access management, SSO is more secure than traditional username and password authentication.
- **Simplified Management**: Enterprises can simplify the management of multiple applications through SSO.

## Steps to Configure SSO

### 1. Create an SSO Configuration in Momen

- Open project settings, find "Login - SSO," and click "Add."
- The system will automatically generate a callback URL for redirection after successful authorization.


### 2. Register an Application with an Identity Provider (e.g., Google)

1. Register as a Google Developer: [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project and fill in the project information.
3. Enable APIs and services in the project and set up the OAuth consent screen.
4. Configure the privacy policy and terms of service pages.
5. Set up the OAuth client ID and fill in the callback URL.
6. Obtain the client ID and client secret.


### 3. Fill in Application Information in Momen

- Enter the client ID, client secret, and scope.
- Save the configuration and enable SSO.


### 4. Configure Actions

- **Register/Login**: After authorization, log in if the account exists; otherwise, register a new user.
- **Bind Existing Account**: Bind the authorized account to the currently logged-in account.
- **Unbind Account**: Unbind the current account from the SSO.


## Consume SSO User Information

As an example of updating the user's "email" information:
1. Add an `email` field to the account table.
2. Add the following code to the action flow to update the username and email in the account table:

```javascript
function updateAccount(variables) {
    const gql = `mutation updateAccount(
          $accountId: bigint
          $email: String
          $name: String
        ) {
          update_account(
            _set: { email: $email, username: $name }
            where: { id: { _eq: $accountId } }
          ) {
            returning {
              id
              username
            }
          }
        }
        `;
    return context.runGql("updateAccount", gql, variables, {
      role: "admin",
    }).update_account;
  }
  function queryAccount(variables) {
    const gql = `query queryAccount($accountId: bigint) {
          account(where: { id: { _eq: $accountId } }, limit: 1) {
            id
            username
          }
        }
          `;
    return context.runGql("queryAccount", gql, variables, {
      role: "admin",
    }).account[0];
  }
  
  const accountId = context.getSsoAccountId();
  
  const queryAccountResult = queryAccount({ accountId });
  
  if (queryAccountResult.username === null) {
    const userInfo = context.getSsoUserInfo();
    const userInfoJson = JSON.parse(userInfo);
    const name = userInfoJson.username;
    const email = userInfoJson.email;
    const updateAccountVariables = {
      accountId,
      email,
      name,
    };
  
    const updateAccountResult = updateAccount(updateAccountVariables);
  }