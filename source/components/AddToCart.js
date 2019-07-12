import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import NumericInput from 'react-native-numeric-input';
import {connect} from 'react-redux';

class AddToCart extends Component{
    static navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                backgroundColor : '#ff8040',
                elevation:0
            },
            headerTintColor: 'white',
            headerTitle: <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>Add To Cart</Text>
        }
    }
    componentDidMount(){
        console.warn(this.props)
    }
    render(){
        return(
            <View style={{flex:1, alignItems:'center',  backgroundColor:'#F4F4F4'}}>
                <View style={{flex:1, padding:20, justifyContent:'center', width:'100%'}}>
                    <View style={{alignItems:'center', flexDirection:'row', alignItems:'center', backgroundColor:'white', alignItems:'center', justifyContent:'center', height:'100%'}}>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{color:'#ff8040'}}>{this.props.productById.products_price}</Text>
                        </View>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <NumericInput />
                        </View>
                    </View>
                </View>
                <View style={{flex:5, width:'100%', padding:20}}>
                    <TouchableOpacity style={{backgroundColor:'#ff8040', padding:15, borderRadius:5, alignItems:'center', justifyContent:'center', width:'100%'}}>
                        <Text style={{color:'white', fontSize:18}}>Simpan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        user : state.user,
        productById : state.products.productById
    }
}

export default connect(mapStateToProps)(AddToCart)