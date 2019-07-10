import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Dimensions, TextInput} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const {height, width} = Dimensions.get('window')

class Home extends Component{
    constructor(props){
        super(props)
    }
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: (
                <TouchableOpacity style={{marginLeft:15}}>
                    <FontAwesome style={{fontSize:25}} name="bars" />
                </TouchableOpacity>
            ),
            headerTitle: (
                <View style={{ padding:10, flex:1, flexDirection:'row' }}>
                    <View style={{flex:6, flexDirection:'row', backgroundColor:'orange', opacity:0.5}}>
                        <FontAwesome style={{flex:1}} name="search"/>
                        <TextInput style={{flex:1}} placeholder="Cari di elevania"/>
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <FontAwesome name="cart"/>
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <FontAwesome name="bell"/>
                    </View>
                </View>
            ),
        }
    };    
    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.props.logoutEvent}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Home