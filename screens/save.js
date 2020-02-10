import React, {Component} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Layout from '../contants/Layout'


export default class Nael extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
    <View>
      <Text style = {{ fontSize : 20, alignSelf : "center", marginTop : Layout.height / 3}}>
      Sorry, It will be updated next time.
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