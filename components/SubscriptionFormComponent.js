import React, { Component } from 'react';
import { View, ScrollView,TouchableOpacity,
     TextInput, StyleSheet, Text } from 'react-native';

class Subscription extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            email: ''
        };
    }
    static navigationOptions =  {
        title: 'Newsletter subscription'
    }
    handleSubscription(text){
        console.log(JSON.stringify(this.state));
        this.setState({
            name: '',
            email: ''
        });
    }
    submit(){
        console.warn(this.state)
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <TextInput style={styles.textInput}
                        placeholder=" Enter your name"
                        onChangeText={(text)=>{this.setState({name:text})}}
                        value={this.state.name}
                        />
                    <TextInput style={styles.textInput}
                        placeholder=" Enter your email"
                        onChangeText={(text)=>{this.setState({email:text})}}
                        value={this.state.email}
                        />
                    <TouchableOpacity style={styles.button}
                        onPress={()=>{this.handleSubscription()}}>
                        <Text style={styles.text}>SUBSCRIBE</Text>
                    </TouchableOpacity>
                        
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        minWidth: "70%",
        backgroundColor:"#9b111e",
        borderTopColor:"#000",
        borderTopWidth: 1,
        flex: 1,
        margin:10,
        padding:5,
        marginTop:60,
        justifyContent:"flex-end",  
    },
    textInput: {
        flex: 1,
        backgroundColor: "#ffffff",
        height: 40,
        margin: 10,
        borderRadius: 5,
        padding: 3
      },
      text:{
        color:'#fff',
        fontWeight: '700',
        fontSize:15
      },
      button: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#9b111e',
        padding: 10,
        color:'#fff'
      },
})
export default Subscription;