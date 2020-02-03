import React from 'react';
import {Text} from 'react-native';
export default ()=> <Text>DetailPage</Text>
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
}
  from 'react-native';

let admins = require('./data.json')


const CreateTable = () => {
  let table = []
  for (let i = 0; i < 20; i++) {
    table.push (
    
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate('Datail')}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.imagestyle}
          source={{ uri: admins[i].youtube_thumbnail }}
        />
        <Text
          style={styles.instructions}>
          {admins[i].youtube_title.length ? admins[i].youtube_title.substring(0, 35) + "..." : admins[i].youtube_title}</Text>
      </View>
    </TouchableOpacity>
   
    )
  }
  return table
}

export default class Popular extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <CreateTable/>
      </ScrollView>
    )
  }
}


// part of styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  instructions: {
    fontSize: 20,
    color: "white",
    marginRight: 200,
    marginTop: 20
  },
  imagestyle: {
    width: 180,
    height: 120,
    margin: 5

  }
})