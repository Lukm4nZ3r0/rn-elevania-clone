import React, {Component} from 'react'
import {View, FlatList, Image, List, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Tab, Header, Title, TabHeading, Tabs, CardItem, Layout, Body, Text, Button, Container, Picker, Content, Form, Item, Icon, Label, ListItem} from 'native-base';
import Address from './Address.js'
import InfoAccount from './InfoAccount'
import {connect} from 'react-redux';
import { editAlamat } from '../publics/redux/actions/user';
class EditProfile extends Component{

    state = {
      alamat : ''
    }

    goCart = () => {
        const { navigation } = this.props;
        navigation.navigate('Cart')
    }
    static navigationOptions = ({ navigation }) => ({
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
        headerRight: (
            <ListItem>
                <TouchableOpacity >
                    <Icon name='ios-search' style={{fontSize:30, textAlign: 'right', marginRight: 20, fontWeight:'bold', color: 'white'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goCart} onPress={() => navigation.navigate('Cart')}>
                    <Icon name='ios-cart' style={{fontSize:30, textAlign: 'right', color: 'white', fontWeight:'bold'}}/>
                </TouchableOpacity>
            </ListItem>
        ),
    })

    
    componentWillMount(){
      this.setState({alamat: this.props.user.user[0].alamat})
    }

    editAlamat(){
      this.props.dispatch(editAlamat(this.state.alamat,  this.props.user.user[0]._id));
      this.props.navigation.navigate('Profile');
    }

    render(){
     
      
        return(
          <Container>
            <Header style={{backgroundColor:'white'}} span>
              <Body style={{alignItems:'center'}}>
                <Title style={{fontSize: 14, color:'#ff8040'}}>Informasi Anggota</Title>
                <Text style={{fontSize: 12, marginTop:'5%', fontWeight:'bold'}}>{this.props.user.user[0].name}</Text>
                <Text style={{fontSize: 12, color:'grey'}} >{this.props.user.user[0].email}</Text>
              </Body>
            </Header>
          <Tabs>
            <Tab 
              heading={ 
                <TabHeading style={{backgroundColor:'white'}}>
                  <Text style={{color:'#ff8040'}}>Alamat</Text>
                </TabHeading>}>
                <Address 
                  navigation={this.props.navigation} 
                  user={this.props.user}
                  alamat={this.state.alamat}
                  onChangeText={(value)=> this.setState({alamat: value})}
                  onPress={() => this.editAlamat()}
                />
            </Tab>
            <Tab heading={ 
              <TabHeading style={{backgroundColor:'white'}}>
                <Text style={{color:'#ff8040'}}>Informasi Akun</Text>
              </TabHeading>}>
              <InfoAccount navigation={this.props.navigation}/>
            </Tab>
          </Tabs>
        </Container>
        )
    }
}

const mapStateToProps = (state) =>{
  return {
      user : state.user
  }
}

export default connect(mapStateToProps)(EditProfile)