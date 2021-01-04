import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TitleScreen from "./TitleScreen";
import InfoScreen from "./InfoScreen";
import TripListScreen from "./TripListScreen";
import TripDetailScreen from "./TripDetailScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Title"
          component={TitleScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TripList"
          component={TripListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TripDetail"
          component={TripDetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
