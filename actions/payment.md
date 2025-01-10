---
description: >-
  Learn about Momen's built-in payment function. Build your native Stripe
  payment to boost your app's monetization.
---

# Payment with Stripe

### Introduction

In this doc, you'll learn about how to configure Stripe payment in your web app. Whether you're running an e-commerce platform, a subscription-based service, or even a SaaS product, providing users with a secure and easy-to-use payment system can significantly impact your bottom line.

### Preparation

#### Prepare a Stripe Account

Sign up or log in to Stripe: [Stripe](https://stripe.com/)

#### Upgrade Your Project to Pro Version or Above

Payment features are only available in the Pro plan and above. If you downgrade, existing payment features will become inactive.

### Create an Order Table in Your Project

Before configuring payment, ensure you have an order table in your project. This table will be linked to the system's payment table.

### Fill in Basic Information

#### Activate Payment Features

Go to the Configuration settings and activate the Payment feature.

<figure><img src="../../.gitbook/assets/stripe/stripe.jpeg" alt=""><figcaption></figcaption></figure>

When activating, bind the order table created. The system will automatically create a one-to-many relationship between the order and payment tables. Please note:

* All payment methods share the same order table.
* Once bound, it cannot be unbound or replaced, and the order table cannot be deleted. Be cautious during the binding process.

<figure><img src="../../.gitbook/assets/stripe/stripe2.jpeg" alt=""><figcaption></figcaption></figure>

Upon binding the order table and activating the payment feature, the system will automatically:

* Create three tables in the data model (non-deletable, non-modifiable by the developer):
  * Payment Table: Stores payment records. The relationship is 1:N (one order can have multiple payments).
  * Recurring Payment Table: Stores recurring payment records.
  * Refund Table: Stores refund records. The relationship is 1:N (one payment can have multiple refunds).
*   Automatically generate two actionflows:

    * Payment Callback Actionflow: Triggered upon payment completion.
    * Refund Callback Actionflow: Triggered upon refund completion.

    <figure><img src="../../.gitbook/assets/stripe/stripe3.jpeg" alt=""><figcaption></figcaption></figure>

    <figure><img src="../../.gitbook/assets/stripe/stripe4.jpeg" alt=""><figcaption></figcaption></figure>

#### Input Stripe Information

Retrieve your Publishable Key and Secret Key from Stripe and fill them into the project configuration.

<figure><img src="../../.gitbook/assets/stripe/stripe5.jpeg" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/stripe/stripe6.jpeg" alt=""><figcaption></figcaption></figure>

### Using Payment/Refund Actions

#### Adding Actions

Find the Stripe actions in the Action List.

<figure><img src="../../.gitbook/assets/stripe/stripe7.jpeg" alt=""><figcaption></figcaption></figure>

#### Configure Action Parameters

**Single Payment Action**

<figure><img src="../../.gitbook/assets/stripe/stripe8.jpeg" alt=""><figcaption></figcaption></figure>

Order ID (integer): Must be the ID of the bound order table. Currency (string): Stripe-supported currencies. See: [Stripe Currencies](https://docs.stripe.com/currencies#supported-payment-methods) Amount (decimal): Smallest currency unit. For example, to charge 100 USD, input 1000 (since USD’s smallest unit is cents). See: [Stripe Currencies](https://docs.stripe.com/currencies#supported-payment-methods)

**Refund Action**

<figure><img src="../../.gitbook/assets/stripe/stripe9.jpeg" alt=""><figcaption></figcaption></figure>

Payment ID (integer): Must be the ID from the payment table. Refund Amount (decimal): The amount to refund, which must be less than or equal to the original payment amount.

**Recurring Payment Action**

Before configuring, you must create a recurring payment price in Stripe and obtain the Price ID.

<figure><img src="../../.gitbook/assets/stripe/stripe10.jpeg" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/stripe/stripe11.jpeg" alt=""><figcaption></figcaption></figure>

Type (option): Initiate for starting a recurring payment, Cancel for canceling it. Order ID (decimal): Must be the ID of the bound order table. Price ID (string): The price ID obtained from Stripe.

#### Configure Action Permissions

In the Permission System, you can set access controls for actions, especially for refund actions. It’s recommended to restrict this permission from regular users to avoid financial loss. A better approach is to create a special admin role with refund permissions.

<figure><img src="../../.gitbook/assets/stripe/stripe12.jpeg" alt=""><figcaption></figcaption></figure>

### Configuring Business Logic After Completing Actions

Since front-end pages can be bypassed (e.g., users calling the success action via API without making a payment), it’s essential not to modify data in the "success" part of the payment action. The more secure method is to allow Stripe to notify your project’s backend, which will trigger corresponding Actionflows. These actionflows run securely in the backend.

#### Payment Callback Actionflow

This flow is triggered after payment completion. The built-in nodes include:

* Callback Handler: This code block parses payment-related data and extracts key information (like order ID and payment status). It outputs:
  * orderId: The order ID provided during the payment action.
  * paymentStatus: The status of the payment.
  * callbackProcessed: Checks whether the callback is a duplicate, used along with paymentStatus to determine the real status of the payment.
*   Conditional Branch:

    * Based on the status of paymentStatus and callbackProcessed, determine whether the payment was successful
    * Configure your own business logic within the branch.

    <figure><img src="../../.gitbook/assets/stripe/stripe13.jpeg" alt=""><figcaption></figcaption></figure>

#### Refund Callback Actionflow

This flow is triggered after a refund is completed. The built-in nodes include:

* Callback Handler: This block parses the refund data and extracts key information (like order ID and refund status). It outputs:
  * orderId: The related order table ID.
  * status: The refund status. If REFUNDED, it indicates a successful refund, otherwise, it indicates failure.
  * callbackProcessed: Checks whether the callback is a duplicate.
*   Conditional Branch: Handles post-refund logic (e.g., updating the order table), which you need to configure based on your business needs.

    <figure><img src="../../.gitbook/assets/stripe/stripe14.jpeg" alt=""><figcaption></figcaption></figure>

#### Recurring Payment Creation/Cancellation Callback

Triggered when recurring payments are created or canceled. In the code block, the data in the recurring\_payment table will be updated.

<figure><img src="../../.gitbook/assets/stripe/stripe15.jpeg" alt=""><figcaption></figcaption></figure>

#### Recurring Payment Charge

When a recurring payment is created, Stripe will notify the project backend of any subsequent charges, triggering this actionflow. The code block will:

1. Retrieve charge information.
2. Create a new order.
3.  Process the payment.

    <figure><img src="../../.gitbook/assets/stripe/stripe16.jpeg" alt=""><figcaption></figcaption></figure>

In the code block, modify the part that creates the order based on your specific order table. You can also adjust the amount for subsequent charges (which cannot exceed the amount set during the initial recurring payment).

<figure><img src="../../.gitbook/assets/stripe/stripe17.jpeg" alt=""><figcaption></figcaption></figure>

### Retrieving Payment/Refund Results

Since updating the order/payment/recurring payment/refund tables occurs through custom actionflows and may take time, the front-end should use a subscription method to get the latest data. For example, after calling a payment action, the page can subscribe to the payment table to receive real-time updates on payment status.

<figure><img src="../../.gitbook/assets/stripe/stripe18.jpeg" alt=""><figcaption></figcaption></figure>



### About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.
