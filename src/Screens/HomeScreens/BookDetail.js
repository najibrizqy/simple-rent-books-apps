import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';

import potter from '../../Img/potter.png';
import harry from '../../Img/harry.png';

export default class BookDetail extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.coverImage}>
                    <Icon type="AntDesign" name="arrowleft" style={styles.btnBack}/>
                    <Image source={potter} style={styles.backgroundCover} />
                    <Text style={styles.title}>Harry Potter and the{"\n"}Chamber of Secrets</Text>
                    <Image source={harry} style={styles.bookCover} />
                </View>
                <View style={styles.wrapDescription}>
                    <Text style={styles.description}>
                        Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.
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
        color: '#FFF'
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
        left: 25
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