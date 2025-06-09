---
description: >-
  Familiarize yourself with the use of formulas in Momen, mastering various data
  manipulation techniques such as mathematical operations, data counting, data
  format conversion, text processing, and time
---

# Formula and Conditions

## Formulas and Conditional Judgments

In addition to being used directly by actions and components, data can also be processed through formulas and conditional logic.

## Formulas

Formulas are functions used to calculate or transform data. Momen provides a variety of formulas for operations on text, numbers, arrays, time, and more.

### Type Conversion

| Name                     | Description                                                     | Example                                                                                     |
| ------------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| TO_TEXT                  | Converts integers, decimals, JSONB, etc., to text               | Original data: {"message": "Hello World!"} → '{"message": "Hello World!"}'                  |
| TO_INTEGER               | Converts text or decimals to integers                           | Original data: -3.1415926 → -3                                                              |
| TO_DECIMAL               | Converts text to decimals                                       | Original data: "-3.1415926" → -3.1415926                                                    |
| TEXT_TO_DATETIME         | Converts text to datetime                                       | Original data: "2025-02-21 14:36" → 2025-02-21T14:36:00.000+08:00                           |
| COMBINE_DATE_AND_TIME    | Combines date and time into datetime                            | Date: 2024-01-08, Time: 13:38:00.000+08:00 → 2024-01-08T13:38:00.000+08:00                  |
| EXTRACT_DATE_OR_TIME     | Extracts date or time from datetime (timestamp)                 | Datetime: 2024-01-08 13:38:00.000+08:00, Extract: Date → 2024-01-08                         |

### Text Processing

| Name           | Description                                                                                                                                              | Example                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| STRING_LEN     | Returns the length of the text. All characters (including Chinese, letters, numbers, symbols) count as one.                                              | Text: "Hello World!" → 12                                                                                 |
| REPLACE_PART   | Replaces part of the text with new text based on the specified position (first character is 0) and number of characters.                                 | Text: "Hello World!", Start: 1, Length: 4, New text: "ola" → "Hola World!"                               |
| REPLACE_TEXT   | Finds the specified text and replaces it with new text, based on the number of occurrences.                                                              | Text: "Hello World!", Old: "o", New: "", Count: 1 → "Hell World"                                         |
| FIND           | Returns the position of the first occurrence of the specified text. Returns -1 if not found.                                                             | Text: "Hello World!", Find: "o" → 4                                                                      |
| CONTAIN        | Checks if the specified text exists, returns `true` or `false`.                                                                                          | Text: "Hello World!", Find: "ello" → true                                                                |
| SUBSTRING      | Extracts a substring. Includes the start position but not the end; first character is 0.                                                                 | Text: "Hello World!", Start: 0, End: 5 → "Hello"                                                         |
| LEFT           | Returns a specified number of characters from the start of the text.                                                                                     | Text: "Hello World!", Count: 5 → "Hello"                                                                 |
| RIGHT          | Returns a specified number of characters from the end of the text.                                                                                       | Text: "Hello World!", Count: 5 → "World"                                                                 |
| LOWER          | Converts all letters in the text to lowercase.                                                                                                           | Text: "Hello World!" → "hello world!"                                                                    |
| UPPER          | Converts all letters in the text to uppercase.                                                                                                           | Text: "Hello World!" → "HELLO WORLD!"                                                                    |
| RANDOM_STRING  | Generates random text. (Random characters are generated on the frontend and are not recommended for secure scenarios such as coupon codes.)               | Min length: 5, Max length: 10, Lowercase: true, Uppercase: true, Numbers: true → "seXr3aoRD"             |
| SPLIT          | Splits the text into an array using the specified separator.                                                                                             | Text: "2024/01/08", Separator: "/" → ["2024", "01", "08"]                                                |

### Mathematical Operations

