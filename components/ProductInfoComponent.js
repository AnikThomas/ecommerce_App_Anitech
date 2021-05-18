import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderProduct({product}){
    if(product){
        return(
            <Card 
                featuredTitle={product.name}
                image={product.image}>
                <Text style={{margin:10}}>
                    {product.price}
                </Text>
                <Text style={{margin:5}}>
                    {product.partnumber} 
                </Text>
            </Card>
        );
    }
    return <View/>
}

function ProductInfo(props){
    return (
         <RenderProduct product={props.product}/>
    );
}




export default ProductInfo;