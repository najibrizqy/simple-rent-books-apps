import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from "react-native";

import empty from '../../Img/empty.png';

export default class History extends Component {
  render() {
    return (
      <View style={{alignItems:"center",marginTop: '50%'}}>
        <Image source={empty} />
        <Text style={styles.emptyTitle}>History Empty</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emptyTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "#303031",
  }
});
