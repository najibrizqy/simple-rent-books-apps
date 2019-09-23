import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

import { getProfile } from '../../Publics/Actions/user';
import background from '../../Img/background.png';
import avatar from '../../Img/user.png';

class Profile extends Component {
  constructor(props){
    super(props)
    this.state={
      userData: [],
    }
  }

  handleSignout = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('SigninScreen')
  }

  componentDidMount = () => {
    AsyncStorage.getItem('token', (err,res)=>{
      if(res){
        this.props.dispatch(getProfile(res))
        .then((result) => {
          this.setState({
            userData: this.props.user.userProfile
          }, ()=>{console.log(this.state)})
        })
      }
      console.log(err, res)
    })
  }

  render = () => {
    const {userData} = this.state
    console.log("USER DATA", userData)
    return (
        <View style={styles.container}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={styles.background}>
            </View>

            <Image source={avatar} style={styles.avatar} />
            <View style={styles.wrapper}>
              <View style={styles.card}></View>
              <View style={styles.wrapperProfile}>
                <Text style={styles.name}>{userData.fullname}</Text>
                <Text style={styles.username}>@{userData.username}</Text>
                <Text style={styles.idCardTitle}>ID CARD USER</Text>
                <Text style={styles.valueIdCard}>{userData.id}</Text>
                <TouchableOpacity activeOpacity={.8} onPress={this.handleSignout}>
                    <View style={styles.btnSignout}>
                        <Text style={styles.textSignout}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
          {/* </ScrollView> */}
        </View>
    );
  }
}

const mapStateToProps = state =>{
  return{
    user: state.user
  } 
}

export default connect (mapStateToProps) (Profile)

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
    marginTop: 20,
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
    backgroundColor: '#007bff',
    height: 250,
  },
  btnSignout:{
    width: 150,
    height: 35,
    backgroundColor: "#DC143C",
    color: '#FFF',
    justifyContent: 'center',
    alignSelf: "center",
    borderRadius: 30,
    marginTop: 20
  },
  textSignout:{
    color: "#FFF",
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    lineHeight: 20
  }
});
