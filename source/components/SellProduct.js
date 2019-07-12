import React, {Component} from 'react'
import {View, FlatList, Image, List, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Tab, Header,NumberInput, Input, Left, Right, Title, TabHeading, Tabs, CardItem, Layout, Body, Text, Button, Container, Picker, Content, Form, Item, Icon, Label, ListItem} from 'native-base';
import SwitchToggle from 'react-native-switch-toggle';
import ImagePicker from 'react-native-image-picker';
import NumericInput from 'react-native-numeric-input';

class SellProduct extends Component{
    state = {
        province : '',
        city : '',
        condition:'',
        madeIn : '',
        tax:'',
        filePath: {},
      };
      
      chooseFile = () => {
        let options = {
          title: 'Pilih Gambar',
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, response => {
          if (response.didCancel) {
            alert('Batal Pilih Gambar');
          } else if (response.error) {
            alert('Pilih Gambar Error: ' + response.error);
          } else {
            let source = response;
            this.setState({
              filePath: source,
            });
          }
        });
      };

    static navigationOptions = {
        headerTitle: 'Jual Produk',
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
        // headerRight: (
        //     <ListItem>
        //         <TouchableOpacity >
        //             <Icon name='ios-search' style={{fontSize:30, textAlign: 'right', marginRight: 20, fontWeight:'bold', color: 'white'}}/>
        //         </TouchableOpacity>
        //         <TouchableOpacity>
        //             <Icon name='ios-cart' style={{fontSize:30, textAlign: 'right', color: 'white', fontWeight:'bold'}}/>
        //         </TouchableOpacity>
        //     </ListItem>
        // ),
    }

    render(){
        return(
          <Container>
            <ScrollView>
            <Form>
            <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 250, alignSelf:'center', marginBottom:'5%', marginTop:'5%', borderWidth:2, borderColor:'#ff8040', height: 250 }}
            />
            <Button
              style={{borderWidth:2, borderColor:'#ff8040',width: '90%', backgroundColor: 'white', alignSelf:'center', justifyContent:'center'}}
              onPress={this.chooseFile.bind(this)}>
            <Text style={{color:'#ff8040'}}>Pilih Gambar Produk</Text>
          </Button>
            <Item style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', width:'100%'}}>
              <Label style={{flex:1}}>Nomor Produk :</Label>
              <Input style={{flex:1}} />
            </Item>
            <Item >
              <Label>Nama Produk :</Label>
              <Input />
            </Item>
            <Item>
              <Label style={{flex:1}}>Stok :</Label>
              <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><NumericInput style={{flex:1}} /></View>
              <Text style={{flex:1}}>Buah</Text>
            </Item>
            <Item >
              <Label style={{flex:1}}>Berat  :</Label>
              <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><NumericInput /></View>
              <Text style={{flex:1}}>Kg</Text>
            </Item>
            <Item >
              <Label style={{flex:1}}>Garansi  :</Label>
              <View style={{flex:1, alignItems:'center', justifyContent:'center'}}><NumericInput /></View>
              <Text style={{flex:1}}>Tahun</Text>
            </Item>
            <Item >
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="md-arrow-dropdown"/>}
                placeholder="Kondisi Produk"
                selectedValue={this.state.condition}
                onValueChange={(itemValue) =>
                  this.setState({condition: itemValue})
                }
              >
                <Picker.Item label={'Produk Baru'} value={'Produk Baru'} />
                <Picker.Item label={'Produk Bekas'} value={'Produk Bekas'} />
              </Picker>
            </Item>
            <Item >
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="md-arrow-dropdown"/>}
                placeholder="Asal Produk"
                selectedValue={this.state.madeIn}
                onValueChange={(itemValue) =>
                  this.setState({madeIn: itemValue})
                }
              >
                <Picker.Item label={'Dalam Negeri'} value={'Dalam Negeri'} />
                <Picker.Item label={'Luar Negeri'} value={'Luar Negeri'} />
              </Picker>
            </Item>
            <Item >
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="md-arrow-dropdown"/>}
                placeholder="Pajak Produk"
                selectedValue={this.state.tax}
                onValueChange={(itemValue) =>
                  this.setState({tax: itemValue})
                }
              >
                <Picker.Item label={'Kena Pajak'} value={'Kena Pajak'} />
                <Picker.Item label={'Tanpa Pajak'} value={'Tanpa Pajak'} />
              </Picker>
            </Item>
          <Button style={{width: '90%', backgroundColor: '#ff8040', alignSelf:'center', justifyContent:'center'}}>
              <Text>Simpan</Text>
          </Button>
          </Form>
          </ScrollView>
          </Container>
        )
    }
}

export default SellProduct