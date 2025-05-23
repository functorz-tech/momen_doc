# How to Set a Countdown Timer When Sending a Verification Code

## Introduction

Implement a user-friendly verification process on your registration or login page by adding a countdown timer to the "Send Verification Code" button.

---

## Steps to Set Up a Countdown Timer

### 1. Initialize Countdown Data

- Add a page variable of type **Integer** (e.g., `countdown`).
- Set its initial value to 60 on page load (representing 60 seconds).

| ![Add countdown variable](../.gitbook/assets/1%20(83).png "Add countdown variable") | ![Initialize countdown](../.gitbook/assets/2%20(68).png "Initialize countdown") |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |

---

### 2. Set Up a Scheduled Job

- Configure a scheduled job with a trigger interval of 1000 milliseconds (1 second).
- This job will decrement the countdown value every second.

![Configure scheduled job](../.gitbook/assets/3%20(65).png "Configure scheduled job")

---

### 3. Configure the Send Verification Code Button

- Use a **Conditional Container** for the button with two sub-containers:
  - **Not Sent State:**  
    - Place a button labeled "Send Verification Code."
    - Set the action to send the code (choose the appropriate verification type).
    - On success, show a prompt, switch to the "Sent" state, and start the scheduled job.
  - **Sent State:**  
    - Use a text component bound to the countdown variable to display the remaining time.

![Conditional container setup](../.gitbook/assets/4%20(62).png "Conditional container setup")
![Send code button](../.gitbook/assets/5%20(49).png "Send code button")
![Countdown display](../.gitbook/assets/6%20(43).png "Countdown display")

---

### 4. Configure Scheduled Task Logic

- **When countdown reaches 0:**
  - Stop the scheduled job.
  - Reset the countdown variable.
  - Switch the conditional container back to the "Not Sent" state.

![End of countdown logic](../.gitbook/assets/image%20(13)%20(1).png "End of countdown logic")

- **When countdown > 0:**
  - Subtract 1 from the countdown variable using a formula.
  - Update the page data to reflect the new countdown value.

![Decrement countdown](../.gitbook/assets/7%20(33).png "Decrement countdown")

---

## About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder that enables users to create fully customizable web apps, marketplaces, social networks, AI apps, enterprise SaaS, and more. Momen supports real-time iteration, powerful API integration, and rapid product launch.
