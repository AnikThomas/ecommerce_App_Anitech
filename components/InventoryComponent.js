import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Inventory(props){

    const renderInventoryItem = ({item})=>{
        return(
            <ListItem
                title={item.name}
                subtitle={item.price}
                onPress={()=>props.onPress(item.id)}
                leftAvatar={{source: item.image}}
            />
        );
    };
    return(
        <FlatList
            data={props.products}
            renderItem={renderInventoryItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default Inventory;
