# How to Debug in Momen

Debugging is a critical aspect of application development. Learning how to observe issues, pinpoint errors, and resolve problems in cases of errors and exceptions is a fundamental skill for developers. Among these, observation is the most crucial step, serving as the foundation for subsequent actions. Therefore, this document primarily focuses on how to observe and extract necessary information in Momen.

Momen categorizes errors into three types: **Editing Errors**, **Deployment and Publishing Errors**, and **Runtime Errors**. This document provides guidance on how to debug each type of error.

### Editing Errors

#### Symptoms

* The error icon in the top-right corner of the editor displays a number.

#### Solution

* Click the icon to navigate to the error and modify the issue based on the error message.
* Below are two examples:

**Example 1: Type Error**

* Type mismatch in component, action, or bound data.
  * Expected type: `(Null | Nothing | Int)`
  * Actual type: `String`
* **Analysis & Solution:** Entering "$1" in a price field triggers a type error since the field requires an integer value. Remove the "$" symbol to resolve the issue.

    ![Example 1](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MmM4MTNmN2M3MGRhM2QzNmZjY2NhMmM0ODg0Y2M5M2ZfMkR6czA1ZjN3Tkc1OXJiWGxZZUpQTGZOeGFtM1hkV0tfVG9rZW46TGtnb2JzaW5xb2drdVl4cm1KSGNBdHU1bmlmXzE3NDI1NTk2Mjc6MTc0MjU2MzIyN19WNA)

**Example 2: Missing Required Field**

* The system detects that a required field is not provided.
* Modify the field according to the error message.

![Example 2](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=ODg1NjUwYmFiOTY0MDY1ZGQ0NTljZDhkNDViNGJhODBfbU1tb0Rwa1ZuS1FOV3JRdVIwWTlwUU0zSGlTdUVUaWZfVG9rZW46TnJwbWJzUzVSb3pUSGh4c1RGZmNINGRabjhiXzE3NDI1NTk2Mjc6MTc0MjU2MzIyN19WNA)

***

### Deployment and Publishing Errors

#### Symptoms

1. Error during preview update.
2. Backend deployment failure.

#### Solution

1. Check the error message (if available).
2. Fix the issue based on the provided error details. If unclear, ask AI for assistance.
3. Report the issue to our team.

![Deployment Error](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=NDJkMDVmNmQxZmQ1N2NkNzg3YWJlMDc4N2NiYjRiY2NfNTdSdkNjR0NySUVNb0FRWWhYek9HMUlpY2pQQ0NXeEJfVG9rZW46VmhnTmJZN1Q1b2FpMEZ4WGk5MGNnUGpMbmZkXzE3NDI1NTk2Mjc6MTc0MjU2MzIyN19WNA)

**Example: Backend Update Failure**

* Solution: Click "Report Issue," and the support team will handle it.

![Report Issue](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=YTViYjAyOWRjNzdhNTQ3MDdlYzZjMTljZDM4MzIxYWNfZHpYQVBiM1owMGxVTDk4dXpTRWRHSnAwZnFORVlvUDlfVG9rZW46R3pXd2JHc042bzcwY3N4Z2tNeGNYYzVxbjJjXzE3NDI1NTk2Mjc6MTc0MjU2MzIyN19WNA)

### UI Display Issues in Production

#### Symptoms

* Components that appear aligned in the editor may be misaligned in the preview.
* Components that fit within the editor may exceed the screen width on mobile devices.

#### Solution

1. **Check UI Design Configurations**

Example 1: Two components appear left-aligned in the editor, but one uses relative positioning while the other uses absolute positioning. This causes misalignment on different screen widths.

![Example 1](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=NjA4Yzk3MTBlMTIxMmFlZTI2OTZlNjg3OTEwYTgxNDlfRGRSQUhhYzRtcFlUMkd5RGxEdlZZcXdsdlhQYkxHRjFfVG9rZW46SnFpV2JsUHVIb0RqSGd4aDMzS2N6N0pwblZiXzE3NDI1NTk2Mjc6MTc0MjU2MzIyN19WNA)

Example 2: A text component inside a view component overflows. To fix this, change the view’s overflow setting from "visible" to "hidden" or "scroll."

![Example 2](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MDZmODE3OWZjM2M4NmVhNmU1OTg5Y2YyOTg3YzNmZDRfOFN1N2ZDYzhoQTZMc1JXREMzdkZNUnZjY0tHTlJxdHdfVG9rZW46S05MWWJIclZqb0xuMVp4NDdWdWNORDdXbjZiXzE3NDI1NTk2Mjc6MTc0MjU2MzIyN19WNA)

2. **Report Possible Bugs**

If no configuration errors are found, report the issue to our team.

***

### Request Errors

#### Quick Error Handling

When a request error occurs, the frontend page or request log usually displays an error message.

* Use the [request-error-reference.md](request-error-reference.md "mention") to diagnose and resolve common errors.
* Alternatively, AI can help analyze errors based on logs and request data.

#### Identifying Faulty Requests

Find Errors in Browser Using Developer Tools or in Momen's Log.

