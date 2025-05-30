---
description: Learn how to set up Stripe payment in your Momen project.
---

# How to Set Up Payment with Stripe Plugin

## Introduction

This guide demonstrates how to configure Stripe payments in Momen using Stripe's test mode.  
**Tip:** Always complete the payment process in test mode before going live.

**Example project:** [Stripe Payment Demo on Momen](https://editor.momen.app/tool/nwLdKMXyBXG/WEB?code=cLtSsuCGhuPaN)

![Stripe test mode](../.gitbook/assets/1%20(31).png "Stripe test mode")

---

## Step 1: Create a Stripe Actionflow in Momen

- Create an Actionflow for Stripe payments.
- Set up the Stripe Callback as the trigger.

![Configure Stripe Actionflow trigger](../.gitbook/assets/2.gif "Configure Stripe Actionflow trigger")

---

## Step 2: Configure Webhook in Stripe

- Go to [Stripe Webhooks (test mode)](https://dashboard.stripe.com/test/webhooks) or navigate to **Developers → Webhooks** in the Stripe dashboard.
- Create a new endpoint and enter the Callback URL generated in Momen.

![Configure webhooks in Stripe](../.gitbook/assets/3%20(19).png "Configure webhooks in Stripe")

- Add the required events to the endpoint.

![Select events in Stripe](../.gitbook/assets/4%20(17).png "Select events in Stripe")

- After setup, your page should look like this. Click **Add endpoint** to start listening for events.

![Webhook endpoint overview](../.gitbook/assets/5%20(12).png "Webhook endpoint overview")
![Webhook event details](../.gitbook/assets/6%20(11).png "Webhook event details")

---

## Step 3: Configure Payment Settings in Momen

- Enter your Stripe **Publishable Key** and **Secret Key** (test mode) from [Stripe API Keys](https://dashboard.stripe.com/test/apikeys).
- Set the Callback URL (from Step 1) and the endpoint secret (from the Stripe webhook page).

![Payment settings in Momen](../.gitbook/assets/7%20(7).png "Payment settings in Momen")
![Stripe API keys](../.gitbook/assets/8%20(5).png "Stripe API keys")
![Set callback URL and endpoint secret](../.gitbook/assets/9%20(4).png "Set callback URL and endpoint secret")

- Save and deploy your database.

![Save payment settings](../.gitbook/assets/10%20(3).png "Save payment settings")
![Deploy project](../.gitbook/assets/11%20(2).png "Deploy project")

---

## Step 4: Create a Data Model in Momen

Payment scenarios typically require an order model.  
**Note:** Stripe allows multiple payments per order. If your logic requires one payment per order, implement restrictions to prevent duplicate payments.

**Recommended data models:**
- **Payment:** Records order ID, Stripe payment ID, status, amount, currency, description, payment method. Use the payment's ID as the order ID for payment actions.
- **Event Log:** Tracks payment event stages (content, type, payment ID, Stripe payment ID), such as creation, in progress, failure, and success.

**Example logic:**
- On success: Add an event log, update payment status to "succeeded," set Stripe payment ID, and mark the order as paid.
- On failure: Add an event log, update payment status to "payment_failed," and set Stripe payment ID.
- For other statuses: Update Stripe payment ID and add an event log.

![Payment and event log data model](../.gitbook/assets/12%20(2).png "Payment and event log data model")

---

## Step 5: Modify the Actionflow in Momen

- After calling Stripe's payment API, you need to parse and handle the payment result in the Actionflow.
- Add a custom code node to extract and return key parameters:

```javascript
const body = context.getArg('fz_payment_callback_input');
const eventType = body.type;
const stripeObject = body.data.object;
const stripePaymentId = stripeObject.id;
const orderId = context.getOrderIdByStripePaymentId(stripePaymentId);
const paymentStatus = stripeObject.status;
context.setReturn('eventType', eventType);
context.setReturn('orderId', orderId);
context.setReturn('paymentStatus', paymentStatus);
context.setReturn('body', JSON.stringify(body));
```

- The `'fz_payment_callback_input'` parameter contains Stripe's callback data. The code above extracts and returns relevant fields for use in subsequent steps.

![Set Stripe parameters](../.gitbook/assets/13%20(1).png "Set Stripe parameters")

- Next, create an event log for the order.

![Create event log for order](../.gitbook/assets/14.png "Create event log for order")

- Finally, update the payment order based on the returned status using a conditional branch.

![Configure order update condition](../.gitbook/assets/15.png "Configure order update condition")
![Handle different payment results](../.gitbook/assets/16.png "Handle different payment results")
![Additional result handling](../.gitbook/assets/17.png "Additional result handling")

---

## Step 6: Call Stripe in Momen

- Typically, payments are initiated by a button click.
- **Important:** Users must be logged in before making a payment. Ensure registration and login actions are configured.

**Configuration steps:**

1. Enable user login in settings and deploy the database.

   ![Enable user login](../.gitbook/assets/18.png "Enable user login")

2. Add registration and login actions to the appropriate buttons.

   ![Add registration action](../.gitbook/assets/19.png "Add registration action")
   ![Add login action](../.gitbook/assets/20.png "Add login action")
   ![Login button example](../.gitbook/assets/21.png "Login button example")

3. After login is set up, configure the Stripe payment action.

   ![Configure Stripe payment action](../.gitbook/assets/23.png "Configure Stripe payment action")

   - **Order ID:** A long integer. The same order can be paid multiple times unless restricted by your logic.
   - **Currency:** Supported currencies: [Stripe Supported Currencies](https://stripe.com/docs/currencies#supported-payment-methods)
   - **Amount:** Must be in the smallest currency unit. [See Stripe documentation](https://stripe.com/docs/currencies#zero-decimal)
   - **Payment method:** Defaults to bank cards; no need to specify unless required.
   - **Actions on success/failure:** Configure actions such as showing a toast notification.

---

## About Momen

[Momen](https://momen.app/?channel=docs) is a no-code web app builder that lets you create fully customizable web apps, marketplaces, social networks, AI tools, enterprise SaaS platforms, and more. Iterate and refine your projects in real time for a smooth, streamlined creation process. Momen also offers powerful API integration, making it easy to connect your app to any service. Bring your ideas to life and launch products faster than ever with Momen.
