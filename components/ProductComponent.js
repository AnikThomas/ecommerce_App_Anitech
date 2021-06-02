import React, { Component } from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import { ListItem } from 'react-native-elements';
import { INVENTORIES } from '../shared/inventory';

const numColumns = 2
// const WIDTH = Dimensions.get('window').width
class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            inventories: INVENTORIES
        }
    }
    static navigationOptions = {
        title: 'Products'
    }
    render(){
        const { navigate } = this.props.navigation;
        const renderProductItem = ({item})=>{
            return(
                    <ListItem style={styles.itemStyle}
                        title={item.name}
                        subtitle={item.price}
                        onPress={()=>navigate('InventoryInfo',{inventoryId: item.id})}
                        leftAvatar={{source: item.image}}    
                    />  
            );
        };
        return(
                <FlatList style={styles.container}
                    data={this.state.inventories}
                    renderItem={renderProductItem}
                    keyExtractor={item => item.toString()}
                    numColumns={numColumns}
                />  
        )
    }   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:5
    },
    itemStyle:{
        backgroundColor:'#9b111e',
        alignItems: 'center',
        justifyContent: 'center',
        height: 75,
        flex: 1,
        margin:4,
        padding:10,
        width:200
    },
});
export default Products;
