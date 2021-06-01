import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { INVENTORIES } from '../shared/inventory';
import { REVIEWS } from '../shared/reviews'

function RenderInventory({inventory}){
    if(inventory){
        return(
            <Card 
                featuredTitle={inventory.name}
                image={inventory.image}>
                <Text style={{margin:10}}>
                    {inventory.price}
                </Text>
                <Text style={{margin:5}}>
                    {inventory.partnumber} 
                </Text>
            </Card>
        );
    }
    return <View/>
}

function RenderReviews({reviews}){
    const RenderReviewItem = ({item})=> {
        return(
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`--${item.customer},${item.date}`}</Text>
            </View>
        );
    };
    return(
        <Card title='Reviews'>
            <FlatList
                data={reviews}
                renderItem={RenderReviewItem}
                keyExtractor={item => item.id.toString()}/>
        </Card>
    );
}

class InventoryInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            inventories: INVENTORIES,
            reviews: REVIEWS
        };
    }
    static navigationOptions = {
        title: 'Product Information'
    }

    render(){
        const inventoryId = this.props.navigation.getParam('inventoryId');
        const inventory = this.state.inventories.filter(inventory => inventory.id === inventoryId)[0];
        const reviews = this.state.reviews.filter(review => review.productId === inventory.id)

        return (
            <ScrollView>
                <RenderInventory inventory={inventory}/>
                <RenderReviews reviews={reviews}/>
            </ScrollView>
        );
    
    }
}


export default InventoryInfo;