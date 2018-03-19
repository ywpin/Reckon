import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Constants } from 'expo';

import {Actions} from 'react-native-router-flux';
import List from './List';

export default class Expense extends React.Component {

  constructor(props){
    super(props)
    this.state = {date:null}
  }

  goBack() {
    Actions.pop();
  }

  List() {
    Actions.List();
  }

   // async getKey() {
   //   try {
   //     const value = await AsyncStorage.getItem(item.name);
   //     this.setState({myKey: value});
   //       Actions.pop();
   //   } catch (error) {
   //     console.log("Error retrieving data" + error);
   //   }
   // }
   
   // async saveKey(item){
   //   try {
   //     await AsyncStorage.setItem(item.name);
   //   } catch (error) {
   //     console.log("Error saving data" + error);
   //   }
   // }

  // onTextChanged(text) {
  //   // code to remove non-numeric characters from text
  //   this.setState({myNumber: text})
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>New Expense</Text>
        <View style={styles.up}>
          <View style={styles.div}>
            <TouchableOpacity>
              <DatePicker
                style={{width: 200}}
                date={this.state.date}
                mode="date"
                placeholder="Select Date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36,
                    borderColor: '#234456',
                    borderWidth: 1,
                    borderRadius: 4,
                  }, 
                  dateText: {
                    color: '#344a5e',
                    fontSize: 20
                  }
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
            </TouchableOpacity>
          </View>
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
              onPress={this.List} 
              style={styles.button}>
              <Text style={styles.buttonWord}>{this.state.myKey}</Text>
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
    fontSize: 20,
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
