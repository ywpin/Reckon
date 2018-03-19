import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Alert,  AsyncStorage } from 'react-native';
import { Constants } from 'expo';

import {Actions} from 'react-native-router-flux';

export default class Income extends React.Component {
  _onPressButton() {
    Alert.alert('Halo')
  }

  goBack() {
    Actions.pop();
  }

  List_2() {
    Actions.List_2();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>New Income</Text>
        <View style={styles.up}>
          <View style={styles.div}>
            <Text style={styles.smallTitle}>Amount</Text>
              <TouchableOpacity style={styles.button}>
                <TextInput 
                  keyboardType = 'numeric'
                  style={styles.textInput}
                  placeholder="+"
                /> 
                {/*value = {this.state.myNumber}*/}
            </TouchableOpacity>
          </View>
          <View style={styles.div}>
            <Text style={styles.smallTitle}>Category</Text>
            <TouchableOpacity
               onPress={this.List_2} 
              style={styles.button}>
              <Text style={styles.buttonWord}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.down}>
        <View style={styles.rightDown}>
          <Button 
          onPress={this.goBack}
          title = "Confirm" />
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f2',
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'column',
  },
  Title: {
    fontSize: 35,
    padding: 10,
    alignSelf: 'center',
    color: '#344a5e',
    fontWeight:'bold',
  },
  up: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    marginTop: '10%',
    marginBottom: '10%',
    flexDirection: 'row',
    width: '90%',
    flex: 3,
    justifyContent: 'center',
  },
  smallTitle: {
    flex: 1,
    marginTop: 10,
    fontSize: 20,
    height: 47, 
    borderColor: 'grey',
    color: '#344a5e',
  },
  button: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWord: {
    fontSize: 25,
  },
  down: {
    flex: 1,
  },
  rightDown: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textInput:{
    fontSize: 20
  }
});
