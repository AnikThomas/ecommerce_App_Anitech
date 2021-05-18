import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Carousel from './Carousel';
import { DATA } from '../shared/datacarousel';

class Home extends Component{
    static navigationOptions = {
        title: 'Home'
    }
    render(){
        return(
            <View>
                <Carousel datacarousel = {DATA}/>
            </View>
        )
    }   
}

export default Home;