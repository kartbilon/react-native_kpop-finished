import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Detail from '../screens/Detail'
import BottomNavigator from './TabNavigation'
import TabNavigator from './TabNavigation'


const MainNavigation = createStackNavigator({
  tab: {
    screen: TabNavigator,
    navigationOptions: {
      headerTitle: "KPOPTOP10",
      headerTitleStyle: {
        color: "white" 
      },
      headerStyle: {
        backgroundColor: "black",
        borderWidth: 0,
      }
    }
  },
  bot: { screen: BottomNavigator },
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "black",
      },
      headerTitleStyle: {
        color: "white"
      }
    }
  }
}, {
  headerMode: 'screen'
});



export default createAppContainer(MainNavigation);