import React, { useContext } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../components/AuthContext";

export const LoginScreen = () => {
  const { setUser } = useContext(AuthContext);

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Login</Text>
      <Button
        title="Click for login"
        onPress={() => {
          setUser(true);
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
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
