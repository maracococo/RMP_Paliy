

import React from "react";
import { ActivityIndicator, View } from "react-native";
import { useFonts } from "@expo-google-fonts/lora";
import Navi from "./components/Navi";
import { fonts } from "./fonts";

export default function App() {
  
  const [isFontsLoaded, fontsError] = useFonts(fonts);

  if (!isFontsLoaded && !fontsError) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Navi />;
}
