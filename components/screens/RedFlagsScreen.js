import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MyAppText from "../helpers/MyAppText";
import MyAppTitle from "../helpers/MyAppTitle";
export default class RedFlagsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      //headerLeft:null,
      title:"Red Flags"
    };
  };
  render() {
    return (
      
      <View style={styles.container}>
        <MyAppTitle >Red Flags</MyAppTitle>
          <MyAppText>-You are not allow to speak for yourself and your activies are controlled by someone else</MyAppText>
          <MyAppText>-You are not paid or paid very little and treated poorly ( long hours, none or little breaks, poor
          living conditions)</MyAppText>
          <MyAppText>-You are repaying a debt through sex or labour</MyAppText>
      </View>
    );
  }
}

const styles = StyleSheet.create({


})