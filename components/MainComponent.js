import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Product from './ProductComponent';
import InventoryInfo from './InventoryInfoComponent';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

const ProductNavigator = createStackNavigator(
    {
        Product: { 
            screen: Product,
            navigationOptions: ({navigation})=>({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={()=>navigation.toggleDrawer()}/>
            })
        },
        InventoryInfo: { screen: InventoryInfo }
    },
    {
        initialRouteName: 'Product',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#9b111e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home}
    },
    {
        defaultNavigationOptions: ({navigation})=> ({
            headerStyle: {
                backgroundColor: '#9b111e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
            name='home'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={()=>navigation.toggleDrawer()}/>
        })
    }
);
const AboutNavigator = createStackNavigator(
    {
        About: { screen: About}
    },
    {
        defaultNavigationOptions: ({navigation})=> ({
            headerStyle: {
                backgroundColor: '#9b111e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
            name='info-circle'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={()=>navigation.toggleDrawer()}/>
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({navigation})=> ({
            headerStyle: {
                backgroundColor: '#9b111e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
            name='address-book'
            type='font-awesome'
            iconStyle={styles.stackIcon}
            onPress={()=>navigation.toggleDrawer()}/>
        })
    }
);

const CustomDrawer = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{top:'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image
                        source={require('./images/logo_red.png')}
                        style={styles.drawerImage}
                    />
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);
const MainNavigator = createDrawerNavigator(
    {
        Home: 
        { screen: HomeNavigator,
            navigationOptions:{
                drawerIcon:({tintColor})=>(
                    <Icon 
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor} 
                        
                        />
                )
            }
        },
        Product: { screen: ProductNavigator,
            navigationOptions:{
                drawerLabel: 'Products',
                drawerIcon:({tintColor})=>(
                    <Icon 
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor} 
                        
                        />
                )
            }
        },
        About: { screen: AboutNavigator,
            navigationOptions:{
                drawerIcon:({tintColor})=>(
                    <Icon 
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor} 
                        />
                )
            }
        },
        Contact: { screen: ContactNavigator,
            navigationOptions:{
                drawerLabel: 'Contact Us',
                drawerIcon:({tintColor})=>(
                    <Icon 
                        name='address-book'
                        type='font-awesome'
                        size={24}
                        color={tintColor} 
                        />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#fff',
        contentComponent: CustomDrawer
    }  
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component{
    render(){
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 40 : Constants.statusBarHeight
                }}>

                <AppNavigator />
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader:{
        backgroundColor:'#2a2a2a',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText:{
        color:'#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    drawerImage:{
        margin: 15,
        height: 50,
        width:200
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});
export default Main;
