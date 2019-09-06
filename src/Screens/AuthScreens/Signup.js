import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Col, Row } from 'react-native-easy-grid';

export default class Signin extends Component {
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
                    <Input maxLength={15}/>
                </Item>
                <Item floatingLabel>
                    <Label>Full Name</Label>
                    <Input maxLength={30}/>
                </Item>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input secureTextEntry={true} maxLength={16}/>
                </Item>
                <Button full dark rounded style={styles.btnSignin}>
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
