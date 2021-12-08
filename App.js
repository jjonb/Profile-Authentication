import React, { useEffect, useState } from "react";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Profile from "./Pages/Profile/Profile";
import Post from "./Pages/Post/Post";

const Stack = createNativeStackNavigator();

function App() {
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
            <Login {...props} userAuth={userAuth} userId={userId}></Login>
          )}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {(props) => (
            <Home userAuth={userAuth} userId={userId} {...props}></Home>
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => (
            <Profile userAuth={userAuth} userId={userId} {...props}></Profile>
          )}
        </Stack.Screen>
        <Stack.Screen name="Post">
          {(props) => (
            <Post userAuth={userAuth} userId={userId} {...props}></Post>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
