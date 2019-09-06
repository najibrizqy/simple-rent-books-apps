import React, { Component,Fragment } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import { Icon } from 'native-base';
import StarRating from 'react-native-star-rating'

import Carousel from '../../Components/Carousel';
import dilan from '../../Img/dilan.png'
import harry from '../../Img/harry.png'

export default class Home extends Component {
  render() {
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <Carousel />

            {/* Populer Books */}
            <View style={styles.content}>
              <View>
                <Text style={styles.popular}>Popular Books</Text>
              </View>
              <View style={styles.scrollList}>
                  <View style={styles.wrap}>

                    <TouchableOpacity activeOpacity={.7} style={styles.bookWrap} onPress={() => {this.props.navigation.navigate('DetailScreen')}}  >
                      <View style={styles.bookCard}>
                        <Image source={dilan} style={styles.bookImage} />
                      </View>
                      <Text style={styles.bookTitle}>Dilan 1990</Text>
                      <View style={{ width: '50%' }}>
                        <StarRating style={{ width: '50%' }}
                            disabled={true}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            maxStars={5}
                            rating={4}
                            fullStarColor={'#F3AC13'}
                            starSize={14}
                        />
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.7} style={styles.bookWrap} onPress={() => {this.props.navigation.navigate('DetailScreen')}}  >
                      <View style={styles.bookCard}>
                        <Image source={harry} style={styles.bookImage} />
                      </View>
                      <Text style={styles.bookTitle}>Harry Potter</Text>
                      <View style={{ width: '50%' }}>
                        <StarRating style={{ width: '50%' }}
                            disabled={true}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            maxStars={5}
                            rating={4}
                            fullStarColor={'#F3AC13'}
                            starSize={14}
                        />
                      </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={.7} style={styles.bookWrap} onPress={() => {this.props.navigation.navigate('DetailScreen')}}  >
                      <View style={styles.bookCard}>
                        <Image source={harry} style={styles.bookImage} />
                      </View>
                      <Text style={styles.bookTitle}>Harry Potter</Text>
                      <View style={{ width: '50%' }}>
                        <StarRating style={{ width: '50%' }}
                            disabled={true}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            maxStars={5}
                            rating={4}
                            fullStarColor={'#F3AC13'}
                            starSize={14}
                        />
                      </View>
                    </TouchableOpacity>

                  </View>
              </View>
                
            </View>
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}

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
  content:{
    marginHorizontal: 12,
    height: '100%',
  },
  popular:{
    marginLeft: 12,
    color: '#303031',
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrap:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%'
  },
  bookWrap:{
    width: '50%',
    padding: 12,
  },
  bookCard: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 5
  },
  bookImage:{
    borderRadius: 5,
    width: '100%',
    height: '100%'
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 5
  },
  scrollList:{
    marginTop: 10,
    height: '100%'
  }
});

