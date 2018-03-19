import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Constants } from 'expo';

import {Actions} from 'react-native-router-flux';

class List_2 extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Salary',
         },
         {
            id: 1,
            name: 'Savings',
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
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.containers}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List_2

const styles = StyleSheet.create ({
   container: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f2',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   containers: {
      alignItems: 'center',
   },
   text: {
      color: '#344a5e',
      fontWeight:'bold',
      fontSize: 22,
      justifyContent: 'space-between',
      marginRight: 20,
      marginLeft: 20
   }
})