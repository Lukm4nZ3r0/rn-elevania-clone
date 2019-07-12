import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Home from './Home'
import DrawerCustom from './DrawerCustom'
import SellProduct from './SellProduct'

import {
    createDrawerNavigator,
    createAppContainer,
    createStackNavigator
  } from 'react-navigation';

const homeStack = createStackNavigator({
    SellProduct:{
        screen:SellProduct
    },
    Home:{
        screen: Home
    }
})

const homeNavigator = createDrawerNavigator(
    {
        Home:{
            screen: homeStack
        }
    },
    {
        contentComponent: DrawerCustom
    }
)

const HomeScreen = createAppContainer(homeNavigator)

export default HomeScreen