import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Details } from "../components/Details";
import { Favorite } from "../components/Favorite";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <>
      <Button title="See details" onPress={() => navigation.navigate("Details")} />
      <Button title="See favorite" onPress={() => navigation.navigate("Favorite")} />

      <Stack.Navigator>
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Favorite" component={Favorite} />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
