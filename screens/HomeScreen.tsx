import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { Box } from "../components/Box";

export const HomeScreen = () => {
  const [name, setName] = useState("");

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Welcome {name}</Text>
      <View style={styles.boxLayout}>
        <Pressable>{(state) => <Box pressed={state.pressed} bgColor={"lightgreen"} />}</Pressable>
        <Pressable>{(state) => <Box pressed={state.pressed} bgColor={"pink"} />}</Pressable>
        <Pressable>{(state) => <Box pressed={state.pressed} bgColor={"lightblue"} />}</Pressable>
      </View>

      <View style={styles.viewTextInput}>
        <Text style={{ marginVertical: 16 }}>{name ? `Hi ${name}!` : "What is your name?"}</Text>
        <TextInput
          style={{ padding: 8, backgroundColor: "#fbfbfb" }}
          onChangeText={(text) => setName(text)}
          secureTextEntry
        />
      </View>
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
  boxLayout: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  viewTextInput: {
    alignContent: "center",
    justifyContent: "center",
    padding: 16,
  },
});
