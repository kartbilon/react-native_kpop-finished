import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabNavigator from './TabNavigation'


const MainNavigation = createStackNavigator({
  tab: {
    screen: TabNavigator,
    navigationOptions: {
      headerTitle: "KPOP TOP 10",
      headerTitleStyle: {
        color: "white",
        textAlign: "center",
        flex: 1
      },
      headerStyle: {
        backgroundColor: "black",
        borderWidth: 0,
      }
    }
  }
}, {
  headerMode: 'screen'
});



export default createAppContainer(MainNavigation);