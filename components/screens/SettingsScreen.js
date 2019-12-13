import React from "react";
import { AsyncStorage,Switch,Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import IconHelper from '../helpers/IconHelper';
import MyAppText from "../helpers/MyAppText";
import MyAppTitle from "../helpers/MyAppTitle";
export default class SettingsScreen extends React.Component {



  constructor(props){
    super(props);

    this.state={
      secretSwitch:false
    }


   AsyncStorage.getItem('SecretScreen').then((value)=> {
       // console.log("switch " + value); 
        if(value == "True"){
        this.setState({secretSwitch:true});
        AsyncStorage.setItem('SecretScreen', 'True');
        return true;
        }else{
          this.setState({secretSwitch:false});
          AsyncStorage.setItem('SecretScreen', 'False');
        }
      });
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings',
      drawerLabel: 'Settings',
    };
  };


  toggleSwitch(){
    //console.log("switched"+this.state.secretSwitch);

    AsyncStorage.getItem('SecretScreen').then((value)=> {
      //console.log("switch " + value); 
      if(value == "True"){
      this.setState({secretSwitch:false});
      AsyncStorage.setItem('SecretScreen', 'False');
      IconHelper.show(false);
      return true;
      }else{
        this.setState({secretSwitch:true});
        AsyncStorage.setItem('SecretScreen', 'True');
        IconHelper.show(true);
      }
    });


  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MyAppTitle>Settings</MyAppTitle>


        <MyAppText>Secret Mode</MyAppText>
        <Switch
         onValueChange = {this.toggleSwitch}
         value={this.state.secretSwitch}
        />
      </View>
    );
  }
}