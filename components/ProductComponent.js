import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { INVENTORIES } from '../shared/inventory';

class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            inventories: INVENTORIES
        }
    }
    static navigationOptions = {
        title: 'Products'
    };

    render(){
        const { navigate } = this.props.navigation;
        const renderProductItem = ({item})=>{
            return(
                <ListItem
                    title={item.name}
                    subtitle={item.price}
                    onPress={()=>navigate('InventoryInfo',{inventoryId: item.id})}
                    leftAvatar={{source: item.image}}
                />
            );
        };
        return(
            <FlatList
                data={this.state.inventories}
                renderItem={renderProductItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }   
}

export default Products;
