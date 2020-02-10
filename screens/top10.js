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
import Section4 from '../swiper/section4'
import Section5 from '../swiper/section5'
import Section6 from '../swiper/section6'
import Section7 from '../swiper/section7'
import Section8 from '../swiper/section8'
import Section9 from '../swiper/section9'

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
  scrollviewstyle: {
    backgroundColor: "black"
  }
})


export default class Popular extends Component {
  state = {
    modalVisible: true
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: false })
  }
  render() {
    return (
      <ScrollView style={styles.scrollviewstyle}>
        <SwiperComponent />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </ScrollView>

    )
  }
}
