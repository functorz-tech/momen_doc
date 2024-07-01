---
description: >-
  This doc introduces a typical data model design example for appointment
  scheduling apps.
---

# Appointment Scheduling

An appointment scheduling app enables users explore various types of services, view detailed descriptions and reviews, schedule appointments for specific times, and manage their booking history and personal information. Like e-commerce platforms, this application deals with both public and private data. For instance, basic service information needs to be publicly accessible to enable users to search and book appointments, whereas users' booking histories should remain private, visible only to the individual users and administrators. We will ensure data security and privacy through proper permission settings.

### **Common Data Model Design for Appointment Scheduling Applications**&#x20;

The data model for appointment scheduling applications typically includes several core tables: Users, Services, Appointments, Reviews, with additional tables for User Preferences and Feedback to enhance user experience.

#### **Users Table**&#x20;

Users table stores essential information about users who are categorized as either ordinary users—who book services—or administrators—who manage service information and address user feedback.

**Common Fields**

* **ID**: An integer, auto-incremented, and unique, serving as the user's unique identifier within the app.
* **Created\_at and Updated\_at**: Timestamps that record the user's registration and last update times.
* **Name and Phone Number**: Basic personal information stored as text.
* **Role**: An enum type distinguishing between ordinary users and administrators.
* **My Appointments**: A relational field that links to the Appointments table, allowing users to view all their scheduled appointments.
* **My Reviews**: A relational field that connects to the Reviews table, enabling users to access all their feedback on services.

**Permission Settings**

* Users have the autonomy to view all their personal information and can update their name and phone number.
* The role is administratively assigned and is not user-modifiable.
* Users have access to their own appointments and reviews for viewing and modifications.

#### **Services Table**&#x20;

This table catalogs all available services for booking, detailing each service comprehensively.

**Common Fields**

* **Name, Description, and Image**: Provide a full description and visual representation of services.
* **Price**: Listed as an unlimited precision decimal.
* **Category ID and Status**: Help categorize and display the availability of services.

**Permission Settings**

* All users can view public service details.
* Only administrators have the authority to modify service information.

#### **Appointments Table**&#x20;

Documents detailed records of user bookings.

**Common Fields**

* **User ID and Service ID**: Link the appointment to the user and the specific service.
* **Booking Time and Status**: Record the exact time of the appointment and its current status (e.g., confirmed, canceled).

**Permission Settings**

* Users can manage their own appointments.
* Administrators oversee all appointment details.

#### **Reviews Table**&#x20;

Stores user feedback on services post-appointment.

**Common Fields**

* **User ID and Service ID**: Link the appointment to the user and the specific service.
* **Scores**: Integer. Users' scores on the service
* **Comments:** Text. Detailed comment to the service.

**Permission Settings**

* Reviews are public, but only the author or administrators can modify or delete them.

### **References**

* Read [Login Design ](https://docs.momen.app/tutorial/how-to-design-your-login-page)to understand the data sources of the user table.
* In [Permission Management](https://docs.momen.app/advanced-functionality/permission-management), you can learn how to configure your web's permission.

### **About Momen​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
