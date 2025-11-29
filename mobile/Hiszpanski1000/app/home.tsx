import { Platform, StatusBar, View } from "react-native";

import React from "react";
import Constants from "expo-constants";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  if (Platform.OS === "android") {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar
          barStyle={"dark-content"}
          translucent={false}
          backgroundColor={"#6878e1"}
          animated={false}
        />
        <WebView
          style={{
            flex: 1,
            backgroundColor: "#6878e1",
          }}
          source={{ uri: "https://adrianglazer.github.io/hiszpanski1000/" }}
          automaticallyAdjustContentInsets={false}
          scrollEnabled={true}
          sharedCookiesEnabled={true}
          incognito={false}
          decelerationRate={0.998}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          startInLoadingState
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={false}
          originWhitelist={["*"]}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#6878e1",
      }}
    >
      <WebView
        source={{ uri: "https://adrianglazer.github.io/hiszpanski1000/" }}
        style={{
          flex: 1,
          marginTop: Constants.statusBarHeight,
          backgroundColor: "#6878e1",
        }}
        automaticallyAdjustContentInsets={false}
        scrollEnabled={true}
        sharedCookiesEnabled={true}
        useWebKit={false}
        incognito={false}
        decelerationRate="normal"
        keyboardDisplayRequiresUserAction={true}
        useWebView2={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        autoManageStatusBarEnabled={false}
        startInLoadingState
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        originWhitelist={["*"]}
      />
    </View>
  );
}
