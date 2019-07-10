import React, {Component} from 'react'
import {View} from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Auth from '../components/Auth'
import Register from '../components/Register'
import Profile from '../components/Profile'
import EditProfile from '../components/EditProfile'
import Header from '../components/Header'
import AddAddress from '../components/AddAddress'
import ChangePassword from '../components/ChangePassword'

import SplashScreen from '../components/SplashScreen'

const AppNavigator = createStackNavigator({
    Profile:{
        screen:Profile
    },
    EditProfile:{
        screen:EditProfile
    },
    AddAddress:{
        screen:AddAddress
    },
    ChangePassword:{
        screen:ChangePassword
    },
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