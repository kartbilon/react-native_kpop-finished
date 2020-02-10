import React, { Component, lazy } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    LayoutAnimation,
    TouchableOpacity,
    Modal,
    Alert
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons'

// data
let blackpink = require('../../youtubedata/blackpink.json')

export default class Section3 extends Component {
    render() {
        return (
            <View>
                <Blackpink />
            </View>


        )
    }
}

//blackpink
class Blackpink extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'black' }}>
                {blackpink.map((blp, i) => {
                    return (
                        <BlackpinkInfo
                            url={blp.youtube_url}
                            title={blp.youtube_title}
                            thumbnail={blp.youtube_thumbnail}
                            key={i}
                        />
                    )
                })}
            </ScrollView>
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

                    <View style={styles.viewstyle}>
                        <Image
                            style={styles.imagestyle}
                            source={{ uri: this.props.thumbnail }}
                            resizeMode='stretch'
                        />
                        <Text style={styles.textstyle}>
                            {this.props.title.length ? this.props.title.substring(0, 40) + ".." : this.props.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    viewstyle: {
        flexDirection: "row",
    },

    textstyle: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 200

    },
    texttitle: {
        fontSize: 30,
        margin: 10,
        marginBottom: 20,
        color: 'white'
    },
    imagestyle: {
        marginLeft: 20,
        marginBottom: 20,
        height: 100,
        width: 150

    }
})