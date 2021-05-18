import React, { Component } from 'react';
import Product from './ProductComponent';
import InventoryInfo from './InventoryInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const ProductNavigator = createStackNavigator(
    {
        Product: { screen: Product },
        InventoryInfo: { screen: InventoryInfo }
    },
    {
        initialRouteName: 'Product',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#B90E0A'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AppNavigator = createAppContainer(ProductNavigator);

class Main extends Component{
    render(){
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'i0s ? 0 : Expo.Constants.statusBarHeight'
                }}>

                <AppNavigator />

            </View>
        );
    }
}

export default Main;
