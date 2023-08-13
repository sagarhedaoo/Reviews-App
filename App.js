import React, { useState } from "react";
import Home from "./screens/home";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

// const getFonts = () =>
//   Font.loadAsync({
//     "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
//     "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
//   });

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Home />;
}
