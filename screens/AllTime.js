import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
export default ({navigation})=> 
<TouchableOpacity 
style ={styles.container}
onPress = {() =>{navigation.navigate('Detail')}}
>
    <Text>Alltime</Text>
    </TouchableOpacity>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
  });