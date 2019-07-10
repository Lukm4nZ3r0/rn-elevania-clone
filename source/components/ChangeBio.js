import React, {Component} from 'react'
import {View, FlatList, Image, List, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Tab, Header, Input, Left, Right, Title, Footer, TabHeading, Tabs, CardItem, Layout, Body, Text, Button, Container, Picker, Content, Form, Item, Icon, Label, ListItem} from 'native-base';
import SwitchToggle from 'react-native-switch-toggle';

class ChangePassword extends Component{
    
    static navigationOptions = {
        headerTitle: 'Ubah Password',
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
            <ListItem>
                <TouchableOpacity >
                    <Icon name='ios-search' style={{fontSize:30, textAlign: 'right', marginRight: 20, fontWeight:'bold', color: 'white'}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name='ios-cart' style={{fontSize:30, textAlign: 'right', color: 'white', fontWeight:'bold'}}/>
                </TouchableOpacity>
            </ListItem>
        ),
    }
    
    render(){
        return(
          <Container>
            <Form>
            <Item floatingLabel>
              <Label>Nomor Ponsel</Label>
                <TextInput style={{flex:1, width:'100%'}} placeholder="08XX"/>
                <Text style={{flex:1, textAlign:'center'}}>-</Text>
                <TextInput style={{flex:5, width:'100%'}} placeholder="Nomor Ponsel"/>
            </Item>
            <Item floatingLabel>
              <Label>Password Baru</Label>
              <Input secureTextEntry/>
            </Item>
            <Item floatingLabel >
              <Label>Konfirm Password Baru</Label>
              <Input secureTextEntry/>
            </Item>
            </Form>
            <Item>
              <Text style={{color:'grey', fontSize:12, padding:12}}>*Password harus terdiri dari 6 karakter atau lebih</Text>
            </Item>
            <Footer style={{backgroundColor:'white'}}>
            <Button style={{width: '90%', backgroundColor: '#ff8040', alignSelf:'center', justifyContent:'center'}}>
              <Text>Konfirmasi</Text>
            </Button>
            </Footer>
        </Container>
        )
    }
}

export default ChangePassword