import React, { Component,Fragment } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, } from "react-native";
import { Icon } from 'native-base';

import Carousel from '../../Components/Carousel';
import BooksList from '../../Components/BooksList';

const Home= (props) => {
    return (
      <Fragment>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleView}>
            <Text style={styles.title}>LIBRARY</Text>
          </View>
          <View style={styles.search}>
            <TextInput placeholder="Search..." style={styles.searchInput}  />
            <Icon type="FontAwesome" name="search" style={styles.iconSearch} />
          </View>
        </View>

        <View style={styles.container}>
          <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
            <Carousel />
            <BooksList {...props} />
          </ScrollView>
        </View>
      </Fragment>
    );
}

export default Home;

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    paddingBottom: 60,
  },
  header:{
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 10,
    height: 50,
  },
  titleView:{
    width: '26%'
  },
  title:{
    fontWeight: 'bold',
    marginTop: 10,
  },
  search:{
    position: 'relative',
    width: '60%',
  },
  searchInput:{
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    paddingVertical: 5,
    paddingHorizontal: 15,
    paddingLeft: 40,
    backgroundColor : '#E5E6EE'
  },
  iconSearch:{
    position: 'absolute',
    top: 10,
    left: 14,
    fontSize: 17,
    color: 'gray'
  },
});