| Name            | Description                                                                                                                        | Example                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| +               | Addition                                                                                    | 5 + 10 → 15                                     |
| -               | Subtraction                                                                                 | 5 - 10 → -5                                     |
| *               | Multiplication                                                                              | 5 * 10 → 50                                     |
| /               | Division                                                                                    | 5 / 10 → 0.5                                    |
| %               | Remainder after division, same sign as dividend                                             | -5 % 10 → -5                                    |
| MIN             | Returns the minimum value                                                                   | 5, 10 → 5                                       |
| MAX             | Returns the maximum value                                                                   | 5, 10 → 10                                      |
| ROUND_UP        | Rounds up to the nearest integer                                                            | 3.5 → 4                                         |
| ROUND_DOWN      | Rounds down to the nearest integer                                                          | -3.5 → -4                                       |
| INT             | Rounds to the nearest integer                                                               | -3.5 → 3                                        |
| ABS             | Returns the absolute value                                                                  | -3.5 → 3.5                                      |
| RANDOM_NUMBER   | Returns a random integer between specified numbers (not recommended for secure scenarios)    | Min: 1, Max: 10 → 6                             |
| POWER           | Exponentiation                                                                              | Base: 2, Exponent: 3 → 8                        |
| DECIMAL_FORMAT  | Decimal formatting (returns text if "Remove all trailing zeros" is selected)                 | 3.1415926, Precision: 2, Remove trailing: true → 3.14 |

### Array Processing

| Name            | Description                                                                       | Example                                         |
| --------------- | --------------------------------------------------------------------------------- | ----------------------------------------------- |
| GET_ITEM        | Retrieves an item from an array (index starts from 0)                             | ["2024", "01", "08"], Index: 1 → "01"           |
| ARRAY_TO_ITEM   | Retrieves an item from an array (deprecated, use GET_ITEM)                        | ["2024", "01", "08"], Index: 1 → "01"           |
| ARR_LEN         | Gets the length of the array                                                      | ["2024", "01", "08"] → 3                        |
| FIRST           | Returns the first item of the array                                               | ["2024", "01", "08"] → "2024"                   |
| LAST            | Returns the last item of the array                                                | ["2024", "01", "08"] → "08"                     |
| RANDOM_ITEM     | Returns a random item from the array                                              | ["2024", "01", "08"] → "01"                     |
| SLICE           | Extracts a section of the array                                                   | ["2024", "01", "08"], Start: 1, Count: 2 → ["01", "08"] |
| JOIN            | Joins an array of text into a string                                              | ["2024", "01", "08"], Separator: "-" → "2024-01-08" |
| INDEX_OF        | Returns the index of the first occurrence of the specified item                   | ["2024", "01", "08"], Item: "08" → 2            |

### Time Operations

| Name            | Description                                                                                                                               | Example                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| GET_DATE_TIME   | Gets a point in time                                                                               | Year: 2024, Month: 1, Day: 8, Hour: 13, Minute: 14, Second: 0 → 2024-01-08T13:14:00.000+08:00 |
| DELTA           | Adds or subtracts time                                                                             | Time: 13:38:00.000+08:00, Add 1 hour 12 min → 14:50:00.000+08:00                          |
| DURATION        | Calculates the interval between two points in time                                                 | Start: 2019-12-01, End: 2024-01-08, Unit: Year → 5                                        |
| EXTRACT         | Retrieves a specified part of the time                                                             | Time: 13:38:00.000+08:00, Unit: Hour → 13                                                 |
| TO_DATETIME     | Converts date and time into DateTime (timestamp)                                                   | Date: 2024-01-08, Time: 13:38:00.000+08:00 → 2024-01-08T13:38:00.000+08:00                |
| TO_DATE_TIME    | Retrieves the date or time from a DateTime (timestamp)                                             | DateTime: 2024-01-08 13:38:00.000+08:00, Extract: Date → 2024-01-08                       |

### Geographical Location

| Name                         | Description                                                                                                        | Example                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| DISTANCE                     | Calculates the distance between two locations (meters, kilometers, or miles)                                       | [120.2934,30.3150], [120.2934,31.3150], km → 866|
| GET_VALUE_FROM_GEO_POINT     | Retrieves longitude or latitude from a geo point (latitude and longitude)                                          | [120.2934,30.3150], Type: Latitude → 30.3150    |

### JSON Processing Methods

| Name                | Description               | Example                                                            |
| ------------------- | ------------------------- | ------------------------------------------------------------------ |
| JSON_EXTRACT_PATH   | Retrieves data from JSON  | {"data": {"foo": "bar"}}, Path: data.foo → "bar"                   |

## Conditions

Logical operations on data are used in Conditional View, Conditional Data, and conditional branches of Actionflow. For detailed usage, see the relevant documentation.

![Formula and condition usage example](../.gitbook/assets/data/data_formula0.png)
