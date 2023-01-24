import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Favorite = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Favorite</Text>
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
