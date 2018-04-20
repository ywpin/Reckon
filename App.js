import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './login/Login';
import Register from './register/Register';
import Home from './Home';
import BasicFlatList from './BasicFlatList';
import BasicFlatList_Income from './BasicFlatList_Income';
import Firebase from './login/firebase';
import AddModal from './AddModal';
import flatListData from './flatListData';
import Page from './calender/Page';

export default class Date_router extends Component<{}>{
  render() {
    return (
    <Router>
      <Stack key="root" hideNavBar={true}> 
        <Scene key="login" component={Login} title="Login" initial={true}/>
        <Scene key="register" component={Register} title="Register"/>
        <Scene key="Home" component={Home} title="Home"/>
        <Scene key="BasicFlatList_Income" component={BasicFlatList_Income} title="BasicFlatList_Income"/>
        <Scene key="flatListData" component={flatListData} title="flatListData"/>
        <Scene key="BasicFlatList" component={BasicFlatList} title="BasicFlatList"/>
        <Scene key="AddModal" component={AddModal} title="AddModal"/>
        <Scene key="Page" component={Page} title="Page"/>
      </Stack>
    </Router>
    )
  }
}