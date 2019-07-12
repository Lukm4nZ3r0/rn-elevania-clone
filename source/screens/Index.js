import React, {Component} from 'react'
import {View} from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Auth from '../components/Auth'
import SplashScreen from '../components/SplashScreen'
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

import ProductCategory from '../components/ProductCategory'
import DetailProduct from '../components/DetailProduct'
import SellProduct from '../components/SellProduct'
import CheckOut from '../components/CheckOut'

const AppNavigator = createStackNavigator({
    Auth:{
        screen:Auth
    },
    CheckOut:{
        screen:CheckOut
    },
    Cart:{
        screen:Cart
    },
    SellProduct:{
        screen:SellProduct
    },
    Category: {
        screen:DetailProduct
    },
    SplashScreen:{
        screen:SplashScreen
    },
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
    SplashScreen:{
        screen:SplashScreen
    },
    Register:{
        screen:Register
    }
})

const HomeContainer = createAppContainer(AppNavigator)

export default HomeContainer