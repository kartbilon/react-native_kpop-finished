import React, { Component } from 'react';
import {
  StyleSheet,
  Text, View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Dimensions
} from 'react-native';
import SwiperComponent from '../swiper/swiper'
import Section1 from '../swiper/section1'
import Section2 from '../swiper/section2'
import Section3 from '../swiper/section3'

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
  scrollviewstyle : {
    backgroundColor : "black"
  }
})


export default class Popular extends Component {
  state = {
    modalVisible : true
  }
  setModalVisible(visible){
    this.setState({modalVisible : false})
  }
  render() {
    return (
      <ScrollView style = { styles.scrollviewstyle}>
          <Modal animationType={'none'} transparent={true} visible={this.state.modalVisible}>
              <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ width: '100%', height: '100%', backgroundColor: 'black', opacity: .3 }}/>
                  <View style={{ position: 'absolute', width: '80%', height: '50%', backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                      <Text>안녕하시라오 react-native 계발자입니다.</Text>
                      <Text style={{paddingBottom:200}} >안녕하시라오 react-native 계발자입니다.</Text>
                      <TouchableOpacity onPress={() => this.setState({modalVisible: false})}>
                          <Text>Close Modal</Text>
                          </TouchableOpacity>
                  </View>
              </View>
          </Modal>
      <SwiperComponent />
      <Section1/>
      <Section2/>
      <Section3/>
      </ScrollView>
      
    )
  }
}
