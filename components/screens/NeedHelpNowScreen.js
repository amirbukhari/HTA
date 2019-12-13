import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MyAppText from "../helpers/MyAppText";
import MyAppTitle from "../helpers/MyAppTitle";
export default class NeedHelpNowScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title:"Need Help Now"
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <MyAppTitle>Need Help Now?</MyAppTitle>
        <MyAppText>Call 911</MyAppText>
        <MyAppText>Text 911</MyAppText>
        <MyAppText>Victim Services Branch Hamilton Police Service – Victim Quick Response Program
              (905 546 4904)
              Crisis Line Anti Human Trafficking Hotline Canada Wide
              1866-528- 7109
              Safety Planning Call a Shelter to make one over the phone –
              Emergency Shelters</MyAppText>
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