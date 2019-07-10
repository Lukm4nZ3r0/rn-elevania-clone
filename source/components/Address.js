import React, { Component } from 'react';
import { Container, Header, View, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class Address extends Component {
  render() {
    return (
      <Container>
        <Content>
        </Content>
        <Footer style={{backgroundColor:'white'}}>
           <Button onPress={() => {this.props.navigation.navigate('AddAddress')}} style={{width: '90%', backgroundColor: '#ff8040', justifyContent:'center'}}>
              <Text >Tambah Alamat</Text>
            </Button>
        </Footer>
      </Container>
    );
  }
}

export default withNavigation(Address)