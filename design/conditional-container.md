```description
Learn how to use the Conditional View component to display different views or data based on various conditions. Through specific case analysis, this guide helps you efficiently achieve dynamic page display and logic management, avoiding the issue of oversized main packages in mini-programs.
```
```keywords
Conditional View, mini-program component, dynamic display, page logic management, view switching, remote data update, user permission management, e-commerce mini-program
```

# Conditional View
## Application Scenarios
The purpose of the Conditional View is to display different content under different conditions (this content can be data, but generally refers to UI or different functional entries on the same interface for different permissions). You can use this component to achieve the following scenarios:

- On the same page, different conditions display different views (e.g., the page displays differently when logged in and not logged in)
- On the same page, clicking a button switches the view display (e.g., clicking the send verification code button switches to the verification code countdown)
- Combine with Select View to create effects similar to tab bars or expanded subset directories

## Adding Conditional Sub-Containers
In a Conditional View, you can add/modify/delete conditional sub-containers to display different content under different conditions.

For example: When creating a login interface, the business situation is divided into three conditions: "Not Logged In", "Logged In_User", and "Logged In_Admin". To display different interface content under different conditions, you need to add three sub-containers within the Conditional View.

<img src="https://docs.functorz.com/static/image/添加子容器.jpeg" width="100%">

> 💡 Tips:
The Conditional View has a **default condition "Loading"**. When the page data is still loading, the content displayed by the Conditional View is this "Loading" sub-container. This condition cannot be deleted or set with conditions. **It is recommended not to make any changes to it!!**

After adding the container, you can click the [Enter Focus Mode] button on the Conditional View to enter the sub-container focus interface. Here you can see the four sub-containers: "Not Logged In", "Logged In_User", "Logged In_Admin", and "Loading". You can click on the sub-container to configure the display conditions of the sub-container, drag other components into the sub-container to display content, and build the corresponding business logic.

<img src="https://docs.functorz.com/static/image/进入聚焦模式编辑.gif" width="100%">

### Conditional Judgment Order Logic
The judgment order of sub-container views is from left to right as indicated by the red arrow, or in the order from top to bottom when adding sub-containers.
When a condition is met, the [judgment ends] and the container content under that condition is displayed; if the condition is not met, the next item is judged; if all conditions are not met, the result of the last condition match is displayed.

<img src="https://docs.functorz.com/static/image/条件判断顺序.jpeg" width="100%">

> 💡 Tips:

- The order of conditions can be changed by dragging the condition name in the optional conditions section of the Conditional View content bar (red box in the image below).
- When all conditions are always or the same, the Conditional View displays the view of the condition at the top (as shown in the image below, "Not Logged In").
- When no conditions are set for all conditions, the default condition is always. At this time, the **[Switch View Condition]** action can be used to achieve view switching of the conditional sub-container.

### Recalculate Conditions When Remote Data Updates
Sometimes we use the results returned by remote data requests as the judgment conditions for the Conditional View. As remote data changes, the results of condition judgments should also change accordingly. To allow the Conditional View to re-evaluate in real-time according to changes in remote data, the mode of [Recalculate Conditions When Remote Data Updates] is enabled by default.

<img src="https://docs.functorz.com/static/image/重计算条件.jpeg" width="200">

> 💡 Tips:
The update of remote data is related to its request type. When the request type is query, remote data will be obtained/updated when the page loads/refreshes; when the request type is subscription, remote data will update when the backend data changes, but subscription is not available for media and file types of data.

## Conditional View Design
You can not only set the width and height of the Conditional View itself but also adjust the width and height of the sub-containers after entering Focus Mode.

If you want the height of the parent container to change according to the height of the sub-container, you can set the height mode of the parent container to [Adapt]. For example, if all components in sub-container one occupy a height of 100, and all components in sub-container two occupy a height of 200, the height of the parent container will change according to the height of the sub-container as conditions change.

## Usage Examples
### Different Conditions, Different Views

When user permissions differ, the displayed page content is different. For example, when the user's permission is hr, the condition is set to user type=hr; when the user's permission is interviewer, the condition is set to user type=interviewer, and corresponding components are placed in the condition's corresponding view.

