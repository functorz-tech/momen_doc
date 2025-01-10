```description
This page provides a detailed guide on how to use the List component to uniformly display multiple contents with similar styles but different data. It covers common application scenarios such as product categorization, product display, and comment posting. The guide explains how to bind remote data, set the number of requests per time, filter data, sort, and remove duplicates, offering rich usage examples and design suggestions.
```
```keywords
List component, Data binding, Remote data, Product display, Data filtering, Load more, Sorting, Deduplication, Interactive behavior, Mini Program, Web
```

# List
## Application Scenarios
When we need to uniformly display multiple contents with similar styles but different data, we can use the List component. For example, in the common usage scenarios below, a product list includes information such as product image, product name, and product price. The specific content differs, but the layout and other styles are uniform, so we can use the [List] for data display.

- Product categorization
- Product display
- Comment posting

<img src="https://docs.functorz.com/static/image/1672909662628-087bb4ab-ce02-4c3d-beef-986c5b3bb9df.png" width="100%">

## List Design
### Scroll Direction
Set the scroll direction when sliding the list.

| Vertical: Scroll up and down | Horizontal: Scroll left and right |
| ------------- | ------------- |
| <img src="https://docs.functorz.com/static/image/纵向滚动.gif" width="100%"> | <img src="https://docs.functorz.com/static/image/横向滚动.gif" width="100%"> |

### Number of Rows/Columns
Set how many rows or columns the list has.

<img src="https://docs.functorz.com/static/image/纵列数量.gif" width="100%">

### Horizontal Spacing
Set the gap between rows or columns.

<img src="https://docs.functorz.com/static/image/横向纵向空白.gif" width="100%">

### Scroll to Top on Refresh
When using the [Refresh] action to refresh the list, you can set whether the list scrolls to the top.

- **Off:** Default, the list will not scroll to the top when refreshed.
- **Active Refresh:** If you only want the list to scroll to the top when the [Refresh] action is actively triggered on other components, configure this option.
- **Auto Refresh:** If you only want the list to scroll to the top when the filter conditions change and the list content is refreshed, configure this option.
- **All On:** Configure this option if you want the list to scroll to the top regardless of filter condition changes or active refresh.

### Header
Open an area at the top of the list where other components can be placed to form a whole with the list.

<img src="https://docs.functorz.com/static/image/表头.gif" width="100%">

### Carousel
Set whether the list is in carousel mode. It is off by default. When turned on, you can set whether to autoplay, loop, have indicators, and the color of the indicators.

> ⚠️ Note: When the carousel is turned on, the number of rows or columns will automatically become 1 row or 1 column.

<img src="https://docs.functorz.com/static/image/轮播.gif" width="100%">

### Reverse Load
"Reverse Load" is off by default. The list loads more data when scrolling down. When "Reverse Load" is turned on, the list will load more data at the top when scrolling up.

<img src="https://docs.functorz.com/static/image/反向加载.gif" width="100%">

### Position, Size, and Sub-Container Layout

