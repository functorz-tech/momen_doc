---
description: >-
  The Get Location action retrieves the current geographic coordinates (latitude
  and longitude) and assigns them to a page data variable. It is commonly used
  with Map Components to display the user’s lo
---

# Location

## Introduction

The Get Location action retrieves the current geographic coordinates (latitude and longitude) and assigns them to a page variable. It is commonly used with Map Components to display the user’s location on a map. This action is often seen in apps for maps, ride-hailing, or food delivery, helping users easily identify their current location.

## Action Configuration Guide

**1. Add Page Variable**\
Start by adding a page variable of type “Geopoint” to the page where location retrieval is needed. It is commonly named `geographic_position`.

**2. Add Action**\
Add the Get Location action to the required component (usually a button). In the action, assign the retrieved coordinates to the previously created page variable.

**3. Post-Retrieval Actions**\
After successfully retrieving the location, the returned result is an object containing the latitude and longitude. While it cannot directly display coordinates, you can display the coordinates by binding the page variable to a **map component** for real-time positioning.

## Note

When multiple page data variables are used for different purposes (e.g., multiple location-related actions), consider renaming the variables for clarity.
