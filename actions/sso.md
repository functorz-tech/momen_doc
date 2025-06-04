---
description: >-
  Learn how to configure Single Sign-On (SSO) in Momen to enhance user experience, improve security, and simplify access management for your applications.
keywords: >-
  Single Sign-On, SSO, authentication, user experience, security, configuration steps, Google login
---

# Single Sign-On (SSO) Configuration Guide

## What is Single Sign-On (SSO)?

**Single Sign-On (SSO)** is an authentication mechanism that enables users to access multiple related systems with a single login. By configuring SSO, new users can register and log in to your website using existing accounts (such as Google or Facebook).

> - Only supports the standard OAuth2 protocol.  
> - Available for Pro Plan and above.  

## Benefits

- **Improved User Experience**: Users only need to log in once to access multiple applications, reducing repetitive login steps.
- **Enhanced Security**: Centralized access management provides stronger security than traditional username and password authentication.
- **Simplified Management**: SSO streamlines the management of multiple applications for organizations.

## How to Configure

### 1. Create an SSO Configuration in Momen

- Open your project settings, navigate to **Login > SSO**, and click **Add**.
- Momen will automatically generate a callback URL for redirection after successful authorization.

### 2. Register an Application with an Identity Provider (e.g., Google)

1. Register as a Google Developer at [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project and provide the required project information.
3. Enable APIs and services for the project, then configure the OAuth consent screen.
4. Set up the privacy policy and terms of service pages.
5. Create an OAuth client ID and enter the callback URL provided by Momen.
6. Obtain the client ID and client secret.

### 3. Enter Application Information in Momen

- Input the client ID, client secret, and scope.
- Save the configuration and enable SSO.

### 4. Configure Actions

- **Register/Login**: After authorization, log in if the account exists; otherwise, register a new user.
- **Bind Existing Account**: Link the authorized account to the currently logged-in user.
- **Unbind Account**: Disconnect the current account from SSO.

## Consuming User Information

To update a user's "email" information as an example:

1. Add an `email` field to the account table.
2. Add the following code to your Actionflow to update the username and email in the account table:

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
```

---

**Suggestions for Further Improvement:**

- Consider adding a diagram to illustrate the SSO authentication flow.
- Provide troubleshooting tips for common SSO integration issues.
- If supporting other identity providers (e.g., Facebook, Microsoft), add provider-specific notes or links to their documentation.
- Ensure all referenced UI elements (e.g., "Login > SSO") match the actual product interface for consistency.