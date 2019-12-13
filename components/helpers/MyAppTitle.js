import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
export default class MyAppTitle extends React.Component {


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
    fontSize:40,
    color:"#FB0012",
    padding:10
  }
})