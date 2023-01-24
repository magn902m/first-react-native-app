import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Details = () => {
  return (
    <View style={styles.layout}>
      <View style={[styles.box, { backgroundColor: "lightgreen" }]} />
      <View style={[styles.box, { backgroundColor: "pink", flex: 2 }]} />
      <View style={[styles.box, { backgroundColor: "lightblue" }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "#e5e5e5",
  },
  box: {
    backgroundColor: "black",
    flex: 1,
  },
});
