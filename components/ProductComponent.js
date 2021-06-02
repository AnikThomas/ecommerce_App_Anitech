import React, { Component } from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state =>{
    return{
        inventories: state.inventories
    };
};

const numColumns = 2

class Products extends Component{
    static navigationOptions = {
        title: 'Products'
    }
    render(){
        const { navigate } = this.props.navigation;
        const renderProductItem = ({item})=>{
            return(
                    <ListItem style={styles.itemStyle}
                        title={item.name}
                        caption={item.price}
                        onPress={()=>navigate('InventoryInfo',{inventoryId: item.id})}
                        leftAvatar={{source: { uri: baseUrl + item.image }}}    
                    />  
            );
        };
        return(
                <FlatList style={styles.container}
                    data={this.props.inventories.inventories}
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
export default connect(mapStateToProps)(Products);
