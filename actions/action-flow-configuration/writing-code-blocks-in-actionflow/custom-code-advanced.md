# Custom Code Advanced

## Prerequisite:

* Understanding of custom code fundamentals
* Proficient in the use of Momen
* Understanding of SQL
* Download and use the Altair GraphQL Client.

⚠️⚠️⚠️ Note: Protect your Authorization, once leaked others can manipulate your data via gql, so in order to prevent others from being able to manipulate your database via gql, you need to refer to the \[Permission Configuration Instructions] to define your database access rights.

**Usage Scenarios**

Read or modify the data in the database directly in the custom code so that you can get the data and then process the code logic.

**Running gql in a Custom Code**

Prerequisites: Uderstanding GraphQL basics below.

**Basic Code Structure**

```graphql
// GraphQL content
const gql = `query findPaymentTransactionById ($paymentTransactionId: bigint!){
    response: payment_transaction_by_pk(id:$paymentTransactionId) {
      id
      status
      currency
      amount
      description
      order_id
      account_id
      payment_method
    }
  }`;

// Run GraphQL query
context.runGql('findPaymentTransactionById', gql, { paymentTransactionId: 1 }, { role: 'admin' });
```

**runGql Parameter Description**

context.runGql( operationName , gql , variables , permission );

* operationName: is the name of the gql.
* operationName: the name of the gql, it needs to be the same as the name inside the gql, e.g. the name after the query in the above gql is the name of the gql.
* gql: the content of the gql, e.g. the request in the symbol is the result of the keystroke above the tab key in English input mode
* variables: If gql uses a parameter declaration, the parameter cannot be null.
* permission: Declare the role of calling gql, usually admin.

**Graphql Basics and Role**

Graphql is a data query language developed internally by Facebook in 2012.

The way that Momen sends requests from frontend to backend is Graphql, hereinafter referred to as gql. You can use gql to send requests to the back-end of Momen, usually used for debugging.

Implanting Graphql into ActionFlow, you can define various code blocks in Momen's actionflow to achieve complex functional requirements, such as various types of batch operations.

**Altair Interface**

Altair GraphQL Client is a tool for debugging gql, hereinafter referred to as Altair, download and open the interface as follows

![](<../../../.gitbook/assets/0 (50).png>)

**Altair Debugging gql Configuration Content**

* Add new Adds a request.
* Set Headers Set request headers
* Set Request Method
* Add a link to the request
* Click Docs to view the request documentation.
* Configure test parameters
* Beautify the request code: prettify

#### **Configuring the Request URL and Headers**

1. Go to Momen and create a new project, create a data table called reference, add the ‘content’ field to the data table, and update the backend.
2. Go to the database, open console, click Network, clear the request, click the reference table in the database, and click Requests in Network:

<figure><img src="../../../.gitbook/assets/20240521-171423.png" alt=""><figcaption></figcaption></figure>


3. Copy the inner URL from the Request URL in the General under Headers and paste it into the Altair request, with the request method defaulting to POST;
4. Copy the Authorization and its value from Request Headers in General under Headers and paste it into the Altair request header.

<figure><img src="../../../.gitbook/assets/截屏2024-05-21 17.17.58.png" alt=""><figcaption></figcaption></figure>

#### **How to View Docs**

Configure a query request for the data in the reference table, click on Docs on the right side of Altair, type in reference, you can see the requests for this table here, select the first one, you can see the left and right parameters, types, fields under this request, you can click on any of them to learn more about the request configuration.

<figure><img src="../../../.gitbook/assets/截屏2024-05-21 17.22.08.png" alt=""><figcaption></figcaption></figure>

ARGUMENTS Request Parameters: When requesting data, it's generally necessary to configure parameters such as where (conditions), order\_by (sorting fields), distinct\_on (deduplication of field content), offset (starting index), and limit (quantity limit).

Type Determination of Request Parameters: If there are no symbols, it is an object; if there is an \[], it is an array. Specific types can also be specified (e.g., int).

Selection of Request Parameters: Clicking on a specific request parameter allows you to see what configurations can be made under that parameter. Clicking on the content allows you to see which operators (methods of evaluation) can be configured for that content.

Basic Comparison Operators (Evaluation Methods):

