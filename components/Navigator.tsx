import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { ToDoScreen } from "../screens/ToDoScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { AuthContext } from "./AuthContext";

export const Navigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const { hasUser } = useContext(AuthContext);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ToDo" component={hasUser ? ToDoScreen : LoginScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
