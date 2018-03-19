import React, { Component } from 'react'
import { AppRegistry, Text, View, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'
import { Constants } from 'expo';

import {Actions} from 'react-native-router-flux';
import Expense from './Expense';

class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'House',
         },
         {
            id: 1,
            name: 'Food',
         },
         {
            id: 2,
            name: 'Fuel',
         },
         {
            id: 3,
            name: 'Sport',
         },
         {
            id: 4,
            name: 'Kids',
         },
         {
            id: 5,
            name: 'Shopping',
         },
         {
            id: 6,
            name: 'Travel',
         },
         {
            id: 7,
            name: 'Entertainment',
         },
         {
            id: 8,
            name: 'Clothes',
         },
         {
            id: 9,
            name: 'Gift',
         },
         {
            id: 10,
            name: 'Other',
         }
      ]
   }

   alertItemName = (item) => {
      alert(item.name)
      Actions.pop();
   }
   
   render() {
      return (
        <View style={styles.container}> 
            <View style={styles.containers}>
              {
                 this.state.names.map((item, index) => (
                    <TouchableOpacity
                       key = {item.id}
                       style = {styles.container}
                       onPress = {() => this.alertItemName(item)}>
                       
                       <Text style = {styles.text}>
                          {item.name}
                       </Text>
                    </TouchableOpacity>
                 ))
              }
              </View>
         </View>
      )
   }
}  

export default List

const styles = StyleSheet.create ({
   container: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f2',
      alignItems: 'center',
      flex: 1,
   },
   containers: {
      alignItems: 'center',
   },
   text: {
      color: '#344a5e',
      fontWeight:'bold',
      fontSize: 18,
   }
})