import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// idol
import blackpink from '../screens/idol/blackpink';
import bts from '../screens/idol/bts'
import iu from '../screens/idol/iu'
import twice from '../screens/idol/twice'
import redvelvet from '../screens/idol/redvelvet'
import momoland from '../screens/idol/momoland'
import exo from '../screens/idol/exo'
import gidle from '../screens/idol/gidle'
import ikon from '../screens/idol/ikon'
import got7 from '../screens/idol/got7'

// company
import sm from '../screens/company/sm'
import jyp from '../screens/company/jyp'
import yg from '../screens/company/yg'

// other
import top10 from '../screens/top10'
import save from '../screens/save'



const BottomNavigator = createBottomTabNavigator({
  
  "TOP 10": { screen: top10},
  SM: { screen: sm,  },
  JYP: { screen: jyp },
  YG: { screen: yg },
  SAVE : {screen : save}
  },{
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 17,
      },
    style: {
      backgroundColor: 'black',
    },
  }})

const TabNavigator = createMaterialTopTabNavigator({
  
  "TOP 10": { screen:  BottomNavigator},
  BLACKPINK: { screen:  blackpink},
  BTS: { screen:  bts},
  IU: { screen:  iu},
  Twice: { screen: twice},
  REDVELVET: { screen:redvelvet},
  MOMOLAND: { screen:momoland},
  EXO: { screen:exo},
  "(G)I-DLE": { screen:gidle},
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
