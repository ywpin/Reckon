import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './login/Login';
import Register from './register/Register';
import Home from './Home';
import Income from './Income';
import List from './List';
import List_2 from './List_2';
import Expense from './Expense';
import Page from './calender/Page';

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
  	    <Scene key="List" component={List} title="List"/>
  	    <Scene key="Page" component={Page} title="Page"/>
  	  </Stack>
  	</Router>
    )
  }
}
