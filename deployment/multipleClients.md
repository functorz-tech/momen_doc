---
description: >-
  Learn how to create different frontends with one shared server.
---
# Multiple Clients
A client refers to a front-end interface developed for different user groups or roles while sharing a single back-end database. For instance, an e-commerce app may have separate front-end interfaces for users and administrators, while a business may create different login and operational portals for various departments. 

## Value
1. Customized Experience: By developing dedicated front-end interfaces for various user groups, you can offer a tailored experience, improving user satisfaction.   
2. Security and Access Control: Multiple clients can provide different levels of access control based on user roles and permissions. The admin portal may have advanced permissions to manage and monitor the entire system, while the user portal allows only basic browsing and purchasing.   
3. Improved Efficiency: In a business setting, different departments may have unique workflows and needs. By creating specialized operational portals for each department, work efficiency is enhanced, allowing employees to complete tasks more quickly.   
4. Reduced Complexity: Separating the development and maintenance of features for different user groups helps reduce system complexity and maintenance costs. Each portal can focus on the specific needs of its user group, avoiding functional overlap or redundancy.   
5. Unified Data Management: Although multiple front-end portals exist, they share the same back-end database, simplifying data management and ensuring consistency. Whether through the user or admin portal, users can access the same data, ensuring accuracy and reliability.   

## Multi-clients guide:
1. Upgrade to Pro and Purchase Additional Clients: A project must be upgraded to the pro version in order to add multiple clients. If a project is already a Pro, when adding a new client, the users will buy the Pro plan again, which includes the new client(s). The cost of each client is calculated at half the price of the current pro version. For example, a monthly pro version with one client would be priced as: Pro Version ($39) + one client ($39/2) = $ 58.50. Upon successful purchase, the platform will refund based on the remaining days of the previous order.

2. After Purchasing Additional Clients: The project will be split into the following three portals:
  - Server (Back-end): The primary function of this client is to manage data models and perform data management tasks. Here, you can create data tables, define fields, set constraints, and manage table relationships.
  - Web Client: The default client created before adding new clients, allowing you to view data models and build front-end pages.
  - New Client: The newly added web portal, where you can design and build new front-end pages.

3. Renewing Clients: When renewing, it will automatically calculate the price for all clients along with the cost of Pro plan. If you wish to exclude any client from renewal, please delete that client before renewal.

4. Version Downgrade: When the project is downgraded to a non-pro version, all additional clients will become read-only and cannot be edited or published. The default client will remain unaffected.

5. Reactivating Clients When upgrading to Pro Again: If the project has expired and you upgrade to the pro version again, you can choose to reactivate previously purchased clients. This activation can only be done once. Clients not activated will be deleted.

## Notes:
1. A project must be upgraded to the pro version in order to add multiple clients.   
2. Publish a client with a custom domain: After creating new clients, if you need a custom domain during release, you can apply for a second-level domain through a domain provider and publish clients with the configured domain.    
3. Deleting Multiple Clients: If you no longer wish to renew a specific client, simply delete that client before the next version renewal.   
4. Reactivating Multiple Clients: After expiration, when upgrading to the pro version again, you can choose to reactivate previously purchased clients. If not, the clients will be deleted.   
5. The clients expires before January 22, 2025, will be deleted.   

