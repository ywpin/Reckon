import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Logo from '../login/Logo';
import Form from '../login/Form';

import {Actions} from 'react-native-router-flux';

export default class Register extends Component<{}>{

  goBack() {
    Actions.pop();
  }
  
  render() {  
    return (
      <View style={styles.container}>
        <Logo/>
        <Form type="Register"/>
        <View style={styles.signupTextCon}>
            <Text style={styles.signupText}> Already have an account?</Text>
            <TouchableOpacity onPress={this.goBack}>
              <Text style={styles.signupButton}> Sign in</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f2',
    flex: 1,
  },
  signupTextCon:{
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 15, 
    flexDirection: 'row'  
  },
  signupText: {
    color: 'grey',
    fontSize: 16
  },
  signupButton:{
    fontSize: 16,
    fontWeight:'500'
  }
});