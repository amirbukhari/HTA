import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class WhyYouMatterScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: 'Why You Matter',
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>In WhyYouMatterScreen</Text>
        
      </View>
    );
  }
}