---
description: >-
  The Get Location action retrieves the current geographic coordinates (latitude
  and longitude) and assigns them to a page data variable. It is commonly used
  with Map Components to display the user’s lo
---

# Location

## Introduction

The **Get Location** action retrieves the user's current geographic coordinates (latitude and longitude) and assigns them to a page variable. It is commonly used with map components to display the user’s location on a map. This action is often used in apps for maps, ride-hailing, or food delivery, helping users easily identify their current location.

## How to Configure

1. **Add a Page Variable**  
   Add a page variable of type **Geopoint** to the page where location retrieval is needed. A common name is `geographic_position`.

2. **Add the Get Location Action**  
   Add the **Get Location** action to the required component (usually a button). In the action configuration, assign the retrieved coordinates to the previously created page variable.

3. **Display the Location**  
   After successfully retrieving the location, the result is an object containing latitude and longitude. To display the coordinates, bind the page variable to a **map component** for real-time positioning.

## Note

If you use multiple page data variables for different purposes (such as handling several location-related actions), consider renaming the variables for clarity.
