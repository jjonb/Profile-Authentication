import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../Css/styles";
import { getDatabase, ref, push, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePost = (props) => {
  const [text, setText] = useState("");
  const notify = () => toast("Created post, Go check it out!");

  const db = getDatabase();
  const postRef = ref(db, "posts");
  const newPostRef = push(postRef);

  const onPress = () => {
    set(newPostRef, {
      posterId: props.userId,
      text: text,
    });
    setText("");
    notify();
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
        <ToastContainer
          position="bottom-left"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </TouchableOpacity>
    </View>
  );
};

export default CreatePost;
