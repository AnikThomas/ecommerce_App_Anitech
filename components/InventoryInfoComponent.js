import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postCart } from '../redux/ActionCreators';


const mapStateToProps = state =>{
    return{
        inventories: state.inventories,
        reviews: state.reviews,
        carts: state.carts
    };
};

const mapDispatchToProps ={
    postCart: inventoryId => postCart(inventoryId)
};

function RenderInventory(props){
    const { inventory } = props;
    
    if(inventory){
        return(

            <Card style={styles.container}
                featuredTitle={inventory.name}
                image={{uri: baseUrl + inventory.image}}>
                <View style={styles.cardText}>
                    <Text style={styles.cardText}>
                        {inventory.price}
                    </Text>
                    <Text style={styles.cardText}>
                        {inventory.partnumber} 
                    </Text>
                </View>
                <Icon
                    name={props.cart ? 'cart-plus' : 'cart-plus'}
                    type='font-awesome'
                    color='#9b111e'
                    raised
                    reverse
                    onPress={()=> props.cart ? 
                    console.log('Already put in to the cart') : props.markCart()}
                />
            </Card>
        );
    }
    return <View/>
}

function RenderReviews({reviews}){
    const RenderReviewItem = ({item})=> {
        return(
            <View style={{margin: 10}}>
                <Text style={{fontSize: 16,fontWeight:'650'}}>{item.comment}</Text>
                <Text style={{fontSize: 14, color:'orange'}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12,color:'grey',fontWeight:'700'}}>{`--${item.customer}, ${item.date}`}</Text>
            </View>
        );
    };
    return(
        <View style={styles.container}>
            <View style={styles.reviews}>
                <Card title='Reviews'>
                    <FlatList
                        data={reviews}
                        renderItem={RenderReviewItem}
                        keyExtractor={item => item.id.toString()}/>
                </Card>
            </View>
        </View>
    );
}

class InventoryInfo extends Component{
    
    markCart(inventoryId){
        this.props.postCart(inventoryId);
    }
    static navigationOptions = {
        title: 'Product Description'
    }

    render(){
        const inventoryId = this.props.navigation.getParam('inventoryId');
        const inventory = this.props.inventories.inventories.filter(inventory => inventory.id === inventoryId)[0];
        const reviews = this.props.reviews.reviews.filter(review => review.productId === inventory.id)

        return (
            <ScrollView>
                <RenderInventory inventory={inventory}
                    cart={this.props.carts.includes(inventoryId)}
                    markCart={()=>this.markCart(inventoryId)}
                />
                <RenderReviews reviews={reviews}/>
            </ScrollView>
        );
    
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:5    
    },
    cardText:{
        alignItems: 'center',
        justifyContent: 'center',
        color:'#fff',
        padding:5,
        marginBottom:0,
        backgroundColor:'#9b111e',
        fontWeight:'700',
        fontSize:15
          
    },
    reviews:{
        backgroundColor:'#9b111e',  
        color:'#fff'    
    }
    
});
export default connect(mapStateToProps, mapDispatchToProps)(InventoryInfo);