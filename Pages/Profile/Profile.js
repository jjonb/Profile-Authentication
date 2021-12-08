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

const Profile = (props) => {
  const [name, setName] = useState("Tell us your name");
  const [bio, setBio] = useState("Tell us about yourself.");

  const db = getDatabase();
  const profileRef = ref(db, "profiles/" + props.userId);

  const onSubmit = () => {
    set(profileRef, { name: name, bio: bio }).catch((err) => console.log(err));
    props.navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={name}
        // value={name}
        onChangeText={(text) => setName(text)}
      ></TextInput>
      <TextInput
        placeholder={bio}
        // value={bio}
        onChangeText={(text) => setBio(text)}
      ></TextInput>
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;
