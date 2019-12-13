import React from "react";
import { TouchableOpacity,StyleSheet,AsyncStorage,Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MyAppText from '../helpers/MyAppText';
import MyAppHeaders from '../helpers/MyAppHeaders';
import MyAppMenu from '../helpers/MyAppMenu';
import { Icon } from 'react-native-elements';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#065b9d',
    alignItems: 'center', justifyContent: 'center'
  },

  buttonStyle:{
    color:'red'
  },
  button: {
    height:150,
    alignSelf:'stretch',
    backgroundColor: '#3786c4',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop:20
  },

})


export default class SelectMode extends React.Component {

  

  constructor(props) {
    super(props);
   
    this.secretModeSelected = this.secretModeSelected.bind(this);
  }


  static navigationOptions = ({ navigation }) => {
    return {
      //headerLeft:null,
      headerLeft:<View><MyAppMenu>HTA</MyAppMenu></View>
    };
  };


  secretModeSelected(){
    
    this.props.navigation.navigate('SetPassword'); 
  };
 

  

  render() {
    return (
      <View style={styles.container}>
        <MyAppHeaders>Do you want to run in standard mode or secret mode?</MyAppHeaders>
        {/* <Button
          title="Standard Mode"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button style={styles.buttonStyle}
          title="Secret Mode"
          onPress={() => this.secretModeSelected()}
        />
        */}
        <TouchableOpacity  style = {styles.button} onPress = {() => this.props.navigation.navigate('Home')}>
                      <View>
                          <MyAppHeaders style = {{color: 'white'}}>Standard Mode</MyAppHeaders>
                      </View>
        </TouchableOpacity>
        <TouchableOpacity  style = {styles.button} onPress = {() => this.secretModeSelected()}>
                      <Icon            
                            name='user-secret'
                            type='font-awesome'
                            color='#fff'
                            size={40}/>
                      <View>
                          <MyAppHeaders style = {{color: 'white'}}>Secret Mode</MyAppHeaders>
                      </View>
        </TouchableOpacity>
      </View>
    );
  }
}