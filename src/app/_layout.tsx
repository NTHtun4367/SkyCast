import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="forecast" />
      <Stack.Screen
        name="qrcode"
        options={{ headerShown: true, title: "SkyCast" }}
      />
    </Stack>
  );
}
