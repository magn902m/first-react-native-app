import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../components/AuthContext";

export const ToDoScreen = () => {
  const navigation = useNavigation();
  const { setUser } = useContext(AuthContext);

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>To Do list</Text>
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />

      <Button
        title="Click for logout"
        onPress={() => {
          setUser(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
