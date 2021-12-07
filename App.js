import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {(props) => (
            <Login
              {...props}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            ></Login>
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => <Profile {...props}></Profile>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