Refer to [**"Layout Design Principles"**](https://docs.functorz.com/app_construction_and_maintenance/ui_and_interaction_design/layout_design/layout_design.html)

### Style

You can customize the opacity, border radius, background color, and other styles of this component. The configuration is WYSIWYG, so it will not be elaborated here.

### Sub-Container
After dragging the List component onto the page, you can see the first row of the List component with a guide [Add Component Here]. This is the sub-container view of the list, where you can configure the size, layout, and style of the sub-container separately.

<img src="https://docs.functorz.com/static/image/列表子容器视图.gif" width="100%">

## List Data
Local data and remote data have been explained in [“Data Reading and Display”](https://docs.functorz.com/data/data_reading_and_display/data_reading_and_display.html). Lists generally request [remote data].

### How to Bind Remote Data to a List
After selecting the list, click on the content, choose [Remote Data] as the data source, and select the data table that has been created in the data model.

<img src="https://docs.functorz.com/static/image/绑定列表远程数据.gif" width="100%">

### Limit
Request and display how many pieces of data from the database at a time.

Since lists generally read remote data, the data is often more than one piece. If all the data is loaded at once before displaying, it will obviously create a very poor user experience. Therefore, only a certain amount of data is requested at a time, and more data is obtained through [Load more] when scrolling to the last piece.

For example: Set the [Limit] to 10 and turn on [Load more], it will first display 10 pieces at once, and load new 10 pieces when scrolling to the 10th piece, until all data is loaded.

### Load More
It is turned on by default. When the list requests 10 pieces of data at a time, if there is more data in the database, it will automatically load new 10 pieces when the user scrolls through the already loaded data.

### Data Filtering
> **💡Tips:**
**Data filtering for Mini Programs only takes effect when you scan the code on your phone after pre-release!**

Configure different data filtering rules based on different conditions. As shown in the figure below, for the same List component, selecting "Price from high to low" or "Area from large to small" can match the corresponding sorting conditions for data display.

| img | img |
| ------------- | ------------- |
| <img src="https://docs.functorz.com/static/image/1698378097999-07572a7f-d9e7-4d69-90ef-46af3f52a897.png" width="100%"> | <img src="https://docs.functorz.com/static/image/1698397294080-9a46ebdf-1103-4444-93f3-db984acc9894.png" width="100%"> |

#### Cancel Filter
That is, do not set any filter conditions, read all the data in the data table (use with caution, usually filter conditions are set to read and display data that meets the conditions).

#### Filter
Filter out data that meets the conditions by setting filter conditions.

For example: Filter out students in the student table whose gender is male. The filter condition is: gender = 'male', and it will display all student data whose gender is male.

<img src="https://docs.functorz.com/static/image/列表过滤.gif" width="100%">

> 💡 **Important Tips:**
When the value of the condition does not exist (i.e., no data), it will return any data.

> For example: Set the filter condition to id = "linked data", but at this time "linked data" has not been assigned a value, which is equivalent to not setting a condition, and it will return any data. If the [Limit] is set to 1 at this time, it corresponds to returning any one piece of data.

### Sorting and Deduplication

- Sorting: Set which field to use as the sorting field. After setting the sorting field, you can also set the sorting type to ascending or descending. Note that if deduplication is enabled, the sorting must select the same field.
- Deduplication: After setting the deduplication basis field, only one piece of data under that field will be displayed.

### onRequestStatusChange
The behavior triggered when the request status changes.
> 💡 **Tips:**
There are 5 states: Normal, Loading, Error, Success, Information Error, Business Error.
It is generally not commonly used, but it will be used if you need to give users a prompt when the request status changes. Calculate when this request will succeed and how long it will take for this request to succeed.

### onSuccess
The behavior added here will be triggered after the [List] data is successfully read.

- It is easy to misunderstand that it is only successful if data is read. In fact, as long as the reading action is normal, even if no data is read, it is also successful.
- For example: The remote data is a student table, and the condition is set to name = 'Zhang San'. As a result, there is no student named Zhang San in the data table, and it will return empty, which is also successful.
> 💡 **Tips:**
onSuccess is very important, and it is often necessary to add behavior at this position because it is necessary to determine that this step has obtained data or has been completed. For example, use filtering to determine whether the user's account exists. If the result data is found to be empty onSuccess, it means there is no account, and you can trigger other behaviors you set.

## How to Bind Data to Each Item in the List
After completing the previous step, double-click to enter the List component, drag other components that need to display content into the "Sub-View", such as a text component, click the text component, click the [+] sign in its content, select "In-component data" to find the remote data bound to this list, and then select item, and choose the specific data field to bind.

<img src="https://docs.functorz.com/static/image/绑定列表远程数据.gif" width="100%">

- index: As shown in [“Array and Array Processing”](https://docs.functorz.com/data/array_and_array_processing.html), index is the index (order) of the list data. The index of the first row of data in the list is 0, the second row is 1, and so on.
- item: Corresponds to each piece of data bound to the list's remote data, containing each field of a piece of data and their relationships, displayed through selecting the appropriate component.

## List Behavior

Behavior when scrolling: Configure the behavior to be executed when the list is scrolled.

<img src="https://docs.functorz.com/static/image/列表行为.png" width="300">
```