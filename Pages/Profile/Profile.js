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
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profileData, setProfileData] = useState({ bio: "", name: "" });

  const db = getDatabase();
  const profileRef = ref(db, "profiles/" + props.userId);

  useEffect(() => {
    onValue(profileRef, (snapshot) => {
      if (snapshot.val() !== null) {
        setProfileData(snapshot.val());
      }
    });
  }, []);

  const onSubmit = () => {
    set(profileRef, { name: name, bio: bio }).catch((err) => console.log(err));
    props.navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      {profileData.name === "" ? (
        <>
          <TextInput
            placeholder="Tell us your name."
            onChangeText={setName}
            value={name}
          />
          <TextInput
            placeholder="Tell us about yourself."
            onChangeText={setBio}
            value={bio}
          />
          <TouchableOpacity onPress={onSubmit} style={styles.button}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text>{profileData.name}</Text>
          <Text>{profileData.bio}</Text>
        </>
      )}
    </View>
  );
};
export default Profile;
