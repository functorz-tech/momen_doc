# Upgrade Project Plans
### **Introduction**

Momen offers a variety of tiered packages to suit different needs—from basic functionalities for simple projects to advanced options with substantial computing power and premium features. This doc will explain Momen's different plans, their abilities and computing resources, helping you to choose the right plan and optimize your application's performance.

Apart from the Enterprise plan, Momen's pricing is structured around individual projects. You can opt to upgrade a specific project in your personal center. Once upgraded, the new plan’s enhanced computing capabilities and advanced features will only apply to that particular project. You can also choose to directly purchase a premium plan when you create a project.

### **Plan Options**

Momen offers several plans: Free, Basic, Pro, and Enterprise, each designed to meet different business needs. Premium plans offer increased computing resources and advanced functionalities. The Enterprise plan allows the creation of 5 Advanced and 5 Professional projects for free within a team space.

![](<../.gitbook/assets/0 (1).png>)

### **Server and Feature Comparison**

After the upgrade, your project will undergo server migration according to its new version. For details on migration rules, please refer to [Server Activation for Premium Plans](https://docs.momen.app/get-started/account-and-billing/server-activation-for-premium-plans).

#### **Server Comparison**

| Server Type          | Specifications                                                             | Description                                                                                                                                               |
| -------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Free Server          | <p>2-core shared CPU</p><p>6GB shared memory</p><p>5 RPS</p>               | Projects on basic servers share CPU and memory with 750 other projects. (Performance may be affected during high-traffic periods.)                        |
| Basic Server         | <p>3-core shared CPU</p><p>10GB shared memory</p><p>5 RPS</p>              | Projects on advanced servers share CPU and memory with 100 other projects. (Performance may be affected during high-traffic periods.)                     |
| Pro Server           | <p>3-core shared CPU</p><p>10GB shared memory</p><p>25 RPS</p>             | Projects on professional servers share CPU and memory with 50 other projects. (Performance may be affected during high-traffic periods.)                  |
| Enterprise Server    | <p>3-core shared CPU</p><p>10GB shared memory</p><p>Unlimited RPS</p>      | Projects on enterprise servers share CPU and memory within the same user account, providing a more isolated environment compared to other shared options. |
| Single-Tenant Server | <p>1-core dedicated CPU</p><p>4GB dedicated memory</p><p>Unlimited RPS</p> | Projects on single-tenant servers enjoy dedicated CPU and memory, ensuring optimal performance without interference from other projects.                  |

#### **Feature Comparison**

| **Plan**                                       | Free                                                              | Basic                                                        | Pro                                                        | Enterprise                                                                                       |
| ---------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| <p><strong>Business Scenarios</strong><br></p> | Building project demos, experiencing web development capabilities | <p>Building apps that do not require online payments<br></p> | <p>Building applications for commercial operations<br></p> | Building large-scale, comprehensive applications for internal and external corporate or team use |
| **Cost**                                       | Free                                                              | $39/mo, $396/yr                                              | $99/mo, $1020/yr                                           | Contact us                                                                                       |



**Fundamental Features**

| **Plan**                    | Free           | Basic                | Pro       | Enterprise |
| --------------------------- | -------------- | -------------------- | --------- | ---------- |
| **Number of projects**      | Unlimited      | Unlimited            | Unlimited | Unlimited  |
| **Project watermark**       | <p>Yes<br></p> | No                   | No        | No         |
| **Number of pages**         | Unlimited      | Unlimited            | Unlimited | Unlimited  |
| **Number of data requests** | Unlimited      | <p>Unlimited<br></p> | Unlimited | Unlimited  |



**Computing Powers**

| **Plan**             | Free      | Basic    | Pro      | Enterprise   |
| -------------------- | --------- | -------- | -------- | ------------ |
| **Object storage**   | 500 MB    | 2 GB     | 10 GB    | Customizable |
| **Data outflow**     | 500 MB/mo | 24 GB/mo | 48 GB/mo | Customizable |
| **Database storage** | 500 MB    | 12 GB    | 24 GB    | Customizable |
| **RPS**              | 5         | 5        | 25       | Customizable |
| **App Tokens**       | 50000     | 50000/mo | 50000/mo | Customizable |



**Advanced Features**

| **Plan**                            | Free | Basic     | Pro       | Enterprise   |
| ----------------------------------- | ---- | --------- | --------- | ------------ |
| **APIs**                            | 1    | Unlimited | Unlimited | Unlimited    |
| **Actionflows**                     | 1    | Unlimited | Unlimited | Unlimited    |
| **Collaboration**                   | -    | 1         | 3         | Customizable |
| **Upgrade Computing Power**         | -    | Yes       | Yes       | Yes          |
| **Payment Functionality**           | -    | -         | Yes       | Yes          |
| **Multi-client Functionality**      | -    | -         | Yes       | Yes          |
| **SSO Configuration**               | -    | -         | Yes       | Yes          |
| **SEO Configuration**               | -    | -         | Yes       | Yes          |
| **Permission Configuration**        | -    | -         | Yes       | Yes          |
| **Custom Domain**                   | -    | -         | Yes       | Yes          |
| **Testing/Development Environment** | -    | -         | -         | Yes          |
| **Project Plan Rollback**           | -    | -         | -         | Yes          |
| **Private Deployment**              | -    | -         | -         | Yes          |
| **Team Space**                      | -    | -         | -         | Yes          |

### **Computing Power**

#### **Understanding Computing Power**

Momen's computing power includes server capacity, object storage, database storage, peak Requests Per Second (RPS), data outflow, and app tokens. Consumption of these resources is linked to the operations performed during app development, debugging, and live usage:

Object Storage: Stores images, audio, videos, and files (like Word, PDF, etc.), which are categorized as "objects" in database storage. For example, storing a 100 kb image consumes 100 kb of object storage.

Database Storage: Stores text data in your database.

[RPS (Requests Per Second)](rps.md): This is a measure of how many requests your application can handle per second. High RPS indicates more server resource consumption. To ensure both stability and a good user experience, RPS is capped.

Data Outflow: Loading images, videos, and other files in the app consumes equivalent data traffic.

App Tokens: These are utilized when activating Momen AI capabilities or performing text vectorization.

#### **Limits on Computing Power and Consequences**

As your app's user base and stored resources grow, you may exceed the computing capabilities included in your plans. Momen will alert you when you are nearing or have exceeded your computing power limits.

If your project runs out of computing resources:

Maxed Out RPS: This could lead to congestion or errors in app access. Refer here for the [solution](rps.md).

Depleted Data Outflow: The app will fail to load images, videos, and other file data.

Full Object Storage: You will be unable to save new images, videos, or other file data in the database.

Full Database Storage: Saving new text data in the database will be impossible.

Depleted App Tokens: New text cannot be vectorized, and AI functionalities will be unavailable.

**Viewing and Purchasing Computing Power**

Hover over a project in your personal center and click “Details” to see its computing power details.

![](<../.gitbook/assets/1 (1).png>)

![](<../.gitbook/assets/2 (1) (1).png>)

If your project is on free plan and needs more resources, you'll need to upgrade to a premium plan first.

![](<../.gitbook/assets/3 (1) (1).png>)

For apps already on the premium plan, additional computing power can be purchased by navigating to the "Details" section and selecting “More Resources” or by clicking the “+ Add” button next to the desired resource.

![](<../.gitbook/assets/4 (1).png>)

### **About Momen**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
