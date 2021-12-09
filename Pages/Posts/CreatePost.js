import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../Css/styles";
import { getDatabase, ref, push, set } from "firebase/database";

const CreatePost = (props) => {
  const [text, setText] = useState("");

  const db = getDatabase();
  const postRef = ref(db, "posts");
  const newPostRef = push(postRef);

  const onPress = () => {
    set(newPostRef, {
      posterId: props.userId,
      text: text,
    });
    setText("");
    props.navigation.navigate("ViewPosts");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write your post."
        value={text}
        onChangeText={(text) => setText(text)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePost;