| img | img |
| ------------- | ------------- |
| <img src="https://docs.functorz.com/static/image/1673358848963-fb978d40-1761-4477-86b8-7ebc9288c41a.png" width="100%"> | <img src="https://docs.functorz.com/static/image/1673358878525-376145d4-d5ef-4298-9ed8-527163251b20.png" width="100%"> |

| img | img |
| ------------- | ------------- |
| <img src="https://docs.functorz.com/static/image/1673359197178-052c2a59-821a-4601-80ab-cf27f685850e.png" width="100%"> | <img src="https://docs.functorz.com/static/image/1673359204675-955a2126-a806-4ec1-8934-6d6f731bbf0e.png" width="100%"> |

When the user's login status differs, the displayed view is different. For example, when the user is not logged in, the condition is set to the username of the current user data being empty; when the user is logged in, the condition is set to the username of the current user data being non-empty, and corresponding components are placed in the condition's corresponding view.
> 💡 Tips:
When the user enters the page in a not logged in state, clicking the one-click authorization button completes the login. At this time, you can configure the behavior of refreshing the current user data or switching views at the one-click authorization login button to achieve the Conditional View switching to the logged-in view after the user completes the login.

| img | img |
| ------------- | ------------- |
| <img src="https://docs.functorz.com/static/image/1673359612995-682035c7-ff31-481d-b8c9-d0743c5396f9.png" width="100%"> | <img src="https://docs.functorz.com/static/image/1673414302398-2be0781e-e6c6-4f81-9ed5-08b0343b7f4d.gif" width="100%"> |

## Click Button to Switch View Display
> 💡 Tips:
This situation is mostly applicable when the conditions of the Conditional View are mostly always, and the switch view condition behavior is configured on the button to achieve the effect of switching the view display of the Conditional View by clicking the button.

In the password input box when the user logs in with an account and password, the text input box is actually placed in the Conditional View. By clicking the show and hide button, the switch view condition is configured on the button to switch the display method of the password.

| img | img |
| ------------- | ------------- |
| <img src="https://docs.functorz.com/static/image/1673414457740-8e971352-39d3-434f-a83a-9c68c640a657.png" width="100%"> | <img src="https://docs.functorz.com/static/image/1673419815967-62932cea-f279-4453-9ecf-1fb460cf00d7.gif" width="100%"> |

In e-commerce mini-programs, the state switch when adding to the cart, from not added to added, is actually using the Conditional View. By clicking the button, configuring the switch view condition or refresh behavior or recalculate condition on the button, you can switch to different views.
> 💡 Tips:
In situations like this where the pre-displayed view of the Conditional View needs to be judged in advance, as shown in the image below, it is necessary to first determine whether the user's cart has already added the current product. The condition of the Conditional View must be set and cannot all be always. Otherwise, even if the user's cart has already added the current product, it will still display the not added situation first.

| img | img |
| ------------- | ------------- |
| <img src="https://docs.functorz.com/static/image/1673415627012-9c83c14e-9746-4141-8d91-b778066f050a.png" width="100%"> | <img src="https://docs.functorz.com/static/image/1673416408452-06a27005-f269-410a-96f6-5f8defed2c9b.gif" width="100%"> |

### Combine with Select View

Based on different results selected in the Select View, the Conditional View will display different views, similar to a tab bar but not scrollable.

<img src="https://docs.functorz.com/static/image/1673419939015-f4dec2d8-8a20-4983-ab25-53e554ff8a96.gif" width="300">

In shopping mall mini-programs, product categories usually first display the parent category. After clicking the corresponding category, the subcategories under that category will expand. As shown in the display effect below, after entering the page, all products are displayed. When clicking to select the parent category "Paper", the subcategories under that directory will expand, and the first directory is selected by default. The product list on the right will display the products under that subcategory.

<img src="https://docs.functorz.com/static/image/1673420667572-d8a9add7-a768-4c9f-addb-126e8063c6f8.gif" width="300">
```