import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { Spinner, Container } from 'native-base';

import { getBooks } from '../Publics/Actions/books';
import { FlatList } from 'react-native-gesture-handler';

class BooksList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            page: 1,
            refresh: false,
        }
    }

    componentDidMount =  () => {
        if (this.props.books.booksList.length === 0){
            this.getBooksData(1)
        }
    }

    getBooksData= async (page) => {
        await this.props.dispatch (getBooks(page));
        this.setState ({
            data: this.props.books.booksList,
        });
    }

    onScrollHandler(){
        if(this.state.page <= this.props.books.totalPage){
            console.warn(this.state.page)
            if(!(this.props.books.isLoading || this.props.books.isRejected)){
                this.setState({
                    page: this.state.page + 1
                }, () => {
                    this.getBooksData(this.state.page);
                });
            }
        }
    }

    renderCard = ({item}) => {
        return(
            <TouchableOpacity activeOpacity={.7} style={styles.bookWrap} onPress={() => {this.props.navigation.navigate('DetailScreen', {item: item})}}>
                <View style={styles.bookCard}>
                    <Image source={{uri:`${item.image}`}} style={styles.bookImage} />
                </View>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <View style={styles.info}>
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
                    <View style={styles.ratingText}>
                        <Text>4.0</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
        
    }

    render(){
        const {data} = this.state;
        return(
            <Container style={styles.content}>
              <View>
                <Text style={styles.popular}>Popular Books</Text>
              </View>
              <View style={styles.scrollList}>
                  <View style={styles.wrap}>
                      <FlatList
                        data={data}
                        keyExtractor={ item => item.id_book}
                        numColumns={2}
                        horizontal={false}
                        showsVerticalScrollIndicator={true}
                        ListFooterComponent={() => {
                            if (this.props.books.isLoading){ 
                                return (
                                    <Spinner color="blue" />
                                )
                            }else{
                                return null
                            }
                        }}
                        onEndReachedThreshold={0.1}
                        onEndReached={() => {
                            // console.warn("Masuk")
                            if(this.state.page <= this.props.books.totalPage){
                                console.warn(this.state.page)
                                if(!(this.props.books.isLoading || this.props.books.isRejected)){
                                    this.setState({
                                        page: this.state.page + 1
                                    }, () => {
                                        this.getBooksData(this.state.page);
                                    });
                                }
                            }
                        }}
                        renderItem={this.renderCard}
                      />
                  </View>
              </View>
                
            </Container>
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
    info:{
        width: '100%', flexDirection:'row'
    },
    popular:{
        marginLeft: 12,
        color: '#303031',
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratingText:{
        justifyContent: 'center', paddingLeft: 5
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