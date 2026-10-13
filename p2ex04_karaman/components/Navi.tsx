import React from "react";
import { Stack } from "expo-router";

export default function Navi() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "coral" },
        headerTitleStyle: { fontWeight: "400", fontFamily: "lora-bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Главная" }} />
      <Stack.Screen name="article" options={{ title: "Полная статья" }} />
    </Stack>
  );
}
