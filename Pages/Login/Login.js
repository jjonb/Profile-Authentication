import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import styles from "../Css/styles";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(props.userAuth, email, password);
    console.log("Registered user");
  };

  const login = () => {
    signInWithEmailAndPassword(props.userAuth, email, password);
  };

  useEffect(() => {
    if (props.userId !== "") {
      props.navigation.navigate("Profile");
    } else {
      setEmail("");
      setPassword("");
    }
  }, [props.userId]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textinput}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={register}>
        <Text style={styles.text}>Register </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
