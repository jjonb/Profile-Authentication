import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "../Css/styles";
import { getDatabase, ref, onValue, set } from "firebase/database";

const ViewPosts = (props) => {
  const [allPost, setAllPosts] = useState([]);

  const db = getDatabase();
  const viewPostRef = ref(db, "/posts");

  useEffect(() => {
    onValue(viewPostRef, (snapshot) => {
      const retrievedPostArr = [];

      if (snapshot !== null) {
        const returnObject = snapshot.val();
        for (let item in returnObject) {
          retrievedPostArr.push(returnObject[item]);
        }
        setAllPosts(retrievedPostArr);
      } else {
        console.log("No posts yet");
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={allPost}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(post, index) => index}
      />
    </View>
  );
};

export default ViewPosts;
