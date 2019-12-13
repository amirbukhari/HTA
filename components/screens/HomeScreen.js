import React from "react";
import { AppRegistry, Button, View, Text,StyleSheet,TouchableOpacity,Alert } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MyAppHeaders from "../helpers/MyAppHeaders";
import MyAppMenu from "../helpers/MyAppMenu";
import { Icon } from 'react-native-elements';

//Color Pallette
//http://paletton.com/#uid=33x0L0kHQuDoIGcwNGkK5oFNBiY

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#065b9d',
    justifyContent: 'center',
  },

  buttonContainer: {
    flex:1,
    flexDirection:'column',

    alignItems: 'center',
  },


  button: {
    height:150,
    width:150,
    backgroundColor: '#3786c4',
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius:75
  },

  menuButton:{
    margin:10
  }
 
})

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.drawer = this.drawer.bind(this);
  }


  
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft:<View><MyAppMenu>HTA</MyAppMenu></View>,
      headerRight:  <View style={styles.menuButton}><TouchableOpacity onPress={()=> navigation.openDrawer()}><Icon
                            
      name='bars'
      type='font-awesome'
      color='#FB3947'
      size={26} 
      /></TouchableOpacity></View>,
      //headerRight:  <View style={styles.menuButton}><Button title="Menu" onPress={()=> navigation.openDrawer()} /></View>,
      drawerLabel: 'Home',
    };
  };

  drawer(){
    //console.log(this.props.navigation.openDrawer()); // open drawer
  }

  

  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity  style = {styles.button} onPress = {() => {this.props.navigation.navigate('Report')}}>
                      
                      <Icon
                            
                            name='report'
                            type='octicons'
                            color='#fff'
                            size={40}/>
                      <View>
                          <MyAppHeaders style = {{color: 'white'}}>Report</MyAppHeaders>
                      </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity  style = {styles.button} onPress = {() => {this.props.navigation.navigate('Questionaire')}}>
                      <Icon
                            
                            name='clipboard'
                            type='font-awesome'
                            color='#fff'
                            size={40}/> 
                      <View>
                          <MyAppHeaders style = {{color: 'white'}}>Questionnaire</MyAppHeaders>
                      </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity  style = {styles.button} onPress = {() => {this.props.navigation.navigate('RedFlags')}}>
                      <Icon
                            
                            name='flag'
                            type='font-awesome'
                            color='#fff'
                            size={40}/> 
                      <View>
                          <MyAppHeaders style = {{color: 'white'}}>Red Flags</MyAppHeaders>
                      </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity  style = {styles.button} onPress = {() => {this.props.navigation.navigate('NeedHelpNow')}}>
                      <Icon
                            
                            name='address-book'
                            type='font-awesome'
                            color='#fff'
                            size={40}/>
                      <View>
                          <MyAppHeaders style = {{color: 'white'}}>Need Help Now?</MyAppHeaders>
                      </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity  style = {styles.button} onPress = {() => {this.props.navigation.navigate('SheltersAndResources')}}>
                      <Icon
                            
                            name='home'
                            type='font-awesome'
                            color='#fff'
                            size={40}/>
                      <View>
                          <MyAppHeaders style = {{color: 'white'}}>Shelters/Resources</MyAppHeaders>
                      </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity  style = {styles.button} onPress = {() => {this.props.navigation.navigate('CreateSafetyPlan')}}>
                      <Icon
                            name='pencil'
                            type='octicon'
                            color='#fff'
                            size={40}/>
                      <View>
                          <MyAppHeaders style = {{color: 'white'}}>Safety Plan</MyAppHeaders>
                      </View>
            </TouchableOpacity>
          </View>
        </View>
    </View>
    );
  }
}