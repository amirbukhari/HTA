import React from "react";
import {AsyncStorage,BackHandler, Button, View, Text,StyleSheet } from "react-native";
import { StackActions, NavigationActions, createStackNavigator, createAppContainer } from "react-navigation";
import MyAppText from '../helpers/MyAppText';
import MyAppSplash from '../helpers/MyAppSplash';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#065b9d',
      alignItems: 'center', justifyContent: 'center'
    },
  })

  //{ flex: 1, alignItems: 'center', justifyContent: 'center' }}

export default class SplashScreen extends React.Component {

    constructor(props){
        super(props);
        this.checkMode = this.checkMode.bind(this);
        this.state={mode:false};
      //  console.log("here"+ this.checkMode()); 
    } 
    
  static navigationOptions = ({ navigation }) => {
    return {
        header: null,
      //headerLeft:<View><MyAppMenu>HTA</MyAppMenu></View>
    };
  };
    checkMode (){
        
        AsyncStorage.getItem('SecretScreen').then((value)=> {
            
            //console.log("here1 "+ value);

             if(value == "True"){
                 this.setState({mode: true});
          
             }else{
                 this.setState({mode: true});
              
             }

         });
        }
      
    render() {
        if(this.state.mode == false){
        return (
        <View style={styles.container}>
            <MyAppSplash>HTA</MyAppSplash>
            {/*<MyAppText>Thank you for downloading this app</MyAppText>*/}
        </View>
        );
        }else{
            return <View></View>
        }
    }
    componentWillMount(){
      
    }

    componentDidMount(){
        

        AsyncStorage.getItem('SecretScreen').then((value)=> {
            
            //console.log("here1 "+ value);

             if(value == "True"){
                 this.setState({mode: true});
                 const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Calculator' })],
                  });
                  this.props.navigation.dispatch(resetAction);
                 //this.props.navigation.navigate('Calculator');
          
             }else{
                 this.setState({mode: false});
                 this.timeoutHandle = setTimeout(()=>{

                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'SelectMode' })],
                      });
                      this.props.navigation.dispatch(resetAction);


                   // this.props.navigation.navigate('SelectMode');
                    // Add your logic for the transition
                }, 3000);
              //TODO SET BACK TO 3000
             }

         });






        // if(this.checkMode() == false){
        //     // Start counting when the page is loaded
        //     this.timeoutHandle = setTimeout(()=>{
        //         this.props.navigation.navigate('SelectMode');
        //         // Add your logic for the transition
        //     }, 2000);
        // }else if(this.checkMode() == true){
        //     this.props.navigation.navigate('Calculator');
        // }
    }
    
    componentWillUnmount(){
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
        BackHandler.removeEventListener('hardwareBackPress', function() {return true})
    }

    

}



