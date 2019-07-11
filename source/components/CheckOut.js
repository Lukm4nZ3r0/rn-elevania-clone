import React, {Component} from 'react'
import {View, FlatList, Image, List, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Tab, CheckBox, Header, Title, Footer, TabHeading, Tabs, CardItem, Layout, Body, Text, Button, Container, Picker, Content, Form, Item, Icon, Label, Card, Right, ListItem, Left} from 'native-base';
import Address from './Address.js'
import InfoAccount from './InfoAccount'
import RoundCheckbox from 'rn-round-checkbox';
import SelectMultiple from 'react-native-select-multiple'

class CheckOut extends Component{
    
    state = {
      total : 0,
      dataCart: [
        { checked: false, id: "06", name: "Sabun" , image: "http://cdn.elevenia.co.id/g/2/3/4/0/7/3/22234073_B.jpg", amount:1, price:10000 },
        { checked: false, id: "07", name: "Susu" , image: "http://cdn.elevenia.co.id/g/2/3/4/0/7/3/22234073_B.jpg", amount:3, price:20000},
        { checked: false, id: "00", name: "Ayam" , image: "http://cdn.elevenia.co.id/g/2/3/4/0/7/3/22234073_B.jpg", amount:4, price:50000},
        { checked: false, id: "06", name: "Sabun" , image: "http://cdn.elevenia.co.id/g/2/3/4/0/7/3/22234073_B.jpg", amount:1, price:10000 },
        { checked: false, id: "07", name: "Susu" , image: "http://cdn.elevenia.co.id/g/2/3/4/0/7/3/22234073_B.jpg", amount:3, price:20000},
        { checked: false, id: "00", name: "Ayam" , image: "http://cdn.elevenia.co.id/g/2/3/4/0/7/3/22234073_B.jpg", amount:4, price:50000},
      ],
    }

    static navigationOptions = {
        headerTitle: 'Pembelian',
        headerTintColor: 'white',
        headerTitleStyle: { 
            width: '100%',
            textAlign: 'left',
            color: 'white',
            fontWeight:'bold'
        },
        headerStyle: {
            backgroundColor : '#ff8040'
        },
        headerRight: (
            <TouchableOpacity style={{justifyContent:'flex-end', right:'20%'}}>
                    <Icon name='ios-information-circle' style={{ fontSize:20, color: 'white', fontWeight:'bold'}}/>
            </TouchableOpacity>
        ),
    }
    
    render(){
        return(
          <Container>
            <CardItem header >
              <View style={{flexDirection:'row'}}>
                <Left>
                <Text style={{fontWeight:'bold'}}>Alamat</Text>
                </Left>
                <Right >
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('EditAddress')}}>
                  <Text style={{color:'#ff8040'}}>Ubah</Text>
                </TouchableOpacity>
                </Right>
              </View>
            </CardItem>
            <View>
                <View style={{marginLeft:'8%', flexDirection:'column'}}>
                <Text>jalan</Text>
                <Text>kota</Text>
                <Text>provinsi</Text>
                <Text>no telepon</Text>
                </View>
            </View>
            <CardItem header >
            <View style={{flexDirection:'row'}}>
            <Left>
            <Text style={{fontWeight:'bold'}}>Detail Pembelian</Text>
            </Left>
            </View>
            </CardItem>
            <ScrollView>
            {(this.state.dataCart).map((item, index) => {
            this.state.total = this.state.total + (item.price * item.amount)
            return (
            <ListItem>
            <Image style={{width:100, height:100}} source={{uri:item.image}}/>
            <Body>
              <Text>{item.name}</Text>
              <Text>{item.amount}</Text>
              <Text style={{fontWeight:'bold'}}>Rp {item.amount * item.price}</Text>
            </Body>
          </ListItem>)
          })}
          </ScrollView>
          <ListItem>
            <Left>
            <Text style={{fontWeight:'bold'}}>Total Pesanan</Text>
            </Left>
            <Right>
              <Text style={{color:'red',fontWeight:'bold'}}>{this.state.total}</Text>
            </Right>
          </ListItem>
          <Footer style={{backgroundColor:'white'}}>
           <Button onPress={() => {this.props.navigation.navigate('AddAddress')}} style={{width: '90%', backgroundColor: '#ff8040', justifyContent:'center'}}>
              <Text >Beli</Text>
            </Button>
          </Footer>
          </Container>
        )
    }
}

export default CheckOut