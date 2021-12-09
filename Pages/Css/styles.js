import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFDDD2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  button: {
    width: 90,
    height: 50,
    backgroundColor: "#E29578",
    borderRadius: 40,
    marginBottom: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  textinput: {
    height: 50,
  },
  postContainer: {
    width: 300,
    height: 100,
    margin: 30,
    // borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  postText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default styles;
