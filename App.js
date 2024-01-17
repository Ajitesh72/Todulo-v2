import React from "react";
import { View } from "react-native";
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import Intro from "./src/screens/intro"; 

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Kreon: "./assets/fonts/Kreon-Medium.ttf",
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View>
      <Intro />
    </View>
  );
}
