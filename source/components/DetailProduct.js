import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Dimensions, TextInput, SafeAreaView, Image, ScrollView} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-snap-carousel'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Thumbnail, Footer, FooterTab } from 'native-base';

const {height, width} = Dimensions.get('window')

class DetailProduct extends Component{
    constructor(props){
        super(props)
        this.state = {
            activeIndex:0,
            carouselItems:[
                {
                    imageLink:'http://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg'
                },
                {
                    imageLink:'http://cdn.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/6/8/2/0/5/5/28682055_A1.jpg'
                },
                {
                    imageLink:'http://image.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/6/8/2/0/5/5/28682055_A2.jpg'
                },
                {
                    imageLink:'http://image.elevenia.co.id/ex_t/R/348x348/1/85/1/src/g/6/8/2/0/5/5/28682055_A3.jpg'
                }
            ]
        }
    }
    static navigationOptions = ({navigation}) => {
        return {
            header: null
        }
    }
    _renderItem({item,index}){
        return (                
            <Image style={{flex:1, resizeMode:'contain',}} source={{uri:item.imageLink}} />
        )
    }
    prevCarouselImage = () =>{
        this.state.activeIndex>0?
        this.carousel._snapToItem(this.state.activeIndex-1) : this.carousel._snapToItem(this.state.carouselItems.length-1)
    }
    nextCarouselImage = () =>{
        this.state.activeIndex<this.state.carouselItems.length-1?
        this.carousel._snapToItem(this.state.activeIndex+1) : this.carousel._snapToItem(0)
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Header androidStatusBarColor="#ff8040" style={{backgroundColor : '#ff8040'}}>
                    <Left>
                        <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Pakaian Wanita</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Icon name='ios-search' />
                        </Button>
                        <Button transparent>
                        <Icon name='ios-cart' />
                        </Button>
                        <Button transparent>
                        <Icon name='more' />
                        </Button>
                    </Right>
                </Header>
                    
                <ScrollView style={{backgroundColor:'#e8eaed'}}>
                    <View style={{height:500, flex: 5}}>
                        <Carousel
                            ref={ref=>this.carousel = ref}
                            data={this.state.carouselItems}
                            sliderWidth={width}
                            itemWidth={width}
                            renderItem={this._renderItem}
                            onSnapToItem={
                                index=>this.setState({activeIndex:index})
                            }
                        />
                        <View style={{position:'absolute', flexDirection:'row', bottom:20, left:0, right:0, justifyContent: 'center'}}>
                            {this.state.carouselItems.map((item,i)=>
                                <View key={i} style={{width:8, height:8, borderRadius:25, backgroundColor: this.state.activeIndex == i ? 'orange' : 'grey', margin:3}} />
                            )}
                        </View>

                    </View>
                    <View style={{backgroundColor:'white', width:'100%', flex: 1, padding: 20, justifyContent: 'space-evenly'}}>
                        <View style={{flex: 2}}>
                            <Text style={{fontSize: 16}}>Erika TOP - Atasan Wanita Blouse Wanita</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <View style={{flex:1}}>
                                <Text style={{color: '#ff8040'}}>Rp 79.000</Text>
                            </View>
                            <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <FontAwesome style={{fontSize:20, color:'rowblack'}} name="share-alt"/>
                                <FontAwesome style={{marginLeft: 10, fontSize:20, color:'black'}} name="heart"/>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: 20, backgroundColor:'white', width:'100%', flex: 1, padding: 20, alignContent: 'space-around'}}>
                       <View style={{flex:1, flexDirection: 'row'}}>
                           <FontAwesome style={{fontSize:20, color:'rowblack', marginRight: 15}} name="map-marker"/> 
                           <Text>Dikirim dari : Tangerang Selatan</Text>
                        </View> 
                       <View style={{flex:1, flexDirection: 'row'}}>
                           <FontAwesome style={{fontSize:20, color:'rowblack', marginRight: 15}} name="user"/> 
                           <Text>Kurir Pribadi</Text>
                        </View> 
                    </View>

                    <View style={{marginTop: 20, flex:1, padding: 20, backgroundColor:'white'}}>
                        <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text>Seller</Text>
                            <Text>+ Favorit</Text>
                        </View>

                        <View style={{flex: 2, flexDirection: 'row', alignContent: 'center', paddingBottom: 10, paddingTop: 10}}>
                            <View>
                                <Thumbnail source={{uri: 'http://3.bp.blogspot.com/-PJlaUnScRP4/V0rlQs7AWgI/AAAAAAAAYus/A2nd02DUsgYhIiwEqexnRozZ0NFQsV83ACHM/s1600/cute-girl-face-image-important-wallpapers.jpg'}} />
                            </View>
                            <View style={{flex:1, justifyContent: 'center', marginLeft: 10}}>
                                <Text style={{fontWeight: 'bold'}}>EVERCLOTH_ID</Text>
                                <Text>Premium Seller</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#ff8040', fontSize: 16}}>LIHAT SELLER STORE</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{marginTop: 20, flex:1, padding: 20, backgroundColor:'white', marginBottom: 50}}>
                        <Text style={{fontSize: 16, color: '#ff8040', marginBottom: 10}}>Rincian</Text>
                        <View style={{flex:1, flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex:1}}>
                                <Text>Stok</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Tersedia</Text>
                            </View>
                        </View>

                        <View style={{flex:1, flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex:1}}>
                                <Text>Kondisi Produk</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Baru</Text>
                            </View>
                        </View>

                        <View style={{flex:1, flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex:1}}>
                                <Text>Nomor Produk</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Text>2232323</Text>
                            </View>
                        </View>

                        <View style={{flex:1, flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex:1}}>
                                <Text>Berat Produk</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Text>0,2 Kg</Text>
                            </View>
                        </View>

                        <View style={{flex:1, flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex:1}}>
                                <Text>Negara Asal</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Indonesia</Text>
                            </View>
                        </View>

                        <View style={{flex:1, flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex:1}}>
                                <Text>Status Garansi</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Text>-</Text>
                            </View>
                        </View>

                    </View>
                    
                </ScrollView>
                <Footer >
                    <FooterTab>
                    <Button full style={{backgroundColor: '#ff8040'}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Beli Sekarang</Text>
                    </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}

export default DetailProduct