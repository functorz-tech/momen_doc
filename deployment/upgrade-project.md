# Upgrade Project Plan and Sever

Apart from the Enterprise plan, Momen's pricing is structured on project base. You can opt to upgrade a specific project in your personal center. Once upgraded, the new plan’s affliated computing resources and features will only apply to that particular project. You can also choose to directly purchase a plan when you create a project.

## Upgrade Plan

Momen offers several plans: Free, Basic, Pro, and Enterprise, each designed to meet different business needs. The Enterprise plan offer increased computing resources and advanced functionalities.

![](<../.gitbook/assets/0 (1).png>)

> After the upgrade, you need to schedule your sever activation

> Server and Feature Comparison [click here](https://momen.app/pricing)

### Computing Power
Momen's computing power includes server capacity, object storage, database storage, peak Requests Per Second (RPS), data outflow, and app tokens. Consumption of these resources is linked to the operations performed during app development, debugging, and live usage:

1. Object Storage: Stores images, audio, videos, and files (like Word, PDF, etc.), which are categorized as "objects" in database storage. For example, storing a 100 kb image consumes 100 kb of object storage.

2. Database Storage: Stores text data in your database.

3. RPS (Requests Per Second): This is a measure of how many requests your application can handle per second. High RPS indicates more server resource consumption. To ensure both stability and a good user experience, RPS is capped.

4. Data Outflow: Loading images, videos, and other files in the app consumes equivalent data traffic.

5. App Tokens: These are utilized when activating Momen AI capabilities or performing text vectorization.

6. Actionflow Automation Count: This refers to how many times left for scheduled and database change executions.

#### Viewing and Purchasing Computing Resource

Hover over a project in user center and click “Manage” to see its computing power details.

![](<../.gitbook/assets/2 (1) (1).png>)


you can click the “+ Add” button next to the desired resource to purchasing more computing power.

![](<../.gitbook/assets/4 (1).png>)

#### Limits on Computing Power and Consequences

As your app's user base and stored resources grow, you may exceed the computing capabilities included in your plans. Momen will alert you when you are nearing or have exceeded your computing power limits.

If your project runs out of computing resources:

Maxed Out RPS: This could lead to congestion or errors in app access.

Depleted Data Outflow: The app will fail to load images, videos, and other file data.

Full Object Storage: You will be unable to save new images, videos, or other file data in the database.

Full Database Storage: Saving new text data in the database will be impossible.

Depleted App Tokens: New text cannot be vectorized, and AI functionalities will be unavailable.

Depleted Actionflow Automation count: Unable to run actionflow when triggered.


## Sever Activation

After the plan upgrade, you can choose to activate the server right away or schedule an automated activation within seven days.

<figure><img src="../.gitbook/assets/截屏2024-04-25 12.41.02.png" alt=""><figcaption></figcaption></figure>

If you didn't select the activation option on the upgrade success page, on project detail page, you can still continue to schedule activation in the reminder bar at the top of the project information.

<figure><img src="../.gitbook/assets/截屏2024-04-28 16.35.42.png" alt=""><figcaption></figcaption></figure>

1. During the server upgrade and activation, the project cannot be edited and the online application cannot be accessed. We recommend that you schedule the activation time based on your business requirements.

2. After the activation is successful, you will receive a system notification and email notification, and you can view the server status on the project details page.

3. If a server upgrade or activation fails due to network issues, you will receive a system and email notification. Our engineering team will solve the problem for you as soon as possible, and you can also contact us to follow up on the latest progress of the solution.

