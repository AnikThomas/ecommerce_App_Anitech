import React, { Component } from 'react';
import Inventory from './InventoryComponent';
import ProductInfo from './ProductInfoComponent';
import { View } from 'react-native';
import { PRODUCTS } from '../shared/products';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: PRODUCTS,
            selectedProduct: null
        };
    }
    onProductSelect(productId){
        this.setState({selectedProduct: productId});
    }
    render(){
        return (
            <View style={{flex: 1}}>
                <Inventory 
                    products = {this.state.products} 
                    onPress = {productId => this.onProductSelect(productId)}
                />
                <ProductInfo
                    product = {this.state.products.filter(product => product.id === this.state.selectedProduct)[0]}
                />
            </View>
        );
    }
}

export default Main;
