import React from "react";
import { Button, View, Text, TextInput, StyleSheet, ScrollView, Image } from "react-native";


class UselessTextInput extends React.Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
      />
    );
  }
}


export default class AutoExpandingTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
      };
    }
  
    // If you type something in the text box that is a color, the background will change to that
    // color.
    render() {
      return (
       <View style={{
         backgroundColor: this.state.text,
         borderBottomColor: '#000000',
         borderBottomWidth: 1 }}
       >
         <UselessTextInput
           multiline = {true}
           numberOfLines = {4}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
         />
       </View>
      );
    }
  }