import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert, AsyncStorage } from 'react-native';
import { Constants } from 'expo';

import {Actions} from 'react-native-router-flux';

export default class Home extends React.Component {

  Income() {
    Actions.Income()
  }

  Expense() {
    Actions.Expense()
  }  

  Page() {
    Actions.Page()
  }

  // showData = async() => {
  //   let myArray = await AsyncStorage.getItem('myArray');
  //   let d = JSON.parse(myArray)
  //   alert(d.Username + ' ' + d.Password)
  //   Actions.Page()
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>Reckon</Text>
        <View style={styles.up}>
          <View style={styles.div}>
            <Text style={styles.smallTitle}>Income</Text>
              <TouchableOpacity
              onPress={this.Income}
              style={styles.button}>
              <Text style={styles.buttonWord}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.div}>
            <Text style={styles.smallTitle}>Expense</Text>
              <TouchableOpacity
              onPress={this.Expense}
              style={styles.button}>
              <Text  style={styles.buttonWord}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.div}>
            <Text style={styles.smallTitle}>Balance</Text>
              <Text></Text>
          </View>
        </View>
        <View style={styles.down}>
          <View style={styles.downContain}>
            <Text style={styles.downTitle}>
              Transactions
            </Text>
            <TouchableOpacity onPress={this.Page} style={styles.smallWord}>
              <Text>
                View all
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.downContain1}>
            <Text style={styles.smallDetail}>
              You dont have any transactions
            </Text>
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
    paddingTop: 20,
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
    marginTop: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
    width: '90%',
    flex: 2,
    justifyContent: 'center',
  },
  smallTitle: {
    flex: 1,
    marginTop: 10,
    fontSize: 25,
    borderColor: 'grey',
    color: '#344a5e',
  },
  down: {
    flex: 1,
    flexDirection: 'column',
  },
  downContain: {
    flex: 0.5,
    flexDirection: 'row',
    borderTopWidth:1,
  },
  downTitle: {
    paddingLeft: 10,
    fontSize: 30,
    flex: 1,
    fontWeight:'bold',
    color: '#344a5e',
  },
  smallWord: {
    paddingRight: 10,
    justifyContent: 'center',
  },
  downContain1: {
    flex: 2,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  smallDetail: {
    paddingLeft: 10,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWord: {
    fontSize: 20,
  },
});
