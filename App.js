import React, { Component } from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation';

import Login from './app/screens/Login'
import Main from './app/screens/Main'

const App = StackNavigator({
    Login: {
     screen: Login,
     navigationOptions: {
       title: "Login Page"
     }
   },
   Main: {
    screen: Main,
    navigationOptions: {
      title: "Main Page"
    }   
  }
},
{initialRouteName: 'Login'}
);   
export default App;
