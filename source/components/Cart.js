import React, {Component} from 'react'
import {View, FlatList, Image, List, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Tab, CheckBox, Header, Title, Footer, TabHeading, Tabs, CardItem, Layout, Body, Text, Button, Container, Picker, Content, Form, Item, Icon, Label, Card, Right, ListItem, Left} from 'native-base';
import Address from './Address.js'
import InfoAccount from './InfoAccount'
import RoundCheckbox from 'rn-round-checkbox';
import SelectMultiple from 'react-native-select-multiple'

class Cart extends Component{
    state = {
      isSelected:false,
      total : 0,
      selectedCarts: [],
      dataCart: [
        { checked: false, id: "06", name: "Sabun" , image: "http://cdn.elevenia.co.id/g/2/3/4/0/7/3/22234073_B.jpg", amount:1, price:10000 },
        { checked: false, id: "07", name: "Susu" , image: "http://cdn.elevenia.co.id/g/2/3/4/0/7/3/22234073_B.jpg", amount:3, price:20000},
        { checked: false, id: "00", name: "Ayam" , image: "http://cdn.elevenia.co.id/g/2/3/4/0/7/3/22234073_B.jpg", amount:4, price:50000},
      ],
    }

    toggleCheckbox(id) {
      const changedCheckbox = this.state.dataCart.find((cb) => cb.id === id);
    
      changedCheckbox.checked = !changedCheckbox.checked;
    
      const checkboxes = Object.assign({}, this.state.checkboxes, changedCheckbox);
    
      this.setState({ checkboxes });
      this.setState({total:0})
    }

    toggleCheckboxAll() {
      this.state.dataCart.map((item, index) => {
        return( item.checked = !item.checked)
      })
      
      this.setState({isSelected: !this.state.isSelected});
      this.setState({total:0})
    }

    static navigationOptions = {
        headerTitle: 'Keranjang Belanja',
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
            <ScrollView>
            <ListItem>
              <Left>    
              <RoundCheckbox
                backgroundColor={'#ff8040'}
                size={24}
                checked={this.state.isSelected}
                onValueChange={() => this.toggleCheckboxAll()}
                />
              </Left>
            </ListItem>
          {(this.state.dataCart).map((item, index) => {
            this.state.total = this.state.total + (item.price * item.amount)
            return (
            <ListItem>
            <RoundCheckbox
                size={24}
                backgroundColor={'#ff8040'}
                key={item.id}
                checked={item.checked}
                onValueChange={() => this.toggleCheckbox(item.id)}
            />
            <Image style={{width:100, height:100}} source={{uri:item.image}}/>
            <Body>
              <Text>{item.name}</Text>
              <Text>{item.amount}</Text>
              <Text style={{fontWeight:'bold'}}>Rp {item.amount * item.price}</Text>
            </Body>
            <Right>
                <TouchableOpacity>
                  <Text style={{color:'#ff8040'}}>hapus</Text>
                </TouchableOpacity>
            </Right>
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
           <Button onPress={() => {this.props.navigation.navigate('CheckOut')}} style={{width: '90%', backgroundColor: '#ff8040', justifyContent:'center'}}>
              <Text >Beli Sekarang</Text>
            </Button>
          </Footer>
          </Container>
        )
    }
}

export default Cart