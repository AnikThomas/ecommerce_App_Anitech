import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { INVENTORIES } from '../shared/inventory';

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

class InventoryInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            inventories: INVENTORIES
        };
    }
    static navigationOptions = {
        title: 'Product Information'
    }

    render(){
        const inventoryId = this.props.navigation.getParam('inventoryId');
        const inventory = this.state.inventories.filter(inventory => inventory.id === inventoryId)[0];
        return <RenderInventory inventory={inventory}/>
    
    }
}


export default InventoryInfo;