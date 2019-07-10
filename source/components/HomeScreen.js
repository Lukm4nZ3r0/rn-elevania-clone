import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Home from './Home'
import {
    createDrawerNavigator,
    createAppContainer,
    createStackNavigator
  } from 'react-navigation';

const homeStack = createStackNavigator({
    Home:{
        screen: Home
    }
})

const homeNavigator = createDrawerNavigator(
    {
        Home:{
            screen: homeStack
        }
    }
)

const HomeScreen = createAppContainer(homeNavigator)

export default HomeScreen