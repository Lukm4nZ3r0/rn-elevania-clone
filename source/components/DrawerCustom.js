import React, {Component} from 'react'
import {SafeAreaView} from 'react-navigation'
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

class DrawerCustom extends Component{
    render(){
        return(
            <SafeAreaView
                style={{backgroundColor:'white', flex:1}}
                forceInset={{ top: 'always', horizontal: 'never' }}
            >
                <ScrollView style={{backgroundColor:'#EEEEEE'}}>
                <View style={{flex:1, alignItems: 'center',justifyContent: 'center',width:'100%',padding:25, backgroundColor:'#191D28', }}>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('Profile')}>
                        <View style={{flex:1}}>
                            <Image style={{width:50, height:50, borderRadius:40}} source={{uri:'https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png'}} />
                        </View>
                        <View style={{flex:3}}>
                            <Text style={{color:'white', fontSize:20}}>{this.props.user.user[0].name}</Text>
                            <Text style={{color:'white'}}>{this.props.user.user[0].email}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', width:'100%', backgroundColor:'#191D28'}}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home'); this.props.navigation.closeDrawer()}} style={{flex:1,padding:10, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#AAAAAA', height:80}}>
                        <FontAwesome style={{ fontSize:35, color:'white'}} name="home" />
                        <Text style={{fontSize:12, color:'white'}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,padding:15, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#AAAAAA', height:80}} onPress={()=>this.props.navigation.navigate('Profile')}>
                        <FontAwesome style={{ fontSize:35, color:'white'}} name="user" />
                        <Text style={{fontSize:12, color:'white'}}>My elevenia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,padding:15, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#AAAAAA', height:80}} onPress={()=>this.props.navigation.navigate('Notifications')}>
                        <FontAwesome style={{ fontSize:35, color:'white'}} name="bell" />
                        <View style={{position:'absolute', width:25, height:25, borderRadius:15, backgroundColor:'#FD7D1D', alignItems:'center', justifyContent:'center', top:10, right:20}}>
                            <Text style={{fontSize:13, color:'white'}}>6</Text>
                        </View>
                        <Text style={{fontSize:12, color:'white'}}>Notification</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:10, backgroundColor:'white'}}>
                    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}><FontAwesome style={{fontSize:20, color:'#777777'}} name="th"/></View>
                    <View style={{flex:4, justifyContent:'center'}}><Text style={{fontSize:16, color:'#777777'}}>Kategori</Text></View>
                    <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}><FontAwesome style={{fontSize:20, color:'#777777'}} name="sort-down"/></View>
                </TouchableOpacity>
                <View style={{marginTop:10}}/>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:10, backgroundColor:'white'}}>
                    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}><FontAwesome style={{fontSize:20, color:'#777777'}} name="gift"/></View>
                    <View style={{flex:4, justifyContent:'center'}}><Text style={{fontSize:16, color:'#777777'}}>Pesanan</Text></View>
                    <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}><Text style={{fontSize:10, color:'#777777'}}>0</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SellProduct')} style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:10, backgroundColor:'white'}}>
                    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}><FontAwesome style={{fontSize:20, color:'#777777'}} name="gift"/></View>
                    <View style={{flex:4, justifyContent:'center'}}><Text style={{fontSize:16, color:'#777777'}}>Jual</Text></View>
                    <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}><Text style={{fontSize:10, color:'#777777'}}>0</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:10, backgroundColor:'white'}}>
                    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}><FontAwesome style={{fontSize:20, color:'#777777'}} name="gift"/></View>
                    <View style={{flex:4, justifyContent:'center'}}><Text style={{fontSize:16, color:'#777777'}}>Lihat Mokado</Text></View>
                    <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}><Text style={{fontSize:10, color:'#777777'}}></Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:10, backgroundColor:'white'}}>
                    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}><FontAwesome style={{fontSize:20, color:'#777777'}} name="gift"/></View>
                    <View style={{flex:4, justifyContent:'center'}}><Text style={{fontSize:16, color:'#777777'}}>Konfirmasi Pembelian</Text></View>
                    <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}><Text style={{fontSize:10, color:'#777777'}}></Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:10, backgroundColor:'white'}}>
                    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}><FontAwesome style={{fontSize:20, color:'#777777'}} name="gift"/></View>
                    <View style={{flex:4, justifyContent:'center'}}><Text style={{fontSize:16, color:'#777777'}}>Toko Favorit</Text></View>
                    <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}><Text style={{fontSize:10, color:'#777777'}}></Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:10, backgroundColor:'white'}}
                    onPress={()=>this.props.navigation.navigate('Wishlist')}>
                    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}><FontAwesome style={{fontSize:20, color:'#777777'}} name="heart"/></View>
                    <View style={{flex:4, justifyContent:'center'}}><Text style={{fontSize:16, color:'#777777'}}>Wish List</Text></View>
                    <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}><Text style={{fontSize:10, color:'#777777'}}></Text></View>
                </TouchableOpacity>
                <View style={{marginTop:10}} />
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:10, backgroundColor:'white'}}>
                    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}><FontAwesome style={{fontSize:20, color:'#777777'}} name="heart"/></View>
                    <View style={{flex:4, justifyContent:'center'}}><Text style={{fontSize:16, color:'#777777'}}>Redeem Voucher</Text></View>
                    <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}><Text style={{fontSize:10, color:'#777777'}}></Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'center', padding:10, backgroundColor:'white'}}>
                    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}><FontAwesome style={{fontSize:20, color:'#777777'}} name="heart"/></View>
                    <View style={{flex:4, justifyContent:'center'}}><Text style={{fontSize:16, color:'#777777'}}>Atur Alamat Pengiriman</Text></View>
                    <View style={{flex:1,alignItems:'flex-end', justifyContent:'center'}}><Text style={{fontSize:10, color:'#777777'}}></Text></View>
                </TouchableOpacity>
                </ScrollView>

            </SafeAreaView>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(DrawerCustom)