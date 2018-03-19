import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Constants } from 'expo';

export default class Logo extends Component<{}>{
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:70, height:300}}
          source={require('../login/Logo.png')}
        />
        <Text style={styles.logoText}>Welcome to Reckon</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoText: {
    marginVertical: -115,
    fontSize: 18
  }

});

