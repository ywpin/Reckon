import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert, AsyncStorage, Image } from 'react-native';
import { Constants } from 'expo';

import {Actions} from 'react-native-router-flux';

export default class Home extends React.Component {

  Page() {
    Actions.Page()
  }

  BasicFlatList_Income() {
    Actions.BasicFlatList_Income();
  }  

  BasicFlatList() {
    Actions.BasicFlatList();
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
        <View style={{ alignItems: 'center',}}>
          <Image style={{ marginTop: -50, width:70, height:300}}
            source={require('./login/Logo.png')}
          />
        </View>
        <View style={styles.up}>
          <View style={styles.div}>
            <Text style={styles.smallTitle}>Income</Text>
              <TouchableOpacity
                onPress={this.BasicFlatList_Income}
                style={styles.button}>
                <Text style={styles.buttonWord}>+</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.div}>
            <Text style={styles.smallTitle}>Expense</Text>
              <TouchableOpacity
              onPress={this.BasicFlatList}
              style={styles.button}>
              <Text  style={styles.buttonWord}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.div}>
            <Text style={styles.smallTitle}>Transactions</Text>
              <TouchableOpacity
                onPress={this.Page}
                style={styles.button}>
              <Text style={styles.buttonWord}>View</Text>
            </TouchableOpacity>
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
    marginTop: -50,
    fontSize: 25,
    borderColor: 'grey',
    color: '#344a5e',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -160,
  },
  buttonWord: {
    fontSize: 20,
    color: '#344a5e'
  },
});
