// must be first import
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { RootStackNavigator } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
