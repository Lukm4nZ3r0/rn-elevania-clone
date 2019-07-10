import React, {Component} from 'react'
import {View} from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Auth from '../components/Auth'
import Register from '../components/Register'

import SplashScreen from '../components/SplashScreen'

const AppNavigator = createStackNavigator({
    Auth:{
        screen:Auth
    },
    SplashScreen:{
        screen:SplashScreen
    },
    Register:{
        screen:Register
    }
})

const HomeContainer = createAppContainer(AppNavigator)

export default HomeContainer