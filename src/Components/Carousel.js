import React, {Component} from 'react';

import { StyleSheet, View, ScrollView, Text, Image } from "react-native";

import action from '../Img/action.png';

export default class Carousel extends Component {
    render(){
        return(
            <View style={styles.carousel}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>  
                    <View style={styles.card1}>
                        <View style={styles.wrapImage}>
                            <Text style={styles.genre}>
                                Action
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Image source={action} />
                        </View>
                    </View>
                    <View style={styles.card2}>
                        <View style={styles.wrapImage}>
                            <Text style={styles.genre}>
                                Drama
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Image source={action} />
                        </View>
                    </View>
                    <View style={styles.card3}>
                        <View style={styles.wrapImage}>
                            <Text style={styles.genre}>
                                Adventure
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Image source={action} />
                        </View>
                    </View>
                    <View style={styles.card4}>
                        <View style={styles.wrapImage}>
                            <Text style={styles.genre}>
                                Romance
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Image source={action} />
                        </View>
                    </View>
                    <View style={styles.card5}>
                        <View style={styles.wrapImage}>
                            <Text style={styles.genre}>
                                Komedi
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Image source={action} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const card= {
    marginTop: 30,
    width: 240,
    height: 116,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 15,
    elevation: 10,
}

const styles = StyleSheet.create({
    carousel:{
        height: 180,
    },
    wrapImage:{
        justifyContent:'center'
    },
    genre:{
        marginHorizontal:20,
        color:'#FFF'
    },
    card1:{
        ...card,
        marginLeft: 25,
        backgroundColor: '#28BFDB',
    },
    card2:{
        ...card,
        backgroundColor: '#EF77A3',
    },
    card3:{
        ...card,
        backgroundColor: '#F4CF5D',
    },
    card4:{
        ...card,
        backgroundColor: '#DDA0DD',
    },
    card5:{
        ...card,
        backgroundColor: '#90EE90',
    },
})
