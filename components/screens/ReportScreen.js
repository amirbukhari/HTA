import React from "react";
import { Button, View, Text, TextInput, StyleSheet, ScrollView, Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import MyAppText from "../helpers/MyAppText";
import MyAppTitle from "../helpers/MyAppTitle";
import ImagePicker from 'react-native-image-picker';

import AutoExpandingTextInput from "../AutoExpandingTextInput";
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

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class ReportScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      avatarSource: "No Image Selected"
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      //headerLeft:null,
      title:"Report"
    };
  };
  selectPhoto() {
    ImagePicker.showImagePicker(options, (response) => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        //console.log('User cancelled image picker');
      } else if (response.error) {
        //console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source.uri,
        });
      }
    });
  }


  submit() {
    //console.log("test");
  }
  render() {
    return (
      <View>
        <ScrollView>
        <View style={styles.container}>
          <ScrollView>
          <MyAppTitle>Report</MyAppTitle>
            <View>
              <MyAppText>Name of Suspected Trafficker</MyAppText>
              <View >
                <TextInput
                  style={styles.textInput}
                  placeholder="John Doe"
                  maxLength={20}
                />
              </View>
            </View>
          </ScrollView>
        </View>


        <View style={styles.container}>
          <ScrollView>
            <View>
              <MyAppText>Photo of Suspected Trafficker</MyAppText>
              <View >
                <Button
                  title="Choose Photo"
                  onPress={() => this.selectPhoto()}
                />
              </View>
              <Text>{this.state.avatarSource}</Text>
            </View>
          </ScrollView>
        </View>


      

        <View style={styles.container}>
          <ScrollView>
            <View>
              <MyAppText>Your Name(Optional)</MyAppText>
              <View >
                <TextInput
                  style={styles.textInput}
                  placeholder="John Doe"
                  maxLength={20}
                />
              </View>
            </View>
          </ScrollView>
        </View>

        
        <View style={styles.container}>
          <ScrollView>
            <View>
              <MyAppText>My Contact(Optional)</MyAppText>
              <View >
                <TextInput
                  style={styles.textInput}
                  placeholder="John Doe"
                  maxLength={20}
                />
              </View>
            </View>
          </ScrollView>

          
        </View>

          <View style={styles.container}>
          <ScrollView>
            <View>
              <MyAppText>Description or any relevant information</MyAppText>
              <View >
                <AutoExpandingTextInput style={styles.textInput}/>
              </View>
            </View>
          </ScrollView>
        </View>

        <Button title="Submit"
                  onPress={() => {}}/>



        </ScrollView>
      </View>
    );
  }
}