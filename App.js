import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./components/Navigator";
import { AuthContext } from "./components/AuthContext";

export default function App() {
  const [hasUser, setUser] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{ hasUser, setUser }}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
        <StatusBar style="auto" />
      </AuthContext.Provider>
    </>
  );
}
