import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
export default class MyAppHeaders extends React.Component {


  render() {
    return (
    
      <View>
        <Text style={styles.text}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize:70,
    padding:15,
    color:'#ffffff',
    textAlign:"center"
  }
})