import React, {Component} from 'react'
import {StyleSheet,Image,View,ScrollView,Text,TouchableOpacity,FlatList} from 'react-native'
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
    constructor(props){
        super(props)
        this.state = {
            product:[
                {id:0, productImg:'https://cdn.elevenia.co.id/ex_t/R/200x200/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg', productName:'ERIKA TOP - Atasan Wanita Blouse Wanita', price:'79.000'},
                {id:1, productImg:'https://cdn.elevenia.co.id/ex_t/R/200x200/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg', productName:'ERIKA TOP - Atasan Wanita Blouse Wanita', price:'79.000'},
                {id:2, productImg:'https://cdn.elevenia.co.id/ex_t/R/200x200/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg', productName:'ERIKA TOP - Atasan Wanita Blouse Wanita', price:'79.000'},
                {id:3, productImg:'https://cdn.elevenia.co.id/ex_t/R/200x200/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg', productName:'ERIKA TOP - Atasan Wanita Blouse Wanita', price:'79.000'},
                {id:4, productImg:'https://cdn.elevenia.co.id/ex_t/R/200x200/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg', productName:'ERIKA TOP - Atasan Wanita Blouse Wanita', price:'79.000'},
            ]
        }
    }
    render(){
        const {product} = this.state
        return(
            <ScrollView style={{flex:1, width:'100%', padding:10}}>
                <FlatList
                        data={product}
                        renderItem={({item}) => (
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailProduct')} key={item.id} activeOpacity={0.9} style={styles.bottomItem} >
                            <View style={{flex: 1, padding: 10, backgroundColor: 'white', borderColor: '#eaeaea', borderWidth: 0.5, flexDirection:'row'}}>
                                <View style={{flex:1, padding: 5}}>
                                    <Image source={{uri: item.productImg}} style={{flex: 1, width: '100%', height: '100%', resizeMode: 'contain'}}/>
                                </View>
                                <View style={{justifyContent: 'center', flex:2, marginBottom: 5}}>
                                    <Text style={{fontSize: 16}} numberOfLines={2}>{item.productName}</Text>
                                    <Text style={{fontSize: 14, color: 'red', fontWeight: 'bold'}}>Rp {item.price}</Text><View style={{flexDirection:'row'}}>
                                    <Icon name='star' style={{color: 'white'}}/>
                                    <Icon name='star' style={{color: 'green'}}/>
                                    <Icon name='star' style={{color: 'red'}}/>
                                    <Icon name='star' style={{color: 'yellow'}}/>
                                    <Icon name='star' style={{color: 'yellow'}}/>
                                    </View>
                                    
                                </View>
                            </View>
                        </TouchableOpacity>
                        )}
                    />
            </ScrollView>
        )
    }
}
class MyView extends Component{
    render(){
        return(
            <ScrollView style={{flex:1, width:'100%', padding:10}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Fitur sedang dikembangkan</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
class MyStore extends Component{
    render(){
        return(
            <ScrollView style={{flex:1, width:'100%', padding:10}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'white', marginBottom:10, borderRadius:10, padding:10, width:'100%'}}>
                    <Text style={{color:'orange', fontWeight:'bold', fontSize:17}}>Fitur sedang dikembangkan</Text>
                </TouchableOpacity>
                </View>
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
const styles = StyleSheet.create({
    bottomItem: {
      width: '100%',
      height: 100,
    },
  })