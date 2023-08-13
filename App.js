import React, { useState } from "react";
import Home from "./screens/home";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return <Home />;
  }
}
