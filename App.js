import React, { Component, Fragment } from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Signin from './src/Screens/AuthScreens/Signin';
import Signup from './src/Screens/AuthScreens/Signup';
import Home from './src/Screens/HomeScreens/Home';
import BookDetail from './src/Screens/HomeScreens/BookDetail';
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
  },
  DetailScreen:{
    screen: BookDetail,
  }
},{
  header:null,
  headerMode: 'none',
  navigationOptions: ({navigation}) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
      navigation.state.routes.map(route => {
        if (route.routeName === "DetailScreen") {
          tabBarVisible = false;
        } else {
          tabBarVisible = true;
        }
      });
    }
    return {
      tabBarVisible
    };
  },
});

const HistoryStack = createStackNavigator({
  HistoryScreen:{
    screen: History,
  },
},{
  defaultNavigationOptions:{
    headerLeft: () => {
      return <Icon type="AntDesign" name="arrowleft" style={{fontSize:30, marginLeft: 25}}/>
    },
    title: 'History',
    headerTitleStyle: {fontSize:18,fontWeight:'bold'}
  },
  headerLayoutPreset: 'center'
})

const TabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: AppStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (  
        <Icon type="AntDesign" name="home" style={{fontSize:30, color:`${tintColor}`}}/>
      )
    },
  },
  HistoryTab: {
    screen: HistoryStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type="MaterialIcons" name="history" style={{fontSize:30, color:`${tintColor}`}}/>
      )
    },
  },
  ProfileTab: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon type="EvilIcons" name="user" style={{fontSize:35, color:`${tintColor}`}}/>
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
  App: TabNavigator
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
