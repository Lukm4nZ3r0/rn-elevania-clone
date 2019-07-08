import * as React from 'react'
import {View, Text, ScrollView, Dimensions, Image, StyleSheet} from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width

class BackgroundCarousel extends React.Component{
    scrollRef = React.createRef()
    constructor(props){
        super(props)
        this.state = {
            selectedIndex:0
        }
    }

    // componentDidMount = () =>{
    //     setInterval(()=>{
    //         this.setState(
    //             prev=>({
    //                 selectedIndex:
    //                     prev.selectedIndex === this.props.images.length - 1 
    //                         ? 0 
    //                         : prev.selectedIndex + 1
    //                     }),
    //                     ()=>{
    //                         this.scrollRef.current.scrollTo({
    //                             animated: true,
    //                             y: 0,
    //                             x: DEVICE_WIDTH + this.state.selectedIndex
    //                         })
    //                     }
    //         )
    //     },3000)
    // }

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
                            source={{uri: image}}
                            style={styles.backgroundImage}
                        />
                    ))}
                </ScrollView>
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
        bottom:15,
        height:10,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    whiteCircle:{
        width:6,
        height:6,
        borderRadius:3,
        margin:5,
        backgroundColor:'#fff'
    }
})

const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ];

class Index extends React.Component{
    render(){
        return(
            <View>
                <BackgroundCarousel images={images}/>
            </View>
        )
    }
}

export default Index