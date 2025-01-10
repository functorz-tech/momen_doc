---
description: >-
  The map component of Mome allows users to adjust the visible area of the map
  based on specific business needs. Users can set the map's zoom levels and
  multiple markers.
---

# Map

#### Value

1. **Customizable config**: Users can set the display range and zoom level of the map, ensuring that the map content is displayed according to business requirements.
2. **Multiple Markers**: It supports adding one or more markers on the map, enabling users to display information about different locations.

#### When to use

The map component uses geographical data (latitude and longitude) to display corresponding location information. It responds to user actions, such as clicking on a marker, and can be used in applications that require the display of locations, such as company address information or navigation-based apps.

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>

#### How to use

1. **Register with Mapbox and Obtain an Access Token**
   1. Go to the Mapbox platform (https://www.mapbox.com), register an account, and create an access token. It is **recommended** to restrict your token by adding your domain on the Mapbox restriction section to make your token more secrue. Once added, the token will only work for requests that originate from the URLs you specify.
   2. When access token is obtained, input the access token under Config-General-Map API key section.

<div><figure><img src="../.gitbook/assets/image(1).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(2).png" alt=""><figcaption></figcaption></figure></div>

2. &#x20; **Obtain GeoPoint data**

Users can obtain geopoint data through the action of Get Location and assign it to Page data while constructing the map. Other than that, you can obtain these data by looking it up on map providers and inserting it into the Momen built-in database. In your database, create an "Address Information" table based on your business logic. Common fields include:

1. **Text type**: Marker name
2. **Image type**: Marker icon
3. **Boolean：**&#x43;enter point
4. **Geo point type**: Marker coordinates

<div><figure><img src="../.gitbook/assets/image(5).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(4).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(3).png" alt=""><figcaption></figcaption></figure></div>



3. **Map Configuration**

**Initial zoom**: This controls the map's display range. The default is 11, with values ranging from 1 to 19. The lower the number, the larger the display range (e.g., zoom level 1 shows the entire globe).

<div><figure><img src="../.gitbook/assets/image(6).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(7).png" alt=""><figcaption></figcaption></figure></div>

**Show Location**: Enabling this will display the user's current location on the map.

<div><figure><img src="../.gitbook/assets/image(8).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(9).png" alt=""><figcaption></figcaption></figure></div>

**Center Point**: The map will be centered around the configured point. If not configured, the center point of the map defaults to Los Angeles, California, USA.

<div><figure><img src="../.gitbook/assets/image(10).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(11).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(12) (2).png" alt=""><figcaption></figcaption></figure></div>

4. **Marker Configuration**

**Marker Switch**: Toggle the marker switch to the marker configuration panel.

<div><figure><img src="../.gitbook/assets/image(13).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(14).png" alt=""><figcaption></figcaption></figure></div>

**Quantity**:

1. **Single Marker**: For a single marker, simply bind the marker coordinates via remote data.

<div><figure><img src="../.gitbook/assets/image(15).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(16).png" alt=""><figcaption></figcaption></figure></div>

2. **Multiple Markers**: For multiple markers, bind a remote data source to provide multiple marker coordinates (be mindful to remove data limit if multiple coordinates shall be retrieved at once), and bind the marker coordinates via in-component data.

<div><figure><img src="../.gitbook/assets/image(17).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(18).png" alt=""><figcaption></figcaption></figure></div>

**Icon Style**: Users can upload or bind a custom icon style for markers and adjust the icon size.

<div><figure><img src="../.gitbook/assets/image(19).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(20).png" alt=""><figcaption></figcaption></figure></div>

**Marker Name**: Users can manually enter or bind the marker name.

<div><figure><img src="../.gitbook/assets/image(21).png" alt=""><figcaption></figcaption></figure> <figure><img src="../.gitbook/assets/image(22).png" alt=""><figcaption></figcaption></figure></div>

**Action onClick**: Users can configure actions triggered when clicking on a marker, such as displaying a popup.

#### 5. Functionality Boundaries

1. When the map center point is not set, the map defaults to Los Angeles, California, USA.
2. The map component is only for displaying location information and does not support interactive location retrieval.
