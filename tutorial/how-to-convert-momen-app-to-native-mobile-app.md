---
description: >-
  Though Momen doesn't support the development of native apps, there are ways
  to convert your websites built by Momen into mobile apps for the Google Play Store.
---

# How to Convert Momen App to Native Mobile App

## Introduction

This guide explains how to convert your Momen web application into a mobile app and publish it on the Google Play Store.

---

## Prerequisites

- **Momen**
- **Node.js**
- **React Native**
- **Java JDK**
- **Android Studio** (required for compiling and packaging)

> You may use any code editor, but Android Studio is necessary for the build environment.

---

## Steps

### 1. Obtain the Momen Web Address

Get the URL of your published Momen web app.

![Get Momen web address](../.gitbook/assets/1%20(5).gif)

---

### 2. Set Up the Environment and Create a React Native Project

Follow the [React Native environment setup guide](https://reactnative.dev/docs/environment-setup) to create a new project.

![Set up React Native project](../.gitbook/assets/2%20(2).1.png)

---

### 3. Modify App.js to Use WebView

Install the WebView package:

```bash
npm install react-native-webview
```

Update `App.js` to load your Momen web app in a WebView:

```javascript
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {BackHandler} from 'react-native';

function App(): JSX.Element {

  const webViewRef = useRef<any>(null);
  const [backButtonEnabled, setBackButtonEnabled] = useState<boolean>(false);

  useEffect(() => {
    // Detect back button press in Android
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (backButtonEnabled) {
        // WebView back
        webViewRef?.current?.goBack();
        return true;
      }
      // Exit app
      BackHandler.exitApp();
      return false;
    });
  }, [backButtonEnabled]);

  const onNavigationStateChange = (event: WebViewNavigation) => {
    setBackButtonEnabled(event.canGoBack);
  };
  
  return (
      <WebView
        ref={webViewRef}
        source={{uri: 'The address of the Momen-generated web page obtained in the first step above'}}
        style={{flex: 1}}
        setBuiltInZoomControls={false}
        // This step lets Android use the generated web page's own caching policy
        cacheMode="LOAD_CACHE_ELSE_NETWORK"
        onNavigationStateChange={onNavigationStateChange}
      />
  );
}

export default App;
```

---

### 4. Package the React Native Project (AAB)

Follow the [official React Native documentation](https://reactnative.dev/docs/signed-apk-android) to:

1. Generate an upload key
2. Set up Gradle variables
3. Add the signature configuration to your Gradle config
4. Build the release AAB (Android App Bundle) package

> You may also want to [change the app name](https://dev.to/zenkoders/how-to-change-the-app-name-in-react-nativein-android-and-ios-573i) and [change the app icon](https://aboutreact.com/react-native-change-app-icon/).

---

### 5. Submit to the Google Play Store

Upload your AAB package to the Google Play Store for review and release.

---

## About Momen

[Momen](https://momen.app/?channel=blog-about) is a no-code web app builder that enables users to create fully customizable web apps, marketplaces, social networks, AI apps, enterprise SaaS, and more. Momen supports real-time iteration, powerful API integration, and rapid product launch.