* **Browser:** Press `F12` or right-click > "Inspect" > Open debugging mode > Click `Network` > Find `graphql-v2` requests.

![Browser Debugging](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTVhNDdlZGFjOGNjZjdlMzZiZjQxNDAwNzFlNmJlZGFfcmdkQmc3SnpTQ0h2ajRzOGIzd0tRcDJVeExKSEhldzVfVG9rZW46WU5rRWJXTlQxb0VDRjd4T3R2S2NrT2o0bkRnXzE3NDI1NTk2Mjc6MTc0MjU2MzIyN19WNA)

* **Momen Logs:** Click "Logs" in the editor for [more detailed logs](https://docs.momen.app/release-and-growth/log_service).

![Momen Logs](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=NjBhODBlNzEyODZiZDk1ZTI3OTgzNjM5MjkwNTIxM2FfR3RLWGRwcFBNcW5uTTJScFlPUmp5bDc2TUtKMlRNVnNfVG9rZW46T3RYaGJqOTB1bzBZWVV4b1pjeGNrMzdxbkVmXzE3NDI1NTk2Mjc6MTc0MjU2MzIyN19WNA)

#### Analyze Request & Response Data

In a request, we need to focus on:

* **Request Body:** Contains critical information about the query structure and parameters. Find detailed information in "payload".

An example:

```json
{
    "query": "query blogArticleList_82df5ec2($where: blog_article_bool_exp!, $orderBy: [blog_article_order_by!]!) {blog_article ( where: $where order_by: $orderBy  limit: 2) { id \n title}\n\n}",
    "variables": {
        "where": {
            "title": {
                "_like": "%AI%"
            }
        },
        "orderBy": [
            {
                "created_at": "asc_nulls_last"
            }
        ]
    }
}
```

The **query** section contains the query statement, which defines the structure of the requested data. From this example, we can see that the query is targeting the **blog\_article** table and is limited to retrieving **two records** (`limit: 2`). The **variables** section contains the parameters for this query, corresponding to the filter conditions, sorting, and deduplication settings configured in the editor. In this example, the `"where"` condition filters records where the **title contains "AI"**, and the `"orderBy"` condition sorts the results in **ascending order by "created\_at"**.

* **Response Body:** Displays results and errors. Look for `errors` in the response when debugging.

![Response Example](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=NTUzMzYxMjNmZDI3MzRjMjBiMmRiMWVkZmU5NWJlZDNfb0tZeUhTaU9nZVhibm50ZHBDR1JkRjhzYjhPYXZWM1BfVG9rZW46SDlQNmJTYmN0b0FWQjh4NzhtZ2NpM0NXbnpmXzE3NDI1NTk2Mjc6MTc0MjU2MzIyN19WNA)

An example: Permission Error Response:

```json
{
   "data": null,
   "errors": [
      {
         "errorCode": 403,
         "extensions": { "classification": "TABLE_ACCESS" },
         "message": "User 1 has no permission for SELECT on order"
      }
   ]
}
```

#### Error Investigation & Fixes

* By examining the request body, check whether the query statements and parameters match the configurations in the editor.
* By analyzing the response body, check for any errors and verify if the results meet expectations.
* Once enough information is gathered, make an educated guess about the possible cause of the issue and attempt to fix it.
* If the cause of the error cannot be determined, provide the collected information to AI and refer to the prompt in Step 1 for assistance.

#### Case Studies

1. **Payment/Refund Error:**
   * If a refund action fails, check the logs. If it's a permission issue, verify the project’s permission settings.

2. **API Execution Error:**
   * Check request logs to find required fields that are missing values.

3. **Actionflow Execution Failure:**
   * If an error occurs due to a missing field (e.g., `foodwcost` instead of `foodcost`), correct the field name.

4. **Database Constraint Violations:**
   * Ensure unique values are not duplicated when inserting data.

5. **Conditional Component Display Issue:**
   * If a component’s visibility depends on a data source (e.g., status should be "false" but is actually "true"), check the request to ensure data accuracy.

### Debugging Best Practices

1. **Clearly Define the Issue and Reproduce It**
   * Document error behavior, including triggers and error messages.
   * Attempt to reproduce the issue under the same conditions.

2. **Check Configurations by Module**
   * Check the configuration logic of each functional module one by one. For example:
     * **Form**: Ensure that field types, required rules, and data validation conditions are reasonable.
     * **Actionflow**: Verify the step sequence, conditional branches, and permission assignments.
     * **Data Relationships**: Check whether related fields between tables match.

3. **Incremental Fixes & Testing**
   * Modify one variable at a time to isolate the root cause.

***

### Technical Support & Resources

1. **Official Documentation:** Check our doc for more details.
2. **Community Support:** Post questions on forum.momen.app or send email to us (hello@momen.app).
   * Provide detailed descriptions, including:
     * Expected action
     * Steps attempted
     * Error details (screenshots/logs preferred)
   * **Example of a good question:** "I'm expecting X, but getting Y. I tried A and B. The issue appears on page C, component D. Here’s the error message: \[screenshot]."
   * **Example of a bad question:** "Why is my preview broken?"
