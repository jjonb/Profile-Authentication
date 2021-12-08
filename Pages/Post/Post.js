import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "../Css/styles";

const Post = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Write your post."></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Post;
