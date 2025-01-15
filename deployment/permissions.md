---
description: >-
  Set up various user roles with permissions tailored to
  access or modify designated tables / columns, interact with certain APIs, and
  ActionFlow, along with configuration of AI.
---

# Permissions
The permission system is the infrastructure of commercial software. Through refined permission control, it can effectively prevent data leakage, unauthorized access, and other security risks, ensuring the integrity and confidentiality of the system and data.

Momen provides a permission management system that combines Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC). While ensuring data security, it also allows for flexible and precise permission control.

## Basic Concepts
**Role**: A collection of a type of users; user permission control is achieved by granting users roles, where roles are bound with multiple permissions.
**Data Permission**: Precisely controls the data content that a role can access or modify.
**Action Permission**: Controls the actions a role can perform, such as Actionflow, APIs, payment actions, refund actions, etc.

![](<../.gitbook/assets/permission/permission0.png>)

## Getting started
### 1. Open Permissions
![](<../.gitbook/assets/permission/permission1.png>)

### 2. Role Management
The system has two built-in roles:
* **Logged-in User**
  * Any user who logs in (via username and password, phone number and password, etc.) is automatically granted this role.
  * Since the applet will automatically perform "silent login" behavior, any user on the applet has this role.
* **Anonymous User**
  * Unlogged visitors are assigned this role.
  * There are no guests in the applet.

In addition to the system's built-in roles, developers can create their own roles. The number of roles that can be created varies with different Project versions:
* Free Plan: 0 roles
* Basic Plan: 1 role
* Pro Plan: 10 roles
![](<../.gitbook/assets/permission/permission2.png>)

### 3. Set up permissions
#### Data Permission
1. Operation Permission: Manage permissions for adding, deleting, modifying, and querying data.
![](<../.gitbook/assets/permission/permission3.png>)

2. Field Permission: Further configure the operation permissions for a specific column in the data table.
![](<../.gitbook/assets/permission/permission4.png>)

3. Advanced Filtering: Configure attribute-based more refined operation permissions through row filtering (e.g., users can only modify their own data).
![](<../.gitbook/assets/permission/permission5.png>)
![](<../.gitbook/assets/permission/permission6.png>)

#### Action Permission
Control the permissions for user actions, including API, Actionflow, AI, and Payment.
![](<../.gitbook/assets/permission/permission7.png>)

### 4. Assign Roles to Users
After configuring the roles, you can assign them to a user. There are two ways to do this:
1. Manually manage in the permission management system
Click the button under "User Management" to view which users are under this role and add/remove users for this role.

![](<../.gitbook/assets/permission/permission8.png>)

2. Automatically manage in Actionflow
Use the permission node in Actionflow to grant and remove roles for certain users, achieving some automated scenarios. For example, grant a VIP role after a user successfully purchases a product.

![](<../.gitbook/assets/permission/permission9.png>)

### 5. Make Permissions Effective
After changing the permission configuration, you need to deploy the backend for it to take effect. Automated authorization Actionflow also needs to be published before it takes effect.

## Considerations
- Encountering the error "User xxxx has no permission for xxxxx"
  - Cause: The user does not have the corresponding permission.
  - Solution: Go to the permission configuration and add the corresponding operation permission for the user's role.
  