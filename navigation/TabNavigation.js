import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import AllTime from '../screens/AllTime';
import Favorite from '../screens/Favorite';
import Latest from '../screens/Latest';
import Nael from '../screens/nael'
import blackpink from '../screens/blackpink';
import bts from '../screens/bts'
import iu from '../screens/iu'
import twice from '../screens/twice'
import redvelvet from '../screens/redvelvet'
import momoland from '../screens/momoland'
import exo from '../screens/exo'
import gidle from '../screens/gidle'
import ikon from '../screens/ikon'
import got7 from '../screens/got7'
import top10 from '../screens/top10'


const BottomNavigator = createBottomTabNavigator({
  
  top10: { screen: top10},
  SM: { screen: AllTime,  },
  JYP: { screen: Latest },
  YG: { screen: Favorite },
  save : {screen : Nael}
  },{
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 15,
      },
    style: {
      backgroundColor: 'black',
    },
  }})

const TabNavigator = createMaterialTopTabNavigator({
  
  TOP10: { screen:  BottomNavigator},
  BLACKPINK: { screen:  blackpink},
  BTS: { screen:  bts},
  IU: { screen:  iu},
  Twice: { screen: twice},
  REDVELVET: { screen:redvelvet},
  MOMOLAND: { screen:momoland},
  EXO: { screen:exo},
  GIDLE: { screen:gidle},
  IKON: { screen:ikon},
  GOT7: { screen:got7}
  
 
},
{
  lazy : false,
  animationEnabled :false,
  swipeEnabled : true,
  tabStyle :{
    width: Dimensions.get('window').width / 7,
  },
  tabBarOptions: {
    activeTintColor: '#e91e63',
    scrollEnabled :true,
    showLable : true,
    labelStyle: {
      fontSize: 20,
      },
    style: {
      backgroundColor: 'black',
    },
  }
});

export default createAppContainer(TabNavigator,BottomNavigator);
