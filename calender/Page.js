import React, { Component } from 'react'
import { StyleSheet, View, Text, Platform, FlatList  } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Constants } from 'expo';

import Form from './../login/Form';

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:null}
  }
 
  render(){
    return (
      <View style={this.container}>
        <DatePicker
          style={styles.submitarea}
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f2',
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'column',
  },
  submitarea: {
    width: 200,
    height: 150,
    padding: 12,
    marginTop: 70,
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'flex-start'
  },
});