import React, { Component } from 'react';
import { View, Image, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

class ProductCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            product:[
                {id:0, productImg:'https://cdn.elevenia.co.id/ex_t/R/200x200/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg', productName:'ERIKA TOP - Atasan Wanita Blouse Wanita', price:'79.000'},
                {id:1, productImg:'https://cdn.elevenia.co.id/ex_t/R/200x200/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg', productName:'ERIKA TOP - Atasan Wanita Blouse Wanita', price:'79.000'},
                {id:2, productImg:'https://cdn.elevenia.co.id/ex_t/R/200x200/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg', productName:'ERIKA TOP - Atasan Wanita Blouse Wanita', price:'79.000'},
                {id:3, productImg:'https://cdn.elevenia.co.id/ex_t/R/200x200/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg', productName:'ERIKA TOP - Atasan Wanita Blouse Wanita', price:'79.000'},
                {id:4, productImg:'https://cdn.elevenia.co.id/ex_t/R/200x200/1/85/1/src/g/6/8/2/0/5/5/28682055_B.jpg', productName:'ERIKA TOP - Atasan Wanita Blouse Wanita', price:'79.000'},
            ]
        }
    }
    static navigationOptions = {
        header: null
    }
    
    render(){
    const {product} = this.state
        return(
            <Container>
                <Header androidStatusBarColor="#ff8040" style={{backgroundColor : '#ff8040'}}>
                    <Left>
                        <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Icon name='ios-search' />
                        </Button>
                        <Button transparent>
                        <Icon name='ios-cart' />
                        </Button>
                        <Button transparent>
                        <Icon name='more' />
                        </Button>
                    </Right>
                </Header>

                <Content style={{ backgroundColor: '#eaeaea' }}>
                    <FlatList
                        data={product}
                        numColumns={2}
                        // keyExtractor={(item, index) => item.id.toString()}
                        renderItem={({item}) => (
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailProduct')} key={item.id} activeOpacity={0.9} style={styles.bottomItem} >
                            <View style={{flex: 1, padding: 10, backgroundColor: 'white', borderColor: '#eaeaea', borderWidth: 0.5,}}>
                                
                                <View style={{flex:7, padding: 5}}>
                                    <Image source={{uri: item.productImg}} style={{flex: 1, width: '100%', height: '100%', resizeMode: 'contain'}}/>
                                </View>
                                <View style={{justifyContent: 'center', flex:1, marginBottom: 5}}>
                                    <Text style={{fontSize: 16}} numberOfLines={2}>{item.productName}</Text>
                                </View>
                                <View style={{justifyContent: 'center', flex:1}}>
                                    <Text style={{fontSize: 14, color: 'red', fontWeight: 'bold'}}>Rp {item.price}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        )}
                    />
                </Content>
            </Container>
        );
    }
};

export default ProductCategory;

const styles = StyleSheet.create({
    bottom: {
      backgroundColor: 'white',
      marginTop: 10,
      height: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1
    },
    bottomItem: {
      width: '50%',
      height: 350,
    },
  })

