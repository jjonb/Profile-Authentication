import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
} from "react-native";

const Profile = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text>New Post</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text>Post</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 70,
    backgroundColor: "green",
  },
});
