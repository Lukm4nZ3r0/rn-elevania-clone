import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Home from './Home'
import Profile from './Profile'

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
    Profile:{
        screen: Profile
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