Equal to (\_eq), is null (\_is\_null:true), is not null (\_is\_null:false)

Greater than or equal to (\_gte), less than or equal to (\_lte)

AND condition \_and: \[condition1, condition2], OR condition \_or: \[condition1, condition2], NOT condition \_not: condition

Greater than (\_gt), less than (\_lt)

Contains (\_in), does not contain (\_nin)

Similar to (\_like), not similar to (\_nlike), case-insensitive similarity (\_ilike)

Increment (\_inc), decrement (\_dec)

Sorting: Descending (desc), Ascending (asc)

TYPE: Which table

FIELDS: Which fields in this table can be requested. If the requested data includes content from related tables, you can continue to click to see how to configure conditions for related tables, and other related content.

#### **Configuring Requests**

**Query - Query Request**

Search Requests

Search for a table name in Docs, find a query request for that table, and click on it to go to the request Docs.

<figure><img src="../../../.gitbook/assets/截屏2024-05-21 17.23.21.png" alt=""><figcaption></figcaption></figure>

**Adding a Request**

When the mouse hovers over the top table name, on the right side you can click ADD QUERY, which will automatically populate the request code to the left side (so you don't actually have to write the gql yourself), and in the left editing area you can delete/increase the conditions, fields, and associated table content, keeping the condition you want.

<figure><img src="../../../.gitbook/assets/20240521-172508.gif" alt=""><figcaption></figcaption></figure>

**Basic Structure of the Request**

```javascript
# Query
query commandName($argumentName1: type) {
tableName(where: {field1: { comparisonMethod: comparisonValue },
field2: { comparisonMethod: comparisonValue }
},
order_by: [{ field: sortingMethod }],
distinct_on: [distinctField],
limit: 1) {
alias: desiredReturnField
}
}
```

when: Used to configure request conditions and is an object.

order\_by: Used to configure sorting conditions and is an array. The array contains individual objects specifying sorting criteria.

distinct\_on: Used to set deduplication conditions and is an array. The array contains fields for deduplication.

limit: Used to set the number of data records to be requested and is an integer.



**To tailor the returned data fields based on your needs and set request parameters:**

1. After the query's "command name," add a pair of parentheses. Inside the parentheses, provide the request parameter name and type, like this: $argumentname1: parameter type

In the editing interface, click on 【VARVARLABES】 to expand the parameter editing window. Start by entering a pair of curly braces {}. Inside the curly braces, specify the content of the parameters. The parameter names within this content should still begin with a dollar sign $. Since this parameter is an object, if you configured multiple parameters in the command name, you can set multiple parameter contents here.



**To execute the request:**

Click on the "send query" button located above the request. The execution of the request will then take place, and you can view the results on the right side of the interface.



Query Basic Scenarios

1. According to the filter conditions, get the data in the one-to-one association table: get the personal information of the current user.

```bash
query getAccount($accountID: bigint) {
account(where: { id: { _eq: $accountID } }) {
id
profile {
id
name: ud_xingming_e1693e
gender: ud_xingbie_7644ed
phone_number: ud_shoujihaoma_e3188e
}
}
}

```



2. Based on the filter conditions, get the data in the one-to-many association table: get the registration record of this event in the event table, get the media - image data.

```bash
# Request sign-up records for a specific activity
query getsign_record($activityID: bigint) {
activity(where: {}, order_by: [{}], distinct_on: [id], offset: 1, limit: 1) {
id
name
image {
url
}
sign_record(where: { activity_id_activity: { _eq: $activityID } }) {
id
activity_id_activity
ud_account_id_zhanghu_999f9c
}
}
}
```



3. Request aggregated data: Search the query request for "table\_aggregate" in Docs to request aggregated data for this table.

```bash
# Request aggregate information from the reference table
query getReferenceAggregate {
reference_aggregate {
aggregate {
count(columns: [id, content], distinct: true)
max {
id
}
}
}
}

```



4. Requests the count of a related table to sort and displays the count of the related table, for example, to display the content of an event in descending order based on the number of registrations for the event.

```bash
# Request activity information ordered by sign-up count in descending order
query activity_order_by_sign_count {
activity(order_by: [{ sign_record_aggregate: { count: desc } }]) {
id
name
image {
url
}
sign_record_aggregate {
aggregate {
count
}
}
}
}
```

**Mutation - insert request**

Searching for Requests

Search for insert\_a table name in Docs, find the mutation request for that table and click on it to go to the request Docs.



Adding a request

When hovering over the top table name, you can click ADD QUERY on the right side, which will automatically copy the request code on the left side.

<figure><img src="../../../.gitbook/assets/截屏2024-05-21 17.42.39.png" alt=""><figcaption></figcaption></figure>

Basic structure of the request

```bash

mutation commandName {
insert_tableName(
objects: [
{ data1_field1: value1, data1_field2: value2 },
{ data2_field1: value1, data2_field2: value2 }
],
on_conflict: {
constraint: constraintName,
update_columns: [updateField1, updateField2],
}
) {
# You can ignore this section; it's for more advanced users. Beginners don't need to worry about it.
whatever: anything
}
}
```

**objects:** Used to specify the data to be inserted, in the form of an array. Each item in the array represents a set of data and is structured as an object.

**on\_conflict:** Used to determine the actions to be taken when there is a conflict in data insertion. It is an object type, and if there are no constraints, it may not need to be configured.

**constraint:** Specifies the name of the constraint causing the conflict.

**update\_columns:** Specifies the fields that should be updated in the event of a conflict.



**Mutation - Update Request**

To search for or add an update request:

In the documentation (Docs), search for update\_tableName.

Locate the mutation request associated with the table you're interested in.

Click on the specific update request to navigate to the request documentation.

Follow the same approach as described above for adding requests.



Basic structure of the request

```bash
/mutation commandName {
update_tableName(
_set: { field1: value1, field2: value2 },
where: { field1: { comparisonMethod: comparisonValue }, field2: { comparisonMethod: comparisonValue } }
) {
# You can ignore this section; it's for more advanced users. Beginners don't need to worry about it.
whatever: anything
}
}
```



**\_set:** Used to define the fields and their corresponding values that need to be updated. It is of object type.

**where:** Used to configure the conditions for the update. It is also of object type.



**Mutation - Delete Request**

To search for or add a delete request:

In the documentation (Docs), search for delete\_tableName.

Locate the mutation request associated with the table you're interested in.

Click on the specific delete request to navigate to the request documentation.

Follow the same approach as described earlier for adding requests.



Basic Structure of the Request:

```bash
mutation commandName {
delete_tableName(
where: { field1: { comparisonMethod: comparisonValue }, field2: { comparisonMethod: comparisonValue } }
) {
# You can ignore this section; it's for more advanced users. Beginners don't need to worry about it.
whatever: anything
}
}
```

**where:** Used to configure the conditions for deleting data. It is of object type.



### **Running the API in a Custom Code**

Prerequisites: The API has been added to Momen and debugged successfully.

callThirdPartyApi('$operationId', $args) : Call the API after Momen configuration.

● $operationId: API id\
● $args: API arguments, such as {fz\_body:{"appKey": "f46dce7fa0566f0c"\}}

{% code overflow="wrap" %}
```
context.callThirdPartyApi('$operationId', {"body": {"appKey": "f46dce7fa0566f0c","sign": "OTljNjYyNXXX=="}});
```
{% endcode %}



**How to find the API id:**

In Altair's Docs, enter operation in the search box, and the related request will appear. When you configure more than one API, there will be more than one request, you can click on the request to see the configuration parameters to determine which one it is.

<figure><img src="../../../.gitbook/assets/截屏2024-05-21 17.47.31.png" alt="" width="375"><figcaption></figcaption></figure>





If you encounter any issues during the process, feel free to join our [Discord community](https://discord.com/invite/UCyhySSXfz) for assistance.​​​

### **About Momen​​​​​**

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder, allows users to build fully customizable web apps, marketplaces, Social Networks, AI Apps, Enterprise SaaS, and much more. You can iterate and refine your projects in real-time, ensuring a seamless creation process. Meanwhile, Momen offers powerful API integration capabilities, allowing you to connect your projects to any service you need. With Momen, you can bring your ideas to life and build remarkable digital solutions and get your web app products to market faster than ever before.​​
