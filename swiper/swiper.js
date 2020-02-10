import React, { Component, lazy } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  LayoutAnimation,
  Modal
} from 'react-native'
import Swiper from 'react-native-swiper'
import Layout from '../contants/Layout'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons'

let blackpink = require('../youtubedata/BANGTAN.json')

const styles = StyleSheet.create({
  viewstyle: {
    height: Layout.height / 3,
    backgroundColor: "red"

  }
})


export default class SwiperComponent extends Component {
  render() {
    return (
      <View>
        <Text style={{ color: 'white', fontSize: 30, margin: 20 }}>B.T.S <Blink text="❤️" /></Text>
        <SwiperView />
      </View>
    )
  }
}

//부모 컨포넌트 
class SwiperView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Swiper
        autoplay={true}
        showsPagination={false}
        style={{ height: Layout.height / 3 }}
      >
        {blackpink.map((blp, i) => {
          return (
            <View>
              <BlackpinkInfo
                url={blp.youtube_url}
                title={blp.youtube_title}
                thumbnail={blp.youtube_thumbnail}
                key={i}
              />
            </View>
          )
        })}
      </Swiper>
    )
  }
}
class BlackpinkInfo extends Component {
  state = {
    modalVisible: false
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }
  render() {
    return (
      <View >
        <View >
          <Modal
            animationType='none'
            transparent={false}
            visible={this.state.modalVisible}

            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <TouchableOpacity onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
              style={{
                backgroundColor: "white",
                marginTop: 20,
                marginBottom: 20
              }}
            >
              <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 10 }}>
                <Ionicons name="md-arrow-back" size={32} />
                <Text style={{ fontSize: 28 }}>   BACK </Text>
              </View>
            </TouchableOpacity>
            <WebView
              source={{ uri: this.props.url }}
              scalesPageToFitm={true}
              startInLoadingState={true}
            />
          </Modal>
        </View>

        <TouchableOpacity
          onPress={() => { this.setModalVisible(true) }}
        >
          <View>
            <ImageBackground
              source={{ uri: this.props.thumbnail }}
              resizeMode='stretch'
              style={{ width: Layout.width, height: Layout.height / 3 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowingText: true
    }

    setInterval(() => (this.setState
      (prevState => (
        { isShowingText: !prevState.isShowingText })
      )), 1000
    )
  }
  render() {
    if (!this.state.isShowingText) {
      return null
    }
    return (
      <Text>{this.props.text}</Text>
    )
  }
}