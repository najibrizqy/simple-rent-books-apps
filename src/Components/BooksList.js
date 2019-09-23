import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';

import { getBooks } from '../Publics/Actions/books';

class BooksList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount = async () => {
        await this.props.dispatch (getBooks());
        this.setState ({
            data: this.props.books.booksList.values,
        });
    }

    render(){
        const {data} = this.state;
        return(
            <View style={styles.content}>
              <View>
                <Text style={styles.popular}>Popular Books</Text>
              </View>
              <View style={styles.scrollList}>
                  <View style={styles.wrap}>
                    {
                        this.props.books.booksList.length !== 0 ? 
                            data.map((res, index) => {
                                return(
                                    <TouchableOpacity activeOpacity={.7} style={styles.bookWrap} onPress={() => {this.props.navigation.navigate('DetailScreen', {item: res})}}  key={index}>
                                        <View style={styles.bookCard}>
                                            <Image source={{uri:`${res.image}`}} style={styles.bookImage} />
                                        </View>
                                        <Text style={styles.bookTitle}>{res.title}</Text>
                                        <View style={{width: '100%', flexDirection:'row'}}>
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
                                            <View style={{justifyContent: 'center', paddingLeft: 5}}>
                                            <Text>4.0</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        :   this.props.books.isLoading ? 
                            <View style={styles.content}>
                                <Spinner color='blue' />
                            </View>
                        :   
                            <Text>
                                Book Not Found.
                            </Text>
                    }

                  </View>
              </View>
                
            </View>
        )
    }
}

const mapStateToProps = state =>{
    return {
      books : state.books
    }
}

export default connect (mapStateToProps )(BooksList)

const styles = StyleSheet.create({
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
    scrollList:{
        marginTop: 10,
        height: '100%'
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
    informWrapper: {
        width: '100%',
        flexDirection:'row'
    }
});