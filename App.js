import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './login/Login';
import Register from './register/Register';
import Home from './Home';
import Income from './Income';
import BasicFlatList from './BasicFlatList';
import List_2 from './List_2';
import Expense from './Expense';
import Page from './calender/Page';
import Firebase from './login/firebase';
import AddModal from './AddModal';
import flatListData from './flatListData';

export default class Date_router extends Component<{}>{
  render() {
    return (
  	<Router>
  	  <Stack key="root" hideNavBar={true}> 
        <Scene key="login" component={Login} title="Login" initial={true}/>
        <Scene key="register" component={Register} title="Register"/>
        <Scene key="Home" component={Home} title="Home"/>
        <Scene key="Income" component={Income} title="Income"/>
        <Scene key="List_2" component={List_2} title="List_2"/>
        <Scene key="Expense" component={Expense} title="Expense"/>
  	    <Scene key="flatListData" component={flatListData} title="flatListData"/>
        <Scene key="BasicFlatList" component={BasicFlatList} title="BasicFlatList"/>
        <Scene key="AddModal" component={AddModal} title="AddModal"/>
        <Scene key="Page" component={Page} title="Page"/>
  	  </Stack>
  	</Router>
    )
  }
}