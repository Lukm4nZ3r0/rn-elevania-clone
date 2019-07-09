import React, {Component} from 'react'
import {View,Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class Login extends Component {
    static navigationOptions = {
        header:null
    }
    componentDidMount(){
        // this.props.navigation.navigate('SplashScreen')
    }
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#e8eaed'}}>
                <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent: 'center', padding:15}}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}/>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:25, color:'orange', fontWeight:'bold'}}>Login</Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')} style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{color:'orange', fontSize:17, fontWeight:'300'}}>Daftar</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{width:'100%', height:'80%', padding:10}}>
                    <View style={{flex:1,backgroundColor:'white', width:'100%', alignItems:'center', justifyContent: 'center',}}>
                        <View style={{alignItems:'center', justifyContent:'center', marginBottom:25, marginTop:25}}>
                            <Text style={{fontSize:17, color:'#adb1b8', marginBottom:10}}>Login dengan :</Text>
                            <View style={{marginBottom:10,padding:13, borderRadius:40, width:70, height:70, backgroundColor:'blue', aligItems:'center', justifyContent:'center', elevation:5}}>
                                <FontAwesome style={{textAlign:'center', flex:1,fontWeight:'bold', fontSize:35, color:'white', marginTop:5}} name="facebook"/>
                            </View>
                        </View>
                        <View style={{alignItems:'center', justifyContent: 'center',width:'100%'}}>
                            <View style={{width:'100%', height:3, backgroundColor:'#e8eaed'}} />
                            <View style={{backgroundColor:'white', padding:10, position:'absolute'}}>
                                <Text style={{fontSize:15, color:'#adb1b8'}}>atau gunakan email</Text>
                            </View>
                        </View>
                        <View style={{ width:'100%', alignItems:'center', justifyContent:'center'}}>
                            <TextInput style={{width:'90%', height:60}} underlineColorAndroid="#a7a9ab" placeholder="Email" />
                            <TextInput style={{width:'90%', height:60}} underlineColorAndroid="#a7a9ab" placeholder="Password" />
                            <TouchableOpacity style={{marginTop:20,width:'90%', alignItems:'center', justifyContent: 'center', padding:10, borderRadius:5, backgroundColor:'orange'}}>
                                <Text style={{color:'white', fontSize:20}}>Login</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize:17, color:'orange', marginTop:15, marginBottom:20, fontWeight:'bold'}}>Lupa Password?</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Login