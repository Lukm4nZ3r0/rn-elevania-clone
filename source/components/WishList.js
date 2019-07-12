import React, {Component} from 'react'
import {View,ScrollView,Text,TouchableOpacity} from 'react-native'
import { Icon, ListItem} from 'native-base';
import {connect} from 'react-redux';
class WishLists extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentButton:[
                {
                    key:0,
                    label:'Wishlist'
                },
                {
                    key:1,
                    label:'My View'
                },
                {
                    key:2,
                    label:'Favorite Store'
                }
            ],
            currentScreen:0,
        }
    }
    
    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.getParam('title')|| 'Wishlist',
        headerTitleStyle: { 
            width: '100%',
            textAlign: 'left',
            color: 'white',
            fontWeight:'bold'
        },
        headerStyle: {
            backgroundColor : '#ff8040'
        },
        headerLeft:(
            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft: 20}}>
                <Icon name='arrow-back' style={{textAlign: 'left', fontSize:30, fontWeight:'bold', color: 'white'}}/>
            </TouchableOpacity>
        ),
        headerRight: (
            <ListItem>
                <TouchableOpacity >
                    <Icon name='ios-search' style={{fontSize:30, textAlign: 'right', marginRight: 20, fontWeight:'bold', color: 'white'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Icon name='ios-cart' style={{fontSize:30, textAlign: 'right', color: 'white', fontWeight:'bold'}}/>
                </TouchableOpacity>
            </ListItem>
        ),
    })
    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <View style={{flex:1, flexDirection:'row', elevation:5, backgroundColor:'white'}}>
                    {this.state.currentButton.map((button,i)=>
                    <TouchableOpacity onPress={()=>{this.props.navigation.setParams({title: button.label});this.setState({currentScreen:button.key})}} key={button.key} style={{flex:1, alignItems:'center', justifyContent:'center',}}>
                        <View style={{flex:9, alignItems:'center', justifyContent:'center'}}><Text style={{color: i == this.state.currentScreen ?'orange' : 'black',fontSize:14}}>{button.label}</Text></View>
                        <View style={{flex:1, backgroundColor: i == this.state.currentScreen ? 'orange' : 'white', width:'100%'}} />
                    </TouchableOpacity>
                    )}
                </View>
                <View style={{flex:10, width:'100%', backgroundColor:'#e8eaed'}}>
                    {this.state.currentScreen == 0 ? <Wishlist/> : (this.state.currentScreen == 1 ? <MyView/> : <MyStore/> )}
                </View>
            </View>
        )
    }
}
class Wishlist extends Component{
    render(){
        return(
            <ScrollView style={{flex:1, width:'100%', padding:10}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <View style={{flex:1, position:'absolute', right:10, top:10}}>
                        <Text style={{color:'orange', fontSize:11}}>2 Juni 2019</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Order ID : 3AJB240</Text>
                        <Text>Anda memesan 'Kuaci' di Toko Cahaya Abadi</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <View style={{flex:1, position:'absolute', right:10, top:10}}>
                        <Text style={{color:'orange', fontSize:11}}>2 Juni 2019</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Order ID : 3AJB240</Text>
                        <Text>Anda memesan 'Kuaci' di Toko Cahaya Abadi</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
class MyView extends Component{
    render(){
        return(
            <ScrollView style={{flex:1, width:'100%', padding:10}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <View style={{flex:1, position:'absolute', right:10, top:10}}>
                        <Text style={{color:'orange', fontSize:11}}>2 Juni 2019</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Order ID : 3AJB240</Text>
                        <Text>Pesanan 'Kuaci' anda sudah sampai.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <View style={{flex:1, position:'absolute', right:10, top:10}}>
                        <Text style={{color:'orange', fontSize:11}}>2 Juni 2019</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Order ID : 3AJB240</Text>
                        <Text>Pesanan 'Kuaci' anda sudah sampai.</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
class MyStore extends Component{
    render(){
        return(
            <ScrollView style={{flex:1, width:'100%', padding:10}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <View style={{flex:1, position:'absolute', right:10, top:10}}>
                        <Text style={{color:'orange', fontSize:11}}>2 Juni 2019</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Order ID : 3AJB240</Text>
                        <Text>Pesanan 'Kuaci' anda sudah sampai.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <View style={{flex:1, position:'absolute', right:10, top:10}}>
                        <Text style={{color:'orange', fontSize:11}}>2 Juni 2019</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Order ID : 3AJB240</Text>
                        <Text>Pesanan 'Kuaci' anda sudah sampai.</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        user : state.user,
    }
  }
  
export default connect(mapStateToProps)(WishLists)