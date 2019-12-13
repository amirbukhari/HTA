import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MyAppText from "../helpers/MyAppText";
import MyAppTitle from "../helpers/MyAppTitle";
export default class CreateSafetyPlanScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
     title:"Create Safety Plan"
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <MyAppTitle>Create Safety Plan</MyAppTitle>
        <MyAppText>Call a shelter to make a safety plan</MyAppText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop:10
  },

  text:{
    paddingTop:10
  }
})