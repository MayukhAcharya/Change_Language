import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FScreen from "../Src/FScreen";
import SScreen from "../Src/SScreen";

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="first" component={FScreen} />
        <Stack.Screen name="second" component={SScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
