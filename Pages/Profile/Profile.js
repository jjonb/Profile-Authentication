import React, { useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import styles from "../Css/styles";

const Profile = (props) => {
  // const signOut = () => {

  // };

  const signOut = () => {
    props.userAuth.signOut();
    // this.writeText(this.state.text);

    // this.setState({
    //   text: "",
    // });
  };

  useEffect(() => {
    if (props.userId === "") {
      props.navigation.navigate("Login");
    }
  }, [props.userId]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>New Post</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Post</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.text}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
