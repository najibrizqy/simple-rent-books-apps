import React, { Component, Fragment } from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Signin from './src/Screens/AuthScreens/Signin';
import Signup from './src/Screens/AuthScreens/Signup';
import Home from './src/Screens/HomeScreens/Home';
import History from './src/Screens/HomeScreens/History';
import Profile from './src/Screens/HomeScreens/Profile';

const AuthStack = createStackNavigator({
  SigninScreen: {
    screen: Signin,
  },
  SignupScreen:{
    screen: Signup,
  },
},{
    defaultNavigationOptions: {
      header: null
    }
});

const AppStack = createStackNavigator({
  HomeScreen:{
    screen: Home,
  }
},{
  defaultNavigationOptions: {
    header: null
  }
});

const HomeTabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: AppStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (  
        <Icon type="FontAwesome" name="home" style={{fontSize:20, color:`${tintColor}`}}/>
      )
    },
  },
  HistoryTab: {
    screen: History,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type="FontAwesome" name="history" style={{fontSize:20, color:`${tintColor}`}}/>
      )
    },
  },
  ProfileTab: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type="FontAwesome" name="user-circle" style={{fontSize:20, color:`${tintColor}`}}/>
      )
    },
    
  },
},{
  tabBarOptions: { 
    showIcon: true,
    activeTintColor: '#007bff',
    nactiveTintColor: 'gray',
    showLabel: false
  },
})

const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: HomeTabNavigator
},{
  initialRouteName: 'Auth'
})

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component{
  render(){
    return(
      <Fragment>
        <AppContainer />
      </Fragment>
    )
  }
}
