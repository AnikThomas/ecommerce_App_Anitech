import React, { Component } from 'react';
import Home from './HomeComponent';
import Product from './ProductComponent';
import InventoryInfo from './InventoryInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const ProductNavigator = createStackNavigator(
    {
        Product: { screen: Product },
        InventoryInfo: { screen: InventoryInfo }
    },
    {
        initialRouteName: 'Product',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#9b111e'
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                color: '#FFFFFF'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home}
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#9b111e'
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                color: '#FFFFFF'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator},
        Product: { screen: ProductNavigator}
    },
    {
        drawerBackgroundColor: '#9b111e'
    }  
);

const AppNavigator = createAppContainer(MainNavigator);

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
