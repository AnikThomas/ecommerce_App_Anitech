import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import CarouselComponent from './CarouselComponent';

const {width, height} = Dimensions.get('window')
let flatList
   

function infiniteScroll(datacarouselList){
    const numberOfData = datacarouselList.length
    let scrollValue = 0, scrolled=0

    setInterval(function() {
        scrolled ++
        if(scrolled < numberOfData)
        scrollValue = scrollValue + width

        else{
            scrollValue = 0
            scrolled = 0
        }

        this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
        
    }, 3000)
}

const Carousel = ({datacarousel})=>{
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [datacarouselList, setdatacarouselList] = useState(datacarousel)

    useEffect(()=> {
        setdatacarouselList(datacarousel)
        infiniteScroll(datacarouselList)
    })

    if(datacarousel && datacarousel.length){
        return(
            <View>
                <FlatList
                    data ={datacarousel}
                    ref = {(flatList)=>{this.flatList = flatList}}
                    keyExtractor={(item,index)=> 'key' + index}
                    horizontal
                    pagingEnabledscrollEnabled
                    snapToAlignment = 'center'
                    scrollEventThrottle= {16}
                    decelerationRate = {"fast"}
                    showHorizontalScrollIndicator= {false}
                    renderItem= {({item}) => {
                        return <CarouselComponent item = {item}/>
                    }}
                    onScroll = {Animated.event(
                        [{nativeEvent: {contentOffset: {x: this._scrollX}}}]
                        
                    )}
                />

                <View style={styles.dotView}>
                    {datacarousel.map((_,i) =>{
                        let opacity = position.interpolate({
                            inputRange: [i -1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return(
                            <Animated.View
                                key = {i}
                                style = {{opacity, height: 10, width:10,background: '#595959', margin: 8, borderRadius: 5}}
                            />  
                        )
                    })}
                </View>
            </View>
        )
    }
   console.log("where is the img") 
   return null
}

const styles = StyleSheet.create({
    dotView:{flexDirection: 'row', justifyContent: 'center'}
})

export default Carousel;
