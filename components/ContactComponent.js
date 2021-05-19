import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component{
    staticNavigationOptions ={
        title: 'Contact Us'
    }
    render(){
        return(
            <ScrollView>
                <Card title="Our Contact" wrapperStyle={{margin: 20}}>
                <Text>Address:</Text>
                    <Text>565 S Revere Dr. Suite #300</Text>
                    <Text style={{marginBottom:10}}>Salt Lake City, UT 84119</Text>
                    <Text>Phone: 1-435-200-1234</Text>
                    <Text>Email: info@anitech.llc</Text>
                </Card>
            </ScrollView>
        );
    }
}
export default Contact;