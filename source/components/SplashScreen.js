import * as React from 'react'
import {View, Text, ScrollView, Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width

class BackgroundCarousel extends React.Component{
    scrollRef = React.createRef()
    constructor(props){
        super(props)
        this.state = {
            selectedIndex:0
        }
    }

    setSelectedIndex = event =>{
        // width of the viewSize
        const viewSize = event.nativeEvent.layoutMeasurement.width
        // get current position of the scrollview
        const contentOffset = event.nativeEvent.contentOffset.x

        const selectedIndex = Math.floor(contentOffset / viewSize)
        this.setState({selectedIndex})

    }

    render(){
        const {images} = this.props
        const {selectedIndex} = this.state
        return(
            <View style={{height:"100%", width:"100%"}}>
                <ScrollView 
                    horizontal 
                    pagingEnabled 
                    onMomentumScrollEnd={this.setSelectedIndex}
                >
                    {images.map(image =>(
                        <Image 
                            key={image}
                            source={{uri:image}}
                            style={styles.backgroundImage}
                        />
                    ))}
                </ScrollView>

                {this.state.selectedIndex == this.props.images.length-1 &&
                <TouchableOpacity 
                    onPress={()=>this.props.navigation.goBack()} 
                    style={{position:'absolute', padding:10, bottom:'10%', marginLeft:'30%', marginRight:'30%', backgroundColor:'green', alignItems:'center', justifyContent:'center'}}
                >
                    <Text style={{color:'white', fontWeight:'bold'}}>GETTING STARTED</Text>
                </TouchableOpacity>
                }

                <View style={styles.circleDiv}>
                    {images.map((image,i)=>(
                        <View
                            key={image}
                            style={[styles.whiteCircle, {opacity: i === selectedIndex ? 1 : 0.5}]}
                        />
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        height: '100%',
        width: DEVICE_WIDTH,
    },
    circleDiv:{
        position:'absolute',
        bottom:35,
        height:10,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    whiteCircle:{
        width:25,
        height:25,
        borderRadius:25,
        margin:5,
        backgroundColor:'orange'
    }
})

const images = [
    "https://drive.google.com/open?id=1zW1WdZjo28P0ZHaumZ10BTUH9spQ_l8y",
    "https://drive.google.com/open?id=1sDl1_1N1sGwTCI6IMhk1bsuphPD50lOf",
    "https://drive.google.com/open?id=1-Vy5BCPizXlqolxcFeIcoDntfYuTZNST",
    "https://drive.google.com/open?id=1laONWJUZpGTeKKrmSv5VjdWXWa86jcxT",
    ];

class SplashScreen extends React.Component{
    static navigationOptions = {
        header:null
    }
    render(){
        return(
            <View>
                <BackgroundCarousel images={images} navigation={this.props.navigation}/>
            </View>
        )
    }
}

export default SplashScreen