---
description: >-
  The map component of Mome allows users to adjust the visible area of the map
  based on specific business needs. Users can set the map's zoom levels and
  multiple markers.
---

# Map

The map component allows users to adjust the visible area of the map based on specific business needs. Users can set the map's zoom levels and multiple markers.

#### Value

1. **Customizable config**: Users can easily set the display range and zoom level of the map, ensuring that the map content is accurately displayed according to business requirements.
2. **Multiple Markers**: It supports adding one or more markers on the map, enabling users to clearly display information about different locations.

#### When to use

The map component uses geographical data (latitude and longitude) to display corresponding location information. It responds to user actions, such as clicking on a marker, and can be used in applications that require the display of locations, such as company address information or navigation-based apps.



#### How to use

1. **Register with Mapbox and Obtain an Access Token**
   1. Go to the Mapbox platform (https://www.mapbox.com), register an account, and create an access token. It is recommended to restrict your token by adding your domain on the Mapbox restriction section to make your token more secrue. Once added, the token will only work for requests that originate from the URLs you specify.
   2. When access token is obtained, input the access token under Config-General-Map API key section.

![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=ZGMzMjI1M2VkZWM1N2EzZjMyNWJjZmY3NWMxYjY2NGFfaTRMTlU2UTM2RmRqaFZJODlQN0lhQlJKWTNiYmdXR0xfVG9rZW46UTJuamJ1UEFHb3BlVjF4TWpoemNQRXZ4bnhjXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MTcyMzI5NTE3ZmFjY2I1YjM4ZjQ4NmUxNDI5NTBlYmZfOWRkbllVWGhBTGtmTWF6aHdZR2l1UHZ5dnlGY0pmb1pfVG9rZW46T1NvbWJaeTA1b0JWN0Z4dk9ha2NWRElTbmtmXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)

2.  **Configure the Map Component**

    1. &#x20; **Obtain GeoPoint data**

    &#x20; Users can obtain geopoint data through the action of Get Location and assign it to Page data while constructing the map. Other than that, you can obtain these data by looking it up on map providers and inserting it into the Momen built-in database. In your database, create an "Address Information" table based on your business logic. Common fields include:

    1. **Text type**: Marker name
    2. **Image type**: Marker icon
    3. **Boolean：**&#x43;enter point
    4. **Geo point type**: Marker coordinates

    ![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=NjZlYzk4MzQyZTY2YzFiY2QzM2Y4M2Y1ZmNmMzhmMjdfbTZNU2x4S1ZvdXNXcjFsUWhIZHQzSlVQSzhCbWtwd09fVG9rZW46TUF1MGJOUktrb1pHcmx4cXZtQWNLT2ZXbnhlXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MzcwYzMxYzA2NzYxOWUwOGQ4MTk3YzgzNzc5Mjg5YmJfZHJPR1ZWaGpQV3F6V3lEc3ViaFFFU05aU0hkRk1BZEpfVG9rZW46UktEVGJadWdIb3ROdWZ4WjNYcWNkV1VRbkdlXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MzAxMzdkMjUxYTIwNzZkN2U4NDY2Y2FkOWM2YmQ3MDRfWDl1MktuNW5TODNkQzAwRUtDMTdJODRaeWo0SDRualRfVG9rZW46VUxKcWJ5TEY1b2ZiQ2N4R2NLSGNmd2NmbmxQXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)

    2.  &#x20; **Map Configuration**

        1. **Initial zoom**: This controls the map's display range. The default is 11, with values ranging from 1 to 19. The lower the number, the larger the display range (e.g., zoom level 1 shows the entire globe).
           1. ![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2VjMWFiOTBjYmE0OTc4OGZiZDU0Zjg5OGU4MzE4MTZfZURxYlN4bnFnMjRWWUVydTZOcW5tWjh1dnF1aGFiSEhfVG9rZW46TU1haWJlSnBnb0JzTFB4NU1ObmM3YmwxbmtnXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=OGQyOWI5OTZjNDUzN2U1Y2RhNTdhY2I3MjgzNjE3OWJfbmdITXhkSnlVWFhpNGUzMmpIeU9ZTDNhd1c1V3k5UDBfVG9rZW46SG1ZUmJKNkpYb0NHa3p4eXN0dmNLb2s1bnJiXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)
        2. **Show Location**: Enabling this will display the user's current location on the map.
           1. ![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=NzE5NmQ3NTNlMTFiN2VhZmI2MDkyZDEyYTM0NjE2YWJfb3VyOWZ0RFN5Z3NPU3Y4MUtEMWlhR1dRVTBFOHV3TG5fVG9rZW46RlcxV2IzeHMxb0hnd094eHA2UGNHZ2xYbk1lXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=NDg0NGMxODIzZmY1Y2FjNzU2ZGYzOWIwNmIxNTkzMDVfUnNOSm41MU41Q1k5RFB4TDUzSDRON0V0R2k3a3pkQTRfVG9rZW46RXR4MGJsRTUwb3pubm14RGdlb2NTMjVubmhoXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)

        \


        3. **Center Point**: The map will be centered around the configured point. If not configured, the map defaults to Los Angeles, California, USA.
           1. ![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWJlZjA0NGI5MmY4ZTA2ZjVlZWY0YjJkOTMxYzFhNTdfUnU0cUlMaWlUOVdjR0xOY3VISjNQQkgwQXZPZDJLbEhfVG9rZW46Qlg1V2J5R2IzbzhtcUR4VnQ0NGNpc2t0bmdkXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MGFmNjFjYzljNjBjNThmODI3YTUwYThkZDE5M2U3NTZfcHF5OU5Ta3dQSWxRV2c2OVEwQms5ZGw1Q3QxWkZWUE1fVG9rZW46UUJxZGJCVzlVb1c1Q254VnZsM2NNRk1VbmVoXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MDcwMTkwMTM4Mzg2ZmI5MmE0NGU2OTA5ZWYyNmZiYzNfa0JRSmlYWjhWcjdXV3dSN3NURDJEYmZLZ21IVkYzOWdfVG9rZW46WjJneWJHaDdibzI0YjR4YWpkM2NJMk5xbk9kXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)

        \

    3.  &#x20; **Marker Configuration**

        1. **Marker Switch**: Toggle the marker switch to the marker configuration panel.
           1. ![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MDU0YTRjZWM5M2M2Y2IwMGNjOTI5OWE5MTZjYjUzNjlfN1I0QU1MQjN3T0VjNlFzdHI3cGlUNGpDaDdlbDQyclJfVG9rZW46R1VFNWJEN3JEbzZDRUp4ZXkyc2NCRWNsblJjXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTQyNjNjMjYyYjFhYWZjYzI1MGQ1YWRmOTkwYjcyOTJfejZOaXJ5MkNwbDJLT1FYSHlnUEh5N2tiWGY5eFdocURfVG9rZW46VFNVcGJXQXZ3b09pdTJ4TFJOM2N2cEp4bmFjXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)
        2. **Quantity**:
           1. **Single Marker**: For a single marker, simply bind the marker coordinates via remote data.
              1. ![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=YjFmYWU1NWU0YzI1YzdmMmViYTQ5ODM0ZDZmMWUzNGJfSGt1SXFCMlFBNnhUUzdwZzRlN3JhTkVnUHZLZU1WVkJfVG9rZW46SjlZd2J0Yldpb3RMalV4WmxoV2MxSEFIbjF5XzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=YjlmNTIyZTFkZmZkZTNkMGQzZjg5YWJiZmI1M2Q3MGRfNGhoRVRBYXdsN2E3dzhhcng4ejhMeWFRVjJDMEJ2MnJfVG9rZW46TlNwQWJOZUJWb3Z6d094VWlUcWNpZ1k1bkNoXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)
           2. **Multiple Markers**: For multiple markers, bind a remote data source to provide multiple marker coordinates (be mindful to remove data limit if multiple coordinates shall be retrieved at once), and bind the marker coordinates via in-component data.
           3. ![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjgzMTg5MjY1YmVlOWUxOGJmMWUyYTMyYWJlMWJiYjlfZ1MxMGdBVEhqbVBtNWNBOTI3bk9SSGN3S1J5TjVyMXFfVG9rZW46T0FiTmJjVno1b3JkMHh4enNnSGNnU2lYbjdnXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MWVmM2M4MGMyOGQ0OTU0YzVlNzk5NWY0ODUyZDhkZjlfZUxnOGVxUGZkNTF4b0U3eFBXTHI0UkxXazVrWW53MVFfVG9rZW46SnRRZmJMR3A1b0NQZFh4S1JRaGNGOE92bmVlXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)\

        3. **Icon Style**: Users can upload or bind a custom icon style for markers and adjust the icon size.

        ![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=NDZlOThiMjEyMTM0N2U1Y2M1MDM4OWZlZWRlZTdhZTJfRU13ZlluSTZBUWZXUXZ2aTI2dzFkWjN1Z1dVamo4MnRfVG9rZW46WFFERmI2WlJxbzh1ZTd4aHlWRmNoZ2F6bmNoXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=OWUwYzZkMDM3YWFmM2UyMTBjY2UyMjJjZjJkY2E2OGJfcFowamNVRVBUU2toVldRcnRodXZua2c3YlZTZ2VPMHdfVG9rZW46R0V1Q2J6UnY4b3dTSDF4aGR1Q2NpeUhlblVkXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)

        4. **Marker Name**: Users can manually enter or bind the marker name.

        ![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=MzM5YzJlNDQxYTY1YTk2MTE5NjhiYWEwMmQ2YTJhZGFfb3F4aENmVVllNk11RGpXUkRQZWEwRVF4RjFxV1dyYzdfVG9rZW46T3R6bGJGUjdqb0xDZWl4M2hrZ2NSbXZtbmhjXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)![](https://functorz.feishu.cn/space/api/box/stream/download/asynccode/?code=YjRlYTQ1ZGE5M2RiNTRhNzk4NWJlZDAyZWUyZmMzYTJfcFFpVVgyajQ4aWpZZk5HWlpIa3JaYlptRWtoVDZFTjlfVG9rZW46TEd4b2JSQUlEbzZpVDN4UENUcWN5Ymhybm5oXzE3MzI3NzU3MDc6MTczMjc3OTMwN19WNA)\


        5. **Action onClick**: Users can configure actions triggered when clicking on a marker, such as displaying a popup.

#### Functionality Boundaries

1. When the map center point is not set, the map defaults to Los Angeles, California, USA.
2. The map component is only for displaying location information and does not support interactive location retrieval.
