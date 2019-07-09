import React, {Component} from 'react'
import {View} from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '../components/Login'
import Register from '../components/Register'

import SplashScreen from '../components/SplashScreen'

const AppNavigator = createStackNavigator({
    Login:{
        screen:Login
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