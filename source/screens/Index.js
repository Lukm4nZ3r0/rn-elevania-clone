import React, {Component} from 'react'
import {View} from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Auth from '../components/Auth'
import AddAddress from '../components/AddAddress'
import Cart from '../components/Cart'
import ChangePassword from '../components/ChangePassword'
import ChangeBio from '../components/ChangeBio'
import CheckOut from '../components/CheckOut'
import DetailProduct from '../components/DetailProduct'
import EditProfile from '../components/EditProfile'
import EditAddress from '../components/EditAddress'
import ForgotPassword from '../components/ForgotPassword'
import SplashScreen from '../components/SplashScreen'
import Header from '../components/Header'
import Profile from '../components/Profile'
import ProductCategory from '../components/ProductCategory'
import Register from '../components/Register'

import Home from '../components/Home'
import Notifications from '../components/Notifications'


const AppNavigator = createStackNavigator({
    Auth:{
        screen:Auth
    },
    ForgotPassword: {
        screen: ForgotPassword
    },
    SplashScreen:{
        screen:SplashScreen
    },
    Register:{
        screen:Register
    },
    Home:{
        screen:Home
    }
})

const HomeContainer = createAppContainer(AppNavigator)

export default HomeContainer