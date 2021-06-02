import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import Carousel from './Carousel';
import { DATA } from '../shared/datacarousel';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state =>{
    return{
        brands: state.brands
    };
};
function RenderItem({item}){
    if(item){
        return(
                <Card title= "ANITECH FEATURED BRANDS" style={{color:'red'}}
                    image={{uri: baseUrl + item.image}}>
                    <Text style={{margin: 10}}>
                        {item.description}
                    </Text> 
                </Card>
        )
    }
    return <View/>
}
class Home extends Component{
    static navigationOptions = {
        title: 'Home'
    }
    render(){
        return(
            <ScrollView>
                <Carousel datacarousel = {DATA}/>
                <RenderItem
                    item={this.props.brands.brands.filter(brand=>brand.featured)[0]}/>
            </ScrollView>
        )
    }   
}

export default connect(mapStateToProps)(Home);