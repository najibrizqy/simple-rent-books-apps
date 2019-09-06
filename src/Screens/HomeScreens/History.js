import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Container, Content } from 'native-base';

// import Footer from '../Components/Footer';

export default class History extends Component {
  render() {
    return (
      <View>
        <Text>History</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor: "#FFFFFF",
        elevation:15,
    },
    iconFooter:{
        fontSize: 20
    }
});
