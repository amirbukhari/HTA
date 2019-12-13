import React from "react";
import { StyleSheet,Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MyAppText from "../helpers/MyAppText";
import MyAppTitle from "../helpers/MyAppTitle";
import { ScrollView } from "react-native-gesture-handler";
export default class SheltersAndResourcesScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      //headerLeft:null,
      title:"Shelters/Resources"
    };
  };
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <MyAppTitle >Shelters And Resources</MyAppTitle>
        <MyAppText style={styles.text}>Good Shepherd Women’s Services</MyAppText>
        <MyAppText style={styles.text}>Marys Place (905 540 8000)</MyAppText>
        <MyAppText style={styles.text}>Martha’s House (905 523 8895)</MyAppText>
        <MyAppText style={styles.text}>Good Shepherd Men Shelter ( 905 528 9109)</MyAppText>
        <MyAppText style={styles.text}>Missions Services Men Shelter (905 528 7635)</MyAppText>
        <MyAppText style={styles.text}>Inasmuch House (905 529 8149)</MyAppText>
        <MyAppText style={styles.text}>Youth Shelter</MyAppText>
        <MyAppText style={styles.text}>Notre Dame House (905 308 8090)</MyAppText>
        <MyAppText style={styles.text}>Native Women Centre Shelter (905-664-1114)</MyAppText>
        <MyAppText style={styles.text}>Salvation Army Men’s Center (905 527 1444)</MyAppText>
        </ScrollView>
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