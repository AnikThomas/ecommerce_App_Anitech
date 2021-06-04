import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet,View } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component{
    staticNavigationOptions ={
        title: 'Contact Us'
    }
    render(){
        return(
            <ScrollView style={{marginTop:25}}>
                <Card title="Our Contact" wrapperStyle={{margin: 10}}>
                    <View style={styles.text}>
                        <Text style={{fontSize:20,fontWeight:'700',color:'#fff'}}>Address:</Text>
                            <Text style={{color:'#fff',fontSize:18}}>565 S Revere Dr. Suite #300</Text>
                            <Text style={{marginBottom:10,color:'#fff',fontSize:18}}>Salt Lake City, UT 84119</Text>
                            <Text style={{color:'#fff',fontSize:18}}>Phone: 1-435-200-1234</Text>
                            <Text style={{color:'#fff',fontSize:18}}>Email: info@anitech.llc</Text>
                    </View>
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'justify', 
        padding:10,
        backgroundColor:'#9b111e',
        width:300,
        height:200,
        margin:8,
        marginTop:0
    }
})
export default Contact;