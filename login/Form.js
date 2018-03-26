import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, AsyncStorage, Keyboard} from 'react-native';
import { Constants } from 'expo';

import {Actions} from 'react-native-router-flux';
import {firebaseApp} from '../login/firebase';
import Page from './../calender/Page';

export default class Form extends Component<{}>{
  constructor(props){
    super(props)
    this.state = {
      Email:"", Password:"", status:""
    }
    this._login = this._login.bind(this)
  }

  _login() {
    firebaseApp.auth().signInWithEmailAndPassword(this.state.Email, this.state.Password)
      .then(value => {
        Actions.Home()
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
       <View style={styles.container} behavior="padding">
        <TextInput style={styles.inputBox}
          underlineColorAndroid ="transparent"
          placeholder="Email"
          placeholderTextColor= "#ffffff"
          keyboardType="email-address" 
          onSubmitEditing={() => this.Password.focus()}
          onChangeText={(text) => this.setState({Email: text})}
        />       
        <TextInput style={styles.inputBox}
          underlineColorAndroid ="transparent"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor= "#ffffff"
          ref={(input) => this.Password = input}
          onChangeText={(text) => this.setState({Password: text})}
        />
        <TouchableOpacity onPress={this._login} style={styles.submitarea}>
          <Text style={styles.submit}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    fontSize: 17,
    padding: 12,
    backgroundColor: '#90a4ae',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginRight: 20,
    marginLeft: 20
  },
  submitarea: {
    width: 300,
    padding: 12,
    marginVertical: 10,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginVertical: 10,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: '#1c313a',
  },
  submit: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
});