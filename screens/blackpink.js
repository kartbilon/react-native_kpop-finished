import React, { Component, lazy } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    LayoutAnimation,
    AsyncStorage
} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import uuidv1 from 'uuid/v1'
import Nael from './nael'

// data
let blackpink = require('../youtubedata/blackpink.json')

const qwer = "sadas"

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
    constructor(props) {
        super(props)
    }
    state = {
        toDos: {},
        loadedToDos : false
    }

    render() {
        const { toDos } = this.state
        return (

            <TouchableOpacity onPress={this._addToDo}>
                <View style={styles.viewstyle}>
                    <Image

                        style={styles.imagestyle}
                        source={{ uri: this.props.thumbnail }}
                        resizeMode='stretch'
                    />
                    <Text style={styles.textstyle}>
                        {this.props.title.length ? this.props.title.substring(0, 40) + ".." : this.props.title}
                    </Text>

                    <ScrollView>
                        {Object.values(toDos).map(toDo => {
                            return (
                                <Nael 
                                    key ={toDo}
                                    title = {toDo.title}
                                
                                />
                            )
                        }
                        )
                        }
                    </ScrollView>
                    <Nael hi='hi'/>
                </View>
            </TouchableOpacity>
        )
    }
    _loadToDos = async () => {
        try {
          const toDos = await AsyncStorage.getItem("toDos");
          const parsedToDos = JSON.parse(toDos);
          this.setState({ loadedToDos: true, toDos: parsedToDos || {} });
        } catch (err) {
          console.log(err);
        }
      };
    // _saveToDos = newToDos => {
    //     console.log(JSON.stringify(newToDos))
    //     const saveToDos = AsyncStorage.setItem("toDos", JSON.stringify(newToDos));
    //   };
    _addToDo = () => {
        this.setState(prevState => {
            const ID = uuidv1()
            const newToDoObject = {
                [ID]: {
                    id: ID,
                    title: this.props.title,
                    thumbnail: this.props.thumbnail,
                    url: this.props.url
                }
            }
            const newState = {
                toDos: {
                    ...prevState.toDos,
                    ...newToDoObject
                }   
            }
            this._saveToDos(newState.toDos);
            return { ...newState }
        })
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