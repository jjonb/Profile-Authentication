import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import styles from "../Css/styles";
import { getDatabase, ref, onValue, set } from "firebase/database";

const Home = (props) => {
  const signOut = () => {
    props.userAuth.signOut();
  };

  const db = getDatabase();
  const profileRef = ref(db, "profiles/" + props.userId);

  useEffect(() => {
    if (props.userId === "") {
      props.navigation.navigate("Login");
    }
  }, [props.userId]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Profile")}
      >
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.text}
          onPress={() => props.navigation.navigate("CreatePost")}
        >
          Create Post
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.text}
          onPress={() => props.navigation.navigate("ViewPosts")}
        >
          View Posts
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.text}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
