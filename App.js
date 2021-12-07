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

// const Tab = createBottomTabNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  const userAuth = getAuth();

  useEffect(() => {
    onAuthStateChanged(userAuth, (user) => {
      if (user !== null) {
        setUserId(user.uid);
      } else {
        setUserId("");
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => (
            <Login
              {...props}
              userAuth={userAuth}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userId={userId}
            ></Login>
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => (
            <Profile userAuth={userAuth} userId={userId} {...props}></Profile>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
