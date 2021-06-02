import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import Carousel from './Carousel';
import { DATA } from '../shared/datacarousel';
import { Card } from 'react-native-elements';
import { BRANDS } from '../shared/brands';

function RenderItem({item}){
    if(item){
        return(
                <Card title= "ANITECH FEATURED BRANDS" style={{color:'red'}}
                    image={item.image}>
                    <Text style={{margin: 10}}>
                        {item.description}
                    </Text> 
                </Card>
        )
    }
    return <View/>
}
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            brands: BRANDS
        }
    }
    static navigationOptions = {
        title: 'Home'
    }
    render(){
        return(
            <ScrollView>
                <Carousel datacarousel = {DATA}/>
                <RenderItem
                    item={this.state.brands.filter(brand=>brand.featured)[0]}/>
            </ScrollView>
        )
    }   
}

export default Home;