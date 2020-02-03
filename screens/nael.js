import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ToolbarAndroidBase} from 'react-native';
import { ToolbarAndroid } from 'react-native-gesture-handler';
import Bookmark from './blackpink.js'


export default class Nael extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
    <View>
      <Text > 
      key : {this.props.key} 
      </Text>
      <Text>
      title : {this.props.id}
      </Text>
      <Text>
      title : {this.props.hi}
      </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignContent : 'center',
    backgroundColor : 'black'
  },
  instructions : {
    fontSize : 20,
    color : "blue",
    textAlign : 'center',
    margin : 10
    
  }
})