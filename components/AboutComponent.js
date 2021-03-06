import React, { Component } from 'react';
import { Text, ScrollView, FlatList, StyleSheet, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state =>{
    return{
        brands: state.brands
    };
};

function AboutUs(){
    return(
        <View style={styles.container} >
            <Card title="About Us">
                <Text style={styles.textStyle}>
                Anitech Industrial is a global engineering company specialising in the procurement of spare parts and equipment used in the Oil, Gas, Manufacturing, Power, Petrochemical & Mining Industries Industries. Our comprehensive range of services provides innovative, effective, strategic and cost efficient solutions to all our clients,
                technical and management needs. Whether our clients are involved in Oil, Gas, Manufacturing, Power, Petrochemical & Mining Industries, we help them to source their requested items at the best prices and shortest delivery times.
                Whether by sea, air or land, Grayford Industrial has the expertise and experience to move all types of cargo with the same individual care and attention. We take pride in offering all our clients a first-rate service.
                Industrial represent and distribute equipment for several manufacturers, most of which are registered on various approved vendor lists of some of the major oil and gas companies around the globe.
                We provide Quality Products, Serve globally with the Certificate of Origin Provided.
                </Text>
            </Card>
        </View>
    )
}
class About extends Component {
    
    static navigationOptions ={
        title: 'About Us'
    }
    render(){
        const renderBrand = ({item})=>{
            return(
                <ListItem
                    title={item.title}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
                
            )
        }
        return(
            <ScrollView>
                <AboutUs/>
                <View style={{backgroundColor:'#9b111e'}}>
                    <Card title="Our Brands">
                        <FlatList 
                            data={this.props.brands.brands}
                            renderItem={renderBrand} 
                            keyExtractor={item =>item.id.toString()}
                        >
                        </FlatList> 
                    </Card>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:5,
        backgroundColor:'#eee'
    },
    textStyle:{
        textAlign:'justify', 
        margin:10,
        lineHeight:23,
        fontSize:18,
        backgroundColor: 'transparent',
        
        
    }
})

export default connect (mapStateToProps)(About);