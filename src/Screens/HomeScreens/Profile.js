import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

import background from '../../Img/background.png';
import avatar from '../../Img/user.png';

export default class Profile extends Component {
  render() {
    return (
        <View style={styles.container}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={styles.background}>
              <Image source={background} style={styles.image} />
            </View>

            <Image source={avatar} style={styles.avatar} />
            <View style={styles.wrapper}>
              <View style={styles.card}></View>
              <View style={styles.wrapperProfile}>
                <Text style={styles.name}>Najibullah Rizqy F</Text>
                <Text style={styles.username}>@najibrizqy136</Text>
                <Text style={styles.idCardTitle}>ID CARD USER</Text>
                <Text style={styles.valueIdCard}>17</Text>
              </View>
            </View>
          {/* </ScrollView> */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    paddingBottom: 60,
    zIndex:1,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf:'center',
    position: 'absolute',
    top:135,
    zIndex:3,
  },
  wrapperProfile:{
    alignSelf: "center",
    position: 'absolute',
    top: 70,
    flexDirection: 'column'
  },
  name:{
    alignSelf: 'center',
    fontSize: 20
  },
  idCardTitle:{
    alignSelf: 'center',
    fontSize: 30,
    marginTop: 40,
    color: 'gray',
  },
  valueIdCard:{
    alignSelf: 'center',
    fontSize: 30,
    color: 'gray'
  },
  username:{
    fontSize:15,
    color: "#36c",
    alignSelf: 'center'
  },
  wrapper:{
    width: '100%',
    position: 'absolute',
    top: 200,
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    zIndex:2,
  },
  card:{
    width: '100%',
    height: 300,
    borderRadius: 15,
    backgroundColor: "#FFF",
  },
  background: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'blue',
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    shadowOpacity: 0.9,
  }
});
