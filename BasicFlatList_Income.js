import React, { Component } from 'react'
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, Alert, Platform, FlatList, Button, RefreshControl } from 'react-native'
import { Constants } from 'expo';
import {Actions} from 'react-native-router-flux';
import Swipeout from 'react-native-swipeout';
import flatListData_Income from './flatListData_Income';
import AddModal_Income from './AddModal_Income';

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null
    };
  }

  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if(this.state.activeRowKey != null) {
          this.setState({activeRowKey: null});
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({ activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert('Alert','Are you sure you want to delete?',
              [
              {text: 'No', onPress: () => alert('Cancel Pressed'), style: 'cancel'},
              {text: 'Yes', onPress: () => {
                flatListData_Income.splice(this.props.index, 1);
                this.props.parentFlatList.refreshFlatList(deletingRow);
              }},
              ],
                { cancelable: true}
              );
          },
          text: 'Delete', type: 'delete'
        }
      ],
      rowId: this.props.index,
      sectionId: 1
    };

    return (
      <Swipeout {...swipeSettings}>
        <View style={{flex: 1, flexDirection: 'column',}}>
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#90a4ae'}}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.flatListItem}>{this.props.item.name}</Text>
              <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
            </View>
          </View>
          <View style={{height: 1, backgroundColor: 'white'}}></View>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  flatListItem:{
    color: 'white',
    padding: 10,
    fontSize: 16,
  }
});

export default class BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      deletedRowKey: null,
    });
    this._onPressAdd = this._onPressAdd.bind(this);
  }
  refreshFlatList = (activeKey) => { 
    this.setState((prevState) => {
      return {
        deletedRowKey: activeKey
      };
    });
    this.refs.flatList.scrollToEnd();
  }
  _onPressAdd () {
    // alert("You add Item")
    this.refs.addModal_Income.showAddModal();
  }

  _onRefresh(){
    this.setState({refreshing: true});
    this._onPressAdd().then(() => {
      this.setState({refreshing: false})
    });
  }

  render () {
    return(
      <View style={{flex: 1, backgroundColor: '#ecf0f2', paddingTop: Constants.statusBarHeight, flexDirection: 'column'}}>
        <FlatList ref={"flatList"} data={flatListData_Income} renderItem={({item, index}) => {
          return (
            <FlatListItem item={item} index={index} parentFlatList={this}></FlatListItem>
          );
          }}
          >
          refreshControl=
          {
            <RefreshControl refreshing={this.state.refreshing} 
                            onRefresh={this._onRefresh.bind(this)}/>}
        </FlatList>
        <AddModal_Income ref={'addModal_Income'} parentFlatList={this}></AddModal_Income>
        <View style={{ flex: 1}}>
          <View style={{ flex: 1, justifyContent: 'flex-end'}}>
            <Button 
            onPress={this._onPressAdd}
            title = "Add" />
          </View>
        </View>
      </View>

    )
  }
}