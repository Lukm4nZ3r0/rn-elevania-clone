import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Home from './Home'
import Notifications from './Notifications'
import DrawerCustom from './DrawerCustom'
import {
    createDrawerNavigator,
    createAppContainer,
    createStackNavigator
  } from 'react-navigation';

const homeStack = createStackNavigator({
    Home:{
        screen: Home
    },
    Notifications:{
        screen: Notifications
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