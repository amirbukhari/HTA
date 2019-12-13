import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MyAppText from "../helpers/MyAppText";
import MyAppTitle from "../helpers/MyAppTitle";
export default class FAQScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title:"FAQ"
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MyAppTitle>FAQ</MyAppTitle>
        
      </View>
    );
  }
}