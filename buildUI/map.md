---
description: >-
  The map component of Momen allows users to adjust the visible area of the map
  based on specific business needs. Users can set the map's zoom levels and
  multiple markers.
---

# Map

## Value

1. **Customizable Configuration:** Set the display range and zoom level to ensure the map content matches business requirements.
2. **Multiple Markers:** Add one or more markers to display information about different locations.

## When to Use

The map component uses geographic data (latitude and longitude) to display location information. It responds to user actions, such as clicking a marker, and is suitable for applications that need to display locations (e.g., company addresses, navigation apps).

![Map component example](../.gitbook/assets/image.png)

## How to Use

### 1. Register with Mapbox and Obtain an Access Token

1. Go to [Mapbox](https://www.mapbox.com), register an account, and create an access token.  
   **Recommendation:** Restrict your token by adding your domain in the Mapbox restriction section for security. The token will only work for requests from specified URLs.
2. Enter the access token in the Config > General > Map API key section.

![Mapbox token configuration](../.gitbook/assets/image(1).png)
![Map API key input](../.gitbook/assets/image(2).png)

### 2. Obtain GeoPoint Data

You can obtain GeoPoint data by using the "Get Location" action and assigning it to page data, or by looking up coordinates on map providers and inserting them into the Momen database.  
Create an "Address Information" table in your database with fields such as:

- **Text:** Marker name
- **Image:** Marker icon
- **Boolean:** Center point indicator
- **GeoPoint:** Marker coordinates

![Address info table example 1](../.gitbook/assets/image(5).png)
![Address info table example 2](../.gitbook/assets/image(4).png)
![Address info table example 3](../.gitbook/assets/image(3).png)

### 3. Map Configuration

- **Initial Zoom:** Controls the map's display range (default: 11, range: 1–19). Lower values show a larger area (e.g., 1 = entire globe).

![Initial zoom setting](../.gitbook/assets/image(6).png)
![Zoom level example](../.gitbook/assets/image(7).png)

- **Show Location:** Enable to display the user's current location on the map.

![Show location enabled](../.gitbook/assets/image(8).png)
![Show location example](../.gitbook/assets/image(9).png)

- **Center Point:** Set the map's center. If not set, the default is Los Angeles, California, USA.

![Center point configuration 1](../.gitbook/assets/image(10).png)
![Center point configuration 2](../.gitbook/assets/image(11).png)
![Center point configuration 3](../.gitbook/assets/image(12)%20(2).png)

### 4. Marker Configuration

- **Marker Switch:** Toggle to access the marker configuration panel.

![Marker switch panel 1](../.gitbook/assets/image(13).png)
![Marker switch panel 2](../.gitbook/assets/image(14).png)

- **Quantity:**
  - **Single Marker:** Bind marker coordinates via remote data.

    ![Single marker binding 1](../.gitbook/assets/image(15).png)
    ![Single marker binding 2](../.gitbook/assets/image(16).png)

  - **Multiple Markers:** Bind a remote data source to provide multiple marker coordinates (remove data limits if needed), and bind marker coordinates via in-component data.

    ![Multiple markers binding 1](../.gitbook/assets/image(17).png)
    ![Multiple markers binding 2](../.gitbook/assets/image(18).png)

- **Icon Style:** Upload or bind a custom icon for markers and adjust icon size.

![Marker icon style 1](../.gitbook/assets/image(19).png)
![Marker icon style 2](../.gitbook/assets/image(20).png)

- **Marker Name:** Enter or bind the marker name.

![Marker name configuration 1](../.gitbook/assets/image(21).png)
![Marker name configuration 2](../.gitbook/assets/image(22).png)

- **Action onClick:** Configure actions triggered when clicking a marker (e.g., display a popup).

## Functionality Boundaries

1. If the map center point is not set, the map defaults to Los Angeles, California, USA.
