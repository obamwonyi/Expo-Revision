import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (

      <>
          <Stack>
              <Stack.Screen name="(tabs)" options={{headerShown: false}} />
          </Stack>
          // simply lighting the status bar icons of the mobile app .
          <StatusBar style="light" />
      </>
  );
}
