import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Col, Row } from 'react-native-easy-grid';

export default class Signin extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.title}>Here To Get{"\n"}Welcomed !</Text>
            </View>
            <Form style={styles.formSignin}>
                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input secureTextEntry={true} />
                </Item>
                <Button full dark rounded style={styles.btnSignin} onPress={() => {this.props.navigation.navigate('HomeScreen')}}>
                  <Text style={styles.textSignin}>Sign In</Text>
                </Button>
            </Form>
            <Row style={styles.foot}>
              <Col>
                <Text style={styles.btnSignup} onPress={() => {this.props.navigation.navigate('SignupScreen')}}>Sign Up</Text>  
              </Col>
              <Col>
                <Text style={styles.btnForgot}>Forgot Password</Text>
              </Col>
            </Row>
        </Content>
      </Container>
    );
  }
}

let btnSignup = {
  textDecorationLine: 'underline',
  color: '#4B4C72',
}

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
      marginTop: 100,
      marginBottom: 50,
      marginLeft : 15,
    },
    btnSignup: {
      ...btnSignup,
    },
    btnForgot: {
      ...btnSignup,
      textAlign: 'right'
    }
});
