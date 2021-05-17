import React, { Component } from 'react';
import Inventory from './InventoryComponent.js';
import { PRODUCTS } from '../shared/products';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: PRODUCTS
        };
    }
    render(){
        return <Inventory products={this.state.products} />
    }
}

export default Main;
