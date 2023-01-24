import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

export const Box = (props) => {
  return (
    <View
      style={[styles.box, { backgroundColor: props.bgColor }, props.pressed && { opacity: 0.5 }]}
    />
  );
};

export const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
});
