# Upgrade Project Plan and Server

Except for the Enterprise plan, Momen uses project-based pricing. You can upgrade a specific project in your personal center. Once upgraded, the new plan’s computing resources and features will apply only to that project. You can also purchase a plan directly when creating a project.

## Upgrade Plan

Momen offers several plans-Free, Basic, Pro, and Enterprise—each designed to meet different business needs. The Enterprise plan provides increased computing resources and advanced features.

![plans](<../.gitbook/assets/0 (1).png>)

> After upgrading, you must schedule your server activation.
>
> For a comparison of server resources and features, [click here](https://momen.app/pricing).

### Computing Power

Momen's computing power includes server capacity, object storage, database storage, peak Requests Per Second (RPS), data outflow, and app tokens. Usage of these resources is tied to operations performed during app development, debugging, and live usage:

1. **Object Storage**: Stores images, audio, videos, and files (e.g., Word, PDF), categorized as "objects" in database storage. For example, storing a 100 KB image consumes 100 KB of object storage.
2. **Database Storage**: Stores text data in your database.
3. **RPS (Requests Per Second)**: Indicates how many requests your application can handle per second. Higher RPS means greater server resource consumption. RPS is capped to ensure stability and a good user experience.
4. **Data Outflow**: Loading images, videos, and other files in the app consumes equivalent data traffic.
5. **App Tokens**: Used when enabling Momen AI features or performing text vectorization.
6. **Actionflow Automation Count**: The number of scheduled and database-triggered executions remaining.

#### Viewing and Purchasing Computing Resources

Hover over a project in the user center and click “Manage” to view its computing power details.

![project detail](<../.gitbook/assets/2 (1) (1).png>)

Click the “+ Add” button next to a resource to purchase additional computing power.

![resources detail](<../.gitbook/assets/4 (1).png>)

#### Limits on Computing Power and Consequences

As your app’s user base and stored resources grow, you may exceed the computing resources included in your plan. Momen will notify you when you are approaching or have exceeded your limits.

If your project runs out of computing resources:

- **Maxed Out RPS**: May cause congestion or errors when accessing the app.
- **Depleted Data Outflow**: The app will fail to load images, videos, and other files.
- **Full Object Storage**: You cannot save new images, videos, or files in the database.
- **Full Database Storage**: New text data cannot be saved in the database.
- **Depleted App Tokens**: New text cannot be vectorized, and AI features will be unavailable.
- **Depleted Actionflow Automation Count**: Actionflows will not run when triggered.

## Server Activation

After upgrading your plan, you can activate the server immediately or schedule automatic activation within seven days.

<figure><img src="../.gitbook/assets/截屏2024-04-25 12.41.02.png" alt="Server activation scheduling screenshot"><figcaption>Schedule server activation</figcaption></figure>

If you did not select the activation option on the upgrade success page, you can still schedule activation from the reminder bar at the top of the project details page.

<figure><img src="../.gitbook/assets/截屏2024-04-28 16.35.42.png" alt="Project detail page activation reminder"><figcaption>Activation reminder in project details</figcaption></figure>

1. During server upgrade and activation, the project cannot be edited, and the online application will be inaccessible. We recommend scheduling activation based on your business needs.
2. After successful activation, you will receive both a system and email notification. You can view the server status on the project details page.
3. If server upgrade or activation fails due to network issues, you will receive a system and email notification. Our engineering team will resolve the issue as soon as possible. You may also contact us to follow up on the latest progress.

