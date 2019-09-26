import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';

export default class BookDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : props.navigation.getParam('item')
        }
    }

    render(){
        const {data} = this.state
        return(
            <View style={styles.container}>
                <View style={styles.coverImage}>
                    <Icon type="AntDesign" name="arrowleft" style={styles.btnBack}  onPress={() => this.props.navigation.goBack()}/>
                    <Image source={{uri: `${data.image}`}} style={styles.backgroundCover} />
                    <View style={{width: 200}}>
                        <Text style={styles.title}>{data.title}</Text>
                    </View>
                    <Image source={{uri: `${data.image}`}} style={styles.bookCover} />
                </View>
                <View style={styles.wrapDescription}>
                    <Text style={styles.description}>
                        {data.description}
                    </Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity activeOpacity={.7}>
                        <View style={styles.btnRent}>
                            <Text style={styles.textRent}>RENT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnBack:{
        position: 'absolute',
        top: 10,
        left: 25,
        zIndex: 2,
        color: '#FFF',
        elevation: 5
    }, 
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        paddingBottom: 60,
    },
    coverImage:{
        position: 'relative',
        height: "40%",
        zIndex: 1,
    },
    backgroundCover:{
        width: '100%',
        height: '100%'
    },
    bookCover:{
        position: 'absolute',
        width: 110,
        height: 150,
        bottom: -30,
        right: 25,
        zIndex: 2,
        borderRadius: 5,
    },
    wrapDescription:{
        height: '50%'
    },
    description:{
        marginHorizontal: 25,
        marginTop: 50,
    },  
    bottom:{
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center"
    },
    title:{
        position:'absolute',
        color: "#FFF",
        fontSize: 20,
        bottom: 10,
        left: 25,
        elevation: 5
    },
    btnRent:{
        width: 180,
        height: 45,
        backgroundColor: "#F4CF5D",
        color: '#FFF',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 30,
        marginTop: 30
    },
    textRent:{
        color: "#FFF",
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 20
    }

})