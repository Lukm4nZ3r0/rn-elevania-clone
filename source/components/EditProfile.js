import React, {Component} from 'react'
import {View, FlatList, Image, List, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Tab, Header, Title, TabHeading, Tabs, CardItem, Layout, Body, Text, Button, Container, Picker, Content, Form, Item, Icon, Label, ListItem} from 'native-base';
import Address from './Address.js'
import InfoAccount from './InfoAccount'


class EditProfile extends Component{
    goCart = () => {
        const { navigation } = this.props;
        navigation.navigate('Cart')
    }
    static navigationOptions = {
        headerTitle: 'Ubah Akun',
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
        // headerLeft:(
        //     <TouchableOpacity style={{marginLeft: 20}}>
        //         <Icon name='ios-menu' style={{textAlign: 'left', fontSize:30, fontWeight:'bold', color: 'white'}}/>
        //     </TouchableOpacity>
        // ),
        headerRight: (
            <ListItem>
                <TouchableOpacity >
                    <Icon name='ios-search' style={{fontSize:30, textAlign: 'right', marginRight: 20, fontWeight:'bold', color: 'white'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goCart}>
                    <Icon name='ios-cart' style={{fontSize:30, textAlign: 'right', color: 'white', fontWeight:'bold'}}/>
                </TouchableOpacity>
            </ListItem>
        ),
    }

    render(){
        return(
          <Container>
            <Header style={{backgroundColor:'white'}} span>
              <Body style={{alignItems:'center'}}>
                <Title style={{fontSize: 14, color:'#ff8040'}}>Informasi Anggota</Title>
                <Text style={{fontSize: 12, marginTop:'5%', fontWeight:'bold'}}>Haji Dito</Text>
                <Text style={{fontSize: 12, color:'grey'}} >ditoarya@gmail.com</Text>
              </Body>
            </Header>
          <Tabs>
            <Tab 
              heading={ 
                <TabHeading style={{backgroundColor:'white'}}>
                  <Text style={{color:'#ff8040'}}>Alamat</Text>
                </TabHeading>}>
                <Address/>
            </Tab>
            <Tab heading={ 
              <TabHeading style={{backgroundColor:'white'}}>
                <Text style={{color:'#ff8040'}}>Informasi Akun</Text>
              </TabHeading>}>
              <InfoAccount/>
            </Tab>
          </Tabs>
        </Container>
        )
    }
}

export default EditProfile