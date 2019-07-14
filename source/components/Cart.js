import React, {Component} from 'react'
import {View, FlatList, Image, List, TextInput, TouchableOpacity, ScrollView, AsyncStorage} from 'react-native'
import { Tab, CheckBox, Header, Input,Title, Footer, TabHeading, Tabs, CardItem, Layout, Body, Text, Button, Container, Picker, Content, Form, Item, Icon, Label, Card, Right, ListItem, Left} from 'native-base';
import Address from './Address.js'
import InfoAccount from './InfoAccount'
import RoundCheckbox from 'rn-round-checkbox';
import NumericInput from 'react-native-numeric-input';
import { getAllCartItems } from '../publics/redux/actions/products'
import {connect} from 'react-redux'
import axios from 'axios'
import URL from '../publics/redux/actions/URL'

class Cart extends Component{
    state = {
      isSelected:false,
      total : 0,
      selectedCarts: [],
      change: false,
      dataCart: [],
    }

    componentDidMount(){
      
      if(this.props.user.user[0] !== undefined){
        this.props.dispatch(getAllCartItems(this.props.user.user[0]._id)).then(()=>{
          this.setState({dataCart:this.props.products.cartItem})
        }).catch(()=>{
          console.warn('server bermasalah')
        })
      }
      else{
        console.warn('props user',this.props.user.user[0])
        AsyncStorage.getItem('user').then((userData)=>{
          axios.get(`${URL}/tmpCart/users/${userData}`).then((response)=>{
            console.warn('response di cart: ',response)
            this.setState({dataCart:response.data.data.products})
          }).catch(()=>{
            console.warn('response cart tidak diterima')
          })
        })
      }
    }

    toggleCheckbox(id) {
      const changedCheckbox = this.state.dataCart.find((cb) => cb._id === id);
    
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
    
    renderElementButton(){
      if (this.state.change == true){
        return(
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity>
            <Icon style={{fontSize:22,fontWeight:'bold',color:'#ff8040'}} name='ios-close-circle-outline'/>
          </TouchableOpacity>
          <Text style={{marginLeft:'5%'}}>Hapus Semua</Text>
          </View>
        )}
      else{
        return(
          <View style={{flexDirection:'row'}}>
          <RoundCheckbox
          backgroundColor={'#ff8040'}
          size={24}
          checked={this.state.isSelected}
          onValueChange={() => this.toggleCheckboxAll()}
          >
          </RoundCheckbox>
          <Text style={{marginLeft:'5%'}}>Pilih Semua</Text>
          </View>
        )}
    }

    renderElementChange(){
      if (this.state.change == true){
        return(
          <TouchableOpacity onPress={()=> this.setState({change : !this.state.change})}>
            <Text style={{color:'#ff8040'}}>simpan</Text>
          </TouchableOpacity>
        )
      }
      else{
        return(
          <TouchableOpacity onPress={()=> this.setState({change : !this.state.change})}>
          <Text style={{color:'#ff8040'}}>ubah</Text>
         </TouchableOpacity>
        )
      }
    }

    render(){
      console.log('datacart'+this.props.products.cartItem)
        return(
          <Container>
            <ScrollView>
            <ListItem>
              <Left >
                { this.renderElementButton() }
              </Left>
              <Right>
              { this.renderElementChange() }
            </Right>
            </ListItem>
          {this.state.dataCart.map((item, index) => {
            if (item.checked == true){
              // this.state.total = this.state.total + (item.product_price * item.amount)
              this.state.total = this.state.total + item.product_price
              this.props.products.dataCheckOut.concat(this.state.dataCart[index])
            }
            if (item.checked == false){
              // this.state.total = this.state.total + (item.product_price * item.amount)
              this.props.products.dataCheckOut.filter(({_id}) => _id !== item._id)            
            }
            if (this.state.change == true){
              return(
              <ListItem>
            <TouchableOpacity>
              <Icon style={{fontSize:30,color:'#ff8040'}} name='ios-close-circle-outline' />
            </TouchableOpacity>
            <Image style={{width:100, height:100}} source={{uri:item.photo[0]}}/>
            <Body>
              <Text>{item.product_name}</Text>
              {/* <NumericInput style={{color:'grey', fontSize:15}} 
                onChange={value => item.amount= value }
                value={item.amount}/> */}
              {/* <Text style={{fontWeight:'bold'}}>Rp {item.product_price * item.amount}</Text> */}
              <Text style={{fontWeight:'bold'}}>Rp {parseInt(item.product_price)}</Text>
            </Body> 
            </ListItem>
            )}
            else{
            return (
            <ListItem>
            <RoundCheckbox
                size={24}
                backgroundColor={'#ff8040'}
                key={item._id}
                checked={item.checked}
                onValueChange={() => this.toggleCheckbox(item._id)}
            />
            <Image style={{width:100, height:100}} source={{uri:item.photo[0]}}/>
            <Body>
              <Text>{item.product_name}</Text>
              {/* <Text style={{color:'grey', fontSize:15}}>x{item.amount}</Text> */}
              {/* <Text style={{fontWeight:'bold'}}>Rp {item.amount * item.product_price}</Text> */}
              <Text style={{fontWeight:'bold'}}>Rp {item.product_price}</Text>
            </Body>
          </ListItem>)}
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

const mapStateToProps = (state) =>{
    
    return {
        products : state.products,
        user: state.user
    }
  }
  
export default connect(mapStateToProps)(Cart)