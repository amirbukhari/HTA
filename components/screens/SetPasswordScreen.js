import React from "react";
import { AsyncStorage,Button, View, Text, TextInput, StyleSheet, ScrollView, Image } from "react-native";
import {NavigationActions, StackActions, createStackNavigator, createAppContainer } from "react-navigation";
import IconHelper from '../helpers/IconHelper';
import MyAppText from '../helpers/MyAppText';
import MyAppTitle from '../helpers/MyAppTitle';
const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center',

    margin: 15
  },

  inputViewContainer: {

    flexDirection: 'column',
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20
  }
})


export default class SetPasswordScreen extends React.Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state={
      pin:1234
    }
  }

 


  submit() {
    
    AsyncStorage.setItem('Pin', this.state.pin).then((value)=>{
      AsyncStorage.getItem('Pin').then((valueTwo)=>{
        //console.log("here " + valueTwo);
        IconHelper.show(true);
        AsyncStorage.setItem('SecretScreen', 'True');
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Calculator' })],
        });
        this.props.navigation.dispatch(resetAction);

        //this.props.navigation.navigate('Calculator'); 
      }) 
  
    }); 
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ScrollView>
          <MyAppTitle>Set Password</MyAppTitle>
            <View>
              <MyAppText>Create a 4 digit pin that will be used to unlock app</MyAppText>
              <View >
                <TextInput
                  ref= "pin"
                  onChangeText={(pin) => this.setState({pin})}
                  style={styles.textInput}
                  keyboardType='numeric'
                  placeholder="1234" 
                  maxLength={4}
                  secureTextEntry={true} 
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <Button title="Submit" onPress={this.submit} ></Button>
      </View>
    );
  }
}