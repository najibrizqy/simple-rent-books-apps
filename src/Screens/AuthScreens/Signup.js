import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Container, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { Col, Row } from 'react-native-easy-grid';
import { connect } from 'react-redux';

import { register } from '../../Publics/Actions/user';

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      formData: {
        username: '',
        full_name: '',
        email: '',
        password: ''
      },
      showToast: false,
    }
  }

  handleChange = (name, value) => {
    let newFormData = {...this.state.formData}
    newFormData[name] = value
    this.setState({
      formData: newFormData
    })
    console.log(newFormData)
  }

  handleSubmit = () => {
    this.props.dispatch(register(this.state.formData))
    .then(async (res) => {
      Toast.show({
        text: 'Successful Registration',
        buttonText: "Okay",
        type: "success",
        position:'top',
        duration:4000,
      })
      this.props.navigation.navigate('SigninScreen')
    })
    .catch(()=>{
      console.log(this.props.user.errMsg)
      Toast.show({
        text: this.props.user.errMsg,
        buttonText: "Okay",
        type: "danger",
        position:'top',
        duration:4000,
      })
    })
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.content} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.title}>Create Your{"\n"}Account !</Text>
            </View>
            <Form style={styles.formSignin}>
                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input maxLength={15} onChangeText={(text)=>this.handleChange('username',text)}/>
                </Item>
                <Item floatingLabel>
                    <Label>Full Name</Label>
                    <Input maxLength={30} onChangeText={(text)=>this.handleChange('full_name',text)} />
                </Item>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input keyboardType='email-address' autoCompleteType='email' onChangeText={(text)=>this.handleChange('email',text)} />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input secureTextEntry={true} maxLength={16} onChangeText={(text)=>this.handleChange('password',text)} />
                </Item>
                <Button full dark rounded style={styles.btnSignin} onPress={this.handleSubmit}>
                  <Text style={styles.textSignin}>Sign up</Text>
                </Button>
            </Form>
            <Row style={styles.foot}>
              <Col>
                <Text style={styles.btnSignup} onPress={() => {this.props.navigation.navigate('SigninScreen')}}>Sign In</Text>  
              </Col>
            </Row>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state =>{
  return {
    user : state.user
  }
}

export default connect (mapStateToProps) (Signup)

const styles = StyleSheet.create({
    container: {
      marginLeft: 20,
      marginRight: 35,
    },
    title: {
      top: 90,
      marginLeft : 15,
      fontSize: 24,
      color: '#4B4C72',
      fontWeight: 'bold',
    },
    formSignin: {
      marginTop: 100,
    },
    btnSignin: {
      marginTop: 50,
      marginLeft: 15,
    },
    textSignin: {
      color:"white",
    },
    foot:{
      marginTop: 60,
      marginBottom: 50,
      marginLeft : 15,
    },
    btnSignup: {
      textDecorationLine: 'underline',
      color: '#4B4C72',
    }
});
