import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const Login = (props) => {
  console.log(props.email);
  return (
    <View>
      <Text>Hello from login</Text>
    </View>
  );
};

export default Login;
