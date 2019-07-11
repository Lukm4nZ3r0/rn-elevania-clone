import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Dimensions, TextInput, SafeAreaView, Image, ScrollView} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Carousel from 'react-native-snap-carousel'

const {height, width} = Dimensions.get('window')

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            activeIndex:0,
            carouselItems:[
                {
                    imageLink:'https://cdn.elevenia.co.id/browsing/banner/2019/07/05/7710/201907051809053819_9793652_1.jpg'
                },
                {
                    imageLink:'https://cdn.elevenia.co.id/browsing/banner/2019/07/08/8263/2019070810520808500_9791761_1.jpg'
                },
                {
                    imageLink:'https://cdn.elevenia.co.id/browsing/banner/2019/07/10/8263/2019071009451038170_9111919_1.jpg'
                },
                {
                    imageLink:'https://cdn.elevenia.co.id/browsing/banner/2019/07/08/8263/2019070809500840930_9111919_1.jpg'
                },
                {
                    imageLink:'https://cdn.elevenia.co.id/browsing/banner/2019/07/08/8263/2019070811000838746_9793495_1.jpg'
                }
            ],
            categoryHeader:[
                {
                    key:0,
                    category:'Home'
                },
                {
                    key:1,
                    category:'Top 100'
                },
                {
                    key:2,
                    category:'Daily Deals'
                },
                {
                    key:3,
                    category:'E-Mart'
                }
            ],
            anotherFeature:[
                {
                    key:0,
                    feature:'Pulsa'
                },
                {
                    key:1,
                    feature:'Paket Data'
                },
                {
                    key:2,
                    feature:'PLN'
                },
                {
                    key:3,
                    feature:'Voucher'
                }
            ],
            selectedFeature:0
        }
    }
    static navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                backgroundColor : '#ff8040',
                elevation:0
            },
            headerLeft: (
                <TouchableOpacity style={{marginLeft:15}} onPress={()=>navigation.openDrawer()}>
                    <FontAwesome style={{fontSize:25, color:'white'}} name="bars" />
                </TouchableOpacity>
            ),
            headerTitle: (
                <View style={{ padding:10, flex:1, flexDirection:'row' }}>
                    <View style={{flex:6, flexDirection:'row', backgroundColor:'#e0792b', opacity:0.5, alignItems:'center', justifyContent:'center', borderRadius:5}}>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><FontAwesome name="search" style={{color:'white',fontSize:20}} /></View>
                        <View style={{flex:5, justifyContent:'center'}}><TextInput placeholder="Cari di elevania" placeholderTextColor="white"/></View>
                    </View>

                    {/* stock yg masukin ke cart */}
                    <TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <FontAwesome style={{fontSize:25, color:'white'}} name="cart-arrow-down"/>
                        <View style={{position:'absolute', width:20, height:20, borderRadius:15, backgroundColor:'white', top:0, right:0, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:'orange', fontSize:15}}>4</Text>
                        </View>
                    </TouchableOpacity>

                    {/* notifikasi */}
                    <TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center'}} onPress={()=>navigation.navigate('Notifications')}>
                        <FontAwesome style={{fontSize:25, color:'white'}} name="bell"/>
                        <View style={{position:'absolute', width:20, height:20, borderRadius:15, backgroundColor:'white', top:0, right:0, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:'orange', fontSize:15}}>6</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ),
        }
    }
    _renderItem({item,index}){
        return (                
            <Image style={{flex:1, resizeMode:'contain',}} source={{uri:item.imageLink}} />
        )
    }
    componentDidMount(){
        setInterval(()=>{
            this.nextCarouselImage()
        },2000)
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
                <View style={{flexDirection:'row', backgroundColor:'#ff8040', padding:15}}>
                    {this.state.categoryHeader.map((item,i)=>
                        <TouchableOpacity key={item.key} style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:'white'}}>{item.category}</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <ScrollView style={{flex:15, backgroundColor:'#e8eaed', height:'100%'}}>
                    <View style={{height:175}}>
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
                        <View style={{position:'absolute', flexDirection:'row', backgroundColor:'grey', width:'35%', bottom:0, right:0, padding:5}}>
                            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><FontAwesome style={{color:'white', fontSize:15}} name="list" /></View>
                            <View style={{flex:3, alignItems:'center', justifyContent:'center'}}><Text style={{color:'white', fontSize:11}}>Semua Promo</Text></View>
                        </View>
                        <View style={{position:'absolute', flexDirection:'row', bottom:20, left:10}}>
                            {this.state.carouselItems.map((item,i)=>
                                <View key={i} style={{width:8, height:8, borderRadius:25, backgroundColor: this.state.activeIndex == i ? '#ff8040' : '#e8eaed', margin:3}} />
                            )}
                        </View>
                    </View>
                    <View style={{flexDirection:'row', backgroundColor:'white', padding:15}}>
                        {this.state.anotherFeature.map((feature,i)=>
                        <TouchableOpacity onPress={()=>this.setState({selectedFeature:feature.key})} key={feature.key} style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                            <View style={{height:25}}><Text style={{color: this.state.selectedFeature == i ? 'orange' : 'grey', fontSize:10}}>{feature.feature}</Text></View>
                            <View style={{marginTop:10, width:'100%', height:1, backgroundColor: this.state.selectedFeature == i ? 'orange' : 'white'}} />
                        </TouchableOpacity>
                        )}
                        <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                            <View style={{height:25}}><FontAwesome style={{color:'black', fontSize:25}} name="ellipsis-h"/></View>
                            <View style={{marginTop:10, width:'100%', height:1, backgroundColor:'white'}} />
                        </View>
                    </View>
                    <View style={{flexDirection:'row', flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center', marginLeft:10}}>
                            <TextInput style={{width:'100%'}} placeholder="Nomor Tujuan" underlineColorAndroid="#e8eaed"/>
                        </View>
                        <View style={{flex:1, padding:25}}>
                            <TouchableOpacity style={{padding:15, backgroundColor:'orange', borderRadius:5, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{color:'white'}}>Beli</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,marginTop:10, backgroundColor:'white', width:'100%', height:'100%'}}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <View style={{flex:1, left:10}}><Text style={{fontSize:20}}>Special Corners</Text></View>
                            <View style={{right:10}}><Text style={{color:'grey'}}>More</Text></View>
                        </View>
                        <ScrollView style={{padding:10, marginBottom:20}} horizontal={true}>
                            <View style={{flex:1, width:150, height:250, backgroundColor:'white', borderWidth:1, borderColor:'#e8eaed', alignItems:'center', justifyContent:'center', padding:10}}>
                                <Image style={{width:100, height:100}} source={{uri:'https://cdn.elevenia.co.id/ex_t/R/170x170/1/85/1/src/g/6/7/1/2/6/5/27671265_B_V1.jpg'}} />
                                <Text style={{color:'grey'}} numberOfLines={2}>Sepatu Supreme Masa Kini</Text>
                                <Text style={{fontSize:15, marginTop:15}}>Rp 99.000</Text>
                            </View>
                            <View style={{flex:1, width:150, height:250, backgroundColor:'white', borderWidth:1, borderColor:'#e8eaed', alignItems:'center', justifyContent:'center', padding:10}}>
                                <Image style={{width:100, height:100}} source={{uri:'https://cdn.elevenia.co.id/ex_t/R/170x170/1/85/1/src/g/6/7/1/2/6/5/27671265_B_V1.jpg'}} />
                                <Text style={{color:'grey'}} numberOfLines={2}>Sepatu Supreme Masa Kini</Text>
                                <Text style={{fontSize:15, marginTop:15}}>Rp 99.000</Text>
                            </View>
                            <View style={{flex:1, width:150, height:250, backgroundColor:'white', borderWidth:1, borderColor:'#e8eaed', alignItems:'center', justifyContent:'center', padding:10}}>
                                <Image style={{width:100, height:100}} source={{uri:'https://cdn.elevenia.co.id/ex_t/R/170x170/1/85/1/src/g/6/7/1/2/6/5/27671265_B_V1.jpg'}} />
                                <Text style={{color:'grey'}} numberOfLines={2}>Sepatu Supreme Masa Kini</Text>
                                <Text style={{fontSize:15, marginTop:15}}>Rp 99.000</Text>
                            </View>
                            <View style={{flex:1, width:150, height:250, backgroundColor:'white', borderWidth:1, borderColor:'#e8eaed', alignItems:'center', justifyContent:'center', padding:10}}>
                                <Image style={{width:100, height:100}} source={{uri:'https://cdn.elevenia.co.id/ex_t/R/170x170/1/85/1/src/g/6/7/1/2/6/5/27671265_B_V1.jpg'}} />
                                <Text style={{color:'grey'}} numberOfLines={2}>Sepatu Supreme Masa Kini</Text>
                                <Text style={{fontSize:15, marginTop:15}}>Rp 99.000</Text>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Home