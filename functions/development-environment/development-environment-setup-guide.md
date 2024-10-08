# Development Environment Setup Guide

### **Production Environment**

* It refers to the actual operational environment where applications or systems provide services to end users.
* This is the version of the system that users ultimately access and use, which includes real data and functionality.
* The stability and reliability of the production environment are very important as they directly affect user experience and business operations.

### **Development Environment**

* It is a setting used for creating, testing, and modifying applications or systems and is typically utilized for software development and maintenance.
* Within this environment, developers can freely conduct experiments, write code, and test new features without risking any impact on the live environment.
* Development environments are isolated, which allows them to simulate certain aspects of the live environment, but their primary function is to support development, debugging, and testing processes.

In summary, the production environment is the actual running environment where end users access and interact, which affects user experience. The development environment, on the other hand, is an isolated space for the development, testing, and maintenance of applications or systems. By separating these two environments, we can ensure thorough testing and validation of new features or code before they are deployed to the production line.

### **The value of functionality:**

* Separating the development environment from the production environment reduces the impact of errors or issues that occur during development and testing, allowing editors to experiment and test without worrying about damaging the live environment.
* The development environment supports synchronization of real online data to fill the test environment database. This avoids reliance on real data for testing, thereby speeding up project iterations.
* The separation of environments simplifies management. Users can carry out different operations in the development and production environments, such as construction, editing, and testing in the development environment, and publishing operations in the production environment, to meet the needs of each stage.

### **Usage Scenario**

1. Front-end page iteration and backend configuration changes brought about by business logic adjustments.
2. Using test data for project setup.

### **Function Description**

**Activate Development Environment**

1. Available Version: Pro version projects
2. Activatable Roles: Project owners and managers
3. Activation Location: In the config settings, click the activation button to start the development environment

![](<../../.gitbook/assets/0 (2).png>)

### **Utilizing Development Environment**

**Activate Environment**

Once the development environment is activated, the project will be divided into: the online environment and the development environment.

1. The online environment will be set to view-only, where users can only perform operations such as establishing and sharing database sub-libraries, project deployment, previewing, publishing, and changing formal and test payment keys in the online environment.
2. When creating the development environment, the front-end pages and configurations, as well as the backend data structure (excluding database data) from the current online environment, will be copied to the development environment.

### **Synchronize Online Data**

The development environment supports the synchronization of online data.

1. When the backend structures of the online and development environments remain consistent (that is, no changes have been made and deployed after the creation of the development environment), users can synchronize the data from the online environment to the development environment's database; modifications to the development environment's database will not affect the online data.

![](<../../.gitbook/assets/1 (2).png>)

2. Once the development environment can be merged into the production environment, it can proceed to publish in the production environment.

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-27 at 14.54.29.png" alt=""><figcaption></figcaption></figure>

After users have made backend data and frontend page and configuration changes in the development environment, successfully deployed, and previewed to check the effectiveness of the changes, they can merge the development environment into the production environment (the database data in the development environment will not be merged into the production database). After deploying and previewing in the production environment, the latest version can be published.

### **Switching Environments**

Click the top capsule to switch between the development and production environments.

### **Closing the Development Environment**

After closing the development environment, all frontend pages and backend data and configurations of the development environment will be cleared. Users are advised to operate with caution.

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-27 at 14.57.40.png" alt=""><figcaption></figcaption></figure>

### **Precautions**

When using the development environment feature, attention should be paid to:

1. Creation:

* The speed of creating a development environment depends on the size of the current project.
* During the creation of the development environment, collaborators will automatically enter the creation interface, and the page will be refreshed after success.
* After the successful creation of the development environment, project owners, managers, and editors can click the environment switch in the top navigation bar and switch between \[Production Environment] and \[Development Environment]. Project viewers cannot enter the development environment.

2. Building:

* Project Ownership and Management: After creating the Development Environment, only project owners, managers, and editors can build the project there.
* Custom Features: You can flexibly handle specific features, such as payment functions and database sub-libraries as follows.
* Payment Function: Test Key in Development: Use a test key for updates and adjustments.
* Database sub-library establishment and sharing: Since the use of database sub-libraries often focuses on sharing real business data for clients to view, edit, and modify, users need to establish, modify, and share the databases in the production environment.
* Synchronize Data: Consistency: If the backend structure matches, sync real data from Production to Development.
* Data Changes: Development changes won’t affect Production.

3. Publishing Process:

* Merge Environment: After reviewing the development work, merge it into the Production Environment. Ensure any backend changes do not affect integral functionalities.
* Post-Merge: Decide whether to stay in Development or switch to Production for deploying the updates.

### **About Momen​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
