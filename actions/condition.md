---
description: >-
  Learn how to trigger specific actions in Momen's no-code platform based on
  various conditions.
---

# Conditional Actions

## Introduction

Conditional actions allow you to perform different operations based on specific conditions.

## Scenario

For example, in an event registration form, users must enter their name and contact information. If they click the registration button without providing the required information, a modal appears prompting them to complete the fields.

In this scenario, you typically add two conditional branches to the registration button:  
- **Condition 1:** Named "Incomplete." Configure the condition to check if the name and contact phone number fields are empty. If so, display a modal saying "Please complete the registration information."  
- **Condition 2:** Named "Complete." Set the condition as "Always" (leave empty). If the previous condition is not met, this indicates the information is complete, and the registration action under this branch will be executed.

![Momen conditional action configuration](../.gitbook/assets/conditional2025.png)

## How to Configure

1. In the right sidebar, under the action section of a component, add a conditional action. Two default sub-conditions will be created. You can rename each by clicking its name. In the operand section, set the evaluation criteria; in the Actions section, define what to execute when the condition is met.

2. Conditional actions are evaluated from top to bottom. If a condition is met, its actions are executed automatically. If not, the next condition is evaluated. If none are met, no action is performed.

3. At least one sub-condition must be configured. Depending on your business needs, you can set actions such as page navigation, table data modification, or displaying a prompt when the condition is satisfied.

## Notes

1. By default, conditions are evaluated top-down. You can drag and reorder them as needed.
2. You can add additional conditions within conditional branches to customize business logic.
3. **Special Comparison Operators:**

| Operator       | Definition                                 | Usage Scenario                                                                  |
| -------------- | ------------------------------------------ | ------------------------------------------------------------------------------- |
| Null           | The data is empty (no data)                | Check if an input box is empty                                                  |
| Not null       | The data is not empty (has data)           | Check if an input box has data                                                  |
| Included       | Data exists in a collection                | Used as a filter to check if data exists in a collection                        |
| Not included   | Data does not exist in a collection        | Used as a filter to check if data does not exist in a collection                |
| Similar to     | Data is similar to certain data            | Used for fuzzy search or filtering similar data                                 |
| Not similar to | Data is not similar to certain data        | Used for filtering out data that is not similar                                 |