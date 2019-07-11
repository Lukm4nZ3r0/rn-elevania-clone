import React, {Component} from 'react'
import {View} from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Auth from '../components/Auth'
import Register from '../components/Register'
import Profile from '../components/Profile'
import EditProfile from '../components/EditProfile'
import Header from '../components/Header'
import AddAddress from '../components/AddAddress'
import EditAddress from '../components/EditAddress'
import ChangePassword from '../components/ChangePassword'
import ChangeBio from '../components/ChangeBio'
import Cart from '../components/Cart'
import CheckOut from '../components/CheckOut'

import SplashScreen from '../components/SplashScreen'

const AppNavigator = createStackNavigator({
    Profile:{
        screen:Profile
    },
    CheckOut:{
        screen:CheckOut
    },
    EditProfile:{
        screen:EditProfile
    },
    AddAddress:{
        screen:AddAddress
    },
    EditAddress:{
        screen:EditAddress
    },
    ChangePassword:{
        screen:ChangePassword
    },
    ChangeBio:{
        screen:ChangeBio
    },
    Cart:{
        screen:Cart
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